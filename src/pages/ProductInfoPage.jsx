import keyboard from '../assets/keyboard.jpg'

function ProductInfoPage() {
  return (<>
   <div className=" min-h-[70vh]  grid grid-cols-2 justify-center  items-center">
         <div className='flex justify-center items-center overflow-hidden '>
            <img src={keyboard} className='h-full rounded-sm' />
         </div>

         <div className='flex justify-start flex-col'>
            <h1>Productname</h1>
            <h1>Price</h1>
            <h1>Desc</h1>
         </div>
   </div>

   <div>
      asdasd
   </div>
   </>
  )
}

export default ProductInfoPage