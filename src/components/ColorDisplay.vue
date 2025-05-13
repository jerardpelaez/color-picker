<script setup lang="ts">
defineProps<{ r: number; g: number; b: number }>()
</script>

<template>
  <div class="preview" :style="{ backgroundColor: `rgb(${r}, ${g}, ${b})` }" />
  <p>
    RGB(<code>{{ r }}, {{ g }}, {{ b }}</code
    >)
  </p>
</template>

<style scoped>
.preview {
  height: 100px;
  border-radius: 0.5rem;
  border: 1px solid var(--pico-border-color);
  margin-bottom: 0.5rem;
}
</style>
