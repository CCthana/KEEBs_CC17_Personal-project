import { Link } from 'react-router-dom'
import logo from '../assets/keebslogowh.png'
import { FacebookIcon, TwitterIcon } from '../icons'

function Footer() {
  return (
    <footer className='h-80 bg-kb-black h- ' >
      <div className="  flex items-center justify-center">
         <img src={logo} className="  w-[480px]  " />
      </div>

      <div className='text-white flex items-center justify-center gap-20 mb-6'>
         <Link to="/"> <p className=' hover:underline'> HOME </p> </Link>
         <Link to="/"> <p className=' hover:underline'> PRODUCT </p> </Link>
         
      </div>

         
      <hr className='  fill-white  flex items-center justify-center' />
     
      <div className='flex items-center justify-center gap-14 h-10 mt-10' >
         <FacebookIcon className=" w-14" />
         <TwitterIcon className=" w-14 " />
      </div>

    </footer>
  )
}

export default Footer
