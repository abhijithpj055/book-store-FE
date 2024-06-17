import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App';
import HomeLayout from './layouts/HomeLayout';
import UserSignInPage from './pages/user/UserSignInPage';
import UserSignUpPage from './pages/user/UserSignUpPage';


const router=createBrowserRouter([
  {
    element:<HomeLayout/>,
    children:[
      {
        path:'/',
        element:<App/>
      },
      {
        path:'/user/signin',
        element:<UserSignInPage/>
      },
      {
        path:'/user/signup',
        element:<UserSignUpPage/>
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
