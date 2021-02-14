import axios from "axios";

export class TokenStorage {

    static  LOCAL_STORAGE_TOKEN = 'access_token';
    static  LOCAL_STORAGE_REFRESH_TOKEN = 'refresh_token';
  
  
    static async getNewToken() {
        let config = {
        headers: {
         'content-type': 'application/x-www-form-urlencoded'
        }
         }
        let data = 'grant_type=client_credentials&client_id=H9AYNmHNS4PBgqfmUDVswAGGwZJLFag7&client_secret=IYhdbf1AigiNgu0O'
        await axios
          .post("https://test.api.amadeus.com/v1/security/oauth2/token", data, config)
          .then(response => {
  
            this.storeToken(response.data.access_token);
            // this.storeRefreshToken(response.data.refresh_token);
            return response.data.access_token;
          })
          .catch((error) => {
            return  error;
          });
      };

    static storeToken(access_token) {
      localStorage.setItem('TOKEN', access_token);
    }

    static clear() {
      localStorage.removeItem(TokenStorage.LOCAL_STORAGE_TOKEN);
      localStorage.removeItem(TokenStorage.LOCAL_STORAGE_REFRESH_TOKEN);
    }
  
  
   static getToken() {
      return localStorage.getItem('TOKEN');
    }
  }