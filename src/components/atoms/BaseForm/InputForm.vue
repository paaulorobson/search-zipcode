<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue'

const props = defineProps<{
  label?: string
  placeholder?: string
  value?: string | number
  rules?: string[]
  inputId?: string
}>()

const emit = defineEmits(['update:value'])
const modelValue = ref(props.value)
const emitValue = (val: string | number) => {
  modelValue.value = val
  emit('update:value', val)
}
</script>

<template>
  <v-text-field
    v-model="modelValue"
    :label="label"
    :placeholder="placeholder"
    :rules="rules"
    :id="inputId"
    @input="emitValue"
    variant="outlined"
    clearable
    height="30"
  />
</template>
