
import React, { useState } from 'react'
import logo from '../assets/keebslogobl.png'
import adminApi from '../apis/admin';
import { setAccessToken, setAnotherToken } from '../utils/local-storage';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const initialInput = {
   userName: '',
   password: '',
}

function AdminLoginPage() {
   const [input, setInput] = useState(initialInput);
   const navigate = useNavigate();

   const handleChangeInput = e => {
      setInput({...input, [e.target.name]: e.target.value})
   }

   const handleSubmitForm = async e => {
      try {
         e.preventDefault();

         const res = await adminApi.login(input)
         setAnotherToken(res.data.accessToken);
         navigate('/admin/dashboard')

         toast.success(` Login seccsess `,{autoClose: 2000,theme: "colored"})
      } catch (err) {
         toast.error('invalid account or password',{autoClose: 2500,theme: "colored"})
      }
   }


  return (
   <>
   <form className=" h-[70vh] flex justify-center items-center mb-20 relative" onSubmit={handleSubmitForm} >
   <img src={logo} className=' w-full opacity-10 absolute mx-auto -z-10'/>

   <div className=" w-1/2 justify-center items-center " >



      <div className="flex flex-col items-center mb-4 ">
      
         <input placeholder='Account' value={input.userName} name='userName' type="password" onChange={handleChangeInput} className='w-9/12 h-16 px-3 py-1.5 border-2 border-gray-600 rounded-md focus:outline-none text-xl focus:ring-2 ' /> 
      </div>

      <div className="flex flex-col items-center">
         
         <input placeholder='Password' value={input.password} name='password' type="password" onChange={handleChangeInput} className='w-9/12 h-16 px-3 py-1.5 border-2 border-gray-600 rounded-md focus:outline-none text-xl focus:ring-2'  /> 
      </div>

  
      <div className=" flex items-center justify-center">
         <button className=" w-3/4 h-16 bg-kb-black text-white rounded-md mt-8 font-semibold" > Login </button> 
      </div>

   </div>
   
   
</form>


</>
  )
}

export default AdminLoginPage