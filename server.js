const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: '10mb' }));
app.use(express.static(path.join(__dirname)));

const dataPath = path.join(__dirname, 'worldcups.json');

// API para obtener todos los mundiales
app.get('/api/worldcups', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            console.error("Error leyendo archivo JSON:", err);
            return res.status(500).json({ error: "No se pudo leer la base de datos." });
        }
        try {
            res.json(JSON.parse(data));
        } catch (e) {
            res.status(500).json({ error: "Error de formato en la base de datos." });
        }
    });
});

// API para inicio de sesión en el Panel de Control
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'copa2026') {
        res.json({ success: true, token: "fifa-admin-token-2026" });
    } else {
        res.status(401).json({ error: "Credenciales inválidas." });
    }
});

// API para guardar los mundiales actualizados
app.post('/api/worldcups/save', (req, res) => {
    // Validar token de autenticación
    const authHeader = req.headers['authorization'];
    if (authHeader !== 'Bearer fifa-admin-token-2026') {
        return res.status(401).json({ error: "No autorizado. Inicie sesión nuevamente." });
    }

    const updatedData = req.body;
    if (!Array.isArray(updatedData)) {
        return res.status(400).json({ error: "Los datos enviados deben ser un arreglo de mundiales." });
    }
    
    fs.writeFile(dataPath, JSON.stringify(updatedData, null, 2), 'utf8', (err) => {
        if (err) {
            console.error("Error escribiendo archivo JSON:", err);
            return res.status(500).json({ error: "No se pudo guardar la información en la base de datos." });
        }
        res.json({ success: true, message: "Base de datos de mundiales actualizada con éxito." });
    });
});

// Servir la página principal index.html para cualquier otra ruta
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`=== ESTADIO VIRTUAL INICIADO ===`);
    console.log(`Servidor de Mundial Stats corriendo en http://localhost:${PORT}`);
});
