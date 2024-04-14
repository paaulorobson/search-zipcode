import { ref } from 'vue'
import axios from 'axios'
import type AddressModel from '@/models/address.model'
import { useAddressStore } from '@/stores/useAddess'

export const useZipCode = () => {
  const addressData = ref<AddressModel[]>([])
  const loading = ref(false)
  const error = ref<string | null>('')

  const { addAddress } = useAddressStore()

  const fetchZipCode = async (zipcode: string) => {
    loading.value = true
    error.value = null
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${zipcode}/json/`)
      addressData.value = response.data
      console.log('endereco', addressData.value)
      if (addressData.value) {
        addAddress(addressData.value)
      }
    } catch (error: any) {
      error.value = error.message || 'Erro ao buscar CEP'
    } finally {
      loading.value = false
    }
  }

  return {
    addressData,
    fetchZipCode
  }
}
