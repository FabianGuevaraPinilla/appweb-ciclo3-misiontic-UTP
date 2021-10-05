<template>
    
    <div class="container">

        <div class="container-section1">

            <div class="container-body">

                <div class="imagen">
                    <img src="../assets/Product.png"
                    alt="Clock"
                    sizes="(min-width: 600px) 200px, 50vw">
                </div>

                <div class="caracteristica-product">
                    <div class="title">
                        <h2>Caracteristica del producto</h2>
                    </div>
                    <div class="body-caracteristicas">
                        <ul>
                        <li>Lorem ipsum dolor</li>
                        <li>Lorem ipsum dolor</li>
                        <li>Lorem ipsum dolor</li>
                        <li>Lorem ipsum dolor</li>
                        </ul>
                    </div>
                    <hr>
                </div>

                <div class="descripcion">
                    <div class="title-descripcion">
                        <h2>Descripcion</h2>
                    </div>
                    <div class="body-descripcion">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. At lobortis vehicula erat amet non netus eros. Proin felis consequat nulla cursus sed. Vel, commodo dignissim et tincidunt magna consectetur. Pellentesque sapien viverra nulla accumsan nibh.
                        Nibh sed tristique libero eget nec, neque orci id dictum. In dignissim pellentesque viverra eget varius eu. Egestas nisi, quis maecenas et aliquam sed. Massa sagittis, amet, ultrices enim ut nisl nulla condimentum consequat. Ut sed et quam est augue risus. Volutpat senectus purus tortor duis quis in proin. Duis nunc facilisis interdum euismod volutpat, venenatis. Dui, dignissim gravida eu commodo ultrices. Habitasse pretium lorem posuere viverra pretium quisque. Donec aenean felis, netus risus velit, tortor purus diam. Proin gravida diam et tincidunt viverra.
                        Bibendum non ut est, in. Pellentesque eu faucibus pharetra turpis nunc massa lectus dis praesent. Massa suscipit vel gravida neque, ut lacus odio nisl. Placerat at augue sit mus lacus quam aliquet. Gravida aliquam ac.
                    </div>
                </div>

                <div class="detalle-premio">
                    <div class="nombre-premio">
                        <p class="h4">
                            Nombre premio
                        </p>
                    </div>

                    <div class="start">
                        <span style="font-size: 1em; color: #888888">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        </span>
                    </div>

                    <div class="puntos">
                        Puntos: 1.099.000
                    </div>

                    <div class="envio">
                        <span style="font-size: 1em; color: #888888">
                        <i class="far fa-truck"></i>
                        </span>
                        <p class="px-2 m-0">Envio gratis</p>
                    </div>

                    <div class="color">
                        Color: <span> Gris</span>
                    </div>

                    <hr>

                    <div class="stock">
                        <p class="h5">Stock disponible</p>
                    </div>

                    <div class="cant">
                        <p>
                        Cantidades: 
                        <span id="unit">1 Unidad</span>
                        <span id="dispo">(10 disponibles)</span>
                        </p>
                    </div>

                    <button type="button" >Obtener ahora</button>

                    <div class="garantia">
                        <p class="mb-2">
                        <span style="font-size: 1em; color: #888888">
                            <i class="fas fa-shield-check"></i>
                        </span>
                        Compra protegida
                        </p>

                        <p class="mb-2">
                        <span style="font-size: 1em; color: #888888">
                            <i class="fad fa-medal"></i>
                        </span>
                        Garantia de 12 meses
                        </p>

                    </div>

                </div>

            </div>

        </div>


        <div class="container-section">
            ¡Gana mas puntos!
        </div>

        <div class="container-section2">
            <div class="body-section2">
                <div class="imagenEvento">
                    <img src="../assets/images/eventos/conciertomusicaclasica.jpg"
                    alt="Clock"
                    sizes="(min-width: 400px) 200px, 50vw" align="center">
                </div>
                <div class="descripcion">
                    Participa en nuestros eventos, acumula puntos y gana muchos premios
                </div>
                <div class="masEventos">
                   <u> Ver catalogo de eventos</u>
                </div>
            </div>
           
        </div>

    </div>

</template>

<script>

</script>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css2?family=Allerta&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Abel&display=swap');
@import url('https://fonts.googleapis.com/css2?family=ABeeZee&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Allerta&display=swap');

.container{
    margin: 0;
    padding: 0;
    background: #EDEDED;
    background-image: url(../assets/Rectangle.svg);
    background-size: contain;
    background-position-y: -100px ;
    background-repeat: no-repeat;
    max-width: 100%;
    min-height: 600px;
    .container-section1{
        display: flex;
        align-content: center;
    }
}

.container .container-section1 .container-body{
    width: 90%;
    max-width: 1000px;
    margin: 20px auto;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: repeat(3, auto);
    background: #fff;
    padding: 20px;
    border-radius: 4px;

        .imagen{
            grid-column: span 2;
        }

        .imagen img{
            width: 100%;
        }

        .detalle-premio{
            grid-column: 3/4;
            grid-row: 1/3;
            border: 1px solid #E4E4E4;
            box-sizing: border-box;
            border-radius: 5px;
            padding-left: 8px;
            padding-top: 20px;
        }

        .detalle-premio .nombre-premio{
        font-family: 'Allerta', normal;
        font-size: 16px;
        line-height: 1.25em;
        display: flex;
        align-items: center;
        color: #000;
        margin-left: 10px;
        }

        .detalle-premio .start{
            display: flex;
            flex-direction: row;
            margin-left: 10px;
            margin-bottom: 5px;
        }

        .detalle-premio .puntos{
            font-family: 'Abel', normal;
            font-size: 14px;
            line-height: 1.125em;
            display: flex;
            align-items: center;
            color: #000;
            margin-left: 10px;
            margin-bottom: 5px;
        }

        .detalle-premio .envio{
            display: flex;
            flex-direction: row;
            font-family: 'Abel', normal;
            font-size: 14px;
            line-height: 1.125em;
            color: #8888;
            margin-left: 10px;
            margin-bottom: 5px;
        }

        .detalle-premio .color{
            font-family: 'Abel', normal;
            font-size: 14px;
            line-height: 1.125em;
            display: flex;
            align-items: center;
            color: #000;
            margin-left: 10px;
            margin-bottom: 5px;
        }

        .detalle-premio .color span{
            font-family: 'ABeeZee', normal;
            font-size: 14px;
            line-height: 1.0625em;
            display: flex;
            align-items: center;
            color: #000000;
            margin-left: 10px;
        } 

        .detalle-premio hr{
            border: 1px solid #E4E4E4;
            padding: .2px;
            margin: 10px;
        }

        .detalle-premio .cant p{
            display: flex;
            flex-wrap: wrap;
            font-family: 'Abel', normal;
            font-size: 14px;
            line-height: 1.125em;
            color: #000;
            margin-left: 10px;
        }

        .detalle-premio .cant p #unit{
            font-family: 'ABeeZee', normal;
            font-size: 14px;
            line-height: 1.125em;
            color: #000;
            margin-left: 5px;
        }

        .detalle-premio .cant p #dispo{
            font-family: 'Abel', normal;
            font-size: 12px;
            line-height: 0.9375em;
            color: #8888;
            margin-left: 5px;
        }

        .detalle-premio button{
            background: #43BDD4;
            border-radius: 5px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 5px 30px;
            width: 90%;
            border:none;

            font-family: 'Abel', normal;
            font-size: 12px;
            line-height: 15px;
            color: #fff;
            margin-left: 10px;
            height: 4.5%;
            transition: 0.3s;
        }

        .detalle-premio button:hover{

            background: #3598ac;
            transition: 0.3s;

        }

        .detalle-premio .garantia{
            display: flex;
            flex-direction: column;
            max-width: 100%;
            margin-top:10px;
            margin-left: 10px;

            font-family: 'Abel', normal;
            font-size: 14px;
            line-height: 1.125em;
            color: #8888;
        }

        .detalle-premio .stock{
            margin-left: 10px;
            font-family: 'ABeeZee', normal;
            font-size: 14px;
            line-height: 17px;
            color: #000;
        }

        .caracteristica-product{
            grid-column-start: 1;
            grid-column-end: 3;
        }

        .caracteristica-product .title{
            font-family: 'Abel', normal;
            font-size: 24px;
            line-height: 31px;
            text-align:start ;
            margin: 10px;
        }

        .caracteristica-product hr{

            border: 1px solid #E4E4E4;
            padding: .2px;
            margin: 10px;
            width: 90%;
            
        }

        .caracteristica-product .body-caracteristicas {
            font-family: 'Abel', normal;
            font-size: 14px;
            line-height: 17.8px;
            text-align: justify;
        }

        .descripcion{
            grid-column-start: 1;
            grid-column-end: 3;
        }

        .descripcion .title-descripcion{
            font-family: 'Abel', normal;
            font-size: 24px;
            line-height: 31px;
            display: flex;
            text-align: end;

            color: #000000;
        }

        .descripcion .body-descripcion{

            font-family: 'Abel', normal;
            font-size: 14px;
            line-height: 17.8px;
            text-align: justify;

        }


}

.container .container-section{

    background: #fff;
    
    width: 100%;
    height: 71px;
    left: 0px;
    
    font-family: 'Allerta', normal;
    font-weight: 600;
    font-size: 42px;
    text-align: center;
    color: #000000;
    margin: 0px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.container-section2 {
    background-image: url(../assets/Gave.svg);
    background-size: contain;
    background-repeat: no-repeat;
    min-width: 800px;
    min-height: 800px;
    display: flex;
    flex-direction: row;
    overflow: auto;

    .body-section2{
        position: relative;
        top:128px;
        background:#FF5A60 ;
        width: 100%;
        height:600px;
        display: grid;
        grid-gap: 20px;
        grid-template-columns: repeat(3,1fr);
        grid-template-rows: repeat(2, auto);
        grid-template-areas: "imagen imagen texto"
                             "imagen imagen mas";

        .imagenEvento{
            grid-area: imagen;
            background-color: #DF554C;
            border-radius: 20px;
            padding: 20px;
            width: 90%;
            height: 500px;
            display: flex;
            justify-content: center;
            margin: 20px auto;

            img{
                border-radius: 20px;
            }
        }

        .descripcion{
            grid-area: texto;
            font-family: "Allerta", normal;
            font-size: 30px;
            line-height: 46px;
            display: flex;
            align-items: center;
            background-color: #DF554C;
            border-radius: 20px;
            margin: 40px auto;
            width: 400px;
            height: 300px;
            color: #FFFFFF;
            padding: 20px;
        }

        .masEventos{
            grid-area: mas;
            text-align: center;
            background-color: #DF554C;
            border-radius: 20px;  
            width: 500px;
            height: 100px; 
            color: #FFFFFF;
            font-family: 'Assistant',normal;
            font-size: 36px;
            line-height: 2.93em;
            margin: 40px 20px;
            transition: 0.3s;
        }

        .masEventos:hover{
            transition: 0.3s;
            font-weight: bold;
            font-size: 40px;
            text-align: center;
        }
    }
}

</style>