<template>
  <div class="container">
    <div class="imagen-banner">
      <img
        :src="imagen"
        alt="Clock"
        sizes="(min-width: 600px) 200px, 50vw"
        align="center"
      />
    </div>

    <div class="rejilla">
      <div class="nombreEvento">{{ dataEvento ? dataEvento.titulo : "Cargando" }}</div>

      <div class="descripcion">
        <div class="title-descripcion">
          <h2>Descripcion del evento</h2>
        </div>
        <hr />
        <div class="body-descripcion">
          {{ dataEvento ? dataEvento.detalle : "detalle" }}
        </div>
      </div>

      <div class="detalles">
        <div class="title">Informacion del evento</div>

        <hr />

        <ul>
          <li>Lugar: <span> {{dataEvento ? dataEvento.lugar : ""}} </span></li>
          <li>Fecha: <span> {{dataEvento ? this.year : ""}} </span></li>
          <li>Hora: <span> {{dataEvento ? this.arr[1] : ""}} </span></li>
          <li>Puntos: <span> {{dataEvento ? dataEvento.valor_puntos : ""}} </span></li>
        </ul>

        <hr />

        <div class="ingresarEvento">
          <button>Inscribirse al evento</button>
        </div>
      </div>
    </div>



  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      dataEvento: undefined,
      imagen: "",
    };
  },
  mounted() {
    //hace llamado a la API para traer la informacion de acuerdo al id
    fetch(process.env.VUE_APP_ROOT_API + "/eventos/" + this.$route.params.id)
      .then((res) => res.json())
      .then((data) => {

        this.dataEvento = data[0];
        console.log(this.dataEvento);
        console.log(this.dataEvento.fecha_inicio);
        this.arr   = this.dataEvento.fecha_inicio.split('T');
        this.year  = this.arr[0].split("-").reverse().toString().replace(/,/g,'/')
        console.log(this.year)

         //carga de imagen
         this.urlServer = process.env.VUE_APP_ROOT;

        axios
           .get(this.urlServer + this.dataEvento.path_foto, {
             responseType: "arraybuffer",
           })
          .then((response) => {
             const base64 = btoa(
               new Uint8Array(response.data).reduce(
                 (data, byte) => data + String.fromCharCode(byte),
                 ""
               )
             );
             this.imagen = "data:;base64," + base64;
           })
           .catch((e) => {
             axios
               .get(this.urlServer + "/static/images/cross.jpg", {
                 responseType: "arraybuffer",
               })
               .then((response) => {
                 const base64 = btoa(
                   new Uint8Array(response.data).reduce(
                     (data, byte) => data + String.fromCharCode(byte),
                     ""
                   )
                 );
                 this.imagen = "data:;base64," + base64;
               });
           });
      });
  },
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Allerta&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Abel&display=swap");
@import url("https://fonts.googleapis.com/css2?family=ABeeZee&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Allerta&display=swap");

.container {
  margin: 0;
  padding: 0;
  background: #ededed;
  background-image: url(../assets/images/DetalleEventoYPremio/Rectangle.svg);
  background-size: contain;
  background-repeat: no-repeat;
  max-width: 100%;
  min-height: 600px;
}

.container .imagen-banner > img {
  border-radius: 10px;
  height: 450px;
  width: 900px;
}

.container .imagen-banner {
  display: flex;
  //align-content: center;
  flex-direction: row;
  justify-content: center;
  padding: 20px;
  min-width: 900px;
  min-height: 100px;
  overflow: auto;
}

.container .rejilla {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, auto);
  grid-gap: 20px;
  grid-template-areas:
    "nombre nombre detalle"
    " descripcion descripcion detalle"
    " descripcion descripcion detalle";

  margin: auto 100px;
  padding-bottom: 40px;
}

.container .rejilla .nombreEvento {
  grid-area: nombre;
  background: #fff;
  border-radius: 10px;
  font-family: "Allerta", bold;
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

.container .rejilla .descripcion .title-descripcion {
  font-family: "Abel", normal;
  font-size: 14px;
  line-height: 1.125em;
}

.container .rejilla .detalles {
  background-color: #fff;
  padding: 20px;
  grid-area: detalle;
  border-radius: 10px;
}

.container .rejilla .detalles .title {
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

.container .rejilla .detalles > ul > li {
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

.container .rejilla .detalles > ul > li > span {
  font-family: ABeeZee;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 17px;
  color: #000000;
}

.container .rejilla .detalles > ul {
  padding-left: 10px;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: baseline;
}

hr {
  border: 1px solid #888888;
  padding: 0.2px;
  margin: 10px;
}

.container .rejilla .detalles .ingresarEvento button {
  border: none;
  background: #43bdd4;
  border-radius: 5px;
  font-family: "Abel", normal;
  font-size: 18px;
  line-height: 18px;
  color: #ffffff;
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

.container .rejilla .detalles .ingresarEvento {
  display: flex;
  justify-content: center;
}
</style>