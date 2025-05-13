<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ red: number; green: number; blue: number }>()

const isWhite = computed(() => {
  return props.red == 255 && props.green == 255 && props.blue == 255
})
</script>

<template>
  <div
    class="preview"
    :style="{ backgroundColor: `rgb(${props.red}, ${props.green}, ${props.blue})` }"
    :class="{ border: isWhite }"
  />
  <p class="rgb">RGB({{ props.red }}, {{ props.green }}, {{ props.blue }})</p>
</template>

<style scoped>
.preview {
  height: 100px;
  border-radius: 0.5rem;
  border: 1px solid var(--pico-border-color);
  margin-bottom: 0.5rem;
}

.rgb {
  text-align: center;
  font-weight: bold;
}

.border {
  border: 1px solid lightgray;
}
</style>
