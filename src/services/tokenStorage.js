import axios from "axios";

export class TokenStorage {

    static  LOCAL_STORAGE_TOKEN = 'access_token';
    static  LOCAL_STORAGE_REFRESH_TOKEN = 'refresh_token';
  
  
    static getNewToken() {
      return new Promise((resolve, reject) => {

        let config = {
        headers: {
         'content-type': 'application/x-www-form-urlencoded'
        }
         }
        let data = 'grant_type=client_credentials&client_id=H9AYNmHNS4PBgqfmUDVswAGGwZJLFag7&client_secret=IYhdbf1AigiNgu0O'
        axios
          .post("https://test.api.amadeus.com/v1/security/oauth2/token", data, config)
          .then(response => {
  
            this.storeToken(response.data.access_token);
            this.storeRefreshToken(response.data.refresh_token);
            resolve(response.data.access_token);
          })
          .catch((error) => {
            reject(error);
          });
      });
    }

    static storeToken(access_token) {
      localStorage.setItem(TokenStorage.LOCAL_STORAGE_TOKEN, access_token);
    }

    static storeRefreshToken(refreshToken) {
        localStorage.setItem(TokenStorage.LOCAL_STORAGE_REFRESH_TOKEN, refreshToken);
    }
  
    static clear() {
      localStorage.removeItem(TokenStorage.LOCAL_STORAGE_TOKEN);
      localStorage.removeItem(TokenStorage.LOCAL_STORAGE_REFRESH_TOKEN);
    }
  
  
   static getToken() {
      return localStorage.getItem(TokenStorage.LOCAL_STORAGE_TOKEN);
    }

   static getRefreshToken(){
      return localStorage.getItem(TokenStorage.LOCAL_STORAGE_REFRESH_TOKEN);
    }
    
  }