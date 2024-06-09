import axios from "../config/axios";

const productApi = {};

productApi.getAllProduct = () => axios.get('product/allproduct')
productApi.getProductById = (productId) => axios.get(`/product/productid/${productId}`)


export default productApi;