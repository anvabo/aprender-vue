<script setup lang="ts">

</script>


<template>
    <div class="border border-primary p-3">
        <h2>Alumno</h2>

        <div class="alert alert-info" role="alert">
            <slot name="aviso">
                <p>El alumno pregunta al profesor por la tutoría</p>
            </slot>
        </div>  

        <p>
        <slot name="contenido">
            Aquí explicamos cómo se pregunta al profesor por la tutoría
        </slot>
        </p>
    </div>
</template>


<style scoped lang="scss"></style>
