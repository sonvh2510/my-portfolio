import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

interface Response<T> extends AxiosResponse {
  data: T;
}

export default class Interceptor {
  static get<T>(url: string, config?: AxiosRequestConfig): Promise<Response<T>> {
    return axiosInstance.get(url, config);
  }

  static post<T>(url: string, data?: never, config?: AxiosRequestConfig): Promise<Response<T>> {
    return axiosInstance.post(url, data, config);
  }
}
