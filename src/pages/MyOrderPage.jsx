
import { useEffect, useState } from 'react'
import OrderCard from '../components/OrderCard'
import useAuth from '../hooks/useAuth'
import orderApi from '../apis/order';

function MyOrderPage() {
  const { authUser } = useAuth()
   const [userOrder , setUserOrder] = useState([]);

   
          
          
    useEffect (() => {
            
    const fetchOderInfo = async () => {
      if(!authUser?.id) {
        return
      }
      try {
      const userId = authUser.id
      const res = await orderApi.getuserOrder(userId)
      setUserOrder(res.data.message)
        
      } catch (err) {
        console.log(err)
      }
        }
            fetchOderInfo()
          }
          ,[authUser])
          


    console.log(userOrder)

  return (
   <div className='mb-28 min-h-[60vh]' >
   <h1 className=" text-3xl font-extrabold mb-10 mt-20 ml-32">{authUser?.userName}'s order</h1>

    <div className='flex justify-center items-center'>

      <div className='w-[70%] flex justify-center items-center flex-col gap-4'>
        {userOrder?.map((item, index) => <OrderCard id={item.id} key={item.id}  status={item.status} orderItems={item.orderItems} /> )}

        
       
      </div>

    </div>
   </div>
  )
}

export default MyOrderPage