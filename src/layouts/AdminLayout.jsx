import React from 'react'
import AdminNavbar from '../components/navbar/AdminNavbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'

function AdminLayout() {
  return (
    <div>
        <AdminNavbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default AdminLayout