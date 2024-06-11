import  { createContext, useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth';
import cartApi from '../apis/cart';

export  const CartContext = createContext();

export default function CartContextProvider ({children} ) {
   const [ cartItem, setCartItem ] = useState([]);
   const {authUser} = useAuth();

   const fetchCartItem = async () => {
      if (!authUser?.id) return;
      try {
         const userId = authUser.id
         const res = await cartApi.getCartItem(userId)
         const data =  res.data.reduce((acc, item) => {
            acc.push({cartId : item.id, ...item.product})
            return acc
         }, [])
         console.log(data)
         setCartItem(data)

      }catch (err){
         console.log(err)
      }
   }

   useEffect(() => {
      fetchCartItem()
   },[authUser])

  return (
    <CartContext.Provider value={{ cartItem, setCartItem, fetchCartItem }}> {children} </CartContext.Provider>
  )
}

