

<script setup lang="ts">
import { inject, ref } from "vue";

const props = defineProps<{ tutorias: string }>();
const respuestaAlumno = ref('');

const emit = defineEmits(['responderAlumno']);

const responderAlumno = () => {
emit('responderAlumno', respuestaAlumno);

const mensajeDirector = inject<string>('mensaje');
};

</script>


<template>
    <div class="border border-secondary p-3">
        <h1>Profesor</h1>

        <p>
            Tutorías del alumno: {{ props.tutorias }}
        </p>

        <div class="row">
            <div class="col-6">
                <input type="text" v-model="respuestaAlumno" class="form-control" placeholder="Respuesta del profesor">
            </div>
            <div class="col-6">
                <button class="btn btn-primary" @click="responderAlumno">Responde Alumno</button>
            </div>

        </div>

        <p>
            Mensaje del director: {{ mensajeDirector }}
        </p>

        <div class="alert alert-info mt-3" v-if="mensajeDirector">
            {{ mensajeDirector }}
        </div>
    </div>

</template>


<style scoped lang="scss"></style>
