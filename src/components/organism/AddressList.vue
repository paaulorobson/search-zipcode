<script setup lang="ts">
import { useAddressStore } from '@/stores/useAddess'
import ButtonForm from '../atoms/BaseForm/ButtonForm.vue'

const { addresses, removeAddress, toggleModal } = useAddressStore()
</script>

<template>
  <div class="pa-6">
    <h3 class="font-weight-bold pb-4 text-left">Consultados</h3>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">CEP:</th>
          <th class="text-left">Logradouro:</th>
          <th class="text-left">Bairro:</th>
          <th class="text-left">Cidade</th>
          <th class="text-left">UF</th>
          <th class="text-left">Ação:</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(address, index) in addresses" :key="index">
          <td>
            <p>{{ address.cep }}</p>
          </td>
          <td>
            <p>{{ address.logradouro }}</p>
          </td>
          <td>
            <p>{{ address.bairro }}</p>
          </td>
          <td>
            <p>{{ address.localidade }}</p>
          </td>
          <td>
            <p>{{ address.uf }}</p>
          </td>
          <td>
            <v-icon
              color="red-darken-1 cursor-pointer"
              icon="$delete"
              @click="removeAddress(index)"
            />
          </td>
        </tr>
      </tbody>
    </v-table>
    <template v-if="!addresses.length">
      <p class="pa-md-4 text-center">Nenhum resultado encontrado</p>
    </template>
    <hr class="mb-4 custom-color" />

    <v-row justify="center">
      <v-col cols="auto">
        <ButtonForm
          @buttonClick="toggleModal"
          variant="outlined"
          class="mb-4 text-center w-auto"
          color="indigo-darken-4"
          :disabled="!addresses.length"
          >Limpar
        </ButtonForm>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.custom-color {
  border-color: var(--v-border-opacity);
}
</style>
