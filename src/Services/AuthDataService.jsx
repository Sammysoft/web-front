/* eslint-disable */

import { apiCall, tokenApiCall } from "../utils/Api";

class AuthService {
  async login(payload) {
    return apiCall.post("/auth", payload);
  }

  async onboard(payload) {
    return apiCall.post("/onboard", payload);
  }

  async verify(userID) {
    return apiCall.post(`/verify/${userID}`);
  }

  async fetchDetails(){
    return tokenApiCall.get('/get')
  }
}

export default new AuthService();
