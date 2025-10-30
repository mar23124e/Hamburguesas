// server.js (Servidor Node.js con Express para correr la web)
const express = require('express');
const app = express();
const port = 3000;

// Sirve archivos estáticos desde el directorio actual
app.use(express.static(__dirname));

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

// Instrucciones: Coloca todos los archivos HTML en el mismo directorio que server.js.
// Ejecuta con: node server.js
// Accede a http://localhost:3000/index.html para ver la página de inicio.
// El carrito usa localStorage para persistir entre páginas.
// El ticket se genera en HTML y se puede imprimir.
// Login requerido para pedidos y agregar al carrito.
// Usuarios almacenados en localStorage para verificación.