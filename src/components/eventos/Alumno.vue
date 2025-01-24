<script setup lang="ts">

import { ref } from 'vue'
import Profesor from './Profesor.vue';

const tutoriaProfesor = ref('¿Cuándo es tu tutoría?');
const respuestaProfesor = ref('');

const mostrarRespuesta = (respuesta: string) => {
    respuestaProfesor.value = respuesta;
};
</script>


<template>
    <div class="border border-primary p-3">
        <h1>Alumno</h1>

        <p class="mb-2">
            Tutorías al profesor: {{ tutoriaProfesor }}
        </p>

        <Profesor :tutorias="tutoriaProfesor" @responderAlumno="mostrarRespuesta" />

        <p class="mt-2">
            Respuesta del profesor: {{ respuestaProfesor }}
        </p>
    </div>
</template>


<style scoped lang="scss"></style>
