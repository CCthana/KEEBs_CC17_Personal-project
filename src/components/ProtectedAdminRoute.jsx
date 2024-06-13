import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Spinner from "./Spinner";
import { useEffect } from "react";


function ProtectedAdminRoute({children}) {
   const {authUser, isAuthUserLoading, authAdmin, fetchUser} = useAuth();

 
   // fetchUser();

   // if(!authUser && !authUser.isAdmin === false ) {
   //    return (

   //    <Navigate to="/" />
   // )
   // }

      useEffect(() => {
         fetchUser();
         }, [fetchUser]); 
  
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
  
   
   
//    return  ( 
//       <>
//      {/* {isAuthUserLoading && <Spinner /> }
//      {children} */}
//      
//   </>
//   )
  
  }
  
  export default ProtectedAdminRoute 
  
  // if(authAdmin && !isAuthUserLoading ) {
  //    return <Navigate to="/login" />
  // }

{/* {isAuthUserLoading && <Spinner /> } */}
{/* {authUser && authUser.isAdmin ? {children} : <Navigate to="/"  />} */}

