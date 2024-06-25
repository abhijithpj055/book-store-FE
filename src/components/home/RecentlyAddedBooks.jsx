import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BookCard from '../bookcard/BookCard'

function RecentlyAddedBooks() {
    const [Data,setData]=useState()
    useEffect(()=>{
        const getbooks=async()=>{
           const res= await axios.get('http://localhost:3000/api/v1/user/get-books')
           setData(res.data.data)
        }
        getbooks();
    },[])
  return (
    <div className='mt-8 px-4 bg-zinc-200'>
        <h4 className='text-3xl text-yellow-700'>Recently Added Books</h4>
          <div className='my-8 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4'>
            {Data && Data.map((items,index)=><div key={index}>
              <BookCard data={items}/>
            </div>)}
          </div>
    </div>
  )
}

export default RecentlyAddedBooks