import { defineStore } from 'pinia'
import { ref } from 'vue'
import type AddressModel from '@/models/address.model'

export const useAddressStore = defineStore('address', () => {
  const addresses = ref<AddressModel[]>([])

  const addAddress = (newAddress: AddressModel) => {
    addresses.value.push(newAddress)
  }

  const removeAddress = (index: number) => {
    addresses.value.splice(index, 1)
  }

  return { addresses, addAddress, removeAddress }
})
