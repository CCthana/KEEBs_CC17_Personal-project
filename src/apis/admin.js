import axios from "../config/axios";
import { getAnotherToken } from "../utils/local-storage";

const adminApi = {};

const adminToken = getAnotherToken();

adminApi.login = body => axios.post('/admin/login', body);
adminApi.updateOrder = (orderId , status) => axios.patch(`/admin/updateorder/${orderId}`, {status}, { headers: { 'Authorization': `Bearer ${adminToken}` }} )
adminApi.getAllOrder = () => axios.get('/admin/orders', { headers: {Authorization: `Bearer ${adminToken}` }} )



export default adminApi;