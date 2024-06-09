import { createContext, useEffect, useState } from "react";
import productApi from "../apis/product";
import { setSelectedProduct } from "../utils/local-storage";

export  const ProductContext = createContext();

export default function ProductContextProvider({children}) {
   const [allProduct, setAllProduct] = useState(null);
   const [isAllProductLoading, setIsAllProductLoading] = useState(true);

   useEffect(() => {

      const fetchAllProduct = async () => {
         try {
           const res = await productApi.getAllProduct()
           console.log(res)
           setAllProduct(res.data.allProduct)
         } catch (err) {
           console.log(err)
         } finally {
         setIsAllProductLoading(false)
         }
      };
      fetchAllProduct();
   }, []);

   const selectedProduct = async (productId) => {
      try {
         setSelectedProduct(productId)
      } catch (err) {
         console.log(err)
      }
   }



   return <ProductContext.Provider value={{ allProduct, isAllProductLoading, selectedProduct  }}> {children} </ProductContext.Provider>
} 