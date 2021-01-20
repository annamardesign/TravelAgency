import axios from 'axios';
import {TokenStorage} from "./tokenStorage.js";


const axiosApiInstance = axios.create({
  baseURL: 'https://test.api.amadeus.com/v1'
});

axiosApiInstance.interceptors.request.use(
  async config => {
    TokenStorage.getNewToken();
    const value = TokenStorage.getToken();
    config.headers = { 
      'Authorization': `Bearer ${value}`      
    }
    return config;
  },
  error => {
    Promise.reject(error)
});



// axiosApiInstance.interceptors.response.use((response) => {
//   return response
// }, async function (error) {
//   const originalRequest = error.config;
//   if (error.response.status === 403 && !originalRequest._retry) {
//     originalRequest._retry = true;
//     const access_token = await TokenStorage.getRefreshToken();            
//     axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
//     return axiosApiInstance(originalRequest);
//   }
//   return Promise.reject(error);
// });
   
  

  export default {
    get: axiosApiInstance.get,
    post: axiosApiInstance.post,
    put: axiosApiInstance.put,
    delete: axiosApiInstance.delete
  };
 