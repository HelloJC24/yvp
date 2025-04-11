import React from "react";
import Img5_1 from "../assets/images/new-images/icon 5-1.png";
import Img7_1 from "../assets/images/new-images/icon 7-1.png";

import { YoutubeIcon } from "../components/Icons";
import TitlteBar from "../components/TitlteBar";

const LearningCentreScreen = () => {
  const youtubeUrl = "https://www.youtube.com/@YourVirtualPartner-i4q";

  return (
    <div className="w-full h-full bg-white relative overflow-hidden">
      <TitlteBar title="Learning Centre" />

      <section className="w-full max-w-7xl mx-auto p-6 pt-10 ">
        <h1 className="text-2xl sm:text-5xl pb-2 text-primary font-semibold">
          <span className="text-gold">YVP Flagship Product</span>
        </h1>
        <div className="w-full relative">
          <img
            src={Img5_1}
            alt="img"
            className="w-full rounded-3xl object-cover sm:max-h-[580px] border border-slate-200"
          />

          {/* <div className="absolute bottom-6 right-6">
            <Button
              fontSize="text-base"
              bg="bg-gold"
              radius="rounded-full"
              padding="py-2 px-8"
            >
              LEARN MORE
            </Button>
          </div> */}
        </div>
      </section>

      <section className="max-w-7xl mx-auto p-6 sm:p-10">
        <h1 className=" text-2xl sm:text-4xl text-primary font-bold pb-6">
          Flagship Coaching Product: "Launch & Level Up: Your VA Success Path"
        </h1>

        <div className="w-full py-6 flex flex-col md:flex-row gap-y-6 sm:gap-x-10">
          <div className="relative">
            <img
              src={Img7_1}
              alt=""
              className="w-full sm:w-[580px] h-full sm:max-h-[350px] object-cover rounded-2xl"
            />

            <div
              onClick={() => window.open(youtubeUrl, "_blank")}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 transition-transform duration-300"
            >
              <YoutubeIcon size={"60"} />
            </div>
          </div>

          <div className="flex-1">
            <h1 className="text-3xl font-semibold text-gold">
              FROM ZERO TO VA HERO
            </h1>

            <div className="py-4">
              <p className="text-xl sm:text-2xl">
                A 1-hour flagship coaching session designed to give you a crash
                course in becoming a VA — even if you’re starting from scratch.
                Perfect for curious beginners, new freelancers, or aspiring
                remote workers.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full py-6 flex flex-col md:flex-row-reverse gap-y-6 sm:gap-x-10">
          <div className="relative">
            <img
              src={Img7_1}
              alt=""
              className="w-full sm:w-[580px] h-full sm:max-h-[350px] object-cover rounded-2xl"
            />

            <div
              onClick={() => window.open(youtubeUrl, "_blank")}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 transition-transform duration-300"
            >
              <YoutubeIcon size={"60"} />
            </div>
          </div>

          <div className="flex-1">
            <h1 className="text-3xl font-semibold text-gold">
              GOAL SETTING WORKSHOP 2025
            </h1>

            <div className="py-4">
              <p className="text-xl sm:text-2xl">
                A power session to help you map out your goals as a virtual
                professional — with focus, purpose, and aligned strategy. we go
                beyond just matching you with a VA. We regularly organize
                workshops, mentorship programs, and training events.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const DescriptionItem = ({ title, text }) => {
  return (
    <p className="text-base sm:text-lg">
      <span className="font-bold">{title}</span> - {text}
    </p>
  );
};

export default LearningCentreScreen;
