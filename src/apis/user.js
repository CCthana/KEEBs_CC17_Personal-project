import axios from "../config/axios";

const userApi = {};

userApi.updateAddress = (id, data) => axios.patch(`user/address/${id}`, data)


export default userApi;