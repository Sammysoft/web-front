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

  async getAProduct(id) {
    return apiCall.get(`/product/get/${id}`);
  }

  async editProduct(payload, id) {
    return tokenApiCall.put(`/product/edit/${id}`, payload);
  }

  async deleteProduct(id){
    return tokenApiCall.delete(`/product/delete/${id}`);
  }
}

export default new ProductDataService();
