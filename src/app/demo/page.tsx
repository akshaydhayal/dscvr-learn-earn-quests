import React from "react";

const QuestPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative bg-purple-800 p-8">
        <img
          src="background-image-url" // Replace with actual background image
          alt="Polygon 2.0 zkEVM"
          className="w-full h-64 object-cover rounded-lg"
        />
        <div className="absolute top-8 left-8 text-3xl font-bold flex items-center">
          <div className="bg-purple-600 p-4 rounded-full">
            <img
              src="polygon-logo-url" // Replace with actual logo image
              alt="Polygon logo"
              className="w-10 h-10"
            />
          </div>
          <span className="ml-4">Polygon 2.0 zkEVM</span>
        </div>
      </section>
      

      {/* Quests Grid */}
      <section className="px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <img
              src="card-image-url" // Replace with actual card image
              alt="zkEVM Saga begins"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">zkEVM Saga begins</h3>
              <p className="text-gray-400 mt-2">Ended 7 months ago</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-gray-400">Polygon zkEVM Saga</div>
                <div className="bg-gray-700 text-sm py-1 px-3 rounded-full">257.3K</div>
              </div>
            </div>
          </div>
          {/* Repeat similar card structure for the other cards */}
        </div>
      </section>
    </div>
  );
};

export default QuestPage;
