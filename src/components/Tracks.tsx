"use client";
import { useRouter } from 'next/navigation';
import React from 'react'

const Tracks = () => {
const router=useRouter();
  return (
      <div className=" bg-gray-900 text-white ">
        {/* Tracks Section */}
        <section className="bg-gray-800 w-full h-full p-8">
          <h2 className="text-xl text-left w-full pl-8 pb-4">Explore all Tracks →</h2>
          <div className="flex justify-center space-x-8">
            {[
              { name: "Blockchain", icon: "🪙" }, // Placeholder icons
              { name: "Solana", icon: "🔗" },
              { name: "Metaplex", icon: "🛠" },
            //   { name: "Polygon", icon: "🔶" },
            ].map((track) => (
              <div key={track.name} className="bg-gray-900 hover:border hover:border-slate-600 rounded-lg p-4 text-center w-56 cursor-pointer" onClick={()=>{
                router.push(`/quests/${track.name.toLowerCase()}`)
              }}>
                <img src={"/"+track.name.toLowerCase()+".png"}/>
                <h3 className="text-xl font-semibold">Intro to {track.name}</h3>
                <button className="mt-4 px-4 py-2 bg-blue-700 text-white rounded-full">Learn</button>
              </div>
            ))}
          </div>
        </section>
      </div>
  );
}

export default Tracks
