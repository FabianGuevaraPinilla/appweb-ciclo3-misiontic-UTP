<template>
  <div class="">
    <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom"
    >
      <h1 class="h2">Eventos</h1>
      <div class="btn-toolbar mb-2 mb-md-0">
        <div class="btn-group mr-2" v-show="showListadoEventos">
          <button class="btn btn-sm btn-outline-secondary" @click="consultarEventos">
            Actualizar
          </button>
          <button class="btn btn-sm btn-outline-secondary" @click="openNewForm()">
            Nuevo Evento
          </button>
        </div>
      </div>
    </div>
    <EventoForm
      :categorias="listaCategoriaEventos"
      :tipos="listaTipoEventos"
      :sucursales="listaSucursales"
      v-if="showFormEvento"
      @cerrarForm="closeForm"
      @actualizarListado="consultarEventos"
      :idEvento="eventoSelect"
      :dataEvento="dataEventSelected"
    ></EventoForm>
    <EventoNewForm
      :categorias="listaCategoriaEventos"
      :tipos="listaTipoEventos"
      :sucursales="listaSucursales"
      v-show="showNewFormEvento"
      @cerrarForm="closeForm"
    ></EventoNewForm>
    <EventoDetail
      :idEvento="eventoSelect"
      :dataEventoId="dataEventSelected"
      v-show="showDetailEvento"
      @cerrarDetalle="closeDetail"
      @editarEvento="openForm(eventoSelect)"
      @eliminarEvento="deleteEvento(eventoSelect)"
    ></EventoDetail>
    <div class="Seccion-tabla" v-show="!errorConsulta && showListadoEventos">
      <h2>Tabla de eventos</h2>
      <div class="table-responsive">
        <table class="table table-sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Fecha</th>
              <th>Valor puntos</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody v-show="!datosVacios">
            <tr
              v-for="(evento, index) in listaEventos"
              :key="evento._id"
              :class="evento.disponible ? ' table-success' : 'table-warning'"
            >
              <td>{{ index + 1 }}</td>
              <td>{{ evento.titulo }}</td>
              <td>{{ evento.categoria }}</td>
              <td>{{ evento.valor_puntos }}</td>
              <td>
                <button @click="openDetail(evento._id)">
                  <span class="mdi mdi-eye" alt></span>
                </button>
                <button @click="openForm(evento._id)">
                  <span class="mdi mdi-lead-pencil"></span>
                </button>
                <button @click="deleteEvento(evento._id)">
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
import EventoForm from "../components/EventoForm.vue";
import EventoDetail from "../components/EventoDetail.vue";
import EventoNewForm from "../components/EventoNewForm.vue";
import axios from "axios";

export default {
  components: {
    EventoForm,
    EventoDetail,
    EventoNewForm,
  },
  data() {
    return {
      eventoSelect: "",
      dataEventSelected: {},

      listaEventos: [],

      datosVacios: true,
      errorConsulta: false,

      listaCategoriaEventos: [],
      listaTipoEventos: [],
      listaSucursales: [],

      showListadoEventos: true,
      showDetailEvento: false,
      showFormEvento: false,
      showNewFormEvento: false,
    };
  },
  mounted() {
    this.consultarEventos();
    this.consultarCategoria();
    this.consultarTipos();
    this.consultarSucursales();
  },
  methods: {
    openDetail(id) {
      this.eventoSelect = id;
      console.log(id);
      fetch(process.env.VUE_APP_ROOT_API + "/eventos/full/" + this.eventoSelect)
        //   fetch(
        //     "https://my-json-server.typicode.com/DarkNikT/fakeapi-appweb/eventos/" +
        //       this.eventoSelect
        //   )
        .then((res) => res.json())
        .then((data) => {
          this.dataEventSelected = data;

          if (this.dataEventSelected.length != 0) {
            console.log("Hay sin datos " + id);
          } else {
            console.log("No hay datos");
          }
        })
        .catch((error) => {
          console.error(error);
        });

      this.showDetailEvento = true;
      this.showFormEvento = false;
      this.showListadoEventos = false;
      this.showNewFormEvento = false;
    },
    closeDetail() {
      this.showDetailEvento = false;
      this.showFormEvento = false;
      this.showNewFormEvento = false;
      this.showListadoEventos = true;
    },

    openForm(id) {
      this.eventoSelect = id;
      fetch(process.env.VUE_APP_ROOT_API + "/eventos/full/" + this.eventoSelect)
        .then((res) => res.json())
        .then((data) => {
          this.dataEventSelected = data;
        })
        .catch((error) => {
          console.error(error);
        });
      this.showDetailEvento = false;
      this.showFormEvento = true;
      this.showListadoEventos = false;
      this.showNewFormEvento = false;
    },
    closeForm() {
      this.showDetailEvento = false;
      this.showFormEvento = false;
      this.showListadoEventos = true;
      this.showNewFormEvento = false;

      //vaciar campos de formularios
      //actuallizar lista de eventos
      this.consultarEventos();
    },

    openNewForm() {
      this.showNewFormEvento = true;
      this.showDetailEvento = false;
      this.showFormEvento = false;
      this.showListadoEventos = false;
    },
    //consulta a la base de datos
    consultarEventos() {
      //

      //fetch("https://my-json-server.typicode.com/DarkNikT/fakeapi-appweb/eventos")
      fetch(process.env.VUE_APP_ROOT_API + "/eventos")
        .then((res) => res.json())
        .then((data) => {
          this.listaEventos = data;

          if (this.listaEventos.length != 0) {
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

      console.log(this.listaEventos);
    },

    consultarCategoria() {
      //hace fetch de las categorias
      fetch(process.env.VUE_APP_ROOT_API + "/eventos/categoria/eventos")
        .then((res) => res.json())
        .then((data) => {
          this.listaCategoriaEventos = data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    consultarTipos() {
      //hace fetch de las categorias
      fetch(process.env.VUE_APP_ROOT_API + "/eventos/tipo/eventos")
        .then((res) => res.json())
        .then((data) => {
          this.listaTipoEventos = data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    consultarSucursales() {
      fetch(process.env.VUE_APP_ROOT_API + "/sucursales")
        .then((res) => res.json())
        .then((data) => {
          this.listaSucursales = data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    deleteEvento(id) {
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
            let apiURL = `${process.env.VUE_APP_ROOT_API}/eventos/delete-event/${id}`;
            axios
              .delete(apiURL)
              .then((res) => {
                console.log(res);
                swalWithBootstrapButtons.fire(
                  "Eliminado!",
                  "El registro ha sido eliminado.",
                  "success"
                );
                this.consultarEventos();
                this.closeForm();
              })
              .catch((e) => {
                this.$swal("Evento no eliminado ha ocurrido un error");
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
