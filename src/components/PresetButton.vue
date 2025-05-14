<script setup lang="ts">
import type { RGBColor } from '@/types/color'

const props = defineProps<{
  label: string
  color: RGBColor
}>()

function getTextColor({ red, green, blue }: RGBColor) {
  const brightness = (red * 299 + green * 587 + blue * 114) / 1000
  return brightness > 128 ? '#000' : '#fff'
}
</script>

<template>
  <button
    class="preset"
    :style="{
      backgroundColor: `rgb(${props.color.red}, ${props.color.green}, ${props.color.blue})`,
      color: getTextColor(color),
    }"
  >
    {{ label }}
  </button>
</template>

<style scoped>
.preset {
  border: 1px solid lightgray;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  font-weight: 600;
  cursor: pointer;
  min-width: 105px;
}
</style>
