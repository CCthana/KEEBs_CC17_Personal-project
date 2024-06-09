import { Link, useNavigate } from "react-router-dom"
import logo from '../assets/keebslogo.png'
import { CartIcon, PersonIcon } from "../icons"
import useAuth from "../hooks/useAuth";




function Header() {
  const { logout, authUser } = useAuth();


  const navigate = useNavigate();

  const handleClickLogout = () => {
     logout();
     navigate('/login');
  };


  return (
    <header className="flex justify-between items-center bg-white shadow px-4 h-16">

      <div className="justify-self-start flex-1">
         <Link to="/">  <img src={logo} className=" h-14  " /> </Link>
      </div>

      <div className=" flex justify-center items-center gap-8 w-64 ">
      <Link to="/"> <h1 className=" text-lg font-semibold hover:underline">HOME</h1>  </Link>
      <Link to="/product"> <h1 className="  text-lg  font-semibold hover:underline">PRODUCT</h1> </Link>
      </div>

      <div className=" flex justify-center items-center gap-6 w-64 ">
        <h1 className="font-bold">{authUser?.userName}</h1>
        <PersonIcon className=" h-5 " />
        <CartIcon className=' h-7 ' /> 
        {authUser ? <button className="font-bold" onClick={handleClickLogout}>Logout</button> : null}
      </div>
    

    </header>
  )
}

export default Header