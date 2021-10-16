/*
14-10-2021
Archivo principal de configuración del servidor express
*/

// LIBRERIAS NECESARIAS
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const database = require("./database");
const morgan = require('morgan');
const path = require('path');


//CARGA DE VARIABLES DE ENTORNO
const config = require('./config.js');
const port = config.PORT;

// INICIO CONEXION MONGO
mongoose.Promise = global.Promise;
mongoose
    .connect(database.db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(
        () => {
            console.log("Database connected");
        },
        (error) => {
            console.log("Database could't be connected to: " + error);
        }
    );
// FIN CONEXIÓN MONGO


// ROUTERS DE LA APLICACIÓN

const premioAPI = require("./routes/premio.router");
const eventoAPI = require("./routes/evento.router");
const sucursalAPI = require("./routes/sucursal.router");
const userAPI = require("./routes/user.router");
// Ruta de login 
const loginRoute = require("./routes/login.route");

// INICIALIZACION OBJETO DE EXPRESS
const app = express();

// MIDDLEWARE
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: true, }));
app.use(cors());// Actualmente permite la conexión desde cualquier IP



// API  Rutas
app.use("/api/premios", premioAPI);
app.use("/api/eventos", eventoAPI);
app.use("/api/sucursales", sucursalAPI);
app.use("/users", userAPI);

//Logueo
app.use("/login", loginRoute)

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
// SERVIDOR ESTATICO
app.use('/static/images', express.static(path.join(__dirname,'../assets/images')));
app.use(express.static(path.join(__dirname,'../public')));


const server = app.listen(port, () => {
    console.log("Connected to port " + port);
});


// Find 404
app.use((req, res, next) => {
    next(res.send(404).json({ mensaje: "ruta no disponible" }));
});

// error handler
app.use(function (err, req, res) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});



