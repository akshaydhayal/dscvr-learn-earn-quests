"use client";
import { useRouter } from "next/navigation";
import React from "react";

const QuestCards = ({trackData,trackName}) => {
  return (
    <div className="bg-gray-900 p-8 px-16 rounded-lg">
      <h2 className="text-white text-2xl font-bold mb-6">Get started</h2>
      <div className="flex gap-8">
        {
            trackData && trackData.subtracks.map((quest,index:number)=>{
                return <Card imageSrc={quest.subtrack_image} trackName={trackName}
                title={quest.heading} subtitle={quest.subheading} xp={quest.points} subtrack_index={index}/>  
            })
        }
      </div>
    </div>
  );
};



const Card = ({ imageSrc, title, subtitle, xp,subtrack_index,trackName }:
    {imageSrc:string,title:string,subtitle:string,xp:string,subtrack_index:number,trackName:string}) => {
  const router=useRouter();
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-2xl w-[19%] border-2 border-slate-500 cursor-pointer
    hover:border-slate-400" onClick={()=>{
        router.push(`/quests/${trackName}/${subtrack_index}`)
    }}>
        <img src={imageSrc} alt={title} loading="lazy" className="w-full h-40 object-cover" />
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
)};


export default QuestCards;
