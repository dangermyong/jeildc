<script setup>
import { ref, reactive } from "vue"
import Modal from '@/components/Modal.vue'

import { collection, addDoc } from "firebase/firestore"
import { db } from '@/js/firebase.js'

async function saveAtFirebase() {
  inputData.id = new Date().getTime().toString()
  const docRef = await addDoc(collection(db, 'reports'), {
    ...inputData
  })
  console.log("Document written with ID: ", docRef.id)
}

const inputData = reactive({
  id: '',
  date: new Date().toISOString().substring(0, 10),
  isDay: true,
  machineName: "",
  productName: "",
  totalCount: 0,
  badCount: 0,
  goodCount: 0,
});

const isModalOpen = ref(false);

function handleSubmit() {
  console.log(inputData)
}

const goodCount = computed(() => {
  inputData.goodCount = inputData.totalCount - inputData.badCount;
  return inputData.goodCount;
});
</script>

<template>
  <Modal @saveAtFirebase="saveAtFirebase" @xClicked="isModalOpen = false" :data="inputData" v-if="isModalOpen" />
  <div>
    <div class="md:col-span-2 md:mt-0">
      <form action="#" method="POST">
        <div class="shadow sm:overflow-hidden sm:rounded-md">
          <!-- input date -->
          <div class="space-y-1 bg-white px-4 py-3">
            <label for="date" class="block text-sm font-medium text-gray-700">Date</label>
            <input v-model="inputData.date" type="date" name="date" id="date"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
          </div>
          <!-- input Day or night-->
          <div class="space-y-1 bg-white px-6 py-1">
            <input type="radio" v-model="inputData.isDay" value="true" name="default-radio"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 mr-3">Day time
              <font-awesome-icon icon="fa-regular fa-sun" />
            </label>
            <input type="radio" v-model="inputData.isDay" value="false" name="default-radio"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Night time
              <font-awesome-icon icon="fa-regular fa-moon" />
            </label>
            {{ inputData.isDay }}
          </div>
          <!-- input product name-->
          <div class="space-y-1 bg-white px-4 py-3">
            <label for="text" class="block text-sm font-medium text-gray-700">Product Name</label>
            <input v-model="inputData.productName" type="text" name="product-name" id="product-name"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
          </div>
          <!-- input machine name-->
          <div class="space-y-1 bg-white px-4 py-3">
            <label for="text" class="block text-sm font-medium text-gray-700">Machine Name</label>
            <input v-model="inputData.machineName" type="text" name="machine-name" id="machine-name"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
          </div>
          <!-- input total count-->
          <div class="space-y-1 bg-white px-4 py-3">
            <label for="total-count" class="block text-sm font-medium text-gray-700">Total number</label>
            <input v-model="inputData.totalCount" id="total-count"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              name="total-count" type="number" placeholder="Insert total number" />
          </div>
          <!-- input bad count-->
          <div class="space-y-1 bg-white px-4 py-3">
            <label for="bad-count" class="block text-sm font-medium text-gray-700">Bad number</label>
            <input v-model="inputData.badCount" id="bad-count"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              name="bad-count" type="number" placeholder="Insert NG product number" />
          </div>
          <!-- computed good count-->
          <div class="space-y-1 bg-white px-4 py-3">
            <label for="number" class="block text-sm font-medium text-gray-700">Good number</label>
            <div class="p-2 mt-1 block w-full rounded-md outline outline-gray-200">
              {{ goodCount }}
            </div>
          </div>

          <!-- button -->
          <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
            <button @click.prevent="isModalOpen = true" type="submit"
              class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>

  <div class="hidden sm:block" aria-hidden="true">
    <div class="py-5">
      <div class="border-t border-gray-200"></div>
    </div>
  </div>
</template>
