import product from '../assets/product.png'
import { BinIcon } from '../icons'

function CartCard() {
  return (
  <div className="p-2 flex items-center justify-center">

    <div className="w-[70%] h-50 bg-white shadow-md p-4 rounded-md hover:shadow-xl flex items-center  border-2">

      <div className="w-40 h-40 overflow-hidden">
         <img src={product} className='w-full rounded-sm' />
      </div>

      <div className='flex justify-around items-center flex-1'>
         <h1 className=' font-bold'>Tofu 65</h1>
         <h1 className=' font-semibold'> $ 555 </h1>
      </div>

      <div className='flex justify-center items-center bg-kb-black rounded-full w-10 h-10 mr-4'>
        <button><BinIcon className="w-8 "/></button> 
      </div>

    </div>

    </div>
  )
}

export default CartCard