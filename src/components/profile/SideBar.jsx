import React from 'react'


function SideBar({data}) {
  return (
    <div className='bg-zinc-800 p-4 mt-4 rounded flex flex-col items-center justify-center'>
      <img src='' alt="" className='h-[10vh]'/>
      <p className='mt-3 text-xl text-zinc-100 font-semibold'>{data.firstName}</p>
    </div>
  )
}

export default SideBar