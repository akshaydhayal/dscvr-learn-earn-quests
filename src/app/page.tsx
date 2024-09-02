import Navbar from "@/components/Navbar";
import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* <Navbar/> */}
      
      {/* Main Content */}
      <main className="flex flex-col items-center text-center">
        {/* Hero Section */}
        <section className="bg-blue-800 w-full py-16">
          <h1 className="text-4xl md:text-6xl font-bold">
            Learn to <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-green-500">code</span> in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">Web3</span>. Build in less than 60s.
          </h1>
          <p className="mt-4 text-lg">Learning is always free. Join 15,000+ developers in learning web3, earn crypto and NFTs on the way.</p>
        </section>

        {/* Tracks Section */}
        <section className="bg-gray-800 w-full py-12">
          <h2 className="text-xl text-left w-full pl-8 pb-4">Explore all Tracks →</h2>
          <div className="flex justify-center space-x-8">
            {[
              { name: "Ethereum", icon: "🪙" }, // Placeholder icons
              { name: "Solana", icon: "🔗" },
              { name: "NEAR", icon: "🛠" },
              { name: "Polygon", icon: "🔶" },
            ].map((track) => (
              <div key={track.name} className="bg-gray-900 rounded-lg p-8 text-center w-64">
                <div className="text-5xl mb-4">{track.icon}</div> {/* Icon */}
                <h3 className="text-xl font-semibold">Build on {track.name}</h3>
                <button className="mt-4 px-4 py-2 bg-blue-700 text-white rounded-full">Learn</button>
              </div>
            ))}
          </div>
        </section>

        {/* Join Section */}
        <section className="bg-gray-900 w-full py-12 text-center">
          <h2 className="text-3xl font-bold">
            Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">15,000+ builders</span>, just like you!
          </h2>
          <p className="mt-4 text-lg">Don’t believe us? See what they are saying about Questbook.</p>
        </section>

        {/* Partners Section */}
        <section className="bg-blue-800 w-full py-12 text-center">
          <h2 className="text-3xl font-bold mb-8">Our partners</h2>
          <p className="mb-8">We are backed by the best. Build alongside the best.</p>
          <div className="flex justify-center space-x-8">
            {/* Placeholder for logos */}
            <div className="w-32 h-32 bg-gray-700 rounded-lg flex items-center justify-center text-4xl">Y</div>
            <div className="w-32 h-32 bg-gray-700 rounded-lg flex items-center justify-center text-4xl">S</div>
            <div className="w-32 h-32 bg-gray-700 rounded-lg flex items-center justify-center text-4xl">E</div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black py-8 text-sm text-gray-400">
        <div className="flex justify-between items-center px-8">
          <div className="space-y-2">
            <div className="text-white font-bold flex items-center">
              <span className="mr-2">🔘</span> {/* Placeholder for logo/icon */}
              Questbook
            </div>
            <p>Connect with us on:</p>
            <div className="flex space-x-4">
              {/* Social icons (Placeholder) */}
              <span>🔗</span>
              <span>🔗</span>
              <span>🔗</span>
            </div>
          </div>
          <div>
            <p>992 San Antonio Road, Palo Alto, CA 94303</p>
            <p>Palo Alto, CA 94303</p>
            <p>support@questbook.app</p>
          </div>
          <div className="space-y-2">
            <p>Mobile Apps</p>
            {/* App Store Icons (Placeholder) */}
            <div className="flex space-x-2">
              <span className="bg-gray-700 p-2 rounded">📱</span>
              <span className="bg-gray-700 p-2 rounded">📱</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
