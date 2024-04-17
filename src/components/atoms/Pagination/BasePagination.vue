<script setup lang="ts">
import { defineModel, defineProps } from 'vue'

const props = defineProps<{
  length?: number
  rounded?: string
}>()

const page = defineModel({ required: true, type: Number })
</script>
<template>
  <v-pagination v-model="page" :length="props.length" :rounded="props.rounded"></v-pagination>
</template>
