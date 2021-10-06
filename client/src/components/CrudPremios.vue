<template>
  <div class="">
    <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom"
    >
      <h1 class="h2">Premios</h1>
      <div class="btn-toolbar mb-2 mb-md-0">
        <div class="btn-group mr-2" v-show="showListadoPremios">
          <button class="btn btn-sm btn-outline-secondary" @click="consultarPremios">
            Actualizar
          </button>
          <button class="btn btn-sm btn-outline-secondary" @click="openNewForm()">
            Nuevo Premio
          </button>
        </div>
      </div>
    </div>
    <PremioForm
      :categorias="listaCategoriaPremios"
      v-if="showFormPremio"
      @cerrarForm="closeForm"
      @actualizarListado="consultarPremios"
      :idPremio="premioSelect"
      :dataPremio="dataPremioSelected"
    ></PremioForm>
    <PremioNewForm
      :categorias="listaCategoriaPremios"
      v-show="showNewFormPremio"
      @cerrarForm="closeForm"
    ></PremioNewForm>
    <PremioDetail
      :idPremio="premioSelect"
      :dataPremioId="dataPremioSelected"
      v-show="showDetailPremio"
      @cerrarDetalle="closeDetail"
      @editarPremio="openForm(premioSelect)"
      @eliminarPremio="deletePremio(premioSelect)"
    ></PremioDetail>
    <div class="Seccion-tabla" v-show="!errorConsulta && showListadoPremios">
      <h2>Tabla de premios</h2>
      <div class="table-responsive">
        <table class="table table-sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Cantidad</th>
              <th>Valor puntos</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody v-show="!datosVacios">
            <tr
              v-for="(premio, index) in listaPremios"
              :key="premio._id"
              :class="premio.visible ? ' table-success' : 'table-warning'"
            >
              <td>{{ index + 1 }}</td>
              <td>{{ premio.nombre }}</td>
              <td>{{ premio.cantidad }}</td>
              <td>{{ premio.valor_puntos }}</td>
              <td>
                <button @click="openDetail(premio._id)">
                  <span class="mdi mdi-eye" alt></span>
                </button>
                <button @click="openForm(premio._id)">
                  <span class="mdi mdi-lead-pencil"></span>
                </button>
                <button @click="deletePremio(premio._id)">
                  <span class="mdi mdi-trash-can-outline"></span>
                </button>
              </td>
            </tr>
          </tbody>
          <tbody v-show="datosVacios">
            <tr>
              No hay registros
            </tr>
          </tbody>

          <tbody></tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
//importando componentes
import PremioForm from "../components/PremioForm.vue";
import PremioDetail from "../components/PremioDetail.vue";
import PremioNewForm from "../components/PremioNewForm.vue";
import axios from "axios";

export default {
  components: {
    PremioForm,
    PremioDetail,
    PremioNewForm,
  },
  data() {
    return {
      premioSelect: "",
      dataPremioSelected: {},

      listaPremios: [],

      datosVacios: true,
      errorConsulta: false,

      listaCategoriaPremios: [],

      showListadoPremios: true,
      showDetailPremio: false,
      showFormPremio: false,
      showNewFormPremio: false,
    };
  },
  mounted() {
    this.consultarPremios();
    this.consultarCategoria();
  },
  methods: {
    openDetail(id) {
      this.premioSelect = id;
      console.log(id);
      fetch(process.env.VUE_APP_ROOT_API + "/premios/full/" + this.premioSelect)
        //   fetch(
        //     "https://my-json-server.typicode.com/DarkNikT/fakeapi-appweb/eventos/" +
        //       this.premioSelect
        //   )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          this.dataPremioSelected = data;

          if (this.dataPremioSelected.length != 0) {
            console.log("Hay sin datos " + id);
          } else {
            console.log("No hay datos");
          }
        })
        .catch((error) => {
          console.error(error);
        });

      this.showDetailPremio = true;
      this.showFormPremio = false;
      this.showListadoPremios = false;
      this.showNewFormPremio = false;
    },
    closeDetail() {
      this.showDetailPremio = false;
      this.showFormPremio = false;
      this.showNewFormPremio = false;
      this.showListadoPremios = true;
    },

    openForm(id) {
      this.premioSelect = id;
      fetch(process.env.VUE_APP_ROOT_API + "/premios/full/" + this.premioSelect)
        .then((res) => res.json())
        .then((data) => {
          this.dataPremioSelected = data;
        })
        .catch((error) => {
          console.error(error);
        });
      this.showDetailPremio = false;
      this.showFormPremio = true;
      this.showListadoPremios = false;
      this.showNewFormPremio = false;
    },
    closeForm() {
      //actuallizar lista de eventos
      this.consultarPremios();
      this.showDetailPremio = false;
      this.showFormPremio = false;
      this.showListadoPremios = true;
      this.showNewFormPremio = false;

      //vaciar campos de formularios
    },

    openNewForm() {
      this.showNewFormPremio = true;
      this.showDetailPremio = false;
      this.showFormPremio = false;
      this.showListadoPremios = false;
    },
    //consulta a la base de datos
    consultarPremios() {
      //

      //fetch("https://my-json-server.typicode.com/DarkNikT/fakeapi-appweb/eventos")
      fetch(process.env.VUE_APP_ROOT_API + "/premios")
        .then((res) => res.json())
        .then((data) => {
          this.listaPremios = data;

          if (this.listaPremios.length != 0) {
            this.datosVacios = false;
          } else {
            this.datosVacios = true;
          }
          console.log(this.errorConsulta);
        })
        .catch((error) => {
          console.error(error);
          this.errorConsulta = true;
        });

      console.log(this.listaPremios);
    },

    consultarCategoria() {
      //hace fetch de las categorias
      fetch(process.env.VUE_APP_ROOT_API + "/premios/categoria/premios")
        .then((res) => res.json())
        .then((data) => {
          this.listaCategoriaPremios = data;
        })
        .catch((error) => {
          console.error(error);
        });
    },

    deletePremio(id) {
      const swalWithBootstrapButtons = this.$swal.mixin({
        customClass: {
          confirmButton: "btn btn-success mx-2",
          cancelButton: "btn btn-danger mx-2",
        },
        buttonsStyling: false,
      });
      swalWithBootstrapButtons
        .fire({
          title: "Está seguro?",
          text: "Está a punto de eliminar un registro",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Si, borralo!",
          cancelButtonText: "No, cancelar!",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            //Aquí el código para revisar ai se borró o no
            let apiURL = `${process.env.VUE_APP_ROOT_API}/premios/delete-premio/${id}`;
            axios
              .delete(apiURL)
              .then((res) => {
                console.log(res);
                swalWithBootstrapButtons.fire(
                  "Eliminado!",
                  "El registro ha sido eliminado.",
                  "success"
                );
                this.consultarPremios();
                this.closeForm();
              })
              .catch((e) => {
                this.$swal("Premio no eliminado ha ocurrido un error");
              });
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === this.$swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire(
              "Enhorabuena",
              "El registro no será eliminado",
              "error"
            );
          }
        });
    },
  },
};
</script>
