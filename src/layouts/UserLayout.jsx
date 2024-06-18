import React from 'react'
import UserNavbar from '../components/navbar/UserNavBarPage'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'

function UserLayout() {
  return (
    <div>
        <UserNavbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default UserLayout