import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";


function ProtectUserRoute({children}) {
   const {authUser, isAuthUserLoading} = useAuth();

   if(!authUser && !isAuthUserLoading ) {
      return <Navigate to="/login" />
   }
   
 return  ( 
  <>
   {isAuthUserLoading && <h1>Loading...</h1>}
   {children}
  </>
  )
  
}

export default ProtectUserRoute 



