"use client";
import { ChevronLeft, ChevronRight, Check, Cuboid, Star } from "lucide-react";
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

const QuestPage = ({ params }: { params: { subTrackNo: number; trackName: string } }) => {
  const { trackName, subTrackNo } = params;
  const [pageNo, setPageNo] = useState(0);
  const [quizQuestionNo, setQuizQuestionNo] = useState(-1);
  const [quizAttempted, setQuizAttempted] = useState(false); // Track quiz attempts
  const router = useRouter();

  const [trackData, setTrackData] = useState<trackDataType>();
  const [subtrackData, setSubtrackData] = useState<subtrackDataType>();

  useEffect(() => {
    trackName === "solana" ? setTrackData(solanaQuestData) : trackName === "metaplex" ? setTrackData(metaplexQuestData) : setTrackData(blockchainQuestData);
  }, [trackName]);

  useEffect(() => {
    if (trackData && subTrackNo !== undefined) {
      setSubtrackData(trackData.subtracks[subTrackNo]);
    }
  }, [trackData, subTrackNo]);

  const handleQuizAttempt = () => {
    if (quizQuestionNo === subtrackData.quiz.length - 1) {
      setQuizAttempted(true); // All questions attempted
    }
  };

  if (!trackData || !subtrackData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Breadcrumbs and Title Section */}
      <section className="bg-blue-800 p-4">
        <div className="text-sm text-gray-300">
          <a onClick={() => router.push("/quests")} className="hover:text-white cursor-pointer">
            All tracks
          </a>{" "}
          &gt;{" "}
          <a
            className="hover:text-white cursor-pointer"
            onClick={() => {
              router.push(`/quests/${trackName}`);
            }}
          >
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
            {subtrackData.pages.map((item, index) => (
              <a
                className={`block cursor-pointer text-[16px]  hover:text-blue-400 ${index === pageNo ? "text-green-400" : "text-slate-300"}`}
                onClick={() => {
                  setPageNo(index);
                  setQuizQuestionNo(-1);
                }}
                key={index}
              >
                {index + 1}. {item.heading}
              </a>
            ))}
            {subtrackData.quiz.map((question, index) => {
              return (
                <a
                  className={`block cursor-pointer text-[16px]  hover:text-blue-400 ${index === quizQuestionNo ? "text-green-400" : "text-slate-300"}`}
                  onClick={() => {
                    setQuizQuestionNo(index);
                    setPageNo(-1);
                  }}
                  key={index}
                >
                  {subtrackData.pages.length + index + 1}. Quiz Question {index + 1}
                </a>
              );
            })}
          </nav>
        </aside>

        {/* Content Section */}
        {quizQuestionNo === -1 && (
          <section className="w-3/4 p-8">
            <h2 className="text-2xl font-bold mt-4">{subtrackData?.pages[pageNo].heading}</h2>
            <div className="flex flex-col gap-6 mt-4">
              {subtrackData.pages[pageNo].content.map((para, ind) => (
                <p className="leading-relaxed" key={ind}>
                  {para}
                </p>
              ))}
            </div>
            <NavigationBarr
              pageNo={pageNo}
              setPageNo={setPageNo}
              totalPages={subtrackData.pages.length}
              subtrackData={subtrackData}
              setQuizQuestionNo={setQuizQuestionNo}
            />
          </section>
        )}
        {quizQuestionNo !== -1 && (
          <QuizQuestion
            question={subtrackData.quiz[quizQuestionNo].question}
            options={subtrackData.quiz[quizQuestionNo].options}
            answer={subtrackData.quiz[quizQuestionNo].answer}
            explaination={subtrackData.quiz[quizQuestionNo].explaination}
            quizQuestionNo={quizQuestionNo}
            totalQuestions={subtrackData.quiz.length}
            setQuizQuestionNo={setQuizQuestionNo}
            totalPages={subtrackData.pages.length}
            setPageNo={setPageNo}
            onAttempt={handleQuizAttempt} // Pass the attempt handler
          />
        )}
      </main>

      {/* Conditionally render the RewardsComponent based on quizAttempted state */}
      {quizAttempted && <RewardsComponent />}
    </div>
  );
};


function NavigationBarr({
  pageNo,
  setPageNo,
  totalPages,
  subtrackData,
  setQuizQuestionNo,
}: {
  pageNo: number;
  subtrackData: subtrackDataType;
  totalPages: number;
}) {
  console.log("totalPages : ", totalPages);
  console.log("subtract Data in nav :", subtrackData);
  return (
    <div className="flex justify-between mt-6 border-t border-t-slate-600 py-3">
      <div
        className="flex items-center gap-4 cursor-pointer hover:text-slate-100"
        onClick={() => {
          pageNo > 0 ? setPageNo(pageNo - 1) : setPageNo(pageNo);
        }}
      >
        <p className="text-slate-400 font-medium text-5xl hover:text-slate-300">{`<`}</p>
        <div className="flex flex-col gap-1">
          <p className="text-slate-400 hover:text-slate-300">Prev</p>
          {/* <p className="text-slate-200  font-medium hover:text-slate-100">{(pageNo>0)?(subtrackData?.pages[pageNo-1].heading):(subtrackData?.pages[pageNo].heading)}</p> */}
          <p className="text-slate-200  font-medium hover:text-slate-100">{`${subtrackData?.pages[2].heading}`}</p>
        </div>
      </div>

      <div
        className="flex items-center gap-4 cursor-pointer hover:text-slate-100"
        onClick={() => {
          if (pageNo < totalPages - 1) {
            setPageNo(pageNo + 1);
            // (pageNo<totalPages-1)?setPageNo(pageNo+1):setPageNo(pageNo);
          } else {
            setPageNo(-1);
            setQuizQuestionNo(0);
          }
        }}
      >
        <div className="flex flex-col gap-1">
          <p className="text-slate-400 hover:text-slate-300">Next</p>
          {/* <p className="text-slate-200  font-medium hover:text-slate-100">{(pageNo<totalPages-1)?(`${subtrackData?.pages[pageNo+1].heading}`):(subtrackData.pages[pageNo].heading)}</p> */}
          <p className="text-slate-200  font-medium hover:text-slate-100">{subtrackData?.pages[1].heading}</p>
        </div>
        <p className="text-slate-400 font-medium text-5xl hover:text-slate-300">{`>`}</p>
      </div>
    </div>
  );
}



const QuizQuestion = ({ question, options, answer, explaination, quizQuestionNo, totalQuestions, setQuizQuestionNo, totalPages, setPageNo, onAttempt }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowExplanation(true); // Show explanation after an option is clicked
    onAttempt(); // Call the onAttempt function to indicate the question was attempted
  };

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg max-w-md mx-auto">
      <div className="text-sm mb-4">
        Question {quizQuestionNo + 1} of {totalQuestions}
      </div>
      <h2 className="text-2xl font-bold mb-6">{question}?</h2>
      <div className="space-y-3">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option)}
            className={`w-full text-left py-3 px-4 rounded-md ${
              selectedOption === null
                ? "bg-gray-700 hover:bg-gray-600" // Default state
                : option === answer
                ? "bg-green-500 text-white" // Correct answer
                : option === selectedOption
                ? "bg-red-500 text-white" // Wrong answer
                : "bg-gray-700" // Unselected options after clicking
            }`}
            disabled={selectedOption !== null} // Disable buttons after selection
          >
            <div className="flex items-center">
              {option === answer && selectedOption !== null && <Check className="mr-2" size={20} />}
              <span>{option}</span>
            </div>
          </button>
        ))}
      </div>

      {showExplanation && (
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
            }
          }}
        >
          <ChevronLeft /> Previous
        </button>
        {quizQuestionNo < totalQuestions - 1 && (
          <button className="text-blue-400" onClick={() => setQuizQuestionNo(quizQuestionNo + 1)}>
            Next <ChevronRight />
          </button>
        )}
      </div>
    </div>
  );
};


const RewardsComponent = () => {
  return (
    <div className="bg-gray-900 text-white p-8 font-sans">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <div className="w-24 h-24 bg-gray-800 rounded-lg flex items-center justify-center mb-4">
            {/* <Cube className="w-12 h-12 text-gray-600" /> */}
            <Cuboid className="w-12 h-12 text-gray-600" />
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6">Rewards</h2>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
              <span>Primary address</span>
            </div>
            <button className="text-blue-400 hover:text-blue-300">Linea</button>
          </div>

          <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-between">
            <span>Credential</span>
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

        <button className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Switch to Linea</button>
      </div>
    </div>
  );
};


export default QuestPage;
