import { useEffect, useState } from "react"
import Input from "../components/Input"
import userApi from "../apis/user";
import useAuth from "../hooks/useAuth";
import validateAddress from "../validators/validate-address";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";


const initialInput = {
   firstName: '' ,
   lastName: '',
   phone: '',
   address: ''
}


const initialInputError = {
   firstName: '' ,
   lastName: '',
   phone: '',
   address: ''
}

function AddressPage() {
   const [input , setInput] = useState(initialInput);
   const [inputError , setInputError] = useState(initialInputError);



   const { authUser, fetchUser } = useAuth()


   


   const handleChangeInput = e => {
      setInput({...input, [e.target.name]: e.target.value})
   }

   const handleSubmitForm = async (e) => {
      try {
         e.preventDefault()
         const isConfirm = confirm('Update your address?')
         if (isConfirm) {

         const error = validateAddress(input);
            if (error) {
               return setInputError(error)
            }
            setInputError(initialInputError);

         await userApi.updateAddress(authUser.id,input)
         toast.success('address updated')
         fetchUser()
         setInput(initialInput)
      }
      } catch (err) {
         console.log(err)
      }
   }


  return (
  <>
  <div className="flex justify-end px-52 mt-12" >
      <Link to='/myorder'> <button className=" w-72 h-14 bg-kb-black text-white rounded-lg font-semibold text-xl"> Your Order </button> </Link>
  </div>

    <div className="grid grid-cols-2 px-52 mt-14 mb-14">
      <div >
         <h1 className="text-3xl font-extrabold mb-8 ">New Address</h1>
         <div className=" flex-col w-[80%]">

            <form onSubmit={handleSubmitForm} className="flex flex-col">
            <div className="m-4 text-md flex flex-col"> <Input placeholder='Firstname' name='firstName' value={input.firstName} onChange={handleChangeInput} error={inputError.firstName} /> </div>
            <div className="m-4 text-md flex flex-col"> <Input placeholder='Lastname' name='lastName' value={input.lastName} onChange={handleChangeInput} error={inputError.lastName}/> </div>
            <div className="m-4 text-md flex flex-col"> <Input placeholder='Phone'  name='phone' value={input.phone} onChange={handleChangeInput} error={inputError.phone}/> </div>
            <div className="m-4 flex flex-col">  <textarea className={`border-2 min-h-40 max-h-40 w-[80%] p-4 text-md rounded-md   ${inputError.address ? 'border-red-600 focus:ring-red-300' 
     : 'border-gray-300 focus:border-blue-500 focus:ring-blue-300'}  `} placeholder='Address'  name='address' value={input.address} onChange={handleChangeInput} /> 
               {inputError.address ? < small className="text-red-500">{inputError.address}</small> : null }
            </div>
            <button className=" w-48 h-14 bg-kb-black text-white rounded-lg font-semibold text-xl ml-4" type='submit'> Update </button>
            </form>
            
         </div>
      </div>

      <div className="flex justify-end">
         <div className="w-full flex flex-col items-end">
         <h1 className="text-3xl font-extrabold mb-4">Current Address</h1>

               <div className="bg-white shadow-md w-[70%] min-h-[40%] mt-4 p-8 rounded-md ">
                  {authUser?.address ? <>
                  <h1 className="font-semibold pt-4"> name : {authUser?.firstName} {authUser?.lastName}</h1>
                  <h1 className="font-semibold pt-4"> phone : {authUser?.phone} </h1>
                  <h1 className="font-semibold pt-4 break-words"> address : {authUser?.address} </h1>
                  </> : <h1 className="font-semibold pt-4"> You hane no address info.</h1>
               }
               </div>
         
           
        
          </div>
      </div>

    </div>
    </>
  )
}

export default AddressPage