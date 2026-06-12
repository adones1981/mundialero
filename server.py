import http.server
import socketserver
import json
import os

PORT = 3000

class WorldCupHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Disable caching for APIs
        if self.path.startswith('/api/'):
            self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        super().end_headers()

    def do_GET(self):
        if self.path == '/api/worldcups':
            try:
                with open('worldcups.json', 'r', encoding='utf-8') as f:
                    data = json.load(f)
                self.send_response(200)
                self.send_header('Content-Type', 'application/json; charset=utf-8')
                self.end_headers()
                self.wfile.write(json.dumps(data, ensure_ascii=False).encode('utf-8'))
            except Exception as e:
                self.send_error(500, f"Error de lectura: {str(e)}")
        else:
            # Check if file exists, if not serve index.html (client-side routing fallback)
            path = self.translate_path(self.path)
            if not os.path.exists(path) or os.path.isdir(path):
                self.path = '/index.html'
            super().do_GET()

    def do_POST(self):
        if self.path == '/api/login':
            try:
                content_length = int(self.headers['Content-Length'])
                post_data = self.rfile.read(content_length)
                credentials = json.loads(post_data.decode('utf-8'))
                
                username = credentials.get('username')
                password = credentials.get('password')
                
                if username == 'admin' and password == 'copa2026':
                    self.send_response(200)
                    self.send_header('Content-Type', 'application/json; charset=utf-8')
                    self.end_headers()
                    self.wfile.write(json.dumps({"success": True, "token": "fifa-admin-token-2026"}, ensure_ascii=False).encode('utf-8'))
                else:
                    self.send_response(401)
                    self.send_header('Content-Type', 'application/json; charset=utf-8')
                    self.end_headers()
                    self.wfile.write(json.dumps({"error": "Credenciales inválidas."}, ensure_ascii=False).encode('utf-8'))
            except Exception as e:
                self.send_response(500)
                self.send_header('Content-Type', 'application/json; charset=utf-8')
                self.end_headers()
                self.wfile.write(json.dumps({"error": f"Error de servidor: {str(e)}"}, ensure_ascii=False).encode('utf-8'))
        elif self.path == '/api/worldcups/save':
            try:
                # Check Auth Token
                token = self.headers.get('Authorization', '')
                if token != 'Bearer fifa-admin-token-2026':
                    self.send_response(401)
                    self.send_header('Content-Type', 'application/json; charset=utf-8')
                    self.end_headers()
                    self.wfile.write(json.dumps({"error": "No autorizado. Inicie sesión nuevamente."}, ensure_ascii=False).encode('utf-8'))
                    return

                content_length = int(self.headers['Content-Length'])
                post_data = self.rfile.read(content_length)
                updated_data = json.loads(post_data.decode('utf-8'))
                
                if not isinstance(updated_data, list):
                    self.send_response(400)
                    self.send_header('Content-Type', 'application/json; charset=utf-8')
                    self.end_headers()
                    self.wfile.write(json.dumps({"error": "Los datos deben ser un arreglo."}, ensure_ascii=False).encode('utf-8'))
                    return
                
                with open('worldcups.json', 'w', encoding='utf-8') as f:
                    json.dump(updated_data, f, ensure_ascii=False, indent=2)
                
                self.send_response(200)
                self.send_header('Content-Type', 'application/json; charset=utf-8')
                self.end_headers()
                self.wfile.write(json.dumps({"success": True, "message": "Base de datos de mundiales actualizada con éxito."}, ensure_ascii=False).encode('utf-8'))
            except Exception as e:
                self.send_response(500)
                self.send_header('Content-Type', 'application/json; charset=utf-8')
                self.end_headers()
                self.wfile.write(json.dumps({"error": f"Error de escritura: {str(e)}"}, ensure_ascii=False).encode('utf-8'))
        else:
            self.send_error(404, "Ruta no encontrada")

if __name__ == '__main__':
    # Change working directory to the script's directory
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    # Avoid "Address already in use" errors by setting reuse_address
    socketserver.ThreadingTCPServer.allow_reuse_address = True
    with socketserver.ThreadingTCPServer(("", PORT), WorldCupHTTPRequestHandler) as httpd:
        print(f"=== ESTADIO VIRTUAL INICIADO (PYTHON) ===")
        print(f"Servidor de Mundial Stats corriendo en http://localhost:{PORT}")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServidor detenido.")
