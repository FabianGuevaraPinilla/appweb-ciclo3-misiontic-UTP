<template>
  <div class="Premios">
    <div class="Premios__encabezado">
      <div class="Premios_encabezado-categorias">
        <h1>Catégorias</h1>
        <nav>
          <ul class="px-0">
            <li class="py-1">
              <a
                :class="verTodos ? 'active' : ''"
                href="#"
                @click="selectCategoriaFiltro('Todos')"
                >TODOS</a
              >
            </li>
            <li class="py-1">
              <a
                :class="categoriaSelect === 'Hogar' ? 'active' : ''"
                href="#"
                @click="selectCategoriaFiltro('Hogar')"
                >HOGAR</a
              >
            </li>
            <li class="py-1">
              <a
                :class="categoriaSelect === 'Deportes' ? 'active' : ''"
                href="#"
                @click="selectCategoriaFiltro('Deportes')"
                >DEPORTES</a
              >
            </li>
            <li class="py-1">
              <a
                :class="categoriaSelect === 'Mascotas' ? 'active' : ''"
                href="#"
                @click="selectCategoriaFiltro('Mascotas')"
                >MASCOTAS</a
              >
            </li>
            <li class="py-1">
              <a
                :class="categoriaSelect === 'Herramientas' ? 'active' : ''"
                href="#"
                @click="selectCategoriaFiltro('Herramientas')"
                >HERRAMIENTAS</a
              >
            </li>
            <li class="py-1">
              <a
                :class="categoriaSelect === 'Moda' ? 'active' : ''"
                href="#"
                @click="selectCategoriaFiltro('Moda')"
                >MODA</a
              >
            </li>
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
        v-show="showPremioByCategoria(dataPremio.categoria) || verTodos"
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

      <img class="img-fluid" src="@/assets/images/Premios/Banner1.png" alt="" />
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
      dataFiltrada: [],
      categoriaSelect: "Todos",
      verTodos: true,
    };
  },
  computed: {},
  methods: {
    showPremioByCategoria(cat) {
      return cat === this.categoriaSelect ? true : false;
    },
    selectCategoriaFiltro(cat) {
      if (cat === "Todos") {
        this.verTodos = true;
        this.categoriaSelect = ""
      } else {
        this.verTodos = false;
        this.categoriaSelect = cat;
      }
    },
    consultarDatos() {
      this.consultarDatos = true;
      console.log(process.env.VUE_APP_ROOT_API + "/premios");
      fetch(process.env.VUE_APP_ROOT_API + "/premios")
        .then((response) => response.json())
        .then((data) => {
          this.dataVacia = false;
          this.consultarDatos = false;
          this.dataPremios = data;
          this.dataFiltrada = data;
        })
        .catch((error) => {
          this.consultarDatos = false;
          this.dataVacia = true;
          console.log("Error consultando premios" + error);
        });
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
  // background-image: linear-gradient(10deg, transparent 80%, $color-salmon 80.1%);
  background-image: url(../assets/images/Premios/header_bg.svg);
  //background-size: 100% 15%;
  background-repeat: no-repeat;
}
.Premios__encabezado {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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

      a {
        text-decoration: none;
        color: rgb(43, 42, 42);
        &.active {
          color: $color-link-active;
          text-decoration: underline;
        }
        &.disable {
          color: rgb(145, 143, 143);
          font-weight: normal;
        }
      }
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
      color: rgb(243, 142, 142);
    }
    &.disable {
      color: rgb(248, 248, 248);
      font-weight: normal;
    }
  }
}
</style>
