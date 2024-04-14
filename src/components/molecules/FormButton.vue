<script setup lang="ts">
import ButtonForm from '../atoms/BaseForm/ButtonForm.vue'
import { defineProps, defineEmits } from 'vue'

const props = defineProps(ButtonForm.props)
const emit = defineEmits(['buttonClick'])
const onClick = () => {
  emit('buttonClick')
}
</script>

<template>
  <ButtonForm v-bind="props" @buttonClick="onClick"><slot></slot></ButtonForm>
</template>
