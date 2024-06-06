import { Link } from "react-router-dom"
import Input from "../components/Input"


function LoginPage() {
  return (
    <div className=" h-[80vh]  grid grid-cols-2 justify-center ">

         <div className="flex items-center justify-end">
            <div className=" w-9/12 justify-items-end justify-end mr-4 "> 

               <h1 className=" text-3xl font-extrabold mb-16">Sign in</h1>

               <h2 className=" text-xl font-medium" >Email</h2>
               <Input  /> 
            
               <h2 className=" text-xl font-medium mt-7">Password</h2>
               <Input />

               <button className=" w-60 h-16 bg-kb-black text-white rounded-md mt-8 font-semibold" > Sign in </button>
               
            </div>
         </div>  

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