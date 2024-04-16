import { ref, reactive } from 'vue'
import axios from 'axios'
import type AddressModel from '@/models/address.model'
import { useAddressStore } from '@/stores/useAddess'

export const useZipCode = () => {
  const state = reactive({
    addressData: {} as AddressModel
  })

  const loading = ref<boolean>(false)

  const snackbar = ref<boolean>(false)

  const { addAddress } = useAddressStore()

  const fetchZipCode = async (zipcode: string): Promise<void> => {
    loading.value = true

    try {
      const response = await axios.get(`https://viacep.com.br/ws/${zipcode}/json/`)

      if (!response.data?.erro) {
        state.addressData = response.data

        addAddress(state.addressData)
      } else {
        snackbar.value = true
      }
    } catch (error: any) {
      snackbar.value = true
    } finally {
      loading.value = false
    }
  }

  return {
    fetchZipCode,
    snackbar,
    loading,
    state
  }
}
