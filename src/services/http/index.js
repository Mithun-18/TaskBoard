import axios from "axios";
import { BACKEND_API_ENDPOINT } from "../../config";

const http = axios.create({
  baseURL: BACKEND_API_ENDPOINT,
});

// Request interceptor
http.interceptors.request.use(
  (config) => {
    // Modify the request config here (e.g., add headers, authentication tokens)
    const userId = "123413";

    if (userId) {
      if (config.headers) config.headers.userid = userId;
    }
    return config;
  },
  (error) => {
    // Handle request errors here

    return Promise.reject(error);
  }
);

export default http;
