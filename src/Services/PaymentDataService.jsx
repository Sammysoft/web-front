/* eslint-disable */

import { tokenApiCall } from "../utils/Api";


class PaymentDataService {
    async checkOut(data){
        return tokenApiCall.post('/payment/cart/check-out', data)
    }
}

export default new PaymentDataService();