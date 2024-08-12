import axios from "axios";

export const apiCall = axios.create({
    baseURL: "http://localhost:8081/api/v1",
    headers: {
      "Content-type": "application/json",
    },
  });

export const tokenApiCall = axios.create({
    baseURL: "http://localhost:8081/api/v1",
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