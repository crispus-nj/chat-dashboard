import apiClient from "./apiService";

export const fetchProject = async (): Promise<any> => {
  try {
    const { data } = await apiClient.get<any>(
      "/setup"
    );
    return data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "Failed to project setup"
    );
  }
};
