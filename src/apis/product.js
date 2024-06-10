import axios from "../config/axios";

const productApi = {};

productApi.getAllProduct = () => axios.get('product/allproduct')
productApi.getKb = () => axios.get('product/allkb')
productApi.getKeycap = () => axios.get('product/allkeycap')
productApi.getSw = () => axios.get('product/allsw')
productApi.getAccess = () => axios.get('product/allaccessories')
productApi.getProductById = (productId) => axios.get(`/product/productid/${productId}`)


export default productApi;