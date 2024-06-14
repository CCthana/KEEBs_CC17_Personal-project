import { useEffect } from 'react'
import banner from '../assets/bannerallpd.jpg'
import ProductCard from '../components/ProductCard'
import useProduct from '../hooks/useProduct'

function ProductPage() {
   const { allProduct } = useProduct()

   useEffect(() => {
      window.scrollTo(0, 0)
   },[])

 
  return (

    <div>
       <div className=' h-[420px] overflow-hidden relative'>
         <img src={banner} className="object-cover w-full" />
         <h1 className=" text-5xl text-white font-bold absolute top-[50%] ml-16">ALL PRODUCTS</h1>
      </div>

      <div>
         <h1 className=" text-3xl font-extrabold mb-10 mt-32 ml-32">ALL PRODUCTS</h1>
      </div>

      <div className='flex items-center justify-center mt-20'>
      <div className='w-fit grid grid-cols-3 justify-center items-center gap-32 mb-20'>

         {allProduct?.map (item => <ProductCard key={item.id} id={item.id} name={item.name} price={item.price} detail={item.detail} image={item.image}  />)}
        
      
      </div>
      </div>

    </div>
  )
}

export default ProductPage