<script setup lang="ts">
const props = defineProps<{
  label: string
  color: string
  value: number
}>()

const emit = defineEmits<{
  (e: 'change', value: number): void
}>()

function handleInput(event: Event) {
  const target = event.target as HTMLInputElement | null
  if (target) {
    emit('change', +target.value)
  }
}
</script>

<template>
  <label>
    {{ props.label }}: {{ props.value }}
    <input type="range" min="0" max="255" :value="value" class="slider" @input="handleInput" />
  </label>
</template>
