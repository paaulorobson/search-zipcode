<script setup lang="ts">
import { ref, watch } from 'vue'
import FormInput from '../molecules/FormInput.vue'
import FormButton from '../molecules/FormButton.vue'

import { useZipCode } from '@/composables/useZipCode'
import FormLabel from '../molecules/FormLabel.vue'

const { fetchZipCode, snackbar } = useZipCode()

const zipcode = ref('')
const zipcodeError = ref(true)

const cepRules = [
  (value: string) => !!value || 'Campo obrigatório',
  (value: string) =>
    /^[0-9]{5}-[0-9]{3}$/.test(value) || 'CEP inválido. O formato correto é 99999-999'
]

const validateZipcode = () => {
  for (const rule of cepRules) {
    const result = rule(zipcode.value)
    if (typeof result === 'string') {
      zipcodeError.value = true
      return
    }
  }
  zipcodeError.value = false
}

const clearInput = () => {
  zipcode.value = ''
}

const sendZipCode = async () => {
  await fetchZipCode(zipcode.value)
  clearInput()
}

watch(zipcode, () => {
  validateZipcode()
})
</script>

<template>
  <v-form class="pa-6" ref="formRef">
    <h3 class="font-weight-bold pb-4">Consultar CEP</h3>
    <FormLabel label="CEP" for="cep" />
    <FormInput
      v-model="zipcode"
      placeholder="Digite um CEP..."
      id="cep"
      v-cep-mask
      :rules="cepRules"
      ref="cepField"
    />
    <FormButton
      @buttonClick="clearInput"
      variant="outlined"
      width="100%"
      class="mb-4"
      color="indigo-darken-4"
      :disabled="!zipcode"
      >Limpar
    </FormButton>
    <FormButton
      @buttonClick="sendZipCode"
      width="100%"
      color="indigo-darken-4"
      :disabled="zipcodeError"
      >Enviar
    </FormButton>

    <v-snackbar v-model="snackbar" color="error">
      CEP não encontrado. Verifique se o CEP está correto e tente novamente.
      <template v-slot:actions>
        <v-btn color="white" variant="text" @click="snackbar = false">Fechar</v-btn>
      </template>
    </v-snackbar>
  </v-form>
</template>
