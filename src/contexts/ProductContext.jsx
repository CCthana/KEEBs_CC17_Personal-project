import { createContext, useEffect, useState } from "react";
import productApi from "../apis/product";
import { setSelectedProduct } from "../utils/local-storage";

export  const ProductContext = createContext();

export default function ProductContextProvider({children}) {
   const [allProduct, setAllProduct] = useState(null);
   const [isAllProductLoading, setIsAllProductLoading] = useState(true);

   const [allKb, setAllKb] = useState(null);
   const [allSw, setAllSw] = useState(null);
   const [allKeycap, setAllKeycap] = useState(null);
   const [allAccess, setAllAccess] = useState(null);





   useEffect(() => {

      const fetchAllProduct = async () => {
         try {
           const res = await productApi.getAllProduct()
           setAllProduct(res.data.allProduct)

           const resKb = await productApi.getKb()
           setAllKb(resKb.data.allKb)

           const resSw = await productApi.getSw()
           setAllSw(resSw.data.allSw)

           const resKeycap = await productApi.getKeycap()
           setAllKeycap(resKeycap.data.allKeycap)

           const resAccess = await productApi.getAccess()
           setAllAccess(resAccess.data.allAccess)
               
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




   return <ProductContext.Provider value={{ allProduct, isAllProductLoading, selectedProduct, allKb, allSw, allKeycap, allAccess  }}> {children} </ProductContext.Provider>
} 