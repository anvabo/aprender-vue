<script setup lang="ts">
import { defineProps, defineModel } from 'vue'

defineOptions({
  inheritAttrs: false
})

const props = defineProps<{ pregunta: string, descripcion: string }>();
const respuesta = defineModel()
</script>


<template>
    <div class="border border-primary p-3">
        <h2>Cuestionario</h2>

        <div class="row">
            <div class="row g-3 align-items-center">
                <div class="col-auto">
                    <label :for="$attrs.id" class="col-form-label">{{ props.pregunta }}</label>
                </div>
                <div class="col-auto">
                    <input type="text" v-bind="$attrs" v-model="respuesta" class="form-control"
                        :aria-describedby="$attrs.id + 'DESCRIPCION'">
                </div>
                <div class="col-auto">
                    <span :id="$attrs.id + 'DESCRIPCION'" class="form-text">
                        {{ props.descripcion }}
                    </span>
                </div>
            </div>
        </div>
    </div>

</template>


<style scoped lang="scss">
</style>
