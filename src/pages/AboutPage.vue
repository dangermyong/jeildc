<script setup>

</script>

<template>
  <div>
    <div class="mt-5 md:col-span-2 md:mt-0">
      <form action="#" method="POST">
        <div class="shadow sm:overflow-hidden sm:rounded-md">
          <!-- input -->
          <div class="space-y-1 bg-white px-4 py-3 sm:p-5">
            <label for="street-address" class="block text-sm font-medium text-gray-700">Date</label>
            <input type="date" name="street-address" id="street-address" autocomplete="street-address"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
          </div>
          <!-- input -->
          <div class="space-y-1 bg-white px-4 py-3 sm:p-5">
            <label for="street-address" class="block text-sm font-medium text-gray-700">Street address</label>
            <input type="text" name="street-address" id="street-address" autocomplete="street-address"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
          </div>
          <!-- input -->
          <div class="space-y-1 bg-white px-4 py-5 sm:p-5">
            <label for="street-address" class="block text-sm font-medium text-gray-700">Street address</label>
            <input type="text" name="street-address" id="street-address" autocomplete="street-address"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
          </div>
          <!--textarea  -->
          <div class="space-y-6 bg-white px-4 py-5 sm:p-5">
            <div>
              <label for="about" class="block text-sm font-medium text-gray-700">About</label>
              <div class="mt-1">
                <textarea id="about" name="about" rows="3"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="you@example.com"></textarea>
              </div>
              <p class="mt-2 text-sm text-gray-500">input</p>
            </div>
          </div>
          <!-- button -->
          <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
            <button type="submit"
              class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Save</button>
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
