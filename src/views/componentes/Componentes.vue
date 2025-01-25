<script setup lang="ts">
import { ref } from 'vue';
import Alumno from '@/components/componentes/Alumno.vue';
import Cuestionario from '@/components/componentes/Cuestionario.vue';

const respuesta = ref('');
</script>

<template>
    <h1>Ejemplo de componentes</h1>

    <Alumno>
        <template #aviso>
            <p>El alumno pregunta al profesor por la tutoría (modificado por el slot)</p>
        </template>
    </Alumno>

    <div class="mt-5">
        <Cuestionario pregunta="¿Cuál es tu nombre?" id="nombre" v-model="respuesta" descripcion="Escribe tu nombre">
        </Cuestionario>
    </div>
    <p>La respuesta es: {{ respuesta }}</p>

</template>

<style scoped lang="scss"></style>
