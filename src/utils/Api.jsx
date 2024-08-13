import axios from "axios";

export const apiCall = axios.create({
    baseURL: "https://store-api-pyo1.onrender.com/api/v1",
    headers: {
      "Content-type": "application/json",
    },
  });

export const tokenApiCall = axios.create({
    baseURL: "https://store-api-pyo1.onrender.com/api/v1",
    headers: {
      "Content-type": "application/json",
    },
  });

 // https://store-api-pyo1.onrender.com/api/v1

  tokenApiCall.interceptors.request.use(
    async (config) => {
      const token = await localStorage.getItem("928-token");
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