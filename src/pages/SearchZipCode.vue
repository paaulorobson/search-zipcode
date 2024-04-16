<script setup lang="ts">
import AddressList from '@/components/organism/AddressList.vue'
import ModalConfirm from '@/components/organism/ModalConfirm.vue'
import ZipCodeForm from '@/components/organism/ZipCodeForm.vue'
</script>

<template>
  <v-container class="fluid">
    <v-row justify="center">
      <v-col cols="12" sm="6">
        <div class="pa-2 ma-2 rounded-lg mx-auto content">
          <ZipCodeForm />
        </div>

        <div class="pa-2 mt-6 rounded-lg mx-auto content">
          <AddressList />
        </div>
      </v-col>
    </v-row>
    <ModalConfirm />
  </v-container>
</template>

<style scoped>
.content {
  background-color: var(--vt-c-white);
}
</style>
