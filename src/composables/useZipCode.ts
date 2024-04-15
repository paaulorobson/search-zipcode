import { ref } from 'vue'
import axios from 'axios'
import type AddressModel from '@/models/address.model'
import { useAddressStore } from '@/stores/useAddess'

export const useZipCode = () => {
  const addressData = ref<AddressModel>()
  const loading = ref(false)
  const error = ref<string | null>('')
  const snackbar = ref<boolean>(false)

  const { addAddress } = useAddressStore()

  const fetchZipCode = async (zipcode: string) => {
    loading.value = true
    error.value = null
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${zipcode}/json/`)
      addressData.value = response.data
      if (addressData.value) {
        addAddress(addressData.value)
      }
    } catch (error: any) {
      snackbar.value = true
    } finally {
      loading.value = false
    }
  }

  return {
    addressData,
    fetchZipCode,
    snackbar
  }
}
