<script setup lang="ts">
    import Alumno from '../../components/componentes/Alumno.vue';
</script>

<template>
    <h1>Ejemplo de componentes</h1>

    <Alumno>
        <template #aviso>
            <p>El alumno pregunta al profesor por la tutoría (modificado por el slot)</p>
        </template> 
    </Alumno>  

</template>

<style scoped lang="scss">

</style>
