<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  color?: string
  disabled?: boolean
  variant?: 'text' | 'outlined' | 'flat' | 'elevated' | 'tonal' | 'plain' | undefined
  size?: string
  loading?: boolean
}>()
</script>

<template>
  <v-btn
    @click="$emit('buttonClick')"
    :color="props.color"
    :variant="props.variant"
    :disabled="props.disabled"
    :size="props.size"
    class="rounded-lg"
    :loading="loading"
    ><slot></slot
  ></v-btn>
</template>

<style scoped></style>
