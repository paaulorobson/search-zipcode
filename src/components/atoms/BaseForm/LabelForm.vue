<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  label?: string
  inputId?: string
}>()
</script>

<template>
  <label :for="inputId" class="field-label"> {{ props.label }}</label>
</template>

<style scoped>
.field-label {
  font-size: 0.875rem;
  font-weight: 600;
}
</style>
