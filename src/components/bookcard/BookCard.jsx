import { Link } from "react-router-dom"
import React from 'react'

const BookCard=({data}) =>{
  console.log(data)
  return (
    <>
    <Link to={`/view-book-details/${data._id}`}>
    <div className="bg-zinc-800 rounded p-4 flex flex-col">
      <div className="bg-zinc-900 rounded flex items-center justify-center">
        <img src={data.image} alt="/" className="'h-[25vh]"/>
      </div>
      <h2 className="mt-4 text-xl text-white font-semibold">{data.title}</h2>
      <p className="mt-2 text-zinc-300 font-semibold ">by {data.author}</p>
      <p className="mt-2 text-white font-semibold text-xl">RS.{data.price}</p>
    </div>
    </Link>
    </>
  )
}

export default BookCard







