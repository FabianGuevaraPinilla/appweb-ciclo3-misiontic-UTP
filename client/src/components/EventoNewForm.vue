<template>
  <div>
    <div class="d-flex justify-content-end">
    <button type="button" class="btn-close pull left" aria-label="Close" @click="$emit('cerrarForm')"></button>
    </div>
    <p></p>
    <form class="row g-3" @submit.prevent="onPress">

      <div class="row mb-3">
        <label for="titulo" class="col-sm-2 col-form-label">Título del Evento</label>
        <div class="col-sm-9">
          <input
            id="titulo"
            type="text"
            class="form-control"
            v-model="modelEvento.titulo"
            required
          >
        </div>
      </div>
      <div class="row mb-3">
        <label for="lugar" class="col-sm-2 col-form-label">Lugar del Evento</label>
        <div class="col-sm-9" v-show="modelEvento.id_tipo === 1 ? false : true">
          <input
            id="lugar"
            type="text"
            class="form-control"
            v-model="modelEvento.lugar"
            :required="modelEvento.id_tipo === 1 ? false : true"
          >
        </div>
      </div>
      <div class="row mb-3">
        <label for="selectcat" class="col-form-label col-sm-2 pt-0">Categoria del Evento</label>
        <div class="col-sm-9">
          <select id="selectcat" name="selectCategoria" class="custom-select form-control col-sm-9" v-model="modelEvento.id_categoria" required>
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
      <div class="row mb-3">
        <label for="selecttipo" class="col-form-label col-sm-2 pt-0">Tipo del Evento</label>
        <div class="col-sm-9">
          <select id="selecttipo" name="selectTipo" class="custom-select form-control col-sm-9" v-model.number="modelEvento.id_tipo" required>
            <option v-for="(tipo, idx) in tipos" :key="idx" :value="tipo._id">
              {{ tipo.tipoEvento }}
            </option>
          </select>
        </div>
      </div>
      <div class="row mb-3">
        <label for="url" class="col-sm-2 col-form-label">URL del Evento</label>
        <div class="col-sm-9"  v-show="modelEvento.id_tipo != 2 ? true : false">
          <input
            id="url"
            type="text"
            class="form-control"
            v-model="modelEvento.url"
          />
        </div>
      </div>
      <div class="row mb-3">
        <label for="selectsuc" class="col-form-label col-sm-2 pt-0">Sucursal</label>
        <div class="col-sm-9">
          <select id="selectsuc" name="selectSucursal" class="custom-select form-control col-sm-9" v-model.number="modelEvento.id_sucursal" required>
            <option v-for="(sucursal, idx) in sucursales" :key="idx" :value="sucursal._id">
              {{ sucursal.nombre }}
            </option>
          </select>
        </div>
      </div>
      <div class="row mb-3">
        <label for="ruta" class="col-sm-2 col-form-label">Ruta de la Imágen</label>
        <div class="col-sm-9">
          <input
            id="ruta"
            type="text"
            class="form-control"
            v-model="modelEvento.path_foto"
            required
          >
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-3 offset-sm-2 text-center">
            <label>Cupos</label>
            <input
              type="number"
              class="form-control"
              placeholder="Cupo"
              v-model="modelEvento.cupo"
              required
            >
          </div>
          <div class="col-md-3 offset-sm-2 text-center">
            <label>Valor de Puntos</label>
            <input
              type="number"
              class="form-control"
              placeholder="Valor puntos"
              v-model="modelEvento.valor_puntos"
              required
            >
          </div>   
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-3 offset-sm-2 text-center">
            <label for="fechaInicio">Fecha de Inicio</label>
            <input
              id="fechaInicio"
              type="datetime-local"
              min="2021-10-07T00:00"
              max="2023-01-01T00:00"
              class="form-control"
              placeholder=""
              v-model="modelEvento.fecha_inicio"
              required
            />
          </div>
          <div class="col-md-3 offset-sm-2 text-center">
            <label for="fecha-fin">Fecha de Finalización</label>
            <input
              id="fecha-fin"
              type="datetime-local"
              min="2021-10-07T00:00"
              max="2023-01-01T00:00"
              class="form-control"
              placeholder=""
              v-model="modelEvento.fecha_fin"
              required
            >
          </div>   
        </div>
      </div>
      <p></p>
<div class="row mt-3 mb-3">
        <label for="selectVisibilidad" class="col-form-label col-sm-2 "
          >Disponibilidad en el catálogo</label
        >
        <div class="col-sm-9 col-md-3">
        <select
          id="selectVisibilidad"
          class="form-select form-control"
          v-model="modelEvento.disponible"

        >
          <option :value="true">Visible</option>
          <option :value="false">Oculto</option>
        </select>
        </div>

      </div>
      <div class="col-md-4 offset-sm-4 text-center">
        <button type="button" class="btn btn-outline-warning w-25  m-3" @click="clearForm">Limpiar</button>
        <button type="submit" class="btn btn-outline-success w-25 m-3">Crear</button>
      </div>
    </form>
  </div>
</template>


<script>

import axios from "axios";
import DashboardAdmin from '../views/DashboardAdmin.vue';

export default {
  components: { DashboardAdmin },
  props: ["categorias", "tipos", "sucursales"],
  data() {
    return {
      modelEvento: {
        id_categoria: 0,
        id_tipo: 0,
        id_sucursal: 0,
        titulo: "",
        fecha_inicio: "",
        fecha_fin: "",
        lugar: "",
        url: "",
        path_foto: "",
        cupo: 0,
        valor_puntos: 0,
        disponible: true,
      },
    };
  },
  methods: {
    clearForm() {
      this.modelEvento = {
        id_categoria: 0,
        id_tipo: 0,
        id_sucursal: 0,
        titulo: "",
        fecha_inicio: "",
        fecha_fin: "",
        lugar: "",
        url: "",
        path_foto: "",
        cupo: 0,
        valor_puntos: 0,
        disponible: true,
      };
    },
    onPress() {
      this.modelEvento.cupo = parseInt(this.modelEvento.cupo);
      this.modelEvento.valor_puntos = parseInt(this.modelEvento.valor_puntos);
      console.log(this.modelEvento);
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
            let apiURL = `${process.env.VUE_APP_ROOT_API}/eventos/create-event/`;
            axios
              .post(apiURL, this.modelEvento)
              .then((res) => {
                console.log(res);
                this.$swal("Premio creado con exito");
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
