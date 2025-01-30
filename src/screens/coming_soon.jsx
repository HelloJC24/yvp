import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import StartConversation from "../components/StartConversation";
import TitlteBar from "../components/TitlteBar";
const ComingSoonScreen = () => {
  return (
    <div className="w-full h-full bg-white relative overflow-hidden">
      <Header />

      <TitlteBar title="Coming soon" />

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
      <div className="w-80 h-auto">
        <img
          src="https://fruitask.com/assets/file_upload/eLA83DpvIiTsDXN/SkowZHlJSkVTY3JFUkx4eG9sOE9yM0g5UkEvSTdGazQyMHB5WnprMnJQSC9zYjI2YmFHTzN2N2YzK0pPeTdDZ2taND0.jpg"
          alt=""
          className="w-full h-full rounded-xl object-cover"
        />
      </div>
      <h1 className="text-2xl sm:text-4xl md:text-6xl text-slate-300 p-4">
        Under-development
      </h1>
    </div>
  );
};

export default ComingSoonScreen;
