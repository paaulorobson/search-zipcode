<script setup lang="ts">
import { ref } from 'vue'
import FormInput from '../molecules/FormInput.vue'
import FormButton from '../molecules/FormButton.vue'

import { useZipCode } from '@/composables/useZipCode'
import FormLabel from '../molecules/FormLabel.vue'

const { fetchZipCode } = useZipCode()

const zipcode = ref<string>('')

const clearInput = () => {
  zipcode.value = ''
}

const sendZipCode = async () => {
  await fetchZipCode(zipcode.value)
  clearInput()
}
</script>

<template>
  <div class="pa-6">
    <h3 class="font-weight-bold pb-4">Consultar CEP</h3>
    <FormLabel label="CEP" for="cep" />
    <FormInput v-model="zipcode" placeholder="Digite um CEP..." id="cep" />
    <FormButton
      @buttonClick="clearInput"
      variant="outlined"
      width="100%"
      class="mb-4"
      color="indigo-darken-4"
      >Limpar
    </FormButton>
    <FormButton @buttonClick="sendZipCode" width="100%" color="indigo-darken-4">Enviar </FormButton>
  </div>
</template>
