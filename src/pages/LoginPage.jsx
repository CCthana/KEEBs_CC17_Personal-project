import { Link } from "react-router-dom"
import Input from "../components/Input"
import { useState } from "react"
import validateLogin from "../validators/validator-login"
import { useNavigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import { AxiosError } from "axios"
import { toast } from "react-toastify"

const initialInput = {
   email: '',
   password: '',
}

const initialInputError = {
   email: '',
   password: '',
}

function LoginPage() {
   const [input, setInput] = useState(initialInput);
   const [inputError , setInputError] = useState(initialInputError);
   

   const { login, authUser } = useAuth();

   const navigate = useNavigate();

  

      const handleChangeInput = e => {
         setInput({...input, [e.target.name]: e.target.value})
      }

      const handleSubmitForm = async e => {
         try {
            e.preventDefault();
            const error = validateLogin(input);
            if (error) {
               return setInputError(error)

            }
            setInputError(initialInputError);

            await login(input);
            navigate('/')
            
            toast.success(` Login seccsess `,{autoClose: 2000,theme: "colored"})
            

         } catch (err) {
           
            toast.error('invalid email or password',{autoClose: 2500,theme: "colored"})
            setInputError({ email:'Invalid email' , password: 'Invalid password'})
            if (err instanceof AxiosError) {
               const message = err.response.status === 400 ? 'Invalid login' : 'intenal server error'
                  return (
                     alert(message)
               )
                }
            }
            
      }
       
    

   

  return (
    <div className=" h-[80vh]  grid grid-cols-2 justify-center ">
            <form onSubmit={handleSubmitForm} className="flex items-center justify-end">
         
         
            <div className=" w-9/12 justify-items-end justify-end mr-4 "> 

               <h1 className=" text-3xl font-extrabold mb-16">Sign in</h1>

               <h2 className=" text-xl font-medium" >Email</h2>
               <div className="flex flex-col">
               <Input name='email' 
               value={input.email} 
               onChange={handleChangeInput}  
               error={inputError.email} /> 
            
               <h2 className=" text-xl font-medium mt-7">Password</h2>
               <Input type="password" 
               name='password' 
               value={input.password} 
               onChange={handleChangeInput} 
               error={inputError.password} />
               </div>

               <button type="submit" className=" w-60 h-16 bg-kb-black text-white rounded-md mt-8 font-semibold" > Sign in </button>
            
         </div>  
         </form>

         <div className="flex justify-center items-center">
            <div className="justify-center items-center ">
               <h1 className=" text-3xl font-extrabold mb-5 " >New customer</h1>
               <h1 > Create your account for better shopping experience  </h1>
               <Link to="/register"> <button className=" w-[440px] h-16 bg-kb-black text-white rounded-md mt-8 font-semibold" > Create account </button> </Link>
            </div>
         </div>



     

    </div>
  )
}

export default LoginPage 