import React from "react";
import Icon from "../assets/images/icon.png";
import Footer from "../components/Footer";
import Header from "../components/Header";
import StartConversation from "../components/StartConversation";
import TitlteBar from "../components/TitlteBar";
const CommingSoonScreen = () => {
  return (
    <div className="w-full h-full bg-white">
      <Header />

      <TitlteBar title="Comming soon" />

      <main className="w-full p-20">
        <UnderDevelopment />
      </main>

      <StartConversation />

      <Footer />
    </div>
  );
};

const UnderDevelopment = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <img
        src={Icon}
        alt=""
        className="w-full h-full rounded-xl object-cover"
      />
      <h1 className="text-2xl sm:text-4xl md:text-6xl text-slate-300 p-4">
        Under-development
      </h1>
    </div>
  );
};

export default CommingSoonScreen;
