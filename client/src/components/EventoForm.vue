<template>
  <div>
    <button @click="$emit('cerrarForm')">cerrar</button>

    <form class="row g-3" @submit.prevent="onPress">
      <div class="col-12">
        <input
          type="text"
          class="form-control"
          placeholder="Titulo"
          v-model="dataEventSelected.titulo"
          required
        />
      </div>
      <div class="col-12" v-show="dataEventSelected.id_tipo != 1 ? true : false">
        <input
          type="text"
          class="form-control"
          placeholder="Lugar"
          v-model="dataEventSelected.lugar"
          :required="dataEventSelected.id_tipo === 1 ? false : true"
        />
      </div>
      <div class="col-md6">
        <select name="selectCategoria" v-model="dataEventSelected.id_categoria" required>
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
        <select name="selectTipo" v-model.number="dataEventSelected.id_tipo" required>
          <option v-for="(tipo, idx) in tipos" :key="idx" :value="tipo._id">
            {{ tipo.tipoEvento }}
          </option>
        </select>
      </div>
      <div class="col-12" v-show="dataEventSelected.id_tipo != 2 ? true : false">
        <input
          type="text"
          class="form-control"
          placeholder="Url"
          v-model.number="dataEventSelected.url"
          :required="dataEventSelected.id_tipo != 2 ? true : false"
        />
      </div>
      <div class="col-md6">
        <select
          name="selectSucursal"
          v-model.number="dataEventSelected.id_sucursal"
          required
        >
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
          v-model.number="dataEventSelected.cupo"
          required
        />
      </div>

      <div class="col-md-6">
        <input
          type="number"
          class="form-control"
          placeholder="Valor puntos"
          v-model.number="dataEventSelected.valor_puntos"
          required
        />
      </div>
      <div class="col-12">
        <input
          type="text"
          class="form-control"
          placeholder="Path image"
          v-model="dataEventSelected.path_foto"
          required
        />
      </div>
      <div class="col-md-6">
        <label for="fechaInicio">Fecha de inicio</label>
        <input
          id="fechaInicio"
          type="datetime-local"
          min="2021-09-07T00:00"
          max="2023-01-01T00:00"
          class="form-control"
          placeholder=""
          v-model="dataEventSelected.fecha_inicio"
          required
        />
      </div>
      <div class="col-md-6">
        <label for="fecha-fin">Fecha de finalización</label>
        <input
          id="fecha-fin"
          type="datetime-local"
          min="2021-09-07T00:00"
          max="2023-01-01T00:00"
          class="form-control"
          placeholder=""
          v-model="dataEventSelected.fecha_fin"
          required
        />
      </div>
      <div class="col-12">
        <div class="col-md6">
          <select name="selectSucursal" v-model="dataEventSelected.disponible" required>
            <option :value="true">Dsiponible</option>
            <option :value="false">Oculto</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary">Actualizar</button>
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
