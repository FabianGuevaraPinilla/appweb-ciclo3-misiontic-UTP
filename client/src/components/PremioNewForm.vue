<template>
  <div>
    <button @click="$emit('cerrarForm')">cerrar</button>
    <form class="row g-3" @submit.prevent="onPress">
      <div class="col-12">
        <input
          type="text"
          class="form-control"
          placeholder="Nombre"
          v-model="modelPremio.nombre"
          required
        />
      </div>
      <div class="col-12">
        <input
          type="text"
          class="form-control"
          placeholder="Marca"
          v-model="modelPremio.marca"
          required
        />
      </div>
      <div class="col-md6">
        <select name="selectCategoria" v-model="modelPremio.id_categoria" required>
          <option
            v-for="(categoria, idx) in categorias"
            :key="idx"
            :value="categoria._id"
          >
            {{ categoria.categoria }}
          </option>
        </select>
      </div>
      <div class="col-12">
        <input
          type="text"
          class="form-control"
          placeholder="Detalle"
          v-model="modelPremio.detalle"
        />
      </div>
      <div class="col-md-6">
        <label for="">Cantidad</label>
        <input
          type="number"
          class="form-control"
          placeholder="Cantidad"
          v-model.number="modelPremio.cantidad"
          required
        />
      </div>
      <div class="col-md-6">
        <label for="">Puntos</label>
        <input
          type="number"
          class="form-control"
          placeholder="Valor puntos"
          v-model.number="modelPremio.valor_puntos"
          required
        />
      </div>
      <div class="col-12">
        <input
          type="text"
          class="form-control"
          placeholder="Path image"
          v-model="modelPremio.path_foto"
          required
        />
      </div>
      <div class="col-12">
        <select v-model="modelPremio.visible">
          <option :value="true">Visible</option>
          <option :value="false">Ocult0</option>
        </select>
      </div>
      <div class="col-12">
        <button class="btn btn-primary" @click="clearForm">Limpiar</button>
        <button type="submit" class="btn btn-primary">Crear</button>
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
