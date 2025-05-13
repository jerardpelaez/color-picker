<script setup lang="ts">
import PresetButton from './PresetButton.vue'
const emit = defineEmits<{
  (e: 'setPreset', color: { r: number; g: number; b: number }): void
}>()

const presets = [
  { name: 'Red', r: 255, g: 0, b: 0 },
  { name: 'Green', r: 0, g: 255, b: 0 },
  { name: 'Blue', r: 0, g: 0, b: 255 },
  { name: 'Yellow', r: 255, g: 255, b: 0 },
  { name: 'Purple', r: 128, g: 0, b: 128 },
  { name: 'Cyan', r: 0, g: 255, b: 255 },
  { name: 'White', r: 255, g: 255, b: 255 },
  { name: 'Black', r: 0, g: 0, b: 0 },
]
</script>

<template>
  <section>
    <h5>Presets</h5>
    <div class="preset-grid">
      <PresetButton
        v-for="preset in presets"
        :key="preset.name"
        :label="preset.name"
        :color="preset"
        @click="() => emit('setPreset', preset)"
      />
    </div>
  </section>
</template>

<style scoped>
.preset-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
</style>
