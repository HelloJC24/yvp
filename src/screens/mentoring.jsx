import React from "react";
import SplashIcon from "../assets/images/icon.png";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";
import StartConversation from "../components/StartConversation";
import TitlteBar from "../components/TitlteBar";

const MentoringScreen = () => {
  return (
    <div className="w-full h-full bg-white relative overflow-hidden">
      <Header />

      <TitlteBar title="Mentoring" />

      <section className="w-full max-w-7xl mx-auto p-6 pt-10 ">
        <h1 className="text-2xl sm:text-5xl pb-2 text-primary font-semibold">
          <span className="text-gold">Unlock Your Potential</span> with YVP
        </h1>
        <div className="w-full relative">
          <div className="w-full h-full absolute bg-gradient-to-t from-black/80 to-transparent rounded-2xl"></div>
          <img
            src={SplashIcon}
            alt="img"
            className="w-full rounded-3xl object-cover sm:max-h-[580px] border border-slate-200"
          />

          <div className="absolute bottom-6 right-6">
            <Button
              fontSize="text-base"
              bg="bg-gold"
              radius="rounded-full"
              padding="py-2 px-8"
            >
              LEARN MORE
            </Button>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto p-6 sm:p-10">
        <h1 className=" text-2xl sm:text-4xl text-primary font-medium pb-6">
          How We Develop You Personally & Professionally with a heart for
          community?
        </h1>

        <div className="w-full py-6 flex flex-col md:flex-row gap-y-6 sm:gap-x-10">
          <div className="relative">
            <img
              src={SplashIcon}
              alt=""
              className="w-full sm:w-[480px] h-full sm:max-h-[400px] object-cover rounded-2xl"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
              <Button
                fontSize="text-base"
                bg="bg-gold"
                radius="rounded-full"
                padding="py-2 px-8"
              >
                JOIN NOW
              </Button>
            </div>
          </div>

          <div className="flex-1">
            <h1 className="text-3xl font-semibold text-gold">PERSONAL</h1>

            <div className="flex flex-col gap-y-6 py-4">
              <DescriptionItem />
              <DescriptionItem />
              <DescriptionItem />
            </div>
          </div>
        </div>

        <div className="w-full py-6 flex flex-col-reverse md:flex-row-reverse gap-y-6 sm:gap-x-10">
          <div className="relative">
            <img
              src={SplashIcon}
              alt=""
              className="w-full sm:w-[480px] h-full sm:max-h-[400px] object-cover rounded-2xl"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
              <Button
                fontSize="text-base"
                bg="bg-gold"
                radius="rounded-full"
                padding="py-2 px-8"
              >
                JOIN OUR TEAM
              </Button>
            </div>
          </div>

          <div className="flex-1">
            <h1 className="text-3xl font-semibold text-gold">PROFESSIONAL</h1>

            <div className="flex flex-col gap-y-6 py-4">
              <DescriptionItem />
              <DescriptionItem />
              <DescriptionItem />
            </div>
          </div>
        </div>

        <div className="w-full py-6 flex flex-col md:flex-row gap-y-6 sm:gap-x-10">
          <div className="relative">
            <img
              src={SplashIcon}
              alt=""
              className="w-full sm:w-[480px] h-full sm:max-h-[400px] object-cover rounded-2xl"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
              <Button
                fontSize="text-base"
                bg="bg-gold"
                radius="rounded-full"
                padding="py-2 px-8"
              >
                JOIN US
              </Button>
            </div>
          </div>

          <div className="flex-1">
            <h1 className="text-3xl font-semibold text-gold">COMMUNITY</h1>

            <div className="flex flex-col gap-y-6 py-4">
              <DescriptionItem />
              <DescriptionItem />
              <DescriptionItem />
            </div>
          </div>
        </div>
      </section>

      <StartConversation />

      <Footer />
    </div>
  );
};

const DescriptionItem = () => {
  return (
    <div>
      <p className="text-base">
        <span className="font-bold">1. Application & Screening</span> - Lorem
        ipsum, dolor sit amet consectetur adipisicing elit. Magnam, culpa amet
        laboriosam ratione beatae rerum quisquam quibusdam, nostrum, hic maxime
        pariatur magni neque. Consequatur,
      </p>
    </div>
  );
};

export default MentoringScreen;
