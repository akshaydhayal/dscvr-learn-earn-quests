import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-black">
      <div className="text-white font-bold text-xl flex items-center">
        <span className="mr-2">🔘</span> {/* Placeholder for logo/icon */}
        Questbook
      </div>
      <nav className="flex space-x-8">
        <a href="#" className="text-white hover:text-gray-300">
          Explore Tracks
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          Discord
        </a>
          <div className="bg-purple-600 w-10 h-10 rounded-full"></div> {/* User avatar placeholder */}
        {/* <div className="flex space-x-4"> */}
        {/* </div> */}
      </nav>
    </div>
  );
}

export default Navbar