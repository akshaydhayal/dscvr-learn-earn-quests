"use client";
import { blockchainQuestData } from "@/blockchainQuestData";
import Navbar from "@/components/Navbar";
import { metaplexQuestData } from "@/metaplexQuestData";
import { solanaQuestData } from "@/solanaQuestData";
import React, { useEffect, useState } from "react";
import { trackDataType } from "../page";
import { useRouter } from "next/navigation";

export type subtrackDataType = {
    heading: string;
    subheading: string;
    subtrack_image: string;
    points: number;
    pages: { heading: string; content: string[] }[];
    quiz: { question: string; options: string[]; answer: string; explaination: string }[];
};

const QuestPage = ({params}:{params:{subTrackNo:number,trackName:string}}) => {
  const {trackName,subTrackNo}=params;
  console.log(params);
  const [pageNo,setPageNo]=useState(0);
  console.log("pageNo : ",pageNo);
  const router=useRouter();

  const [trackData,setTrackData]=useState<trackDataType>();
  
  const [subtrackData,setSubtrackData]=useState<subtrackDataType>();
  useEffect(()=>{
    trackName=='solana'?setTrackData(solanaQuestData):(trackName=='metaplex'?setTrackData(metaplexQuestData):setTrackData(blockchainQuestData))
  },[trackName]);
  console.log("tracksData : ",trackData);

  useEffect(()=>{
    if(trackData && subTrackNo){
      console.log("inside");
      setSubtrackData(trackData.subtracks[subTrackNo]);
    }

  },[trackData,subTrackNo])

  if(!trackData || !subtrackData){
    return<p>Loading...</p>
  }
  return (
    <div className="min-h-screen bg-gray-900 text-white">

      {/* Breadcrumbs and Title Section */}
      <section className="bg-blue-800 p-4">
        <div className="text-sm text-gray-300">
          <a onClick={()=>router.push("/quests")} className="hover:text-white cursor-pointer">
            All tracks
          </a>{" "}
          &gt;{" "}
          <a  className="hover:text-white cursor-pointer" onClick={()=>{
            router.push(`/quests/${trackName}`)
          }}>
            {trackData.heading}
          </a>{" "}
          &gt; {subtrackData.heading}
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mt-2">{subtrackData?.heading}</h1>
        {/* <span className="text-yellow-300 mt-2 block text-sm">Beginner Level</span> */}
      </section>

      {/* Main Content */}
      <main className="flex">
        {/* Sidebar */}
        <aside className="w-1/4 bg-gray-800 p-3 py-8 md:p-8 border-r border-gray-700">
          <nav className="space-y-4">
            {subtrackData && subtrackData.pages.map((item, index) => (
              <a className={`block cursor-pointer text-[16px]  hover:text-blue-400 ${index === pageNo ? "text-green-400" : "text-slate-300"}`} 
              onClick={()=>setPageNo(index)} key={index}>
                {index + 1}. {item.heading} 
              </a>
            ))}
          </nav>
        </aside>

        {/* Content Section */}
        <section className="w-3/4 p-8">
          {/* <div className="text-sm text-gray-300 flex justify-between">
            <button className="text-gray-400 hover:text-white">&lt; Hide</button>
            <button className="text-gray-400 hover:text-white" onClick={()=>setPageNo(pageNo+1)}>Next &gt;</button>
          </div> */}
          <h2 className="text-2xl font-bold mt-4">{subtrackData?.pages[pageNo].heading}</h2>
          <div className="flex flex-col gap-6 mt-4">

          {
            subtrackData.pages[pageNo].content.map((para,ind:number)=>{
              return<p className="leading-relaxed" key={ind}>{para}</p>
            })
          }
          </div>
          {/* <p className="mt-4 leading-relaxed">
            Solana uses Rust as the basic programming language. If you don’t know Rust already, refer to the Rust for Solana Quest (). It is a great primer to
            all the concepts and basics of rust you need to know to get started with writing code for Solana programs.
            <br />
            <br />
            You also need to have a command line understanding. We’ll be operating heavily on the commandline to compile and deploy Solana programs. We
            recommend using Linux, Mac or WSL if you are on windows.
            <br />
            <br />
            You must have Node installed on your machine/WSL. If you don’t, you can head over to the following link to install :{" "}
            <a href="https://nodejs.org/en/download/" className="text-blue-400 hover:underline">
              https://nodejs.org/en/download/
            </a>
            <br />
            <br />
            With these prerequisites, you will be able to launch your own crowdfunding platform on Solana blockchain. You can start crowdfunding and start
            accepting some money for your own little project :)
            <br />
            <br />
            In this Quest we’ll cover the basics of how to write a basic program on Solana and cover some of the fundamentals that come with it.
            <br />
            <br />
            The code we’ll be writing is to run crowdfunding campaigns. Users can request for crowdfunding, and others can send in money to them via this
            program we write.
            <br />
            <br />
            Now, on to building ...
          </p> */}
        {/* <NavigationBar/> */}
        <NavigationBarr pageNo={pageNo} setPageNo={setPageNo} totalPages={subtrackData.pages.length} subtractData={subtrackData}/>
        </section>
      </main>

      
    </div>
  );
};

export default QuestPage;




function NavigationBarr({pageNo,setPageNo,totalPages,subtrackData}:{pageNo:number,subtrackData:subtrackDataType,totalPages:number}){
  console.log("totalPages : ",totalPages);
  console.log("subtract Data in nav :",subtrackData);
  return<div className="flex justify-between mt-6 border-t border-t-slate-600 py-3">
    
    <div className="flex items-center gap-4 cursor-pointer hover:text-slate-100" onClick={()=>{
      pageNo>0?setPageNo(pageNo-1):setPageNo(pageNo);
    }}>
      <p className="text-slate-400 font-medium text-5xl hover:text-slate-300">{`<`}</p>
      <div className="flex flex-col gap-1">
        <p className="text-slate-400 hover:text-slate-300">Prev</p>
        {/* <p className="text-slate-200  font-medium hover:text-slate-100">{(pageNo>0)?(subtrackData?.pages[pageNo-1].heading):(subtrackData?.pages[pageNo].heading)}</p> */}
        <p className="text-slate-200  font-medium hover:text-slate-100">{`${subtrackData?.pages[2].heading}`}</p>
      </div>
    </div>
    
    <div className="flex items-center gap-4 cursor-pointer hover:text-slate-100" onClick={()=>{
      (pageNo<totalPages-1)?setPageNo(pageNo+1):setPageNo(pageNo);
    }}>
      <div className="flex flex-col gap-1">
        <p className="text-slate-400 hover:text-slate-300">Next</p>
        {/* <p className="text-slate-200  font-medium hover:text-slate-100">{(pageNo<totalPages-1)?(`${subtrackData?.pages[pageNo+1].heading}`):(subtrackData.pages[pageNo].heading)}</p> */}
        <p className="text-slate-200  font-medium hover:text-slate-100">{subtrackData?.pages[1].heading}</p>
      </div>
      <p className="text-slate-400 font-medium text-5xl hover:text-slate-300">{`>`}</p>
    </div>
  </div>
}