import axios from "axios";

export class TokenStorage {

    static LOCAL_STORAGE_TOKEN = 'token';
    
     static getToken() {
          let config = {
              headers: {
                  'content-type': 'application/x-www-form-urlencoded'
              }
          }
          let data = 'grant_type=client_credentials&client_id=H9AYNmHNS4PBgqfmUDVswAGGwZJLFag7&client_secret=IYhdbf1AigiNgu0O'
          axios.post("https://test.api.amadeus.com/v1/security/oauth2/token", data, config)  
              .then(response  => {
                this.storeToken(response.data.access_token);
              })
      }

     static storeToken() {
        localStorage.setItem(TokenStorage.LOCAL_STORAGE_TOKEN, token);
      }
  }