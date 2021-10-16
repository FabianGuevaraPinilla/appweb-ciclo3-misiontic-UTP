<template>
  <div class="container">
    <div class="d-flex justify-content-end">
      <button type="button" class="btn-close pull left" aria-label="Close"  @click="$emit('cerrarForm')"></button>
    </div>
    <p></p>
    <form class="row g-3" @submit.prevent="onPress">
      <div class="row mb-3">
        <label for="nombre" class="col-sm-2 col-form-label">Nombre del Premio</label>
        <div class="col-sm-9">
          <input
            id="nombre"
            type="text"
            class="form-control"
            v-model="dataPremioSelected.nombre"
            required
          >
        </div>
      </div>
      <div class="row mb-3">
        <label for="marca" class="col-sm-2 col-form-label">Marca del Premio</label>
        <div class="col-sm-9">
          <input
            id="marca"
            type="text"
            class="form-control"
            v-model="dataPremioSelected.marca"
            required
          >
        </div>
      </div>
      <div class="row mb-3">
        <label for="detalle" class="col-sm-2 col-form-label">Detalle del Premio</label>
        <div class="col-sm-9">
          <input
            id="detalle"
            type="text"
            class="form-control"
            v-model="dataPremioSelected.detalle"
          >
        </div>
      </div>
      <div class="row mb-3">
        <label for="rutaimg" class="col-sm-2 col-form-label">Ruta de la Imágen</label>
        <div class="col-sm-9">
          <input
            id="rutaimg"
            type="text"
            class="form-control"
            v-model="dataPremioSelected.path_foto"
            required
          >
        </div>
      </div>
      <div class="row mb-3">
        <label for="selectcat" class="col-form-label col-sm-2 pt-0">Categoria del Premio</label>
        <div class="col-sm-9">
          <select id="selectcat" name="selectCategoria" class="form-select form-control col-sm-9" v-model="dataPremioSelected.id_categoria" required>
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
          <div class="col-md-3 offset-sm-2 text-center">
            <label>Cantidad</label>
              <input
                type="number"
                class="form-control"
                v-model.number="dataPremioSelected.cantidad"
                required
              >
          </div>
          <div class="col-md-3 offset-sm-2 text-center">
            <label>Puntos</label>
              <input
                type="number"
                class="form-control"
                v-model.number="dataPremioSelected.valor_puntos"
                required
              >
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

      </div>
      <div class="col-md-4 offset-sm-4 text-center">
        <button type="submit" class="btn btn-outline-success w-50 m-3">Actualizar</button>
      </div>
    </form>
    <h2 v-show="false">{{ dataPremio }}</h2>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["categorias", "idPremio", "dataPremio"],
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
      dataPremioSelected: [],
    };
  },
  updated() {
    console.log("Actualizado form premio");
    this.dataPremioSelected = this.dataPremio;
  },
  mounted() {},
  methods: {
    actualiza() {
      fetch(process.env.VUE_APP_ROOT_API + "/premios/full/" + this.idPremio)
        .then((res) => res.json())
        .then((data) => {
          this.dataPremioSelected = data;
        })
        .catch((error) => {
          console.error(error);
        });
      console.log(this.dataPremioSelected);
    },
    onPress() {
      console.log("Se va a actualizar");
      console.log(this.dataPremioSelected);

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
          text: "Está a punto de editar un registro",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Si, editalo!",
          cancelButtonText: "No, cancelar!",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            //Aquí el código para revisar ai se borró o no
            let apiURL = `${process.env.VUE_APP_ROOT_API}/premios/update-premio/${this.idPremio}`;
            let dataPut = { ...this.dataPremioSelected };
            delete dataPut._id;
            axios
              .put(apiURL, dataPut)
              .then((res) => {
                console.log(res);
                this.$swal("Premio modificado con exito");
              })
              .catch((error) => {
                console.log(error);
                this.$swal("Error modificando premio");
              });
            this.$emit("actualizarListado");
            this.$emit("cerrarForm");
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === this.$swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire(
              "Enhorabuena",
              "El registro no será modificado",
              "error"
            );
          }
        });
    },
  },
};
</script>
