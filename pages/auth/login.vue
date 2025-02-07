<script setup lang="ts">
import { ref } from "vue";
import { useToast } from "@/components/ui/toast/use-toast";
import { useAuthStore } from "~/stores/authStore";
import { Input } from "@/components/ui/input";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Loader } from "lucide-vue-next";
import { useRouter } from "vue-router";

definePageMeta({
  layout: "auth",
});

const { toast } = useToast();
const loading = ref(false);
const store = useAuthStore();
const router = useRouter();

const formSchema = toTypedSchema(
  z.object({
    email: z.string("").email().min(4, { message: "Email is required" }).trim(),
    password: z.string().min(1, { message: "Password is required" }).trim(),
  })
);

// john.wanyoike@belvadigital.com

const { handleSubmit, errors } = useForm({
  validationSchema: formSchema,
});

const onSubmit = handleSubmit(async (values) => {
  loading.value = true;
  try {
    await store.signin(values.email, values.password);
    if (store.error) {
      toast({
        description: store.error,
        variant: "destructive",
      });
    } else {
      toast({
        description: "Welcome back!",
        variant: "success",
      });
      router.push("/");
    }
  } catch (error: any) {
    toast({
      description: error.message || "An error occurred",
      variant: "destructive",
    });
  } finally {
    loading.value = false;
  }
});
</script>
<template>
  <section class="">
    <div class="text-center mb-3">
      <h1 class="lg:text-3xl text-lg font-bold text-primary">Sign In</h1>
      <p class="">Access to your dashboard</p>
    </div>
    <section>
      <form @submit="onSubmit" class="space-y-3">
        <FormField v-slot="{ componentField }" name="email">
          <FormItem>
            <FormLabel
              class="after:content-['*'] after:ml-0.5 after:text-red-500"
            >
              Email
            </FormLabel>
            <FormControl>
              <Input
                type="text"
                placeholder="Enter Email Address"
                v-bind="componentField"
                :class="{ 'border-red-500': errors.username }"
                :disabled="loading"
              />
            </FormControl>
            <FormMessage v-if="errors.username">{{
              errors.username
            }}</FormMessage>
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="password">
          <FormItem>
            <FormLabel
              class="after:content-['*'] after:ml-0.5 after:text-red-500"
            >
              Password
            </FormLabel>
            <FormControl>
              <Input
                type="password"
                placeholder="Enter your password"
                v-bind="componentField"
                :class="{ 'border-red-500': errors.password }"
                :disabled="loading"
              />
            </FormControl>
            <FormMessage v-if="errors.password">{{
              errors.password
            }}</FormMessage>
          </FormItem>
        </FormField>
        <button
          type="submit"
          class="bg-primary text-white font-medium w-full py-2 rounded-md"
          :disabled="loading"
        >
          Login
          <Loader
            v-if="loading"
            class="w-5 h-5 ml-2"
            :class="{ 'animate-spin': loading }"
          />
        </button>
      </form>
    </section>
  </section>
</template>
