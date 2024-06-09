import { RouterProvider, createBrowserRouter, useLocation } from 'react-router-dom';
import MainContainer from '../layout/Maincontainer';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import MainPage from '../pages/MainPage';
import NotFound from '../pages/NotFound';
import ProductPage from '../pages/ProductPage';
import ProtectedRoute from '../components/ProtectedRoute';
import ProductContextProvider from '../contexts/ProductContext';
import ProductInfoPage from '../pages/ProductInfoPage';

const router = createBrowserRouter([
      {path: '/' , 
      element:( 
            <ProtectedRoute>
                  <ProductContextProvider>
                        <MainContainer />
                  </ProductContextProvider>
            </ProtectedRoute>
      ),
      errorElement: <NotFound />,
      children: [
            {path: '/', element: <MainPage />},
            {path: '/login', element: <LoginPage />},
            {path: '/register', element: <RegisterPage />},
            {path: '/product', element: <ProductPage />},
            {path: '/product/:productid', element: <ProductInfoPage />},
            
      
      ]

},
      
])



export default function Router() {


   
   return <RouterProvider router={router} />;
}