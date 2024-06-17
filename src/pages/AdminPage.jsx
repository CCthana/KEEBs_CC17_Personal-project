import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/keebslogo.png'
import AdminCard from '../components/AdminCard'
import { toast } from 'react-toastify';
import { getAnotherToken, removeAccessToken, removeAnotherToken } from '../utils/local-storage';
import adminApi from '../apis/admin';

function AdminPage() {
  const [order, setOrder] = useState();
  const navigate = useNavigate();
 

  const handleClickLogout = () => {
    localStorage.clear()
    removeAnotherToken();
    toast.error('Logged out',{autoClose: 2000,theme: "colored"})
    navigate('/admin/login');
 };

 const fetchUserOrder = async () => {
    try {
      
      const res = await adminApi.getAllOrder();
      setOrder(res.data.allOrder)
      console.log(res.data.allOrder)
      
    } catch (err) {
    console.log(err)
    }
 }

  useEffect(() => {
    fetchUserOrder()
    if(!getAnotherToken()) {
      navigate('/admin/login')
    }
  },[])

  return (
  <>
    
      <header className="flex justify-between items-center bg-white shadow px-4 h-16">

          <div className="justify-self-start flex-1">
            <Link to="/">  <img src={logo} className=" h-14  " /> </Link>
          </div>


          <div className=" flex justify-center items-center gap-6 w-64 ">
            {/* {authUser ? <button className="font-bold" onClick={handleClickLogout}>Logout</button> : null} */}
            <button className="font-bold" onClick={handleClickLogout}>Logout</button> 
          </div>
      </header>



      <div className='flex items-center justify-center'>
        
        <div className='w-[70%]'>
          <div className='flex  justify-evenly items-center p-4 mb-8 mt-14 font-semibold text-center'>
            <h1 className=' w-full'>Order</h1>
            <h1 className=' w-full'>UserName</h1>
            <h1 className=' w-full'>Total items</h1>
            <h1 className=' w-full'>Upload</h1>
            <h1 className=' w-full'>Status</h1>
            <h1 className=' w-full'>Detail</h1>
          </div>

         

          {order?.map((item) => 
            <AdminCard 
            key={item.id}
            orderId={item.id}
            user={item.user}
            userName={item.user.userName}
            image={item.payment}
            status={item.status}
            orderItems={item.orderItems}
            date={item.date}
            fetchUserOrder={fetchUserOrder}
            />
          ) }

          
        </div>

      </div>
  </>
  )
}

export default AdminPage