import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from '../layout/Maincontainer';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import MainPage from '../pages/MainPage';
import NotFound from '../pages/NotFound';

const router = createBrowserRouter([
      {path: '/' , 
      element: <MainContainer />,
      errorElement: <NotFound />,
      children: [
            {path: '/', element: <MainPage />},
            {path: '/login', element: <LoginPage />},
            {path: '/register', element: <RegisterPage />},
      
      ]

},

])



export default function Router() {
   return <RouterProvider router={router} />;
}