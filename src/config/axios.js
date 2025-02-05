import axios  from "axios";
import { getAccessToken, getAnotherToken, removeAccessToken } from "../utils/local-storage";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

axios.interceptors.request.use(config => {
   const accessToken = getAccessToken();
   const anotherToken = getAnotherToken();

   if (anotherToken) {
      config.headers.Authorization = `Bearer ${anotherToken}`;
   } else if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
   }

   
   return config;
},
   err => Promise.reject(err)
);

axios.interceptors.response.use(
   value => Promise.resolve(value), 
   err => {
   if(err.response.status === 401) {
      removeAccessToken();
      window.location.assign('/login');
      return;
   }
   return Promise.reject
});



export default axios;