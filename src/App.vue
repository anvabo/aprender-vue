<script setup lang="ts">
// import { provide, ref } from "vue";

// const mensajeColegio = ref('Mensaje a profesores y alumnos (appVue)');
// provide('key', mensajeColegio)

// const mensajeTodos = () => {
//   mensajeColegio.value = "Nuevo mensaje a profesores y alumnos (appVue)"
//   console.log("mensajeDirector", mensajeColegio.value)
// }
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary mb-3">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Aprendiendo Vue.js 3</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active" :to="{ name: 'Home' }">Inicio</router-link>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Ejemplos
              </a>
              <ul class="dropdown-menu">
                <li><router-link class="dropdown-item" :to="{ name: 'Basico' }">Básico</router-link></li>
                <li><router-link class="dropdown-item" :to="{ name: 'Formulario' }">Formulario</router-link></li>
                <li><router-link class="dropdown-item" :to="{ name: 'Eventos' }">Eventos</router-link></li>
                <li><router-link class="dropdown-item" :to="{ name: 'Componentes' }">Componentes</router-link></li>
              </ul>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  </header>

  <main>
    <router-view></router-view>
  </main>

  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p class="col-md-4 mb-0">© 2025 Universidad de Alicante</p>


    <ul class="nav col-md-4 justify-content-end">
      <li class="nav-item"><router-link class="nav-link px-2" :to="{ name: 'Home' }">Home</router-link></li>
    </ul>
  </footer>


</template>

<style lang="scss" scoped></style>
