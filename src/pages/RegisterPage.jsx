import Input from "../components/Input"
import { Link } from "react-router-dom"
import validateRegister from "../validators/validate-register";
import authApi from "../apis/auth";
import { AxiosError } from "axios";
import { useState } from "react";

const initialInput = {
   email: '',
   userName: '',
   password: '',
   confirmPassword: ''
 };

 const initialInputError = {
   email: '',
   userName: '',
   password: '',
   confirmPassword: ''
 };

function RegisterPage() {

   const [input, setInput] = useState(initialInput);
   const [inputError, setInputError] = useState(initialInputError);
  
   const handleChangeInput = e => {setInput({...input, [e.target.name]:e.target.value})};
 
   const handleSubmitForm = async e => {
     try {
         e.preventDefault();
         const error = validateRegister(input)

         if(error) {
            return setInputError(error)
         }

         setInputError({...initialInput});
         await authApi.register(input)

        alert('register compelete')

     } catch (err) {
      if (err instanceof AxiosError) {
         if (err.response.data.field === 'email')
         setInputError(prev => ({
          ...prev, 
          email: 'email alreaby in use'}))

     }
   }}

  return (




<form className=" h-[80vh] flex justify-center items-center mb-20" onSubmit={handleSubmitForm}>


   <div className=" w-1/2 justify-center items-center ml-16" >
   <h1 className=" text-4xl font-extrabold mb-6">Create account</h1>

   <h2 className="  font-medium  " >Please fill out the from below and click create account</h2>
   <p className="mb-5">* required</p>

      <div className="flex flex-col ml-9">
         <h2 className=" text-lg font-medium mt-2" >Email*</h2>
         <Input value={input.email} name='email' onChange={handleChangeInput} error={inputError.email}/> 
      </div>

      <div className="flex flex-col ml-9">
         <h2 className=" text-lg font-medium mt-2" >Username*</h2>
         <Input value={input.userName} name='userName' onChange={handleChangeInput} error={inputError.userName} /> 
      </div>

      <div className="flex flex-col ml-9">
         <h2 className=" text-lg font-medium mt-2" >Password*</h2>
         <Input value={input.password} name='password' type="password" onChange={handleChangeInput} error={inputError.password} /> 
      </div>

      <div className="flex flex-col ml-9">
         <h2 className=" text-lg font-medium mt-2" >Confirm password*</h2>
         <Input value={input.confirmPassword} name='confirmPassword' type="password" onChange={handleChangeInput} error={inputError.confirmPassword} /> 
      </div>

      <div className="ml-9">
         <button className=" w-[440px] h-16 bg-kb-black text-white rounded-md mt-8 font-semibold" > Create account </button> 
      </div>

   </div>
   
   
</form>


  )
}

export default RegisterPage