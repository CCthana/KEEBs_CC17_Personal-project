import axios from "../config/axios";

const userApi = {};

userApi.updateAddress = (id, data) => axios.patch(`user/address/${id}`, data)
userApi.upload = (formData) => axios.patch('/user/upload', formData)


export default userApi;