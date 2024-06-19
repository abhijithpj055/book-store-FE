import React from 'react'
import LOGO from '../../assets/stack-of-books.png'
import { Link } from 'react-router-dom'

function AdminNavbar() {
    const navLinks=[
        {
            path:"/admin/dashboard",
            value:"Dashboard"
        },
    //     {
    //         path:"/get-courses",
    //         value:"Books",
    //     },
    //     {
    //         path:"/get-users",
    //         value:"Users",
    //     },
    ]

  return (
    <div className='flex bg-zinc-800 text-white px-4 py-4 items-center justify-between'>
        <div className='flex item-center'>
            <img className='h-10 me-4' src={LOGO} alt="logo" />
            <h1 className='text-2xl font-semibold'>MyBooks</h1>
        </div>
        <div >
        <ul className='flex items-center justify-between gap-x-8'>
                {navLinks.map((link,index)=>(
                    <Link key={index} to={link.path}>
                        <li className="text-lg font-semibold text-white hover:text-blue-500 transition-all duration-300">
                            {link.value}
                        </li>
                    </Link>
                ))}
            </ul>

        </div>
        <div className='flex gap-4'>
            <Link to="/admin/get-books" className='px-2 py-1 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300'>
                Books
            </Link>
            <Link to='/admin/get-users' className='px-2 py-1 bg-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300'>
                Users
            </Link>
        </div>
    </div>
  )
}

export default AdminNavbar