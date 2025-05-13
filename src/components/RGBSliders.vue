<script setup lang="ts">
import RGBSlider from './RGBSlider.vue'
defineProps<{ r: number; g: number; b: number }>()
const emit = defineEmits<{
  (e: 'update', channel: 'r' | 'g' | 'b', value: number): void
}>()
</script>

<template>
  <div class="grid">
    <RGBSlider label="Red" color="crimson" :value="r" @change="(val) => emit('update', 'r', val)" />
    <RGBSlider
      label="Green"
      color="seagreen"
      :value="g"
      @change="(val) => emit('update', 'g', val)"
    />
    <RGBSlider
      label="Blue"
      color="royalblue"
      :value="b"
      @change="(val) => emit('update', 'b', val)"
    />
  </div>
</template>

<style scoped>
.grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
