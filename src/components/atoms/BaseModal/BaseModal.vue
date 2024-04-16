<script setup lang="ts">
import { computed } from 'vue'
import { useAddressStore } from '@/stores/useAddess'

const { state } = useAddressStore()

const isOpen = computed(() => state.isModalOpen)
</script>

<template>
  <v-dialog v-model="isOpen" max-width="600px">
    <v-card>
      <v-card-text class="text-center">
        <slot></slot>
        <!-- Slot para conteúdo customizado -->
      </v-card-text>
      <v-card-actions class="justify-end">
        <slot name="actions"></slot>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
