const express = require("express");


const premioRoute = express.Router();
const { response } = require("express");

const premios = [
    {
        "_id": "6157ddd89676b0ff6a3657ec",
        "nombre": "Sarten",
        "categoria": "Hogar",
        "path_foto": "/static/images/premios/sarten.png",
        "cantidad": 200,
        "valor_puntos": 200,
        "visible": false
    },
    {
        "_id": "6157ddd89676b0ff6a3657ed",
        "nombre": "Plancha de ropa",
        "categoria": "Hogar",
        "path_foto": "/static/images/premios/PlanchaOster.png",
        "cantidad": 10,
        "valor_puntos": 300,
        "visible": true
    },
    {
        "_id": "6157ddd89676b0ff6a3657ee",
        "nombre": "Cafetera",
        "categoria": "Hogar",
        "path_foto": "/static/images/premios/Cafetera.png",
        "cantidad": 20,
        "valor_puntos": 250,
        "visible": true
    },
    {
        "_id": "6157ddd89676b0ff6a3657ef",
        "nombre": "Pet Bow",
        "categoria": "Mascotas",
        "path_foto": "/static/images/premios/PetBow.png",
        "cantidad": 10,
        "valor_puntos": 50,
        "visible": true
    },
    {
        "_id": "6157ddd89676b0ff6a3657f0",
        "nombre": "Tula Mascota",
        "categoria": "Mascotas",
        "path_foto": "/static/images/premios/TulaMascota.png",
        "cantidad": 20,
        "valor_puntos": 250,
        "visible": true
    },
    {
        "_id": "6157ddd89676b0ff6a3657f1",
        "nombre": "Alimentador Automatico para Gatos",
        "categoria": "Mascotas",
        "path_foto": "/static/images/premios/AlimentadorGatos.png",
        "cantidad": 15,
        "valor_puntos": 250,
        "visible": true
    },
    {
        "_id": "6157ddd89676b0ff6a3657f2",
        "nombre": "Correa de Hombre",
        "categoria": "Moda",
        "path_foto": "/static/images/premios/Correa.png",
        "cantidad": 10,
        "valor_puntos": 180,
        "visible": true
    },
]
const premiosFull = {
    "6157ddd89676b0ff6a3657ec":  {
        "_id": "6157ddd89676b0ff6a3657ec",
        "id_categoria": 1,
        "nombre": "Sarten",
        "marca": "Immusa",
        "detalle": "Sarten de 18cm de diametro, antiaderente",
        "path_foto": "/static/images/premios/sarten.png",
        "cantidad": 200,
        "valor_puntos": 200,
        "visible": false,
        "updated": "2021-10-05T01:48:48.167Z"
    },
    "6157ddd89676b0ff6a3657ed":{
        "_id": "6157ddd89676b0ff6a3657ed",
        "id_categoria": 1,
        "nombre": "Plancha de ropa",
        "marca": "Oster",
        "detalle": "Plancha de Ropa Oster Vapor Inalambrica",
        "path_foto": "/static/images/premios/PlanchaOster.png",
        "cantidad": 10,
        "valor_puntos": 300,
        "visible": true
    },
    "6157ddd89676b0ff6a3657ee":{
        "_id": "6157ddd89676b0ff6a3657ee",
        "id_categoria": 1,
        "nombre": "Cafetera",
        "marca": "Black & Decker",
        "detalle": "Cafetera Black & Decker 12 tazas Negro",
        "path_foto": "/static/images/premios/Cafetera.png",
        "cantidad": 20,
        "valor_puntos": 250,
        "visible": true
    },
    "6157ddd89676b0ff6a3657ef":{
        "_id": "6157ddd89676b0ff6a3657ef",
        "id_categoria": 2,
        "nombre": "Pet Bow",
        "marca": "DawpetShop",
        "detalle": "Pet Bow Elegant Color Surtido 29,5 Cm",
        "path_foto": "/static/images/premios/PetBow.png",
        "cantidad": 10,
        "valor_puntos": 50,
        "visible": true
    },
    "6157ddd89676b0ff6a3657f0":{
        "_id": "6157ddd89676b0ff6a3657f0",
        "id_categoria": 2,
        "nombre": "Tula Mascota",
        "marca": "Totto",
        "detalle": "Cargador para gatos o perros de raza pequeña",
        "path_foto": "/static/images/premios/TulaMascota.png",
        "cantidad": 20,
        "valor_puntos": 250,
        "visible": true
    },
    "6157ddd89676b0ff6a3657f1":{
        "_id": "6157ddd89676b0ff6a3657f1",
        "id_categoria": 2,
        "nombre": "Alimentador Automatico para Gatos",
        "marca": "Wopet",
        "detalle": "Alimentador Automatico Para Gatos Wopet",
        "path_foto": "/static/images/premios/AlimentadorGatos.png",
        "cantidad": 15,
        "valor_puntos": 250,
        "visible": true
    },
    "6157ddd89676b0ff6a3657f2":{
        "_id": "6157ddd89676b0ff6a3657f2",
        "id_categoria": 3,
        "nombre": "Correa de Hombre",
        "marca": "Bosi",
        "detalle": "Correa 1023 Cafe Bosi",
        "path_foto": "/static/images/premios/Correa.png",
        "cantidad": 10,
        "valor_puntos": 180,
        "visible": true
    },
    "6157ddd89676b0ff6a3657f3":{
        "_id": "6157ddd89676b0ff6a3657f3",
        "id_categoria": 3,
        "nombre": "Aretes",
        "marca": "Johana Manchola Boutique",
        "detalle": "Aretes Mujer Hoja Metalicos color Dorado",
        "path_foto": "/static/images/premios/Aretes.png",
        "cantidad": 10,
        "valor_puntos": 80,
        "visible": true
    }
}
const premiosId = {
    "6157ddd89676b0ff6a3657ec":[
        {
            "_id": "6157ddd89676b0ff6a3657ec",
            "nombre": "Sarten",
            "categoria": "Hogar",
            "marca": "Immusa",
            "detalle": "Sarten de 18cm de diametro, antiaderente",
            "path_foto": "/static/images/premios/sarten.png",
            "cantidad": 200,
            "valor_puntos": 200,
            "visible": false,
            "actualizado": "2021-10-05T01:48:48.167Z"
        }
    ],
    "6157ddd89676b0ff6a3657ed":[
        {
            "_id": "6157ddd89676b0ff6a3657ed",
            "nombre": "Plancha de ropa",
            "categoria": "Hogar",
            "marca": "Oster",
            "detalle": "Plancha de Ropa Oster Vapor Inalambrica",
            "path_foto": "/static/images/premios/PlanchaOster.png",
            "cantidad": 10,
            "valor_puntos": 300,
            "visible": true
        }
    ],
    "6157ddd89676b0ff6a3657ee":[
        {
            "_id": "6157ddd89676b0ff6a3657ee",
            "nombre": "Cafetera",
            "categoria": "Hogar",
            "marca": "Black & Decker",
            "detalle": "Cafetera Black & Decker 12 tazas Negro",
            "path_foto": "/static/images/premios/Cafetera.png",
            "cantidad": 20,
            "valor_puntos": 250,
            "visible": true
        }
    ],
    "6157ddd89676b0ff6a3657ef":[
        {
            "_id": "6157ddd89676b0ff6a3657ef",
            "nombre": "Pet Bow",
            "categoria": "Mascotas",
            "marca": "DawpetShop",
            "detalle": "Pet Bow Elegant Color Surtido 29,5 Cm",
            "path_foto": "/static/images/premios/PetBow.png",
            "cantidad": 10,
            "valor_puntos": 50,
            "visible": true
        }
    ],
    "6157ddd89676b0ff6a3657f0":[
        {
            "_id": "6157ddd89676b0ff6a3657f0",
            "nombre": "Tula Mascota",
            "categoria": "Mascotas",
            "marca": "Totto",
            "detalle": "Cargador para gatos o perros de raza pequeña",
            "path_foto": "/static/images/premios/TulaMascota.png",
            "cantidad": 20,
            "valor_puntos": 250,
            "visible": true
        }
    ],
    "6157ddd89676b0ff6a3657f1":[
        {
            "_id": "6157ddd89676b0ff6a3657f1",
            "nombre": "Alimentador Automatico para Gatos",
            "categoria": "Mascotas",
            "marca": "Wopet",
            "detalle": "Alimentador Automatico Para Gatos Wopet",
            "path_foto": "/static/images/premios/AlimentadorGatos.png",
            "cantidad": 15,
            "valor_puntos": 250,
            "visible": true
        }
    ],
    "6157ddd89676b0ff6a3657f2":[
        {
            "_id": "6157ddd89676b0ff6a3657f2",
            "nombre": "Correa de Hombre",
            "categoria": "Moda",
            "marca": "Bosi",
            "detalle": "Correa 1023 Cafe Bosi",
            "path_foto": "/static/images/premios/Correa.png",
            "cantidad": 10,
            "valor_puntos": 180,
            "visible": true
        }
    ],
    "6157ddd89676b0ff6a3657f3":[
        {
            "_id": "6157ddd89676b0ff6a3657f3",
            "nombre": "Aretes",
            "categoria": "Moda",
            "marca": "Johana Manchola Boutique",
            "detalle": "Aretes Mujer Hoja Metalicos color Dorado",
            "path_foto": "/static/images/premios/Aretes.png",
            "cantidad": 10,
            "valor_puntos": 80,
            "visible": true
        }
    ]
}


// PETICIONES DE PREMIOS
premioRoute.route("/").get((req, res) => {
    res.json(premios)
});
premioRoute.route("/full/:id").get((req, res) => {
    data = premiosFull[req.params.id]
    res.json(data);
});
// DETALLE DE PREMIO
premioRoute.route("/:id").get((req, res, next) => {
    data = premiosId[req.params.id]
    res.json(data);

})

// CREACIÓN DE UN PREMIO
premioRoute.route("/create-premio").post((req, res, next) => {
    res.send(200).json({"msg": "creado"})
});


// ACTUALIZACION DE UN PREMIO

premioRoute.route("/update-premio/:id").put(async (req, res) => {
    res.send(200).json({"msg": "actualizado"})
});


// CategoriaPremio
premioRoute.route("/categoria/premios").get((req, res, next) => {
res.json([
    {
        "_id": 1,
        "categoria": "Hogar"
    },
    {
        "_id": 2,
        "categoria": "Mascotas"
    },
    {
        "_id": 3,
        "categoria": "Moda"
    },
    {
        "_id": 4,
        "categoria": "Deportes"
    },
    {
        "_id": 5,
        "categoria": "Herramientas"
    }
])
})
premioRoute.route("/delete-premio/:id").delete(async (req, res) => {
 res.json({msg: "eliminado"})
});
module.exports = premioRoute;