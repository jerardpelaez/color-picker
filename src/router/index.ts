import { createRouter, createWebHistory } from 'vue-router'
import ColorPickerView from '../views/ColorPickerView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'color-picker',
      component: ColorPickerView,
    },
  ],
})

export default router
