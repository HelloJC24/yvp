import React, { useState } from "react";
import bookeeper from "../assets/images/job-positions/bookeeper.png";
import financial_planner from "../assets/images/job-positions/financial_planner.png";
import hr_generalist from "../assets/images/job-positions/hr_generalist.png";
import mortgage from "../assets/images/job-positions/mortgage.jpg";
import paa from "../assets/images/job-positions/paa.png";
import telemarketer from "../assets/images/job-positions/telemarketer.png";
import adrian from "../assets/images/new-images/7.png";
import BusinessWallImg from "../assets/images/new-images/business-wall.png";
import francis from "../assets/images/new-images/francis_choo.jpg";
import Img2 from "../assets/images/new-images/icon 2.png";
import tk_yeoh from "../assets/images/new-images/tk_yeoh.jpg";
import Button from "../components/Button";
import { ArrowChevronDownIcon } from "../components/Icons";
import TitlteBar from "../components/TitlteBar";

const BusinessScreen = () => {
  const [dropdownData, setDropdownData] = useState([
    { title: "Mortgage Broker", text: "" },
    { title: "Social Media Manager", text: "" },
    { title: "Telemarketer", text: "" },
    { title: "HR Generalist", text: "" },
    { title: "Mortgage Associates", text: "" },
    { title: "Health and Psychologist", text: "" },
  ]);

  const [positions, setPositions] = useState([
    {
      id: 1,
      image: bookeeper,
      title: "BOOKKEEPERS",
      text: "Ensure your financial records are accurate, up-to-date, and well-organized. With expert bookkeeping support, you can focus on growing your business while maintaining financial stability.",
    },
    {
      id: 2,
      image: financial_planner,
      title: "FINANCIAL PLANNER",
      text: "Take control of your financial future with expert planning and guidance. Our professionals help you make informed decisions, maximize investments, and secure long-term success.",
    },
    {
      id: 3,
      image: telemarketer,
      title: "TELEMARKETERS",
      text: " Drive sales and expand your customer base with skilled telemarketers who know how to engage potential clients, generate leads, and close deals effectively.",
    },
    {
      id: 4,
      image: hr_generalist,
      title: "HR GENERALIST",
      text: "Build and maintain a strong workforce with HR experts who specialize in recruitment, employee management, and compliance. A well-managed team leads to long-term business success.",
    },
    {
      id: 5,
      image: mortgage,
      title: "MORTGAGE ASSOCIATES",
      text: "Navigate the complexities of home financing with professionals who provide expert advice and personalized solutions to help clients make confident mortgage decisions.",
    },
    {
      id: 6,
      image: paa,
      title: "PERSONAL ADMINISTRATIVE ASSISTANT",
      text: "Stay organized and efficient with a dedicated assistant handling scheduling, correspondence, and day-to-day operations, allowing you to focus on high-priority tasks.",
    },
  ]);

  const handleToggle = (index) => {
    const updatedData = dropdownData.map((data, i) => {
      return { ...data, active: index === i ? !data.active : false };
    });

    setDropdownData(updatedData);
  };

  return (
    <div className="w-full h-full bg-white relative overflow-hidden">
      <TitlteBar title="Business" />

      <section className="w-full max-w-7xl mx-auto p-6 pt-10 ">
        <h1 className="text-2xl sm:text-5xl pb-2 text-primary font-semibold">
          <span className="text-gold">Unlock Your Virtual Partner</span>
        </h1>
        <div className="w-full relative">
          <img
            src={BusinessWallImg}
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
        <div className="w-full flex flex-col md:flex-row-reverse gap-y-6 sm:gap-x-10 py-10 items-center">
          <div className="relative">
            <img
              src={Img2}
              alt=""
              className="w-full sm:w-[480px] h-full sm:max-h-[400px] object-cover rounded-xl"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
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

          <div className="flex-1">
            <b className="text-2xl font-medium">empowering Your Business</b>
            <h1 className="text-3xl font-semibold text-gold">
              THROUGH SMART OUTSOURCING
            </h1>

            <p className="py-2 text-base sm:text-lg">
              Stay ahead in a competitive market by leveraging skilled remote
              professionals who enhance efficiency, reduce costs, and drive
              growth. Our tailored outsourcing solutions connect you with expert
              virtual assistants, ensuring seamless operations while you focus
              on scaling your business.
            </p>
            <p className="py-2 text-base sm:text-lg">
              Unlock new possibilities with YVP and experience the future of
              smart outsourcing today.By outsourcing with YVP, you gain access
              to a global talent pool without the overhead costs of traditional
              hiring. Focus on your core business strategies while we handle the
              day-to-day tasks that keep your operations running smoothly.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto p-6 sm:p-10">
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-8 justify-center ">
          {positions?.map((item, index) => {
            return (
              <PositionItem
                key={index}
                image={item.image}
                title={item.title}
                text={item.text}
              />
            );
          })}
        </div>
      </section>

      <ClientsTestimonials />
    </div>
  );
};

{
  /* <section className="max-w-7xl mx-auto p-6 sm:p-10">
  <div className="w-full border-b-4 border-slate-200 py-8">
    <h1 className="text-xl sm:text-5xl pb-2 text-primary font-semibold">
      <span className="text-gold">Find your Talents</span> Here
    </h1>

    <div className="w-full sm:p-10 grid grid-cols-1 sm:grid-cols-2 items-start gap-4 sm:gap-8">
      {dropdownData?.map((item, index) => (
        <DropdownSelect
          key={index}
          title={item.title}
          text={item.text}
          active={item.active}
          toggle={() => handleToggle(index)}
        />
      ))}
    </div>
  </div>
</section>; */
}

const PositionItem = ({ image, title, text }) => {
  return (
    <div className="w-full">
      <div className="w-full max-h-60 rounded-xl relative overflow-hidden business-image">
        <img
          src={image}
          alt="yvp"
          className="w-full h-full bg-red-500 rounded-xl relative object-cover border border-slate-100"
        />

        <div className="business-image-text p-6 bg-white/80 border border-slate-100">
          <p className="text-base sm:text-xl text-center">{text}</p>
        </div>
      </div>

      <p className="text-center font-medium text-base sm:text-lg p-2">
        {title}
      </p>
    </div>
  );
};

const ClientsTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "ADRIAN MCVITTIE",
      img: francis,
      url: null,
    },
    {
      id: 2,
      name: "TK YEOH",
      img: tk_yeoh,
      url: null,
    },
    {
      id: 3,
      name: "FRANCIS CHOO",
      img: adrian,
      url: null,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto p-6 sm:py-14">
      <h1 className="text-center text-2xl sm:text-3xl font-medium pb-20">
        OUR <span className="text-gold">CLIENTS</span> TESTIMONIAL
      </h1>

      <div className="w-full grid sm:grid-cols-3 gap-6 justify-center p-0 sm:px-20">
        {testimonials.map((item, index) => {
          return (
            <div key={index} className="p-4  cursor-pointer">
              <img
                src={item.img}
                alt=""
                className="w-full h-72 object-cover rounded-xl"
              />
              <div className="py-4">
                <h1 className="text-center text-xl font-medium ">
                  {item.name}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const DropdownSelect = ({ toggle, title, text, active }) => {
  return (
    <div className="bg-secondary p-2 rounded-xl">
      <div onClick={toggle} className="flex justify-between items-center px-2">
        <h1 className="text-base sm:text-lg py-2  text-white">{title}</h1>
        <div onClick={toggle} className="cursor-pointer">
          <ArrowChevronDownIcon fill="#fff" size="20" />
        </div>
      </div>

      {active && (
        <div className="w-full p-6  rounded-xl ">
          <p className="text-white text-base">{text}</p>
        </div>
      )}
    </div>
  );
};

export default BusinessScreen;
