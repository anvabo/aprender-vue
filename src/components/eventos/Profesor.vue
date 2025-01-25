<script setup lang="ts">
import { inject, ref, onMounted } from "vue";
import useEventBus from "@/services/useEventBus";

const { on } = useEventBus();

const props = defineProps<{ tutorias: string }>();
const respuestaAlumno = ref('');

const mensajeColegio = inject<string>('key');
const mensajeDirector = ref('');

const emit = defineEmits(['responderAlumno']);

on("mensaje", (mensajedirector: string) => {
    console.log("mensaje", mensajedirector);
    mensajeDirector.value = mensajedirector;
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
        <h2>Profesor</h2>

        <p>
            Tutorías del alumno: {{ props.tutorias }}
        </p>

        <div class="row">
            <div class="row g-3 align-items-center">
                <div class="col-auto">
                    <label for="respuestaprofesor" class="col-form-label">Respuesta profesor</label>
                </div>
                <div class="col-auto">
                    <input type="text" id="respuestaprofesor" v-model="respuestaAlumno" class="form-control" aria-describedby="descripcionrespuestaprofesor">
                </div>
                <div class="col-auto">
                    <span id="descripcionrespuestaprofesor" class="form-text">
                        Respuesta del profesor a la tutía del alumno.
                    </span>
                </div>
                <div class="col-auto">
                <button class="btn btn-primary" @click="responderAlumno">Responde Alumno</button>
            </div>
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
