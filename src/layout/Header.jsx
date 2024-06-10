import { Link, useNavigate } from "react-router-dom"
import logo from '../assets/keebslogo.png'
import { CartIcon, PersonIcon } from "../icons"
import useAuth from "../hooks/useAuth";




function Header() {
  const { logout, authUser } = useAuth();


  const navigate = useNavigate();

  const handleClickLogout = () => {
     logout();
     navigate('/');
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
        <Link to='profile'> <h1 className="font-bold hover:underline">{authUser?.userName}</h1> </Link>
        <Link to={authUser? '/profile' : '/login'} ><div className="w-8 h-8 rounded-full flex items-center justify-center p-1 hover:bg-gray-300"> <PersonIcon className=" h-5   " /> </div>  </Link>
        <Link to={authUser? '/cart' : '/login'} > <div className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-300 p-1"> <CartIcon className=' h-9 ' />  </div>  </Link>
        {authUser ? <button className="font-bold" onClick={handleClickLogout}>Logout</button> : null}
      </div>
    

    </header>
  )
}

export default Header