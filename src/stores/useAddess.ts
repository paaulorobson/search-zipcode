import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import type AddressModel from '@/models/address.model'

export const useAddressStore = defineStore('address', () => {
  const addresses = ref<AddressModel[]>([])
  const state = reactive({
    isModalOpen: false
  })

  const addAddress = (newAddress: AddressModel) => {
    addresses.value.push(newAddress)
  }

  const removeAddress = (index: number) => {
    addresses.value.splice(index, 1)
  }

  const clearAddressesList = () => {
    addresses.value.length = 0
    state.isModalOpen = false
  }

  const toggleModal = () => {
    state.isModalOpen = !state.isModalOpen
  }

  return { addresses, addAddress, removeAddress, clearAddressesList, state, toggleModal }
})
