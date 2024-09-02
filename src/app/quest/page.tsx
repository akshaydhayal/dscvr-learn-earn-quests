import Navbar from "@/components/Navbar";
import React from "react";

const QuestPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">

        
      {/* <Navbar/> */}

      {/* Breadcrumbs and Title Section */}
      <section className="bg-blue-800 p-4">
        <div className="text-sm text-gray-300">
          <a href="#" className="hover:text-white">
            All tracks
          </a>{" "}
          &gt;{" "}
          <a href="#" className="hover:text-white">
            Build on Solana
          </a>{" "}
          &gt; Building a crowdfunding platform using solana!
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mt-2">Building a crowdfunding platform using solana!</h1>
        <span className="text-yellow-300 mt-2 block text-sm">Beginner Level</span>
      </section>

      {/* Main Content */}
      <main className="flex">
        {/* Sidebar */}
        <aside className="w-1/4 bg-gray-800 p-8 border-r border-gray-700">
          <nav className="space-y-4">
            {[
              "Introduction",
              "Why on solana",
              "Defining our data structure",
              "writing logic",
              "defining the instruction",
              "create campaign",
              "getting status of a campaign",
              "Including the right libraries",
              "Up next",
            ].map((item, index) => (
              <a href="#" className={`block text-lg hover:text-blue-400 ${index === 0 ? "text-green-400" : ""}`} key={index}>
                {index + 1}. {item}
              </a>
            ))}
          </nav>
        </aside>

        {/* Content Section */}
        <section className="w-3/4 p-8">
          <div className="text-sm text-gray-300 flex justify-between">
            <button className="text-gray-400 hover:text-white">&lt; Hide</button>
            <button className="text-gray-400 hover:text-white">Next &gt;</button>
          </div>
          <h2 className="text-2xl font-bold mt-4">Introduction</h2>
          <p className="mt-4 leading-relaxed">
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
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black py-8 text-sm text-gray-400">
        <div className="text-center">
          This quest is open-source. If you find any issues and want to improve the content or contribute in any way, please{" "}
          <a href="#" className="text-blue-400 hover:underline">
            fork this repo
          </a>{" "}
          and raise a PR. We appreciate it. :)
        </div>
        <div className="flex justify-between items-center px-8 mt-4">
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

export default QuestPage;
