<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import ColorDisplay from '@/components/ColorDisplay.vue'
import PresetPicker from '@/components/PresetPicker.vue'
import RGBSliders from '@/components/RGBSliders.vue'
import type { RGBChannel, RGBColor } from '@/types/color'
import { ref } from 'vue'

const red = ref(128)
const green = ref(128)
const blue = ref(128)

function updateRGB(channel: RGBChannel, value: number) {
  const channelMap = {
    red: red,
    green: green,
    blue: blue,
  }
  channelMap[channel].value = value
}

function setPreset(color: RGBColor) {
  red.value = color.red
  green.value = color.green
  blue.value = color.blue
}
</script>

<template>
  <main class="container">
    <AppHeader :title="'RGB Color Picker'"></AppHeader>

    <ColorDisplay :red :green :blue />

    <RGBSliders :red :green :blue @update="updateRGB" />

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
