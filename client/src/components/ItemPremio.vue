<template>
  <router-link class="text-decoration-none" v-if="dataPremio.visible" :to="'/premios/detalle/' + dataPremio._id">

    <div v-show="urlServer === '' ? true : false" class="spinnerLoader">
        <pulse-loader
          :color="colorLoading"
        ></pulse-loader>
    </div>

    <div class="ItemPremio card" v-on:click="showAlert()" 
    v-show="urlServer != '' ? true : false">

      <div class="ItemPremio_img position-relative">
          <img class="img-fluid" :src="urlServer" alt="" />
      </div>
      <div class="ItemPremio_puntos card-body">
        <p class="fs-6 mb-0">PUNTOS</p>
        <!-- valor de puntos -->
        <h1 class="fs-1">{{ dataPremio.valor_puntos }}</h1>
      </div>

    </div>

  </router-link>
</template>
<script>
import axios from "axios";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import GridLoader from "vue-spinner/src/GridLoader.vue";
export default {
  props: ["dataPremio"],
  data() {
    return {
      urlServer: "",
      colorLoading: "#242f3d",
    };
  },
  components: { PulseLoader, GridLoader },
  mounted() {
    let urlServer = process.env.VUE_APP_ROOT;

    axios
      .get(urlServer + this.dataPremio.path_foto, { responseType: "arraybuffer" })
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
  methods: {
    showAlert() {
      // Use sweetalert2
      //this.$swal("Ha presionado el premio: " + this.dataPremio.id);
    },
  },
};
</script>
<style scoped lang="scss">

.spinnerLoader{

    background-color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 300px;
    width: 100%;

}

.ItemPremio {
  text-decoration: none;
  font-family: "Assistant", sans-serif;
}
.ItemPremio_tituloPromo {
  background: $color-salmon;
  min-width: 25%;
  color: white;
}
.ItemPremio_puntos {
  color: white;
  background: #242f3d;
}
</style>