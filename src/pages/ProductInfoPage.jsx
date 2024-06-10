import { useEffect, useState } from 'react'
import odin from '../assets/odin-r4.png'
import odin1 from '../assets/odinr4-1.png'
import odin2 from '../assets/odinr4-2.png'
import productApi from '../apis/product';
import { getSelectedProduct } from '../utils/local-storage';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import cartApi from '../apis/cart';

function ProductInfoPage() {
   const[selectedProduct, setSelectedProduct] = useState();
   const { authUser } = useAuth();
   const navigate = useNavigate();

   useEffect(() => {
      window.scrollTo(0, 0)
      const fetchSelectedProduct = async () => {
         try {
            const res = await productApi.getProductById(getSelectedProduct());
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
            alert(res.data.message)
            
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
            <  img src={odin} className='h-full rounded-sm ' />
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
       <h1 className='text-center'>{selectedProduct?.info || `Are you getting sick of the tiny layouts? Let's meet the Odin
            The design is inspired by the Stora Hammars 1 stone which depicts the Valknut, Odin's cult symbol
            Speaking of Odin, he is the All-Father. He is associated with that is good (wisdom, healing, royalty, knowledge, battle, victory, poetry, a husband to the Goddess Frigg) and the bad (death, the gallows, war, frenzy).
            Odin represents the ALL, the EVERYTHING, which is what KBDfans wants to project in a keyboard with a 100% layout.`}</h1>
      </div> 

       <div className='h-[480px] overflow-hidden mb-20'>
         <img src={selectedProduct?.photo || odin1} className='w-full'/>
       </div>

       <div className='h-[480px] overflow-hidden mb-20'>
         <img src={selectedProduct?.secondPhoto || odin2} className='w-full'/>
       </div>

   </div>
   </>
  )
}

export default ProductInfoPage