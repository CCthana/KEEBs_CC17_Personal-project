import useProduct from "../hooks/useProduct";
import Spinner from "./Spinner";




function ProtectedProduct({children}) {
   const { isAllProductLoading } = useProduct();
   
 return  ( 
  <>
   {isAllProductLoading && <Spinner />}
   {children}
  </>
  )
  
}

export default ProtectedProduct 