<script setup lang="ts">
import BaseModal from '../atoms/BaseModal/BaseModal.vue'
import FormButton from '../molecules/FormButton.vue'
import { useAddressStore } from '@/stores/useAddess'

const { toggleModal, clearAddressesList } = useAddressStore()
</script>

<template>
  <div>
    <BaseModal>
      <template #default>
        <v-icon icon="$alert" color="warning" size="x-large" />
        <h3 class="font-weight-medium">Atenção!</h3>
        <p>Ao clicar em Confirmar todos os items da lista serão excluidos!</p>
      </template>
      <template #actions>
        <FormButton
          @buttonClick="toggleModal"
          variant="outlined"
          size="small"
          color="indigo-darken-4"
          >Cancelar
        </FormButton>
        <FormButton
          @buttonClick="clearAddressesList"
          variant="default"
          size="small"
          color="indigo-darken-4"
          >Confirmar
        </FormButton>
      </template>
    </BaseModal>
  </div>
</template>
