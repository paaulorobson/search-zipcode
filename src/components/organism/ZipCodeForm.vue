<script setup lang="ts">
import { ref } from 'vue'
import FormInput from '../molecules/FormInput.vue'
import FormButton from '../molecules/FormButton.vue'

import { useZipCode } from '@/stores/useZipCode'
import FormLabel from '../molecules/FormLabel.vue'

const store = useZipCode()
const { fetchCep } = store

const cep = ref('')
</script>

<template>
  <FormLabel label="CEP" for="cep" />
  <FormInput v-model="cep" placeholder="Digite um CEP..." id="cep" />
  <FormButton label="Enviar" @buttonClick="fetchCep(cep)" />
</template>
