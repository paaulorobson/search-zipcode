<template>
  <div class="main-loading-overlay">
    <v-progress-circular
      class="loading-progress"
      color="#1F3B66"
      indeterminate
      :size="75"
    ></v-progress-circular>
  </div>
</template>

<style scoped>
.main-loading-overlay {
  position: absolute;
  top: 1rem;
  left: 0;
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
  z-index: 9999;
}

.v-progress-circular {
  position: sticky;
  top: 5rem;
  bottom: 5rem;
}
</style>
