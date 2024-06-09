import useProduct from "../hooks/useProduct";




function ProtectedProduct({children}) {
   const { isAllProductLoading } = useProduct();
   
 return  ( 
  <>
   {isAllProductLoading && <h1>Loading...</h1>}
   {children}
  </>
  )
  
}

export default ProtectedProduct 