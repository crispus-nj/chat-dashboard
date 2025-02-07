<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card';
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md space-y-5">
      <img
        class="w-40 object-contain mx-auto"
        src="@/assets/img/logo.png"
        alt="Belva Logo"
      />
      <Card>
        <CardContent class="p-7">
          <slot />
        </CardContent>
      </Card>
    </div>
  </div>
</template>
