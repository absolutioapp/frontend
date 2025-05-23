import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useUserStore from "@/stores/userStore";

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

const googleApi = axios.create({
  baseURL: "https://people.googleapis.com/v1",
  timeout: 10000,
});

const refreshAccessToken = async () => {
  try {
    const refreshToken = await AsyncStorage.getItem("userRefreshToken");
    if (!refreshToken) {
      throw new Error("No refresh token available");
    }

    const response = await axios.post(
      "https://oauth2.googleapis.com/token",
      new URLSearchParams({
        client_id: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID || "",
        client_secret: process.env.EXPO_PUBLIC_GOOGLE_CLIENT_SECRET || "",
        refresh_token: refreshToken,
        grant_type: "refresh_token",
      }).toString(),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const { access_token } = response.data;
    await AsyncStorage.setItem("userAccessToken", access_token);
    useUserStore.getState().setAccessToken(access_token);
    return access_token;
  } catch (error) {
    console.error("Error refreshing token:", error);
    throw error;
  }
};

api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("userTokenId");
    if (token) {
      if (!config.headers) {
        config.headers = new axios.AxiosHeaders();
      }
      config.headers.set("Authorization", `Bearer ${token}`);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

googleApi.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("userAccessToken");
    if (token) {
      if (!config.headers) {
        config.headers = new axios.AxiosHeaders();
      }
      config.headers.set("Authorization", `Bearer ${token}`);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

googleApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const newAccessToken = await refreshAccessToken();
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return googleApi(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

const HttpService = {
  get: (url: string, params = {}) => api.get(url, { params }),
  post: (url: string, data: any) => api.post(url, data),
  put: (url: string, data: any) => api.put(url, data),
  delete: (url: string) => api.delete(url),
  google: {
    getProfile: () => googleApi.get("/people/me?personFields=names,photos"),
  },
};

export default HttpService;
