<script setup lang="ts">
const prop = defineProps<{
  title: string
}>()

const emit = defineEmits<{
  (e: 'iconClick'): void
  (e: 'titleClick'): void
}>()
</script>

<template>
  <header class="header">
    <div class="container-fluid">
      <div class="header-content">
        <font-awesome-icon icon="paint-roller" />
        <h1 class="header-title" @click="emit('titleClick')">
          {{ prop.title }}
        </h1>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  padding: 1rem 0;
  position: sticky;
  top: 0;

  .container-fluid {
    padding: 0 var(--spacing);

    .header-content {
      display: flex;
      align-items: center;
      gap: 1rem;

      .header-title {
        margin: 0;
        font-size: 1.25rem;
        font-weight: 600;
      }
    }
  }
}
</style>
