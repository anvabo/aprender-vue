

<script setup lang="ts">
import { provide, ref } from "vue";

import useEventBus from "@/services/useEventBus";
const { emit } = useEventBus();

const mensajeDirector = ref('Mensaje a profesores');

const mensajeTodos = () => {
    emit('mensaje', mensajeDirector.value)
    console.log("mensajeDirector", mensajeDirector.value)
  }

</script>


<template>
    <div class="border border-secondary p-3">
        <h2>Director</h2>

        <div class="row g-3 align-items-center">
            <div class="col-auto">
                <label for="tutoriaalumno" class="col-form-label">Mensaje a los profesores</label>
            </div>
            <div class="col-auto">
                <input type="text" v-model="mensajeDirector" id="tutoriaalumno" class="form-control" aria-describedby="descripciontutoriaalumno">
            </div>
            <div class="col-auto">
                <span id="descripciontutoriaalumno" class="form-text">
                    Texto a los profesores
                </span>
            </div>
            <div class="col-auto">
                <button class="btn btn-primary" @click="mensajeTodos">Enviar</button>
            </div>
        </div>

    </div>

</template>


<style scoped lang="scss"></style>
