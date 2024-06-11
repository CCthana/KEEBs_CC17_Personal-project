
import OrderCard from '../components/OrderCard'
import useAuth from '../hooks/useAuth'

function MyOrderPage() {
   const { authUser } = useAuth()
  return (
   <div className='mb-28 h-[60vh]' >
   <h1 className=" text-3xl font-extrabold mb-10 mt-20 ml-32">{authUser.userName}'s order</h1>

    <div className='flex justify-center items-center'>

      <div className='w-[70%] flex justify-center items-center flex-col gap-4'>
         <OrderCard />
         <OrderCard />
         <OrderCard />
      </div>

    </div>
   </div>
  )
}

export default MyOrderPage