import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='h-16   bg-white flex justify-between px-24   items-center' >
        <img className='w-32 ' src="assets\logo.png" alt="" />
        <div className="flex gap-2 ">
           

            <Link to={"/"}  className=' font-semibold text-black text-lg p-2 hover:underline  w-24 '>Home </Link>
            <Link to={"/about"} className='  font-semibold text-black text-lg p-2 hover:underline  w-24' >About Us</Link>
            <Link to={"/Blogs"}  className=' font-semibold text-black text-lg p-2 hover:underline  w-24 '>Blogs </Link>
            <Link to={"/signup"} className='bg-black  font-semibold text-white text-lg p-2 flex justify-center items-center hover:underline  w-24 rounded-3xl' >Sign up</Link>
            <Link to={"/Login"} className='bg-black mx-4 font-semibold text-white text-lg flex justify-center items-center hover:underline  w-24 rounded-3xl' >Sign In</Link>

        </div> 
    </div>
  ) 
}

export default Header







