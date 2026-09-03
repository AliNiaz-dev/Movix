import React from 'react'
import { HiChatBubbleLeft } from "react-icons/hi2";
import { Link } from 'react-router-dom';


const Chatbutton = () => {
  return (
    <div>
       <Link
            to="/chatbot" 
            className="fixed bottom-12 right-12 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600"
          >
            <span className="absolute inset-0 rounded-full bg-blue-600 animate-ping"></span>

            <HiChatBubbleLeft className="relative z-10 text-3xl text-white" />
          </Link>

    </div>
  )
}

export default Chatbutton
