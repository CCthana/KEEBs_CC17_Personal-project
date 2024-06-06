import { Link } from 'react-router-dom'
import logo from '../assets/keebslogowh.png'
import { FacebookIcon, TwitterIcon } from '../icons'

function Footer() {
  return (
    <footer className='h-90 bg-kb-black ' >
      <div className="  flex items-center justify-center">
         <img src={logo} className="  w-540px  " />
      </div>

      <div className='text-white flex items-center justify-center gap-20 mb-6'>
         <Link to="/"> HOME  </Link>
         <Link to="/"> PRODUCT </Link>
         
      </div>

         
      <hr className='  fill-white  flex items-center justify-center' />
     
      <div className='flex items-center justify-center gap-14 ' >
         <FacebookIcon className=" w-14" />
         <TwitterIcon className=" w-14 " />
      </div>

    </footer>
  )
}

export default Footer