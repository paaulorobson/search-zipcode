<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  color?: string
  label?: string
  disabled?: boolean
}>()
</script>

<template>
  <v-btn @click="$emit('buttonClick')" :color="props.color" :disabled="$props.disabled">{{
    props.label
  }}</v-btn>
</template>
