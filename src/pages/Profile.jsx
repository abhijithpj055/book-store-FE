import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../components/profile/SideBar'
import axios from 'axios'

function Profile() {
  const [Profile,setProfile]=useState({})
  useEffect(()=>{
    const fetch=async ()=>{
      const res=await axios.get('http://localhost:3000/api/v1/user-info')
      setProfile(res.data)
    }
    fetch()
  },[])
  return (
    <div className='bg-zinc-900 px-2 md:px-12 flex  flex-col md:flex-row h-screen gap-4 text-white'>
        <div className='w-1/6'>
            <SideBar data={Profile}/>
        </div>
        <div className='w-5/6'>
          <Outlet/>
        </div>
    </div>
  )
}

export default Profile