<template>

<div class="container-event">

  <div class="Area1">
      <div class="event">
          Evento
      </div>
      
      <div class="eventTitle">
            <span>Concierto de musica clasica</span>       
      </div>
      
      <div class="eventBody">
            <span>Concierto de orquesta de música clásica por parte la banda sinfónica Barhaus</span>       
      </div>

      <button>
          Ver mas
      </button>

      <div class="imagenArea1"></div>

  </div>

  <div class="Area2">
      <div class="event">
          Evento
      </div>
      <div class="eventTitle">
          Taller de papiroflexia
      </div>
        <button>
          Ver mas
      </button>
  </div>

  <div class="Area3">
      <div class="event">
          Evento
      </div>
      <div class="eventTitle">
          Foro de emprendimiento
      </div>
        <button>
          Ver mas
      </button>
  </div>

  <div class="Area4">
    <div class="event">
          Evento
      </div>
      <div class="eventTitle">
          Musica Colombiana
      </div>
        <button>
          Ver mas
      </button>
  </div>

  <div class="Area5">
          <div class="event">
          Evento
      </div>
      <div class="eventTitle">
          Aerobicos
      </div>
        <button>
          Ver mas
      </button>
  </div>

</div>
    
</template>


<style scoped lang = "scss">
@import url('https://fonts.googleapis.com/css2?family=Alef&display=swap');

.container-event{
    position: inline-flex;
    width: 90%;
    max-width: 100%;
    height: 38.125em;
    left: 10%;
    right: 10%;
    top: 95.625em;
    align-content: center;
    background: rgba(58, 77, 100, 0.09);
    border-radius: 40px;
    margin-left: 2.875em;
    margin-right: 2.875em;

    display: grid; 
    grid-auto-columns: 1fr; 
    grid-template-columns: 1fr 1fr 1fr; 
    grid-template-rows: 1fr 1fr; 
    gap: 0px 0px; 
    grid-template-areas: 
        "Area1 Area2 Area3"
        "Area1 Area4 Area5"; 

    overflow: auto;
    
}

.Area1 { 
    
    grid-area: Area1; 
    position: relative;
    width: 90%;
    height: 90%;
    left: 5%;
    right: 5%;
    top: 5%;
    bottom: 5%;
    background: #FFFFFF;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
}

.Area1 .imagenArea1{
    position: absolute;
    align-items: center;
    left: 49.21%;
    right: 0em;
    top: 0em;
    bottom: 0em;

    background: linear-gradient(0deg, rgba(47, 47, 47, 0.26), rgba(47, 47, 47, 0.26)), url("../assets/eventoMusicaClasica.jpg");
    border-radius: 0px 10px 10px 0px;
}

.Area1 .event{

    position: relative;
    left: 2.77%;
    right: 80.66%;
    top: 8.16%;
    bottom: 86.44%;

    font-family: 'Alef', sans-serif;
    font-weight: bold;
    font-size: 20px;
    line-height: 1.6875em;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.15em;

    color: #4B4B4B;

}

 .Area1 .eventTitle{

    position: absolute;
    left: 0%;
    right: 0%;
    width: 50%;
    top: 18%;
    bottom: 69.4%;

    font-family: 'Alef';
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 1em;
    display: flex;
    align-items: flex-start;
    letter-spacing: 0.1em;

    color: #4B4B4B;

}

.Area1 .eventBody{
    position: absolute;
    left: 0%;
    right: 0%;
    width: 50%;
    top: 38%;
    bottom: 37%;

    font-family: Arsenal;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 1.5em;
    display: flex;
    justify-content: flex-start;

    color: #A6A4A4;
}

.Area1 button{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;

    position: absolute;
    left: 3.97%;
    right: 73.65%;
    top: 79.05%;
    bottom: 11.93%;
    border: none;
    background: #FF5A60;
    border-radius: 5px;
    color: #FFFFFF
    
}

.Area2 { 
    grid-area: Area2;
    position: relative;
    width: 90%;
    height: 85%;
    left: 5%;
    right: 5%;
    top: 10%;
    bottom: 5%;
    background: linear-gradient(0deg, rgba(47, 47, 47, 0.26), rgba(47, 47, 47, 0.26)), url("../assets/papel.jpg");
    background-size: cover;
    background-position: center;
    border-radius: 0px 10px 10px 0px;
}

.Area2 .event{
    position: absolute;
    left: 3.93%;
    right: 70.95%;
    top: 19%;
    bottom: 66.71%;

    font-family: "Alef";
    font-style: normal;
    font-size: 20px;
    line-height: 27px;
    display: flex;
    align-items: left;
    text-align: left;
    letter-spacing: 0.15em;

    color: #E4E4E4;

}

.Area2 .eventTitle{
    position: absolute;
    left: 2.5%;
    right: 11.66%;
    top: 35%;
    bottom: 27.01%;
    width: 50%;

    font-family: Alef;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 36px;
    display: flex;
    align-items: left;
    letter-spacing: 0.1em;
    text-align: left;

    color: #E4E4E4;
}

button{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 20px;
    position: absolute;
    left: 3.97%;
    right: 73.65%;
    top: 70%;
    width: 35%;
    bottom: 11.93%;
    border: none;
    background: #FF5A60;
    transition: 0.3s;
    border-radius: 5px;
    color: #FFFFFF;
}

button:hover{
    background: #bb4246;
    transition: 0.3s;
}


.Area3 { 
    grid-area: Area3;
    position: relative;
    width: 90%;
    height: 85%;
    left: 5%;
    right: 5%;
    top: 10%;
    bottom: 5%;
    background: linear-gradient(0deg, rgba(47, 47, 47, 0.26), rgba(47, 47, 47, 0.26)), url("../assets/foro.png");
    background-size: cover;
    background-position: center;
    border-radius: 0px 10px 10px 0px;

}

.Area3 .event{
    position: absolute;
    left: 3.93%;
    right: 70.95%;
    top: 19%;
    bottom: 66.71%;

    font-family: "Alef";
    font-style: normal;
    font-size: 20px;
    line-height: 27px;
    display: flex;
    align-items: left;
    text-align: left;
    letter-spacing: 0.15em;

    color: #E4E4E4;

}

.Area3 .eventTitle{
    position: absolute;
    left: 2.5%;
    right: 11.66%;
    top: 35%;
    bottom: 27.01%;

    font-family: 'Alef';
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 30px;
    display: flex;
    text-align: left;
    letter-spacing: 0.1em;

    color: #E4E4E4;
}

.Area4 { 
    grid-area: Area4;
    position: relative;
    width: 90%;
    height: 85%;
    left: 5%;
    right: 5%;
    top: 5%;
    bottom: 5%;
    background: linear-gradient(0deg, rgba(47, 47, 47, 0.26), rgba(47, 47, 47, 0.26)), url("../assets/acordeon.png");
    background-size: cover;
    background-position: center;
    border-radius: 0px 10px 10px 0px;

}

.Area4 .event{
    position: absolute;
    left: 3.93%;
    right: 70.95%;
    top: 19%;
    bottom: 66.71%;

    font-family: "Alef";
    font-style: normal;
    font-size: 20px;
    line-height: 27px;
    display: flex;
    align-items: left;
    text-align: left;
    letter-spacing: 0.15em;

    color: #E4E4E4;

}

.Area4 .eventTitle{
    position: absolute;
    left: 2.5%;
    right: 11.66%;
    top: 34%;
    bottom: 27.01%;

    font-family: Alef;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 32px;
    display: flex;
    text-align: left;
    letter-spacing: 0.1em;

    color: #E4E4E4;
}

.Area5 { 
    grid-area: Area5; 
    position: relative;
    width: 90%;
    height: 85%;
    left: 5%;
    right: 5%;
    top: 5%;
    bottom: 5%;
    background: linear-gradient(0deg, rgba(47, 47, 47, 0.26), rgba(47, 47, 47, 0.26)), url("../assets/aerobic.png");
    background-size: cover;
    background-position: center;
    border-radius: 0px 10px 10px 0px;

}

.Area5 .event{
    position: absolute;
    left: 3.93%;
    right: 70.95%;
    top: 19%;
    bottom: 66.71%;

    font-family: "Alef";
    font-style: normal;
    font-size: 20px;
    line-height: 27px;
    display: flex;
    align-items: left;
    text-align: left;
    letter-spacing: 0.15em;

    color: #E4E4E4;

}

.Area5 .eventTitle{
    position: absolute;
    left: 2.5%;
    right: 11.66%;
    top: 30.62%;
    bottom: 27.01%;

    font-family: Alef;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 49px;
    display: flex;
    align-items: left;
    letter-spacing: 0.1em;

    color: #E4E4E4;
}


@media only screen and (min-width: 1600px) {
    .container-event{
        margin-bottom: 40px;
    } 
}  

</style>
