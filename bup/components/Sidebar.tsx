import React from 'react'

const Sidebar = () => {
  return ( 
    <div className=' bg-white fixed right-0 w-14 top-40 p-6 mr-8 rounded h-auto drop-shadow-2xl text-green-900'>
        <ul className='flex justify-center items-center flex-col text-2xl'>
          <li className='p-2 hover:bg-green-900 hover:text-white hover:rounded'><a href=""><i className="fa-regular fa-bell"></i></a></li>
          <li className='p-2 hover:bg-green-900 hover:text-white text-3xl hover:rounded'><a href=""><i className="fa-solid fa-grip-vertical"></i></a></li>
          <li className='p-2 mx-4 hover:bg-green-900 hover:text-white text-xl hover:rounded'><a href=""><i className="fa-solid fa-user-group"></i></a></li>
          <li className='p-2 hover:bg-green-900 hover:text-white hover:rounded'><a href=""><i className="fa-solid fa-book-open-reader"></i></a></li>
          <li className='p-2 hover:bg-green-900 hover:text-white hover:rounded'><a href=""><i className="fa-solid fa-plus"></i></a></li>
        </ul>
    </div>
  )
}

export default Sidebar