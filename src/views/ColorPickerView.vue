<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import ColorDisplay from '@/components/ColorDisplay.vue'
import PresetPicker from '@/components/PresetPicker.vue'
import RGBSliders from '@/components/RGBSliders.vue'
import { ref } from 'vue'

const r = ref(128)
const g = ref(128)
const b = ref(128)

function updateRGB(channel: 'r' | 'g' | 'b', value: number) {
  if (channel === 'r') r.value = value
  else if (channel === 'g') g.value = value
  else if (channel === 'b') b.value = value
}

function setPreset(color: { r: number; g: number; b: number }) {
  r.value = color.r
  g.value = color.g
  b.value = color.b
}
</script>

<template>
  <main class="container">
    <AppHeader :title="'RGB Color Picker'"></AppHeader>

    <ColorDisplay :r="r" :g="g" :b="b" />

    <RGBSliders :r="r" :g="g" :b="b" @update="updateRGB" />

    <PresetPicker @setPreset="setPreset" />
  </main>
</template>

<style scoped>
.container {
  max-width: 500px;
  margin: 2rem auto;
  padding: 1rem;
}
</style>
