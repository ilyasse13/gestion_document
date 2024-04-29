import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const LoginLayout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center" style={{backgroundImage: "url('loginBG.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}>
  <Link>
    <img src="removedBGComdata.png" className='h-28 mb-9 -mt-20' alt="" />
  </Link>  
  <div className="bg-gray-50 rounded-lg shadow-lg p-8 w-full md:w-1/3">
       <Outlet/>
    </div>
</div>
  )
}

export default LoginLayout