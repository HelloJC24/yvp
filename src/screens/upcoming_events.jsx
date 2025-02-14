import React from "react";
import Img1_7 from "../assets/images/new-images/icon 1-7.png";
import Img2_2 from "../assets/images/new-images/icon 2-2.png";
import Img3_1 from "../assets/images/new-images/icon 3-1.png";
import Img4_1 from "../assets/images/new-images/icon 4-1.png";
import Img5_2 from "../assets/images/new-images/icon 5-2.png";
import Img6_2 from "../assets/images/new-images/icon 6-2.png";
import Img7_2 from "../assets/images/new-images/icon 7-2.png";

import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";
import StartConversation from "../components/StartConversation";
import TitlteBar from "../components/TitlteBar";

const UpcomingEventsScreen = () => {
  return (
    <div className="w-full h-full bg-white relative overflow-hidden">
      <Header />

      <TitlteBar title="Upcoming Events" />

      <section className="w-full max-w-7xl mx-auto p-6 pt-10 ">
        <h1 className="text-2xl sm:text-5xl pb-2 text-primary font-semibold">
          <span className="text-gold">Growth, Connection, and Impact</span>
        </h1>
        <div className="w-full relative">
          <div className="w-full h-full absolute bg-gradient-to-t from-black/80 to-transparent rounded-2xl"></div>
          <img
            src={Img5_2}
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
          <span className="text-gold">Upcoming Events at YVP!</span>- Stay Tuned
          for Exciting Opportunites!
        </h1>

        <div className="w-full py-6 flex flex-col md:flex-row gap-y-6 sm:gap-x-10">
          <div className="h-full relative">
            <img
              src={Img1_7}
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
            <h1 className="text-3xl font-semibold text-gold">
              TONY ROBBINS EXPERIENCE
            </h1>
            <p className="text-lg py-4">
              Join exclusive Tony Robbins events that empower you with
              life-changing strategies for success, leadership, and personal
              growth. These events are designed to help you break through
              limitations, build confidence, and achieve high performance.
            </p>

            <div className="flex flex-col gap-y-6 py-4">
              <DescriptionItem
                title="Unleash the Power Within (UPW)"
                text="Breakthrough event for success & mindset transformation"
              />
              <DescriptionItem
                title="Business Mastery"
                text="Learn financial and business strategies from top industry leaders"
              />
              <DescriptionItem
                title="Date with Destiny"
                text="A deep dive into personal and professional purpose"
              />

              <DescriptionItem
                title="Leadership Academy"
                text="Enhance leadership and communication skills"
              />
            </div>
          </div>
        </div>

        <div className="w-full py-6 flex flex-col md:flex-row-reverse gap-y-6 sm:gap-x-10">
          <div className="h-full relative">
            <img
              src={Img2_2}
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
            <h1 className="text-3xl font-semibold text-gold">
              YVP Family Immersion Trip
            </h1>

            <p className="text-base sm:text-lg py-4">
              Celebrate your journey with YVP in a unique bonding experience!
              This retreat is designed for team-building, professional
              networking, and personal reflection, allowing you to connect with
              fellow virtual professionals in a relaxing and inspiring
              environment.Make an impact by helping underserved communities
              through YVP’s partnership with Gawad Kalinga. Together, we’re
              fostering positive change through:
            </p>

            <div className="">
              <p className="text-sm sm:text-base font-bold">
                Feeding Programs
                <br />
                Career Training for Future Virtual Assistants <br />
                Sustainable Community Development Projects
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto p-6 sm:p-10">
        <h1 className="text-center text-2xl sm:text-4xl text-primary font-medium pb-6">
          YVP <span className="text-gold">Career Growth</span> &{" "}
          <span className="text-gold">Mentoring Workshops</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-4">
          <CareerGrowthCard image={Img3_1} btnText="BOOK HERE" />
          <CareerGrowthCard image={Img4_1} btnText="JOIN HERE" />
          <CareerGrowthCard image={Img6_2} btnText="SEE MORE" />
          <CareerGrowthCard image={Img7_2} btnText="BE A MENTEE" />
        </div>
      </section>

      <StartConversation />

      <Footer />
    </div>
  );
};

const CareerGrowthCard = ({ image, btnText, redirect }) => {
  return (
    <div className="rounded-2xl  relative overflow-hidden">
      <img src={image} alt="img" className="w-full h-full object-contain " />

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
        <Button
          fontSize="text-base"
          bg="bg-gold"
          radius="rounded-full"
          padding="py-2 px-8"
        >
          {btnText}
        </Button>
      </div>
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

export default UpcomingEventsScreen;
