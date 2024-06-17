import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'

function HomeLayout() {
  return (
    <div>

        <nav>
            <Navbar/>
        </nav>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default HomeLayout