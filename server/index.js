// Archivo de configuración del servidor
const express = require("express");
var cors = require('cors');
const path = require('path');

//Carga de las variables de entorno en el servidor
const config = require('./config.js');

//URL del storage de las imagenes
const HOST_SERVER = config.HOST+":"+config.PORT;

const data = [
    {
      id: 0,
      disponible: false,
      puntos: 260,
      ulrImagen: HOST_SERVER+"/static/images/premios/camisetapolonegra.png",
    },
    {
      id: 1,
      disponible: true,
      puntos: 600,
      ulrImagen: HOST_SERVER+"/static/images/premios/sombrillarecogible.png",
    },
    {
      id: 2,
      disponible: false,
      puntos: 200,
      ulrImagen: HOST_SERVER+"/static/images/premios/camisetapolonegra.png",
    },
    {
      id: 3,
      disponible: true,
      puntos: 400,
      ulrImagen: HOST_SERVER+"/static/images/premios/camisetapolonegra.png",
    },
    {
      id: 4,
      disponible: false,
      puntos: 400,
      ulrImagen: HOST_SERVER+"/static/images/premios/camisetapolonegra.png",
    },
    {
      id: 5,
      disponible: true,
      puntos: 260,
      ulrImagen: HOST_SERVER+"/static/images/premios/camisetapolonegra.png",
    },
  ]
const dataEventos = [
  {
      "id": 1,
      "titulo": "Conferencia Lectura medieval",
      "urlImagen": "lecturamedieval.jpg",
      "puntos": 100,
      "descripcion": "Conferencia sobre los autores y temáticas de las obras literarias de este periodo, por parte de Msc Andres Toro - Universidad Nacional.",
      "fecha": "25/10/2021",
      "hora": "16:00",
      "lugar": "Biblioteca Luis Arango Sala 2",
      "responsable": "Bienestar"
  },
  {
      "id": 2,
      "titulo": "Concierto de música colombiana",
      "urlImagen": "conciertomusicacolombiana.jpg",
      "puntos": 150,
      "descripcion": "Concierto de cuerdas de música colombiana, del grupo Los Panchos",
      "fecha": "12/11/2021",
      "hora": "18:30",
      "lugar": "Teatro La Plaza",
      "responsable": "Bienestar"
  },
  {
      "id": 3,
      "titulo": "Concierto música clásica",
      "urlImagen": "conciertomusicaclasica.jpg",
      "puntos": 150,
      "descripcion": "Concierto de orquesta de música clásica por parte la banda sinfónica Barhaus",
      "fecha": "13/11/2021",
      "hora": "19:00",
      "lugar": "Teatro La Plaza",
      "responsable": "Bienestar"
  },
  {
      "id": 4,
      "titulo": "Foro de emprendimiento digital",
      "urlImagen": "emprendimientodigital.jpg",
      "puntos": 120,
      "descripcion": "Foro para exponer las oportunidades y cómo crecer en el sector de la tecnología",
      "fecha": "13/11/2021",
      "hora": "14:00",
      "lugar": "Teatro La Plaza",
      "responsable": "Bienestar"
  },
  {
      "id": 5,
      "titulo": "Rumba-terapia",
      "urlImagen": "rumbaterapia.jpg",
      "puntos": 180,
      "descripcion": "Participe en la sesión de rumba terapia para ejercitarse por medio de la música.",
      "fecha": "4/11/2021",
      "hora": "16:00",
      "lugar": "Parqueadero empresa",
      "responsable": "Bienestar"
  },
  {
      "id": 6,
      "titulo": "Sesión de aerobicos principiantes",
      "urlImagen": "aerobicosprincipiantes.jpg",
      "puntos": 180,
      "descripcion": "Participe en la sesión de aerobicos para personas que desean empezar a mejorar su estado físico.",
      "fecha": "4/11/2021",
      "hora": "16:00",
      "lugar": "Parqueadero empresa",
      "responsable": "Bienestar"
  },
  {
      "id": 7,
      "titulo": "Taller de papiroflexia",
      "urlImagen": "papiroflexia.jpg",
      "puntos": 100,
      "descripcion": "Participe para practicar el fabuloso arte del doblado de papel y haga divertidas figuras.",
      "fecha": "3/11/2021",
      "hora": "16:00",
      "lugar": "Parqueadero empresa",
      "responsable": "Bienestar"
  }
]
// Se inicia un objeto express
const app = express();
// se define el puerto donde se ejecuta la aplicación
const port = config.PORT;
//Control de acceso de origen
app.use(cors());

// para usar archivos estaticos dentro de las carpetas
app.use('/static/images', express.static(path.join(__dirname,'/assets/images')));

// Endpoints de la API REST
app.get('/api/premios', function (req, res) {
    res.json({premios: data});
});
app.get('/api/eventos', function (req, res) {
  res.json(dataEventos);
});

// Error 404
app.use(function(req, res, next) {
    console.log("endpoint no implementado");
    res.json({mensaje: "error 404"})
  });
//el servidor va a escuchar las peticiones en este puerto
app.listen(port);
console.log('Server started at http://localhost:' + port);