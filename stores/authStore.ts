import type { IAuthResponse } from "~/lib/types/auth.interface";
import { signin } from "~/services/authService";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authenticated: false,
    user: {} as any,
    loading: false,
    error: null as string | null,
    token: null as string | null,
  }),
  actions: {
    async signin(email: string, password: string) {
      this.loading = true;
      this.error = null;
      try {
        let authResponseData = await signin(email, password);
        this.user = authResponseData.user;
        if (import.meta.client) {
          localStorage.setItem("auth", JSON.stringify(authResponseData));
        }
        this.authenticated = true;
      } catch (error: any) {
        this.error = error;
      }
    },
    getToken() {
        if (import.meta.client) {
          let auth:IAuthResponse = JSON.parse(localStorage?.getItem("auth")!)!;
          this.token = auth?.access_token
        }
        return this.token;
      },
    signout() {
      if (import.meta.client) {
        localStorage.clear();
      }
    },
  },
});
