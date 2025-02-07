<script setup lang="ts">
import { useAuthStore } from "~/stores/authStore";
import { useProjectSetupStore } from "~/stores/projectSetupStore";
const store = useAuthStore();
const project = useProjectSetupStore()

const setupdata = computed(() => project.data);
const isLoading = ref(true)

const fetchProjectSetup = async()=> {
  await project.getProjectSetup()
  isLoading.value = false
}

onMounted(fetchProjectSetup)


const logout = () => {
  store.signout()
  window.location.reload()
} 
</script>
<template>
  <div class="flex justify-end items-end underline cursor-pointer font-bold text-secondary" @click=logout>
    Sign Out
  </div>
  <p class="text-primary font-bold md:text-2xl">Users</p>
  <div class="overflow-x-auto">
    <table class="w-full border-collapse border border-gray-300">
      <!-- Table Header -->
      <thead class="bg-gray-900 text-white">
        <tr>
          <th class="p-3 text-left">Date</th>
          <th class="p-3 text-left">Name</th>
          <th class="p-3 text-left">Email</th>
        </tr>
      </thead>
      <!-- Table Body -->
      <!-- <tbody>
        <tr
          v-for="convon in setupdata.users?.inbox?.data"
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
      </tbody> -->
    </table>
  </div>
</template>
