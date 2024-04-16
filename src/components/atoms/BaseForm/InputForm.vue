<script setup lang="ts">
import { defineProps, defineModel } from 'vue'

const props = defineProps<{
  label?: string
  placeholder?: string
  rules?: ((value: string) => true | string)[]
  inputId?: string
}>()

const value = defineModel()
</script>

<template>
  <v-text-field
    v-model="value"
    :label="props.label"
    :placeholder="props.placeholder"
    :rules="props.rules"
    :id="props.inputId"
    variant="outlined"
    clearable
    height="30"
  />
</template>
