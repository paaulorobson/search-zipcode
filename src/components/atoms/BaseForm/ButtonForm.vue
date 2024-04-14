<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  color?: string
  disabled?: boolean
  variant?: 'text' | 'outlined' | 'flat' | 'elevated' | 'tonal' | 'plain' | undefined
}>()
</script>

<template>
  <v-btn
    @click="$emit('buttonClick')"
    :color="props.color"
    :variant="props.variant"
    :disabled="props.disabled"
    class="rounded-lg"
    ><slot></slot
  ></v-btn>
</template>

<style scoped></style>
