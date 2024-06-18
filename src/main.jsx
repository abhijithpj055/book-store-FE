import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App';
import HomeLayout from './layouts/HomeLayout';
import UserSignInPage from './pages/user/UserSignInPage';
import UserSignUpPage from './pages/user/UserSignUpPage';
import AdminSignInPage from './pages/admin/AdminSignInPage';
import AdminSignUpPage from './pages/admin/AdminSignUpPage';
import AdminLayout from './layouts/AdminLayout';
import AdminDashBoardPage from './pages/admin/AdminDashBoardPage';
import UserLayout from './layouts/UserLayout';
import UserDashBoardPage from './pages/user/UserDashBoardPage';
import BookAdd from './components/admin/BookAdd';


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
      },
      {
        path:'/admin/signin',
        element:<AdminSignInPage/>
      },
      {
        path:'/admin/signup',
        element:<AdminSignUpPage/>
      }
    ]
  },
  {
    element:<AdminLayout/>,
    children:[
      {
        path:'/admin/dashboard',
        element:<AdminDashBoardPage/>
      },
      {
        path:'/admin/add-books',
        element:<BookAdd/>
      }
    ]
  },
  {
    element:<UserLayout/>,
    children:[
      {
        path:'/user/dashboard',
        element:<UserDashBoardPage/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
