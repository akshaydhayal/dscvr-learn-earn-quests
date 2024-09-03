"use client";
import { ChevronLeft, ChevronRight, Check,Cuboid,Star } from "lucide-react";
import { blockchainQuestData } from "@/blockchainQuestData";
import Navbar from "@/components/Navbar";
import { metaplexQuestData } from "@/metaplexQuestData";
import { solanaQuestData } from "@/solanaQuestData";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { trackDataType } from "../page";
import { useRouter } from "next/navigation";

import { useWallet } from "@solana/wallet-adapter-react";
import { createAsset } from "@/utils/createAsset";



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
  const [quizQuestionNo,setQuizQuestionNo]=useState(-1);
  const [showRewards,setShowRewards]=useState(false);

  
  console.log("pageNo : ",pageNo);
  const router=useRouter();
  
  const [trackData,setTrackData]=useState<trackDataType>();
  
  const [subtrackData,setSubtrackData]=useState<subtrackDataType>();
  const [quizResponses,setQuizResponses]=useState([]);

    // const [quizResponses, setQuizResponses] = useState(
    //   subtrackData?.quiz?.map(() => ({
    //     selectedOption: null,
    //     showExplanation: false,
    //   }))
    // );

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

    useEffect(() => {
      const initialResponses = subtrackData?.quiz?.map(() => ({
        selectedOption: null,
        showExplanation: false,
      }));
      //@ts-ignore
      setQuizResponses(initialResponses);
    }, [subtrackData?.quiz]);

    useEffect(() => {
      if (quizResponses?.length > 0 && quizResponses.every((response:any) => response.selectedOption !== null)) {
        setShowRewards(true);
      }
    }, [quizResponses]);

  if(!trackData || !subtrackData || !subtrackData.pages || !subtrackData.quiz){
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
      </section>

      {/* Main Content */}
      <main className="flex">
        {/* Sidebar */}
        <aside className="w-1/4 bg-gray-800 p-3 py-8 md:p-8 border-r border-gray-700">
          <nav className="space-y-4">
            {subtrackData && subtrackData.pages?.map((item, index) => (
              <a className={`block cursor-pointer text-[16px]  hover:text-blue-400 ${index === pageNo ? "text-green-400" : "text-slate-300"}`} 
              onClick={()=>{
                setPageNo(index);
                setQuizQuestionNo(-1);
              }} key={index}>
                {index + 1}. {item.heading} 
              </a>
            ))}
            {subtrackData.quiz?.map((question,index:number)=>{
              return <a className={`block cursor-pointer text-[16px]  hover:text-blue-400 ${index === quizQuestionNo ? "text-green-400" : "text-slate-300"}`} 
              onClick={()=>{
                setQuizQuestionNo(index);
                setPageNo(-1);
              }} key={index}>
                {subtrackData.pages.length+index + 1}. Quiz Question {index+1}
              </a>
            })}
          </nav>
        </aside>

        {/* Content Section */}

        {quizQuestionNo==-1 && <section className="w-3/4 p-8">
          <h2 className="text-2xl font-bold mt-4">{subtrackData.pages && subtrackData.pages.length>0 && subtrackData.pages[pageNo].heading}</h2>
          <div className="flex flex-col gap-6 mt-4">
          {
            subtrackData.pages && subtrackData.pages[pageNo].content.map((para,ind:number)=>{
              return<p className="leading-relaxed" key={ind}>{para}</p>
            })
          }
          </div>
          {
        
        //@ts-ignore
        <NavigationBarr pageNo={pageNo} setPageNo={setPageNo} totalPages={subtrackData.pages.length} subtractData={subtrackData} setQuizQuestionNo={setQuizQuestionNo}/>
          }
        </section>
        }
        {/* {quizQuestionNo!=-1 && subtrackData.quiz.map((question,ind)=>{
          return <QuizQuestion question={question.question} options={question.options}
          answer={question.answer} explaination={question.explaination} questionNo={ind}/>}
          )} */}

        {/* {quizQuestionNo==-2 && attemptedQuestions.length==subtrackData.quiz.length && <RewardsComponent/>} */}
        {quizQuestionNo==-2 && showRewards && <RewardsComponent trackName={trackName} subTrackNo={subTrackNo}/>}

        {/* @ts-ignore */}
        {quizQuestionNo!=-1 &&quizQuestionNo!=-2 && <QuizQuestion question={subtrackData.quiz[quizQuestionNo]?.question} options={subtrackData.quiz[quizQuestionNo]?.options}
          answer={subtrackData.quiz[quizQuestionNo]?.answer} explaination={subtrackData.quiz[quizQuestionNo]?.explaination} quizQuestionNo={quizQuestionNo}
           totalQuestions={subtrackData.quiz.length} setQuizQuestionNo={setQuizQuestionNo} totalPages={subtrackData.pages.length} 
           setPageNo={setPageNo} setShowRewards={setShowRewards} quizResponses={quizResponses} setQuizResponses={setQuizResponses}/>}

      </main>

      
    </div>
  );
};

export default QuestPage;




function NavigationBarr({pageNo,setPageNo,totalPages,subtrackData,setQuizQuestionNo}:
  {pageNo:number,setPageNo:Dispatch<React.SetStateAction<number>> ,subtrackData:subtrackDataType,setQuizQuestionNo:Dispatch<React.SetStateAction<number>>,totalPages:number}){
  console.log("totalPages : ",totalPages);
  console.log("subtract Data in nav :",subtrackData);
  return (<div className="flex justify-between mt-6 border-t border-t-slate-600 py-3">
    
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
      if(pageNo<totalPages-1){
        setPageNo(pageNo+1)
        // (pageNo<totalPages-1)?setPageNo(pageNo+1):setPageNo(pageNo);
      }else{
        setPageNo(-1);
        setQuizQuestionNo(0);
      }
    }}>
      <div className="flex flex-col gap-1">
        <p className="text-slate-400 hover:text-slate-300">Next</p>
        {/* <p className="text-slate-200  font-medium hover:text-slate-100">{(pageNo<totalPages-1)?(`${subtrackData?.pages[pageNo+1].heading}`):(subtrackData.pages[pageNo].heading)}</p> */}
        <p className="text-slate-200  font-medium hover:text-slate-100">{subtrackData?.pages[1].heading}</p>
      </div>
      <p className="text-slate-400 font-medium text-5xl hover:text-slate-300">{`>`}</p>
    </div>
  </div>)
}




//@ts-ignore
interface QuizQuestionType {
  question: string;
  options: string[];
  answer: string;
  explaination: string;
  totalPages: number;
  totalQuestions: number;
  quizQuestionNo: number;
  setQuizQuestionNo: Dispatch<React.SetStateAction<number>>;
  setPageNo: Dispatch<React.SetStateAction<number>>;
  setShowRewards: Dispatch<React.SetStateAction<boolean>>;
  quizResponses: { selectedOption: any; showExplanation: boolean }[];
  // setQuizResponses: Dispatch<React.SetStateAction<{ selectedOption: any; showExplanation: boolean }[]>>;
  setQuizResponses: any;
}



//@ts-ignore
const QuizQuestion = ({
  question,
  options,
  answer,
  explaination,
  quizQuestionNo,
  totalQuestions,
  setQuizQuestionNo,
  totalPages,
  setPageNo,
  setShowRewards,
  quizResponses,
  setQuizResponses,
}:QuizQuestionType) => {
  // Initialize state based on quizResponses for the current question
  const currentResponse = quizResponses[quizQuestionNo] || { selectedOption: null, showExplanation: false };
  console.log("quiz Responses : ",quizResponses);
  console.log("quiz Responses : ",quizResponses[quizQuestionNo]);

  const handleOptionClick = (option:any) => {
    const newQuizResponses = [...quizResponses];
    newQuizResponses[quizQuestionNo] = {
      selectedOption: option,
      showExplanation: true,
    };
    setQuizResponses(newQuizResponses);
    // setQuizResponses(quizResponses.map((i)=>{
    //     return (i==quizQuestionNo?{selectedOption:option,showExplanation:true}:i);
    //   })
    // );

    // Mark the question as attempted
    // setAttemptedQuestions((old) => [...new Set([...old, quizQuestionNo])]);
  };

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg max-w-md mx-auto">
      <div className="text-sm mb-4">
        Question {quizQuestionNo + 1} of {totalQuestions}
      </div>
      <h2 className="text-2xl font-bold mb-6">{question}?</h2>
      <div className="space-y-3">
        {options?.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option)}
            className={`w-full text-left py-3 px-4 rounded-md ${
              currentResponse.selectedOption === null
                ? "bg-gray-700 hover:bg-gray-600" // Default state
                : option === answer
                ? "bg-green-500 text-white" // Correct answer
                : option === currentResponse.selectedOption
                ? "bg-red-500 text-white" // Wrong answer
                : "bg-gray-700" // Unselected options after clicking
            }`}
            disabled={currentResponse.selectedOption !== null} // Disable buttons after selection
          >
            <div className="flex items-center">
              {option === answer && currentResponse.selectedOption !== null && <Check className="mr-2" size={20} />}
              <span>{option}</span>
            </div>
          </button>
        ))}
      </div>

      {currentResponse.showExplanation && (
        <div className="mt-4 bg-gray-800 p-4 rounded-md">
          <h3 className="text-lg font-bold">Explanation:</h3>
          <p>{explaination}</p>
        </div>
      )}

      <div className="flex justify-between items-center mt-6">
        <button
          className="text-blue-400"
          onClick={() => {
            if (quizQuestionNo > 0) {
              setQuizQuestionNo(quizQuestionNo - 1);
            } else {
              setPageNo(totalPages - 1);
              setQuizQuestionNo(-1);
            }
          }}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
          onClick={() => {
            if (quizQuestionNo < totalQuestions - 1) {
              setQuizQuestionNo(quizQuestionNo + 1);
            } else {
              setQuizQuestionNo(-2);
              setShowRewards(true);
            }
          }}
          disabled={currentResponse.selectedOption === null} // Disable if no option selected
        >
          Continue
        </button>
        <button
          className="text-blue-400"
          onClick={() => {
            if (quizQuestionNo < totalQuestions - 1) {
              setQuizQuestionNo(quizQuestionNo + 1);
            } else {
              setQuizQuestionNo(-2);
              setShowRewards(true);
            }
          }}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};





const RewardsComponent = ({ trackName, subTrackNo }) => {
  // const { publicKey, sendTransaction } = useWallet();
  // if (!publicKey) {
  //   console.log("Wallet not connected");
  // }
  // console.log("public key : ", publicKey);
  const wallet = useWallet();
  if (!wallet) {
    console.log("Wallet not connected");
  }
  console.log("wallet : ", wallet);

  return (
    <div className="bg-gray-900 text-white p-8 font-sans w-full">
      <div className="max-w-md mx-auto">
        <div className="mb-6 w-full flex items-center gap-6">
          <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center mb-4">
            {/* <Cube className="w-12 h-12 text-gray-600" /> */}
            <Cuboid className="w-14 h-14 text-gray-600" />
          </div>
          <h2 className="text-2xl font-bold ">Rewards</h2>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
              <span>Primary address</span>
            </div>
            <button className="text-blue-400 hover:text-blue-300">Linea</button>
          </div>

          <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-between">
            <span>Track Completion NFT</span>
            <div className="w-5 h-5 bg-yellow-600 rounded"></div>
          </div>

          <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-between">
            <span>XP</span>
            <div className="flex items-center">
              <Star className="w-5 h-5 text-green-400 mr-1" />
              <span>75 XP</span>
            </div>
          </div>
        </div>

        <button
          className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 
        px-4 rounded"
          onClick={() => {
            createAsset(wallet, trackName, subTrackNo);
          }}
        >
          Mint your NFT badge!!
        </button>
      </div>
    </div>
  );
};