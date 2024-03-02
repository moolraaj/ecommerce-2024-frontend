import React from 'react';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
    },
    {
      path: "/login",
      element: <LoginPage/>,
    },
    {
      path: "/signup",
      element: <SignupPage/>,
    },
    {
      path: "/cart",
      element: <CartPage/>,
    },
    {
      path: "/checkout",
      element: <CheckoutPage/>,
    },
]); 

function App() {
  return (
   <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
