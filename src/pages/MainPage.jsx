import banner from '../assets/KABUKICHOR2.jpg'
import lowerbanner from '../assets/lower_banner.jpg'
import swtich  from '../assets/switch.jpg'
import keyboard from '../assets/keyboard.jpg'
import access from '../assets/access.jpg'
import keycap from '../assets/keycap.jpg'
import arrival from '../assets/arri.jpg'
import { Link } from 'react-router-dom'

function MainPage() {
  return (
    <>
    <div className='h-[500px] overflow-hidden'>
      <img src={banner}/>
    </div>
    <div className='flex justify-center items-center gap-8 mt-40 mb-8'>

      <div className='w-[590px]  h-[450px] overflow-hidden relative '>
        <img src={keyboard} className='w-full' />

        <div className=' absolute top-10 right-12 flex items-end flex-col'>
          <h1 className=' ml-1 text-white font-semibold text-5xl mb-4 text-end'>KEYBOARD</h1>
          <Link to='/product'><button className=' bg-white text-kb-black font-bold w-36 h-9 rounded-sm'> SHOP NOW </button> </Link>
        </div>

      </div>

      <div className='w-[590px] h-[450px] overflow-hidden  relative '>
        <img src={swtich} className='w-full'/>

        <div className=' absolute top-10 right-12 flex items-end flex-col'>
            <h1 className=' ml-1 text-white font-semibold text-5xl mb-4 text-end'>SWITCH</h1>
            <Link to='/product'><button className=' bg-white text-kb-black font-bold w-36 h-9 rounded-sm'> SHOP NOW </button> </Link>
        </div>

      </div>

    </div>

    <div className='flex justify-center items-center gap-8 mb-40 '>

      <div className=' w-96 relative'>
        <img src={keycap} className='w-full'/>

        <div className=' absolute top-6 right-8 flex items-end flex-col'>
            <h1 className=' ml-1 text-white font-semibold text-3xl mb-2 text-end'>SWITCH</h1>
            <Link to='/product'><button className=' bg-white text-kb-black font-bold w-28 h-9 rounded-sm text-xs '> SHOP NOW </button> </Link>
        </div>

      </div>

      <div className=' w-96 relative'>
        <img src={access} className='w-full'/>

        <div className=' absolute top-6 right-8 flex items-end flex-col'>
            <h1 className=' ml-1 text-white font-semibold text-3xl mb-2 text-end'>ACCESSORIES</h1>
            <Link to='/product'><button className=' bg-white text-kb-black font-bold w-28 h-9 rounded-sm text-xs '> SHOP NOW </button> </Link>
        </div>

      </div>

      <div className=' w-96 relative'>
        <img src={arrival} className='w-full'/>

        <div className=' absolute top-6 right-8 flex items-end flex-col'>
            <h1 className=' ml-1 text-white font-semibold text-3xl mb-2 text-end'>ALL PRODUCTS</h1>
            <Link to='/product'><button className=' bg-white text-kb-black font-bold w-28 h-9 rounded-sm text-xs '> SHOP NOW </button> </Link>
        </div>

      </div>
    

    </div>

    <div className='flex justify-center items-center flex-col h-72 bg-kb-gray p-10'>
      <h1 className=' text-5xl font-extrabold mb-4 '> KEEBs </h1>
      <p className=' font-medium text-xl' >    We believe that a keyboard is more than just a tool, it's an extension of your personality,
your mechanical keyboard journey starts here. </p>
    </div>

    <div className='h-[460px] overflow-hidden mt-11 mb-11 flex justify-center items-center'>
      <img src={lowerbanner} className='w-full'/>
    </div>

    <div>asd</div>
    </>
  )
}

export default MainPage