import axios from "../config/axios";

const productApi = {};

productApi.getAllProduct = () => axios.get('product/allproduct')


export default productApi;