<template>
  <div>
    <button @click="$emit('cerrarForm')">cerrar</button>

    <form class="row g-3" @submit.prevent="onPress">
      <div class="col-12">
        <input
          type="text"
          class="form-control"
          placeholder="Titulo"
          v-model="modelEvento.titulo"
          required
        />
      </div>
      <div class="col-12" v-show="modelEvento.id_tipo === 1 ? false : true">
        <input
          type="text"
          class="form-control"
          placeholder="Lugar"
          v-model="modelEvento.lugar"
          :required="modelEvento.id_tipo === 1 ? false : true"
        />
      </div>
      <div class="col-md6">
        <select name="selectCategoria" v-model="modelEvento.id_categoria" required>
          <option
            v-for="(categoria, idx) in categorias"
            :key="idx"
            :value="categoria._id"
          >
            {{ categoria.categoria }}
          </option>
        </select>
      </div>
      <div class="col-md6">
        <select name="selectTipo" v-model.number="modelEvento.id_tipo" required>
          <option v-for="(tipo, idx) in tipos" :key="idx" :value="tipo._id">
            {{ tipo.tipoEvento }}
          </option>
        </select>
      </div>
      <div class="col-12" v-show="modelEvento.id_tipo != 2 ? true : false">
        <input
          type="text"
          class="form-control"
          placeholder="Url"
          v-model="modelEvento.url"
        />
      </div>
      <div class="col-md6">
        <select name="selectSucursal" v-model.number="modelEvento.id_sucursal" required>
          <option v-for="(sucursal, idx) in sucursales" :key="idx" :value="sucursal._id">
            {{ sucursal.nombre }}
          </option>
        </select>
      </div>
      <div class="col-md-6">
        <input
          type="number"
          class="form-control"
          placeholder="Cupo"
          v-model="modelEvento.cupo"
          required
        />
      </div>

      <div class="col-md-6">
        <input
          type="number"
          class="form-control"
          placeholder="Valor puntos"
          v-model="modelEvento.valor_puntos"
          required
        />
      </div>
      <div class="col-12">
        <input
          type="text"
          class="form-control"
          placeholder="Path image"
          v-model="modelEvento.path_foto"
          required
        />
      </div>
      <div class="col-md-6">
        <label for="fechaInicio">Fecha de inicio</label>
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
      <div class="col-md-6">
        <label for="fecha-fin">Fecha de finalización</label>
        <input
          id="fecha-fin"
          type="datetime-local"
          min="2021-10-07T00:00"
          max="2023-01-01T00:00"
          class="form-control"
          placeholder=""
          v-model="modelEvento.fecha_fin"
          required
        />
      </div>
      <div class="col-md6">
        <select name="selectDisponible" v-model="modelEvento.disponible">
          <option :value="true">Disponible</option>
          <option :value="false">No disponible</option>
        </select>
      </div>
      <div class="col-12">
        <button @click="clearForm">Limpiar</button>
        <button type="submit" class="btn btn-primary">"Crear"</button>
      </div>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
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
