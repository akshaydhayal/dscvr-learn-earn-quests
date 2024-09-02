import React from "react";

const Card = ({ imageSrc, title, subtitle, xp }) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
    <img src={imageSrc} alt={title} className="w-full h-40 object-cover" />
    <div className="p-4">
      <h3 className="text-white text-lg font-bold">{title}</h3>
      <p className="text-gray-400">{subtitle}</p>
      <div className="flex items-center mt-4">
        <div className="flex items-center bg-green-600 text-white text-sm font-medium py-1 px-3 rounded-full">
          <span>XP</span>
          <span className="ml-2">{xp}</span>
        </div>
      </div>
    </div>
  </div>
);

const GetStartedSection = () => {
  return (
    <div className="bg-gray-900 p-8 rounded-lg">
      <h2 className="text-white text-2xl font-bold mb-6">Get started</h2>
      <div className="flex space-x-4 overflow-x-scroll">
        <Card imageSrc="image-url-1" title="Get Started" subtitle="Layer3" xp="10" />
        <Card imageSrc="image-url-2" title="How to Bridge to Layer2s" subtitle="Layer3" xp="25" />
        <Card imageSrc="image-url-3" title="Beyond Ethereum" subtitle="Layer3" xp="50" />
        <Card imageSrc="image-url-4" title="NFTs for Beginners" subtitle="Layer3" xp="75" />
      </div>
    </div>
  );
};

export default GetStartedSection;
