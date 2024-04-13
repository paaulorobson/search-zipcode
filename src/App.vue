<script setup lang="ts">
import { useZipCode } from './stores/useZipCode'

const store = useZipCode()
const { fetchCep } = store
</script>

<template>
  <v-app>
    <v-main>
      <h1>Busca CEP</h1>
      <v-btn prepend-icon="$vuetify" variant="outlined" @click="fetchCep('65054005')">
        Buscar
      </v-btn>
    </v-main>
  </v-app>
</template>

<style scoped></style>
