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
import MyCart from '../pages/MyCart';
import Checkout from '../pages/Checkout';

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
            {path: '/product/:id', element: <ProductInfoPage />},
            {path: '/cart', element: <MyCart />},
            {path: '/checkout', element: <Checkout />},
            
      
      ]

},
      
])



export default function Router() {


   
   return <RouterProvider router={router} />;
}