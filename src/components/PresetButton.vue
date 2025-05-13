<script setup lang="ts">
const props = defineProps<{
  label: string
  color: { r: number; g: number; b: number }
}>()

function getTextColor({ r, g, b }: { r: number; g: number; b: number }) {
  const brightness = (r * 299 + g * 587 + b * 114) / 1000
  return brightness > 128 ? '#000' : '#fff'
}
</script>

<template>
  <button
    class="preset"
    :style="{
      backgroundColor: `rgb(${props.color.r}, ${props.color.g}, ${props.color.b})`,
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
}
</style>
