"use client"
import { blockchainQuestData } from "@/blockchainQuestData";
import QuestCards from "@/components/Cards";
import GetStartedSection from "@/components/Cards";
import { metaplexQuestData } from "@/metaplexQuestData";
import { solanaQuestData } from "@/solanaQuestData";
import React, { useEffect, useState } from "react";

export type trackDataType={
  heading: string,subheading: string, track_image:string,points: number,
  subtracks: {
    heading: string,
    subheading: string,
    subtrack_image: string,
    points: number,
    pages:{heading: string,content:string[]}[],
    quiz:{question:string,options:string[],answer:string,explaination:string}[]
  }[]
}

const QuestPage = ({params}:{params:{trackName:string}}) => {
  console.log('track name : ',params.trackName);
  const track=params.trackName;

  // export interface trackDataType{
  const [trackData,setTrackData]=useState<trackDataType>();

  useEffect(()=>{
    track=='solana'?setTrackData(solanaQuestData):(track=='metaplex'?setTrackData(metaplexQuestData):setTrackData(blockchainQuestData))
  },[track])
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="h-56 w-screen relative px-8">
        <img
          className="h-40 rounded-xl w-full object-cover"
          loading="lazy"
          src="https://png.pngtree.com/thumb_back/fw800/background/20240322/pngtree-view-nature-sky-summer-landscape-colorful-sunrise-hd-wallpaper-photographic-image-image_15645045.jpg"
        />
        <div className="pl-12 absolute bottom-2 flex gap-5 items-end">
          <img className="w-24 h-24 rounded-2xl object-cover" src={`/${track}.png`} loading="lazy" />
          <p className="text-2xl font-medium pb-2">{trackData?.heading}</p>
        </div>
      </div>

      <QuestCards trackData={trackData} trackName={track} />
    </div>
  );
};

export default QuestPage;
