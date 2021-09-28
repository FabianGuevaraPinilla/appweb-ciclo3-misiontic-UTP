<template>
  <div class="Premios">
    <div class="Premios__encabezado">
      <div class="Premios_encabezado-categorias">
        <h1>Catégorias</h1>
        <nav>
          <ul class="px-0">
            <li class="py-1">HOGAR</li>
            <li class="py-1">DEPORTES</li>
            <li class="py-1">MASCOTAS</li>
            <li class="py-1">HERRAMIENTAS</li>
            <li class="py-1">MODA</li>
          </ul>
        </nav>
      </div>
      <div class="Premios_encabezado-titulo">
        <h1>Redime tus puntos en fabulosos premios</h1>
      </div>
    </div>

    <h1>Nuestro catálogo</h1>
    <div class="Premios_listaPremios">
      <ItemPremio
        v-for="dataPremio in dataPremios"
        :key="dataPremio.id"
        :dataPremio="dataPremio"
      ></ItemPremio>
    </div>
    <div v-show="dataVacia" class="Premios__noObtenidos">
      <h3>Fallo conexion</h3>
    </div>
    <div v-show="consultandoData">
      <h2>Consultando</h2>
    </div>
    <h1 class="py-4">Gana más puntos</h1>
    <div class="Premios__enlace-a-eventos">
      <div class="Titulo_enlace-eventos">
        <router-link to="/eventos">
          <h1 class="py-4">
            Participa en nuestros eventos, acumula puntos y gana muchos premios
          </h1>
        </router-link>
      </div>

      <img src="@/assets/Banner1.png" alt="" />
    </div>
  </div>
</template>
<script>
import ItemPremio from "./../components/ItemPremio.vue";
export default {
  data() {
    return {
      consultandoData: false,
      dataVacia: false,
      dataPremios: [],
    };
  },
  methods: {
    consultarDatos() {
      this.consultarDatos = true;
      fetch(process.env.VUE_APP_ROOT_API + "/premios")
        .then((response) => response.json())
        .then((data) => {
          this.dataVacia = false;
          this.dataPremios = data.premios;
        })
        .catch((error) => {
          this.dataVacia = true;
          console.log("Error" + error);
        });
      this.consultarDatos = false;
    },
  },
  components: { ItemPremio },
  mounted() {
    console.log(process.env.VUE_APP_ROOT_API);
    //Se realiza la petición a la api, en el endpoint premios

    this.consultarDatos();
  },
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=ABeeZee&display=swap");
.Premios {
  background-image: linear-gradient(
    10deg,
    transparent 80%,
    $color-salmon 80.1%
  );
}
.Premios__encabezado {
  display: flex;
  flex-direction: row;
  padding-block: 5%;
  padding-inline: 10%;

  .Premios_encabezado-categorias {
    margin-inline-end: 5%;
    padding: 2rem;
    background: white;
    border-radius: 1rem;
    box-shadow: 0rem 0.25rem 0.5rem rgba(0, 0, 0, 0.5);

    & h1 {
      font-family: "ABeeZee", sans-serif;
    }
    & ul {
      list-style: none;
    }
  }
  .Premios_encabezado-titulo {
    padding-block-start: 5%;
    font-family: "Assistant", sans-serif;
    color: white;
    & h1 {
      font-size: 36px;
    }
  }
}

.Premios_listaPremios {
  padding: 0 15%;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
}
.Premios__enlace-a-eventos {
  font-size: 24px;
  
}
.Titulo_enlace-eventos {
  height: 100%;
  z-index: 10;
  background-image: linear-gradient(10deg, transparent 35%, rgb(54, 69, 89));
position: relative;
  & h1 {
    width: 50%;
    position: absolute;
    right: 0;
  }

      a {
      text-decoration: none;
      color: white;
      &.router-link-exact-active {
        color: white;
      }
      &.disable {
        color: rgb(248, 248, 248);
        font-weight: normal;
      }
      }
}
</style>
