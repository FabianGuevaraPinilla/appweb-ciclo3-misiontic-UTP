<template>
  <div class="Eventos">
    <h1 class="Eventos__titulo">
      Participa en nuestros eventos, acumula puntos y gana muchos premios
    </h1>
    <div class="Eventos__lista">
      <ItemEvento
        :dataEvento="item_evento"
        v-for="item_evento in lista_eventos"
        :key="item_evento.id"
      ></ItemEvento>
    </div>
    <div style="height: 10px; background: #c4c4c4"></div>
    <h1 class="Eventos__titulo-proximos">Próximos eventos</h1>
    <div class="Eventos__seccion-proximos">
      <img
        class="Eventos__itemevento-proximo c1 img-fluid"
        src="@/assets/images/Eventos/Component1Eventos.png"
        alt=""
      />
      <img
        class="Eventos__itemevento-proximo c2 img-fluid"
        src="@/assets/images/Eventos/Component2Eventos.png"
        alt=""
      />
    </div>
    <div class="Eventos__seccion-premios">
      <h1>Redime los puntos por premios</h1>
      <img class="img-fluid" src="@/assets/images/Eventos/Component3Eventos.png" alt="" />
      <button class="Eventos__seccionpremios-btn" @click="$router.push('/premios')">
        <p>Ver catálogo completo</p>
      </button>
    </div>
  </div>
</template>

<script>
import ItemEvento from "./../components/ItemEvento.vue";
export default {
  components: { ItemEvento: ItemEvento },
  data() {
    return {
      consultandoDatos: false,
      dataVacia: false,
      lista_eventos: [], //inicializamos un array de datos vacío
    };
  },
  mounted() {
    this.consultandoDatos = true;
    fetch(process.env.VUE_APP_ROOT_API + "/eventos")
      .then((res) => res.json())
      .then((data) => {
        this.consultandoDatos = false;
        this.lista_eventos = data;
        console.log(this.lista_eventos);
      })
      .catch((error) => {
        this.dataVacia = true;
        this.consultandoDatos = false;
        console.log("Error consultando eventos " + error);
      });
  },
};
</script>

<style lang="scss" scoped>
.Eventos {
  background-image: linear-gradient(-6deg, transparent 86%, $color-salmon 86.1%);
}
.Eventos__titulo {
  font-family: "Assistant", sans-serif;
  color: white;
  margin-left: 50px;
  width: 50%;
  font-size: 36px;
  padding-top: 85px;
  margin-bottom: 50px;
    @media (max-width: 456px) {
    font-size: 24px;
  }
}
.Eventos__lista {
  display: grid;
  grid-gap: 2rem;
  padding-inline: 2rem;
  @media (max-width: 456px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    margin-inline: 20px;
    padding: 10px;
  }
    @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    margin-inline: 20px;
    grid-gap: 30px;
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  margin: 0 100px 50px 100px;
  grid-gap: 50px;
  }
}
.Eventos__titulo-proximos {
  font-family: "Assistant", sans-serif;
  font-size: 52px;
}
.Eventos__seccion-proximos {
  display: flex;
  flex-direction: column;
  .c1 {
    align-self: flex-end;
  }
  .c2 {
    align-self: flex-start;
  }
}
.Eventos__itemevento-proximo {
  height: 90%;
}
.Eventos__seccion-premios {
  padding: 50px 0;
  background-image: linear-gradient(
    -10deg,
    transparent 35%,
    rgba(54, 69, 89, 0.57) 35.1%
  );
  > h1 {
    padding-top: 20px;
    color: white;
  }
}
.Eventos__seccionpremios-btn {
  background: $color-salmon;
  border-radius: 10px;
  border: none;
  font-family: "Assistant", sans-serif;
  font-size: 24px;
  padding: 5px 50px;
  color: white;
  font-weight: 700;
}
</style>
