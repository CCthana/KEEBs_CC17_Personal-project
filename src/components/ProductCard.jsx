import {  useNavigate } from 'react-router-dom'

import useProduct from '../hooks/useProduct'

function ProductCard({ name, id, price, detail, image  }) {
  const { selectedProduct } = useProduct();

 const navigate = useNavigate();

 const handleSelectedProduct = () => {
    selectedProduct(name)
    // navigate(`/product/:${id}`)
    navigate(`/product/productinfo`)
 }

  return (
  
    <div className=' w-[350px] h-[470px] shadow-xl rounded-sm hover:cursor-pointer hover:shadow-2xl' type='button' onClick={handleSelectedProduct}> 
      <div className=' w-[350px] h-[350px] '>
    
        <img src={image} className='rounded-sm' />
       
      </div>
      <div className=' h-[170px] pt-4 pl-6'>
         <h1 className=' text-lg font-semibold mt-4' > {name} </h1>
         
         <p className=' text-md mt-2 font-semibold '> ${price} </p>
      </div>
    </div>
  )
}

export default ProductCard