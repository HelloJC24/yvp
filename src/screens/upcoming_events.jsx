import React from "react";
import SplashIcon from "../assets/images/icon.png";
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
          <span className="text-gold">Upcoming Events at YVP!</span>- Stay Tuned
          for Exciting Opportunites!
        </h1>

        <div className="w-full py-6 flex flex-col md:flex-row gap-y-6 sm:gap-x-10">
          <div className="h-full relative">
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
            <h1 className="text-3xl font-semibold text-gold">
              TONY ROBBINS EXPERIENCE
            </h1>
            <p className="text-base py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              recusandae nesciunt quos laborum dolor iure commodi ullam magnam
              at, pariatur velit necessitatibus laudantium illum eius ipsam
              cumque maiores quo quam modi corporis vitae. Nisi fugiat possimus,
              facilis, facere eaque, fuga accusamus quaerat quo odio unde illum
              repellat earum voluptatem aliquid.
            </p>

            <div className="flex flex-col gap-y-6 py-4">
              <DescriptionItem />
              <DescriptionItem />
              <DescriptionItem />
            </div>
          </div>
        </div>

        <div className="w-full py-6 flex flex-col md:flex-row-reverse gap-y-6 sm:gap-x-10">
          <div className="h-full relative">
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
            <h1 className="text-3xl font-semibold text-gold">
              YVP Family Immersion Trip
            </h1>

            <p className="text-base py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              recusandae nesciunt quos laborum dolor iure commodi ullam magnam
              at, pariatur velit necessitatibus laudantium illum eius ipsam
              cumque maiores quo quam modi corporis vitae. Nisi fugiat possimus,
              facilis, facere eaque, fuga accusamus quaerat quo odio unde illum
              repellat earum voluptatem aliquid.
            </p>

            <div className="">
              <p className="text-base font-bold">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10 py-4">
          <CareerGrowthCard />
          <CareerGrowthCard />
          <CareerGrowthCard />
          <CareerGrowthCard />
        </div>
      </section>

      <StartConversation />

      <Footer />
    </div>
  );
};

const CareerGrowthCard = () => {
  return (
    <div className="rounded-2xl relative ">
      <img
        src={SplashIcon}
        alt="img"
        className="w-full sm:max-h-72 rounded-3xl object-cover"
      />
      <div className="max-w-48 absolute top-4 right-4 sm:top-8 sm:right-8">
        <p className="text-xl sm:text-3xl font-medium text-center">
          SUCCESS & MINDSET COACHING
        </p>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
        <Button
          fontSize="text-base"
          bg="bg-gold"
          radius="rounded-full"
          padding="py-2 px-8"
        >
          BOOK HERE
        </Button>
      </div>
    </div>
  );
};

const DescriptionItem = () => {
  return (
    <div>
      <p className="text-base">
        <span className="font-bold">Application & Screening</span> - Lorem
        ipsum, dolor sit amet consectetur adipisicing elit. Magnam, culpa amet
        laboriosam ratione beatae rerum quisquam quibusdam, nostrum, hic maxime
        pariatur magni neque. Consequatur,
      </p>
    </div>
  );
};

export default UpcomingEventsScreen;
