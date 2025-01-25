<script setup lang="ts">
import { provide, ref } from "vue";

import Alumno from '@/components/eventos/Alumno.vue';
import Director from '@/components/eventos/Director.vue';

const mensajeColegio = ref('Mensaje a profesores y alumnos (appVue)');
provide('key', mensajeColegio)


</script>

<template>
    <h1>Ejemplo de eventos entre componentes</h1>

    <Alumno />

    <Director class="mt-5" />

    <h2 class="mt-5">Colegio</h2>

    <div class="row g-3 align-items-center">
        <div class="col-2">
            <label for="mensajecolegio" class="col-form-label">Mensaje del colegio</label>
        </div>
        <div class="col-7">
            <input type="text" id="mensajecolegio" class="form-control" aria-describedby="descripcionmnensajecolegio" v-model="mensajeColegio">
        </div>
        <div class="col-3">
            <span id="descripcionmnensajecolegio" class="form-text">
                Texto que se envía a profsores y alumnos
            </span>
        </div>
    </div>

</template>

<style scoped lang="scss"></style>
