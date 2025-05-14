<script setup lang="ts">
import type { NamedColor, RGBColor } from '@/types/color'
import PresetButton from './PresetButton.vue'

const emit = defineEmits<{
  (e: 'setPreset', color: RGBColor): void
}>()

const presets: NamedColor[] = [
  { name: 'Red', red: 255, green: 0, blue: 0 },
  { name: 'Green', red: 0, green: 255, blue: 0 },
  { name: 'Blue', red: 0, green: 0, blue: 255 },
  { name: 'Yellow', red: 255, green: 255, blue: 0 },
  { name: 'Purple', red: 128, green: 0, blue: 128 },
  { name: 'Cyan', red: 0, green: 255, blue: 255 },
  { name: 'White', red: 255, green: 255, blue: 255 },
  { name: 'Black', red: 0, green: 0, blue: 0 },
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
