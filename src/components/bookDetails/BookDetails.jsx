import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { GrLanguage } from "react-icons/gr";


function BookDetails() {
  const { id } = useParams()
  console.log(id)
  const [Data, setData] = useState({})
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`http://localhost:3000/api/v1/user/get-book-by-id/${id}`)
      console.log(res)
      const bookData = await res.data;
      setData(bookData)
    }
    getData()
  }, [])

  return (
    <>
      {Data && (
        <div className='px-8 md:px-12 py-8 bg-zinc-900 flex flex-col md:flex-row gap-8'>
          <div className='bg-zinc-800 rounded p-4 h-[60vh] lg:h-[88vh] w-full lg:w-3/6 flex  items-center justify-center'>
            {" "}
            <img src={Data.image} alt="/" className='h-[50vh] lg:h-[70vh] rounded' />
          </div>
          <div className='p-4 w-full lg:w-3/6'>
            <h1 className='text-4xl text-zinc-300 font-semibold'>{Data.title}</h1>
            <p className='text-zinc-400 mt-1'>by {Data.author}</p>
            <p className='text-zinc-500 mt-4 text-xl'>{Data.description}</p>
            <p className='text-zinc-500 mt-4 text-xl'>{Data.category}</p>
            <p className='flex mt-4 items-center justify-start text-zinc-400'>
              <GrLanguage className='me-3' />{Data.language}</p>
            <p className='mt-4 text-zinc-100 text-3xl font-semibold'>Price: {Data.price}{" "}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default BookDetails