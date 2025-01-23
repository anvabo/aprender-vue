<script setup lang="ts">
  import { ref } from 'vue'

  const nombre = ref<string>('Mi nombre')
</script>

<template>
  <h1>Mi primera página</h1>
  <p>
    Bienvenido {{ nombre }}
  </p>
</template>

<style lang="scss" scoped>
  h1 {
    color: blue;
  }
</style>
