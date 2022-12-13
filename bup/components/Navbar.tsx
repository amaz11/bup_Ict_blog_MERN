import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-center items-center space-x-4 bg-green-900 p-3 text-white top-0 sticky'>
        <Image src="/asstes/img/bup.png" width={50} height={50} alt=""/>
        <h3 className='font-bold text-lg '>BUP ICT 21-22</h3>
    </div>
  )
}

export default Navbar