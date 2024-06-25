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
import { ChakraProvider } from '@chakra-ui/react'
import UserList from './components/admin/UserList';
// import RecentlyAddedBooks from './components/home/RecentlyAddedBooks';
import AllBooks from './pages/AllBooks';
import BookDetails from './components/bookDetails/BookDetails';
import Profile from './pages/Profile';
import ContactUs from './pages/ContactUs';
import About from './pages/About';



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
      },
      {
        path:'/contact-us',
        element:<ContactUs/>
      },
      {
        path:'/about',
        element:<About/>
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
      },
      {
        path:'/admin/get-users',
        element:<UserList/>
      }
    ]
  },
  {
    element:<UserLayout/>,
    children:[
      {
        path:'/user/dashboard',
        element:<UserDashBoardPage/>
      },
      {
        path:'/user/get-books',
        element:<AllBooks/>
      },
      {
        path:'/view-book-details/:id',
        element:<BookDetails/>
      },
      {
        path:'/profile',
        element:<Profile/>
      },
      {
        path:'/cart'
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
    <RouterProvider router={router}/>
    </ChakraProvider>
  </React.StrictMode>
)
