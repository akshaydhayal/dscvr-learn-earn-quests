import React from "react";

const Card = ({ imageSrc, title, subtitle, xp }:
    {imageSrc:string,title:string,subtitle:string,xp:string}) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-2xl w-[19%] border-2 border-slate-500 cursor-pointer hover:border-slate-400">
    <img src={imageSrc} alt={title} className="w-full h-40 object-cover" />
    <div className="px-4 p-3">
      <h3 className="text-slate-100 text-lg font-semibold">{title}</h3>
      <p className="text-gray-300 ">{subtitle}</p>
      <div className="flex items-center mt-2">
        <div className="flex items-center bg-green-600 text-white text-sm font-medium py-[0.5px] px-2 rounded-full">
          <span>XP</span>
          <span className="ml-2">{xp}</span>
        </div>
      </div>
    </div>
  </div>
);

const QuestCards = () => {
  const questDetails = [
    {
      imageSrc: "https://seeklogo.com/images/P/polygon-matic-logo-7D8F780975-seeklogo.com.png",
      title: "Quest 1 lorem10 jkrjf newk njk jk kjbkjb njk ",
      subtitle: "Subtitle 1",
      xp: 100,
    },
    {
      imageSrc: "https://seeklogo.com/images/P/polygon-matic-logo-7D8F780975-seeklogo.com.png",
      title: "Quest 1",
      subtitle: "Subtitle 1",
      xp: 100,
    },
    {
      imageSrc: "https://seeklogo.com/images/P/polygon-matic-logo-7D8F780975-seeklogo.com.png",
      title: "Quest 1",
      subtitle: "Subtitle 1",
      xp: 100,
    },
    {
      imageSrc: "https://seeklogo.com/images/P/polygon-matic-logo-7D8F780975-seeklogo.com.png",
      title: "Quest 1",
      subtitle: "Subtitle 1",
      xp: 100,
    },
  ];
  return (
    <div className="bg-gray-900 p-8 px-16 rounded-lg">
      <h2 className="text-white text-2xl font-bold mb-6">Get started</h2>
      <div className="flex gap-8">
        {
            questDetails.map((quest)=>{
                return <Card imageSrc={quest.imageSrc} 
                title={quest.title} subtitle={quest.subtitle} xp={quest.xp} />  
            })
        }
        {/* <Card imageSrc="https://seeklogo.com/images/P/polygon-matic-logo-7D8F780975-seeklogo.com.png" title="Get Started" subtitle="Layer3" xp="10" />
        <Card
          imageSrc="https://seeklogo.com/images/P/polygon-matic-logo-7D8F780975-seeklogo.com.png"
          title="How to Bridge to Layer2s"
          subtitle="Layer3"
          xp="25"
        />
        <Card imageSrc="https://seeklogo.com/images/P/polygon-matic-logo-7D8F780975-seeklogo.com.png" title="Beyond Ethereum" subtitle="Layer3" xp="50" />
        <Card imageSrc="https://seeklogo.com/images/P/polygon-matic-logo-7D8F780975-seeklogo.com.png" title="NFTs for Beginners" subtitle="Layer3" xp="75" /> */}
      </div>
    </div>
  );
};

export default QuestCards;
