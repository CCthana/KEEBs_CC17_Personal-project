import axios from "../config/axios";


const cartApi = {};


cartApi.addItemToCart = (data) => axios.post('/cart/item', data);
cartApi.getCartItem = (userId) => axios.get(`/cart//user/${userId}`);
cartApi.deleteCartItem = (cartId) => axios.delete(`cart/cartid/${cartId}`)


export default cartApi;