import axios from "../config/axios";

const adminApi = {};


adminApi.login = body => axios.post('/admin/login', body);
adminApi.updateOrder = (orderId , status) => axios.patch(`/admin/updateorder/${orderId}`, {status})
adminApi.getAllOrder = () => axios.get('/admin/orders')



export default adminApi;