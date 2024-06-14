import { useEffect, useState } from 'react'
import odin from '../assets/odin-r4.png'
import odin1 from '../assets/odinr4-1.png'
import odin2 from '../assets/odinr4-2.png'
import productApi from '../apis/product';
import { getSelectedProduct } from '../utils/local-storage';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import cartApi from '../apis/cart';
import useCart from '../hooks/useCart';
import { toast } from 'react-toastify';
import { Alien, BinIcon } from '../icons';

function ProductInfoPage() {
   const[selectedProduct, setSelectedProduct] = useState();
   const { authUser } = useAuth();
   const navigate = useNavigate();
   const { fetchCartItem } = useCart();

   useEffect(() => {
      window.scrollTo(0, 0)
      const fetchSelectedProduct = async () => {
         try {
            const res = await productApi.getProductByName(getSelectedProduct());
            setSelectedProduct(res.data.selectedProduct)
            
         } catch (err) {
            console.log(err)
         }
      }
      fetchSelectedProduct();
   },[])



   const handleAddToCart = async () => {
      try {

         if (!authUser) {
          confirm('Please login to add item to cart') ? navigate('/login') : null
         }
         if (authUser) {
           const data = {
             userId : authUser.id,
             productId : selectedProduct.id,
            }
            const res = await cartApi.addItemToCart(data)
            fetchCartItem()
            toast.success(`Item added to your cart `, {autoClose: 2000 } );
         }
      } catch (err) {
         console.log(err)
      }
   }

   


  return (
  <>
  <div className=' h-28'>

  </div>
   <div className=" min-h-[70vh]  grid grid-cols-2 ">
         <div className=' flex justify-center '>
            <div className='flex justify-center w-[550px] h-[580px]'>
            <  img src={selectedProduct?.image} className='h-full rounded-sm ' />
            </div>
         </div>

         <div className='flex justify-start flex-col w-full break-words px-10'>
            <h1 className=' font-extrabold text-4xl mb-4'>{selectedProduct?.name}</h1>
            <h1 className=' font-bold text-2xl mb-10'>$ {selectedProduct?.price}</h1>
            <h1>{selectedProduct?.detail}</h1>
            <div className='flex items-end justify-center pt-40'>
               <button className=' bg-kb-black text-white w-full h-14 rounded-md' onClick={handleAddToCart}> add to cart </button>
            </div>
         </div>
   </div>

   <div className=' flex items-center justify-center p-20 flex-col'>
      <div className='flex mb-20 '>
       <h1 className='text-center'>{selectedProduct?.info}</h1>
      </div> 

       <div className='h-[480px] overflow-hidden mb-10'>
         <img src={selectedProduct?.photo} className='w-full'/>
       </div>

       <div className='h-[480px] overflow-hidden mb-14'>
         <img src={selectedProduct?.secondPhoto} className='w-full'/>
       </div>

   </div>
   </>
  )
}

export default ProductInfoPage