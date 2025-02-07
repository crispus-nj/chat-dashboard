<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';


definePageMeta({
  layout: 'auth',
});

const formSchema = toTypedSchema(
  z.object({
    email: z.string().email().min(4, { message: 'Email is required' }).trim(),
    password: z.string().min(1, { message: 'Password is required' }).trim(),
  })
);


</script>
<template>
  <section class="">
    <div class="text-center mb-3">
    <h1 class="lg:text-2xl text-lg font-bold text-primary">Sign In</h1>
    <p class="">Access to your dashboard</p>
  </div>
  <section>
    <form class="space-y-5 w-full">
      <div class="form-group flex flex-col space-y-1">
        <label for="" class="left-3 text-base font-regular">Email</label>
        <input
          type="email"
          id="email"
          class="rounded-lg border border-solid bg-white bg-opacity-20 border-zinc-400 h-[50px] px-4"
        />
      </div>
      <div class="form-group flex flex-col space-y-1">
        <label for="" class="left-3 text-base font-regular">Password</label>
        <input
          type="password"
          id="password"
          class="rounded-lg border border-solid bg-white bg-opacity-20 border-zinc-400 h-[50px] px-4"
        />
      </div>
      <button class="bg-primary text-white font-medium w-full py-2 rounded-md">Login</button>
    </form>
  </section>
  </section>
</template>
