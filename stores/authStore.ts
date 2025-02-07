import { signin } from "~/services/authService";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authenticated: false,
    user: {} as any,
    loading: false,
    error: null as string | null,
  }),
  actions: {
    async signin(email: string, password: string) {
      this.loading = true;
      this.error = null;
      try {
        let authResponseData = await signin(email, password);
        this.user = authResponseData.user;
        localStorage.setItem("auth", JSON.stringify(authResponseData));
        this.authenticated = true;
      } catch (error: any) {
        this.error = error;
      }
    },
    signout() {
      localStorage.clear();
    },
  },
});
