import { defineStore } from 'pinia'

export const useOpenDrawer = defineStore('openDrawer', {
  state: () => ({
    isDrawerOpen: false,
  }),
  actions: {
    toggleDrawer() {
      this.isDrawerOpen = !this.isDrawerOpen
    },
    openDrawer() {
      this.isDrawerOpen = true
    },
    closeDrawer() {
      this.isDrawerOpen = false
    },
  },
})