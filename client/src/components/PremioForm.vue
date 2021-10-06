<template>
  <div>
    <button @click="$emit('cerrarForm')">cerrar</button>

    <form class="row g-3" @submit.prevent="onPress">
      <div class="col-12">
        <input
          type="text"
          class="form-control"
          placeholder="Nombre"
          v-model="dataPremioSelected.nombre"
          required
        />
      </div>
      <div class="col-12">
        <input
          type="text"
          class="form-control"
          placeholder="Marca"
          v-model="dataPremioSelected.marca"
          required
        />
      </div>
      <div class="col-md6">
        <select name="selectCategoria" v-model="dataPremioSelected.id_categoria" required>
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
          v-model="dataPremioSelected.detalle"
        />
      </div>
      <div class="col-md-6">
        <label for="">Cantidad</label>
        <input
          type="number"
          class="form-control"
          placeholder="Cantidad"
          v-model="dataPremioSelected.cantidad"
          required
        />
      </div>
      <div class="col-md-6">
        <label for="">Puntos</label>
        <input
          type="number"
          class="form-control"
          placeholder="Valor puntos"
          v-model="dataPremioSelected.valor_puntos"
          required
        />
      </div>
      <div class="col-12">
        <input
          type="text"
          class="form-control"
          placeholder="Path image"
          v-model="dataPremioSelected.path_foto"
          required
        />
      </div>
      <div class="col-12">
        <select v-model="dataPremioSelected.visible">
          <option :value="true">Visible</option>
          <option :value="false">Ocult0</option>
        </select>
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-primary">Actualizar</button>
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
