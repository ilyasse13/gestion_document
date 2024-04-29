import React from 'react'
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { useState } from 'react';

const SupLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }
  return (
    <>
   <h1 className="text-3xl font-semibold mb-6">Login to Your Account</h1>
      <form>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">Email</label>
          <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg focus:ring-2 ring-cyan-600 focus:outline-none" />
        </div>
        <div className="mb-4 relative">
          <label htmlFor="password" className="block mb-1">Password</label>
          <input 
            type={showPassword ? 'text' : 'password'} 
            id="password" 
            name="password" 
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 ring-cyan-600 focus:outline-none"
          />
          <button 
            type="button" 
            className="absolute inset-y-0 mt-6 right-0 flex items-center justify-center p-2" 
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <IoMdEyeOff className="h-5 w-5 text-gray-400" /> : <IoEye  className="h-5 w-5 text-gray-400" />}
          </button>
        </div>
        <button type="submit" className="w-full py-2 px-4 bg-cyan-600 text-white rounded-lg transition-colors duration-300 hover:bg-cyan-800">Login</button>
      </form>
    </> 
     )
}

export default SupLogin