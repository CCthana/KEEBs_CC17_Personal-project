import { Link } from "react-router-dom"
import CartCard from "../components/CartCard"
import banner from '../assets/cartbanner3.jpg'
import { useEffect, useState } from "react"
import useAuth from "../hooks/useAuth"
import cartApi from "../apis/cart"


function MyCart() {
   const [ cartItem, setCartItem ] = useState([]);
   const {authUser} =  useAuth()
   const [subtotal , setSubtotal] = useState(0);


   useEffect(() => {
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
      fetchCartItem()
   },[authUser])

   useEffect(() => {
      const totalPrice = cartItem.reduce((total, item) => total + (+item.price), 0);
      setSubtotal(totalPrice)
   },[cartItem])



  return (
   <div className="min-w-[80%] ">

      <div className=' h-[420px] overflow-hidden relative'>
         <img src={banner} className="object-cover" />
         <h1 className=" text-5xl text-white font-bold absolute top-[50%] ml-16">SHOPPING CART</h1>
      </div>

      <h1 className=" text-3xl font-extrabold mb-10 mt-28 ml-40">SHOPPING CART</h1>
      <div >
         <div className=" ">
            {cartItem?.map(item =>
            <CartCard 
               key={item.cartId}
               cartId={item.cartId}
               productId={item.id}
               image={item.image}
               name={item.name}
               price={item.price}
               setCartItem={setCartItem}
            /> 
            )}
            
            
         </div>

         <div className=" flex justify-center items-center mt-10">
            <div className="h-[2px] w-[80%] mt-4 mb-4 border-t-2 border-gray-400"></div>

         </div>

         <div className="grid grid-cols-2">
            <div></div>
            <div className="flex justify-center items-center mt-7 flex-col">
               <div className="flex gap-6 items-center" >
                  <h1 className=" text-lg font-semibold text-gray-600"> Subtotal:</h1>
                  <h1 className=" text-2xl font-bold text-kb-black">{subtotal} $</h1>
               </div>
              <Link to="/checkout"> <button className="mt-16 mb-20 w-80 bg-kb-black h-14 rounded-md text-white font-semibold text-lg">Chechout</button> </Link>
               
            </div>
         </div>

      </div>
   </div>
  )
}

export default MyCart