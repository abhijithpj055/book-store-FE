import React from 'react'
import {Link} from 'react-router-dom'
import  BOOK from '../../assets/book1.png'
function UserDashBoardPage() {
  return (

    <div className='h-screen flex bg-zinc-900'>
    <div className='w-full lg:w-3/6 flex flex-col  lg:text-top items-center justify-center'>
    <h1 className='text-4x1 lg:text-6xl font-semibold text-blue-500 text-center lg:text-top'>
        WELCOME TO MYBOOKS
    </h1>

    <h4 className='text-2x1 lg:text-3xl font-semibold text-yellow-100 text-center lg:text-left'>
        FIND YOUR BOOKS...!
    </h4>
    <p className='mt-4 text-xl text-zinc-300 text-center lg:text-center'>
    "A book is a garden, an orchard, a storehouse, a party, a company by the way, a counselor, a multitude of counselors." – Charles Baudelaire

    </p>
    <div className='mt-8'>
    <Link to='/user/get-books' className='text-yellow-100 text-xl  lg:text-2xl font-semibold border border-yellow-100 px-10 py-3 hover:bg-zinc-800 rounded-full'>
        All Books
    </Link> 

     </div>
    </div>
    <div className='w-full  lg:w-3/6 h-auto lg:h-[100%] flex items-center justify-center '>
    <img src={BOOK} alt="book" />
    </div>
    
</div>


)
}

export default UserDashBoardPage