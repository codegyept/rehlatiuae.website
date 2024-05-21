import Axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";

const axios = Axios.create({
  baseURL: "https://rehlatiuae.com/api/v1/",
});

axios.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  return config;
});

axios.interceptors.response.use((response: AxiosResponse) => {
  return response;
});

export default axios;
