<template>
  <div class="container">
    <div v-show="!dataPremios ? true : false" class="container-loading">
      <grid-loader
        class="Spinner__loading"
        :loading="dataPremios ? false : true"
        :color="colorLoading"
        size="40px"
        style="background-color: white"
      ></grid-loader>
    </div>

    <div v-if="!dataPremios ? false : true" class="container-section1">
      <div class="container-body">
        <div class="imagen">
          <pulse-loader
            :color="colorLoading"
            style="margin-block: 150px"
            :loading="imagen != '' ? false : true"
          ></pulse-loader>
          <img
            v-show="imagen === '' ? false : true"
            :src="dataPremios ? imagen : '@/assets/cross.jpg'"
            alt="Clock"
            sizes="(min-width: 600px) 200px, 50vw"
          />
        </div>

        <div class="caracteristica-product">
          <div class="title">
            <h2>Características del producto</h2>
          </div>
          <div class="body-caracteristicas">
            <ul>
              <li class="fs-3">
                <strong> Categoria: </strong>
                {{ dataPremios ? dataPremios.categoria : "" }}
              </li>
              <li>
                <strong> Marca: </strong> {{ dataPremios ? dataPremios.marca : "" }}
              </li>
            </ul>
          </div>
          <hr />
        </div>

        <div class="descripcion">
          <div class="title-descripcion">
            <h2>Descripcion</h2>
          </div>
          <div class="body-descripcion">
            {{ dataPremios ? dataPremios.detalle : "" }}
          </div>
        </div>

        <div class="detalle-premio">
          <div class="nombre-premio">
            <p class="h4">{{ dataPremios ? dataPremios.nombre : "" }}</p>
          </div>

          <div class="start">
            <span style="font-size: 1.5em; color: #888888">
              <span class="mdi mdi-star"></span>
              <span class="mdi mdi-star"></span>
              <span class="mdi mdi-star"></span>
              <span class="mdi mdi-star"></span>
              <span class="mdi mdi-star"></span>
            </span>
          </div>

          <div class="puntos">
            Puntos: {{ dataPremios ? dataPremios.valor_puntos : "" }}
          </div>

          <div class="envio">
            <span style="font-size: 1.5em; color: #888888">
              <span class="mdi mdi-truck-check-outline"></span>
            </span>
            <p class="px-2 m-0">Envio gratis</p>
          </div>

          <div class="color">Color: <span> Gris</span></div>

          <hr />

          <div class="stock">
            <p class="h5">Stock disponible</p>
          </div>

          <div class="cant">
            <p>
              Cantidades:
              <span id="unit">1 Unidad</span>
              <span id="dispo"
                >( {{ dataPremios ? dataPremios.cantidad : "" }} disponibles)</span
              >
            </p>
          </div>

          <button type="button">Obtener ahora</button>

          <div class="garantia">
            <p class="mb-2">
              <span style="font-size: 1.5em; color: #888888">
                <span class="mdi mdi-shield-check"></span>
              </span>
              Compra protegida
            </p>

            <p class="mb-2">
              <span style="font-size: 1.5em; color: #888888">
                <span class="mdi mdi-medal"></span>
              </span>
              Garantia de 12 meses
            </p>
          </div>
        </div>
      </div>
    </div>

    <div v-if="!dataPremios ? false : true" class="container-section">
      ¡Gana mas puntos!
    </div>
    <div v-if="!dataPremios ? false : true" class="container-section2">
      <div class="body-section2">
        <div class="imagenEvento">
          <img
          class="img-fluid"
            src="../assets/images/Eventos/conciertoMusicaClasica.jpeg"
            alt="Clock"
            sizes="(min-width: 400px) 200px, 50vw"
            align="center"
          />
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
import axios from "axios";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import GridLoader from "vue-spinner/src/GridLoader.vue";
export default {
  data() {
    return {
      dataPremios: undefined,
      imagen: "",
      colorLoading: "#242f3d",
    };
  },
  components: { PulseLoader, GridLoader },
  mounted() {
    //para hacer que el scroll esté arriba
    window.scrollTo(0, 0);
    //hace llamado a la API para traer la informacion de acuerdo al id
    fetch(process.env.VUE_APP_ROOT_API + "/premios/" + this.$route.params.id)
      .then((res) => res.json())
      .then((data) => {
        this.dataPremios = data[0];
        console.log(this.dataPremios);

        //carga de imagen
        this.urlServer = process.env.VUE_APP_ROOT;

        axios
          .get(this.urlServer + this.dataPremios.path_foto, {
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

.container {
  margin: 0;
  padding: 0;
  background: #ededed;
  background-image: url(../assets/images/DetalleEventoYPremio/Rectangle.svg);
  background-size: contain;
  background-position-y: -100px;
  background-repeat: no-repeat;
  max-width: 100%;
  min-height: 600px;
  .container-section1 {
    display: flex;
    align-content: center;
  }
}

.container .container-section1 .container-body {
  width: 90%;
  max-width: 1000px;
  margin: 20px auto;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, auto);
  background: #fff;
  padding: 20px;
  border-radius: 4px;

  .imagen {
    grid-column: span 2;
  }

  .imagen img {
    width: 100%;
  }

  .detalle-premio {
    grid-column: 3/4;
    grid-row: 1/3;
    border: 1px solid #e4e4e4;
    box-sizing: border-box;
    border-radius: 5px;
    padding-left: 8px;
    padding-top: 20px;
  }

  .detalle-premio .nombre-premio {
    font-family: "Allerta", normal;
    font-size: 16px;
    line-height: 1.25em;
    display: flex;
    align-items: center;
    color: #000;
    margin-left: 10px;
  }

  .detalle-premio .start {
    display: flex;
    flex-direction: row;
    margin-left: 10px;
    margin-bottom: 5px;
  }

  .detalle-premio .puntos {
    font-family: "Abel", normal;
    font-size: 14px;
    line-height: 1.125em;
    display: flex;
    align-items: center;
    color: #000;
    margin-left: 10px;
    margin-bottom: 5px;
  }

  .detalle-premio .envio {
    display: flex;
    flex-direction: row;
    font-family: "Abel", normal;
    font-size: 14px;
    line-height: 1.125em;
    color: #8888;
    margin-left: 10px;
    margin-bottom: 5px;
  }

  .detalle-premio .color {
    font-family: "Abel", normal;
    font-size: 14px;
    line-height: 1.125em;
    display: flex;
    align-items: center;
    color: #000;
    margin-left: 10px;
    margin-bottom: 5px;
  }

  .detalle-premio .color span {
    font-family: "ABeeZee", normal;
    font-size: 14px;
    line-height: 1.0625em;
    display: flex;
    align-items: center;
    color: #000000;
    margin-left: 10px;
  }

  .detalle-premio hr {
    border: 1px solid #e4e4e4;
    padding: 0.2px;
    margin: 10px;
  }

  .detalle-premio .cant p {
    display: flex;
    flex-wrap: wrap;
    font-family: "Abel", normal;
    font-size: 14px;
    line-height: 1.125em;
    color: #000;
    margin-left: 10px;
  }

  .detalle-premio .cant p #unit {
    font-family: "ABeeZee", normal;
    font-size: 14px;
    line-height: 1.125em;
    color: #000;
    margin-left: 5px;
  }

  .detalle-premio .cant p #dispo {
    font-family: "Abel", normal;
    font-size: 12px;
    line-height: 0.9375em;
    color: #8888;
    margin-left: 5px;
  }

  .detalle-premio button {
    background: #43bdd4;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5px 30px;
    width: 90%;
    border: none;

    font-family: "Abel", normal;
    font-size: 12px;
    line-height: 15px;
    color: #fff;
    margin-left: 10px;
    height: 4.5%;
    transition: 0.3s;
  }

  .detalle-premio button:hover {
    background: #3598ac;
    transition: 0.3s;
  }

  .detalle-premio .garantia {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    margin-top: 10px;
    margin-left: 10px;
    font-family: "Abel", normal;
    font-size: 16px;
    line-height: 1.125em;
    color: #8888;
    align-items: flex-start;
  }

  .detalle-premio .stock {
    margin-left: 10px;
    font-family: "ABeeZee", normal;
    font-size: 14px;
    line-height: 17px;
    color: #000;
  }

  .caracteristica-product {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  .caracteristica-product .title {
    font-family: "Abel", normal;
    font-size: 24px;
    line-height: 31px;
    text-align: start;
    margin: 10px;
  }

  .caracteristica-product hr {
    border: 1px solid #e4e4e4;
    padding: 0.2px;
    margin: 10px;
    width: 90%;
  }

  .caracteristica-product .body-caracteristicas {
    font-family: "Abel", normal;
    font-size: 14px;
    line-height: 17.8px;
    text-align: justify;
  }

  .descripcion {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  .descripcion .title-descripcion {
    font-family: "Abel", normal;
    font-size: 24px;
    line-height: 31px;
    display: flex;
    text-align: end;

    color: #000000;
  }

  .descripcion .body-descripcion {
    font-family: "Abel", normal;
    font-size: 14px;
    line-height: 17.8px;
    text-align: justify;
  }
}

.container .container-section {
  background: #fff;

  width: 100%;
  height: 71px;
  left: 0px;

  font-family: "Allerta", normal;
  font-weight: 600;
  font-size: 42px;
  text-align: center;
  color: #000000;
  margin: 0px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.container-section2 {
  background-image: url(../assets/images/DetalleEventoYPremio/Gave.svg);
  background-size: contain;
  background-repeat: no-repeat;
  min-width: 800px;
  min-height: 800px;
  display: flex;
  flex-direction: row;
  overflow: auto;

  .body-section2 {
    position: relative;
    top: 128px;
    background: #ff5a60;
    width: 100%;
    height: 600px;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, auto);
    grid-template-areas:
      "imagen imagen texto"
      "imagen imagen mas";

    .imagenEvento {
      grid-area: imagen;
      background-color: #df554c;
      border-radius: 20px;
      padding: 20px;
      width: 90%;
      height: 500px;
      display: flex;
      justify-content: center;
      margin: 20px auto;

      img {
        border-radius: 20px;
        min-width: 90%;
      }
    }

    .descripcion {
      grid-area: texto;
      font-family: "Allerta", normal;
      font-size: 30px;
      line-height: 46px;
      display: flex;
      align-items: center;
      background-color: #df554c;
      border-radius: 20px;
      margin: 40px auto;
      width: 400px;
      height: 300px;
      color: #ffffff;
      padding: 20px;
    }

    .masEventos {
      grid-area: mas;
      text-align: center;
      background-color: #df554c;
      border-radius: 20px;
      width: 500px;
      height: 100px;
      color: #ffffff;
      font-family: "Assistant", normal;
      font-size: 36px;
      line-height: 2.93em;
      margin: 40px 20px;
      transition: 0.3s;
    }

    .masEventos:hover {
      transition: 0.3s;
      font-weight: bold;
      font-size: 40px;
      text-align: center;
    }
  }
}
.container-loading {
  width: 100%;
  height: auto;
  background-color: white;
  z-index: 778;
}
.Spinner__loading {
  margin-block: 300px;
  margin-inline: auto;
}
</style>
