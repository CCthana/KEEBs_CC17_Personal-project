import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Dropdown } from "../icons"
import adminApi from "../apis/admin"
import { toast } from "react-toastify"

// const initialInput = {
//    orderId: "4",
//    status : '',
// }

function AdminCard({ orderId, userName, image, status, orderItems, date, user, fetchUserOrder }) {
   const [ total, setTotal] = useState()
   
   const [isOpen, setIsOpen] = useState(false)
   // const [input, setInput] = useState(initialInput);

   useEffect(() => {
      const price = orderItems.reduce((acc, item) => acc += +item.price, 0)
      setTotal(price)
   },[orderItems])


   const handleClick = () => {
     
      setIsOpen(!isOpen)
   }

   

   const handleStatusUpdate = async (e) => {
      try {
      //   await adminApi.updateOrder({...input, status: e.target.value})
         const status = e.target.value
         // console.log(status)
         await adminApi.updateOrder( orderId , status)
         // await adminApi.updateOrder()
        toast.success('Order status updated');
        fetchUserOrder();
        
      } catch (error) {
        toast.error('Status update failed')
      } 
    };

   

  return (
   <div className="mb-5">
   <div className=" bg-white  ">
         <div className='flex justify-evenly items-center p-4 rounded-md text-center border-2 shadow-md'>
            <h1 className='w-full font-bold'> {orderId} </h1>
            <h1 className='w-full font-bold'> {userName}</h1>
            <h1 className='w-full font-bold'> {orderItems.length}</h1>
            <Link to={image} className='w-full font-bold'> <button> IMG </button> </Link>
            <div className='w-full flex items-center justify-center '> <div className= {` bg-kb-black text-white w-32 h-10 rounded-md border-2 flex justify-center items-center ${status === "APPROVED" ? 'text-green-500' : status === "SHIPPING" ? 'text-orange-400' : null } `}>{status}</div> </div>
            <button className='w-full flex items-center justify-center' onClick={handleClick}>  <Dropdown className=' w-9 hover:cursor-pointer' /> </button>
         
          


          </div>

          {isOpen ? 
          <div className="p-8 border-2 rounded-md shadow-lg">
              <h1 className="font-bold text-xl">Product</h1>
              <div className="flex justify-between items-center">
              <h1 className="font-md"> { orderItems.map(item => (<p key={item.id}> {item.product.name}</p>)  ) } </h1>
              <div className="flex">
                  <button className= {` bg-kb-black text-white w-32 h-10 rounded-md border-2 flex justify-center items-center `} value={'PENDING'} onClick={handleStatusUpdate} >PENDING</button>
                  <button className= {` bg-kb-black  w-32 h-10 rounded-md border-2 flex justify-center items-center text-green-500 `} value={'APPROVED'} onClick={ handleStatusUpdate} >APPROVED</button>
                  <button className= {` bg-kb-black w-32 h-10 rounded-md border-2 flex justify-center items-center text-orange-400 `}  value={'SHIPPING'} onClick={handleStatusUpdate} >SHIPPING</button>
              </div>
              </div>
               <div>
                  <div className="flex gap-4 mt-8"> 
                     <div className="text-lg"> <span className="font-bold "> Name : </span> {user?.firstName} {user?.lastName} </div>
                     <div className="text-lg"> <span className="font-bold"> Phone : </span> {user?.phone}  </div>
                     <div className="text-lg"> <span className="font-bold"> Email : </span> {user?.email}  </div>
                     
                  </div>
                  <div className="text-xl"> <span className="font-bold"> Address : </span> {user?.address}  </div>
                  <div className="flex items-center justify-center flex-col pt-4 mt-4  bg-gray-100 rounded-md"> <img src={image} className=" h-80" /> <h1 className="text-xl font-semibold mt-2"> Payment </h1> </div>
               </div>
               <div className=" bg-kb-black rounded-md mt-4 p-2 flex items-center justify-between " >
                  <div className="text-white text-xl "> Order Date : <span className="font-bold mx-4">  {date.split("T")[0]}  </span> </div>
                  <div className="text-xl text-white ">Total : <span className="font-bold mx-4"> {total.toLocaleString('en-US')}$ </span> </div>
               </div>
          </div> 
          :  null  }
   </div>       
   </div>
  )
}

export default AdminCard

