import React from 'react'

const Tracks = () => {
  return (
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Tracks Section */}
        <section className="bg-gray-800 w-full h-full py-12">
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
      </div>
  );
}

export default Tracks