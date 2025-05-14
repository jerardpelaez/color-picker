<script setup lang="ts">
import type { RGBChannel, RGBColor } from '@/types/color'
import RGBSlider from './RGBSlider.vue'

defineProps<RGBColor>()

const emit = defineEmits<{
  (e: 'update', channel: RGBChannel, value: number): void
}>()
</script>

<template>
  <div class="grid">
    <RGBSlider
      label="Red"
      color="crimson"
      :value="red"
      @change="(val) => emit('update', 'red', val)"
    />
    <RGBSlider
      label="Green"
      color="seagreen"
      :value="green"
      @change="(val) => emit('update', 'green', val)"
    />
    <RGBSlider
      label="Blue"
      color="royalblue"
      :value="blue"
      @change="(val) => emit('update', 'blue', val)"
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
