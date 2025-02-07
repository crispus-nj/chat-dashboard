import { fetchProject } from "~/services/projectSetupService";

export const useProjectSetupStore = defineStore("projectSetupStore", {
  state: () => ({
    data: [] as any[],
  }),
  actions: {
    async getProjectSetup() {
      let responseData = await fetchProject();
      this.data = responseData;
    },
  },
});
