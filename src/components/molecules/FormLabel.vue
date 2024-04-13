<script setup lang="ts">
import { defineProps } from 'vue'
import LabelForm from '../atoms/BaseForm/LabelForm.vue'

const props = defineProps(LabelForm.props)
</script>

<template>
  <LabelForm v-bind="props" />
</template>
