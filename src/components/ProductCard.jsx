import {  useNavigate } from 'react-router-dom'
import product from '../assets/product.png'
import useProduct from '../hooks/useProduct'

function ProductCard({ name, id, price, detail, image  }) {
  const { selectedProduct } = useProduct();

 const navigate = useNavigate();

 const handleSelectedProduct = () => {
    selectedProduct(id)
    // navigate(`/product/:${id}`)
    navigate(`/product/productinfo`)
 }

  return (
  
    <div className=' w-[350px] h-[470px] shadow-xl rounded-sm ' type='button' onClick={handleSelectedProduct}> 
      <div className=' w-[350px] h-[350px '>
    
        <img src={image || product} className='rounded-sm' />
       
      </div>
      <div className=' h-[170px] pt-4 pl-6'>
         <h1 className=' text-xl font-bold' > {name} </h1>
         <p className=' text-sm'> {detail}</p>
         <p className=' text-lg mt-2 font-semibold '> ${price} </p>
      </div>
    </div>
  )
}

export default ProductCard