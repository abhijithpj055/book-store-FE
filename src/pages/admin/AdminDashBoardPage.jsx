import React from 'react'
import { Link } from 'react-router-dom'
import BOOK from '../../assets/book-admin.png'

function AdminDashBoardPage() {
  return (

    <div className='h-[82vh] flex bg-zinc-900 p-5'>
    <div className='w-full lg:w-3/6 flex flex-col  lg:text-top items-center justify-center'>
    <h1 className='text-4x1 lg:text-6xl font-semibold text-blue-500 text-center lg:text-top'>
         MYBOOKS
    </h1>

    <h4 className='text-2x1 lg:text-3xl font-semibold text-yellow-100 text-center lg:text-left'>
        Welcome....!
    </h4>
    {/* <p className='mt-4 text-xl text-zinc-300 text-center lg:text-center'>
    "A book is a garden, an orchard, a storehouse, a party, a company by the way, a counselor, a multitude of counselors." – Charles Baudelaire

    </p> */}
    <div className='mt-8'>
    <Link to='/admin/add-books' className='text-yellow-100 text-xl  lg:text-2xl bg-red-900 font-semibold border border-yellow-100 px-10 py-3 hover:bg-red-800 rounded-full'>
        ADD BOOKS
    </Link> 

     </div>
    </div>
    <div className='w-full  lg:w-3/6 h-auto lg:h-[100%] flex items-center justify-center '>
    <img src={BOOK} alt="book" />
    </div>
</div>

)
}

export default AdminDashBoardPage