<script setup>
import { reactive } from 'vue'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '@/js/firebase.js'
import { useRouter } from 'vue-router '

const router = useRouter()
const userInfo = reactive({
  email: '',
  password: '',
  name: ''
})

function register() {
  createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
    .then((userCredential) => {
      updateProfile(auth.currentUser, {
        displayName: userInfo.name
      }).then(() => {
        const user = userCredential.user
        console.log(user)
      }).catch((error) => {
        console.log('Something wrong with profile');
      });
      router.push('/report')
    })
    .catch((error) => {
      console.log(error.message)
      alert(error.message)
    })
}
</script>

<template>
  <div class="bg-gray-50">
    <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="w-full max-w-md space-y-8">
        <div>
          <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Register your account</h2>
        </div>
        <form class="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true">
          <div class="-space-y-px rounded-md shadow-sm">
            <div>
              <label for="email-address" class="sr-only">Email address</label>
              <input v-model="userInfo.email" id="email-address"
                class="mb-4 relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                autocomplete="email" name="email" placeholder="Email address" type="email" required>
            </div>
            <div>
              <label for="password" class="sr-only">Password</label>
              <input v-model="userInfo.password" id="password"
                class="mb-4 relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                autocomplete="current-password" name="password" placeholder="Password" type="password" required>
            </div>

            <div>
              <label for="name" class="sr-only">Password</label>
              <input v-model="userInfo.name" id="name"
                class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                name="name" placeholder="name" type="name" required>
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox"
                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
              <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
            </div>

            <div class="text-sm">
              <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
            </div>
          </div>

          <div>
            <button @click.prevent="register" type="submit"
              class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                <!-- Heroicon name: mini/lock-closed -->
                <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd"
                    d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                    clip-rule="evenodd" />
                </svg>
              </span>
              Join
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
