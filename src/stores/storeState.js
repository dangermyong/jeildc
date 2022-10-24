import { defineStore } from 'pinia'

export const useStoreState = defineStore('storeState', {
  state: () => {
    return {
      isLoading: false
    }
  },
  actions: {
    toggleLoading() {
      this.isLoading = !this.isLoading
    }
  }
})
