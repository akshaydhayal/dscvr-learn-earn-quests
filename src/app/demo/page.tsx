import QuestCards from "@/components/Cards";
import GetStartedSection from "@/components/Cards";
import React from "react";

const QuestPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="h-56 w-screen relative px-8">
        <img className="h-40 rounded-xl w-full object-cover" src="https://i.pinimg.com/originals/c8/92/3a/c8923a22e89512a7b54951c745afdb6d.jpg" />
        <div className="pl-12 absolute bottom-2 flex gap-5 items-end">
          <img className="w-24 h-24 rounded-2xl object-cover" src="https://seeklogo.com/images/P/polygon-matic-logo-7D8F780975-seeklogo.com.png" />
          <p className="text-2xl font-medium pb-2">Polygon 2.0 zkEVM</p>
        </div>
      </div>      

      <QuestCards/>
    </div>
  );
};

export default QuestPage;
