<script setup lang="ts">
import { inject, ref, onMounted } from "vue";
import useEventBus from "../../servicios/useEventBus";

const { on } = useEventBus();

const props = defineProps<{ tutorias: string }>();
const respuestaAlumno = ref('');

const mensajeColegio = inject<string>('key');
const mensajeDirector = ref('');

const emit = defineEmits(['responderAlumno']);

on("mensaje", (mensaje: string) => {
    console.log("mensaje", mensaje);
    mensajeDirector.value = mensaje;
});

onMounted(() => {
    console.log("mensajeColegio", mensajeColegio);
});

const responderAlumno = () => {
    emit('responderAlumno', respuestaAlumno);
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

<div class="alert alert-danger mt-2" role="alert" v-if="mensajeColegio">
    Mensaje del colegio: {{ mensajeColegio }}
</div>

<div class="alert alert-info mt-2" role="alert" v-if="mensajeDirector">
    Mensaje del director: {{ mensajeDirector }}
</div>

       

        

       
    </div>

</template>


<style scoped lang="scss"></style>
