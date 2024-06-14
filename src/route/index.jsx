import { Outlet, RouterProvider, createBrowserRouter, useLocation } from 'react-router-dom';
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
import AllKeyboardPage from '../pages/AllKeyboardPage';
import AllSwitchPage from '../pages/AllSwitchPage';
import AllKeycapPage from '../pages/AllKeycapPage';
import AllAccessoriesPage from '../pages/AllAccessoriesPage';
import AddressPage from '../pages/AddressPage';
import ProtectUserRoute from '../components/ProtectUserRoute';
import CartContextProvider from '../contexts/CartContext';
import AdminPage from '../pages/AdminPage';
import MyOrderPage from '../pages/MyOrderPage';
import AdminLoginPage from '../pages/AdminLoginPage';
import ProtectedAdminRoute from '../components/ProtectedAdminRoute';


const router = createBrowserRouter([
      {path: '/' , 
      element:( 
            <ProtectedRoute>
                  <ProductContextProvider>
                        <CartContextProvider>
                              <MainContainer />
                        </CartContextProvider>
                  </ProductContextProvider>
            </ProtectedRoute>
      ),
      errorElement: <NotFound />,
      children: [
            {path: '/', element: <MainPage />},
            {path: '/login', element: <LoginPage />},
            {path: '/register', element: <RegisterPage />},
            {path: '/product', element: <ProductPage />},
            // {path: '/product/:id', element: <ProductInfoPage />},
            {path: '/product/productinfo', element: <ProductInfoPage />},
            {path: '/product/keyboard', element: <AllKeyboardPage />},
            {path: '/product/switch', element: <AllSwitchPage />},
            {path: '/product/keycap', element: <AllKeycapPage />},
            {path: '/product/accessories', element: <AllAccessoriesPage />},
            {path: '', element: (
                  <ProtectUserRoute>
                        <Outlet />
                  </ProtectUserRoute>
            ), children: [
                  {path: 'cart', element: <MyCart />},
                  {path: 'checkout', element: <Checkout />},
                  {path: 'profile', element: <AddressPage />},
                  {path: 'myorder', element: <MyOrderPage />},
                
                 
            ]},
      ]}, 

      {path: '/admin', 
      element: ( 
      <ProtectedAdminRoute>
            <Outlet />
      </ProtectedAdminRoute> ),
      errorElement: <NotFound />,
      children: [
       {path: 'login', element: <AdminLoginPage />},
       {path: 'dashboard', element: <AdminPage />}
      ]
},
      // {path: '/admin/dashboard', element: <AdminPage />}
      
     

     
      
])

// <ProtectedAdminRoute>

export default function Router() {


   
   return <RouterProvider router={router} />;
}