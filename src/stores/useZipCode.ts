import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import type ZipCodeModel from '@/models/zip-code.model'

export const useZipCode = defineStore('zipcode', () => {
  const zipcodeData = ref<ZipCodeModel[]>([])
  const loading = ref(false)
  const error = ref<string | null>('')

  const fetchCep = async (cep: string) => {
    loading.value = true
    error.value = null
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      zipcodeData.value = response.data
    } catch (error: any) {
      error.value = error.message || 'Erro ao buscar CEP'
    } finally {
      loading.value = false
    }
  }

  return {
    fetchCep
  }
})
