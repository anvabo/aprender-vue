<script setup lang="ts">

</script>

<template>
    <h1>Introducción a Vue 3</h1>

    <h2>Introducción</h2>

    <ul>
        <li><router-link :to="{ name: 'Basico' }">Básico</router-link></li>
        <li><router-link :to="{ name: 'Formulario' }">Formulario</router-link></li>
        <li><router-link :to="{ name: 'Eventos' }">Eventos</router-link></li>
        <li><router-link :to="{ name: 'Componentes' }">Componentes</router-link></li>
    </ul>
  
</template>

<style scoped lang="scss">

</style>
