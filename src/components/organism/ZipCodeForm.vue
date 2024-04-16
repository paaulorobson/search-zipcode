<script setup lang="ts">
import { ref, watch } from 'vue'

import { useZipCode } from '@/composables/useZipCode'
import InputForm from '../atoms/BaseForm/InputForm.vue'
import LabelForm from '../atoms/BaseForm/LabelForm.vue'
import ButtonForm from '../atoms/BaseForm/ButtonForm.vue'

const { fetchZipCode, snackbar, loading } = useZipCode()

const zipcode = ref('')
const zipcodeError = ref(true)
const form = ref<HTMLFormElement | null>(null)

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

const sendZipCode = () => {
  fetchZipCode(zipcode.value).then(() => {
    clearInput(), reset()
  })
}

const reset = () => {
  if (form.value) {
    form.value.resetValidation()
  }
}

watch(zipcode, () => {
  validateZipcode()
})
</script>

<template>
  <v-form class="pa-6 text-left" @submit.prevent="sendZipCode" ref="form">
    <h3 class="font-weight-bold pb-4">Consultar CEP</h3>
    <LabelForm label="CEP" for="cep" />
    <InputForm
      v-model="zipcode"
      placeholder="Digite um CEP..."
      id="cep"
      v-cep-mask
      :rules="cepRules"
      ref="cepField"
      maxlength="9"
    />
    <ButtonForm
      @buttonClick="clearInput"
      variant="outlined"
      width="100%"
      class="mb-4"
      color="indigo-darken-4"
      :disabled="!zipcode"
      >Limpar
    </ButtonForm>
    <ButtonForm
      type="submit"
      width="100%"
      color="indigo-darken-4"
      :disabled="zipcodeError"
      :loading="loading"
      >Enviar
    </ButtonForm>

    <v-snackbar v-model="snackbar" color="error">
      CEP não encontrado. Verifique se o CEP está correto e tente novamente.
      <template v-slot:actions>
        <v-btn color="white" variant="text" @click="snackbar = false">Fechar</v-btn>
      </template>
    </v-snackbar>
  </v-form>
</template>
