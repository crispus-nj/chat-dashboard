<script setup lang="ts">
import { openConversationsStore } from "~/stores/openConversationsStore";
import { Loader } from "lucide-vue-next";
import apiClient from "~/services/apiService";
import { toast } from "~/components/ui/toast";

definePageMeta({
  layout: "default",
});

const useOpenConvoStore = openConversationsStore();
const openedConversations = ref<any>([]);
const isLoading = ref(true);

const fetchOpenConvo = async (): Promise<any> => {
  try {
    const data = await apiClient.get<any>(
      "/inbox/allconversations/all?filter=open"
    );
    openedConversations.value = data.data;
  } catch (error: any) {
    toast({
      description: "Failed to fetch open conversations",
      variant: "destructive",
    });
  } finally {
    isLoading.value = false;
  }
};

onMounted(fetchOpenConvo);
</script>

<template>
  <Loader
    v-if="isLoading"
    class="w-5 h-5 ml-2"
    :class="{ 'animate-spin': isLoading }"
  />
  <div class="overflow-x-auto">
    <table class="w-full border-collapse border border-gray-300">
      <!-- Table Header -->
      <thead class="bg-gray-900 text-white">
        <tr>
          <th class="p-3 text-left">Date</th>
          <th class="p-3 text-left">Name</th>
          <th class="p-3 text-left">Email</th>
          <th class="p-3 text-left">Message</th>
        </tr>
      </thead>
      <!-- Table Body -->
      <tbody>
        <tr
          v-for="convon in openedConversations?.inbox?.data"
          :key="convon.id"
          class="border-b border-gray-300 even:bg-gray-100 hover:bg-gray-200"
        >
          <td class="p-3 flex flex-col space-y-1">
            <span
              ><span class="font-bold">Created At:</span>
              {{ convon.contact.created_at }}</span
            >
            <span
              ><span class="font-bold">Updated At:</span>
              {{ convon.contact.updated_at }}</span
            >
          </td>
          <td class="p-3">{{ convon.user.full_name }}</td>
          <td class="p-3">{{ convon.user.email }}</td>
          <td class="p-3">{{ convon.lastmesssage }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
