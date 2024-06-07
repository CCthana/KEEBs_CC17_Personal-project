import banner from '../assets/KABUKICHOR2.jpg'
import Footer from '../layout/Footer'
import Header from '../layout/Header'

function NotFound() {
  return (
   <>
      <Header />
      <div className='h-[500px]'>
         <img src={banner}/>
      </div>
      <Footer />
   </>
  )
}

export default NotFound