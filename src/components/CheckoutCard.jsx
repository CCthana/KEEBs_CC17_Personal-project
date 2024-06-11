

function CheckoutCard({ cartId, productId, image, name, price, }) {



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

     

    </div>

    </div>
  )
}

export default CheckoutCard