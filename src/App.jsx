import { ToastContainer, Slide } from 'react-toastify';
import AuthContextProvider from "./contexts/AuthContext"
import Router from "./route"

function App() {
 

  return (
    <>
    <AuthContextProvider>
      <Router />
      <ToastContainer
      position="top-left"
      autoClose={1000}
      hideProgressBar
      theme="dark"
      transition= {Slide}
      stacked

/>
     
    </AuthContextProvider>
      
     
    </>
  )
}

export default App
