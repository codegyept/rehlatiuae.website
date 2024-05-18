import Axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";

const axios = Axios.create({
  baseURL: "https://rehlatiuae.com/",
});

axios.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  return config;
});

axios.interceptors.response.use((response: AxiosResponse) => {
  return response;
});

export default axios;
