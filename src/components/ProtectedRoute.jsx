import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Spinner from "./Spinner";




function ProtectedRoute({children}) {
   const {authUser, isAuthUserLoading} = useAuth();
   
 return  ( 
  <>
   {isAuthUserLoading && <Spinner />}
   {children}
  </>
  )
  
}

export default ProtectedRoute 