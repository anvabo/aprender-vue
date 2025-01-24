

<script setup lang="ts">
import { provide, ref } from "vue";

const mensajeDirector = ref('');

const mensajeTodos = () => {
    provide('mensaje', mensajeDirector);
};

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
