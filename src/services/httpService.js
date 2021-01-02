import axios from "axios";
import logger from "./logService";
import { toast } from "react-toastify";

axios.defaults.baseURL = 'https://test.api.amadeus.com/v1';


axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    logger.log(error);
    toast.error("An unexpected error occurrred.");
  }

  return Promise.reject(error);
});

function getToken() {
  let config = {
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    }
  }
  let data = 'grant_type=client_credentials&client_id=H9AYNmHNS4PBgqfmUDVswAGGwZJLFag7&client_secret=IYhdbf1AigiNgu0O'
  let tokenType 
  let accessToken
  axios.post("https://test.api.amadeus.com/v1/security/oauth2/token", data, config)  
    .then(response  => {
      console.log(response.data)
      tokenType = response.data.token_type
      accessToken = response.data.access_token
    })
  axios.defaults.headers.common["Authorization"] = tokenType + " " + accessToken;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  getToken: getToken()
};
