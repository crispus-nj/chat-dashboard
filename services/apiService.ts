import axios from 'axios';
import type { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { API_ENDPOINT } from '@/lib/utils';
import { useAuthStore } from '~/stores/authStore';


const apiClient: AxiosInstance = axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
  },
});

// a request interceptor to include the access token
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const authStore = useAuthStore();
    const token = authStore.user.access_token;
    if (token && config.url !== '/auth/login') {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Check if the request is a FormData type
    if (config.data instanceof FormData) {
      // For FormData, Axios automatically sets the correct Content-Type,
      // so we don't need to manually set it here.
      delete config.headers["Content-Type"];
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
