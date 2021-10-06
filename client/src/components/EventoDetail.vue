<template>
  <div>
    <button @click="$emit('cerrarDetalle')">cerrar</button>
    <h2>{{ idEvento }}</h2>
    <h2>{{ dataEventoId.titulo }}</h2>
    <h2>{{ dataEventoId.path_foto }}</h2>

    <button @click="$emit('editarEvento')">Editar</button>
    <button @click="$emit('eliminarEvento')">Eliminar</button>
  </div>
</template>
<script>
export default {
  props: ["idEvento", "dataEventoId"],
  data() {
    return {
      dataEvento: [],
    };
  },
};
</script>
