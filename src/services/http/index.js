import axios from "axios";
import Cookies from "js-cookie";
import { BACKEND_API_ENDPOINT } from "../../config";
import { USER_ID_COOKIE_KEY } from "../../constants";

const http = axios.create({
  baseURL: BACKEND_API_ENDPOINT,
});

// Request interceptor
http.interceptors.request.use(
  (config) => {
    // Modify the request config here (e.g., add headers, authentication tokens)
    const userId = Cookies.get(USER_ID_COOKIE_KEY);

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

// Response interceptor
http.interceptors.response.use(
  (response) => {
    // Modify the response data here (e.g., parse, transform)

    return response;
  },
  (error) => {
    // Handle response errors here
    if (error?.response?.status === 401) {
      window.location = "/login";
    }

    return Promise.reject(error);
  }
);

export default http;
