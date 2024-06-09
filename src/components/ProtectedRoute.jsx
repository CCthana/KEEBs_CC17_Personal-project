import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";




function ProtectedRoute({children}) {
   const {authUser, isAuthUserLoading} = useAuth();
   
 return  ( 
  <>
   {isAuthUserLoading && <h1>Loading...</h1>}
   {children}
  </>
  )
  
}

export default ProtectedRoute 