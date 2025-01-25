<script setup lang="ts">
  import { reactive, watch } from 'vue'

  const persona = reactive({
    nombre: '',
    apellidos: '',
    email: ''
  });

  watch(persona, (nuevapersona) => {
    console.log(`Nombre cambiado a: ${nuevapersona.nombre}, Apellidos cambiados a: ${nuevapersona.apellidos}`);
  });


</script>

<template>
  <h1>Formulario</h1>
  <form class="needs-validation" novalidate>
    <div class="mb-3">
      <label for="nombre" class="form-label">Nombre</label>
      <input type="text" id="nombre" class="form-control" v-model="persona.nombre" required>
      <div class="invalid-feedback">
        Por favor, ingresa tu nombre.
      </div>
    </div>
    <div class="mb-3">
      <label for="apellidos" class="form-label">Apellidos</label>
      <input type="text" id="apellidos" class="form-control" v-model="persona.apellidos" required>
      <div class="invalid-feedback">
        Por favor, ingresa tus apellidos.
      </div>
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">Correo Electrónico</label>
      <input type="email" id="email" class="form-control" v-model="persona.email" required>
      <div class="invalid-feedback">
        Por favor, ingresa un correo electrónico válido.
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Enviar</button>
  </form>
</template>

<style lang="scss" scoped>
</style>
