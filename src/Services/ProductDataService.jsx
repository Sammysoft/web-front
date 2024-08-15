/* eslint-disable */

import { apiCall, tokenApiCall } from "../utils/Api";

class ProductDataService {
  async createCategory(data) {
    return tokenApiCall.post("/category/create", data);
  }
  async getCategory() {
    return apiCall.get("/category/get");
  }

  async createProduct(product) {
    return tokenApiCall.post("/product/create", product);
  }

  async getAllProduct() {
    return apiCall.get("/product/get/all");
  }
}

export default new ProductDataService();
