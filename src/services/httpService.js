import axios from "axios";
import { TokenStorage } from "./tokenStorage.js";

const axiosApiInstance = axios.create();

axiosApiInstance.interceptors.request.use(
  async (config) => {
    await TokenStorage.getNewToken();
    const value = TokenStorage.getToken();
    config.headers = {
      Authorization: `Bearer ${value}`,
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// TODO Rework so token is requested once,re-used until expired and refreshed after that

// axiosApiInstance.interceptors.response.use((response) => {
//   return response
// }, async function (error) {
//   const originalRequest = error.config;
//   if ((error.response.status === 401 || error.response.status === 403) && !originalRequest._retry) {
//     originalRequest._retry = true;
//     await TokenStorage.getNewToken();
//     const access_token = TokenStorage.getToken();
//     axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
//     return axiosApiInstance(originalRequest);
//   }
//   return Promise.reject(error);
// });

export default {
  get: axiosApiInstance.get,
  post: axiosApiInstance.post,
  put: axiosApiInstance.put,
  delete: axiosApiInstance.delete,
};
