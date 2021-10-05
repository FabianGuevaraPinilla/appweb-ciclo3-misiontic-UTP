<template>

  <div class="home">
    
      <CarouselHome></CarouselHome>
      <!--- Banner --->
      <section class="container-fluid banner">

          <p>Participa en nuestros eventos, acumula <br> puntos y gana muchos premios</p>

          <div class="container">
            
            <div class="card">
              <img  src="../assets/login.png" alt="Avatar" >
              <div class="d-flex" style="align-items: baseline;" >
                <p><strong>Registrate</strong> o inicia sesion</p>
              </div>
            </div>

            <div class="card">
              <img  src="../assets/metodo-de-pago.png" alt="Avatar" >
              <div class="d-flex" style="align-items: baseline;">
                <p><strong>Obten</strong> puntos</p>
              </div>
            </div>

            <div class="card">
              <img  src="../assets/carrito-de-compras.png" alt="Avatar" >
              <div class="d-flex" style="align-items: baseline;">
                <p><strong>Redimelos </strong>en premios</p>
              </div>
            </div>

            <div class="card">
              <img  src="../assets/papel-picado.png" alt="Avatar" >
              <div class="d-flex" style="align-items: baseline;">
                <p><strong>Disfruta</strong> de los premios</p>
              </div>
            </div>

          </div>       

      </section>
      <!--- Fin del Banner --->

      <!-- CarViewProduct -->
        <section class="px-2">
          <div class=" container-fluid containerCard">
            <CardProductHome nombre="Camiseta polo negro" imagen = "camisetapolonegra_adobespark.png" descripcion = "Camisetas tipo polo con logotipo empresa en tallas S, M, L y XL" puntos ="850"></CardProductHome>
            <CardProductHome nombre="Termo pequeño" imagen = "TermoPequeño.png" descripcion = "Termo para bebidas frías de 150ml" puntos ="120"></CardProductHome>
            <CardProductHome nombre="Sombrilla recogible" imagen = "sombrillarecogible_adobespark.png" descripcion = "Sombrilla recogible para llevar consigo en el bolso" puntos ="500"></CardProductHome>
            <div class="categoria">
                <div class="content-categoria">
                  <p> Mas categorias <br><span> Destacadas </span></p>
                  <button @click="$router.push('/premios')">Ver mas</button>
                </div>
            </div>
          </div>
        </section>

        <section class="eventProximo">

          <div class="titleSection">
             Proximos eventos
          </div>
          
          <EventProximo></EventProximo>
        
        </section>
         

      <!-- Fin CarViewProduct -->
  </div>

</template>

<script>

import CardProductHome from "../components/CardProductHome.vue";
import EventProximo from "../components/EventProximo.vue";
import CarouselHome from "../components/CarouselHome.vue"
export default {
  name: 'Home',
  components: {
    CardProductHome,
    EventProximo,
    CarouselHome
  }
}


</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Baloo+Tamma+2:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Allerta&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Assistant&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Arsenal&display=swap');

.titleSection{

  font-family: Arsenal;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 45px;
  display: flex;

  text-align: center;
  flex-direction: column;

  color: #727272;

  margin: 0.625em
}

.eventProximo{
    margin-left: 10px;
    margin-right: 10px;
    width: 98%;
    max-width: 100%;
    min-height: 800px;
}

.home{
  background: #E4E4E4;
}

.categoria{
  display: flex;
  align-items: center;
  border: 0.2px solid #727272;
  margin: 2.5em 1.25em 2.5em 0.625em;
  width: 18.75rem;
  height: 24.6875rem;

    .content-categoria p {
      font-family: 'Arsenal', sans-serif;
      color: #727272;
      width: 18.75rem;
      padding: 1.25rem 1.5625rem 0rem 0rem;
      font-size: 24px;
      line-height: 1.125rem;
      letter-spacing: 0.15em;
        span{
          font-size: 38px;
          line-height: 38px;
        }
  }

  .content-categoria button{

          font-family: 'Arsenal', sans-serif;
          font-size: 18px;
          margin-top: 0.625em ;
          margin-left: -1.5625em ;
          padding-left: 3.125em;
          padding-right: 3.125em;
          padding-top:0.625em ;
          padding-bottom:0.625em ;
          outline: none;
          color: #727272;
          border: none;
          border-radius: 50px;
  }

  .content-categoria button:hover{
    background: #3A4D6417 ;
    transition: 0.5s;
    color:#727272;
  }

}

  .banner{
    background-image:url('../assets/Banner1.png') ;
    display: inline-block;
    margin-left: 10px;
    margin-right: 10px;
    height: 18em;
    width: 97%;
  }


  p{
    color: white;
    margin-bottom: 0rem;
    font-family: 'Baloo Tamma 2', cursive;
    padding: 1.25em 0em 0.625em 0em;
    font-size: 30px;
  }

  .container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 5%;
  grid-auto-flow: row;
  grid-template-areas:
    ". . . .";

    .card{
      align-content: center;
      //height: 70%;
      border-radius: 0px 50px 50px 0px;
      padding: 1.25em 1em 0.625em 1.25em;
      //display: grid; 
      //grid-template-columns: 1fr 1fr; 
      //grid-template-rows: 1fr; 
      //gap: 0px 10px; 
      //grid-template-areas: 
      display: flex;
      flex-direction: row;

      @media (max-width: 768px) {
        flex-direction: column;
      }
      img {
        width: 4rem;
        height: 4rem;
        padding: 10px;
        border: 2.5px solid #e4e4e4d0;
        border-radius: 40px;
        margin: 0px 0px 10px 0px;
        
      }
      p{
        font-family: 'Courier New', Courier, monospace;
        text-align: center;
        color: #969696d4;
        font-size: 12px;
        font-family: 'Allerta', sans-serif;
        padding: 0.875em 0em 0.625em 0.625em;
        width: 5.625rem;
      }
      
    }
}

  .containerCard{
      background: #F7F7F7;
      display: grid; 
      grid-template-columns: 0.5fr 0.5fr 0.5fr 0.5fr; 
      gap: 0px 0px; 
      position: flex;
      margin-left: 10px;
      margin-right: 10px;
      width: 98%;
      max-width: 100%;
      height: 37.375em;
      padding-top: 60px ;
      place-content: center;
      overflow: auto;
    }


// Media Query
  @media only screen and (min-width: 1600px) {

    .banner{
      background-size: cover;
      background-position: center;
      position: relative;
      left: -11px;

      .container{
        .card{
              p{
                font-size: 18px;
                padding: 0px;
                width: 12em;
                display: flex;
                flex-direction: column;
                align-items: baseline;
            }
        }
      }

        p{
          padding-bottom: 30px;
          font-size: 36px;
          padding-top: 30px;
        }

    }


    .categoria{
      display: flex;
      align-items: center;
      width: 80%;
      height: 400px;
      justify-content: center;
      position: relative;
      left: 30px;
      right: 10px;

      .content-categoria p {
          font-size: 28px;
          width: 100%;
          padding: 0px;
          line-height: 1em;
          letter-spacing: 0.15em;

          span{
          font-size: 42px;
          line-height: 1em;
        }
      }

      
      .content-categoria button{

          font-size: 22px;
          padding-top: 10px ;
          padding-bottom:10px;
          margin-top: 15px;
          outline: none;
          color: #727272;
          border: none;
          border-radius: 50px;
      }

    }

    .titleSection{
      font-size: 42px;
      line-height: 2.8em;
      margin: auto;
    }


  } //Media Query fin 


</style>