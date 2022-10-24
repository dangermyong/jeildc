<template>
  <teleport to='#modal'>
    <div class="modal-bg fixed top-0 left-0 w-full h-full bg-gray-100 bg-opacity-50 flex justify-center items-center">
      <div ref="modal" class="modal relative bg-white bg-opacity-100 px-20 py-20 rounded-md drop-shadow-2xl ">
        <button @click="$emit('xClicked')" class="absolute top-2 right-4 bg-none cursor-pointer">X</button>
        <div v-if="!storeState.isLoading">
          <div class="flex flex-col">
            <DataLists :data="data" />
          </div>
          <div class="mt-10">
            <button @click.prevent="emit('xClicked')" type="submit"
              class="inline-flex justify-center rounded-md border border-transparent bg-red-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 mx-2">cancel
            </button>
            <button @click.prevent="confirmClicked" type="submit"
              class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Confirm
            </button>
          </div>
        </div>
        <Loadings v-else />
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { onClickOutside } from '@vueuse/core'
import DataLists from './DataLists.vue'
import { useStoreState } from '@/stores/storeState.js'
import Loadings from './Loadings.vue'

const storeState = useStoreState()
const modal = ref(null)
const props = defineProps({
  data: {
    type: Object,
    default: {}
  }
})

function confirmClicked() {
  storeState.toggleLoading()
  emit('saveAtFirebase')
}
const emit = defineEmits([
  'xClicked', 'saveAtFirebase'
])


onClickOutside(modal, () => {
  emit('xClicked')
})

</script>

<style scoped>

</style>
