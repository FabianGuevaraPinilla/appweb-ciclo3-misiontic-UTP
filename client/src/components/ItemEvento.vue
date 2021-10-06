<template>
  <button @click="handleClick">
    <div class="Eventos__item">
      <div class="Eventos__ItemEvento-img">
        <!-- :src="
            urlServer + dataEvento.path_foto || urlServer + '/static/images/cross.jpg'
          " -->

        <img :src="urlServer" alt="" />
        <h2>Virtual</h2>
      </div>
      <div class="Eventos__ItemEvento-text">
        <div class="itemevento-descripcion">{{ dataEvento.titulo }}</div>
        <div class="itemevento-puntos">
          <h1>{{ dataEvento.valor_puntos }}</h1>
          <p id="text-puntos">Puntos</p>
        </div>
        <div class="itemevento-fecha">
          {{ dataEvento.fecha_inicio }} <br />
          {{ dataEvento.cupo }}
        </div>
      </div>
    </div>
  </button>
</template>

<script>
import axios from "axios";
const path = require("path");
export default {
  props: ["dataEvento", "simple"],
  data() {
    return {
      urlServer: "",
    };
  },
  mounted() {
    this.urlServer = process.env.VUE_APP_ROOT;

    axios
      .get(this.urlServer + this.dataEvento.path_foto, { responseType: "arraybuffer" })
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
    handleClick() {
      this.$router.push("/eventos/detalle/" + this.dataEvento._id);
    },
  },
};
</script>
<style lang="scss" scoped>
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
      width: 40%;
      top: 0;
      margin: 0;
      font-size: 18px;
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
      background: white;
      display: flex;
      flex-direction: row;
      justify-content: center;
      font-size: 24px;
    }
  }
}
</style>
