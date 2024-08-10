import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
function Main() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-bg to-white flex flex-col'>
<div className=' text-white text-7xl flex justify-center justify-items-center  pt-32 pb-0 font-extrabold'>Welcome to ServeWrite</div>
  <div className='text-xl font-bold justify-center justify-items-center text-center pl-40 pr-40 h-28 flex items-center pt-8'>At Serve Write, we’re committed to supporting your academic and professional success with our expert assignment services. From essays and research papers to theses and custom projects, our dedicated team ensures high-quality, timely, and original work tailored to your needs.</div>
  <div className="flex justify-center items-center pt-11 pb-5">
  <Image
    src="/cover-image.jpg"
    height={491}
    width={1236}
    alt="cover"
    className="object-cover rounded-md"
  />
</div>

    </div>
  )
}

export default Main;