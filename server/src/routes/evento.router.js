const express = require("express");


const eventoRoute = express.Router();

const { response } = require("express");

const eventos = [
    {
        "_id": "6156a762f9e525fa8b39d88f",
        "titulo": "Aerobicos",
        "categoria": "Deportes",
        "tipo": "Mixto",
        "path_foto": "/static/images/eventos/Aerobicos.png",
        "valor_puntos": 120,
        "updated": "2021-10-05T02:22:35.213Z",
        "disponible": true
    },
    {
        "_id": "6156a762f9e525fa8b39d890",
        "titulo": "Rumba Terapia",
        "categoria": "Recreación",
        "tipo": "Mixto",
        "path_foto": "/static/images/eventos/RumbaTerapia.png",
        "valor_puntos": 80,
        "updated": "2021-10-02T01:35:17.325Z",
        "disponible": true
    },
    {
        "_id": "6156a762f9e525fa8b39d891",
        "titulo": "CrossFIit",
        "categoria": "Deportes",
        "tipo": "Presencial",
        "path_foto": "/static/images/eventos/Crossfit.png",
        "valor_puntos": 120,
        "updated": "2021-10-01T20:05:06.885Z",
        "disponible": true
    },
    {
        "_id": "6156a762f9e525fa8b39d892",
        "titulo": "Festival de Ópera al Parque",
        "categoria": "Cultura",
        "tipo": "Presencial",
        "path_foto": "/static/images/eventos/Opera.png",
        "valor_puntos": 200,
        "updated": "2021-10-01T20:06:09.664Z",
        "disponible": true
    },
    {
        "_id": "6156a762f9e525fa8b39d893",
        "titulo": "Feria de Arte Moderno",
        "categoria": "Cultura",
        "tipo": "Presencial",
        "path_foto": "/static/images/eventos/FeriaArte.png",
        "valor_puntos": 300,
        "updated": "2021-10-05T17:30:01.919Z",
        "disponible": true
    },
    {
        "_id": "6156a762f9e525fa8b39d894",
        "titulo": "Autocine",
        "categoria": "Cultura",
        "tipo": "Presencial",
        "path_foto": "/static/images/eventos/Autocine.png",
        "valor_puntos": 150,
        "disponible": true
    },
];
const eventosFull = {
    "6156a762f9e525fa8b39d88f":{
        "_id": "6156a762f9e525fa8b39d88f",
        "id_categoria": 1,
        "id_tipo": 3,
        "id_sucursal": 10106,
        "titulo": "Aerobicos",
        "fecha_inicio": "2021-10-04T20:00",
        "fecha_fin": "2021-10-04T21:30",
        "lugar": "Gimnasio",
        "url": "https://meet.google.com/ocs-yybn-vdu",
        "path_foto": "/static/images/eventos/Aerobicos.png",
        "cupo": 50,
        "valor_puntos": 120,
        "disponible": true,
        "updated": "2021-10-05T02:22:35.213Z"
    },
    "6156a762f9e525fa8b39d890":{
        "_id": "6156a762f9e525fa8b39d890",
        "id_categoria": 4,
        "id_tipo": 3,
        "id_sucursal": 10105,
        "titulo": "Rumba Terapia",
        "fecha_inicio": "2021-10-21T20:00",
        "fecha_fin": "2021-10-21T21:30",
        "lugar": "Gimnasio Sede",
        "url": "https://meet.google.com/ocs-yybn-vdu",
        "path_foto": "/static/images/eventos/RumbaTerapia.png",
        "cupo": 252,
        "valor_puntos": 80,
        "disponible": true,
        "updated": "2021-10-02T01:35:17.325Z"
    },
    "6156a762f9e525fa8b39d891":{
        "_id": "6156a762f9e525fa8b39d891",
        "id_categoria": 1,
        "id_tipo": 2,
        "id_sucursal": 10112,
        "titulo": "CrossFIit",
        "fecha_inicio": "2021-10-08T10:00",
        "fecha_fin": "2021-10-08T11:30",
        "lugar": "Gimnasio",
        "path_foto": "/static/images/eventos/Crossfit.png",
        "cupo": 20,
        "valor_puntos": 120,
        "disponible": true,
        "updated": "2021-10-01T20:05:06.885Z"
    },
    "6156a762f9e525fa8b39d892":{
        "_id": "6156a762f9e525fa8b39d892",
        "id_categoria": 2,
        "id_tipo": 2,
        "id_sucursal": 10120,
        "titulo": "Festival de Ópera al Parque",
        "fecha_inicio": "2021-10-15T19:30",
        "fecha_fin": "2021-10-15T21:30",
        "lugar": "Teatro",
        "path_foto": "/static/images/eventos/Opera.png",
        "cupo": 10,
        "valor_puntos": 200,
        "disponible": true,
        "updated": "2021-10-01T20:06:09.664Z"
    },
    "6156a762f9e525fa8b39d893":{
        "_id": "6156a762f9e525fa8b39d893",
        "id_categoria": 2,
        "id_tipo": 2,
        "id_sucursal": 10102,
        "titulo": "Feria de Arte Moderno",
        "fecha_inicio": "2021-10-19T13:30",
        "fecha_fin": "2021-10-19T19:30",
        "lugar": "Biblioteca",
        "path_foto": "/static/images/eventos/FeriaArte.png",
        "cupo": 10,
        "valor_puntos": 300,
        "disponible": true,
        "updated": "2021-10-05T17:30:01.919Z"
    },
    "6156a762f9e525fa8b39d894":{
        "_id": "6156a762f9e525fa8b39d894",
        "id_categoria": 2,
        "id_tipo": 2,
        "id_sucursal": 10105,
        "titulo": "Autocine",
        "fecha_inicio": "2021-10-21T19:30",
        "fecha_fin": "2021-10-21T22:30",
        "lugar": "Parqueadero",
        "path_foto": "/static/images/eventos/Autocine.png",
        "cupo": 15,
        "valor_puntos": 150,
        "disponible": true
    }
}
const eventosId = {
    "6156a762f9e525fa8b39d88f":[
        {
            "_id": "6156a762f9e525fa8b39d88f",
            "titulo": "Aerobicos",
            "categoria": "Deportes",
            "sucursal": "OFICINA  BUCARAMANGA",
            "fecha_inicio": "2021-10-04T20:00",
            "fecha_fin": "2021-10-04T21:30",
            "tipo": "Mixto",
            "path_foto": "/static/images/eventos/Aerobicos.png",
            "valor_puntos": 120,
            "disponible": true,
            "updated": "2021-10-05T02:22:35.213Z"
        }
    ],
    "6156a762f9e525fa8b39d890":[
        {
            "_id": "6156a762f9e525fa8b39d890",
            "titulo": "Rumba Terapia",
            "categoria": "Recreación",
            "sucursal": "OFICINA  BOGOTA D.C.",
            "fecha_inicio": "2021-10-21T20:00",
            "fecha_fin": "2021-10-21T21:30",
            "tipo": "Mixto",
            "path_foto": "/static/images/eventos/RumbaTerapia.png",
            "valor_puntos": 80,
            "disponible": true,
            "updated": "2021-10-02T01:35:17.325Z"
        }
    ],
    "6156a762f9e525fa8b39d891":[
        {
            "_id": "6156a762f9e525fa8b39d891",
            "titulo": "CrossFIit",
            "categoria": "Deportes",
            "sucursal": "OFICINA  LA TEBAIDA",
            "fecha_inicio": "2021-10-08T10:00",
            "fecha_fin": "2021-10-08T11:30",
            "tipo": "Presencial",
            "path_foto": "/static/images/eventos/Crossfit.png",
            "valor_puntos": 120,
            "disponible": true,
            "updated": "2021-10-01T20:05:06.885Z"
        }
    ],
    "156a762f9e525fa8b39d892":[
        {
            "_id": "6156a762f9e525fa8b39d892",
            "titulo": "Festival de Ópera al Parque",
            "categoria": "Cultura",
            "sucursal": "OFICINA  PAMPLONA",
            "fecha_inicio": "2021-10-15T19:30",
            "fecha_fin": "2021-10-15T21:30",
            "tipo": "Presencial",
            "path_foto": "/static/images/eventos/Opera.png",
            "valor_puntos": 200,
            "disponible": true,
            "updated": "2021-10-01T20:06:09.664Z"
        }
    ],
    "6156a762f9e525fa8b39d893":[
        {
            "_id": "6156a762f9e525fa8b39d893",
            "titulo": "Feria de Arte Moderno",
            "categoria": "Cultura",
            "sucursal": "OFICINA  ARMENIA",
            "fecha_inicio": "2021-10-19T13:30",
            "fecha_fin": "2021-10-19T19:30",
            "tipo": "Presencial",
            "path_foto": "/static/images/eventos/FeriaArte.png",
            "valor_puntos": 300,
            "disponible": true,
            "updated": "2021-10-05T17:30:01.919Z"
        }
    ],
    "6156a762f9e525fa8b39d894":[
        {
            "_id": "6156a762f9e525fa8b39d894",
            "titulo": "Autocine",
            "categoria": "Cultura",
            "sucursal": "OFICINA  BOGOTA D.C.",
            "fecha_inicio": "2021-10-21T19:30",
            "fecha_fin": "2021-10-21T22:30",
            "tipo": "Presencial",
            "path_foto": "/static/images/eventos/Autocine.png",
            "valor_puntos": 150,
            "disponible": true
        }
    ]
}


// PETICIONES DE PREMIOS
eventoRoute.route("/").get((req, res) => {
    res.json(eventos)
});
//detalle completo evento
eventoRoute.route("/full/:id").get((req, res) => {
    data = eventosFull[req.params.id]
    res.json(data);
});
// DETALLE DE PREMIO
eventoRoute.route("/:id").get((req, res, next) => {
    data = premiosId[req.params.id]
    res.json(data);
})

// CREACIÓN DE UN PREMIO
eventoRoute.route("/create-event").post((req, res, next) => {
    res.send(200);
});


// ACTUALIZACION DE UN PREMIO

eventoRoute.route("/update-event/:id").put(async (req, res) => {
    res.send(200);
});



eventoRoute.route("/delete-event/:id").delete(async (req, res) => {
    const _id = req.params.id;
    res.send(200);
 
});

// CategoriaEvento
eventoRoute.route("/categoria/eventos").get((req, res, next) => {
    res.json([
        {
            "_id": 1,
            "categoria": "Deportes"
        },
        {
            "_id": 2,
            "categoria": "Cultura"
        },
        {
            "_id": 3,
            "categoria": "Educación"
        },
        {
            "_id": 4,
            "categoria": "Recreación"
        }
    ]);
});

// CategoriaEvento
eventoRoute.route("/tipo/eventos").get((req, res, next) => {
 res.json([
    {
        "_id": 1,
        "tipoEvento": "Virtual"
    },
    {
        "_id": 2,
        "tipoEvento": "Presencial"
    },
    {
        "_id": 3,
        "tipoEvento": "Mixto"
    }
])
})

module.exports = eventoRoute;