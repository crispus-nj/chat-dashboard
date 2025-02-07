import apiClient from "./apiService";
import type { IAuthResponse } from "~/lib/types/auth.interface";

export const signin = async (
  email: string,
  password: string
): Promise<IAuthResponse> => {
  try {
    const { data } = await apiClient.post<IAuthResponse>("/user/login", {
      email,
      password,
    });
    return data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to sign in");
  }
};
