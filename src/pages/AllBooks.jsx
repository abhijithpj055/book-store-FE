import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BookCard from '../components/bookcard/BookCard.jsx'

function AllBooks() {
    const [Data,setData]=useState()
    useEffect(()=>{
        const getbooks=async()=>{
           const res= await axios.get('https://book-store-be-71pw.onrender.com/api/v1/user/get-books')
           setData(res.data)
        }
        getbooks();
    },[])
  return (
    <div className='bg-zinc-900 h-auto px-12 py-8'>
        <h4 className='text-3xl text-yellow-600'>All Books</h4>    
          <div className='my-8 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4'>
            {Data && Data.map((items,index)=>(<div key={index}>
              <BookCard data={items}/> {" "}
            </div>))} 
           </div>
    </div>
  )
}

export default AllBooks