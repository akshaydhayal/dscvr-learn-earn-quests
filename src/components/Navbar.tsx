"use client";
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useRouter } from 'next/navigation';
import React from 'react'

const Navbar = () => {
  const router=useRouter();
  return (
    <div className="flex justify-between items-center p-4 bg-black">
      <div onClick={()=>router.push("/")} className="text-white font-bold text-xl flex items-center cursor-pointer">
        <span className="mr-2">🔘</span> {/* Placeholder for logo/icon */}
        QuestHub
      </div>
      <nav className="flex items-center space-x-8">
        <a onClick={()=>router.push("/quests")} className="text-white hover:text-gray-300 cursor-pointer">
          Explore Tracks
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          Discord
        </a>
        <WalletMultiButton/>
          <div className="bg-purple-600 w-10 h-10 rounded-full"></div> {/* User avatar placeholder */}
        {/* <div className="flex space-x-4"> */}
        {/* </div> */}
      </nav>
    </div>
  );
}

export default Navbar