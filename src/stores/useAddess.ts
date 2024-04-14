import { defineStore } from 'pinia'
import { ref } from 'vue'
import type AddressModel from '@/models/address.model'

export const useAddressStore = defineStore('address', () => {
  const addresses = ref<AddressModel[]>([])

  function addAddress(newAddress: AddressModel) {
    addresses.value.push(newAddress)
  }

  return { addresses, addAddress }
})
