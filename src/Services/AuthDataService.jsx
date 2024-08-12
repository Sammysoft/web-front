/* eslint-disable */

import { apiCall, tokenApiCall } from "../utils/Api";


class AuthService {
    async login(payload){
        return apiCall.post('/auth', payload)
    }

    async onboard(payload){
        return apiCall.post('/onboard', payload)
    }
}

export default new AuthService();