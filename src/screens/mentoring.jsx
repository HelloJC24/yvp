import React from "react";
import Img5_1 from "../assets/images/new-images/icon 5-1.png";
import Img6_1 from "../assets/images/new-images/icon 6-1.png";
import Img7_1 from "../assets/images/new-images/icon 7-1.png";
import Img8_1 from "../assets/images/new-images/icon 8-1.png";

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
          <img
            src={Img5_1}
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
        <h1 className=" text-2xl sm:text-4xl text-primary font-bold pb-6">
          How We Develop You Personally & Professionally with a heart for
          community?
        </h1>

        <div className="w-full py-6 flex flex-col md:flex-row gap-y-6 sm:gap-x-10">
          <div className="relative">
            <img
              src={Img7_1}
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
              <DescriptionItem
                title="1. Success Coaching Inspired by Tony Robbins"
                text="Learn goal-setting techniques, peak performance habits, and leadership skills used by the world’s top professionals."
              />
              <DescriptionItem
                title="2. Mindset & Motivation Training"
                text="Develop a strong, resilient mindset to overcome challenges and achieve lasting success in your career."
              />
              <DescriptionItem
                title="3. Personal Branding & Influence"
                text=" Learn how to position yourself as a top-tier virtual professional, attract better clients, and elevate your career."
              />
            </div>
          </div>
        </div>

        <div className="w-full py-6 flex flex-col-reverse md:flex-row-reverse gap-y-6 sm:gap-x-10">
          <div className="relative">
            <img
              src={Img6_1}
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
              <DescriptionItem
                title="1. Emotional Mastery & Communication"
                text="Master powerful communication strategies that help you build trust, close deals, and create meaningful connections."
              />
              <DescriptionItem
                title="2. Exclusive Access to Tony Robbins’ Insights"
                text="Get key takeaways from live events, training sessions, and success strategies that empower you to grow both professionally and personally."
              />
              <DescriptionItem
                title="3. A Growth-Driven Community"
                text="Learn how to position yourself as a top-tier virtual professional, attract better clients, and elevate your career."
              />
            </div>
          </div>
        </div>

        <div className="w-full py-6 flex flex-col md:flex-row gap-y-6 sm:gap-x-10">
          <div className="relative">
            <img
              src={Img8_1}
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
              <DescriptionItem
                title="1. Volunteerism & Employee Engagement"
                text="Our YVP team members take part in community outreach, feeding programs, and educational initiatives, making a direct impact on people’s lives."
              />
              <DescriptionItem
                title="2. Educational & Leadership Programs"
                text="YVP believes in nurturing future leaders, so we support skill-building workshops that equip underprivileged youth with the tools to succeed."
              />
              <DescriptionItem
                title="3. Creating a Culture of Giving"
                text="Surround yourself with ambitious, like-minded professionals who push each other to new levels of success."
              />
            </div>
          </div>
        </div>
      </section>

      <StartConversation />

      <Footer />
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

export default MentoringScreen;
