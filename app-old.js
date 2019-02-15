const http = require('http');

http.createServer((req, res) => {
        res.writeHead(200, { 'content-Type': 'application/json' });
        salida = { nombre: 'Nelson', edad: 51, url: req.url };
        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(8080);

console.log('Escuchando en el puerto 8080');