import React from 'react'

function Footer() {
  return (
    <div className='bg-black flex flex-col items-center'>
      
        {/* <img className='w-32' src="assets\logo.png" alt="" /> */}
        
        <div className="flex gap-5 ">
           <p className='hover:underline'>Home</p> 
          <p className='hover:underline'>About</p>
          <p className='hover:underline'>Blogs</p>
          <p className='hover:underline'>contact us</p>
         
          
        </div>
      
    </div>
  )
}

export default Footer
