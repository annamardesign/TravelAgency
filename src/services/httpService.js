import axios from 'axios';
import {TokenStorage} from "./tokenStorage.js";


const axiosApiInstance = axios.create();

axiosApiInstance.interceptors.request.use(
  async config => {
    TokenStorage.getNewToken();
    const value = TokenStorage.getToken();
    // const keys = JSON.parse(value)
    config.headers = { 
      'Authorization': `Bearer ${value}`      
    }
    return config;
  },
  error => {
    Promise.reject(error)
});

// axiosApiInstance.interceptors.response.use((response) => {
//   return response.data
// }, async function (error) {
//   const originalRequest = error.config;
//   if (error.response.status === 403 && !originalRequest._retry) {
//     originalRequest._retry = true;
//     // const access_token = await refreshAccessToken();            
//     return axiosApiInstance(originalRequest);
//   }
//   return Promise.reject(error);
// });



// axios(config)
// .then(function (response) {
//   return JSON.stringify(response.data);
// })
// .catch(function (error) {
//   console.log(error);
// });



// let config = {
//     method: 'get',
//     headers: { 
//       'Authorization': `Bearer ${accessToken}`
//     }
//   };
  
//   axios(config)
//   .then(function (response) {
//     return JSON.stringify(response.data);
//   })
  
//   axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  

  export default {
    get: axiosApiInstance.get,
    post: axiosApiInstance.post,
    put: axiosApiInstance.put,
    delete: axiosApiInstance.delete
  };
 