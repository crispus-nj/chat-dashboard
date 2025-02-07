import { openConversations } from "~/services/openConversationsService";

export const openConversationsStore = defineStore("openConversationsStore", {
  state: () => ({
    conversations: [],
    error: null as string | null,
  }),
  actions: {
    async fetchConversations() {
      try {
        let response = await openConversations();
        this.conversations = response;
      } catch (error: any) {
        this.error = error;
      }
    },
  },
});
