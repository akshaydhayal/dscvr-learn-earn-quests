import Navbar from "@/components/Navbar";
import Tracks from "@/components/Tracks";
import { CanvasClient } from "@dscvr-one/canvas-client-sdk";
import { registerCanvasWallet } from "@dscvr-one/canvas-wallet-adapter";
import React from "react";

const HomePage = () => {
  // const canvasClient = new CanvasClient();
  // registerCanvasWallet(canvasClient);
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* <Navbar/> */}

      {/* Main Content */}
      <main className="flex flex-col items-center text-center">
        {/* Hero Section */}
        <section className="bg-blue-800 w-full py-8">
          <h1 className="text-3xl md:text-4xl font-bold">
            {/* Learn to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-green-500">code</span> in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">Web3</span>. Build in less than 60s. */}
            Become a<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"> Web3</span> Pro. Earn
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500"> NFTs</span> as You Learn
          </h1>
          <p className="mt-4 text-lg">Learning is always free. Join Other developers in learning web3, earn NFTs on the way.</p>{" "}
        </section>

        {/* Tracks Section */}
        <Tracks />
        {/* <section className="bg-gray-800 w-full py-12">
          <h2 className="text-xl text-left w-full pl-8 pb-4">Explore all Tracks →</h2>
          <div className="flex justify-center space-x-8">
            {[
              { name: "Ethereum", icon: "🪙" }, 
              { name: "Solana", icon: "🔗" },
              { name: "NEAR", icon: "🛠" },
              { name: "Polygon", icon: "🔶" },
            ].map((track) => (
              <div key={track.name} className="bg-gray-900 rounded-lg p-8 text-center w-64">
                <div className="text-5xl mb-4">{track.icon}</div> 
                <h3 className="text-xl font-semibold">Build on {track.name}</h3>
                <button className="mt-4 px-4 py-2 bg-blue-700 text-white rounded-full">Learn</button>
              </div>
            ))}
          </div>
        </section> */}

        {/* Join Section */}
        <section className="bg-gray-900 w-full py-12 text-center">
          <h2 className="text-3xl font-bold">
            Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">other 10X devs</span>, just like you!
          </h2>
          <p className="mt-4 text-lg">Don’t believe us? See what they are saying about QuestHub.</p>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
