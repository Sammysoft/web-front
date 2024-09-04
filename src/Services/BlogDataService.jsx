/* eslint-disable */

import { apiCall, tokenApiCall } from "../utils/Api";

class BlogDataService {
    async createBlog(data){
        return tokenApiCall.post('/blog/create', data)
    }

    async getAllBlogs(){
        return apiCall.get('/blog/get/all');
    }

    async getBlogById(blogID){
        return tokenApiCall.get(`/blog/get/${blogID}`)
    }

    async deleteBlog(blogID){
        return tokenApiCall.delete(`/blog/delete/${blogID}`)
    }

    async updateBlog(blogID, data){
        return tokenApiCall.put(`/blog/update/${blogID}`, data)
    }
}

export default new BlogDataService();