import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Spinner from "./Spinner";
import { useEffect } from "react";


function ProtectedAdminRoute({children}) {
   const {authUser, isAuthUserLoading, authAdmin, fetchUser} = useAuth();


         if (isAuthUserLoading) {
               return <Spinner />;
            }
  
         if (!authUser || !authUser.isAdmin) {
            return <Navigate to="/" />;
            }
  
  
         return  ( 
      <>
         {children}
      </>
  )
  
   
   

  }
  
  export default ProtectedAdminRoute 
