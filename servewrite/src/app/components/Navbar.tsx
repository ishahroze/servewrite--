import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function Navbar() {
  return (
   <nav className='flex justify-between bg-bg items-center p-4 text-white border border-b-2 border-white'>
    <div className='flex-1'>
      
    </div>
    <ol className='flex text-xl gap-24 items-center pr-14 text-white'>
        <li>Home</li>
        <li>Our Services</li>
        <li>How Do We Work</li>
        <li>About Us</li>
    </ol>
</nav>

  )
}

export default Navbar