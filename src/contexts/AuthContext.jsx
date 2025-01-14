import { createContext, useEffect, useState } from "react";
import authApi from "../apis/auth";
import { getAccessToken, removeAccessToken, setAccessToken } from "../utils/local-storage";

export  const AuthContext = createContext();

export default function AuthContextProvider({children}) {
   const [authUser, setAuthUser] = useState(null);
   const [isAuthUserLoading, setIsAuthUserLoading] = useState(true);
   const [authAdmin, setAuthAdmin] = useState();

   
   const fetchUser = async () => {
      try {
         if(getAccessToken()) {
            const res = await authApi.getAuthUser();
            setAuthUser(res.data.user)
            setAuthAdmin(res.data.user.isAdmin)
         

         }
      } catch (err) {
         console.log(err)
      } finally {
         setIsAuthUserLoading(false);
      }
   };

   
   useEffect(() => {
      fetchUser();
   }, []);


   const login = async (credentials) => {
      const res = await authApi.login(credentials)
      setAccessToken(res.data.accessToken);
      const resGetAuthUser = await authApi.getAuthUser();
      setAuthUser(resGetAuthUser.data.user);

     

   };

  

   const logout = () => {
      setAuthUser(null);
      localStorage.clear();
   };
    
 
   return <AuthContext.Provider value={{ login, logout, authUser, isAuthUserLoading, fetchUser }}> {children} </AuthContext.Provider>
} 