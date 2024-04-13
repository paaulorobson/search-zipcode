<script setup lang="ts">
import { defineProps } from 'vue'
import InputForm from '../atoms/BaseForm/InputForm.vue'

const props = defineProps(InputForm.props)
</script>

<template>
  <InputForm v-bind="props" />
</template>
