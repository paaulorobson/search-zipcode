<script setup lang="ts">
import { ref } from 'vue'
import FormInput from '../molecules/FormInput.vue'
import FormButton from '../molecules/FormButton.vue'

import { useZipCode } from '@/composables/useZipCode'
import FormLabel from '../molecules/FormLabel.vue'

const { fetchZipCode, snackbar } = useZipCode()

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
    <FormInput v-model="zipcode" placeholder="Digite um CEP..." id="cep" v-cep-mask />
    <FormButton
      @buttonClick="clearInput"
      variant="outlined"
      width="100%"
      class="mb-4"
      color="indigo-darken-4"
      :disabled="!zipcode"
      >Limpar
    </FormButton>
    <FormButton @buttonClick="sendZipCode" width="100%" color="indigo-darken-4" :disabled="!zipcode"
      >Enviar
    </FormButton>

    <v-snackbar v-model="snackbar" color="error">
      CEP não encontrado. Verifique se o CEP está correto e tente novamente.
      <template v-slot:actions>
        <v-btn color="white" variant="text" @click="snackbar = false">Fechar</v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
