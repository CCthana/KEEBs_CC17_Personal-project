import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from '../layout/Maincontainer';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

const router = createBrowserRouter([
      {path: '/' , 
      element: <MainContainer />,
      children: [
            {path: '/login', element: <LoginPage />},
            {path: '/register', element: <RegisterPage />},
      ]

},

])



export default function Router() {
   return <RouterProvider router={router} />;
}