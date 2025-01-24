<script setup lang="ts">
  import { provide, ref } from "vue";

  const mensajeColegio = ref('Mensaje a profesores y alumnos (appVue)');
  provide('key', mensajeColegio)

  // const mensajeTodos = () => {
  //   mensajeColegio.value = "Nuevo mensaje a profesores y alumnos (appVue)"
  //   console.log("mensajeDirector", mensajeColegio.value)
  // }
</script>

<template>
  <router-view></router-view>

  <h1 class="mt-5">Colegio</h1>

  <div class="row">
      <div class="col-6">
          <input type="text" v-model="mensajeColegio" class="form-control" placeholder="Mensaje al colegio">
      </div>
      <!-- <div class="col-6">
        <button class="btn btn-primary mt-5" @click="mensajeTodos">Enviar a todo el colegio</button>
      </div> -->

  </div>

  

</template>

<style lang="scss" scoped>
</style>
