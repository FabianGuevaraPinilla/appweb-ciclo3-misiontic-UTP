<template>
  <div class="container-fluid">
    <div class="row">
      <nav class="col-md-2 d-none d-md-block bg-light sidebar">
        <div class="sidebar-sticky">
          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link" href="#" v-on:click="setSectionOpen('Inicio')">
                Dashboard
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" v-on:click="setSectionOpen('Usuarios')">
                Usuarios
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" v-on:click="setSectionOpen('Premios')">
                Premios
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" v-on:click="setSectionOpen('Eventos')">
                Eventos
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
        <CrudEventos v-show="isOpenSection('Eventos')"></CrudEventos>
        <CrudPremios v-show="isOpenSection('Premios')"></CrudPremios>
        <DashBoardInicio v-show="isOpenSection('Inicio')"></DashBoardInicio>
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
  computed: {},
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
  &.active {
    color: #007bff;
  }
}
</style>
