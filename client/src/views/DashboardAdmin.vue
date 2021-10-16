<template>
  <div class="container-fluid">
    <div class="row">
      <nav class="col-md-2 d-none d-md-block sidebar px-0 Dashboard_nav">
        <div class="sidebar-sticky">
          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link" :class="isOpenSection('Inicio') ? 'active':''" href="#" v-on:click="setSectionOpen('Inicio')">
                Dashboard
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" :class="isOpenSection('Usuarios') ? 'active':''" href="#" v-on:click="setSectionOpen('Usuarios')">
                Usuarios
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" :class="isOpenSection('Premios') ? 'active':''" href="#" v-on:click="setSectionOpen('Premios')">
                Premios
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" :class="isOpenSection('Eventos') ? 'active':''" href="#" v-on:click="setSectionOpen('Eventos')">
                Eventos
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
        <CrudEventos v-if="isOpenSection('Eventos') "></CrudEventos>
        <CrudPremios v-if="isOpenSection('Premios')"></CrudPremios>
        <DashBoardInicio v-if="isOpenSection('Inicio')">
          {{ userdata }}
        </DashBoardInicio>
        <ReporteUsuarios v-show="isOpenSection('Usuarios')"></ReporteUsuarios>
      </main>
    </div>
  </div>
</template>
<script>
import DashBoardInicio from "../components/DashboardInicio.vue";
import CrudEventos from "../components/CrudEventos.vue";
import CrudPremios from "../components/CrudPremios.vue";
import ReporteUsuarios from "../components/ReporteUsuarios.vue";
import { mapState } from "vuex";
export default {
  data() {
    return {
      sectionOpen: "Inicio",
      showMainTable: true,
    };
  },
  methods: {
    setSectionOpen(modulo) {
      this.sectionOpen = modulo;
    },
    isOpenSection(section) {
      return section === this.sectionOpen ? true : false;
    },
  },
  computed: {
    ...mapState(["userdata"]),
  },
  components: {
    DashBoardInicio,
    CrudEventos,
    CrudPremios,
    ReporteUsuarios,
  },
};
</script>
<style lang="scss" scoped>
.nav-link {
  color: white;
  &.active {
    color: #044182;
    background: white;
  }
}
.Dashboard_nav{
  background-color: $color-footer-section-contacto;
}
</style>
