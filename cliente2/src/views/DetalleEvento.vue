<template>

    <div class="container">

        <div class="imagen-banner">
            <img src="../assets/images/eventos/conciertomusicaclasica.jpg"
            alt="Clock"
            sizes="(min-width: 600px) 200px, 50vw" align="center">
        </div>

        <div class="rejilla">

            <div class="nombreEvento">
                Concierto de musica clasica
            </div>

            <div class="descripcion">
                <div class="title-descripcion">
                    <h2>Descripcion del evento</h2>
                </div>
                <hr>
                <div class="body-descripcion">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. At lobortis vehicula erat amet non netus eros. Proin felis consequat nulla cursus sed. Vel, commodo dignissim et tincidunt magna consectetur. Pellentesque sapien viverra nulla accumsan nibh.
                    Nibh sed tristique libero eget nec, neque orci id dictum. In dignissim pellentesque viverra eget varius eu. Egestas nisi, quis maecenas et aliquam sed. Massa sagittis, amet, ultrices enim ut nisl nulla condimentum consequat. Ut sed et quam est augue risus. Volutpat senectus purus tortor duis quis in proin. Duis nunc facilisis interdum euismod volutpat, venenatis. Dui, dignissim gravida eu commodo ultrices. Habitasse pretium lorem posuere viverra pretium quisque. Donec aenean felis, netus risus velit, tortor purus diam. Proin gravida diam et tincidunt viverra.
                    Bibendum non ut est, in. Pellentesque eu faucibus pharetra turpis nunc massa lectus dis praesent. Massa suscipit vel gravida neque, ut lacus odio nisl. Placerat at augue sit mus lacus quam aliquet. Gravida aliquam ac.
                </div>
            </div>

            <div class="detalles">

                <div class="title">
                    Informacion del evento
                </div>
                
                <hr>

                <ul>
                    <li>Lugar:  <span> Pereira </span> </li>
                    <li>Fecha:  <span> 1/10/2021 </span> </li>
                    <li>Hora:   <span> 10:00 a.m. </span></li>
                    <li>Puntos: <span> 5000 </span></li>
                </ul>
                
                <hr>

                <div class="ingresarEvento">
                    <button>Inscribirse al evento</button>
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
    background-repeat: no-repeat;
    max-width: 100%;
    min-height: 600px;
}

.container .imagen-banner > img{
    border-radius: 10px;
    height: 450px;
    width: 900px;
}

.container .imagen-banner{

   display: flex;
   //align-content: center;
   flex-direction: row;
   justify-content: center;
   padding: 20px;
   min-width: 900px;
   min-height: 100px;
   overflow: auto;

}

.container .rejilla{

    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: repeat(3, auto);
    grid-gap: 20px;
    grid-template-areas: "nombre nombre detalle"
                        " descripcion descripcion detalle"
                        " descripcion descripcion detalle";

    margin: auto 100px;
    padding-bottom: 40px;
}

.container .rejilla .nombreEvento{

    grid-area: nombre ;
    background: #fff;
    border-radius: 10px;
    font-family: 'Allerta', bold;
    font-size: 28px;
    line-height: 1.25em;
    display: flex;
    align-items: center;
    color: #000;
    padding: 20px;
}

.container .rejilla .descripcion {
    grid-area: descripcion;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    text-align: justify;
    
}

.container .rejilla .descripcion .title-descripcion{
    font-family: 'Abel', normal;
    font-size: 14px;
    line-height: 1.125em;
}



.container .rejilla .detalles{

    background-color: #fff;
    padding: 20px;
    grid-area: detalle;
    border-radius: 10px;
    
}

.container .rejilla .detalles .title{
    font-family: ABeeZee;
    font-style: bold;
    font-weight: normal;
    font-size: 20px;
    line-height: 17px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-left: 10px;
}

.container .rejilla .detalles > ul > li{
    font-family: Abel;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 18px;
    color: #000000;
    padding-top: 10px;
    padding-left: 0px;
    margin: 0;
    list-style: none;
}

.container .rejilla .detalles > ul > li > span{
    font-family: ABeeZee;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 17px;
    color: #000000;
}

.container .rejilla .detalles > ul{
    padding-left: 10px;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    align-items: baseline;
}

 hr{
    border: 1px solid #888888;
    padding: .2px;
    margin: 10px;
}

.container .rejilla .detalles .ingresarEvento button{
    border: none;
    background: #43BDD4;
    border-radius: 5px;
    font-family: 'Abel', normal;
    font-size: 18px;
    line-height: 18px;
    color: #FFFFFF;
    width: 90%;
    padding: 10px 10px 10px 10px;
    border-radius: 20px;
    margin-top: 10px;
    transition: 0.3s;
}

.container .rejilla .detalles .ingresarEvento button:hover {

    background: #318292;
    transition: 0.3s;
}



.container .rejilla .detalles .ingresarEvento{
    display: flex;
    justify-content: center;
}

</style>