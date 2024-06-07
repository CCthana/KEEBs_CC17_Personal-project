import banner from '../assets/KABUKICHOR2.jpg'
import lowerbanner from '../assets/lower_banner.jpg'
import swtich  from '../assets/switch.jpg'
import keyboard from '../assets/keyboard.jpg'

function MainPage() {
  return (
    <>
    <div className='h-[500px] overflow-hidden'>
      <img src={banner}/>
    </div>
    <div className='flex justify-center items-center'>

      <div className='w-96 '>
        <img src={keyboard}/>
      </div>

      <div className='w-96'>
      <img src={swtich}/>
      </div>

     

    </div>

    <div>asd</div>

    <div className='flex justify-center items-center flex-col h-72 bg-kb-gray p-10'>
      <h1 className=' text-5xl font-extrabold mb-4 '> KEEBs </h1>
      <p className=' font-medium text-xl' >    We believe that a keyboard is more than just a tool, it's an extension of your personality,
your mechanical keyboard journey starts here. </p>
    </div>

    <div className='h-[460px] overflow-hidden mt-11 mb-11'>
      <img src={lowerbanner}/>
    </div>
    <div>asd</div>
    </>
  )
}

export default MainPage