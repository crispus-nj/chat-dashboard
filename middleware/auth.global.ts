import type { IAuthResponse } from "~/lib/types/auth.interface";
import { useAuthStore } from "~/stores/authStore";

export default defineNuxtRouteMiddleware((to, from) => {
  const $auth = useAuthStore();
  const token = $auth.getToken();
  // if token exists and url is /login redirect to homepage
  if (token && to?.name === "auth-login") {
    return navigateTo("/");
  }

  if (!token && to?.name !== "auth-login") {
    return navigateTo("/auth/login");
  }
});
