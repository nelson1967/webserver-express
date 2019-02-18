const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

// para definir un punto de entrada para publicar lo que sea
app.use(express.static(__dirname + '/public'));
app.set('views', './vistas'); // Redefino la ubicación de las vistas
app.set('view engine', 'hbs'); // Express - HBS (handlebars) engine. Las vistas archivos .hbs por omisión quedan en carpeta 'views'
hbs.registerPartials(__dirname + '/vistas/parciales');
//Se puede revisar configuracion de app con: console.log(app.set('view engine'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'NELSON',
        titulo: 'HOME'
    });
});
app.get('/about', (req, res) => {
    res.render('about', {
        titulo: 'Acerca de'
    });
});
// app.get('/home.html', (req, res) => {
//     res.send('Se invoca el HOME');
// });
app.listen(port, () => {
    console.log(`Escuchando peticiones en puerto ${ port }`);
});