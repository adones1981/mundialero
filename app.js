/* ==========================================================================
   DATO DE INICIALIZACIÓN OFICIAL - FIFA WORLD CUP 2026
   ========================================================================== */
window.onerror = function(message, source, lineno, colno, error) {
  document.body.innerHTML += '<div style="color:red;font-size:20px;padding:20px;z-index:9999;position:relative;background:white;">Error: ' + message + ' at ' + source + ':' + lineno + ':' + colno + '</div>';
};

const FIFA_DATA = {
  // 48 Selecciones Oficiales
  teams: {
    "Chequia": { flag: "cz", group: "A", colors: ["#EEEEEE", "#333333"] },
    "Corea del Sur": { flag: "kr", group: "A", colors: ["#C60C30", "#003478"] },
    "México": { flag: "mx", group: "A", colors: ["#006847", "#FFFFFF"] },
    "Sudáfrica": { flag: "za", group: "A", colors: ["#EEEEEE", "#333333"] },
    "Bosnia y Herzegovina": { flag: "ba", group: "B", colors: ["#EEEEEE", "#333333"] },
    "Canadá": { flag: "ca", group: "B", colors: ["#EEEEEE", "#333333"] },
    "Catar": { flag: "un", group: "B", colors: ["#ffffff", "#000000"] },
    "Suiza": { flag: "ch", group: "B", colors: ["#EEEEEE", "#333333"] },
    "Brasil": { flag: "br", group: "C", colors: ["#FFDF00", "#009B3A"] },
    "Escocia": { flag: "gb-sct", group: "C", colors: ["#EEEEEE", "#333333"] },
    "Haití": { flag: "ht", group: "C", colors: ["#EEEEEE", "#333333"] },
    "Marruecos": { flag: "ma", group: "C", colors: ["#EEEEEE", "#333333"] },
    "Australia": { flag: "au", group: "D", colors: ["#EEEEEE", "#333333"] },
    "Estados Unidos": { flag: "us", group: "D", colors: ["#FFFFFF", "#002868"] },
    "Paraguay": { flag: "py", group: "D", colors: ["#EEEEEE", "#333333"] },
    "Turquía": { flag: "tr", group: "D", colors: ["#EEEEEE", "#333333"] },
    "Alemania": { flag: "de", group: "E", colors: ["#FFFFFF", "#000000"] },
    "Costa de Marfil": { flag: "ci", group: "E", colors: ["#EEEEEE", "#333333"] },
    "Curazao": { flag: "cw", group: "E", colors: ["#EEEEEE", "#333333"] },
    "Ecuador": { flag: "ec", group: "E", colors: ["#EEEEEE", "#333333"] },
    "Japón": { flag: "jp", group: "F", colors: ["#000555", "#FFFFFF"] },
    "Países Bajos": { flag: "nl", group: "F", colors: ["#F36C21", "#FFFFFF"] },
    "Suecia": { flag: "se", group: "F", colors: ["#EEEEEE", "#333333"] },
    "Túnez": { flag: "tn", group: "F", colors: ["#EEEEEE", "#333333"] },
    "Bélgica": { flag: "be", group: "G", colors: ["#E30613", "#000000"] },
    "Egipto": { flag: "eg", group: "G", colors: ["#EEEEEE", "#333333"] },
    "Irán": { flag: "ir", group: "G", colors: ["#EEEEEE", "#333333"] },
    "Nueva Zelanda": { flag: "nz", group: "G", colors: ["#EEEEEE", "#333333"] },
    "Arabia Saudita": { flag: "sa", group: "H", colors: ["#EEEEEE", "#333333"] },
    "Cabo Verde": { flag: "cv", group: "H", colors: ["#EEEEEE", "#333333"] },
    "España": { flag: "es", group: "H", colors: ["#C60B1E", "#000033"] },
    "Uruguay": { flag: "uy", group: "H", colors: ["#0038A8", "#000000"] },
    "Francia": { flag: "fr", group: "I", colors: ["#002395", "#FFFFFF"] },
    "Irak": { flag: "iq", group: "I", colors: ["#EEEEEE", "#333333"] },
    "Noruega": { flag: "no", group: "I", colors: ["#EEEEEE", "#333333"] },
    "Senegal": { flag: "sn", group: "I", colors: ["#EEEEEE", "#333333"] },
    "Argelia": { flag: "dz", group: "J", colors: ["#EEEEEE", "#333333"] },
    "Argentina": { flag: "ar", group: "J", colors: ["#75AADB", "#FFFFFF"] },
    "Austria": { flag: "at", group: "J", colors: ["#EEEEEE", "#333333"] },
    "Jordania": { flag: "jo", group: "J", colors: ["#EEEEEE", "#333333"] },
    "Colombia": { flag: "co", group: "K", colors: ["#FCD116", "#003893"] },
    "Portugal": { flag: "pt", group: "K", colors: ["#FF0000", "#006600"] },
    "RD Congo": { flag: "cd", group: "K", colors: ["#EEEEEE", "#333333"] },
    "Uzbekistán": { flag: "uz", group: "K", colors: ["#EEEEEE", "#333333"] },
    "Croacia": { flag: "hr", group: "L", colors: ["#FFFFFF", "#FFFFFF"] },
    "Ghana": { flag: "gh", group: "L", colors: ["#EEEEEE", "#333333"] },
    "Inglaterra": { flag: "gb-eng", group: "L", colors: ["#FFFFFF", "#000040"] },
    "Panamá": { flag: "pa", group: "L", colors: ["#EEEEEE", "#333333"] }
  },

  // Alineaciones Oficiales de Partidos Importantes
  rosters: {
    "México": [
      { num: 13, name: "Ochoa", pos: "GK" },
      { num: 2, name: "Sánchez", pos: "DEF" },
      { num: 3, name: "Montes", pos: "DEF" },
      { num: 5, name: "Vásquez", pos: "DEF" },
      { num: 23, name: "Gallardo", pos: "DEF" },
      { num: 4, name: "Fidalgo", pos: "MID" },
      { num: 18, name: "L. Chávez", pos: "MID" },
      { num: 7, name: "Romo", pos: "MID" },
      { num: 10, name: "Vega", pos: "FWD" },
      { num: 9, name: "Giménez", pos: "FWD" },
      { num: 22, name: "R. Alvarado", pos: "FWD" }
    ],
    "Sudáfrica": [
      { num: 1, name: "Williams", pos: "GK" },
      { num: 20, name: "Mudau", pos: "DEF" },
      { num: 18, name: "Mvala", pos: "DEF" },
      { num: 14, name: "Kekana", pos: "DEF" },
      { num: 6, name: "Modiba", pos: "DEF" },
      { num: 4, name: "Mokoena", pos: "MID" },
      { num: 15, name: "Sithole", pos: "MID" },
      { num: 11, name: "Zwane", pos: "MID" },
      { num: 23, name: "Morena", pos: "FWD" },
      { num: 10, name: "Tau", pos: "FWD" },
      { num: 9, name: "Makgopa", pos: "FWD" }
    ],
    "Canadáá": [
      { num: 1, name: "Crépeau", pos: "GK" },
      { num: 2, name: "Johnston", pos: "DEF" },
      { num: 15, name: "Bombito", pos: "DEF" },
      { num: 4, name: "Miller", pos: "DEF" },
      { num: 19, name: "Davies", pos: "DEF" },
      { num: 7, name: "Eustáquio", pos: "MID" },
      { num: 8, name: "Koné", pos: "MID" },
      { num: 10, name: "Osorio", pos: "MID" },
      { num: 14, name: "Shaffelburg", pos: "FWD" },
      { num: 20, name: "David", pos: "FWD" },
      { num: 9, name: "Larin", pos: "FWD" }
    ],
    "Bosnia y Herzegovina": [
      { num: 12, name: "Vasilj", pos: "GK" },
      { num: 3, name: "Hadžikadunić", pos: "DEF" },
      { num: 16, name: "Ahmedhodžić", pos: "DEF" },
      { num: 5, name: "Kolašinac", pos: "DEF" },
      { num: 2, name: "Mujakić", pos: "DEF" },
      { num: 8, name: "Tahirović", pos: "MID" },
      { num: 13, name: "Cimirot", pos: "MID" },
      { num: 10, name: "Hajradinović", pos: "MID" },
      { num: 7, name: "Rahmanović", pos: "FWD" },
      { num: 11, name: "Džeko", pos: "FWD" },
      { num: 9, name: "Demirović", pos: "FWD" }
    ],
    "Alemania": [
      { num: 1, name: "Neuer", pos: "GK" },
      { num: 6, name: "Kimmich", pos: "DEF" },
      { num: 4, name: "Tah", pos: "DEF" },
      { num: 2, name: "Rüdiger", pos: "DEF" },
      { num: 3, name: "Mittelstädt", pos: "DEF" },
      { num: 23, name: "Andrich", pos: "MID" },
      { num: 8, name: "Groß", pos: "MID" },
      { num: 10, name: "Musiala", pos: "MID" },
      { num: 17, name: "Wirtz", pos: "FWD" },
      { num: 9, name: "Füllkrug", pos: "FWD" },
      { num: 7, name: "Havertz", pos: "FWD" }
    ],
    "Curazao": [
      { num: 1, name: "Room", pos: "GK" },
      { num: 2, name: "Floranus", pos: "DEF" },
      { num: 3, name: "Martina", pos: "DEF" },
      { num: 4, name: "Gaari", pos: "DEF" },
      { num: 5, name: "Martina", pos: "DEF" },
      { num: 6, name: "Anita", pos: "MID" },
      { num: 10, name: "Bacuna", pos: "MID" },
      { num: 8, name: "Bacuna", pos: "MID" },
      { num: 7, name: "Margaritha", pos: "FWD" },
      { num: 9, name: "Janga", pos: "FWD" },
      { num: 11, name: "Gorré", pos: "FWD" }
    ],
    "Bélgica": [
      { num: 1, name: "Casteels", pos: "GK" },
      { num: 21, name: "Castagne", pos: "DEF" },
      { num: 4, name: "Faes", pos: "DEF" },
      { num: 2, name: "Debast", pos: "DEF" },
      { num: 3, name: "Theate", pos: "DEF" },
      { num: 8, name: "Tielemans", pos: "MID" },
      { num: 18, name: "Onana", pos: "MID" },
      { num: 7, name: "De Bruyne", pos: "MID" },
      { num: 11, name: "Doku", pos: "FWD" },
      { num: 10, name: "Lukaku", pos: "FWD" },
      { num: 9, name: "Trossard", pos: "FWD" }
    ],
    "Egipto": [
      { num: 1, name: "El Shenawy", pos: "GK" },
      { num: 3, name: "Hany", pos: "DEF" },
      { num: 24, name: "Abdelmonem", pos: "DEF" },
      { num: 6, name: "Hegazi", pos: "DEF" },
      { num: 12, name: "Hamdi", pos: "DEF" },
      { num: 17, name: "Elneny", pos: "MID" },
      { num: 5, name: "Fathi", pos: "MID" },
      { num: 25, name: "Zizo", pos: "MID" },
      { num: 10, name: "Salah", pos: "FWD" },
      { num: 19, name: "Mohamed", pos: "FWD" },
      { num: 7, name: "Trezeguet", pos: "FWD" }
    ],
    "España": [
      { num: 23, name: "Simón", pos: "GK" },
      { num: 5, name: "Cubarsí", pos: "DEF" },
      { num: 3, name: "Le Normand", pos: "DEF" },
      { num: 14, name: "Laporte", pos: "DEF" },
      { num: 24, name: "Cucurella", pos: "DEF" },
      { num: 16, name: "Rodri", pos: "MID" },
      { num: 8, name: "Fabián", pos: "MID" },
      { num: 26, name: "Pedri", pos: "MID" },
      { num: 19, name: "Yamal", pos: "FWD" },
      { num: 7, name: "Dani Olmo", pos: "FWD" },
      { num: 17, name: "N. Williams", pos: "FWD" }
    ],
    "Cabo Verde": [
      { num: 1, name: "Vozinha", pos: "GK" },
      { num: 4, name: "Lopes", pos: "DEF" },
      { num: 5, name: "Costa", pos: "DEF" },
      { num: 3, name: "Borges", pos: "DEF" },
      { num: 2, name: "Stopira", pos: "DEF" },
      { num: 6, name: "Andrade", pos: "MID" },
      { num: 8, name: "João Paulo", pos: "MID" },
      { num: 10, name: "Monteiro", pos: "MID" },
      { num: 7, name: "Mendes", pos: "FWD" },
      { num: 9, name: "Bebé", pos: "FWD" },
      { num: 11, name: "Rodrigues", pos: "FWD" }
    ],
    "Uruguay": [
      { num: 1, name: "Rochet", pos: "GK" },
      { num: 4, name: "Araújo", pos: "DEF" },
      { num: 2, name: "Giménez", pos: "DEF" },
      { num: 16, name: "Olivera", pos: "DEF" },
      { num: 17, name: "Viña", pos: "DEF" },
      { num: 15, name: "Valverde", pos: "MID" },
      { num: 5, name: "Ugarte", pos: "MID" },
      { num: 20, name: "M. Araújo", pos: "MID" },
      { num: 11, name: "Pellistri", pos: "FWD" },
      { num: 19, name: "Núñez", pos: "FWD" },
      { num: 10, name: "Arrascaeta", pos: "FWD" }
    ],
    "Estados Unidos": [
      { num: 1, name: "Turner", pos: "GK" },
      { num: 2, name: "Dest", pos: "DEF" },
      { num: 3, name: "Richards", pos: "DEF" },
      { num: 13, name: "Ream", pos: "DEF" },
      { num: 5, name: "Robinson", pos: "DEF" },
      { num: 4, name: "Adams", pos: "MID" },
      { num: 8, name: "McKennie", pos: "MID" },
      { num: 6, name: "Musah", pos: "MID" },
      { num: 21, name: "Weah", pos: "FWD" },
      { num: 9, name: "Balogun", pos: "FWD" },
      { num: 10, name: "Pulisic", pos: "FWD" }
    ],
    "Argentina": [
      { num: 23, name: "E. Martínez", pos: "GK" },
      { num: 26, name: "Molina", pos: "DEF" },
      { num: 13, name: "Romero", pos: "DEF" },
      { num: 19, name: "Otamendi", pos: "DEF" },
      { num: 3, name: "Tagliafico", pos: "DEF" },
      { num: 7, name: "De Paul", pos: "MID" },
      { num: 24, name: "Enzo F.", pos: "MID" },
      { num: 20, name: "Mac Allister", pos: "MID" },
      { num: 10, name: "Messi", pos: "FWD" },
      { num: 9, name: "Álvarez", pos: "FWD" },
      { num: 22, name: "L. Martínez", pos: "FWD" }
    ],
    "Francia": [
      { num: 16, name: "Maignan", pos: "GK" },
      { num: 5, name: "Koundé", pos: "DEF" },
      { num: 4, name: "Upamecano", pos: "DEF" },
      { num: 17, name: "Saliba", pos: "DEF" },
      { num: 22, name: "T. Hernández", pos: "DEF" },
      { num: 8, name: "Tchouaméni", pos: "MID" },
      { num: 14, name: "Rabiot", pos: "MID" },
      { num: 6, name: "Camavinga", pos: "MID" },
      { num: 11, name: "Dembélé", pos: "FWD" },
      { num: 10, name: "Mbappé", pos: "FWD" },
      { num: 15, name: "Thuram", pos: "FWD" }
    ],
    "Brasil": [
      { num: 1, name: "Alisson", pos: "GK" },
      { num: 2, name: "Danilo", pos: "DEF" },
      { num: 3, name: "Marquinhos", pos: "DEF" },
      { num: 4, name: "Bremer", pos: "DEF" },
      { num: 6, name: "Alex Sandro", pos: "DEF" },
      { num: 5, name: "Guimarães", pos: "MID" },
      { num: 15, name: "Casemiro", pos: "MID" },
      { num: 8, name: "Paquetá", pos: "MID" },
      { num: 7, name: "Raphinha", pos: "FWD" },
      { num: 9, name: "Endrick", pos: "FWD" },
      { num: 11, name: "Vinícius Jr", pos: "FWD" }
    ],
    "Portugal": [
      { num: 1, name: "Diogo Costa", pos: "GK" },
      { num: 20, name: "Cancelo", pos: "DEF" },
      { num: 4, name: "Rúben Dias", pos: "DEF" },
      { num: 3, name: "N. Mendes", pos: "DEF" },
      { num: 5, name: "Dalot", pos: "DEF" },
      { num: 6, name: "Palhinha", pos: "MID" },
      { num: 8, name: "B. Fernandes", pos: "MID" },
      { num: 21, name: "Vitinha", pos: "MID" },
      { num: 10, name: "B. Silva", pos: "FWD" },
      { num: 7, name: "Ronaldo", pos: "FWD" },
      { num: 17, name: "R. Leão", pos: "FWD" }
    ],
    "Inglaterra": [
      { num: 1, name: "Pickford", pos: "GK" },
      { num: 2, name: "Walker", pos: "DEF" },
      { num: 5, name: "Stones", pos: "DEF" },
      { num: 6, name: "Guéhi", pos: "DEF" },
      { num: 12, name: "Trippier", pos: "DEF" },
      { num: 26, name: "Mainoo", pos: "MID" },
      { num: 4, name: "Rice", pos: "MID" },
      { num: 10, name: "Bellingham", pos: "MID" },
      { num: 7, name: "Saka", pos: "FWD" },
      { num: 9, name: "Kane", pos: "FWD" },
      { num: 11, name: "Foden", pos: "FWD" }
    ],
    "Croacia": [
      { num: 1, name: "Livaković", pos: "GK" },
      { num: 2, name: "Stanišić", pos: "DEF" },
      { num: 6, name: "Šutalo", pos: "DEF" },
      { num: 4, name: "Gvardiol", pos: "DEF" },
      { num: 17, name: "Erlić", pos: "DEF" },
      { num: 10, name: "Modrić", pos: "MID" },
      { num: 8, name: "Kovačić", pos: "MID" },
      { num: 15, name: "M. Pašalić", pos: "MID" },
      { num: 14, name: "Perišić", pos: "FWD" },
      { num: 9, name: "Kramarić", pos: "FWD" },
      { num: 16, name: "Budimir", pos: "FWD" }
    ],
    "República de Corea": [
      { num: 21, name: "H.W. Jo", pos: "GK" },
      { num: 22, name: "W. Seol", pos: "DEF" },
      { num: 4, name: "M.J. Kim", pos: "DEF" },
      { num: 19, name: "Y.G. Kim", pos: "DEF" },
      { num: 3, name: "J.S. Kim", pos: "DEF" },
      { num: 6, name: "I.B. Hwang", pos: "MID" },
      { num: 5, name: "Y.W. Park", pos: "MID" },
      { num: 10, name: "J.S. Lee", pos: "MID" },
      { num: 18, name: "K.I. Lee", pos: "FWD" },
      { num: 9, name: "G.S. Cho", pos: "FWD" },
      { num: 7, name: "H.M. Son", pos: "FWD" }
    ],
    "Chequia": [
      { num: 1, name: "Staněk", pos: "GK" },
      { num: 5, name: "Coufal", pos: "DEF" },
      { num: 3, name: "Holeš", pos: "DEF" },
      { num: 4, name: "Hranáč", pos: "DEF" },
      { num: 18, name: "Krejčí", pos: "DEF" },
      { num: 15, name: "Douděra", pos: "DEF" },
      { num: 22, name: "Souček", pos: "MID" },
      { num: 14, name: "Provod", pos: "MID" },
      { num: 21, name: "Sadílek", pos: "MID" },
      { num: 10, name: "Schick", pos: "FWD" },
      { num: 20, name: "Hložek", pos: "FWD" }
    ],
    "Paraguay": [
      { num: 1, name: "Coronel", pos: "GK" },
      { num: 2, name: "Velázquez", pos: "DEF" },
      { num: 4, name: "Balbuena", pos: "DEF" },
      { num: 3, name: "Alderete", pos: "DEF" },
      { num: 6, name: "Alonso", pos: "DEF" },
      { num: 8, name: "Villasanti", pos: "MID" },
      { num: 14, name: "Cubas", pos: "MID" },
      { num: 15, name: "Gómez", pos: "MID" },
      { num: 10, name: "Almirón", pos: "FWD" },
      { num: 19, name: "Enciso", pos: "FWD" },
      { num: 24, name: "Sosa", pos: "FWD" }
    ],
    "Catar": [
      { num: 22, name: "Barsham", pos: "GK" },
      { num: 2, name: "Ro-Ro", pos: "DEF" },
      { num: 15, name: "Al-Rawi", pos: "DEF" },
      { num: 5, name: "Salman", pos: "DEF" },
      { num: 16, name: "Khoukhi", pos: "DEF" },
      { num: 4, name: "Waad", pos: "DEF" },
      { num: 6, name: "Hatem", pos: "MID" },
      { num: 23, name: "Madibo", pos: "MID" },
      { num: 10, name: "Al-Haydos", pos: "MID" },
      { num: 11, name: "Afif", pos: "FWD" },
      { num: 19, name: "Almoez Ali", pos: "FWD" }
    ],
    "Suiza": [
      { num: 1, name: "Sommer", pos: "GK" },
      { num: 3, name: "Widmer", pos: "DEF" },
      { num: 5, name: "Akanji", pos: "DEF" },
      { num: 22, name: "Schär", pos: "DEF" },
      { num: 13, name: "Rodriguez", pos: "DEF" },
      { num: 8, name: "Freuler", pos: "MID" },
      { num: 10, name: "Xhaka", pos: "MID" },
      { num: 6, name: "Zakaria", pos: "MID" },
      { num: 23, name: "Shaqiri", pos: "FWD" },
      { num: 7, name: "Embolo", pos: "FWD" },
      { num: 17, name: "Vargas", pos: "FWD" }
    ],
    "Marruecos": [
      { num: 1, name: "Bounou", pos: "GK" },
      { num: 2, name: "Hakimi", pos: "DEF" },
      { num: 5, name: "Aguerd", pos: "DEF" },
      { num: 6, name: "Saïss", pos: "DEF" },
      { num: 3, name: "Mazraoui", pos: "DEF" },
      { num: 4, name: "Amrabat", pos: "MID" },
      { num: 8, name: "Ounahi", pos: "MID" },
      { num: 15, name: "Amallah", pos: "MID" },
      { num: 7, name: "Ziyech", pos: "FWD" },
      { num: 19, name: "En-Nesyri", pos: "FWD" },
      { num: 17, name: "Boufal", pos: "FWD" }
    ],
    "Escocia": [
      { num: 1, name: "Gunn", pos: "GK" },
      { num: 2, name: "Ralston", pos: "DEF" },
      { num: 15, name: "Porteous", pos: "DEF" },
      { num: 13, name: "Hendry", pos: "DEF" },
      { num: 6, name: "Tierney", pos: "DEF" },
      { num: 3, name: "Robertson", pos: "DEF" },
      { num: 4, name: "McTominay", pos: "MID" },
      { num: 14, name: "Gilmour", pos: "MID" },
      { num: 8, name: "McGregor", pos: "MID" },
      { num: 7, name: "McGinn", pos: "MID" },
      { num: 10, name: "Adams", pos: "FWD" }
    ],
    "Australia": [
      { num: 1, name: "Ryan", pos: "GK" },
      { num: 3, name: "Atkinson", pos: "DEF" },
      { num: 19, name: "Souttar", pos: "DEF" },
      { num: 4, name: "Rowles", pos: "DEF" },
      { num: 16, name: "Behich", pos: "DEF" },
      { num: 22, name: "Baccus", pos: "MID" },
      { num: 22, name: "Irvine", pos: "MID" },
      { num: 8, name: "Metcalfe", pos: "MID" },
      { num: 7, name: "Irankunda", pos: "FWD" },
      { num: 9, name: "Yengi", pos: "FWD" },
      { num: 23, name: "Goodwin", pos: "FWD" }
    ],
    "Turquía": [
      { num: 1, name: "Günok", pos: "GK" },
      { num: 18, name: "Müldür", pos: "DEF" },
      { num: 4, name: "Akaydin", pos: "DEF" },
      { num: 14, name: "Bardakcı", pos: "DEF" },
      { num: 20, name: "Kadıoğlu", pos: "DEF" },
      { num: 15, name: "Özcan", pos: "MID" },
      { num: 10, name: "Çalhanoğlu", pos: "MID" },
      { num: 6, name: "Kökçü", pos: "MID" },
      { num: 8, name: "Güler", pos: "FWD" },
      { num: 21, name: "Yılmaz", pos: "FWD" },
      { num: 19, name: "Yıldız", pos: "FWD" }
    ],
    "Costa de Marfil": [
      { num: 1, name: "Y. Fofana", pos: "GK" },
      { num: 17, name: "Aurier", pos: "DEF" },
      { num: 7, name: "Kossounou", pos: "DEF" },
      { num: 21, name: "Ndicka", pos: "DEF" },
      { num: 3, name: "Konan", pos: "DEF" },
      { num: 8, name: "Kessié", pos: "MID" },
      { num: 18, name: "Sangaré", pos: "MID" },
      { num: 4, name: "Seri", pos: "MID" },
      { num: 24, name: "Adingra", pos: "FWD" },
      { num: 22, name: "Haller", pos: "FWD" },
      { num: 19, name: "Pépé", pos: "FWD" }
    ],
    "Ecuador": [
      { num: 22, name: "Domínguez", pos: "GK" },
      { num: 17, name: "Preciado", pos: "DEF" },
      { num: 2, name: "Torres", pos: "DEF" },
      { num: 6, name: "Pacho", pos: "DEF" },
      { num: 3, name: "Hincapié", pos: "DEF" },
      { num: 21, name: "Franco", pos: "MID" },
      { num: 23, name: "Caicedo", pos: "MID" },
      { num: 8, name: "Ortiz", pos: "MID" },
      { num: 10, name: "Páez", pos: "FWD" },
      { num: 13, name: "Valencia", pos: "FWD" },
      { num: 16, name: "Sarmiento", pos: "FWD" }
    ],
    "Países Bajos": [
      { num: 1, name: "Verbruggen", pos: "GK" },
      { num: 22, name: "Dumfries", pos: "DEF" },
      { num: 3, name: "Van Hecke", pos: "DEF" },
      { num: 4, name: "Van Dijk", pos: "DEF" },
      { num: 5, name: "Aké", pos: "DEF" },
      { num: 21, name: "F. de Jong", pos: "MID" },
      { num: 14, name: "Reijnders", pos: "MID" },
      { num: 8, name: "Gravenberch", pos: "MID" },
      { num: 16, name: "Malen", pos: "FWD" },
      { num: 10, name: "Depay", pos: "FWD" },
      { num: 11, name: "Gakpo", pos: "FWD" }
    ],
    "Japón": [
      { num: 23, name: "Suzuki", pos: "GK" },
      { num: 2, name: "Sugawara", pos: "DEF" },
      { num: 4, name: "Itakura", pos: "DEF" },
      { num: 15, name: "Machida", pos: "DEF" },
      { num: 22, name: "H. Ito", pos: "DEF" },
      { num: 6, name: "Endo", pos: "MID" },
      { num: 5, name: "Morita", pos: "MID" },
      { num: 8, name: "Kamada", pos: "MID" },
      { num: 10, name: "Doan", pos: "FWD" },
      { num: 9, name: "Ueda", pos: "FWD" },
      { num: 20, name: "Kubo", pos: "FWD" }
    ],
    "Suecia": [
      { num: 1, name: "Olsen", pos: "GK" },
      { num: 2, name: "Krafth", pos: "DEF" },
      { num: 3, name: "Hien", pos: "DEF" },
      { num: 4, name: "Lindelöf", pos: "DEF" },
      { num: 5, name: "Augustinsson", pos: "DEF" },
      { num: 21, name: "Kulusevski", pos: "MID" },
      { num: 8, name: "Cajuste", pos: "MID" },
      { num: 15, name: "Salétros", pos: "MID" },
      { num: 10, name: "Forsberg", pos: "MID" },
      { num: 9, name: "Isak", pos: "FWD" },
      { num: 17, name: "Gyökeres", pos: "FWD" }
    ],
    "Túnez": [
      { num: 16, name: "Dahmen", pos: "GK" },
      { num: 20, name: "Valery", pos: "DEF" },
      { num: 4, name: "Meriah", pos: "DEF" },
      { num: 3, name: "Talbi", pos: "DEF" },
      { num: 12, name: "Maaloul", pos: "DEF" },
      { num: 17, name: "Skhiri", pos: "MID" },
      { num: 14, name: "Laidouni", pos: "MID" },
      { num: 15, name: "Ben Romdhane", pos: "MID" },
      { num: 8, name: "Rafia", pos: "FWD" },
      { num: 10, name: "Msakni", pos: "FWD" },
      { num: 11, name: "Achouri", pos: "FWD" }
    ],
    "Arabia Saudita": [
      { num: 21, name: "Al-Owais", pos: "GK" },
      { num: 2, name: "Al-Ghannam", pos: "DEF" },
      { num: 4, name: "Al-Amri", pos: "DEF" },
      { num: 5, name: "Al-Bulaihi", pos: "DEF" },
      { num: 13, name: "Al-Shahrani", pos: "DEF" },
      { num: 23, name: "Kanno", pos: "MID" },
      { num: 8, name: "Al-Malki", pos: "MID" },
      { num: 14, name: "Otayf", pos: "MID" },
      { num: 18, name: "Al-Muwallad", pos: "FWD" },
      { num: 11, name: "Al-Shehri", pos: "FWD" },
      { num: 10, name: "Al-Dawsari", pos: "FWD" }
    ],
    "Irán": [
      { num: 1, name: "Beiranvand", pos: "GK" },
      { num: 23, name: "Rezaeian", pos: "DEF" },
      { num: 13, name: "Kanaanizadegan", pos: "DEF" },
      { num: 19, name: "Hosseini", pos: "DEF" },
      { num: 3, name: "Hajsafi", pos: "DEF" },
      { num: 14, name: "Ghoddos", pos: "MID" },
      { num: 6, name: "Ezatolahi", pos: "MID" },
      { num: 18, name: "Karimi", pos: "MID" },
      { num: 7, name: "Jahanbakhsh", pos: "FWD" },
      { num: 9, name: "Taremi", pos: "FWD" },
      { num: 20, name: "Azmoun", pos: "FWD" }
    ],
    "Nueva Zelanda": [
      { num: 1, name: "Crocombe", pos: "GK" },
      { num: 2, name: "Payne", pos: "DEF" },
      { num: 4, name: "Smith", pos: "DEF" },
      { num: 15, name: "Boxall", pos: "DEF" },
      { num: 3, name: "Cacace", pos: "DEF" },
      { num: 8, name: "Bell", pos: "MID" },
      { num: 6, name: "Stamenic", pos: "MID" },
      { num: 10, name: "Garbett", pos: "MID" },
      { num: 11, name: "McCowatt", pos: "FWD" },
      { num: 9, name: "Wood", pos: "FWD" },
      { num: 7, name: "Just", pos: "FWD" }
    ],
    "Argelia": [
      { num: 23, name: "M'Bolhi", pos: "GK" },
      { num: 2, name: "Mandi", pos: "DEF" },
      { num: 21, name: "Bensebaini", pos: "DEF" },
      { num: 3, name: "Aït-Nouri", pos: "DEF" },
      { num: 20, name: "Atal", pos: "DEF" },
      { num: 14, name: "Bentaleb", pos: "MID" },
      { num: 22, name: "Bennacer", pos: "MID" },
      { num: 10, name: "Feghouli", pos: "MID" },
      { num: 7, name: "Mahrez", pos: "FWD" },
      { num: 13, name: "Slimani", pos: "FWD" },
      { num: 9, name: "Bounedjah", pos: "FWD" }
    ],
    "Senegal": [
      { num: 16, name: "E. Mendy", pos: "GK" },
      { num: 21, name: "Sabaly", pos: "DEF" },
      { num: 3, name: "Koulibaly", pos: "DEF" },
      { num: 4, name: "Diallo", pos: "DEF" },
      { num: 2, name: "Jakobs", pos: "DEF" },
      { num: 26, name: "P. Gueye", pos: "MID" },
      { num: 8, name: "Kouyaté", pos: "MID" },
      { num: 5, name: "I. Gueye", pos: "MID" },
      { num: 18, name: "I. Sarr", pos: "FWD" },
      { num: 9, name: "N. Jackson", pos: "FWD" },
      { num: 10, name: "Sadio Mané", pos: "FWD" }
    ],
    "Noruega": [
      { num: 1, name: "Nyland", pos: "GK" },
      { num: 14, name: "Ryerson", pos: "DEF" },
      { num: 4, name: "Ostigard", pos: "DEF" },
      { num: 3, name: "Ajer", pos: "DEF" },
      { num: 5, name: "Meling", pos: "DEF" },
      { num: 10, name: "Ødegaard", pos: "MID" },
      { num: 6, name: "Berge", pos: "MID" },
      { num: 8, name: "Aursnes", pos: "MID" },
      { num: 7, name: "Sørloth", pos: "FWD" },
      { num: 9, name: "Haaland", pos: "FWD" },
      { num: 11, name: "Elyounoussi", pos: "FWD" }
    ]
  },

  // 16 Estadios Anfitriones Oficiales de la FIFA
  stadiums: [
    { name: "Estadio Azteca", city: "Ciudad de México", capacity: "87,523", matches: 6 },
    { name: "MetLife Stadium", city: "New York / New Jersey", capacity: "82,500", matches: 8 },
    { name: "Estadio BBVA", city: "Monterrey", capacity: "53,500", matches: 4 },
    { name: "Estadio Akron", city: "Guadalajara", capacity: "48,071", matches: 4 },
    { name: "BC Place", city: "Vancouver", capacity: "54,500", matches: 7 },
    { name: "BMO Field", city: "Toronto", capacity: "45,000", matches: 6 },
    { name: "SoFi Stadium", city: "Los Ángeles", capacity: "70,240", matches: 8 },
    { name: "Mercedes-Benz Stadium", city: "Atlanta", capacity: "71,000", matches: 8 },
    { name: "Gillette Stadium", city: "Boston", capacity: "65,878", matches: 7 },
    { name: "AT&T Stadium", city: "Dallas", capacity: "80,000", matches: 9 },
    { name: "NRG Stadium", city: "Houston", capacity: "72,220", matches: 7 },
    { name: "Arrowhead Stadium", city: "Kansas City", capacity: "76,416", matches: 6 },
    { name: "Hard Rock Stadium", city: "Miami", capacity: "64,767", matches: 7 },
    { name: "Lincoln Financial Field", city: "Filadelfia", capacity: "69,796", matches: 6 },
    { name: "Lumen Field", city: "Seattle", capacity: "69,000", matches: 6 },
    { name: "Levi's Stadium", city: "San Francisco", capacity: "68,500", matches: 6 }
  ],

  // 12 Grupos Oficiales de 4 Equipos
  groups: {
    "A": ["México", "Sudáfrica", "República de Corea", "Chequia"],
    "B": ["Canadáá", "Catar", "Suiza", "Bosnia y Herzegovina"],
    "C": ["Brasil", "Marruecos", "Haitíí", "Escocia"],
    "D": ["Estados Unidos", "Paraguay", "Australia", "Turquía"],
    "E": ["Alemania", "Curazao", "Costa de Marfil", "Ecuador"],
    "F": ["Países Bajos", "Japón", "Túnez", "Suecia"],
    "G": ["Bélgica", "Egipto", "Irán", "Nueva Zelanda"],
    "H": ["España", "Cabo Verde", "Arabia Saudita", "Uruguay"],
    "I": ["Francia", "Senegal", "Noruega", "Curazao"],
    "J": ["Argentina", "Argelia", "Austria", "Jordania"],
    "K": ["Portugal", "Uzbekistán", "Colombia", "República Democrática del Congo"],
    "L": ["Inglaterra", "Croacia", "Ghana", "Panamáá"]
  }
};

// Convertir códigos de bandera ISO en imágenes HTML
for (const teamName in FIFA_DATA.teams) {
  const team = FIFA_DATA.teams[teamName];
  if (team.flag && (team.flag.length === 2 || team.flag.includes("-"))) {
    team.flag = `<img src="https://flagcdn.com/20x15/${team.flag}.png" class="flag-img" alt="${teamName}">`;
  }
}

// ==========================================================================
// CALENDARIO DE PARTIDOS INICIALES Y RESULTADOS OFICIALES (11 - 15 DE JUNIO)
// ==========================================================================
let matchesSeed = [
  { id: 1, type: "group", group: "A", home: "México", away: "Sudáfrica", homeScore: 2, awayScore: 0, homeScorers: [], awayScorers: [], status: "finished", date: "11 Jun", time: "12:00", stadium: "TBD" },
  { id: 2, type: "group", group: "A", home: "Corea del Sur", away: "Chequia", homeScore: 2, awayScore: 1, homeScorers: [], awayScorers: [], status: "finished", date: "11 Jun", time: "12:00", stadium: "TBD" },
  { id: 3, type: "group", group: "B", home: "Canadá", away: "Bosnia y Herzegovina", homeScore: 1, awayScore: 1, homeScorers: [], awayScorers: [], status: "finished", date: "12 Jun", time: "12:00", stadium: "TBD" },
  { id: 4, type: "group", group: "D", home: "Estados Unidos", away: "Paraguay", homeScore: 4, awayScore: 1, homeScorers: [], awayScorers: [], status: "finished", date: "12 Jun", time: "12:00", stadium: "TBD" },
  { id: 5, type: "group", group: "B", home: "Catar", away: "Suiza", homeScore: 1, awayScore: 1, homeScorers: [], awayScorers: [], status: "finished", date: "13 Jun", time: "12:00", stadium: "TBD" },
  { id: 6, type: "group", group: "C", home: "Brasil", away: "Marruecos", homeScore: 1, awayScore: 1, homeScorers: [], awayScorers: [], status: "finished", date: "13 Jun", time: "12:00", stadium: "TBD" },
  { id: 7, type: "group", group: "C", home: "Haití", away: "Escocia", homeScore: 0, awayScore: 1, homeScorers: [], awayScorers: [], status: "finished", date: "13 Jun", time: "12:00", stadium: "TBD" },
  { id: 8, type: "group", group: "D", home: "Australia", away: "Turquía", homeScore: 2, awayScore: 0, homeScorers: [], awayScorers: [], status: "finished", date: "14 Jun", time: "12:00", stadium: "TBD" },
  { id: 9, type: "group", group: "E", home: "Alemania", away: "Curazao", homeScore: 7, awayScore: 1, homeScorers: [], awayScorers: [], status: "finished", date: "14 Jun", time: "12:00", stadium: "TBD" },
  { id: 10, type: "group", group: "F", home: "Países Bajos", away: "Japón", homeScore: 2, awayScore: 2, homeScorers: [], awayScorers: [], status: "finished", date: "14 Jun", time: "12:00", stadium: "TBD" },
  { id: 11, type: "group", group: "E", home: "Costa de Marfil", away: "Ecuador", homeScore: 1, awayScore: 0, homeScorers: [], awayScorers: [], status: "finished", date: "14 Jun", time: "12:00", stadium: "TBD" },
  { id: 12, type: "group", group: "F", home: "Suecia", away: "Túnez", homeScore: 5, awayScore: 1, homeScorers: [], awayScorers: [], status: "finished", date: "14 Jun", time: "12:00", stadium: "TBD" },
  { id: 13, type: "group", group: "H", home: "España", away: "Cabo Verde", homeScore: 0, awayScore: 0, homeScorers: [], awayScorers: [], status: "finished", date: "15 Jun", time: "12:00", stadium: "TBD" },
  { id: 14, type: "group", group: "G", home: "Bélgica", away: "Egipto", homeScore: 1, awayScore: 1, homeScorers: [], awayScorers: [], status: "finished", date: "15 Jun", time: "12:00", stadium: "TBD" },
  { id: 15, type: "group", group: "H", home: "Arabia Saudita", away: "Uruguay", homeScore: 1, awayScore: 1, homeScorers: [], awayScorers: [], status: "finished", date: "15 Jun", time: "12:00", stadium: "TBD" },
  { id: 16, type: "group", group: "G", home: "Irán", away: "Nueva Zelanda", homeScore: 2, awayScore: 2, homeScorers: [], awayScorers: [], status: "finished", date: "15 Jun", time: "12:00", stadium: "TBD" },
  { id: 17, type: "group", group: "I", home: "Francia", away: "Senegal", homeScore: 3, awayScore: 1, homeScorers: [], awayScorers: [], status: "finished", date: "16 Jun", time: "12:00", stadium: "TBD" },
  { id: 18, type: "group", group: "I", home: "Irak", away: "Noruega", homeScore: 1, awayScore: 4, homeScorers: [], awayScorers: [], status: "finished", date: "16 Jun", time: "12:00", stadium: "TBD" },
  { id: 19, type: "group", group: "J", home: "Argentina", away: "Argelia", homeScore: 3, awayScore: 0, homeScorers: [], awayScorers: [], status: "finished", date: "16 Jun", time: "12:00", stadium: "TBD" },
  { id: 20, type: "group", group: "J", home: "Austria", away: "Jordania", homeScore: 3, awayScore: 1, homeScorers: [], awayScorers: [], status: "finished", date: "17 Jun", time: "12:00", stadium: "TBD" },
  { id: 21, type: "group", group: "K", home: "Portugal", away: "RD Congo", homeScore: 1, awayScore: 1, homeScorers: [], awayScorers: [], status: "finished", date: "17 Jun", time: "12:00", stadium: "TBD" },
  { id: 22, type: "group", group: "L", home: "Inglaterra", away: "Croacia", homeScore: 4, awayScore: 2, homeScorers: [], awayScorers: [], status: "finished", date: "17 Jun", time: "12:00", stadium: "TBD" },
  { id: 23, type: "group", group: "L", home: "Ghana", away: "Panamá", homeScore: 1, awayScore: 0, homeScorers: [], awayScorers: [], status: "finished", date: "17 Jun", time: "12:00", stadium: "TBD" },
  { id: 24, type: "group", group: "K", home: "Uzbekistán", away: "Colombia", homeScore: 1, awayScore: 3, homeScorers: [], awayScorers: [], status: "finished", date: "17 Jun", time: "12:00", stadium: "TBD" },
  { id: 25, type: "group", group: "A", home: "Chequia", away: "Sudáfrica", homeScore: 1, awayScore: 1, homeScorers: [], awayScorers: [], status: "finished", date: "18 Jun", time: "12:00", stadium: "TBD" },
  { id: 26, type: "group", group: "B", home: "Suiza", away: "Bosnia y Herzegovina", homeScore: 4, awayScore: 1, homeScorers: [], awayScorers: [], status: "finished", date: "18 Jun", time: "12:00", stadium: "TBD" },
  { id: 27, type: "group", group: "B", home: "Canadá", away: "Catar", homeScore: 6, awayScore: 0, homeScorers: [], awayScorers: [], status: "finished", date: "18 Jun", time: "12:00", stadium: "TBD" },
  { id: 28, type: "group", group: "A", home: "México", away: "Corea del Sur", homeScore: 1, awayScore: 0, homeScorers: [], awayScorers: [], status: "finished", date: "18 Jun", time: "12:00", stadium: "TBD" },
  { id: 29, type: "group", group: "D", home: "Estados Unidos", away: "Australia", homeScore: 2, awayScore: 0, homeScorers: [], awayScorers: [], status: "finished", date: "19 Jun", time: "12:00", stadium: "TBD" },
  { id: 30, type: "group", group: "C", home: "Escocia", away: "Marruecos", homeScore: 0, awayScore: 1, homeScorers: [], awayScorers: [], status: "finished", date: "19 Jun", time: "12:00", stadium: "TBD" },
  { id: 31, type: "group", group: "C", home: "Brasil", away: "Haití", homeScore: 3, awayScore: 0, homeScorers: [], awayScorers: [], status: "finished", date: "19 Jun", time: "12:00", stadium: "TBD" },
  { id: 32, type: "group", group: "D", home: "Turquía", away: "Paraguay", homeScore: 0, awayScore: 1, homeScorers: [], awayScorers: [], status: "finished", date: "19 Jun", time: "12:00", stadium: "TBD" },
  { id: 33, type: "group", group: "F", home: "Países Bajos", away: "Suecia", homeScore: 5, awayScore: 1, homeScorers: [], awayScorers: [], status: "finished", date: "20 Jun", time: "12:00", stadium: "TBD" },
  { id: 34, type: "group", group: "E", home: "Alemania", away: "Costa de Marfil", homeScore: 2, awayScore: 1, homeScorers: [], awayScorers: [], status: "finished", date: "20 Jun", time: "12:00", stadium: "TBD" },
  { id: 35, type: "group", group: "E", home: "Ecuador", away: "Curazao", homeScore: 0, awayScore: 0, homeScorers: [], awayScorers: [], status: "finished", date: "20 Jun", time: "12:00", stadium: "TBD" },
  { id: 36, type: "group", group: "F", home: "Túnez", away: "Japón", homeScore: 0, awayScore: 4, homeScorers: [], awayScorers: [], status: "finished", date: "21 Jun", time: "12:00", stadium: "TBD" },
  { id: 37, type: "group", group: "H", home: "España", away: "Arabia Saudita", homeScore: 4, awayScore: 0, homeScorers: [], awayScorers: [], status: "finished", date: "21 Jun", time: "12:00", stadium: "TBD" },
  { id: 38, type: "group", group: "G", home: "Bélgica", away: "Irán", homeScore: 0, awayScore: 0, homeScorers: [], awayScorers: [], status: "finished", date: "21 Jun", time: "12:00", stadium: "TBD" },
  { id: 39, type: "group", group: "H", home: "Uruguay", away: "Cabo Verde", homeScore: 2, awayScore: 2, homeScorers: [], awayScorers: [], status: "finished", date: "21 Jun", time: "12:00", stadium: "TBD" },
  { id: 40, type: "group", group: "G", home: "Nueva Zelanda", away: "Egipto", homeScore: 1, awayScore: 3, homeScorers: [], awayScorers: [], status: "finished", date: "21 Jun", time: "12:00", stadium: "TBD" },
  { id: 41, type: "group", group: "J", home: "Argentina", away: "Austria", homeScore: 2, awayScore: 0, homeScorers: [], awayScorers: [], status: "finished", date: "22 Jun", time: "12:00", stadium: "TBD" },
  { id: 42, type: "group", group: "I", home: "Francia", away: "Irak", homeScore: 3, awayScore: 0, homeScorers: [], awayScorers: [], status: "finished", date: "22 Jun", time: "12:00", stadium: "TBD" },
  { id: 43, type: "group", group: "I", home: "Noruega", away: "Senegal", homeScore: 3, awayScore: 2, homeScorers: [], awayScorers: [], status: "finished", date: "22 Jun", time: "12:00", stadium: "TBD" },
  { id: 44, type: "group", group: "J", home: "Jordania", away: "Argelia", homeScore: 1, awayScore: 2, homeScorers: [], awayScorers: [], status: "finished", date: "22 Jun", time: "12:00", stadium: "TBD" },
  { id: 45, type: "group", group: "K", home: "Portugal", away: "Uzbekistán", homeScore: 5, awayScore: 0, homeScorers: [], awayScorers: [], status: "finished", date: "23 Jun", time: "12:00", stadium: "TBD" },
  { id: 46, type: "group", group: "L", home: "Inglaterra", away: "Ghana", homeScore: 0, awayScore: 0, homeScorers: [], awayScorers: [], status: "finished", date: "23 Jun", time: "12:00", stadium: "TBD" },
  { id: 47, type: "group", group: "L", home: "Panamá", away: "Croacia", homeScore: 0, awayScore: 1, homeScorers: [], awayScorers: [], status: "finished", date: "23 Jun", time: "12:00", stadium: "TBD" },
  { id: 48, type: "group", group: "K", home: "Colombia", away: "RD Congo", homeScore: 1, awayScore: 0, homeScorers: [], awayScorers: [], status: "finished", date: "23 Jun", time: "12:00", stadium: "TBD" },
  { id: 49, type: "group", group: "B", home: "Suiza", away: "Canadá", homeScore: 2, awayScore: 1, homeScorers: [], awayScorers: [], status: "finished", date: "24 Jun", time: "12:00", stadium: "TBD" },
  { id: 50, type: "group", group: "B", home: "Bosnia y Herzegovina", away: "Catar", homeScore: 3, awayScore: 1, homeScorers: [], awayScorers: [], status: "finished", date: "24 Jun", time: "12:00", stadium: "TBD" },
  { id: 51, type: "group", group: "C", home: "Escocia", away: "Brasil", homeScore: 0, awayScore: 3, homeScorers: [], awayScorers: [], status: "finished", date: "24 Jun", time: "12:00", stadium: "TBD" },
  { id: 52, type: "group", group: "C", home: "Marruecos", away: "Haití", homeScore: 4, awayScore: 2, homeScorers: [], awayScorers: [], status: "finished", date: "24 Jun", time: "12:00", stadium: "TBD" },
  { id: 53, type: "group", group: "A", home: "Chequia", away: "México", homeScore: 0, awayScore: 3, homeScorers: [], awayScorers: [], status: "finished", date: "24 Jun", time: "12:00", stadium: "TBD" },
  { id: 54, type: "group", group: "A", home: "Sudáfrica", away: "Corea del Sur", homeScore: 1, awayScore: 0, homeScorers: [], awayScorers: [], status: "finished", date: "24 Jun", time: "12:00", stadium: "TBD" },
  { id: 55, type: "group", group: "E", home: "Curazao", away: "Costa de Marfil", homeScore: 0, awayScore: 2, homeScorers: [], awayScorers: [], status: "finished", date: "25 Jun", time: "12:00", stadium: "TBD" },
  { id: 56, type: "group", group: "E", home: "Ecuador", away: "Alemania", homeScore: 2, awayScore: 1, homeScorers: [], awayScorers: [], status: "finished", date: "25 Jun", time: "12:00", stadium: "TBD" },
  { id: 57, type: "group", group: "F", home: "Japón", away: "Suecia", homeScore: 1, awayScore: 1, homeScorers: [], awayScorers: [], status: "finished", date: "25 Jun", time: "12:00", stadium: "TBD" },
  { id: 58, type: "group", group: "F", home: "Túnez", away: "Países Bajos", homeScore: 1, awayScore: 3, homeScorers: [], awayScorers: [], status: "finished", date: "25 Jun", time: "12:00", stadium: "TBD" },
  { id: 59, type: "group", group: "D", home: "Turquía", away: "Estados Unidos", homeScore: 3, awayScore: 2, homeScorers: [], awayScorers: [], status: "finished", date: "25 Jun", time: "12:00", stadium: "TBD" },
  { id: 60, type: "group", group: "D", home: "Paraguay", away: "Australia", homeScore: 0, awayScore: 0, homeScorers: [], awayScorers: [], status: "finished", date: "25 Jun", time: "12:00", stadium: "TBD" },
  { id: 61, type: "group", group: "I", home: "Noruega", away: "Francia", homeScore: 1, awayScore: 4, homeScorers: [], awayScorers: [], status: "finished", date: "26 Jun", time: "12:00", stadium: "TBD" },
  { id: 62, type: "group", group: "I", home: "Senegal", away: "Irak", homeScore: 5, awayScore: 0, homeScorers: [], awayScorers: [], status: "finished", date: "26 Jun", time: "12:00", stadium: "TBD" },
  { id: 63, type: "group", group: "H", home: "Cabo Verde", away: "Arabia Saudita", homeScore: 0, awayScore: 0, homeScorers: [], awayScorers: [], status: "finished", date: "26 Jun", time: "12:00", stadium: "TBD" },
  { id: 64, type: "group", group: "H", home: "Uruguay", away: "España", homeScore: 0, awayScore: 1, homeScorers: [], awayScorers: [], status: "finished", date: "26 Jun", time: "12:00", stadium: "TBD" },
  { id: 65, type: "group", group: "G", home: "Egipto", away: "Irán", homeScore: 1, awayScore: 1, homeScorers: [], awayScorers: [], status: "finished", date: "26 Jun", time: "12:00", stadium: "TBD" },
  { id: 66, type: "group", group: "G", home: "Nueva Zelanda", away: "Bélgica", homeScore: 1, awayScore: 5, homeScorers: [], awayScorers: [], status: "finished", date: "26 Jun", time: "12:00", stadium: "TBD" },
  { id: 67, type: "group", group: "L", home: "Panamá", away: "Inglaterra", homeScore: 0, awayScore: 2, homeScorers: [], awayScorers: [], status: "finished", date: "27 Jun", time: "12:00", stadium: "TBD" },
  { id: 68, type: "group", group: "L", home: "Croacia", away: "Ghana", homeScore: 2, awayScore: 1, homeScorers: [], awayScorers: [], status: "finished", date: "27 Jun", time: "12:00", stadium: "TBD" },
  { id: 69, type: "group", group: "K", home: "Colombia", away: "Portugal", homeScore: 0, awayScore: 0, homeScorers: [], awayScorers: [], status: "finished", date: "27 Jun", time: "12:00", stadium: "TBD" },
  { id: 70, type: "group", group: "K", home: "RD Congo", away: "Uzbekistán", homeScore: 3, awayScore: 1, homeScorers: [], awayScorers: [], status: "finished", date: "27 Jun", time: "12:00", stadium: "TBD" },
  { id: 71, type: "group", group: "J", home: "Argelia", away: "Austria", homeScore: 3, awayScore: 3, homeScorers: [], awayScorers: [], status: "finished", date: "27 Jun", time: "12:00", stadium: "TBD" },
  { id: 72, type: "group", group: "J", home: "Jordania", away: "Argentina", homeScore: 1, awayScore: 3, homeScorers: [], awayScorers: [], status: "finished", date: "27 Jun", time: "12:00", stadium: "TBD" },
  { id: 73, type: "knockout", group: "Dieciseisavos de final", home: "Sudáfrica", away: "Canadá", homeScore: 0, awayScore: 1, homeScorers: [], awayScorers: [], status: "finished", date: "28 Jun", time: "12:00", stadium: "TBD" },
  { id: 74, type: "knockout", group: "Dieciseisavos de final", home: "Brasil", away: "Japón", homeScore: 2, awayScore: 1, homeScorers: [], awayScorers: [], status: "finished", date: "29 Jun", time: "12:00", stadium: "TBD" },
  { id: 75, type: "knockout", group: "Dieciseisavos de final", home: "Alemania", away: "Paraguay", homeScore: 1, awayScore: 1, homeScorers: [], awayScorers: [], status: "finished", date: "29 Jun", time: "12:00", stadium: "TBD" },
  { id: 76, type: "knockout", group: "Dieciseisavos de final", home: "Países Bajos", away: "Marruecos", homeScore: 1, awayScore: 1, homeScorers: [], awayScorers: [], status: "finished", date: "29 Jun", time: "12:00", stadium: "TBD" },
  { id: 77, type: "knockout", group: "Dieciseisavos de final", home: "Costa de Marfil", away: "Noruega", homeScore: 1, awayScore: 2, homeScorers: [], awayScorers: [], status: "finished", date: "30 Jun", time: "12:00", stadium: "TBD" },
  { id: 78, type: "knockout", group: "Dieciseisavos de final", home: "Francia", away: "Suecia", homeScore: 3, awayScore: 0, homeScorers: [], awayScorers: [], status: "finished", date: "30 Jun", time: "12:00", stadium: "TBD" },
  { id: 79, type: "knockout", group: "Dieciseisavos de final", home: "México", away: "Ecuador", homeScore: 2, awayScore: 0, homeScorers: [], awayScorers: [], status: "finished", date: "30 Jun", time: "12:00", stadium: "TBD" },
  { id: 80, type: "knockout", group: "Dieciseisavos de final", home: "Inglaterra", away: "RD Congo", homeScore: 2, awayScore: 1, homeScorers: [], awayScorers: [], status: "finished", date: "01 Jul", time: "12:00", stadium: "TBD" },
  { id: 81, type: "knockout", group: "Dieciseisavos de final", home: "Bélgica", away: "Senegal", homeScore: 3, awayScore: 2, homeScorers: [], awayScorers: [], status: "finished", date: "01 Jul", time: "12:00", stadium: "TBD" },
  { id: 82, type: "knockout", group: "Dieciseisavos de final", home: "Estados Unidos", away: "Bosnia y Herzegovina", homeScore: 2, awayScore: 0, homeScorers: [], awayScorers: [], status: "finished", date: "01 Jul", time: "12:00", stadium: "TBD" },
  { id: 83, type: "knockout", group: "Dieciseisavos de final", home: "España", away: "Austria", homeScore: 3, awayScore: 0, homeScorers: [], awayScorers: [], status: "finished", date: "02 Jul", time: "12:00", stadium: "TBD" },
  { id: 84, type: "knockout", group: "Dieciseisavos de final", home: "Portugal", away: "Croacia", homeScore: 2, awayScore: 1, homeScorers: [], awayScorers: [], status: "finished", date: "02 Jul", time: "12:00", stadium: "TBD" },
  { id: 85, type: "knockout", group: "Dieciseisavos de final", home: "Suiza", away: "Argelia", homeScore: 2, awayScore: 0, homeScorers: [], awayScorers: [], status: "finished", date: "02 Jul", time: "12:00", stadium: "TBD" },
  { id: 86, type: "knockout", group: "Dieciseisavos de final", home: "Australia", away: "Egipto", homeScore: 1, awayScore: 1, homeScorers: [], awayScorers: [], status: "finished", date: "03 Jul", time: "12:00", stadium: "TBD" },
  { id: 87, type: "knockout", group: "Dieciseisavos de final", home: "Argentina", away: "Cabo Verde", homeScore: 3, awayScore: 2, homeScorers: [], awayScorers: [], status: "finished", date: "03 Jul", time: "12:00", stadium: "TBD" },
  { id: 88, type: "knockout", group: "Dieciseisavos de final", home: "Colombia", away: "Ghana", homeScore: 1, awayScore: 0, homeScorers: [], awayScorers: [], status: "finished", date: "03 Jul", time: "12:00", stadium: "TBD" },
  { id: 89, type: "knockout", group: "Octavos de final", home: "Canadá", away: "Marruecos", homeScore: 0, awayScore: 3, homeScorers: [], awayScorers: [], status: "finished", date: "04 Jul", time: "12:00", stadium: "TBD" },
  { id: 90, type: "knockout", group: "Octavos de final", home: "Paraguay", away: "Francia", homeScore: 0, awayScore: 1, homeScorers: [], awayScorers: [], status: "finished", date: "04 Jul", time: "12:00", stadium: "TBD" },
  { id: 91, type: "knockout", group: "Octavos de final", home: "Brasil", away: "Noruega", homeScore: 1, awayScore: 2, homeScorers: [], awayScorers: [], status: "finished", date: "05 Jul", time: "12:00", stadium: "TBD" },
  { id: 92, type: "knockout", group: "Octavos de final", home: "México", away: "Inglaterra", homeScore: 2, awayScore: 3, homeScorers: [], awayScorers: [], status: "finished", date: "05 Jul", time: "12:00", stadium: "TBD" },
  { id: 93, type: "knockout", group: "Octavos de final", home: "Portugal", away: "España", homeScore: 0, awayScore: 1, homeScorers: [], awayScorers: [], status: "finished", date: "06 Jul", time: "12:00", stadium: "TBD" },
  { id: 94, type: "knockout", group: "Octavos de final", home: "Estados Unidos", away: "Bélgica", homeScore: 1, awayScore: 4, homeScorers: [], awayScorers: [], status: "finished", date: "06 Jul", time: "12:00", stadium: "TBD" },
  { id: 95, type: "knockout", group: "Octavos de final", home: "Argentina", away: "Egipto", homeScore: 3, awayScore: 2, homeScorers: [], awayScorers: [], status: "finished", date: "07 Jul", time: "12:00", stadium: "TBD" },
  { id: 96, type: "knockout", group: "Octavos de final", home: "Suiza", away: "Colombia", homeScore: 0, awayScore: 0, homeScorers: [], awayScorers: [], status: "finished", date: "07 Jul", time: "12:00", stadium: "TBD" },
  { id: 97, type: "knockout", group: "Cuartos de final", home: "Francia", away: "Marruecos", homeScore: 2, awayScore: 0, homeScorers: [], awayScorers: [], status: "finished", date: "09 Jul", time: "12:00", stadium: "TBD" },
  { id: 98, type: "knockout", group: "Cuartos de final", home: "España", away: "Bélgica", homeScore: 2, awayScore: 1, homeScorers: [], awayScorers: [], status: "finished", date: "10 Jul", time: "12:00", stadium: "TBD" },
  { id: 99, type: "knockout", group: "Cuartos de final", home: "Noruega", away: "Inglaterra", homeScore: 1, awayScore: 2, homeScorers: [], awayScorers: [], status: "finished", date: "11 Jul", time: "12:00", stadium: "TBD" },
  { id: 100, type: "knockout", group: "Cuartos de final", home: "Argentina", away: "Suiza", homeScore: 3, awayScore: 1, homeScorers: [], awayScorers: [], status: "finished", date: "11 Jul", time: "12:00", stadium: "TBD" },
  { id: 101, type: "knockout", group: "Semifinal", home: "Francia", away: "España", homeScore: 0, awayScore: 2, homeScorers: [], awayScorers: [], status: "finished", date: "14 Jul", time: "12:00", stadium: "TBD" },
  { id: 102, type: "knockout", group: "Semifinal", home: "Inglaterra", away: "Argentina", homeScore: 1, awayScore: 2, homeScorers: [], awayScorers: [], status: "finished", date: "15 Jul", time: "12:00", stadium: "TBD" },
  { id: 103, type: "knockout", group: "Tercer lugar", home: "Francia", away: "Inglaterra", homeScore: 4, awayScore: 6, homeScorers: [], awayScorers: [], status: "finished", date: "18 Jul", time: "12:00", stadium: "TBD" },
  { id: 104, type: "knockout", group: "Final", home: "España", away: "Argentina", homeScore: 1, awayScore: 0, homeScorers: [], awayScorers: [], status: "finished", date: "19 Jul", time: "12:00", stadium: "TBD" },
];

// ==========================================================================
// CONTROL DE ESTADO GLOBAL DE LA APLICACIÓN
// ==========================================================================
const AppState = {
  matches: [...matchesSeed],
  activeMatchId: 13, // España vs Cabo Verde por defecto
  activeSection: "section-standings", // Pestaña activa derecha
  activeMcTab: "mc-lineups", // Pestaña activa del centro de partidos
  tickerFilter: "all",
  rostersCache: {}
};

// Mapeo de formaciones por equipo (para no usar solo 4-3-3)
const teamFormations = {
  "México": "4-2-3-1",
  "Sudáfrica": "4-4-2",
  "República de Corea": "4-3-3",
  "Chequia": "5-3-2",
  "Canadáá": "4-2-3-1",
  "Catar": "3-5-2",
  "Suiza": "3-5-2",
  "Bosnia y Herzegovina": "4-4-2",
  "Brasil": "4-3-3",
  "Marruecos": "4-2-3-1",
  "Haitíí": "5-3-2",
  "Escocia": "4-4-2",
  "Estados Unidos": "4-3-3",
  "Paraguay": "4-4-2",
  "Australia": "4-2-3-1",
  "Turquía": "4-2-3-1",
  "Alemania": "4-2-3-1",
  "Curazao": "4-3-3",
  "Costa de Marfil": "4-3-3",
  "Ecuador": "3-5-2",
  "Países Bajos": "3-5-2",
  "Japón": "4-2-3-1",
  "Túnez": "5-3-2",
  "Suecia": "4-4-2",
  "Bélgica": "4-3-3",
  "Egipto": "4-2-3-1",
  "Irán": "4-4-2",
  "Nueva Zelanda": "5-3-2",
  "España": "4-3-3",
  "Cabo Verde": "4-3-3",
  "Arabia Saudita": "4-2-3-1",
  "Uruguay": "4-2-3-1",
  "Francia": "4-2-3-1",
  "Senegal": "4-3-3",
  "Noruega": "4-3-3",
  "Curazao": "5-3-2",
  "Argentina": "4-3-3",
  "Argelia": "4-4-2",
  "Austria": "4-2-3-1",
  "Jordania": "5-3-2",
  "Portugal": "4-3-3",
  "Uzbekistán": "3-5-2",
  "Colombia": "4-2-3-1",
  "República Democrática del Congo": "4-4-2",
  "Inglaterra": "4-2-3-1",
  "Croacia": "4-3-3",
  "Ghana": "4-2-3-1",
  "Panamáá": "5-3-2"
};

// Historial de enfrentamientos directos (H2H) en mundiales
function getMatchHistoryText(home, away) {
  const history = {
    "México-Sudáfrica": "Se enfrentaron en el Mundial 2010 (Empate 1-1).",
    "Sudáfrica-México": "Se enfrentaron en el Mundial 2010 (Empate 1-1).",
    "Alemania-Ecuador": "Se enfrentaron en el Mundial 2006 (Alemania ganó 3-0).",
    "Ecuador-Alemania": "Se enfrentaron en el Mundial 2006 (Alemania ganó 3-0).",
    "España-Arabia Saudita": "Se enfrentaron en el Mundial 2006 (España ganó 1-0).",
    "Arabia Saudita-España": "Se enfrentaron en el Mundial 2006 (España ganó 1-0).",
    "Francia-Senegal": "Se enfrentaron en el Mundial 2002 (Senegal ganó 1-0).",
    "Senegal-Francia": "Se enfrentaron en el Mundial 2002 (Senegal ganó 1-0).",
    "Inglaterra-Croacia": "Se enfrentaron en el Mundial 2018 (Croacia ganó 2-1 en prórroga).",
    "Croacia-Inglaterra": "Se enfrentaron en el Mundial 2018 (Croacia ganó 2-1 en prórroga).",
    "Brasil-Marruecos": "Se enfrentaron en el Mundial 1998 (Brasil ganó 3-0).",
    "Marruecos-Brasil": "Se enfrentaron en el Mundial 1998 (Brasil ganó 3-0).",
    "Bélgica-Egipto": "Nunca se han enfrentado en Mundiales de la FIFA.",
    "Egipto-Bélgica": "Nunca se han enfrentado en Mundiales de la FIFA."
  };
  const key = `${home}-${away}`;
  return history[key] || "No registran enfrentamientos previos en Mundiales de la FIFA.";
}

// Obtener valor de ordenación cronológica de partidos
function getMatchSortValue(m) {
  let day = 15;
  if (m.date) {
    const matchDay = m.date.match(/(\d+)/);
    if (matchDay) {
      day = parseInt(matchDay[1]);
    }
  }
  
  let hour = 12;
  let minute = 0;
  if (m.time) {
    const timeParts = m.time.split(":");
    if (timeParts.length >= 2) {
      hour = parseInt(timeParts[0]);
      minute = parseInt(timeParts[1]);
    } else {
      const hourMatch = m.time.match(/(\d+)/);
      if (hourMatch) {
        hour = parseInt(hourMatch[1]);
      }
    }
  } else {
    const CLT_HOURS = [12, 15, 18, 21];
    hour = CLT_HOURS[m.id % CLT_HOURS.length];
  }
  return day * 10000 + hour * 100 + minute;
}

// Auto-deslizar carrusel al día en curso y auto-seleccionar su partido
function scrollToToday() {
  const container = document.getElementById("match-ticker-container");
  if (!container) return;
  
  const today = new Date();
  let targetDay = 16; // 16 de Junio (CLT) es la fecha actual del sistema
  if (today.getFullYear() === 2026 && today.getMonth() === 5) {
    targetDay = today.getDate();
  }
  
  const cards = container.querySelectorAll(".ticker-card");
  for (let card of cards) {
    if (parseInt(card.dataset.day) === targetDay) {
      const cardLeft = card.offsetLeft;
      const containerWidth = container.offsetWidth;
      const cardWidth = card.offsetWidth;
      container.scrollLeft = cardLeft - (containerWidth / 2) + (cardWidth / 2);
      
      const matchId = parseInt(card.dataset.matchId);
      if (matchId) {
        selectMatch(matchId);
      }
      break;
    }
  }
}

// ==========================================================================
// MÉTODOS DE SOPORTE PARA ALINEACIONES Y COORDENADAS
// ==========================================================================
function getTeamRoster(teamName) {
  if (FIFA_DATA.rosters[teamName]) {
    return FIFA_DATA.rosters[teamName];
  }
  
  if (AppState.rostersCache[teamName]) {
    return AppState.rostersCache[teamName];
  }
  
  const positions = ["GK", "DEF", "DEF", "DEF", "DEF", "MID", "MID", "MID", "FWD", "FWD", "FWD"];
  
  // Bancos de apellidos por región/idioma
  const hispanic = ["García", "Fernández", "López", "Gómez", "Díaz", "Rodríguez", "Pérez", "González", "Sánchez", "Álvarez", "Martínez", "Rincón", "Castillo", "Flores", "Torres"];
  const english = ["Smith", "Jones", "Johnson", "Williams", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor", "Anderson", "Thomas", "Jackson", "White", "Harris"];
  const french = ["Martin", "Bernard", "Dubois", "Thomas", "Robert", "Richard", "Petit", "Durand", "Leroy", "Moreau", "Simon", "Michel", "Lefevre", "Legrand", "Garnier"];
  const germanic = ["Müller", "Schmidt", "Schneider", "Fischer", "Weber", "Meyer", "Wagner", "Becker", "Schulz", "Hoffmann", "Schäfer", "Bauer", "Richter", "Wolf", "Neumann"];
  const portuguese = ["Silva", "Santos", "Ferreira", "Oliveira", "Pereira", "Costa", "Rodrigues", "Almeida", "Nascimento", "Cardoso", "Sousa", "Gomes", "Martins", "Lopes", "Soares"];
  const asian = ["Kim", "Lee", "Park", "Choi", "Jung", "Kang", "Sato", "Suzuki", "Takahashi", "Tanaka", "Watanabe", "Nakamura", "Kobayashi", "Yamamoto", "Ito"];
  const arabic = ["Al-Dawsari", "Hassan", "Ali", "Ahmad", "Ibrahim", "Youssef", "Khalil", "Rahimi", "Mansour", "Kaddouri", "Haddad", "Hariri", "Said", "Mustafa", "Amir"];
  const african = ["Mensah", "Diallo", "Diop", "Touré", "Sow", "Keita", "Kone", "Traoré", "N'Diaye", "Kamara", "Osei", "Appiah", "Bamba", "Sissoko", "Sangare"];
  const easternEuro = ["Kovacić", "Modrić", "Novak", "Horvat", "Kowalski", "Ivanov", "Petrov", "Dimitrov", "Popescu", "Jovanović", "Hodžić", "Babić", "Kovačić", "Sarić", "Vidović"];

  let lastNames = [...english, ...hispanic]; // Fallback general
  
  const nameLower = teamName.toLowerCase();
  
  // Asignar lista de apellidos según coincidencia con el nombre del equipo
  if (["méxico", "paraguay", "haití", "ecuador", "españa", "cabo verde", "uruguay", "argentina", "colombia", "panamá", "honduras", "chile", "perú", "venezuela", "bolivia", "costa rica", "guatemala", "el salvador"].some(c => nameLower.includes(c))) {
    lastNames = hispanic;
  } else if (["brasil", "portugal", "angola", "mozambique"].some(c => nameLower.includes(c))) {
    lastNames = portuguese;
  } else if (["francia", "senegal", "camerún", "bélgica", "canadá", "mali", "guinea"].some(c => nameLower.includes(c))) {
    lastNames = [...french, ...african];
  } else if (["alemania", "austria", "suiza", "chequia", "suecia", "noruega", "dinamarca", "finlandia", "países bajos"].some(c => nameLower.includes(c))) {
    lastNames = [...germanic, ...english];
  } else if (["república de corea", "japón", "china", "corea", "vietnam"].some(c => nameLower.includes(c))) {
    lastNames = asian;
  } else if (["arabia saudita", "catar", "irán", "irak", "jordania", "túnez", "egipto", "marruecos", "argelia", "oman", "emiratos"].some(c => nameLower.includes(c))) {
    lastNames = arabic;
  } else if (["ghana", "sudáfrica", "nigeria", "congo", "rd del congo", "costa de marfil", "uganda", "kenia"].some(c => nameLower.includes(c))) {
    lastNames = african;
  } else if (["croacia", "bosnia", "bosnia y herzegovina", "uzbekistán", "polonia", "ucrania", "serbia", "eslovaquia", "rumanía", "bulgaria"].some(c => nameLower.includes(c))) {
    lastNames = easternEuro;
  } else if (["inglaterra", "estados unidos", "australia", "nueva zelanda", "escocia", "irlanda", "gales"].some(c => nameLower.includes(c))) {
    lastNames = english;
  }
  
  const roster = positions.map((pos, index) => {
    const randomName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const num = index === 0 ? 1 : (index + 2 + Math.floor(Math.random() * 15));
    return {
      num: num,
      name: randomName,
      pos: pos
    };
  });
  
  AppState.rostersCache[teamName] = roster;
  return roster;
}

function getPlayerPitchCoords(posIndex, isAway, formation = "4-3-3") {
  const formationsHome = {
    "4-3-3": [
      { left: 50, top: 90 },  // GK
      { left: 85, top: 78 },  // RB
      { left: 60, top: 80 },  // RCB
      { left: 40, top: 80 },  // LCB
      { left: 15, top: 78 },  // LB
      { left: 70, top: 68 },  // RCM
      { left: 50, top: 70 },  // CM
      { left: 30, top: 68 },  // LCM
      { left: 82, top: 54 },  // RW
      { left: 50, top: 54 },  // CF
      { left: 18, top: 54 }   // LW
    ],
    "4-4-2": [
      { left: 50, top: 90 },  // GK
      { left: 85, top: 78 },  // RB
      { left: 60, top: 80 },  // RCB
      { left: 40, top: 80 },  // LCB
      { left: 15, top: 78 },  // LB
      { left: 80, top: 68 },  // RM
      { left: 60, top: 70 },  // RCM
      { left: 40, top: 70 },  // LCM
      { left: 20, top: 68 },  // LM
      { left: 70, top: 54 },  // RCF
      { left: 30, top: 54 }   // LCF
    ],
    "3-5-2": [
      { left: 50, top: 90 },  // GK
      { left: 70, top: 80 },  // RCB
      { left: 50, top: 82 },  // CB
      { left: 30, top: 80 },  // LCB
      { left: 85, top: 68 },  // RM
      { left: 65, top: 70 },  // RCM
      { left: 50, top: 72 },  // CM
      { left: 35, top: 70 },  // LCM
      { left: 15, top: 68 },  // LM
      { left: 70, top: 54 },  // RCF
      { left: 30, top: 54 }   // LCF
    ],
    "5-3-2": [
      { left: 50, top: 90 },  // GK
      { left: 85, top: 78 },  // RWB
      { left: 65, top: 80 },  // RCB
      { left: 50, top: 82 },  // CB
      { left: 35, top: 80 },  // LCB
      { left: 15, top: 78 },  // LWB
      { left: 65, top: 68 },  // RCM
      { left: 50, top: 70 },  // CM
      { left: 35, top: 68 },  // LCM
      { left: 70, top: 54 },  // RCF
      { left: 30, top: 54 }   // LCF
    ],
    "4-2-3-1": [
      { left: 50, top: 90 },  // GK
      { left: 85, top: 78 },  // RB
      { left: 60, top: 80 },  // RCB
      { left: 40, top: 80 },  // LCB
      { left: 15, top: 78 },  // LB
      { left: 60, top: 70 },  // RDM
      { left: 40, top: 70 },  // LDM
      { left: 75, top: 60 },  // RAM
      { left: 50, top: 62 },  // AM
      { left: 25, top: 60 },  // LAM
      { left: 50, top: 54 }   // CF
    ]
  };

  const formationsAway = {
    "4-3-3": [
      { left: 50, top: 10 },  // GK
      { left: 15, top: 22 },  // LB
      { left: 40, top: 20 },  // LCB
      { left: 60, top: 20 },  // RCB
      { left: 85, top: 22 },  // RB
      { left: 30, top: 32 },  // LCM
      { left: 50, top: 30 },  // CM
      { left: 70, top: 32 },  // RCM
      { left: 18, top: 46 },  // LW
      { left: 50, top: 46 },  // CF
      { left: 82, top: 46 }   // RW
    ],
    "4-4-2": [
      { left: 50, top: 10 },  // GK
      { left: 15, top: 22 },  // LB
      { left: 40, top: 20 },  // LCB
      { left: 60, top: 20 },  // RCB
      { left: 85, top: 22 },  // RB
      { left: 20, top: 32 },  // LM
      { left: 40, top: 30 },  // LCM
      { left: 60, top: 30 },  // RCM
      { left: 80, top: 32 },  // RM
      { left: 30, top: 46 },  // LCF
      { left: 70, top: 46 }   // RCF
    ],
    "3-5-2": [
      { left: 50, top: 10 },  // GK
      { left: 30, top: 20 },  // LCB
      { left: 50, top: 18 },  // CB
      { left: 70, top: 20 },  // RCB
      { left: 15, top: 32 },  // LM
      { left: 35, top: 30 },  // LCM
      { left: 50, top: 28 },  // CM
      { left: 65, top: 30 },  // RCM
      { left: 85, top: 32 },  // RM
      { left: 30, top: 46 },  // LCF
      { left: 70, top: 46 }   // RCF
    ],
    "5-3-2": [
      { left: 50, top: 10 },  // GK
      { left: 15, top: 22 },  // LWB
      { left: 35, top: 20 },  // LCB
      { left: 50, top: 18 },  // CB
      { left: 65, top: 20 },  // RCB
      { left: 85, top: 22 },  // RWB
      { left: 35, top: 32 },  // LCM
      { left: 50, top: 30 },  // CM
      { left: 65, top: 32 },  // RCM
      { left: 30, top: 46 },  // LCF
      { left: 70, top: 46 }   // RCF
    ],
    "4-2-3-1": [
      { left: 50, top: 10 },  // GK
      { left: 15, top: 22 },  // LB
      { left: 40, top: 20 },  // LCB
      { left: 60, top: 20 },  // RCB
      { left: 85, top: 22 },  // RB
      { left: 40, top: 30 },  // LDM
      { left: 60, top: 30 },  // RDM
      { left: 25, top: 40 },  // LAM
      { left: 50, top: 38 },  // AM
      { left: 75, top: 40 },  // RAM
      { left: 50, top: 46 }   // CF
    ]
  };

  const selectedForm = isAway ? formationsAway[formation] : formationsHome[formation];
  const actualForm = selectedForm || (isAway ? formationsAway["4-3-3"] : formationsHome["4-3-3"]);
  return actualForm[posIndex] || { left: 50, top: 50 };
}

// ==========================================================================
// CÁLCULO DE TABLAS DE CLASIFICACIÓN (CRITERIO OFICIAL FIFA)
// ==========================================================================
function calculateStandings() {
  const standings = {};
  
  for (const teamName in FIFA_DATA.teams) {
    const group = FIFA_DATA.teams[teamName].group;
    if (!standings[group]) {
      standings[group] = [];
    }
    standings[group].push({
      name: teamName,
      pj: 0, pg: 0, pe: 0, pp: 0,
      gf: 0, gc: 0, dg: 0, pts: 0
    });
  }
  
  AppState.matches.forEach(match => {
    if (match.type === "group" && (match.status === "finished" || match.status === "live")) {
      const group = match.group;
      const homeTeam = standings[group].find(t => t.name === match.home);
      const awayTeam = standings[group].find(t => t.name === match.away);
      
      if (homeTeam && awayTeam) {
        homeTeam.pj += 1;
        awayTeam.pj += 1;
        homeTeam.gf += match.homeScore;
        homeTeam.gc += match.awayScore;
        awayTeam.gf += match.awayScore;
        awayTeam.gc += match.homeScore;
        
        if (match.homeScore > match.awayScore) {
          homeTeam.pg += 1;
          homeTeam.pts += 3;
          awayTeam.pp += 1;
        } else if (match.homeScore < match.awayScore) {
          awayTeam.pg += 1;
          awayTeam.pts += 3;
          homeTeam.pp += 1;
        } else {
          homeTeam.pe += 1;
          homeTeam.pts += 1;
          awayTeam.pe += 1;
          awayTeam.pts += 1;
        }
        
        homeTeam.dg = homeTeam.gf - homeTeam.gc;
        awayTeam.dg = awayTeam.gf - awayTeam.gc;
      }
    }
  });
  
  for (const group in standings) {
    standings[group].sort((a, b) => {
      if (b.pts !== a.pts) return b.pts - a.pts;
      if (b.dg !== a.dg) return b.dg - a.dg;
      if (b.gf !== a.gf) return b.gf - a.gf;
      return a.name.localeCompare(b.name);
    });
  }
  
  return standings;
}

// ==========================================================================
// RENDERIZADO DE ELEMENTOS DE LA INTERFAZ
// ==========================================================================

// 1. Carrusel de partidos
const TEAM_ABBREVIATIONS = {
  "México": "MEX",
  "Sudáfrica": "RSA",
  "República de Corea": "KOR",
  "Chequia": "CZE",
  "Canadáá": "CAN",
  "Catar": "QAT",
  "Suiza": "SUI",
  "Bosnia y Herzegovina": "BIH",
  "Brasil": "BRA",
  "Marruecos": "MAR",
  "Haitíí": "HAI",
  "Escocia": "SCO",
  "Estados Unidos": "USA",
  "Paraguay": "PAR",
  "Australia": "AUS",
  "Turquía": "TUR",
  "Alemania": "GER",
  "Curazao": "CUW",
  "Costa de Marfil": "CIV",
  "Ecuador": "ECU",
  "Países Bajos": "NED",
  "Japón": "JPN",
  "Túnez": "TUN",
  "Suecia": "SWE",
  "Bélgica": "BEL",
  "Egipto": "EGY",
  "Irán": "IRN",
  "Nueva Zelanda": "NZL",
  "España": "ESP",
  "Cabo Verde": "CPV",
  "Arabia Saudita": "KSA",
  "Uruguay": "URU",
  "Francia": "FRA",
  "Senegal": "SEN",
  "Noruega": "NOR",
  "Curazao": "IRQ",
  "Argentina": "ARG",
  "Argelia": "ALG",
  "Austria": "AUT",
  "Jordania": "JOR",
  "Portugal": "POR",
  "Uzbekistán": "UZB",
  "Colombia": "COL",
  "República Democrática del Congo": "COD",
  "Inglaterra": "ENG",
  "Croacia": "CRO",
  "Ghana": "GHA",
  "Panamáá": "PAN"
};

function getTeamAbbr(name) {
  return TEAM_ABBREVIATIONS[name] || (name ? name.substring(0, 3).toUpperCase() : "UNK");
}

function getMatchTimeText(match) {
  const grText = `Gr. ${match.group}`;
  
  if (match.status === "live") {
    return `<span class="live-status">${grText} | <span class="live-dot-pulse"></span>EN VIVO ${match.minute}'</span>`;
  }
  if (match.status === "finished") {
    return `<span class="finished-status">${grText} | Final</span>`;
  }
  
  // Usar hora estática del partido si existe, sino calcular procedimentalmente
  let cltHour = match.time;
  if (!cltHour) {
    const CLT_HOURS = ["12:00", "15:00", "18:00", "21:00"];
    cltHour = CLT_HOURS[match.id % CLT_HOURS.length];
  }
  
  // Formatear fecha ("11 de Junio, 2026" -> "11 Jun")
  let dateStr = match.date || "";
  let formattedDate = "";
  const dateMatch = dateStr.match(/(\d+)\s+de\s+(\w+)/i);
  if (dateMatch) {
    const day = dateMatch[1];
    const month = dateMatch[2].substring(0, 3);
    formattedDate = `${day} ${month}`;
  } else {
    // Check format like "15/06/2026"
    const slashMatch = dateStr.match(/(\d+)\/(\d+)\/(\d+)/);
    if (slashMatch) {
      const day = slashMatch[1];
      const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
      const monthIdx = parseInt(slashMatch[2]) - 1;
      const month = months[monthIdx] || "Jun";
      formattedDate = `${day} ${month}`;
    } else {
      formattedDate = dateStr.substring(0, 6);
    }
  }
  
  return `${grText} | ${formattedDate} - ${cltHour}`;
}

// 1. Carrusel de partidos (Estilo ESPN Sports Ticker)
function renderMatchTicker() {
  const container = document.getElementById("match-ticker-container");
  container.innerHTML = "";
  
  let filteredMatches = AppState.matches;
  if (AppState.tickerFilter !== "all") {
    filteredMatches = AppState.matches.filter(m => m.status === AppState.tickerFilter);
  }
  
  if (filteredMatches.length === 0) {
    container.innerHTML = `<div class="ticker-loading">No hay partidos para mostrar.</div>`;
    return;
  }
  
  // Ordenar cronológicamente por día y kickoff
  filteredMatches.sort((a, b) => getMatchSortValue(a) - getMatchSortValue(b));
  
  filteredMatches.forEach(match => {
    const isSelected = match.id === AppState.activeMatchId;
    const homeTeamInfo = FIFA_DATA.teams[match.home];
    const awayTeamInfo = FIFA_DATA.teams[match.away];
    
    if (!homeTeamInfo || !awayTeamInfo) return;
    
    const card = document.createElement("div");
    card.className = `ticker-card ${isSelected ? "active-match" : ""}`;
    
    // Extraer número de día para auto-scroll y guardarlo en dataset
    let dayVal = "15";
    if (match.date) {
      const dayMatch = match.date.match(/(\d+)/);
      if (dayMatch) dayVal = dayMatch[1];
    }
    card.dataset.day = dayVal;
    card.dataset.matchId = match.id;
    
    card.onclick = () => {
      selectMatch(match.id);
    };
    
    const homeAbbr = getTeamAbbr(match.home);
    const awayAbbr = getTeamAbbr(match.away);
    const timeHtml = getMatchTimeText(match);
    
    let homeScoreHtml = "";
    let awayScoreHtml = "";
    if (match.status !== "scheduled") {
      homeScoreHtml = `<span class="ticker-score">${match.homeScore}</span>`;
      awayScoreHtml = `<span class="ticker-score">${match.awayScore}</span>`;
    }
    
    card.innerHTML = `
      <div class="ticker-time-status">${timeHtml}</div>
      <div class="ticker-team-row">
        <div class="ticker-team-info">
          ${homeTeamInfo.flag}
          <span class="ticker-team-name">${homeAbbr}</span>
        </div>
        ${homeScoreHtml}
      </div>
      <div class="ticker-team-row">
        <div class="ticker-team-info">
          ${awayTeamInfo.flag}
          <span class="ticker-team-name">${awayAbbr}</span>
        </div>
        ${awayScoreHtml}
      </div>
    `;
    container.appendChild(card);
  });
}

// Funciones globales de navegación y filtrado del ticker
function filterTicker(value) {
  AppState.tickerFilter = value;
  renderMatchTicker();
}

function scrollTicker(direction) {
  const container = document.getElementById("match-ticker-container");
  if (container) {
    const scrollAmount = 330 * direction; // Desplazar exactamente un partido a la vez (330px de ancho de tarjeta)
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  }
}

window.filterTicker = filterTicker;
window.scrollTicker = scrollTicker;

// 2. Selección de partido
function selectMatch(matchId) {
  AppState.activeMatchId = matchId;
  renderMatchTicker();
  renderMatchCenter();
}

// 3. Renderizado del centro del partido
function renderMatchCenter() {
  const match = AppState.matches.find(m => m.id === AppState.activeMatchId);
  if (!match) return;
  
  enrichMatchEvents(match);
  
  const homeTeamInfo = FIFA_DATA.teams[match.home];
  const awayTeamInfo = FIFA_DATA.teams[match.away];
  
  document.getElementById("mc-match-title").textContent = `Grupo ${match.group} - ${match.stadium}`;
  document.getElementById("mc-home-flag").innerHTML = homeTeamInfo.flag;
  document.getElementById("mc-home-name").textContent = match.home;
  document.getElementById("mc-away-flag").innerHTML = awayTeamInfo.flag;
  document.getElementById("mc-away-name").textContent = match.away;
  
  if (match.status === "scheduled") {
    document.getElementById("mc-home-score").textContent = "-";
    document.getElementById("mc-away-score").textContent = "-";
    document.getElementById("mc-match-status").textContent = "Programado";
    document.getElementById("mc-match-status").className = "match-time-badge";
  } else if (match.status === "live") {
    document.getElementById("mc-home-score").textContent = match.homeScore;
    document.getElementById("mc-away-score").textContent = match.awayScore;
    document.getElementById("mc-match-status").innerHTML = `<span class="live-time-pulse">EN VIVO ${match.minute}'</span>`;
    document.getElementById("mc-match-status").className = "match-time-badge live-time-pulse";
  } else {
    document.getElementById("mc-home-score").textContent = match.homeScore;
    document.getElementById("mc-away-score").textContent = match.awayScore;
    document.getElementById("mc-match-status").textContent = "Finalizado";
    document.getElementById("mc-match-status").className = "match-time-badge";
  }
  
  const h2hBox = document.getElementById("mc-h2h-box");
  if (h2hBox) {
    const h2hText = getMatchHistoryText(match.home, match.away);
    h2hBox.innerHTML = `<span class="h2h-label">Historial H2H:</span> ${h2hText}`;
  }

  renderPitchPlayers(match);
  renderStatsTab(match);
  renderTimelineTab(match);
}

// 3a. Alineación en Cancha 2D
function renderPitchPlayers(match) {
  const container = document.getElementById("pitch-players-container");
  container.innerHTML = "";
  
  const homeRoster = getTeamRoster(match.home);
  const awayRoster = getTeamRoster(match.away);
  
  const goalsByPlayer = {};
  const yellowCardsByPlayer = {};
  const redCardsByPlayer = {};
  
  // Filtrar eventos si el partido está en vivo para no mostrar goles futuros en la cancha
  let eventsToShow = match.events || [];
  if (match.status === "live") {
    eventsToShow = eventsToShow.filter(ev => ev.minute <= match.minute);
  }
  
  eventsToShow.forEach(ev => {
    if (ev.type === "goal") {
      goalsByPlayer[ev.player] = (goalsByPlayer[ev.player] || 0) + 1;
    } else if (ev.type === "yellow") {
      yellowCardsByPlayer[ev.player] = (yellowCardsByPlayer[ev.player] || 0) + 1;
    } else if (ev.type === "red") {
      redCardsByPlayer[ev.player] = true;
    }
  });

  const homeColors = FIFA_DATA.teams[match.home]?.colors || ["#006847", "#ffffff"];
  const awayColors = FIFA_DATA.teams[match.away]?.colors || ["#ffc400", "#000000"];

  const homeFormation = teamFormations[match.home] || "4-3-3";
  const awayFormation = teamFormations[match.away] || "4-3-3";

  homeRoster.forEach((player, idx) => {
    const coords = getPlayerPitchCoords(idx, false, homeFormation);
    createPlayerNode(container, player, coords, false, goalsByPlayer, yellowCardsByPlayer, redCardsByPlayer, homeColors);
  });
  
  awayRoster.forEach((player, idx) => {
    const coords = getPlayerPitchCoords(idx, true, awayFormation);
    createPlayerNode(container, player, coords, true, goalsByPlayer, yellowCardsByPlayer, redCardsByPlayer, awayColors);
  });
}

function getContrastColor(hex) {
  if (!hex || hex.startsWith("var")) return "#ffffff";
  let color = hex.replace("#", "");
  if (color.length === 3) {
    color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2];
  }
  const r = parseInt(color.substring(0, 2), 16);
  const g = parseInt(color.substring(2, 4), 16);
  const b = parseInt(color.substring(4, 6), 16);
  const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
  return (yiq >= 128) ? "#000000" : "#ffffff";
}

function createPlayerNode(container, player, coords, isAway, goals, yellows, reds, teamColors) {
  const node = document.createElement("div");
  node.className = `player-node ${isAway ? "team-away-player" : ""}`;
  node.style.left = `${coords.left}%`;
  node.style.top = `${coords.top}%`;
  
  let badgesHtml = "";
  if (goals[player.name]) {
    badgesHtml += `<span class="p-badge p-goal" title="Goles: ${goals[player.name]}">⚽</span>`;
  }
  if (yellows[player.name]) {
    badgesHtml += `<span class="p-badge card-y" title="Amarillas: ${yellows[player.name]}">🟨</span>`;
  }
  if (reds[player.name]) {
    badgesHtml += `<span class="p-badge card-r" title="Expulsado">🟥</span>`;
  }
  
  const primaryColor = teamColors[0];
  const secondaryColor = teamColors[1];
  const textColor = getContrastColor(primaryColor);
  
  node.innerHTML = `
    <div class="shirt-circle" style="background: ${primaryColor}; border-color: ${secondaryColor}; color: ${textColor};">
      ${player.num}
      <div class="player-badge-container">${badgesHtml}</div>
    </div>
    <span class="player-name" title="${player.name}">${player.name}</span>
  `;
  container.appendChild(node);
}

// Función para enriquecer los eventos con sustituciones realistas (desactivado por petición del usuario)
function enrichMatchEvents(match) {
  if (match.status === "scheduled") return;
  if (!match.events) match.events = [];
  return; // No simular sustituciones
  
  let hash = match.id;
  const homeRoster = getTeamRoster(match.home);
  const awayRoster = getTeamRoster(match.away);
  
  const benchNames = ["Gómez", "Rodríguez", "Sánchez", "Fernández", "López", "Pérez", "González", "Martínez", "Silva", "Costa"];
  
  // 3 Cambios para el equipo local
  const homeSubMinutes = [55 + (hash % 7), 70 + (hash % 8), 80 + (hash % 6)];
  homeSubMinutes.forEach((min, idx) => {
    const starterIdx = (5 + idx * 2) % homeRoster.length;
    const targetIdx = starterIdx === 0 ? 1 : starterIdx;
    const starter = homeRoster[targetIdx];
    const benchPlayer = benchNames[(hash + idx) % benchNames.length];
    
    match.events.push({
      minute: min,
      type: "sub",
      team: "home",
      player: `${benchPlayer} por ${starter.name}`,
      detail: `Sustitución en ${match.home}: Entra ${benchPlayer} en reemplazo de ${starter.name}.`
    });
  });
  
  // 3 Cambios para el equipo visitante
  const awaySubMinutes = [58 + (hash % 6), 72 + (hash % 7), 83 + (hash % 5)];
  awaySubMinutes.forEach((min, idx) => {
    const starterIdx = (6 + idx * 2) % awayRoster.length;
    const targetIdx = starterIdx === 0 ? 2 : starterIdx;
    const starter = awayRoster[targetIdx];
    const benchPlayer = benchNames[(hash + idx + 3) % benchNames.length];
    
    match.events.push({
      minute: min,
      type: "sub",
      team: "away",
      player: `${benchPlayer} por ${starter.name}`,
      detail: `Sustitución en ${match.away}: Entra ${benchPlayer} en reemplazo de ${starter.name}.`
    });
  });
  
  match.events.sort((a, b) => a.minute - b.minute);
}

// 3b. Estadísticas
function renderStatsTab(match) {
  const container = document.getElementById("mc-stats-bars");
  container.innerHTML = "";
  
  if (match.status === "scheduled") {
    container.innerHTML = `<div class="no-data-msg">Estadísticas oficiales no disponibles para partidos programados.</div>`;
    return;
  }
  
  // Enriquecer eventos con cambios
  enrichMatchEvents(match);
  
  // Contar tarjetas y cambios
  let yellowHome = 0, yellowAway = 0;
  let redHome = 0, redAway = 0;
  let subHome = 0, subAway = 0;
  
  if (match.events) {
    match.events.forEach(ev => {
      if (ev.type === "yellow") {
        if (ev.team === "home") yellowHome++;
        else yellowAway++;
      } else if (ev.type === "red") {
        if (ev.team === "home") redHome++;
        else redAway++;
      } else if (ev.type === "sub") {
        if (ev.team === "home") subHome++;
        else subAway++;
      }
    });
  }
  
  const matchStats = {
    possession: [50, 50],
    shots: [5, 5],
    shotsTarget: [2, 2],
    fouls: [10, 10],
    corners: [4, 4],
    passes: [85, 85],
    ...(match.stats || {}),
    yellowCards: [yellowHome, yellowAway],
    redCards: [redHome, redAway],
    subs: [subHome, subAway]
  };
  
  const statsKeys = [
    { key: "possession", label: "Posesión de Balón (%)" },
    { key: "shots", label: "Disparos Totales" },
    { key: "shotsTarget", label: "Disparos al Arco" },
    { key: "yellowCards", label: "Tarjetas Amarillas" },
    { key: "redCards", label: "Tarjetas Rojas" },
    { key: "subs", label: "Sustituciones" },
    { key: "fouls", label: "Faltas Cometidas" },
    { key: "corners", label: "Saques de Esquina" },
    { key: "passes", label: "Efectividad de Pases (%)" }
  ];
  
  statsKeys.forEach(s => {
    const valHome = matchStats[s.key][0];
    const valAway = matchStats[s.key][1];
    const total = valHome + valAway;
    const percentHome = total === 0 ? 50 : Math.round((valHome / total) * 100);
    
    const row = document.createElement("div");
    row.className = "stat-row";
    row.innerHTML = `
      <div class="stat-label-group">
        <span class="stat-val">${valHome}</span>
        <span>${s.label}</span>
        <span class="stat-val">${valAway}</span>
      </div>
      <div class="bar-track">
        <div class="bar-fill home-fill" style="width: ${percentHome}%"></div>
        <div class="bar-fill away-fill" style="width: ${100 - percentHome}%"></div>
      </div>
    `;
    container.appendChild(row);
  });
  
  // Agregar detalle de incidencias debajo de las barras
  let homeIncidencesHtml = "";
  let awayIncidencesHtml = "";
  
  const categories = [
    { type: "goal", title: "⚽ Goles" },
    { type: "yellow", title: "🟨 Tarjetas" },
    { type: "red", title: "🟥 Expulsiones" },
    { type: "sub", title: "🔄 Cambios" }
  ];
  
  categories.forEach(cat => {
    const homeFiltered = match.events.filter(ev => ev.type === cat.type && ev.team === "home");
    const awayFiltered = match.events.filter(ev => ev.type === cat.type && ev.team === "away");
    
    if (homeFiltered.length > 0) {
      homeIncidencesHtml += `
        <div class="stats-detail-category">
          <span class="category-title">${cat.title}</span>
          <ul>
            ${homeFiltered.map(ev => {
              if (ev.type === "sub") {
                return `<li><span class="evt-min">${ev.minute}'</span> <span class="evt-sub-icon">🔄</span> ${ev.player}</li>`;
              } else if (ev.type === "goal") {
                return `<li><span class="evt-min">${ev.minute}'</span> <span class="evt-goal-icon">⚽</span> <strong>${ev.player}</strong></li>`;
              } else if (ev.type === "yellow") {
                return `<li><span class="evt-min">${ev.minute}'</span> <span class="evt-card-y">🟨</span> ${ev.player}</li>`;
              } else if (ev.type === "red") {
                return `<li><span class="evt-min">${ev.minute}'</span> <span class="evt-card-r">🟥</span> <strong>${ev.player}</strong></li>`;
              }
              return `<li><span class="evt-min">${ev.minute}'</span> ${ev.player}</li>`;
            }).join('')}
          </ul>
        </div>
      `;
    }
    
    if (awayFiltered.length > 0) {
      awayIncidencesHtml += `
        <div class="stats-detail-category">
          <span class="category-title">${cat.title}</span>
          <ul>
            ${awayFiltered.map(ev => {
              if (ev.type === "sub") {
                return `<li><span class="evt-min">${ev.minute}'</span> <span class="evt-sub-icon">🔄</span> ${ev.player}</li>`;
              } else if (ev.type === "goal") {
                return `<li><span class="evt-min">${ev.minute}'</span> <span class="evt-goal-icon">⚽</span> <strong>${ev.player}</strong></li>`;
              } else if (ev.type === "yellow") {
                return `<li><span class="evt-min">${ev.minute}'</span> <span class="evt-card-y">🟨</span> ${ev.player}</li>`;
              } else if (ev.type === "red") {
                return `<li><span class="evt-min">${ev.minute}'</span> <span class="evt-card-r">🟥</span> <strong>${ev.player}</strong></li>`;
              }
              return `<li><span class="evt-min">${ev.minute}'</span> ${ev.player}</li>`;
            }).join('')}
          </ul>
        </div>
      `;
    }
  });
  
  if (homeIncidencesHtml || awayIncidencesHtml) {
    const detailsDivider = document.createElement("div");
    detailsDivider.className = "stats-details-divider";
    detailsDivider.textContent = "DETALLE DE INCIDENCIAS";
    container.appendChild(detailsDivider);
    
    const detailsRow = document.createElement("div");
    detailsRow.className = "stats-details-row";
    detailsRow.innerHTML = `
      <div class="stats-details-column home-column">
        ${homeIncidencesHtml || '<div class="no-incidences-msg">Sin incidencias</div>'}
      </div>
      <div class="stats-details-column away-column">
        ${awayIncidencesHtml || '<div class="no-incidences-msg">Sin incidencias</div>'}
      </div>
    `;
    container.appendChild(detailsRow);
  }
}

// 3c. Línea de tiempo / Eventos
function renderTimelineTab(match) {
  const container = document.getElementById("mc-events-timeline");
  container.innerHTML = "";
  
  // Filtrar eventos si el partido está en vivo (solo mostrar eventos hasta el minuto actual)
  let eventsToShow = match.events || [];
  if (match.status === "live") {
    eventsToShow = eventsToShow.filter(ev => ev.minute <= match.minute);
  }
  
  if (eventsToShow.length === 0) {
    container.innerHTML = `<div class="no-data-msg">No se registraron tarjetas ni goles en este encuentro.</div>`;
    return;
  }
  
  // Calcular goles acumulados de forma cronológica (de menor a mayor minuto)
  const chronologicalGoals = eventsToShow
    .filter(ev => ev.type === "goal")
    .sort((a, b) => a.minute - b.minute);
    
  let homeScoreAcc = 0;
  let awayScoreAcc = 0;
  chronologicalGoals.forEach(ev => {
    if (ev.team === "home") {
      homeScoreAcc++;
    } else {
      awayScoreAcc++;
    }
    ev.cumulativeScore = `${homeScoreAcc}-${awayScoreAcc}`;
  });
  
  // Mostrar los eventos ordenados de forma descendente (el más reciente arriba)
  const sortedEvents = [...eventsToShow].sort((a, b) => b.minute - a.minute);
  
  sortedEvents.forEach(ev => {
    const item = document.createElement("div");
    item.className = "timeline-item";
    
    let markerClass = "event-sub";
    let icon = "🔄";
    
    if (ev.type === "goal") {
      markerClass = "event-goal";
      icon = "⚽";
    } else if (ev.type === "yellow") {
      markerClass = "event-yellow";
      icon = "🟨";
    } else if (ev.type === "red") {
      markerClass = "event-red";
      icon = "🟥";
    }
    
    const isHome = ev.team === "home";
    const teamFlag = isHome ? FIFA_DATA.teams[match.home].flag : FIFA_DATA.teams[match.away].flag;
    const teamName = isHome ? match.home : match.away;
    
    if (ev.type === "goal") {
      item.innerHTML = `
        <div class="timeline-marker ${markerClass}"></div>
        <div class="timeline-content">
          <span class="timeline-time">${ev.minute}' - ⚽ ¡GOL!</span>
          <span class="timeline-title" style="font-size: 1rem; color: white;"><strong>${ev.player}</strong> (${teamFlag} ${teamName})</span>
          <span class="timeline-desc" style="font-size: 0.9rem; color: var(--accent-gold); font-weight: 600;">⚽ GOL de ${ev.player} | Marcador: ${ev.cumulativeScore || ''}</span>
        </div>
      `;
    } else {
      item.innerHTML = `
        <div class="timeline-marker ${markerClass}"></div>
        <div class="timeline-content">
          <span class="timeline-time">${ev.minute}' - ${icon} Evento Oficial</span>
          <span class="timeline-title">${ev.player} (${teamFlag} ${teamName})</span>
          <span class="timeline-desc">${ev.detail}</span>
        </div>
      `;
    }
    container.appendChild(item);
  });
}

// 4. Tablas de Posiciones de Grupos
function renderStandings() {
  const container = document.getElementById("groups-container");
  container.innerHTML = "";
  
  const standings = calculateStandings();
  
  for (const groupLetter in standings) {
    const groupData = standings[groupLetter];
    
    const card = document.createElement("div");
    card.className = "group-card";
    
    let rowsHtml = "";
    groupData.forEach((team, idx) => {
      const teamInfo = FIFA_DATA.teams[team.name];
      
      let rowClass = "";
      if (idx < 2) {
        rowClass = "row-qualify-next";
      } else if (idx === 2) {
        rowClass = "row-qualify-3rd";
      }
      
      rowsHtml += `
        <tr class="${rowClass}">
          <td class="table-num">${idx + 1}</td>
          <td>
            <div class="table-team-col">
              <span class="table-flag">${teamInfo.flag}</span>
              <span>${team.name}</span>
            </div>
          </td>
          <td style="text-align: center;">${team.pj}</td>
          <td style="text-align: center;">${team.pg}</td>
          <td style="text-align: center;">${team.pe}</td>
          <td style="text-align: center;">${team.pp}</td>
          <td style="text-align: center;">${team.gf}</td>
          <td style="text-align: center;">${team.gc}</td>
          <td style="text-align: center;">${team.dg >= 0 ? "+" + team.dg : team.dg}</td>
          <td style="text-align: center; font-weight: 600; color: var(--primary-light);">${team.pts}</td>
        </tr>
      `;
    });
    
    card.innerHTML = `
      <h3>Grupo ${groupLetter} <span>FIFA.com</span></h3>
      <table class="group-table">
        <thead>
          <tr>
            <th style="width: 25px; text-align: center;">#</th>
            <th>Selección</th>
            <th style="width: 25px; text-align: center;" title="Partidos Jugados">PJ</th>
            <th style="width: 25px; text-align: center;" title="Partidos Ganados">PG</th>
            <th style="width: 25px; text-align: center;" title="Partidos Empatados">PE</th>
            <th style="width: 25px; text-align: center;" title="Partidos Perdidos">PP</th>
            <th style="width: 25px; text-align: center;" title="Goles a Favor">GF</th>
            <th style="width: 25px; text-align: center;" title="Goles en Contra">GC</th>
            <th style="width: 30px; text-align: center;" title="Diferencia de Goles">DIF</th>
            <th style="width: 30px; text-align: center;" title="Puntos">PTS</th>
          </tr>
        </thead>
        <tbody>
          ${rowsHtml}
        </tbody>
      </table>
    `;
    container.appendChild(card);
  }
}

// 4b. Partidos de Grupo Ordenados por Grupo
function renderGroupMatches() {
  const container = document.getElementById("group-matches-container");
  if (!container) return;
  container.innerHTML = "";

  // Agrupar los partidos por grupo A-L
  const matchesByGroup = {};
  for (let charCode = 65; charCode <= 76; charCode++) {
    const groupLetter = String.fromCharCode(charCode);
    matchesByGroup[groupLetter] = [];
  }

  AppState.matches.forEach(m => {
    if (m.group && matchesByGroup[m.group]) {
      matchesByGroup[m.group].push(m);
    }
  });

  // Renderizar cada grupo
  for (let charCode = 65; charCode <= 76; charCode++) {
    const groupLetter = String.fromCharCode(charCode);
    const groupMatches = matchesByGroup[groupLetter];

    // Ordenar por ID para mantener orden de rondas (Round 1, Round 2, Round 3)
    groupMatches.sort((a, b) => a.id - b.id);

    const card = document.createElement("div");
    card.className = "group-card group-matches-card";

    let rowsHtml = "";
    groupMatches.forEach(m => {
      const homeInfo = FIFA_DATA.teams[m.home] || { flag: "🏁" };
      const awayInfo = FIFA_DATA.teams[m.away] || { flag: "🏁" };
      
      let scoreHtml = "";
      if (m.status === "finished") {
        scoreHtml = `<span class="gm-score finished">${m.homeScore} - ${m.awayScore}</span>`;
      } else if (m.status === "live") {
        scoreHtml = `<span class="gm-score live">${m.homeScore} - ${m.awayScore}<span class="gm-live-dot"></span></span>`;
      } else {
        scoreHtml = `<span class="gm-score scheduled">${m.time}</span>`;
      }

      rowsHtml += `
        <div class="gm-row" data-id="${m.id}">
          <div class="gm-info">
            <span class="gm-date">${m.date}</span>
            <span class="gm-stadium">${m.stadium}</span>
          </div>
          <div class="gm-teams-score">
            <div class="gm-team gm-team-home">
              <span class="gm-team-name">${m.home}</span>
              <span class="gm-flag">${homeInfo.flag}</span>
            </div>
            <div class="gm-score-wrapper">
              ${scoreHtml}
            </div>
            <div class="gm-team gm-team-away">
              <span class="gm-flag">${awayInfo.flag}</span>
              <span class="gm-team-name">${m.away}</span>
            </div>
          </div>
        </div>
      `;
    });

    card.innerHTML = `
      <h3>Grupo ${groupLetter}</h3>
      <div class="gm-rows-container">
        ${rowsHtml}
      </div>
    `;

    // Agregar event listeners dinámicos a las filas
    card.querySelectorAll(".gm-row").forEach(row => {
      row.addEventListener("click", () => {
        const matchId = parseInt(row.getAttribute("data-id"));
        selectMatch(matchId);
      });
    });

    container.appendChild(card);
  }
}

// 5. Brackets de Eliminatorias
function renderBracket() {
  const container = document.getElementById("bracket-container");
  container.innerHTML = "";
  const wc = window.WORLDCUPS_DATA ? window.WORLDCUPS_DATA.find(w => w.year === 2026) : null;
  if (wc) {
    renderHistoryKnockout(wc, "bracket-container");
  }
}

// 7. Goles Totales del Torneo
function updateTournamentStats() {
  let goals = 0;
  AppState.matches.forEach(m => {
    if (m.status !== "scheduled") {
      goals += m.homeScore + m.awayScore;
    }
  });
  goals += 42; // goles acumulados simulados de playoffs
  const goalsEl = document.getElementById("summary-total-goals");
  if (goalsEl) goalsEl.textContent = goals;
}

// ==========================================================================
// MOTOR DE SINCRONIZACIÓN EN VIVO (FIFA.COM REAL-TIME API)
// ==========================================================================

const TEAM_TRANSLATIONS = {
  "Mexico": "México",
  "South Africa": "Sudáfrica",
  "South Korea": "República de Corea",
  "Czech Republic": "Chequia",
  "Canadáa": "Canadáá",
  "Qatar": "Catar",
  "Switzerland": "Suiza",
  "Bosnia and Herzegovina": "Bosnia y Herzegovina",
  "Brazil": "Brasil",
  "Morocco": "Marruecos",
  "Haitíi": "Haitíí",
  "Scotland": "Escocia",
  "United States": "Estados Unidos",
  "Paraguay": "Paraguay",
  "Australia": "Australia",
  "Turkey": "Turquía",
  "Germany": "Alemania",
  "Curaçao": "Curazao",
  "Curacao": "Curazao",
  "Ivory Coast": "Costa de Marfil",
  "Ecuador": "Ecuador",
  "Netherlands": "Países Bajos",
  "Japan": "Japón",
  "Tunisia": "Túnez",
  "Sweden": "Suecia",
  "Belgium": "Bélgica",
  "Egypt": "Egipto",
  "Iran": "Irán",
  "New Zealand": "Nueva Zelanda",
  "Spain": "España",
  "Cape Verde": "Cabo Verde",
  "Saudi Arabia": "Arabia Saudita",
  "Uruguay": "Uruguay",
  "France": "Francia",
  "Senegal": "Senegal",
  "Norway": "Noruega",
  "Iraq": "Curazao",
  "Argentina": "Argentina",
  "Algeria": "Argelia",
  "Austria": "Austria",
  "Jordan": "Jordania",
  "Portugal": "Portugal",
  "Uzbekistan": "Uzbekistán",
  "Colombia": "Colombia",
  "Democratic Republic of the Congo": "República Democrática del Congo",
  "England": "Inglaterra",
  "Croatia": "Croacia",
  "Ghana": "Ghana",
  "Panamáa": "Panamáá"
};

function cleanPlayerName(name) {
  if (!name) return "";
  let cleaned = name.replace(/^[A-Z]\.(?:\s*[A-Z]\.)?\s+/, "");
  cleaned = cleaned.replace(/^[A-Za-z]\.\s+/, "");
  return cleaned;
}

function parseScorers(scorersStr) {
  if (!scorersStr || scorersStr === "null") return [];
  try {
    const matches = scorersStr.match(/"([^"\\]*(?:\\.[^"\\]*)*)"/g);
    if (matches) {
      return matches.map(m => m.replace(/"/g, '').trim());
    }
  } catch (e) {
    console.error("Error parsing scorers string:", scorersStr, e);
  }
  return [];
}

function parseScorerString(scorerStr) {
  const res = {
    player: scorerStr,
    minute: 45,
    isPenalty: false,
    isOwnGoal: false
  };
  const minMatch = scorerStr.match(/\s+(\d+)(?:\+(\d+))?'/);
  if (minMatch) {
    res.minute = parseInt(minMatch[1]) + (parseInt(minMatch[2]) || 0);
    res.player = scorerStr.substring(0, minMatch.index).trim();
  }
  if (scorerStr.toLowerCase().includes("(p)") || scorerStr.toLowerCase().includes("penalty")) {
    res.isPenalty = true;
  }
  if (scorerStr.toLowerCase().includes("(og)") || scorerStr.toLowerCase().includes("own goal") || scorerStr.toLowerCase().includes("o.g.")) {
    res.isOwnGoal = true;
  }
  return res;
}

function formatApiDate(localDateStr) {
  if (!localDateStr) return "Fecha por confirmar";
  try {
    const parts = localDateStr.split(" ");
    const dateParts = parts[0].split("/");
    const day = parseInt(dateParts[1]);
    const monthIdx = parseInt(dateParts[0]) - 1;
    const year = dateParts[2];
    const months = [
      "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
      "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    return `${day} de ${months[monthIdx]}, ${year}`;
  } catch (e) {
    return localDateStr;
  }
}

function getStadiumNameById(stadiumId) {
  const id = parseInt(stadiumId) || 1;
  const idx = (id - 1) % FIFA_DATA.stadiums.length;
  return FIFA_DATA.stadiums[idx].name;
}

function generateDeterministicStats(homeName, awayName, homeScore, awayScore) {
  let hash = 0;
  const combined = homeName + awayName;
  for (let i = 0; i < combined.length; i++) {
    hash = combined.charCodeAt(i) + ((hash << 5) - hash);
  }
  hash = Math.abs(hash);
  const possessionHome = 40 + (hash % 21);
  const possessionAway = 100 - possessionHome;
  const baseShotsHome = 5 + (homeScore * 3) + (hash % 6);
  const baseShotsAway = 5 + (awayScore * 3) + ((hash >> 2) % 6);
  const shotsTargetHome = Math.min(baseShotsHome, homeScore + 1 + (hash % 4));
  const shotsTargetAway = Math.min(baseShotsAway, awayScore + 1 + ((hash >> 3) % 4));
  const foulsHome = 8 + (hash % 10);
  const foulsAway = 8 + ((hash >> 4) % 10);
  const cornersHome = 2 + (hash % 6);
  const cornersAway = 2 + ((hash >> 5) % 6);
  const passesHome = 78 + (hash % 13);
  const passesAway = 78 + ((hash >> 6) % 13);
  return {
    possession: [possessionHome, possessionAway],
    shots: [baseShotsHome, baseShotsAway],
    shotsTarget: [shotsTargetHome, shotsTargetAway],
    fouls: [foulsHome, foulsAway],
    corners: [cornersHome, cornersAway],
    passes: [passesHome, passesAway]
  };
}

function generateDeterministicCards(match, homeRoster, awayRoster) {
  return [];
}

function updateMatchesData(apiGames) {
  let updatedAny = false;
  apiGames.forEach(apiGame => {
    const homeSp = TEAM_TRANSLATIONS[apiGame.home_team_name_en];
    const awaySp = TEAM_TRANSLATIONS[apiGame.away_team_name_en];
    if (!homeSp || !awaySp) return;
    let localMatch = AppState.matches.find(m => 
      (m.home === homeSp && m.away === awaySp) || 
      (m.home === awaySp && m.away === homeSp)
    );
    const apiHomeScore = parseInt(apiGame.home_score) || 0;
    const apiAwayScore = parseInt(apiGame.away_score) || 0;
    const apiFinished = apiGame.finished === "TRUE" || apiGame.time_elapsed === "finished";
    const apiIsLive = apiGame.time_elapsed === "live" || (!apiFinished && apiGame.time_elapsed !== "notstarted" && parseInt(apiGame.time_elapsed) > 0);
    let apiStatus = "scheduled";
    if (apiFinished) apiStatus = "finished";
    else if (apiIsLive) apiStatus = "live";
    let apiMinute = 0;
    if (apiFinished) apiMinute = 90;
    else if (apiIsLive) {
      apiMinute = parseInt(apiGame.time_elapsed) || 45;
    }
    
    // Forzar estado finalizado y minuto 90 si el partido es de ayer (15 de junio o antes)
    let matchDateStr = "";
    if (localMatch) {
      matchDateStr = localMatch.date;
    } else if (apiGame.local_date) {
      matchDateStr = formatApiDate(apiGame.local_date);
    }
    if (matchDateStr) {
      const dayMatch = matchDateStr.match(/(\d+)/);
      if (dayMatch) {
        const dayVal = parseInt(dayMatch[1]);
        if (dayVal < 16) {
          apiStatus = "finished";
          apiMinute = 90;
        }
      }
    }
    if (localMatch) {
      const isReversed = localMatch.home !== homeSp;
      const mappedHomeScore = isReversed ? apiAwayScore : apiHomeScore;
      const mappedAwayScore = isReversed ? apiHomeScore : apiAwayScore;
      
      if (localMatch.homeScore !== mappedHomeScore || 
          localMatch.awayScore !== mappedAwayScore || 
          localMatch.status !== apiStatus ||
          localMatch.minute !== apiMinute) {
        localMatch.homeScore = mappedHomeScore;
        localMatch.awayScore = mappedAwayScore;
        localMatch.status = apiStatus;
        localMatch.minute = apiMinute;
        const events = [];
        const homeGoals = parseScorers(apiGame.home_scorers);
        const awayGoals = parseScorers(apiGame.away_scorers);
        homeGoals.forEach(gStr => {
          const parsed = parseScorerString(gStr);
          events.push({
            minute: parsed.minute,
            type: "goal",
            team: isReversed ? "away" : "home",
            player: cleanPlayerName(parsed.player),
            detail: parsed.isPenalty ? "Definición impecable de penal." : (parsed.isOwnGoal ? "Gol en propia puerta (autogol)." : "Gran definición cruzada.")
          });
        });
        awayGoals.forEach(gStr => {
          const parsed = parseScorerString(gStr);
          events.push({
            minute: parsed.minute,
            type: "goal",
            team: isReversed ? "home" : "away",
            player: cleanPlayerName(parsed.player),
            detail: parsed.isPenalty ? "Definición impecable de penal." : (parsed.isOwnGoal ? "Gol en propia puerta (autogol)." : "Gran definición cruzada.")
          });
        });
        const homeRoster = getTeamRoster(localMatch.home);
        const awayRoster = getTeamRoster(localMatch.away);
        const cardEvents = generateDeterministicCards(localMatch, homeRoster, awayRoster);
        localMatch.events = [...events, ...cardEvents].sort((a, b) => a.minute - b.minute);
        localMatch.stats = generateDeterministicStats(localMatch.home, localMatch.away, mappedHomeScore, mappedAwayScore);
        updatedAny = true;
      }
    } else {
      if (apiGame.type === "group") {
        const newMatch = {
          id: AppState.matches.length + 100,
          group: apiGame.group,
          home: homeSp,
          away: awaySp,
          homeScore: apiHomeScore,
          awayScore: apiAwayScore,
          status: apiStatus,
          minute: apiMinute,
          date: formatApiDate(apiGame.local_date),
          stadium: getStadiumNameById(apiGame.stadium_id),
          events: [],
          stats: generateDeterministicStats(homeSp, awaySp, apiHomeScore, apiAwayScore)
        };
        const homeGoals = parseScorers(apiGame.home_scorers);
        const awayGoals = parseScorers(apiGame.away_scorers);
        homeGoals.forEach(gStr => {
          const parsed = parseScorerString(gStr);
          newMatch.events.push({
            minute: parsed.minute,
            type: "goal",
            team: "home",
            player: cleanPlayerName(parsed.player),
            detail: parsed.isPenalty ? "Gol de penal." : (parsed.isOwnGoal ? "Autogol." : "Remate potente.")
          });
        });
        awayGoals.forEach(gStr => {
          const parsed = parseScorerString(gStr);
          newMatch.events.push({
            minute: parsed.minute,
            type: "goal",
            team: "away",
            player: cleanPlayerName(parsed.player),
            detail: parsed.isPenalty ? "Gol de penal." : (parsed.isOwnGoal ? "Autogol." : "Remate potente.")
          });
        });
        const homeRoster = getTeamRoster(homeSp);
        const awayRoster = getTeamRoster(awaySp);
        const cardEvents = generateDeterministicCards(newMatch, homeRoster, awayRoster);
        newMatch.events = [...newMatch.events, ...cardEvents].sort((a, b) => a.minute - b.minute);
        AppState.matches.push(newMatch);
        updatedAny = true;
      }
    }
  });
  if (updatedAny) {
    AppState.matches.sort((a, b) => a.id - b.id);
    renderMatchTicker();
    renderMatchCenter();
    renderStandings();
    renderGroupMatches();
    updateTournamentStats();
  }
}

async function syncLiveResults() {
  const statusIndicator = document.getElementById("api-status-indicator");
  if (statusIndicator) {
    statusIndicator.classList.add("syncing");
    statusIndicator.querySelector(".pill-value").textContent = "SINCRONIZANDO...";
  }
  const cb = Date.now();
  const urlDirect = `https://worldcup26.ir/get/games?_cb=${cb}`;
  const urlProxy = `https://api.allorigins.win/get?url=${encodeURIComponent(urlDirect)}`;
  let data = null;
  try {
    const res = await fetch(urlDirect);
    if (!res.ok) throw new Error("Direct fetch failed");
    data = await res.json();
    console.log("Sincronización directa exitosa");
  } catch (err) {
    console.warn("Direct fetch failed or CORS blocked. Trying proxy...", err);
    try {
      const res = await fetch(urlProxy);
      if (!res.ok) throw new Error("Proxy fetch failed");
      const json = await res.json();
      data = JSON.parse(json.contents);
      console.log("Sincronización via proxy exitosa");
    } catch (proxyErr) {
      console.warn("Ambos métodos de sincronización remota fallaron. Intentando fallback local...", proxyErr);
      try {
        const res = await fetch("./api-fallback.json");
        if (!res.ok) throw new Error("Local fallback failed");
        data = await res.json();
        console.log("Sincronización via fallback local exitosa");
      } catch (localErr) {
        console.error("Todos los métodos de sincronización fallaron:", localErr);
      }
    }
  }
  if (data && data.games) {
    updateMatchesData(data.games);
    if (statusIndicator) {
      statusIndicator.classList.remove("syncing");
      statusIndicator.classList.add("active");
      statusIndicator.querySelector(".pill-value").textContent = "FIFA.COM EN VIVO";
    }
  } else {
    if (statusIndicator) {
      statusIndicator.classList.remove("syncing");
      statusIndicator.querySelector(".pill-value").textContent = "ERROR DE CONEXIÓN";
      setTimeout(() => {
        statusIndicator.querySelector(".pill-value").textContent = "FIFA.COM EN VIVO";
      }, 5000);
    }
  }
}

// ==========================================================================
// INICIALIZACIÓN Y EVENT LISTENERS
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  // Unificar datos de Alemania (incluyendo Alemania Occidental y Democrática)
  unifyGermanyData();

  // Sincronizar resultados reales inmediatamente y cada 30 segundos
  // syncLiveResults();
  // setInterval(syncLiveResults, 30000);

  renderMatchTicker();
  renderMatchCenter();
  renderStandings();
  renderGroupMatches();
  renderBracket();
  // renderStadiums(); // Eliminado por solicitud del usuario
  updateTournamentStats();
  
  // Auto-deslizar al día de hoy en curso
  setTimeout(scrollToToday, 500);
  
  // NAVEGACIÓN PESTAÑAS PRINCIPALES (DERECHA)
  const navTabs = document.querySelectorAll(".nav-tab");
  navTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      navTabs.forEach(t => t.classList.remove("active"));
      document.querySelectorAll(".content-section").forEach(s => s.classList.remove("active"));
      
      tab.classList.add("active");
      const sectionId = tab.dataset.section;
      document.getElementById(sectionId).classList.add("active");
      AppState.activeSection = sectionId;
      
      // Actualizar el texto del info-pill dinámicamente
      const infoPill = document.getElementById("main-info-pill");
      if (infoPill) {
        if (sectionId === "section-standings") {
          infoPill.textContent = "Criterio FIFA: PTS > DG > GF";
        } else if (sectionId === "section-group-matches") {
          infoPill.textContent = "Calendario y Resultados Oficiales";
        } else if (sectionId === "section-bracket") {
          infoPill.textContent = "Ruta a la Gran Final";
        }
      }
    });
  });
  
  // NAVEGACIÓN PESTAÑAS DETALLES DE PARTIDOS (IZQUIERDA)
  const mcTabs = document.querySelectorAll(".mc-nav-tabs .mc-tab-btn");
  mcTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      mcTabs.forEach(t => t.classList.remove("active"));
      document.querySelectorAll(".match-detail-card .mc-tab-content").forEach(c => c.classList.remove("active"));
      
      tab.classList.add("active");
      const contentId = `tab-${tab.dataset.tab}`;
      const contentEl = document.getElementById(contentId);
      if (contentEl) contentEl.classList.add("active");
      AppState.activeMcTab = tab.dataset.tab;
    });
  });
  
  // FILTROS TICKER DE PARTIDOS
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      AppState.tickerFilter = btn.dataset.filter;
      renderMatchTicker();
    });
  });
});



// ==========================================================================
// HISTORIA DE LOS MUNDIALES - PAGE SWITCH SYSTEM
// ==========================================================================
function switchPage(pageId) {
  document.querySelectorAll('.page-content').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.page-tab-btn').forEach(b => b.classList.remove('active'));
  const page = document.getElementById(pageId);
  if (page) page.classList.add('active');
  const btn = document.querySelector('[data-page="' + pageId + '"]');
  if (btn) btn.classList.add('active');
  
  if (pageId === 'page-history') {
    initHistoryPage();
  } else if (pageId === 'page-teams') {
    renderTeamSearch();
  }
}

function switchHistoryTab(tabId) {
  const tabs = document.querySelectorAll('#history-mc-tabs .mc-tab-btn');
  const contents = document.querySelectorAll('#page-history .mc-tab-content');
  
  tabs.forEach(t => t.classList.remove('active'));
  contents.forEach(c => c.classList.remove('active'));
  
  const btn = document.querySelector('#history-mc-tabs .mc-tab-btn[data-hist-tab="' + tabId + '"]');
  if (btn) btn.classList.add('active');
  const content = document.getElementById('hist-tab-' + tabId);
  if (content) content.classList.add('active');
}

// ==========================================================================
// HISTORIA PAGE - INIT
// ==========================================================================
let currentHistoryYear = 2022;

const YOUTUBE_VIDEOS = {
  2022: [{title: "Hayya Hayya (Better Together)", id: "vyDjFVZgJoo"}, {title: "FIFA 23 World Cup Intro", id: "L0zSuuRa5h8"}],
  2018: [{title: "Live It Up", id: "V15BYnSr0P8"}, {title: "FIFA 18 World Cup Intro", id: "ZABfjs0B2Ys"}],
  2014: [{title: "We Are One (Ole Ola)", id: "TGtWWb9emYI"}, {title: "2014 FIFA World Cup Brazil Intro", id: "JP67IM1LX-M"}],
  2010: [{title: "Waka Waka (This Time for Africa)", id: "pRpeEdMmmQ0"}, {title: "Wavin' Flag", id: "WTJSt4wP2ME"}, {title: "2010 FIFA World Cup South Africa Intro", id: "RiqriA3MuDA"}],
  2006: [{title: "The Time of Our Lives", id: "4aOxDHqWyK0"}, {title: "2006 FIFA World Cup Game Intro", id: "LJELYUi_7T8"}],
  2002: [{title: "Boom", id: "aYbwkEX7bko"}, {title: "2002 FIFA World Cup Game Intro", id: "MN40cGnDyno"}],
  1998: [{title: "La Copa de la Vida", id: "tF_ggG5dY5U"}, {title: "FIFA 98 Road to World Cup Intro", id: "2igfndqKnmk"}],
  1994: [{title: "Gloryland", id: "Bp5ejoQhjtU"}],
  1990: [{title: "Un'estate italiana", id: "N2ANAqO1TLs"}],
  1986: [{title: "El mundo unido por un balon", id: "RwfLtnsgrJI"}],
  1982: [{title: "Mundial '82", id: "vnu0tVffrFM"}],
  1978: [{title: "El Mundial", id: "hCQdUFhc1P8"}],
  1974: [{title: "Futbol", id: "is8Kewz-hrU"}],
  1970: [{title: "Futbol Mexico 70", id: "eZ9b0SRMCLM"}],
  1966: [{title: "World Cup Willie", id: "6fUjETGSUgM"}],
  1962: [{title: "El Rock del Mundial", id: "e_yafwjcf-w"}],
  1958: [{title: "Mundial Suecia 1958", id: "JE2xPzeSiBc"}],
  1954: [{title: "Mundial Suiza 1954", id: "2qCZe6Ki-zk"}],
  1950: [{title: "Mundial Brasil 1950", id: "Pu1WanatiAM"}],
  1938: [{title: "Mundial Francia 1938", id: "9s4FTKz5gVs"}],
  1934: [{title: "Mundial Italia 1934", id: "EBwZv0eFrCM"}],
  1930: [{title: "Mundial Uruguay 1930", id: "9oP1aWJ38Hk"}]
};


function initHistoryPage() {
  const data = window.WORLDCUPS_DATA;
  if (!data) return;
  buildYearSelector(data);
  renderHistoryPage(currentHistoryYear);
}

function buildYearSelector(data) {
  const sel = document.getElementById('history-year-select');
  if (!sel) return;
  if (sel.options.length > 0) return; // Already built
  sel.innerHTML = '';
  const years = data.map(d => d.year).filter(y => y <= 2022).reverse();
  years.forEach(y => {
    const opt = document.createElement('option');
    opt.value = y;
    opt.textContent = y;
    if (y === currentHistoryYear) opt.selected = true;
    sel.appendChild(opt);
  });
  sel.addEventListener('change', () => {
    currentHistoryYear = parseInt(sel.value);
    renderHistoryPage(currentHistoryYear);
  });
}

function renderHistoryPage(year) {
  const data = window.WORLDCUPS_DATA;
  if (!data) return;
  const wc = data.find(d => d.year === year);
  if (!wc) return;
  
  // Mostrar/ocultar pestaña Semifinal y Final para España 1982
  const btnSemiFinal = document.getElementById('hist-tab-btn-semifinal-final');
  if (btnSemiFinal) {
    if (year === 1982) {
      btnSemiFinal.style.display = 'inline-block';
    } else {
      btnSemiFinal.style.display = 'none';
      const activeTabBtn = document.querySelector('#history-mc-tabs .mc-tab-btn.active');
      if (activeTabBtn && activeTabBtn.getAttribute('data-hist-tab') === 'semifinal-final') {
        switchHistoryTab('grupos');
      }
    }
  }
  
  renderHistoryHero(wc);
  renderHistoryGroups(wc);
  renderHistoryPartidosGrupo(wc);
  renderHistoryKnockout(wc);
  if (year === 1982) {
    renderHistorySemifinalFinal(wc);
  }
  renderHistorySede(wc);
  renderHistoryVideos(wc.year);
  renderHistoryTrivias(wc);
}

const HIST_FLAG_MAP = {
  'uruguay':'uy','argentina':'ar','brasil':'br','yugoslavia':'rs','bolivia':'bo',
  'francia':'fr','chile':'cl','mexico':'mx','rumania':'ro','peru':'pe',
  'estados unidos':'us','paraguay':'py','italia':'it','espana':'es','belgica':'be',
  'alemania occidental':'de','alemania democratica':'de','suecia':'se','austria':'at','hungria':'hu',
  'checoslovaquia':'cz','suiza':'ch','alemania':'de','union sovietica':'ru','urss':'ru',
  'inglaterra':'gb-eng','portugal':'pt','paises bajos':'nl','polonia':'pl',
  'bulgaria':'bg','cuba':'cu','noruega':'no',
  'escocia':'gb-sct','irlanda del norte':'gb-nir','gales':'gb-wls',
  'marruecos':'ma','camerun':'cm','nigeria':'ng','senegal':'sn',
  'costa rica':'cr','japon':'jp','corea del sur':'kr','republica de corea':'kr','australia':'au',
  'dinamarca':'dk','colombia':'co','ecuador':'ec','grecia':'gr',
  'turquia':'tr','ucrania':'ua','ghana':'gh','costa de marfil':'ci',
  'arabia saudita':'sa','arabia saudi':'sa','iran':'ir','catar':'qa','qatar':'qa',
  'croacia':'hr','serbia':'rs','eslovaquia':'sk','argelia':'dz',
  'kuwait':'kw','zaire':'cd','rd congo':'cd','el salvador':'sv','haiti':'ht',
  'emiratos arabes unidos':'ae','emiratos':'ae','nueva zelanda':'nz',
  'panama':'pa','rusia':'ru','islandia':'is','trinidad y tobago':'tt',
  'togo':'tg','angola':'ao','honduras':'hn',
  'jamaica':'jm','indias orientales holandesas':'id','holanda':'nl',
  'serbia y montenegro':'rs','tunez':'tn','irak':'iq',
  'irlanda':'ie','eslovenia':'si','venezuela':'ve','sudafrica':'za',
  'republica checa':'cz','chequia':'cz','egipto':'eg','corea del norte':'kp',
  'uzbekistan':'uz','canada':'ca','china':'cn','israel':'il','bosnia y herzegovina':'ba',
  'curazao':'cw','cabo verde':'cv','jordania':'jo'
};

function getFlagImg(teamName, size) {
  if (!teamName) return '<span style="display:inline-block;width:20px;height:14px;background:#333;border-radius:2px;"></span>';
  size = size || '20x15';
  let nameKey = teamName.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
  const code = HIST_FLAG_MAP[nameKey] || '';
  if (!code) return '<span style="display:inline-block;width:20px;height:14px;background:#333;border-radius:2px;"></span>';
  return '<img src="https://flagcdn.com/' + size + '/' + code + '.png" class="hist-flag" alt="' + teamName + '" onerror="this.style.display=\'none\'">';
}

function renderHistoryHero(wc) {
  const hero = document.getElementById('history-hero');
  if (!hero) return;
  const accentColor = wc.color || '#00cc66';
  const place3 = wc.third || 'N/A';
  
  const unifiedChampion = getUnifiedDisplayName(wc.champion, wc.year);
  const unifiedRunnerUp = getUnifiedDisplayName(wc.runner_up, wc.year);
  const unifiedThird = getUnifiedDisplayName(place3, wc.year);
  
  hero.style.borderTop = '4px solid ' + accentColor;
  hero.innerHTML = 
    '<div class="hist-hero-top">' +
      '<div class="hist-hero-year" style="color:' + accentColor + '">' + wc.year + '</div>' +
      '<div class="hist-hero-host">' + getFlagImg(wc.host, '40x30') +
        '<div><div class="hist-hero-host-label">SEDE</div>' +
        '<div class="hist-hero-host-name">' + wc.host + '</div></div>' +
      '</div>' +
    '</div>' +
    '<div class="hist-hero-podium">' +
      '<div class="hist-podium-item podium-2nd">' +
        '<div class="hist-podium-medal">Subcampeon</div>' +
        '<div class="hist-podium-flag">' + getFlagImg(unifiedRunnerUp, '40x30') + '</div>' +
        '<div class="hist-podium-team">' + unifiedRunnerUp + '</div>' +
      '</div>' +
      '<div class="hist-podium-item podium-1st">' +
        '<div class="hist-podium-trophy">CAMPEON</div>' +
        '<div class="hist-podium-flag">' + getFlagImg(unifiedChampion, '40x30') + '</div>' +
        '<div class="hist-podium-team">' + unifiedChampion + '</div>' +
      '</div>' +
      '<div class="hist-podium-item podium-3rd">' +
        '<div class="hist-podium-medal">3er Lugar</div>' +
        '<div class="hist-podium-flag">' + getFlagImg(unifiedThird, '40x30') + '</div>' +
        '<div class="hist-podium-team">' + unifiedThird + '</div>' +
      '</div>' +
    '</div>';
}

function renderHistorySede(wc) {
  const container = document.getElementById('history-venue-details');
  if (!container) return;
  const accentColor = wc.color || '#00cc66';
  
  let html = '<div style="background:var(--bg-secondary); border:1px solid var(--border-color); border-radius:12px; padding:2rem; width:100%; max-width:800px; margin:0 auto;">';
  html += '<h2 style="color:white; font-size:2rem; margin-bottom: 1rem;">' + wc.host + ' ' + wc.year + '</h2>';
  html += '<div style="font-size:4rem; margin-bottom: 1rem;">' + getFlagImg(wc.host, 'h120') + '</div>';
  
  if (wc.culture && wc.culture.stadiums) {
    html += '<p style="color:var(--text-secondary); margin-bottom: 0.5rem; font-size:1.1rem;"><strong>Estadios:</strong> ' + wc.culture.stadiums + '</p>';
  }
  if (wc.culture && wc.culture.ball) {
    html += '<p style="color:var(--text-secondary); margin-bottom: 0.5rem; font-size:1.1rem;"><strong>Balón Oficial:</strong> ' + wc.culture.ball + '</p>';
  }
  if (wc.top_scorer) {
    html += '<p style="color:var(--text-secondary); margin-top: 1.5rem; border-top: 1px solid var(--border-color); padding-top: 1rem; font-size:1.1rem;">';
    html += '<strong>Goleador del Torneo:</strong> ' + wc.top_scorer.name + ' (' + wc.top_scorer.goals + ' goles)';
    html += '</p>';
  }
  html += '</div>';
  container.innerHTML = html;
}

function renderHistoryVideos(year) {
  const container = document.getElementById('history-song-container');
  if (!container) return;
  
  const videos = YOUTUBE_VIDEOS[year];
  if (!videos || videos.length === 0) {
    container.innerHTML = '<div style="color:var(--text-muted); padding: 3rem;">No hay videos disponibles para esta edición.</div>';
    return;
  }
  
  let html = '';
  videos.forEach(v => {
    html += '<div style="margin-bottom: 2rem;">';
    html += '<h3 style="color:var(--color-accent); margin-bottom: 0.5rem; font-size: 1.2rem; text-transform: uppercase; letter-spacing: 0.05em;">' + v.title + '</h3>';
    html += '<div class="video-container" style="position: relative; padding-bottom: 56.25%; padding-top: 25px; height: 0;">';
    html += '<iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.5);" src="https://www.youtube.com/embed/' + v.id + '" allowfullscreen></iframe>';
    html += '</div></div>';
  });
  
  container.innerHTML = html;
}


function renderHistoryGroups(wc) {
  const container = document.getElementById('history-groups');
  if (!container) return;
  if (!wc.groups || wc.groups.length === 0) {
    container.innerHTML = '<div class="hist-no-groups" style="text-align:center; padding: 3rem; color: var(--text-muted);">Este mundial no tuvo fase de grupos (formato eliminacion directa).</div>';
    return;
  }
  
  let html = '<div class="standings-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1.5rem;">';
  
  wc.groups.forEach(function(g) {
    const sorted = g.teams.slice().sort(function(a,b) {
      if (b.pts !== a.pts) return b.pts - a.pts;
      const dgA = (a.gf||0) - (a.ga||0); const dgB = (b.gf||0) - (b.ga||0);
      if (dgB !== dgA) return dgB - dgA;
      return (b.gf||0) - (a.gf||0);
    });
    
    html += '<div class="group-card">';
    html += '<h3>' + g.name + ' <span>Mundial ' + wc.year + '</span></h3>';
    html += '<table class="group-table">';
    html += '<thead><tr><th style="width: 25px; text-align: center;">#</th><th>Seleccion</th><th style="width: 25px; text-align: center;">PJ</th><th style="width: 25px; text-align: center;">PG</th><th style="width: 25px; text-align: center;">PE</th><th style="width: 25px; text-align: center;">PP</th><th style="width: 25px; text-align: center;">GF</th><th style="width: 25px; text-align: center;">GC</th><th style="width: 30px; text-align: center;">DIF</th><th style="width: 30px; text-align: center;">PTS</th></tr></thead><tbody>';
    
    sorted.forEach(function(t, i) {
      let rowClass = "";
      if (i < 2) rowClass = "row-qualify-next";
      else if (i === 2 && wc.groups.length >= 6) rowClass = "row-qualify-3rd";
      
      const pj = (t.w||0) + (t.d||0) + (t.l||0);
      const dg = (t.gf||0) - (t.ga||0);
      const dgStr = dg > 0 ? '+' + dg : dg;
      
      html += '<tr class="' + rowClass + '">';
      html += '<td class="table-num">' + (i+1) + '</td>';
      html += '<td><div class="table-team-col"><span class="table-flag">' + getFlagImg(t.name) + '</span><span>' + t.name + '</span></div></td>';
      html += '<td style="text-align: center;">' + pj + '</td>';
      html += '<td style="text-align: center; font-weight: 600;">' + (t.pts||0) + '</td>';
      html += '<td style="text-align: center;">' + dgStr + '</td>';
      html += '<td style="text-align: center; color: var(--text-muted);">' + (t.gf||0) + ':' + (t.ga||0) + '</td>';
      html += '</tr>';
    });
    html += '</tbody></table></div>';
  });
  html += '</div>';
  
  if (wc.year === 1982) {
    html += '<h2 class="hist-knockout-title" style="margin-top:2.5rem; margin-bottom:1.5rem;">Segunda Fase de Grupos (Segunda Etapa)</h2>';
    html += '<div class="standings-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1.5rem;">';
    
    const secGroups = ["Segunda Fase - Grupo A", "Segunda Fase - Grupo B", "Segunda Fase - Grupo C", "Segunda Fase - Grupo D"];
    secGroups.forEach(function(gName) {
      const teams = calculateSecondStageStandings(wc, gName);
      if (!teams) return;
      
      html += '<div class="group-card">';
      html += '<h3>' + gName.replace("Segunda Fase - ", "") + ' <span>Mundial ' + wc.year + '</span></h3>';
      html += '<table class="group-table">';
      html += '<thead><tr><th style="width: 25px; text-align: center;">#</th><th>Seleccion</th><th style="width: 25px; text-align: center;">PJ</th><th style="width: 25px; text-align: center;">PG</th><th style="width: 25px; text-align: center;">PE</th><th style="width: 25px; text-align: center;">PP</th><th style="width: 25px; text-align: center;">GF</th><th style="width: 25px; text-align: center;">GC</th><th style="width: 30px; text-align: center;">DIF</th><th style="width: 30px; text-align: center;">PTS</th></tr></thead><tbody>';
      
      teams.forEach(function(t, i) {
        // El ganador del grupo de la segunda etapa clasifica a semifinales (fila verde)
        const rowClass = i === 0 ? "row-qualify-next" : "";
        const pj = t.w + t.d + t.l;
        const dg = t.gf - t.ga;
        const dgStr = dg > 0 ? '+' + dg : dg;
        
        html += '<tr class="' + rowClass + '">';
        html += '<td class="table-num">' + (i+1) + '</td>';
        html += '<td><div class="table-team-col"><span class="table-flag">' + getFlagImg(t.name) + '</span><span>' + t.name + '</span></div></td>';
        html += '<td style="text-align: center;">' + pj + '</td>';
        html += '<td style="text-align: center; font-weight: 600;">' + t.pts + '</td>';
        html += '<td style="text-align: center;">' + dgStr + '</td>';
        html += '<td style="text-align: center; color: var(--text-muted);">' + t.gf + ':' + t.ga + '</td>';
        html += '</tr>';
      });
      html += '</tbody></table></div>';
    });
    html += '</div>';
  }
  
  container.innerHTML = html;
}

function renderHistoryPartidosGrupo(wc) {
  const container = document.getElementById('history-partidos-grupo');
  if (!container) return;
  
  let html = '';
  if (wc.groups && wc.groups.length > 0) {
     html += '<div class="matches-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1rem; margin-bottom: 2rem;">';
     wc.groups.forEach(g => {
        if (g.matches && g.matches.length > 0) {
          g.matches.forEach(m => {
            html += '<div class="match-card finished" style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 12px; padding: 1rem;">';
            html += '<div class="match-card-header" style="display:flex; justify-content:space-between; margin-bottom:10px;"><span class="match-group-name" style="color:var(--text-muted); font-size:0.75rem;">' + g.name + '</span><span class="match-status-badge" style="background:rgba(255,255,255,0.1); padding:2px 8px; border-radius:12px; font-size:0.7rem;">FT</span></div>';
            
            html += '<div class="match-teams" style="display:flex; flex-direction:column; gap:8px;">';
            
            html += '<div class="match-team-row" style="display:flex; align-items:center; justify-content:space-between;">';
            html += '<div style="display:flex; align-items:center; gap:8px;"><span style="font-size:1.2rem;">' + getFlagImg(m.home) + '</span><span style="font-weight:600; color:white;">' + m.home + '</span></div>';
            html += '<div style="font-weight:700; font-size:1.1rem; color:white;">' + (m.score ? m.score.split('-')[0].trim() : '') + '</div>';
            html += '</div>';

            html += '<div class="match-team-row" style="display:flex; align-items:center; justify-content:space-between;">';
            html += '<div style="display:flex; align-items:center; gap:8px;"><span style="font-size:1.2rem;">' + getFlagImg(m.away) + '</span><span style="font-weight:600; color:white;">' + m.away + '</span></div>';
            html += '<div style="font-weight:700; font-size:1.1rem; color:white;">' + (m.score ? m.score.split('-')[1].trim() : '') + '</div>';
            html += '</div>';

            html += '</div></div>';
          });
        }
     });
     html += '</div>';
  } else {
     html = '<div class="hist-no-groups" style="text-align:center; padding: 3rem; color: var(--text-muted);">Este mundial no tuvo fase de grupos.</div>';
  }
  container.innerHTML = html;
}

function renderHistoryKnockout(wc, containerId = 'history-knockout') {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  if (!wc.knockout || wc.knockout.length === 0) { 
     container.innerHTML = '<div class="hist-no-groups" style="text-align:center; padding: 3rem; color: var(--text-muted);">Sin datos de eliminatorias.</div>';
     return; 
  }
  
  // 1. FILTRAR RONDA DE TERCER PUESTO
  let validRounds = [];
  let thirdPlaceRound = null;
  
  wc.knockout.forEach(function(r) {
    const rName = r.round || '';
    if (rName.toLowerCase().includes('tercer') || rName.toLowerCase().includes('3er') || rName.toLowerCase().includes('3º') || rName.toLowerCase().includes('3rd') || rName.toLowerCase().includes('playoff') || rName.toLowerCase().includes('play-off')) {
      thirdPlaceRound = r;
    } else {
      validRounds.push(r);
    }
  });

  // 2. SEPARAR RONDAS ESTÁNDAR Y NO ESTÁNDAR (COMO LAS FASES DE GRUPOS EN 1974, 1978, 1982)
  let standardRounds = [];
  let nonStandardRounds = [];
  validRounds.forEach(function(r) {
    const rName = (r.round || '').toLowerCase();
    if (rName.includes('final') || rName.includes('cuartos') || rName.includes('quarter') || rName.includes('octavos') || rName.includes('dieciseisavos')) {
      standardRounds.push(r);
    } else {
      nonStandardRounds.push(r);
    }
  });

  // 3. ORDENAR LAS ELIMINATORIAS ESTÁNDAR (BACKWARD TRACING PARA FLUJO PERFECTO DEL BRACKET)
  if (standardRounds.length > 1) {
    const finalRound = standardRounds[standardRounds.length - 1];
    if (finalRound.matches && finalRound.matches.length === 1) {
      let sortedStandard = [finalRound];
      const cleanTeamName = function(n) {
        return n ? n.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim() : "";
      };
      
      for (let rIdx = standardRounds.length - 2; rIdx >= 0; rIdx--) {
        const prevRound = standardRounds[rIdx];
        const currSortedRound = sortedStandard[sortedStandard.length - 1];
        const prevMatches = prevRound.matches || [];
        const currMatches = currSortedRound.matches || [];
        
        let sortedPrevMatches = [];
        let matchedIndices = new Set();
        
        currMatches.forEach(function(m) {
          const teamA = cleanTeamName(m.home);
          const teamB = cleanTeamName(m.away);
          
          let parentA = null;
          for (let idx = 0; idx < prevMatches.length; idx++) {
            if (matchedIndices.has(idx)) continue;
            const pm = prevMatches[idx];
            if (cleanTeamName(pm.home) === teamA || cleanTeamName(pm.away) === teamA) {
              parentA = pm;
              matchedIndices.add(idx);
              break;
            }
          }
          
          let parentB = null;
          for (let idx = 0; idx < prevMatches.length; idx++) {
            if (matchedIndices.has(idx)) continue;
            const pm = prevMatches[idx];
            if (cleanTeamName(pm.home) === teamB || cleanTeamName(pm.away) === teamB) {
              parentB = pm;
              matchedIndices.add(idx);
              break;
            }
          }
          
          // Soporte para placeholders en torneos futuros/simulados (como 2026)
          if (!parentA && teamA.includes("partido")) {
            const mMatch = teamA.match(/partido\s*(\d+)/);
            if (mMatch) {
              const pIdx = parseInt(mMatch[1]) - 1;
              if (pIdx >= 0 && pIdx < prevMatches.length && !matchedIndices.has(pIdx)) {
                parentA = prevMatches[pIdx];
                matchedIndices.add(pIdx);
              }
            }
          }
          if (!parentA && teamA.includes("octavos")) {
            const mMatch = teamA.match(/octavos\s*(\d+)/);
            if (mMatch) {
              const pIdx = parseInt(mMatch[1]) - 1;
              if (pIdx >= 0 && pIdx < prevMatches.length && !matchedIndices.has(pIdx)) {
                parentA = prevMatches[pIdx];
                matchedIndices.add(pIdx);
              }
            }
          }
          if (!parentA && teamA.includes("cuartos")) {
            const mMatch = teamA.match(/cuartos\s*(\d+)/);
            if (mMatch) {
              const pIdx = parseInt(mMatch[1]) - 1;
              if (pIdx >= 0 && pIdx < prevMatches.length && !matchedIndices.has(pIdx)) {
                parentA = prevMatches[pIdx];
                matchedIndices.add(pIdx);
              }
            }
          }
          if (!parentA && teamA.includes("semis")) {
            const mMatch = teamA.match(/semis\s*(\d+)/);
            if (mMatch) {
              const pIdx = parseInt(mMatch[1]) - 1;
              if (pIdx >= 0 && pIdx < prevMatches.length && !matchedIndices.has(pIdx)) {
                parentA = prevMatches[pIdx];
                matchedIndices.add(pIdx);
              }
            }
          }

          if (!parentB && teamB.includes("partido")) {
            const mMatch = teamB.match(/partido\s*(\d+)/);
            if (mMatch) {
              const pIdx = parseInt(mMatch[1]) - 1;
              if (pIdx >= 0 && pIdx < prevMatches.length && !matchedIndices.has(pIdx)) {
                parentB = prevMatches[pIdx];
                matchedIndices.add(pIdx);
              }
            }
          }
          if (!parentB && teamB.includes("octavos")) {
            const mMatch = teamB.match(/octavos\s*(\d+)/);
            if (mMatch) {
              const pIdx = parseInt(mMatch[1]) - 1;
              if (pIdx >= 0 && pIdx < prevMatches.length && !matchedIndices.has(pIdx)) {
                parentB = prevMatches[pIdx];
                matchedIndices.add(pIdx);
              }
            }
          }
          if (!parentB && teamB.includes("cuartos")) {
            const mMatch = teamB.match(/cuartos\s*(\d+)/);
            if (mMatch) {
              const pIdx = parseInt(mMatch[1]) - 1;
              if (pIdx >= 0 && pIdx < prevMatches.length && !matchedIndices.has(pIdx)) {
                parentB = prevMatches[pIdx];
                matchedIndices.add(pIdx);
              }
            }
          }
          if (!parentB && teamB.includes("semis")) {
            const mMatch = teamB.match(/semis\s*(\d+)/);
            if (mMatch) {
              const pIdx = parseInt(mMatch[1]) - 1;
              if (pIdx >= 0 && pIdx < prevMatches.length && !matchedIndices.has(pIdx)) {
                parentB = prevMatches[pIdx];
                matchedIndices.add(pIdx);
              }
            }
          }
          
          if (parentA) sortedPrevMatches.push(parentA);
          if (parentB) sortedPrevMatches.push(parentB);
        });
        
        prevMatches.forEach(function(pm, idx) {
          if (!matchedIndices.has(idx)) {
            sortedPrevMatches.push(pm);
          }
        });
        
        sortedStandard.push(Object.assign({}, prevRound, { matches: sortedPrevMatches }));
      }
      
      sortedStandard.reverse();
      standardRounds = sortedStandard;
    }
  }

  // 4. RECONSTRUIR EL VECTOR DE ELIMINATORIAS A RENDERIZAR
  let roundsToRender = [];
  roundsToRender = roundsToRender.concat(nonStandardRounds);
  roundsToRender = roundsToRender.concat(standardRounds);
  // El partido por el tercer lugar ya no se añade como columna para colocarlo debajo de la final

  // Ocultar Semifinales y Final de la pestaña de eliminatorias de España 1982 para evitar duplicidad
  if (wc.year === 1982) {
    roundsToRender = roundsToRender.filter(function(r) {
      const name = (r.round || '').toLowerCase();
      return !name.includes('semifinal') && name !== 'final' && name !== 'finales';
    });
  }

  let html = '<div class="tournament-bracket-wrapper" style="overflow-x: auto; padding: 2.5rem 0 1rem 0;">';
  html += '<div class="tournament-bracket" style="display: flex; gap: 2rem; width: max-content; min-width: 100%; align-items: stretch;">';

  roundsToRender.forEach(function(round) {
    const isFinalRound = round.round === 'Final' || round.round === 'Finales';

    html += '<div class="bracket-column" style="display: flex; flex-direction: column; justify-content: space-around; width: 220px; flex-shrink: 0; gap: 1.5rem; position: relative;">';
    html += '<h4 style="text-align:center; color:var(--color-accent); font-size:0.8rem; text-transform:uppercase; margin-bottom:1rem; position:absolute; top:-25px; width:100%;">' + round.round + '</h4>';

    round.matches.forEach(function(m) {
      let homeScore = '', awayScore = '';
      if (m.score) {
        // e.g. "1-1 (3-1 pen)"
        const penMatch = m.score.match(/^(\d+)-(\d+)\s*\((\d+)-(\d+)\s*pen\)$/i);
        if (penMatch) {
          homeScore = penMatch[1] + ' (' + penMatch[3] + ')';
          awayScore = penMatch[2] + ' (' + penMatch[4] + ')';
        } else {
          // Limpiar anotaciones de prórroga/tiempo extra del marcador para mostrar solo los números
          const cleanScore = m.score.replace(/\s*\([^)]*pr[oó]rroga[^)]*\)/i, '').trim();
          const scoreParts = cleanScore.split('-');
          if (scoreParts.length >= 2) {
            homeScore = scoreParts[0].trim();
            awayScore = scoreParts[1].trim();
          } else {
            homeScore = cleanScore;
            awayScore = '';
          }
        }
      }
      
      const cardStyle = isFinalRound 
        ? "background: linear-gradient(135deg, rgba(255,215,0,0.15), rgba(0,0,0,0.8)); border: 1px solid rgba(255,215,0,0.5); box-shadow: 0 0 15px rgba(255,215,0,0.2);"
        : "background: var(--bg-secondary); border: 1px solid var(--border-color);";
        
      html += '<div class="bracket-match" style="' + cardStyle + ' border-radius: 8px; padding: 10px; position: relative; z-index: 2;">';
      
      html += '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:5px; border-bottom:1px solid rgba(255,255,255,0.05); padding-bottom:5px;">';
      html += '<div style="display:flex; align-items:center; gap:8px;"><span style="font-size:1.1rem;">' + getFlagImg(m.home) + '</span><span style="font-size:0.85rem; color:white;">' + m.home + '</span></div>';
      html += '<div style="font-weight:bold; color:var(--color-accent);">' + homeScore + '</div>';
      html += '</div>';

      html += '<div style="display:flex; justify-content:space-between; align-items:center;">';
      html += '<div style="display:flex; align-items:center; gap:8px;"><span style="font-size:1.1rem;">' + getFlagImg(m.away) + '</span><span style="font-size:0.85rem; color:white;">' + m.away + '</span></div>';
      html += '<div style="font-weight:bold; color:var(--color-accent);">' + awayScore + '</div>';
      html += '</div>';
      
      html += '</div>';
    });
    
    // Si es la ronda final y hay partido de tercer puesto, renderizarlo abajo
    if (isFinalRound && thirdPlaceRound && thirdPlaceRound.matches && thirdPlaceRound.matches.length > 0) {
      html += '<div class="bracket-third-place" style="margin-top: 1.5rem; border-top: 1px dashed var(--border-color); padding-top: 1.2rem; width: 100%;">';
      html += '<h5 style="text-align:center; color:#FFD700; font-size:0.75rem; text-transform:uppercase; margin-bottom:0.8rem; letter-spacing:1px;">Tercer Puesto</h5>';
      
      thirdPlaceRound.matches.forEach(function(m) {
        let homeScore = '', awayScore = '';
        if (m.score) {
          const penMatch = m.score.match(/^(\d+)-(\d+)\s*\((\d+)-(\d+)\s*pen\)$/i);
          if (penMatch) {
            homeScore = penMatch[1] + ' (' + penMatch[3] + ')';
            awayScore = penMatch[2] + ' (' + penMatch[4] + ')';
          } else {
            const cleanScore = m.score.replace(/\s*\([^)]*pr[oó]rroga[^)]*\)/i, '').trim();
            const scoreParts = cleanScore.split('-');
            if (scoreParts.length >= 2) {
              homeScore = scoreParts[0].trim();
              awayScore = scoreParts[1].trim();
            } else {
              homeScore = cleanScore;
              awayScore = '';
            }
          }
        }
        
        const cardStyle = "background: rgba(255,255,255,0.03); border: 1px dashed rgba(255,255,255,0.15);";
        
        html += '<div class="bracket-match third-place-match" style="' + cardStyle + ' border-radius: 8px; padding: 10px; position: relative; z-index: 2;">';
        
        html += '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:5px; border-bottom:1px solid rgba(255,255,255,0.05); padding-bottom:5px;">';
        html += '<div style="display:flex; align-items:center; gap:8px;"><span style="font-size:1.1rem;">' + getFlagImg(m.home) + '</span><span style="font-size:0.85rem; color:#ccc;">' + m.home + '</span></div>';
        html += '<div style="font-weight:bold; color:var(--text-muted);">' + homeScore + '</div>';
        html += '</div>';

        html += '<div style="display:flex; justify-content:space-between; align-items:center;">';
        html += '<div style="display:flex; align-items:center; gap:8px;"><span style="font-size:1.1rem;">' + getFlagImg(m.away) + '</span><span style="font-size:0.85rem; color:#ccc;">' + m.away + '</span></div>';
        html += '<div style="font-weight:bold; color:var(--text-muted);">' + awayScore + '</div>';
        html += '</div>';
        
        html += '</div>';
      });
      html += '</div>';
    }

    html += '</div>';
  });
  
  // El Campeón y la Copa
  const unifiedChamp = getUnifiedDisplayName(wc.champion, wc.year);
  html += '<div class="bracket-column champion-col" style="display: flex; flex-direction: column; justify-content: center; width: 220px; flex-shrink: 0; align-items: center; position:relative;">';
  html += '<h4 style="text-align:center; color:#FFD700; font-size:0.8rem; text-transform:uppercase; margin-bottom:1rem; position:absolute; top:-25px; width:100%;">Campeón</h4>';
  html += '<div class="champion-display" style="text-align:center; animation: pop 0.5s ease;">';
  html += '<div style="font-size:4rem; filter: drop-shadow(0 0 20px rgba(255,215,0,0.6)); margin-bottom:10px;">🏆</div>';
  html += '<div style="font-size:3rem; margin-bottom:10px;">' + getFlagImg(unifiedChamp, 'h120') + '</div>';
  html += '<div style="font-size:1.2rem; font-weight:800; color:#FFD700; text-transform:uppercase; letter-spacing:2px;">' + unifiedChamp + '</div>';
  html += '</div>';
  html += '</div>';

  html += '</div></div>';
  
  container.innerHTML = html;
}

function renderHistoryTrivias(wc) {
  const container = document.getElementById('history-trivias');
  if (!container) return;
  let html = '';
  if (wc.trivias && wc.trivias.length > 0) {
    html += '<div class="hist-trivias-title" style="padding-top:0; border-top:none;">Datos Curiosos</div><div class="hist-trivias-list">';
    wc.trivias.forEach(function(t) {
      html += '<div class="hist-trivia-item"><span class="hist-trivia-dot">&#9658;</span> ' + t + '</div>';
    });
    html += '</div>';
  }
  if (wc.culture && wc.culture.fun_fact) {
    html += '<div class="hist-fun-fact" style="margin-top:1rem;">💡 ' + wc.culture.fun_fact + '</div>';
  }
  container.innerHTML = html;
}

// ==========================================================================
// BUSCADOR DE SELECCIONES
// ==========================================================================
function renderTeamSearch() {
  const container = document.getElementById('team-search-section');
  if (!container) return;
  if (container.innerHTML.includes('team-search-wrap')) return; 
  
  container.innerHTML = 
    '<div class="team-search-wrap">' +
      '<div class="team-search-bar-inner">' +
        '<input type="text" id="team-search-input" class="team-search-input" placeholder="Ej: Brasil, Francia, Mexico, Argentina..." style="font-size: 1.2rem; padding: 15px 20px;">' +
      '</div>' +
      '<div id="team-search-suggestions" class="team-search-suggestions" style="font-size: 1.1rem;"></div>' +
    '</div>' +
    '<div id="team-profile-container" style="margin-top: 2rem;"></div>';

  const input = document.getElementById('team-search-input');
  const sugg = document.getElementById('team-search-suggestions');

  input.addEventListener('input', function() { showTeamSuggestions(input.value, sugg); });
  input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      const found = findTeam(input.value.trim());
      if (found) { sugg.innerHTML = ''; sugg.style.display = 'none'; renderTeamProfile(found); }
    }
  });
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.team-search-wrap')) { sugg.innerHTML = ''; sugg.style.display = 'none'; }
  });
}

function findTeam(query) {
  if (!window.TEAMS_DATA || !query) return null;
  const q = window.normalizeSearch(query);
  if (q.includes("alemania") || q.includes("alemita") || q.includes("almenaia") || q.includes("alemanita")) {
    return "Alemania";
  }
  return Object.keys(window.TEAMS_DATA).find(function(name) {
    if (name === "Alemania Occidental" || name === "Alemania Democrática") return false;
    return window.normalizeSearch(name).includes(q);
  }) || null;
}

function showTeamSuggestions(val, sugg) {
  if (!val || val.length < 1) { sugg.innerHTML = ''; sugg.style.display = 'none'; return; }
  if (!window.TEAMS_DATA) return;
  const q = window.normalizeSearch(val);
  const matches = Object.keys(window.TEAMS_DATA).filter(function(name) {
    if (name === "Alemania Occidental" || name === "Alemania Democrática") return false;
    if (name === "Alemania") {
      if (q.includes("alem") || q.includes("alme") || q.includes("almenaia") || q.includes("alemanita") || "alemania occidental".includes(q) || "alemania democratica".includes(q)) {
        return true;
      }
    }
    return window.normalizeSearch(name).includes(q);
  });
  if (matches.length === 0) { sugg.innerHTML = ''; sugg.style.display = 'none'; return; }
  sugg.style.display = 'block';
  sugg.innerHTML = matches.slice(0, 8).map(function(name) {
    const t = window.TEAMS_DATA[name];
    const flagImg = '<img src="https://flagcdn.com/20x15/' + t.flag + '.png" class="sugg-flag" alt="' + name + '">';
    const cups = t.titles.length > 0 ? ' x' + t.titles.length : '';
    return '<div class="team-sugg-item" data-team="' + name + '" style="padding: 15px 20px;">' + flagImg + ' <span>' + name + '</span><span class="sugg-cups">' + (t.titles.length > 0 ? 'Campeon' + cups : '') + '</span></div>';
  }).join('');
  sugg.querySelectorAll('.team-sugg-item').forEach(function(item) {
    item.addEventListener('click', function() {
      const teamName = item.dataset.team;
      document.getElementById('team-search-input').value = teamName;
      sugg.innerHTML = ''; sugg.style.display = 'none';
      renderTeamProfile(teamName);
    });
  });
}

const WORLD_CUP_HOSTS = {
  "Uruguay": [1930],
  "Italia": [1934, 1990],
  "Francia": [1938, 1998],
  "Brasil": [1950, 2014],
  "Suiza": [1954],
  "Suecia": [1958],
  "Chile": [1962],
  "Inglaterra": [1966],
  "México": [1970, 1986, 2026],
  "Alemania": [1974, 2006],
  "Argentina": [1978],
  "España": [1982],
  "Estados Unidos": [1994, 2026],
  "Japón": [2002],
  "República de Corea": [2002],
  "Sudáfrica": [2010],
  "Rusia": [2018],
  "Catar": [2022],
  "Canadáá": [2026]
};

const CHAMPIONS_LINEUPS = {
  "Uruguay": {
    1930: {
      coach: "Alberto Suppici",
      lineup: [
        { name: "E. Ballestrero", pos: "POR", num: 1 },
        { name: "J. Nasazzi (C)", pos: "DEF", num: 2 },
        { name: "E. Mascheroni", pos: "DEF", num: 3 },
        { name: "J. Andrade", pos: "MED", num: 4 },
        { name: "L. Fernández", pos: "MED", num: 5 },
        { name: "A. Gestido", pos: "MED", num: 6 },
        { name: "P. Dorado", pos: "DEL", num: 7 },
        { name: "H. Scarone", pos: "DEL", num: 8 },
        { name: "H. Castro", pos: "DEL", num: 9 },
        { name: "P. Cea", pos: "DEL", num: 10 },
        { name: "S. Iriarte", pos: "DEL", num: 11 }
      ]
    },
    1950: {
      coach: "Juan López",
      lineup: [
        { name: "R. Máspoli", pos: "POR", num: 1 },
        { name: "M. González", pos: "DEF", num: 2 },
        { name: "E. Tejera", pos: "DEF", num: 3 },
        { name: "S. Gambetta", pos: "DEF", num: 4 },
        { name: "O. Varela (C)", pos: "MED", num: 5 },
        { name: "V. R. Andrade", pos: "MED", num: 6 },
        { name: "A. Ghiggia", pos: "DEL", num: 7 },
        { name: "J. Pérez", pos: "DEL", num: 8 },
        { name: "O. Míguez", pos: "DEL", num: 9 },
        { name: "J. Schiaffino", pos: "DEL", num: 10 },
        { name: "E. Morán", pos: "DEL", num: 11 }
      ]
    }
  },
  "Italia": {
    1934: {
      coach: "Vittorio Pozzo",
      lineup: [
        { name: "G. Combi (C)", pos: "POR", num: 1 },
        { name: "E. Monzeglio", pos: "DEF", num: 2 },
        { name: "L. Allemandi", pos: "DEF", num: 3 },
        { name: "A. Ferraris", pos: "MED", num: 4 },
        { name: "L. Monti", pos: "MED", num: 5 },
        { name: "L. Bertolini", pos: "MED", num: 6 },
        { name: "E. Guaita", pos: "DEL", num: 7 },
        { name: "G. Meazza", pos: "DEL", num: 8 },
        { name: "A. Schiavio", pos: "DEL", num: 9 },
        { name: "G. Ferrari", pos: "DEL", num: 10 },
        { name: "R. Orsi", pos: "DEL", num: 11 }
      ]
    },
    1938: {
      coach: "Vittorio Pozzo",
      lineup: [
        { name: "A. Olivieri", pos: "POR", num: 1 },
        { name: "A. Foni", pos: "DEF", num: 2 },
        { name: "P. Rava", pos: "DEF", num: 3 },
        { name: "P. Serantoni", pos: "MED", num: 4 },
        { name: "M. Andreolo", pos: "MED", num: 5 },
        { name: "U. Locatelli", pos: "MED", num: 6 },
        { name: "P. Biavati", pos: "DEL", num: 7 },
        { name: "G. Meazza (C)", pos: "DEL", num: 8 },
        { name: "S. Piola", pos: "DEL", num: 9 },
        { name: "G. Ferrari", pos: "DEL", num: 10 },
        { name: "G. Colaussi", pos: "DEL", num: 11 }
      ]
    },
    1982: {
      coach: "Enzo Bearzot",
      lineup: [
        { name: "D. Zoff (C)", pos: "POR", num: 1 },
        { name: "G. Bergomi", pos: "DEF", num: 2 },
        { name: "G. Scirea", pos: "DEF", num: 6 },
        { name: "F. Collovati", pos: "DEF", num: 5 },
        { name: "C. Gentile", pos: "DEF", num: 3 },
        { name: "A. Cabrini", pos: "DEF", num: 4 },
        { name: "G. Oriali", pos: "MED", num: 13 },
        { name: "M. Tardelli", pos: "MED", num: 14 },
        { name: "B. Conti", pos: "MED", num: 16 },
        { name: "F. Graziani", pos: "DEL", num: 19 },
        { name: "P. Rossi", pos: "DEL", num: 20 }
      ]
    },
    2006: {
      coach: "Marcello Lippi",
      lineup: [
        { name: "G. Buffon", pos: "POR", num: 1 },
        { name: "G. Zambrotta", pos: "DEF", num: 19 },
        { name: "F. Cannavaro (C)", pos: "DEF", num: 5 },
        { name: "M. Materazzi", pos: "DEF", num: 23 },
        { name: "F. Grosso", pos: "DEF", num: 3 },
        { name: "M. Camoranesi", pos: "MED", num: 16 },
        { name: "G. Gattuso", pos: "MED", num: 8 },
        { name: "A. Pirlo", pos: "MED", num: 21 },
        { name: "S. Perrotta", pos: "MED", num: 20 },
        { name: "F. Totti", pos: "DEL", num: 10 },
        { name: "L. Toni", pos: "DEL", num: 9 }
      ]
    }
  },
  "Alemania": {
    1954: {
      coach: "Sepp Herberger",
      lineup: [
        { name: "T. Turek", pos: "POR", num: 1 },
        { name: "J. Posipal", pos: "DEF", num: 3 },
        { name: "W. Liebrich", pos: "DEF", num: 10 },
        { name: "W. Kohlmeyer", pos: "DEF", num: 4 },
        { name: "H. Eckel", pos: "MED", num: 6 },
        { name: "K. Mai", pos: "MED", num: 8 },
        { name: "H. Rahn", pos: "DEL", num: 12 },
        { name: "M. Morlock", pos: "DEL", num: 13 },
        { name: "O. Walter", pos: "DEL", num: 15 },
        { name: "F. Walter (C)", pos: "DEL", num: 16 },
        { name: "H. Schäfer", pos: "DEL", num: 20 }
      ]
    },
    1974: {
      coach: "Helmut Schön",
      lineup: [
        { name: "S. Maier", pos: "POR", num: 1 },
        { name: "B. Vogts", pos: "DEF", num: 2 },
        { name: "H. Schwarzenbeck", pos: "DEF", num: 4 },
        { name: "F. Beckenbauer (C)", pos: "DEF", num: 5 },
        { name: "P. Breitner", pos: "DEF", num: 3 },
        { name: "R. Bonhof", pos: "MED", num: 16 },
        { name: "U. Hoeness", pos: "MED", num: 14 },
        { name: "W. Overath", pos: "MED", num: 12 },
        { name: "U. Grabowski", pos: "DEL", num: 9 },
        { name: "G. Müller", pos: "DEL", num: 13 },
        { name: "B. Hölzenbein", pos: "DEL", num: 17 }
      ]
    },
    1990: {
      coach: "Franz Beckenbauer",
      lineup: [
        { name: "B. Illgner", pos: "POR", num: 1 },
        { name: "T. Berthold", pos: "DEF", num: 14 },
        { name: "J. Kohler", pos: "DEF", num: 4 },
        { name: "K. Augenthaler", pos: "DEF", num: 5 },
        { name: "G. Buchwald", pos: "DEF", num: 6 },
        { name: "A. Brehme", pos: "DEF", num: 3 },
        { name: "T. Hässler", pos: "MED", num: 8 },
        { name: "L. Matthäus (C)", pos: "MED", num: 10 },
        { name: "O. Bein", pos: "MED", num: 17 },
        { name: "R. Völler", pos: "DEL", num: 9 },
        { name: "J. Klinsmann", pos: "DEL", num: 18 }
      ]
    },
    2014: {
      coach: "Joachim Löw",
      lineup: [
        { name: "M. Neuer", pos: "POR", num: 1 },
        { name: "P. Lahm (C)", pos: "DEF", num: 16 },
        { name: "J. Boateng", pos: "DEF", num: 20 },
        { name: "M. Hummels", pos: "DEF", num: 5 },
        { name: "B. Höwedes", pos: "DEF", num: 4 },
        { name: "C. Kramer", pos: "MED", num: 23 },
        { name: "B. Schweinsteiger", pos: "MED", num: 7 },
        { name: "T. Kroos", pos: "MED", num: 18 },
        { name: "M. Özil", pos: "MED", num: 8 },
        { name: "T. Müller", pos: "DEL", num: 13 },
        { name: "M. Klose", pos: "DEL", num: 11 }
      ]
    }
  },
  "Brasil": {
    1958: {
      coach: "Vicente Feola",
      lineup: [
        { name: "Gilmar", pos: "POR", num: 3 },
        { name: "Djalma Santos", pos: "DEF", num: 4 },
        { name: "Bellini (C)", pos: "DEF", num: 2 },
        { name: "Orlando", pos: "DEF", num: 15 },
        { name: "Nilton Santos", pos: "DEF", num: 12 },
        { name: "Zito", pos: "MED", num: 19 },
        { name: "Didi", pos: "MED", num: 6 },
        { name: "Garrincha", pos: "DEL", num: 11 },
        { name: "Pelé", pos: "DEL", num: 10 },
        { name: "Vavá", pos: "DEL", num: 20 },
        { name: "Zagallo", pos: "DEL", num: 7 }
      ]
    },
    1962: {
      coach: "Aymoré Moreira",
      lineup: [
        { name: "Gilmar", pos: "POR", num: 1 },
        { name: "Djalma Santos", pos: "DEF", num: 2 },
        { name: "Mauro (C)", pos: "DEF", num: 3 },
        { name: "Zózimo", pos: "DEF", num: 5 },
        { name: "Nilton Santos", pos: "DEF", num: 6 },
        { name: "Zito", pos: "MED", num: 8 },
        { name: "Didi", pos: "MED", num: 4 },
        { name: "Garrincha", pos: "DEL", num: 7 },
        { name: "Amarildo", pos: "DEL", num: 20 },
        { name: "Vavá", pos: "DEL", num: 19 },
        { name: "Zagallo", pos: "DEL", num: 21 }
      ]
    },
    1970: {
      coach: "Mário Zagallo",
      lineup: [
        { name: "Félix", pos: "POR", num: 1 },
        { name: "Carlos Alberto (C)", pos: "DEF", num: 4 },
        { name: "Brito", pos: "DEF", num: 2 },
        { name: "Piazza", pos: "DEF", num: 3 },
        { name: "Everaldo", pos: "DEF", num: 6 },
        { name: "Clodoaldo", pos: "MED", num: 5 },
        { name: "Gérson", pos: "MED", num: 8 },
        { name: "Jairzinho", pos: "DEL", num: 7 },
        { name: "Tostão", pos: "DEL", num: 9 },
        { name: "Pelé", pos: "DEL", num: 10 },
        { name: "Rivelino", pos: "DEL", num: 11 }
      ]
    },
    1994: {
      coach: "Carlos Alberto Parreira",
      lineup: [
        { name: "Taffarel", pos: "POR", num: 1 },
        { name: "Jorginho", pos: "DEF", num: 2 },
        { name: "Aldair", pos: "DEF", num: 13 },
        { name: "Márcio Santos", pos: "DEF", num: 15 },
        { name: "Branco", pos: "DEF", num: 6 },
        { name: "Mauro Silva", pos: "MED", num: 5 },
        { name: "Dunga (C)", pos: "MED", num: 8 },
        { name: "Mazinho", pos: "MED", num: 17 },
        { name: "Zinho", pos: "MED", num: 9 },
        { name: "Bebeto", pos: "DEL", num: 7 },
        { name: "Romário", pos: "DEL", num: 11 }
      ]
    },
    2002: {
      coach: "Luiz Felipe Scolari",
      lineup: [
        { name: "Marcos", pos: "POR", num: 1 },
        { name: "Lúcio", pos: "DEF", num: 3 },
        { name: "Edmílson", pos: "DEF", num: 5 },
        { name: "Roque Júnior", pos: "DEF", num: 4 },
        { name: "Cafu (C)", pos: "DEF", num: 2 },
        { name: "Roberto Carlos", pos: "DEF", num: 6 },
        { name: "Gilberto Silva", pos: "MED", num: 8 },
        { name: "Kléberson", pos: "MED", num: 15 },
        { name: "Ronaldinho", pos: "DEL", num: 11 },
        { name: "Rivaldo", pos: "DEL", num: 10 },
        { name: "Ronaldo", pos: "DEL", num: 9 }
      ]
    }
  },
  "Inglaterra": {
    1966: {
      coach: "Alf Ramsey",
      lineup: [
        { name: "G. Banks", pos: "POR", num: 1 },
        { name: "G. Cohen", pos: "DEF", num: 2 },
        { name: "J. Charlton", pos: "DEF", num: 5 },
        { name: "B. Moore (C)", pos: "DEF", num: 6 },
        { name: "R. Wilson", pos: "DEF", num: 3 },
        { name: "N. Stiles", pos: "MED", num: 4 },
        { name: "B. Charlton", pos: "MED", num: 9 },
        { name: "M. Peters", pos: "MED", num: 16 },
        { name: "A. Ball", pos: "DEL", num: 7 },
        { name: "R. Hunt", pos: "DEL", num: 21 },
        { name: "G. Hurst", pos: "DEL", num: 10 }
      ]
    }
  },
  "Argentina": {
    1978: {
      coach: "César Luis Menotti",
      lineup: [
        { name: "U. Fillol", pos: "POR", num: 5 },
        { name: "J. Olguín", pos: "DEF", num: 15 },
        { name: "L. Galván", pos: "DEF", num: 7 },
        { name: "D. Passarella (C)", pos: "DEF", num: 19 },
        { name: "A. Tarantini", pos: "DEF", num: 20 },
        { name: "O. Ardiles", pos: "MED", num: 2 },
        { name: "A. Gallego", pos: "MED", num: 12 },
        { name: "M. Kempes", pos: "MED", num: 10 },
        { name: "D. Bertoni", pos: "DEL", num: 4 },
        { name: "L. Luque", pos: "DEL", num: 14 },
        { name: "O. Ortiz", pos: "DEL", num: 16 }
      ]
    },
    1986: {
      coach: "Carlos Bilardo",
      lineup: [
        { name: "N. Pumpido", pos: "POR", num: 18 },
        { name: "J. Cuciuffo", pos: "DEF", num: 9 },
        { name: "J. Brown", pos: "DEF", num: 5 },
        { name: "O. Ruggeri", pos: "DEF", num: 8 },
        { name: "J. Olarticoechea", pos: "DEF", num: 16 },
        { name: "R. Giusti", pos: "MED", num: 14 },
        { name: "S. Batista", pos: "MED", num: 2 },
        { name: "H. Enrique", pos: "MED", num: 12 },
        { name: "J. Burruchaga", pos: "MED", num: 7 },
        { name: "D. Maradona (C)", pos: "DEL", num: 10 },
        { name: "J. Valdano", pos: "DEL", num: 11 }
      ]
    },
    2022: {
      coach: "Lionel Scaloni",
      lineup: [
        { name: "E. Martínez", pos: "POR", num: 23 },
        { name: "N. Molina", pos: "DEF", num: 26 },
        { name: "C. Romero", pos: "DEF", num: 13 },
        { name: "N. Otamendi", pos: "DEF", num: 19 },
        { name: "N. Tagliafico", pos: "DEF", num: 3 },
        { name: "R. De Paul", pos: "MED", num: 7 },
        { name: "E. Fernández", pos: "MED", num: 24 },
        { name: "A. Mac Allister", pos: "MED", num: 20 },
        { name: "L. Messi (C)", pos: "DEL", num: 10 },
        { name: "J. Álvarez", pos: "DEL", num: 9 },
        { name: "A. Di María", pos: "DEL", num: 11 }
      ]
    }
  },
  "Francia": {
    1998: {
      coach: "Aimé Jacquet",
      lineup: [
        { name: "F. Barthez", pos: "POR", num: 16 },
        { name: "L. Thuram", pos: "DEF", num: 15 },
        { name: "F. Leboeuf", pos: "DEF", num: 18 },
        { name: "M. Desailly", pos: "DEF", num: 8 },
        { name: "B. Lizarazu", pos: "DEF", num: 3 },
        { name: "D. Deschamps (C)", pos: "MED", num: 7 },
        { name: "C. Karembeu", pos: "MED", num: 19 },
        { name: "E. Petit", pos: "MED", num: 17 },
        { name: "Z. Zidane", pos: "MED", num: 10 },
        { name: "Y. Djorkaeff", pos: "DEL", num: 6 },
        { name: "S. Guivarc'h", pos: "DEL", num: 9 }
      ]
    },
    2018: {
      coach: "Didier Deschamps",
      lineup: [
        { name: "H. Lloris (C)", pos: "POR", num: 1 },
        { name: "B. Pavard", pos: "DEF", num: 2 },
        { name: "R. Varane", pos: "DEF", num: 4 },
        { name: "S. Umtiti", pos: "DEF", num: 5 },
        { name: "L. Hernández", pos: "DEF", num: 21 },
        { name: "P. Pogba", pos: "MED", num: 6 },
        { name: "N. Kanté", pos: "MED", num: 13 },
        { name: "B. Matuidi", pos: "MED", num: 14 },
        { name: "K. Mbappé", pos: "DEL", num: 10 },
        { name: "A. Griezmann", pos: "DEL", num: 7 },
        { name: "O. Giroud", pos: "DEL", num: 9 }
      ]
    }
  },
  "España": {
    2010: {
      coach: "Vicente del Bosque",
      lineup: [
        { name: "I. Casillas (C)", pos: "POR", num: 1 },
        { name: "S. Ramos", pos: "DEF", num: 15 },
        { name: "G. Piqué", pos: "DEF", num: 3 },
        { name: "C. Puyol", pos: "DEF", num: 5 },
        { name: "J. Capdevila", pos: "DEF", num: 11 },
        { name: "S. Busquets", pos: "MED", num: 16 },
        { name: "X. Alonso", pos: "MED", num: 14 },
        { name: "Xavi", pos: "MED", num: 8 },
        { name: "A. Iniesta", pos: "MED", num: 6 },
        { name: "Pedro", pos: "DEL", num: 18 },
        { name: "D. Villa", pos: "DEL", num: 7 }
      ]
    }
  },
  "Chile": {
    1962: {
      coach: "Fernando Riera",
      lineup: [
        { name: "Misael Escuti", pos: "POR", num: 1 },
        { name: "Luis Eyzaguirre", pos: "DEF", num: 2 },
        { name: "Raúl Sánchez", pos: "DEF", num: 3 },
        { name: "Humberto Cruz", pos: "DEF", num: 5 },
        { name: "Carlos Contreras", pos: "DEF", num: 4 },
        { name: "Eladio Rojas", pos: "MED", num: 8 },
        { name: "Jorge Toro (C)", pos: "MED", num: 6 },
        { name: "Jaime Ramírez", pos: "DEL", num: 7 },
        { name: "Armando Tobar", pos: "DEL", num: 9 },
        { name: "Honorino Landa", pos: "DEL", num: 10 },
        { name: "Leonel Sánchez", pos: "DEL", num: 11 }
      ]
    }
  },
  "Croacia": {
    2018: {
      coach: "Zlatko Dalić",
      lineup: [
        { name: "D. Subašić", pos: "POR", num: 23 },
        { name: "S. Vrsaljko", pos: "DEF", num: 2 },
        { name: "D. Lovren", pos: "DEF", num: 6 },
        { name: "D. Vida", pos: "DEF", num: 21 },
        { name: "I. Strinić", pos: "DEF", num: 3 },
        { name: "I. Rakitić", pos: "MED", num: 7 },
        { name: "M. Brozović", pos: "MED", num: 11 },
        { name: "L. Modrić (C)", pos: "MED", num: 10 },
        { name: "A. Rebić", pos: "DEL", num: 18 },
        { name: "I. Perišić", pos: "DEL", num: 4 },
        { name: "M. Mandžukić", pos: "DEL", num: 17 }
      ]
    }
  },
  "Países Bajos": {
    2010: {
      coach: "Bert van Marwijk",
      lineup: [
        { name: "M. Stekelenburg", pos: "POR", num: 1 },
        { name: "G. van der Wiel", pos: "DEF", num: 2 },
        { name: "J. Heitinga", pos: "DEF", num: 3 },
        { name: "J. Mathijsen", pos: "DEF", num: 4 },
        { name: "G. van Bronckhorst (C)", pos: "DEF", num: 5 },
        { name: "M. van Bommel", pos: "MED", num: 6 },
        { name: "N. de Jong", pos: "MED", num: 8 },
        { name: "W. Sneijder", pos: "MED", num: 10 },
        { name: "A. Robben", pos: "DEL", num: 11 },
        { name: "D. Kuyt", pos: "DEL", num: 7 },
        { name: "R. van Persie", pos: "DEL", num: 9 }
      ]
    }
  },
  "Bélgica": {
    2018: {
      coach: "Roberto Martínez",
      lineup: [
        { name: "T. Courtois", pos: "POR", num: 1 },
        { name: "T. Alderweireld", pos: "DEF", num: 2 },
        { name: "V. Kompany", pos: "DEF", num: 4 },
        { name: "J. Vertonghen", pos: "DEF", num: 5 },
        { name: "T. Meunier", pos: "MED", num: 15 },
        { name: "A. Witsel", pos: "MED", num: 6 },
        { name: "K. De Bruyne", pos: "MED", num: 7 },
        { name: "N. Chadli", pos: "MED", num: 22 },
        { name: "E. Hazard (C)", pos: "DEL", num: 10 },
        { name: "R. Lukaku", pos: "DEL", num: 9 },
        { name: "D. Mertens", pos: "DEL", num: 14 }
      ]
    }
  },
  "México": {
    1986: {
      coach: "Bora Milutinović",
      lineup: [
        { name: "P. Larios", pos: "POR", num: 1 },
        { name: "M. Amador", pos: "DEF", num: 2 },
        { name: "F. Quirarte", pos: "DEF", num: 3 },
        { name: "F. J. Cruz", pos: "DEF", num: 14 },
        { name: "R. Servín", pos: "DEF", num: 17 },
        { name: "M. España", pos: "MED", num: 16 },
        { name: "T. Boy (C)", pos: "MED", num: 10 },
        { name: "M. Negrete", pos: "MED", num: 22 },
        { name: "C. Muñoz", pos: "MED", num: 7 },
        { name: "L. Flores", pos: "DEL", num: 11 },
        { name: "H. Sánchez", pos: "DEL", num: 9 }
      ]
    }
  },
  "Estados Unidos": {
    2002: {
      coach: "Bruce Arena",
      lineup: [
        { name: "B. Friedel", pos: "POR", num: 1 },
        { name: "T. Sanneh", pos: "DEF", num: 22 },
        { name: "E. Pope", pos: "DEF", num: 23 },
        { name: "G. Berhalter", pos: "DEF", num: 3 },
        { name: "F. Hejduk", pos: "DEF", num: 2 },
        { name: "C. Reyna (C)", pos: "MED", num: 10 },
        { name: "P. Mastroeni", pos: "MED", num: 4 },
        { name: "J. O'Brien", pos: "MED", num: 5 },
        { name: "E. Lewis", pos: "MED", num: 7 },
        { name: "L. Donovan", pos: "DEL", num: 21 },
        { name: "B. McBride", pos: "DEL", num: 20 }
      ]
    }
  },
  "Colombia": {
    2014: {
      coach: "José Pékerman",
      lineup: [
        { name: "D. Ospina", pos: "POR", num: 1 },
        { name: "C. Zúñiga", pos: "DEF", num: 18 },
        { name: "C. Zapata", pos: "DEF", num: 2 },
        { name: "M. Yepes (C)", pos: "DEF", num: 3 },
        { name: "P. Armero", pos: "DEF", num: 7 },
        { name: "A. Aguilar", pos: "MED", num: 8 },
        { name: "C. Sánchez", pos: "MED", num: 6 },
        { name: "J. Cuadrado", pos: "MED", num: 11 },
        { name: "J. Rodríguez", pos: "MED", num: 10 },
        { name: "V. Ibarbo", pos: "DEL", num: 14 },
        { name: "T. Gutiérrez", pos: "DEL", num: 19 }
      ]
    }
  },
  "República de Corea": {
    2002: {
      coach: "Guus Hiddink",
      lineup: [
        { name: "Lee Woon-jae", pos: "POR", num: 1 },
        { name: "Choi Jin-cheul", pos: "DEF", num: 4 },
        { name: "Hong Myung-bo (C)", pos: "DEF", num: 20 },
        { name: "Kim Tae-young", pos: "DEF", num: 7 },
        { name: "Song Chong-gug", pos: "MED", num: 22 },
        { name: "Kim Nam-il", pos: "MED", num: 5 },
        { name: "Yoo Sang-chul", pos: "MED", num: 6 },
        { name: "Lee Young-pyo", pos: "MED", num: 10 },
        { name: "Park Ji-sung", pos: "DEL", num: 21 },
        { name: "Ahn Jung-hwan", pos: "DEL", num: 19 },
        { name: "Seol Ki-hyeon", pos: "DEL", num: 9 }
      ]
    }
  }
};

function generatePitchRosterHtml(lineup, team) {
  const shirtBg = team.kit.shirt;
  const shirtBorder = team.colors.secondary;
  const numColor = (team.colors.secondary !== team.kit.shirt ? team.colors.secondary : team.colors.third);

  // Group by position
  const gks = lineup.filter(p => p.pos === 'POR');
  const defs = lineup.filter(p => p.pos === 'DEF');
  const meds = lineup.filter(p => p.pos === 'MED');
  const dels = lineup.filter(p => p.pos === 'DEL');

  let html = '<div class="tp-profile-pitch-wrapper">';
  html += '<div class="tp-profile-pitch">';
  
  // Field markings
  html += '<div class="tp-pitch-lines">';
  html += '  <div class="halfway-line"></div>';
  html += '  <div class="center-circle"></div>';
  html += '  <div class="area-top"></div>';
  html += '  <div class="area-bottom"></div>';
  html += '</div>';

  // Render Goalkeeper (top: 85%)
  gks.forEach(function(p) {
    html += '<div class="tp-pitch-player" style="left: 50%; top: 85%;">' +
              '<div class="tp-pitch-shirt" style="background:' + shirtBg + '; border-color:' + shirtBorder + '; color:' + numColor + ';">' + p.num + '</div>' +
              '<div class="tp-pitch-name">' + p.name + '</div>' +
            '</div>';
  });

  // Render Defenders (top: 65%)
  defs.forEach(function(p, i) {
    let left = 50;
    if (defs.length > 1) {
      left = 15 + i * (70 / (defs.length - 1));
    }
    html += '<div class="tp-pitch-player" style="left: ' + left + '%; top: 65%;">' +
              '<div class="tp-pitch-shirt" style="background:' + shirtBg + '; border-color:' + shirtBorder + '; color:' + numColor + ';">' + p.num + '</div>' +
              '<div class="tp-pitch-name">' + p.name + '</div>' +
            '</div>';
  });

  // Render Midfielders (top: 45%)
  meds.forEach(function(p, i) {
    let left = 50;
    if (meds.length > 1) {
      left = 15 + i * (70 / (meds.length - 1));
    }
    html += '<div class="tp-pitch-player" style="left: ' + left + '%; top: 45%;">' +
              '<div class="tp-pitch-shirt" style="background:' + shirtBg + '; border-color:' + shirtBorder + '; color:' + numColor + ';">' + p.num + '</div>' +
              '<div class="tp-pitch-name">' + p.name + '</div>' +
            '</div>';
  });

  // Render Forwards (top: 22%)
  dels.forEach(function(p, i) {
    let left = 50;
    if (dels.length > 1) {
      left = 18 + i * (64 / (dels.length - 1));
    }
    html += '<div class="tp-pitch-player" style="left: ' + left + '%; top: 22%;">' +
              '<div class="tp-pitch-shirt" style="background:' + shirtBg + '; border-color:' + shirtBorder + '; color:' + numColor + ';">' + p.num + '</div>' +
              '<div class="tp-pitch-name">' + p.name + '</div>' +
            '</div>';
  });

  html += '</div></div>';
  return html;
}

window.switchChampionsRosterYear = function(year, teamName) {
  const team = window.TEAMS_DATA[teamName];
  const teamLineups = CHAMPIONS_LINEUPS[teamName] || CHAMPIONS_LINEUPS[getUnifiedDisplayName(teamName, year)];
  if (!team || !teamLineups || !teamLineups[year]) return;

  const data = teamLineups[year];
  const coachEl = document.getElementById('tp-roster-coach-val');
  const pitchContainer = document.getElementById('tp-roster-pitch-container');
  const titleEl = document.getElementById('tp-roster-year-val');
  
  if (coachEl) coachEl.innerHTML = 'Director Técnico: <strong>' + data.coach + '</strong>';
  if (titleEl) titleEl.innerHTML = 'Alineación de la Final ' + year;
  
  if (pitchContainer) {
    pitchContainer.innerHTML = generatePitchRosterHtml(data.lineup, team);
  }

  // Active class on tabs
  const container = document.getElementById('team-profile-container');
  if (container) {
    container.querySelectorAll('.tp-roster-tab-btn').forEach(function(btn) {
      if (parseInt(btn.dataset.year) === parseInt(year)) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }
};

function renderTeamProfile(teamName) {
  const team = window.TEAMS_DATA[teamName];
  const container = document.getElementById('team-profile-container');
  if (!team || !container) return;

  const flagImg = '<img src="https://flagcdn.com/w160/' + team.flag + '.png" class="tp-flag" alt="' + teamName + '" style="width:80px; height:auto;">';
  
  // Highlights box
  let highlightHtml = '';
  if (team.titles && team.titles.length > 0) {
    const totalTitles = team.titles.length;
    const lastTitle = team.titles[totalTitles - 1];
    highlightHtml = '<div class="tp-highlight-champion">' +
                      '<span class="tp-highlight-star">⭐</span>' +
                      '<div class="tp-highlight-info">' +
                        '<h3>Campeón Mundial (' + totalTitles + ' ' + (totalTitles === 1 ? 'vez' : 'veces') + ')</h3>' +
                        '<p>Último título mundial ganado: <strong>' + lastTitle + '</strong></p>' +
                      '</div>' +
                    '</div>';
  }

  // Host info
  const hostedYears = WORLD_CUP_HOSTS[teamName] || WORLD_CUP_HOSTS[getUnifiedDisplayName(teamName, 2026)] || [];
  let hostHtml = '';
  if (hostedYears.length > 0) {
    hostHtml = '<div class="tp-host-badge-box">' +
                 '<span class="tp-host-icon">🏟️</span>' +
                 '<div class="tp-host-text">' +
                   'Anfitrión de la Copa del Mundo <strong>' + hostedYears.length + ' ' + (hostedYears.length === 1 ? 'vez' : 'veces') + '</strong>: ' +
                   '<strong>' + hostedYears.join(', ') + '</strong>' +
                 '</div>' +
               '</div>';
  }

  const wcHistory = team.history || {};
  const allYears = Object.keys(wcHistory).map(Number).sort(function(a,b) { return a-b; });
  
  // Extract Silver and Bronze years
  const silverYears = [];
  const bronzeYears = [];
  let fourthPlacesCount = 0;
  let quartersCount = 0;
  let roundOf16Count = 0;
  let groupsCount = 0;

  allYears.forEach(function(y) {
    const h = wcHistory[y];
    const yr = parseInt(y);
    const res = (h.result || '').toLowerCase();
    const fin = h.finish;

    if (h.finish === '2' || res.includes('subcampeón')) {
      if (silverYears.indexOf(yr) === -1) silverYears.push(yr);
    } else if (h.finish === '3' || res.includes('tercer')) {
      if (bronzeYears.indexOf(yr) === -1) bronzeYears.push(yr);
    } else if (h.finish === '4' || res.includes('cuarto lugar')) {
      fourthPlacesCount++;
    }

    if (res.includes('cuartos') || res.includes('cuarta')) {
      quartersCount++;
    } else if (res.includes('octavos') || res.includes('segunda fase') || res.includes('octava')) {
      roundOf16Count++;
    } else if (res.includes('grupos') || res.includes('primera fase') || res.includes('primera ronda')) {
      groupsCount++;
    }
  });

  const semisCount = bronzeYears.length + fourthPlacesCount;

  // Timeline list
  const historyHtml = allYears.map(function(y) {
    const h = wcHistory[y];
    const isTitle = team.titles.indexOf(y) !== -1;
    let cls = 'tp-hist-year';
    if (isTitle) cls += ' champion';
    else if (h.finish === '2') cls += ' runner';
    else if (h.finish === '3') cls += ' third';
    const trophy = isTitle ? ' [C]' : '';
    return '<div class="' + cls + '"><div class="tp-hist-yr">' + y + '</div><div class="tp-hist-res">' + trophy + ' ' + h.result + '</div></div>';
  }).join('');

  // Performance stats grid
  const perfGridHtml = 
    '<div class="tp-perf-grid">' +
      '<div class="tp-perf-item"><span class="tp-perf-count highlight-gold">' + (team.titles ? team.titles.length : 0) + '</span><span class="tp-perf-label">Campeón</span></div>' +
      '<div class="tp-perf-item"><span class="tp-perf-count highlight-silver">' + silverYears.length + '</span><span class="tp-perf-label">Subcampeón</span></div>' +
      '<div class="tp-perf-item"><span class="tp-perf-count highlight-bronze">' + semisCount + '</span><span class="tp-perf-label">Semifinales</span></div>' +
      '<div class="tp-perf-item"><span class="tp-perf-count">' + quartersCount + '</span><span class="tp-perf-label">Cuartos</span></div>' +
      '<div class="tp-perf-item"><span class="tp-perf-count">' + roundOf16Count + '</span><span class="tp-perf-label">Octavos</span></div>' +
      '<div class="tp-perf-item"><span class="tp-perf-count">' + groupsCount + '</span><span class="tp-perf-label">Fase Grupos</span></div>' +
    '</div>';

  // Vitrina & Medallero
  let showcaseHtml = '';
  if ((team.titles && team.titles.length > 0) || silverYears.length > 0 || bronzeYears.length > 0) {
    showcaseHtml = '<div class="tp-showcase-wrapper">' +
                     '<div class="tp-showcase-box">' +
                       '<div class="tp-showcase-title">🏆 Vitrina de Trofeos</div>';
    if (team.titles && team.titles.length > 0) {
      showcaseHtml += '<div class="tp-trophy-cabinet">';
      team.titles.forEach(function(y) {
        showcaseHtml += '<div class="tp-trophy-card">' +
                          '<div class="tp-trophy-icon">🏆</div>' +
                          '<div class="tp-trophy-year">' + y + '</div>' +
                        '</div>';
      });
      showcaseHtml += '</div>';
    } else {
      showcaseHtml += '<div style="font-size: 0.8rem; color: var(--text-muted); font-style: italic;">Sin títulos mundiales</div>';
    }
    showcaseHtml += '</div>' + // end showcase box 1
                    '<div class="tp-showcase-box">' +
                      '<div class="tp-showcase-title">🥈 Medallero de Podios</div>';
    if (silverYears.length > 0 || bronzeYears.length > 0) {
      showcaseHtml += '<div class="tp-medals-cabinet">';
      silverYears.forEach(function(y) {
        showcaseHtml += '<div class="tp-medal-card silver">' +
                          '<div class="tp-medal-icon">🥈</div>' +
                          '<div class="tp-medal-year">' + y + '</div>' +
                        '</div>';
      });
      bronzeYears.forEach(function(y) {
        showcaseHtml += '<div class="tp-medal-card bronze">' +
                          '<div class="tp-medal-icon">🥉</div>' +
                          '<div class="tp-medal-year">' + y + '</div>' +
                        '</div>';
      });
      showcaseHtml += '</div>';
    } else {
      showcaseHtml += '<div style="font-size: 0.8rem; color: var(--text-muted); font-style: italic;">Sin otros podios (2º o 3º)</div>';
    }
    showcaseHtml += '</div>' + // end showcase box 2
                   '</div>'; // end showcase wrapper
  }

  // Champions roster section
  let rosterSectionHtml = '';
  const teamLineups = CHAMPIONS_LINEUPS[teamName] || CHAMPIONS_LINEUPS[getUnifiedDisplayName(teamName, 2026)];
  let lineupData = null;
  let rosterTitle = '';

  if (team.titles && team.titles.length > 0 && teamLineups) {
    const lastYear = team.titles[team.titles.length - 1];
    lineupData = teamLineups[lastYear];
    rosterTitle = 'Alineación de la Final ' + lastYear;
  } else if (teamLineups) {
    const years = Object.keys(teamLineups);
    const bestYear = years[years.length - 1];
    lineupData = teamLineups[bestYear];
    rosterTitle = 'Alineación de su Mejor Participación (' + bestYear + ')';
  } else if (FIFA_DATA.rosters) {
    const rawRoster = FIFA_DATA.rosters[teamName] || FIFA_DATA.rosters[getUnifiedDisplayName(teamName, 2026)];
    if (rawRoster) {
      const convertedLineup = rawRoster.map(function(p) {
        let pos = 'MED';
        if (p.pos === 'GK') pos = 'POR';
        else if (p.pos === 'DEF') pos = 'DEF';
        else if (p.pos === 'MID') pos = 'MED';
        else if (p.pos === 'FWD' || p.pos === 'FW') pos = 'DEL';
        return { name: p.name, pos: pos, num: p.num };
      });
      lineupData = {
        coach: 'Selección 2026',
        lineup: convertedLineup
      };
      rosterTitle = 'Alineación de Referencia (Mundial 2026)';
    }
  }

  if (lineupData) {
    rosterSectionHtml = '<div class="tp-champions-roster-card">';
    if (team.titles && team.titles.length > 0) {
      rosterSectionHtml += '<div class="tp-showcase-title">🛡️ Plantel Titular Campeón (Finales)</div>' +
                            '<div class="tp-roster-tabs">';
      team.titles.forEach(function(y, index) {
        const activeClass = index === team.titles.length - 1 ? ' active' : '';
        rosterSectionHtml += '<button class="tp-roster-tab-btn' + activeClass + '" data-year="' + y + '" onclick="switchChampionsRosterYear(' + y + ', \'' + teamName.replace("'", "\\'") + '\')">' + y + '</button>';
      });
      rosterSectionHtml += '</div>';
    } else {
      rosterSectionHtml += '<div class="tp-showcase-title">🛡️ Alineación de Referencia</div>';
    }
    
    rosterSectionHtml += '<div class="tp-roster-content" id="tp-roster-content-box">' +
                           '  <div class="tp-roster-header">' +
                           '    <div class="tp-roster-title-year" id="tp-roster-year-val">' + rosterTitle + '</div>' +
                           '    <div class="tp-roster-coach" id="tp-roster-coach-val">Director Técnico: <strong>' + lineupData.coach + '</strong></div>' +
                           '  </div>' +
                           '  <div id="tp-roster-pitch-container">';
    rosterSectionHtml += generatePitchRosterHtml(lineupData.lineup, team);
    rosterSectionHtml += '  </div>' +
                         '</div>' +
                         '</div>';
  }

  // Progress bar rankings for scorers and capped players
  const roster2026 = getTeamRoster(teamName) || [];
  
  // Calcular goles anotados en 2026 para los jugadores de este equipo
  const goals2026 = {};
  (AppState.matches || []).forEach(function(m) {
    if (m.home === teamName || m.away === teamName) {
      const isHome = (m.home === teamName);
      if (m.events) {
        m.events.forEach(function(e) {
          if (e.type === 'goal') {
            const isOwnGoal = e.detail && (e.detail.includes('autogol') || e.detail.includes('propia puerta'));
            const scoredByThisTeam = isOwnGoal ? (e.team !== (isHome ? 'home' : 'away')) : (e.team === (isHome ? 'home' : 'away'));
            if (scoredByThisTeam && !isOwnGoal) {
              const pName = e.player;
              if (pName) {
                goals2026[pName] = (goals2026[pName] || 0) + 1;
              }
            }
          }
        });
      }
    }
  });

  // Copia mutable de goleadores históricos
  let dynamicScorers = (team.topScorers || []).map(function(s) {
    return { name: s.name, goals: s.goals, years: s.years };
  });

  // Función interna para buscar coincidencias de nombres de jugadores
  function findScorerIndex(pName) {
    const nFind = window.normalizeSearch(pName);
    return dynamicScorers.findIndex(function(s) {
      const nScorer = window.normalizeSearch(s.name);
      return nScorer.includes(nFind) || nFind.includes(nScorer);
    });
  }

  // Comprobar si un jugador es activo en el roster de 2026
  function isActiveIn2026(playerName) {
    const nName = window.normalizeSearch(playerName);
    return roster2026.some(function(rp) {
      const nRoster = window.normalizeSearch(rp.name);
      return nName.includes(nRoster) || nRoster.includes(nName);
    });
  }

  // Sumar los goles de 2026 o agregar nuevos goleadores activos
  Object.keys(goals2026).forEach(function(pName) {
    const gCount = goals2026[pName];
    const idx = findScorerIndex(pName);
    if (idx !== -1) {
      dynamicScorers[idx].goals += gCount;
      if (!dynamicScorers[idx].years.includes('2026')) {
        if (dynamicScorers[idx].years.endsWith('-Act.')) {
          // Ya activo
        } else if (dynamicScorers[idx].years.includes('-')) {
          const parts = dynamicScorers[idx].years.split('-');
          dynamicScorers[idx].years = parts[0] + '-2026';
        } else {
          dynamicScorers[idx].years = dynamicScorers[idx].years + ', 2026';
        }
      }
    } else {
      // Buscar el nombre completo del jugador en el roster de 2026
      let fullName = pName;
      const nFind = window.normalizeSearch(pName);
      const rosterPlayer = roster2026.find(function(rp) {
        const nRoster = window.normalizeSearch(rp.name);
        return nRoster.includes(nFind) || nFind.includes(nRoster);
      });
      if (rosterPlayer) {
        fullName = rosterPlayer.name;
      }
      dynamicScorers.push({
        name: fullName,
        goals: gCount,
        years: "2026"
      });
    }
  });

  // Ordenar de mayor a menor goles y limitar a 5
  dynamicScorers.sort(function(a, b) {
    return b.goals - a.goals;
  });
  dynamicScorers = dynamicScorers.slice(0, 5);

  // Renderizar la lista de goleadores con distintivos activos
  const maxGoals = dynamicScorers.length > 0 ? dynamicScorers[0].goals : 10;
  const scorersHtml = dynamicScorers.map(function(s, i) {
    const pct = (s.goals / maxGoals) * 100;
    const active = isActiveIn2026(s.name);
    const activeBadge = active ? ' <span class="tp-active-badge" style="font-size: 0.6rem; padding: 2px 6px; background: rgba(16, 185, 129, 0.15); color: var(--accent-green); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 4px; margin-left: 6px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.05em; display: inline-block; vertical-align: middle;">🔥 2026</span>' : '';
    return '<div class="tp-progress-item">' +
             '<div class="tp-progress-info">' +
               '<div class="tp-progress-player"><span class="tp-progress-rank">' + (i + 1) + '</span><strong>' + s.name + '</strong>' + activeBadge + '</div>' +
               '<div class="tp-progress-val">' + s.goals + ' goles <span style="font-size:0.65rem; color:var(--text-muted); font-weight:normal;">(' + s.years + ')</span></div>' +
             '</div>' +
             '<div class="tp-progress-bar-bg">' +
               '<div class="tp-progress-bar-fill" style="width: ' + pct + '%;"></div>' +
             '</div>' +
           '</div>';
  }).join('');

  const maxMatches = team.mostCapped && team.mostCapped.length > 0 ? team.mostCapped[0].matches : 100;
  const cappedHtml = (team.mostCapped || []).map(function(s, i) {
    const pct = (s.matches / maxMatches) * 100;
    return '<div class="tp-progress-item">' +
             '<div class="tp-progress-info">' +
               '<div class="tp-progress-player"><span class="tp-progress-rank">' + (i + 1) + '</span><strong>' + s.name + '</strong></div>' +
               '<div class="tp-progress-val">' + s.matches + ' partidos <span style="font-size:0.65rem; color:var(--text-muted); font-weight:normal;">(' + s.years + ')</span></div>' +
             '</div>' +
             '<div class="tp-progress-bar-bg">' +
               '<div class="tp-progress-bar-fill" style="width: ' + pct + '%;"></div>' +
             '</div>' +
           '</div>';
  }).join('');

  // Emblematic players (Hall of Fame) - Copia mutable para actualizar sus goles en 2026
  let dynamicLegends = (team.emblematicPlayers || []).map(function(p) {
    let pGoals = p.wc_goals;
    let pPlayed = p.wc_played;
    
    // Contar goles agregados en 2026 para este jugador emblemático
    let goalsAdded = 0;
    Object.keys(goals2026).forEach(function(gKey) {
      const nFind = window.normalizeSearch(gKey);
      const nLegend = window.normalizeSearch(p.name);
      if (nLegend.includes(nFind) || nFind.includes(nLegend)) {
        goalsAdded += goals2026[gKey];
      }
    });
    
    if (goalsAdded > 0 || isActiveIn2026(p.name)) {
      pGoals += goalsAdded;
      if (!pPlayed.includes('2026')) {
        const match = pPlayed.match(/^(\d+)\s*\((.*?)\)/);
        if (match) {
          const count = parseInt(match[1]) + 1;
          const years = match[2] + ', 2026';
          pPlayed = count + ' (' + years + ')';
        } else {
          pPlayed = pPlayed + ', 2026';
        }
      }
    }
    
    return {
      name: p.name,
      wc_played: pPlayed,
      wc_goals: pGoals,
      total_caps: p.total_caps
    };
  });

  let legendsHtml = '';
  if (dynamicLegends && dynamicLegends.length > 0) {
    legendsHtml = '<div class="tp-section">' +
                    '<div class="tp-section-title" style="font-size: 1rem;">Jugadores Emblemáticos</div>' +
                    '<div class="tp-legends-grid">';
    dynamicLegends.forEach(function(p) {
      legendsHtml += '<div class="tp-legend-card">' +
                       '<div class="tp-legend-header">' +
                         '<span class="tp-legend-icon">⭐</span>' +
                         '<div class="tp-legend-name">' + p.name + '</div>' +
                       '</div>' +
                       '<div class="tp-legend-body">' +
                         '<div class="tp-legend-stat">🏆 <strong>Mundiales:</strong> ' + p.wc_played + '</div>' +
                         '<div class="tp-legend-stat">⚽ <strong>Goles en Mundiales:</strong> ' + p.wc_goals + '</div>' +
                         '<div class="tp-legend-stat">👕 <strong>Partidos con Selección:</strong> ' + p.total_caps + '</div>' +
                       '</div>' +
                     '</div>';
    });
    legendsHtml += '</div></div>';
  }




  container.innerHTML =
    '<div class="team-profile-card">' +
      '<div class="tp-header" style="align-items: center; padding: 2rem;">' +
        '<div class="tp-kit-display" style="transform: scale(1.5); margin-right: 2rem; margin-left: 1rem;">' +
          '<div class="tp-kit-shirt" style="background:' + team.kit.shirt + '; border-color:' + team.colors.secondary + '">' +
            '<span class="tp-kit-num" style="color:' + (team.colors.secondary !== team.kit.shirt ? team.colors.secondary : team.colors.third) + '">10</span>' +
          '</div>' +
          '<div class="tp-kit-shorts" style="background:' + team.kit.shorts + '"></div>' +
          '<div class="tp-kit-socks" style="background:' + team.kit.socks + '"></div>' +
        '</div>' +
        '<div class="tp-info">' +
          flagImg +
          '<h2 class="tp-name" style="font-size: 2.5rem; margin-top:10px; margin-bottom: 0;">' + teamName + '</h2>' +
          '<div class="tp-best-box" style="margin-top: 10px; background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 8px; padding: 10px 15px; display: inline-block;">' +
            '<span style="font-size: 0.7rem; text-transform: uppercase; color: var(--color-accent); font-weight: 700; display: block; letter-spacing: 0.05em; margin-bottom: 2px;">Mejor Participación</span>' +
            '<span style="font-size: 1.05rem; font-weight: 800; color: white; font-family: var(--font-display);">' + team.bestResult + '</span>' +
          '</div>' +
        '</div>' +
        '<div class="tp-stats-grid" style="gap: 1rem; min-width: 200px;">' +
          '<div class="tp-stat" style="padding: 10px;"><span class="tp-stat-val" style="font-size: 1.5rem;">' + team.totalParticipations + '</span><span class="tp-stat-lbl">Mundiales</span></div>' +
          '<div class="tp-stat" style="padding: 10px;"><span class="tp-stat-val" style="font-size: 1.5rem;">' + team.totalMatches + '</span><span class="tp-stat-lbl">Partidos</span></div>' +
          '<div class="tp-stat" style="padding: 10px;"><span class="tp-stat-val" style="font-size: 1.5rem;">' + team.totalWins + '</span><span class="tp-stat-lbl">Victorias</span></div>' +
          '<div class="tp-stat" style="padding: 10px;"><span class="tp-stat-val" style="font-size: 1.5rem;">' + team.totalGoals + '</span><span class="tp-stat-lbl">Goles</span></div>' +
        '</div>' +
      '</div>' +
      '<div class="tp-body" style="padding: 2rem;">' +
        highlightHtml +
        hostHtml +
        showcaseHtml +
        '<div class="tp-section"><div class="tp-section-title" style="font-size: 1rem;">Resumen de Clasificaciones Históricas</div>' + perfGridHtml + '</div>' +
        rosterSectionHtml +
        legendsHtml +
        '<div class="tp-section"><div class="tp-section-title" style="font-size: 1rem;">Historial en Mundiales (Línea de Tiempo)</div>' +
        '<div class="tp-history-timeline" style="gap: 8px;">' + historyHtml + '</div></div>' +
        '<div class="tp-two-cols" style="gap: 2rem;">' +
          '<div class="tp-section"><div class="tp-section-title" style="font-size: 1rem;">Máximos Goleadores en Mundiales</div>' +
            '<div class="tp-progress-list">' + (scorersHtml || '<div class="tp-no-data">Sin datos</div>') + '</div>' +
          '</div>' +
          '<div class="tp-section"><div class="tp-section-title" style="font-size: 1rem;">Más Presencias en Mundiales</div>' +
            '<div class="tp-progress-list">' + (cappedHtml || '<div class="tp-no-data">Sin datos</div>') + '</div>' +
          '</div>' +
        '</div>' +
        (team.funFact ? '<div class="tp-funfact" style="font-size: 1rem; padding: 1rem;">' + team.funFact + '</div>' : '') +
      '</div>' +
    '</div>';
}function getUnifiedDisplayName(name, year) {
  if (!name) return name;
  if (year === 1974) {
    return name;
  }
  if (name === "Alemania Occidental" || name === "Alemania Democrática" || name === "Alemania Federal") {
    return "Alemania";
  }
  return name;
}

function unifyGermanyData() {
  if (!window.TEAMS_DATA) return;
  const alemania = window.TEAMS_DATA["Alemania"];
  const alemaniaOcc = window.TEAMS_DATA["Alemania Occidental"];
  const alemaniaDem = window.TEAMS_DATA["Alemania Democrática"];
  if (!alemania || !alemaniaOcc) return;

  const unifiedHistory = {};

  const mergeHist = (histObj) => {
    if (!histObj) return;
    Object.keys(histObj).forEach(year => {
      if (!unifiedHistory[year]) {
        unifiedHistory[year] = Object.assign({}, histObj[year]);
      } else {
        const existingFinish = parseInt(unifiedHistory[year].finish) || 99;
        const newFinish = parseInt(histObj[year].finish) || 99;
        if (newFinish < existingFinish) {
          unifiedHistory[year] = Object.assign({}, histObj[year]);
        }
      }
    });
  };

  mergeHist(alemania.history);
  mergeHist(alemaniaOcc.history);
  mergeHist(alemaniaDem ? alemaniaDem.history : null);

  const allTitles = []
    .concat(alemania.titles || [])
    .concat(alemaniaOcc.titles || [])
    .concat(alemaniaDem ? alemaniaDem.titles || [] : [])
    .sort((a, b) => a - b);

  const uniqueTitles = [];
  allTitles.forEach(t => {
    if (uniqueTitles.indexOf(t) === -1) {
      uniqueTitles.push(t);
    }
  });

  const totalMatches = (alemania.totalMatches || 0) + (alemaniaOcc.totalMatches || 0) + (alemaniaDem ? alemaniaDem.totalMatches || 0 : 0);
  const totalWins = (alemania.totalWins || 0) + (alemaniaOcc.totalWins || 0) + (alemaniaDem ? alemaniaDem.totalWins || 0 : 0);
  const totalGoals = (alemania.totalGoals || 0) + (alemaniaOcc.totalGoals || 0) + (alemaniaDem ? alemaniaDem.totalGoals || 0 : 0);
  const totalParticipations = Object.keys(unifiedHistory).length;

  const topScorers = []
    .concat(alemania.topScorers || [])
    .concat(alemaniaOcc.topScorers || [])
    .concat(alemaniaDem ? alemaniaDem.topScorers || [] : [])
    .sort((a, b) => b.goals - a.goals);

  const mostCapped = []
    .concat(alemania.mostCapped || [])
    .concat(alemaniaOcc.mostCapped || [])
    .concat(alemaniaDem ? alemaniaDem.mostCapped || [] : [])
    .sort((a, b) => b.matches - a.matches);

  window.TEAMS_DATA["Alemania"] = Object.assign({}, alemania, {
    titles: uniqueTitles,
    bestResult: "Campeón Mundial " + uniqueTitles.join(", "),
    totalParticipations: totalParticipations,
    totalMatches: totalMatches,
    totalWins: totalWins,
    totalGoals: totalGoals,
    history: unifiedHistory,
    topScorers: topScorers,
    mostCapped: mostCapped,
    funFact: "Alemania (incluyendo Alemania Occidental y Democrática) ha participado en " + totalParticipations + " mundiales en toda su historia, ganando " + uniqueTitles.length + " títulos mundiales."
  });
}

function calculateSecondStageStandings(wc, roundName) {
  const round = wc.knockout.find(r => r.round === roundName);
  if (!round || !round.matches) return null;
  
  const teamsMap = {};
  round.matches.forEach(m => {
    if (!teamsMap[m.home]) teamsMap[m.home] = { name: m.home, w: 0, d: 0, l: 0, gf: 0, ga: 0, pts: 0 };
    if (!teamsMap[m.away]) teamsMap[m.away] = { name: m.away, w: 0, d: 0, l: 0, gf: 0, ga: 0, pts: 0 };
    
    if (m.score) {
      const cleanScore = m.score.replace(/\s*\([^)]*\)/g, '').trim();
      const parts = cleanScore.split('-');
      if (parts.length >= 2) {
        const gh = parseInt(parts[0]);
        const ga = parseInt(parts[1]);
        if (!isNaN(gh) && !isNaN(ga)) {
          teamsMap[m.home].gf += gh;
          teamsMap[m.home].ga += ga;
          teamsMap[m.away].gf += ga;
          teamsMap[m.away].ga += gh;
          
          if (gh > ga) {
            teamsMap[m.home].w += 1;
            teamsMap[m.away].l += 1;
          } else if (gh < ga) {
            teamsMap[m.away].w += 1;
            teamsMap[m.home].l += 1;
          } else {
            teamsMap[m.home].d += 1;
            teamsMap[m.away].d += 1;
          }
        }
      }
    }
  });
  
  const winPoints = wc.year < 1994 ? 2 : 3;
  const teamsList = Object.keys(teamsMap).map(name => {
    const t = teamsMap[name];
    t.pts = t.w * winPoints + t.d * 1;
    return t;
  });
  
  // Sort teams
  teamsList.sort((a, b) => {
    if (b.pts !== a.pts) return b.pts - a.pts;
    const dgA = a.gf - a.ga;
    const dgB = b.gf - b.ga;
    if (dgB !== dgA) return dgB - dgA;
    return b.gf - a.gf;
  });
  
  return teamsList;
}

function renderHistorySemifinalFinal(wc) {
  const container = document.getElementById('history-semifinal-final');
  if (!container) return;
  
  if (!wc.knockout || wc.knockout.length === 0) {
    container.innerHTML = '<div class="hist-no-groups" style="text-align:center; padding: 3rem; color: var(--text-muted);">Sin datos.</div>';
    return;
  }
  
  // Filter only Semifinales and Final
  const targetRounds = wc.knockout.filter(r => {
    const name = (r.round || '').toLowerCase();
    return name.includes('semifinal') || name === 'final' || name === 'finales';
  });
  
  if (targetRounds.length === 0) {
    container.innerHTML = '<div class="hist-no-groups" style="text-align:center; padding: 3rem; color: var(--text-muted);">Sin datos de semifinales y final.</div>';
    return;
  }
  
  // Sort standard rounds
  let sortedRounds = targetRounds;
  
  // Render
  let html = '<div class="tournament-bracket-wrapper" style="overflow-x: auto; padding: 2.5rem 0 1rem 0;">';
  html += '<div class="tournament-bracket" style="display: flex; gap: 2rem; width: max-content; min-width: 100%; align-items: stretch;">';

  sortedRounds.forEach(function(round) {
    const isFinalRound = round.round === 'Final' || round.round === 'Finales';

    html += '<div class="bracket-column" style="display: flex; flex-direction: column; justify-content: space-around; width: 220px; flex-shrink: 0; gap: 1.5rem; position: relative;">';
    html += '<h4 style="text-align:center; color:var(--color-accent); font-size:0.8rem; text-transform:uppercase; margin-bottom:1rem; position:absolute; top:-25px; width:100%;">' + round.round + '</h4>';

    round.matches.forEach(function(m) {
      let homeScore = '', awayScore = '';
      if (m.score) {
        const penMatch = m.score.match(/^(\d+)-(\d+)\s*\((\d+)-(\d+)\s*pen\)$/i);
        if (penMatch) {
          homeScore = penMatch[1] + ' (' + penMatch[3] + ')';
          awayScore = penMatch[2] + ' (' + penMatch[4] + ')';
        } else {
          const cleanScore = m.score.replace(/\s*\([^)]*pr[oó]rroga[^)]*\)/i, '').trim();
          const scoreParts = cleanScore.split('-');
          if (scoreParts.length >= 2) {
            homeScore = scoreParts[0].trim();
            awayScore = scoreParts[1].trim();
          } else {
            homeScore = cleanScore;
            awayScore = '';
          }
        }
      }

      const cardStyle = isFinalRound
        ? "background: linear-gradient(135deg, rgba(255,215,0,0.15), rgba(0,0,0,0.8)); border: 1px solid rgba(255,215,0,0.5); box-shadow: 0 0 15px rgba(255,215,0,0.2);"
        : "background: var(--bg-secondary); border: 1px solid var(--border-color);";

      html += '<div class="bracket-match" style="' + cardStyle + ' border-radius: 8px; padding: 10px; position: relative; z-index: 2;">';

      html += '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:5px; border-bottom:1px solid rgba(255,255,255,0.05); padding-bottom:5px;">';
      html += '<div style="display:flex; align-items:center; gap:8px;"><span style="font-size:1.1rem;">' + getFlagImg(m.home) + '</span><span style="font-size:0.85rem; color:white;">' + m.home + '</span></div>';
      html += '<div style="font-weight:bold; color:var(--color-accent);">' + homeScore + '</div>';
      html += '</div>';

      html += '<div style="display:flex; justify-content:space-between; align-items:center;">';
      html += '<div style="display:flex; align-items:center; gap:8px;"><span style="font-size:1.1rem;">' + getFlagImg(m.away) + '</span><span style="font-size:0.85rem; color:white;">' + m.away + '</span></div>';
      html += '<div style="font-weight:bold; color:var(--color-accent);">' + awayScore + '</div>';
      html += '</div>';

      html += '</div>';
    });

    html += '</div>';
  });
  
  // El Campeón y la Copa
  const unifiedChamp = getUnifiedDisplayName(wc.champion, wc.year);
  html += '<div class="bracket-column champion-col" style="display: flex; flex-direction: column; justify-content: center; width: 220px; flex-shrink: 0; align-items: center; position:relative;">';
  html += '<h4 style="text-align:center; color:#FFD700; font-size:0.8rem; text-transform:uppercase; margin-bottom:1rem; position:absolute; top:-25px; width:100%;">Campeón</h4>';
  html += '<div class="champion-display" style="text-align:center; animation: pop 0.5s ease;">';
  html += '<div style="font-size:4rem; filter: drop-shadow(0 0 20px rgba(255,215,0,0.6)); margin-bottom:10px;">🏆</div>';
  html += '<div style="font-size:3rem; margin-bottom:10px;">' + getFlagImg(unifiedChamp, 'h120') + '</div>';
  html += '<div style="font-size:1.2rem; font-weight:800; color:#FFD700; text-transform:uppercase; letter-spacing:2px;">' + unifiedChamp + '</div>';
  html += '</div>';
  html += '</div>';

  html += '</div></div>';
  
  container.innerHTML = html;
}

// ==========================================================================
// VISITORS COUNTER LOGIC (Resilient & Netlify-compatible)
// ==========================================================================
(function() {
  const visitorCountEl = document.getElementById("visitor-count");
  if (!visitorCountEl) return;

  const PROJECT_NAME = "mundialero_adones_prod";
  const API_URL = "https://api.counterapi.dev/v1/projects/" + PROJECT_NAME + "/counters/visits/up";
  const LOCAL_STORAGE_KEY = "mundialero_official_visits";
  const SEED_BASE = 0;

  // Format number with dots (Spanish thousand separators)
  function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  // Fallback to local storage counter
  function fallbackCounter() {
    let localCount = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!localCount) {
      localCount = SEED_BASE;
    } else {
      localCount = parseInt(localCount, 10);
    }
    
    // Increment local counter
    localCount += 1;
    localStorage.setItem(LOCAL_STORAGE_KEY, localCount);
    
    // Display formatted
    visitorCountEl.textContent = formatNumber(localCount);
  }

  // Load visitor counter using Fetch API with a strict Timeout
  async function loadCounter() {
    const controller = new AbortController();
    const timeoutId = setTimeout(function() { controller.abort(); }, 1500); // 1.5s timeout

    try {
      const response = await fetch(API_URL, {
        method: "GET",
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      if (response.ok) {
        const data = await response.json();
        if (data && typeof data.value === "number") {
          visitorCountEl.textContent = formatNumber(data.value);
          return;
        }
      }
      // If response is not ok, trigger fallback
      fallbackCounter();
    } catch (err) {
      clearTimeout(timeoutId);
      // Fallback on connection errors, timeout, or block by adblockers
      fallbackCounter();
    }
  }

  // Run on DOM loaded
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadCounter);
  } else {
    loadCounter();
  }
})();
