<script setup lang="ts">
import { useAuthStore } from "~/stores/authStore";
const store = useAuthStore();

const logout = () => {
  store.signout()
  window.location.reload()
} 
</script>
<template>
  <div class="flex justify-end items-end underline cursor-pointer font-bold text-secondary" @click=logout>
    Sign Out
  </div>
  <div class="flex flex-1 flex-col gap-4 p-5">
    <div class="grid auto-rows-min gap-4 md:grid-cols-3">
      <div class="aspect-video rounded-xl bg-primary" />
      <div class="aspect-video rounded-xl bg-primary" />
      <div class="aspect-video rounded-xl bg-primary" />
    </div>
    <div class="min-h-[100vh] flex-1 rounded-xl bg-primary md:min-h-min" />
  </div>
</template>
