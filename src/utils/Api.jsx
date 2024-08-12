import axios from "axios";

export const apiCall = axios.create({
    baseURL: "https://store-api-pyo1.onrender.com",
    headers: {
      "Content-type": "application/json",
    },
  });

export const tokenApiCall = axios.create({
    baseURL: "https://store-api-pyo1.onrender.com",
    headers: {
      "Content-type": "application/json",
    },
  });

  tokenApiCall.interceptors.request.use(
    async (config) => {
      const token = await localStorage.getItem("authToken");
      if (token) {
        config.headers.Authorization = `${token}`;
      }
      return config;
    },
    (error) => {
      console.log(error);
      return error;
    }
  );