import React, { useState } from "react";
import BusinessWallImg from "../assets/images/new-images/business-wall.png";
import Img2 from "../assets/images/new-images/icon 2.png";
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
              className="w-full sm:w-[480px] h-full sm:max-h-[400px] object-cover rounded-2xl"
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
        <div className="w-full p-6  rounded-2xl ">
          <p className="text-white text-base">{text}</p>
        </div>
      )}
    </div>
  );
};

export default BusinessScreen;
