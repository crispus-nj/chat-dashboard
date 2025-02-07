<script setup lang="ts">
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100 ">
    <div class="w-full max-w-md">
      <!-- <img
        class="w-40 object-contain mx-auto"
        src="@/assets/img/belva-digital.png"
        alt="Belva Logo"
      /> -->
      <div>
        <div class="p-7">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
