import { Link } from "react-router-dom"
import logo from '../assets/keebslogo.png'
import { CartIcon, PersonIcon } from "../icons"




function Header() {
 
  return (
    <header className="flex justify-between items-center bg-white shadow px-4 h-16">

      <div className="justify-self-start flex-1">
         <Link to="/">  <img src={logo} className=" h-14  " /> </Link>
      </div>

      <div className=" flex justify-center items-center gap-8 w-64 ">
      <Link to="/"> <h1 className=" text-lg font-semibold hover:underline">HOME</h1>  </Link>
      <Link to="/"> <h1 className="  text-lg  font-semibold hover:underline">PRODUCT</h1> </Link>
      </div>

      <div className=" flex justify-center items-center gap-6 w-64 ">
        <PersonIcon className=" h-5 " />
        <CartIcon className=' h-7 ' /> 
      </div>
    

    </header>
  )
}

export default Header