import axios from "../config/axios";

const orderApi = {};

orderApi.createOrder = (data) => axios.post('order/createorder', data)


export default orderApi;