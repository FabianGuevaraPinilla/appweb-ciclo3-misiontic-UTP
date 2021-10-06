<template>
  <div>
    <button @click="$emit('cerrarDetalle')">cerrar</button>
    <h2>{{ idPremio }}</h2>
    <h2>{{ dataPremioId }}</h2>

    <button @click="$emit('editarPremio')">Editar</button>
    <button @click="$emit('eliminarPremio')">Eliminar</button>
  </div>
</template>
<script>
export default {
  props: ["idPremio", "dataPremioId"],
  data() {
    return {
      dataPremio: [],
    };
  },
};
</script>
