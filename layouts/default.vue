
<script lang="ts" setup>
import { useRouter } from "vue-router";
const router = useRouter()
const navigateToOpenConverstions = () => {
  router.push("/open-conversations")
}

const navigateToDashboard = () => {
  router.push("/")
}

const navigateToUsers = () => {
  router.push("/users")
}
</script>

<template>
  <div class="flex">
    <!-- Sidebar -->
    <aside class="w-64 bg-gray-900 text-white p-5 space-y-5 hidden md:block">
      <h2 class="text-lg font-semibold mb-3" @click="navigateToDashboard">Dashboard</h2>

      <!-- Open Conversations -->
      <div>
        <h3 class="text-sm font-medium uppercase opacity-70" @click="navigateToOpenConverstions">Open Conversations</h3>
      </div>

      <!-- Users -->
      <div>
        <h3 class="text-sm font-medium uppercase opacity-70" @click=navigateToUsers>Users</h3>
      </div>
    </aside>

    <!-- Content Area -->
    <div class="flex-1 p-5">
      <slot />
    </div>
  </div>
</template>

