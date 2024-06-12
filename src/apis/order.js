import axios from "../config/axios";

const orderApi = {};

orderApi.createOrder = (data) => axios.post('order/createorder', data)
orderApi.getuserOrder = (userId) => axios.get(`/order/myorder/${userId}`)


export default orderApi;