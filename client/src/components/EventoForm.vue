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
              placeholder="Titulo"
              v-model="dataEventSelected.titulo"
              required
            >
          </div>
        </div>
        <div class="row mb-3">
          <label for="lugar" class="col-sm-2 col-form-label">Lugar del Evento</label>
          <div class="col-sm-9" v-show="dataEventSelected.id_tipo != 1 ? true : false">
            <input
              id="lugar"
              type="text"
              class="form-control"
              placeholder="Lugar"
              v-model="dataEventSelected.lugar"
              :required="dataEventSelected.id_tipo === 1 ? false : true"
            >
          </div>
        </div>
        <div class="row mb-3">
          <label for="selectcat" class="col-form-label col-sm-2 pt-0">Categoria del Evento</label>
          <div class="col-sm-9">
            <select id="selectcat" name="selectCategoria" class="form-select form-control col-sm-9" v-model="dataEventSelected.id_categoria" required>
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
            <select id="selecttipo" name="selectTipo" class="form-select form-control col-sm-9" v-model.number="dataEventSelected.id_tipo" required>
              <option v-for="(tipo, idx) in tipos" :key="idx" :value="tipo._id">
                {{ tipo.tipoEvento }}
              </option>
            </select>
          </div>
        </div>
        <div class="row mb-3">
          <label for="url" class="col-sm-2 col-form-label">URL del Evento</label>
          <div class="col-sm-9"  v-show="dataEventSelected.id_tipo != 2 ? true : false">
            <input
              id="url"
              type="text"
              class="form-control"
              v-model.number="dataEventSelected.url"
              :required="dataEventSelected.id_tipo != 2 ? true : false"
            />
          </div>
        </div>
        <div class="row mb-3">
          <label for="selectsuc" class="col-form-label col-sm-2 pt-0">Sucursal</label>
          <div class="col-sm-9">
            <select id="selectsuc" name="selectSucursal" class="custom-select form-control col-sm-9" v-model.number="dataEventSelected.id_sucursal" required>
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
              v-model="dataEventSelected.path_foto"
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
                v-model="dataEventSelected.cupo"
                required
              >
            </div>
            <div class="col-md-3 offset-sm-2 text-center">
              <label>Valor de Puntos</label>
              <input
                type="number"
                class="form-control"
                placeholder="Valor puntos"
                v-model="dataEventSelected.valor_puntos"
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
                v-model="dataEventSelected.fecha_inicio"
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
                v-model="dataEventSelected.fecha_fin"
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
          v-model="dataEventSelected.disponible"
        >
          <option :value="true">Visible</option>
          <option :value="false">Oculto</option>
        </select>
        </div>
        <div class="col-md-3"></div>
      </div>

        <div class="col-md-4 offset-sm-4 text-center">
          <button type="submit" class="btn btn-outline-success w-50 m-3">Actualizar</button>
        </div>
      </form>
      <h2 v-show="false">{{ dataEvento }}</h2>
    </div>
</template>

<script>

import axios from "axios";

export default {
  props: ["categorias", "tipos", "sucursales", "idEvento", "dataEvento"],
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
      dataEventSelected: [],
    };
  },
  updated() {
    console.log("Actualizado");
    this.dataEventSelected = this.dataEvento;
  },
  mounted() {},
  methods: {
    actualiza() {
      fetch(process.env.VUE_APP_ROOT_API + "/eventos/full/" + this.idEvento)
        .then((res) => res.json())
        .then((data) => {
          this.dataEventSelected = data;
        })
        .catch((error) => {
          console.error(error);
        });
      console.log(this.dataEventSelected);
    },
    onPress() {
      this.modelEvento.cupo = parseInt(this.modelEvento.cupo);
      this.modelEvento.valor_puntos = parseInt(this.modelEvento.valor_puntos);
      console.log(this.modelEvento);
      console.log("Se va a actualizar");
      console.log(this.dataEventSelected);

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
            let apiURL = `${process.env.VUE_APP_ROOT_API}/eventos/update-event/${this.idEvento}`;
            let dataPut = { ...this.dataEventSelected };
            delete dataPut._id;
            axios
              .put(apiURL, dataPut)
              .then((res) => {
                console.log(res);
                this.$swal("Evento modificado con exito");
              })
              .catch((error) => {
                console.log(error);
                this.$swal("Error modificando evento");
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
