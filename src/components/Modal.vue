<template>
  <teleport to='#modal'>
    <div class="modal-bg fixed top-0 left-0 w-full h-full bg-gray-100 bg-opacity-50 flex justify-center items-center">
      <div ref="modal" class="modal relative bg-white bg-opacity-100 px-20 py-20 rounded-md drop-shadow-2xl ">
        <button @click="$emit('xClicked')" class="absolute top-2 right-4 bg-none cursor-pointer">X</button>
        <div class="flex flex-col">
          <h1 class="font-bold mb-3">Check Your Input</h1>
          <span class="p-1">Date: {{ data.date }}</span>
          <span class="p-1">Time: {{ data.isDay ? 'Day' : 'Night' }}</span>
          <span class="p-1">Product: {{ data.productName }}</span>
          <span class="p-1">Machine: {{ data.machineName }}</span>
          <span class="p-1">Total: {{ data.totalCount }}</span>
          <span class="p-1">Good: {{ data.goodCount }}</span>
          <span class="p-1">NG: {{ data.badCount }}</span>
        </div>
        <div class="mt-10">
          <button @click.prevent="emit('xClicked')" type="submit"
            class="inline-flex justify-center rounded-md border border-transparent bg-red-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 mx-2">cancel
          </button>
          <button @click.prevent="" type="submit"
            class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Save
          </button>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { onClickOutside } from '@vueuse/core'

const modal = ref(null)
const props = defineProps({
  data: {
    type: Object,
    default: {}
  }
})

const emit = defineEmits([
  'xClicked'
])


onClickOutside(modal, () => {
  emit('xClicked')
})

</script>

<style scoped>

</style>
