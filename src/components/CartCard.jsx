import { toast } from 'react-toastify';
import cartApi from '../apis/cart'
import product from '../assets/product.png'
import { BinIcon } from '../icons'

function CartCard({cartId, productId, image, name, price, setCartItem}) {

  const handleDelete = async () => {
    try {
      const res = await cartApi.deleteCartItem(cartId);
      toast.error('Item deleted')
      setCartItem(prev => prev.filter(item =>  item.cartId !== cartId))
    } catch (err) {
      console.log(err)
    }
  }

  return (
  <div className="p-2 flex items-center justify-center">

    <div className="w-[70%] h-50 bg-white shadow-md p-4 rounded-md hover:shadow-xl flex items-center  border-2">

      <div className="w-40 h-40 overflow-hidden">
         <img src={image} className='w-full rounded-sm' />
      </div>

      <div className='flex justify-around items-center flex-1'>
         <h1 className=' font-bold'>{name}</h1>
         <h1 className=' font-semibold'> $ {price}</h1>
      </div>

      <div className='flex justify-center items-center bg-kb-black rounded-full w-10 h-10 mr-4'>
        <button onClick={handleDelete}><BinIcon className="w-8 "/></button> 
      </div>

    </div>

    </div>
  )
}

export default CartCard