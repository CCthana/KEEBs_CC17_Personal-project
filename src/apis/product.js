import axios from "../config/axios";

const productApi = {};

productApi.getAllProduct = () => axios.get('product/allproduct')
productApi.getKb = () => axios.get('product/allkb')
productApi.getKeycap = () => axios.get('product/allkeycap')
productApi.getSw = () => axios.get('product/allsw')
productApi.getAccess = () => axios.get('product/allaccessories')
productApi.getProductByName = (productName) => axios.get(`/product/productName/${productName}`)


export default productApi;