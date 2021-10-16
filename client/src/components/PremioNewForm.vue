<template>
  <div class="container">
    <div class="d-flex justify-content-end">
      <button
        type="button"
        class="btn-close pull left"
        aria-label="Close"
        @click="$emit('cerrarForm')"
      ></button>
    </div>
    <p></p>
    <form class="row g-3" @submit.prevent="onPress">
      <div class="row mb-3">
        <label for="nombre" class="col-sm-2 col-form-label"
          >Nombre del Premio</label
        >
        <div class="col-sm-9">
          <input
            id="nombre"
            type="text"
            class="form-control"
            v-model="modelPremio.nombre"
            required
          />
        </div>
      </div>
      <div class="row mb-3">
        <label for="marca" class="col-sm-2 col-form-label"
          >Marca del Premio</label
        >
        <div class="col-sm-9">
          <input
            id="marca"
            type="text"
            class="form-control"
            v-model="modelPremio.marca"
            required
          />
        </div>
      </div>
      <div class="row mb-3">
        <label for="detalle" class="col-sm-2 col-form-label"
          >Detalle del Premio</label
        >
        <div class="col-sm-9">
          <input
            id="detalle"
            type="text"
            class="form-control"
            v-model="modelPremio.detalle"
          />
        </div>
      </div>
      <div class="row mb-3">
        <label for="rutaimg" class="col-sm-2 col-form-label"
          >Ruta de la Imágen</label
        >
        <div class="col-sm-9">
          <input
            id="rutaimg"
            type="text"
            class="form-control"
            v-model="modelPremio.path_foto"
            required
          />
        </div>
      </div>
      <div class="row mb-3">
        <label for="selectcat" class="col-form-label col-sm-2 pt-0"
          >Categoria del Premio</label
        >
        <div class="col-sm-9">
          <select
            id="selectcat"
            name="selectCategoria"
            class="form-select form-control col-sm-9"
            v-model="modelPremio.id_categoria"
            required
          >
            <option
              v-for="(categoria, idx) in categorias"
              :key="idx"
              :value="categoria._id"
            >
              {{ categoria.categoria }}
            </option>
          </select>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-3 offset-sm-2 text-center" style="padding-inline-end: 2%">
            <label>Cantidad</label>
            <input
              type="number"
              class="form-control col-md-3"
              placeholder="Cantidad"
              v-model.number="modelPremio.cantidad"
              required
            />
          </div>
          <div class="col-md-3 offset-sm-2 text-center">
            <label>Puntos</label>
            <input
              type="number"
              class="form-control "
              placeholder="Valor puntos"
              v-model.number="modelPremio.valor_puntos"
              required
            />
          </div>
        </div>
      </div>
      <div class="row mt-3 mb-3">
        <label for="selectVisibilidad" class="col-form-label col-sm-2 "
          >Disponibilidad en el stock</label
        >
        <div class="col-sm-9 col-md-3">
        <select
          id="selectVisibilidad"
          class="form-select form-control"
          v-model="modelPremio.visible"

        >
          <option :value="true">Visible</option>
          <option :value="false">Oculto</option>
        </select>
        </div>
        <div class="col-md-3"></div>
      </div>
      <div class="col-md-4 offset-sm-4 text-center">
        <button
          type="button"
          class="btn btn-outline-warning w-25 m-3"
          @click="clearForm"
        >
          Limpiar
        </button>
        <button type="submit" class="btn btn-outline-success m-3">
          Crear
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["categorias"],
  data() {
    return {
      modelPremio: {
        id_categoria: 0,
        nombre: "",
        marca: "",
        detalle: "",
        path_foto: "",
        cantidad: 0,
        valor_puntos: 0,
        visible: true,
      },
    };
  },
  methods: {
    clearForm() {
      this.modelPremio = {
        id_categoria: 0,
        nombre: "",
        marca: "",
        detalle: "",
        path_foto: "",
        cantidad: 0,
        valor_puntos: 0,
        visible: true,
      };
    },
    onPress() {
      console.log(this.modelPremio);
      console.log("creando registro");

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
          text: "Está a punto de crear un registro",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Si,crealo!",
          cancelButtonText: "No, cancelar!",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            //Aquí el código para revisar ai se borró o no
            let apiURL = `${process.env.VUE_APP_ROOT_API}/premios/create-premio/`;
            axios
              .post(apiURL, this.modelPremio)
              .then((res) => {
                console.log(res);
                this.$swal("Evento creado con exito");
              })
              .catch((error) => {
                console.log(error);
                this.$swal("Ha ocurrido un error creando el registro");
              });
            this.clearForm();
            this.$emit("cerrarForm");
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === this.$swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire(
              "Enhorabuena",
              "El registro no será creado",
              "error"
            );
          }
        });
    },
  },
};
</script>
