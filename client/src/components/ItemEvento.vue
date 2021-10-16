<template>
  <button v-if="dataEvento.disponible" @click="handleClick">
    <div class="Eventos__item">
      <div class="imagen">
        <!--
            "urlServer != '' ? false : true"
          -->
        <div v-show="urlServer === '' ? true : false" class="spinnerLoader">
          <pulse-loader :color="colorLoading"></pulse-loader>
        </div>

        <div
          v-show="urlServer != '' ? true : false"
          class="Eventos__ItemEvento-img"
        >
          <img :src="urlServer" alt="" />
          <h2 class="fs-4">{{ dataEvento.tipo }}</h2>
        </div>
      </div>

      <div class="Eventos__ItemEvento-text">
        <div class="itemevento-descripcion">{{ dataEvento.titulo }}</div>
        <div class="itemevento-puntos">
          <h1>{{ dataEvento.valor_puntos }}</h1>
          <p id="text-puntos">Puntos</p>
        </div>
        <div class="itemevento-fecha ">
          {{ fecha }} <br />
          {{ hora }}
        </div>
      </div>
    </div>
  </button>
</template>

<script>
import axios from "axios";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import GridLoader from "vue-spinner/src/GridLoader.vue";

const path = require("path");
export default {
  props: ["dataEvento", "simple"],
  data() {
    return {
      urlServer: "",
      colorLoading: "#242f3d",
      fecha: "",
      hora: "",
    };
  },
  components: { PulseLoader, GridLoader },

  mounted() {
    this.hora = this.getHora();
    this.fecha = this.getFecha();

    let urlServer = process.env.VUE_APP_ROOT;

    axios
      .get(urlServer + this.dataEvento.path_foto, {
        responseType: "arraybuffer",
      })
      .then((response) => {
        const base64 = btoa(
          new Uint8Array(response.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
          )
        );
        this.urlServer = "data:;base64," + base64;
      })
      .catch((e) => {
        axios
          .get(urlServer + "/static/images/cross.jpg", {
            responseType: "arraybuffer",
          })
          .then((response) => {
            const base64 = btoa(
              new Uint8Array(response.data).reduce(
                (data, byte) => data + String.fromCharCode(byte),
                ""
              )
            );
            this.urlServer = "data:;base64," + base64;
          });
      });
  },
  computed: {
    loadimage: (url) => {
      let img = require("@/assets/images/eventos/" + url);
      return img;
    },
  },

  methods: {
    getFecha() {
      let infoFecha = this.dataEvento.fecha_inicio.split("T");
      let fecha = infoFecha[0];
      var meses = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
      ];
      return meses[parseInt(fecha.split("-")[1])] + " " + fecha.split("-")[2];
    },
    getHora() {
      let infoFecha = this.dataEvento.fecha_inicio.split("T");
      let hora = infoFecha[1];
      return hora + " Horas";
    },
    handleClick() {
      this.$router.push("/eventos/detalle/" + this.dataEvento._id);
      window.scrollTo(0, 0);
    },
  },
};
</script>
<style lang="scss" scoped>
.spinnerLoader {
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 200px;
  position: absolute;
  width: 100%;
}

button {
  border: none;
  background: none;
  padding: 0;

  &:hover {
    transition: box-shadow 0.7s;
    box-shadow: 0rem 0rem 1rem $color-header-shadow;
  }
}
.Eventos__item {
  min-height: 300px;
  min-width: 240px;
  font-family: "Assistant", sans-serif;
  display: flex;
  flex-direction: column;
  position: relative;
  .Eventos__ItemEvento-img {
    position: relative;
    display: inline-block;
    img {
      width: 100%;
    }
    h2 {
      color: white;
      position: absolute;
      background: $color-footer-section-contacto;
      //width: 40%;
      top: 0;
      right: 0;
      margin: 0;
      font-size: 14px;
      height: 28px;
    }
  }
  .Eventos__ItemEvento-text {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: grid;
    grid-template-areas: "descripcion descripcion" "puntos fecha";
    grid-template-columns: 115px 1fr;
    .itemevento-descripcion {
      grid-area: descripcion;
      font-size: 18px;
      background: white;
    }
    .itemevento-puntos {
      width: 115px;
      height: 80px;
      background: $color-footer-section-contacto;
      color: white;

      display: flex;
      justify-content: center;
      position: relative;
      h1 {
        font-size: 48px;
      }
      #text-puntos {
        position: absolute;
        font-size: 24px;
        top: 42px;
      }
    }
    .itemevento-fecha {
      background: $color-gray;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      font-size:18px;
    }
  }
}
</style>