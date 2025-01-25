<script setup lang="ts">

import { ref,inject } from 'vue'
import Profesor from './Profesor.vue';


const tutoriaProfesor = ref('¿Cuándo es tu tutoría?');
const respuestaProfesor = ref('');
const mensajeColegio = inject<string>('key');


const mostrarRespuesta = (respuesta: string) => {
    respuestaProfesor.value = respuesta;
};
</script>


<template>
    <div class="border border-primary p-3">
        <h2>Alumno</h2>

        <p class="mb-2">
            Tutorías al profesor: {{ tutoriaProfesor }}
        </p>

        <Profesor :tutorias="tutoriaProfesor" @responderAlumno="mostrarRespuesta" />

        <p class="mt-2">
            Respuesta del profesor: {{ respuestaProfesor }}
        </p>

        <div class="alert alert-danger mt-2" role="alert" v-if="mensajeColegio">
            Mensaje del colegio: {{ mensajeColegio }}
        </div>
    </div>
</template>


<style scoped lang="scss"></style>
