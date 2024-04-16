<script setup lang="ts">
import BaseModal from '../atoms/BaseModal/BaseModal.vue'
import ButtonForm from '../atoms/BaseForm/ButtonForm.vue'
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
        <ButtonForm
          @buttonClick="toggleModal"
          variant="outlined"
          size="small"
          color="indigo-darken-4"
          >Cancelar
        </ButtonForm>
        <ButtonForm @buttonClick="clearAddressesList" size="small" color="indigo-darken-4"
          >Confirmar
        </ButtonForm>
      </template>
    </BaseModal>
  </div>
</template>
