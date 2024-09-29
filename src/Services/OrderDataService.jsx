/* eslint-disable */

import { tokenApiCall } from "../utils/Api";

class OrderDataService {
  async getAllOrders() {
    return tokenApiCall.get("/order/get/all");
  }
}

export default new OrderDataService();
