

<script setup lang="ts">
import { provide, ref } from "vue";

import useEventBus from "../../servicios/useEventBus";
const { emit } = useEventBus();

const mensajeDirector = ref('Mensaje a profesores y alumnos');

const mensajeTodos = () => {
    emit('mensaje', mensajeDirector.value)
    console.log("mensajeDirector", mensajeDirector.value)
  }

</script>


<template>
    <div class="border border-secondary p-3">
        <h1>Director</h1>


        <div class="row">
            <div class="col-6">
                <input type="text" v-model="mensajeDirector" class="form-control" placeholder="Mensaje a todo el colegio">
            </div>
            <div class="col-6">
                <button class="btn btn-primary" @click="mensajeTodos">Enviar</button>
            </div>

        </div>
    </div>

</template>


<style scoped lang="scss"></style>
