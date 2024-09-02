import React from 'react'

const Nav2 = () => {
  return (
    <div>
      <header className="flex justify-between items-center p-4 bg-black">
        <div className="text-white font-bold text-xl">intract</div>
        <nav className="flex space-x-8 text-gray-400">
          <a href="#" className="text-white border-b-2 border-white">
            Explore
          </a>
          <a href="#" className="hover:text-white">
            Compass
          </a>
          <a href="#" className="hover:text-white">
            Reward
          </a>
          <a href="#" className="hover:text-white">
            Starknet
          </a>
          <a href="#" className="hover:text-white">
            For Projects
          </a>
        </nav>
        <div className="flex space-x-4">
          <input type="text" placeholder="Search for ecosystems, trending quests etc." className="bg-gray-800 text-white px-4 py-2 rounded-md w-96" />
          <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-md">Mark Streak!</button>
          <div className="bg-purple-600 w-10 h-10 rounded-full"></div> {/* User avatar placeholder */}
        </div>
      </header>
    </div>
  );
}

export default Nav2