import apiClient from "./apiService";
export const openConversations = async (): Promise<any> => {
  try {
    const { data } = await apiClient.get<any>(
      "/inbox/allconversations/all?filter=open"
    );
    return data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "Failed to fetch open conversations"
    );
  }
};
