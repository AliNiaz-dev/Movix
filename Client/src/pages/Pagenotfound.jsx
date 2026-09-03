import React from 'react'
import Chatbutton from '../components/chatbutton';


const Pagenotfound = () => {
  return (
    <section>
      <div className='flex flex-col items-center justify-center h-screen'>
        <h1 className='text-6xl font-bold text-gray-700 dark:text-white'>404</h1>
        <p className='text-xl text-gray-500 dark:text-gray-400'>Page Not Found</p>
         <Chatbutton />
      </div>
    </section>
  )
}

export default Pagenotfound
