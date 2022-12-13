import React from 'react'

const Profile = () => {
  return (
    <div className=' bg-green-700 w-96 h-full fixed p-6 text-center'>
      <div className='flex justify-center flex-col items-center'>
        <img className=' object-cover w-32 h-32 rounded-full '  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
        <p className='mt-4 font-bold text-2xl'>User Name</p>
        </div>   
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, error!
      </p>
      <p className='font-semibold mt-2'>
        University ID: 25547362202352
      </p>
      <p className='font-semibold'>
        Batch No.: 7
      </p>
      <p className='font-semibold'>
        Session: 2021-2022
      </p>
    </div>
  )
}

export default Profile