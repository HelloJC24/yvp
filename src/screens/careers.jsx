import React, { useState } from "react";
import Img3 from "../assets/images/new-images/icon 3.png";
import Img4 from "../assets/images/new-images/icon 4.png";

import Img1 from "../assets/images/new-images/icon 1.png";
import CareersWallImg from "../assets/images/new-images/video container.png";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ArrowChevronDownIcon } from "../components/Icons";
import StartConversation from "../components/StartConversation";
import TitlteBar from "../components/TitlteBar";

const CareersScreen = () => {
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
      <Header />

      <TitlteBar title="Careers" />

      <section className="w-full max-w-7xl mx-auto p-6 sm:py-20">
        <img
          src={CareersWallImg}
          alt="img"
          className="w-full  object-cover sm:max-h-[680px]"
        />
      </section>

      <section className="max-w-7xl mx-auto p-6 sm:p-10">
        <h1 className="text-center text-2xl sm:text-4xl font-medium pb-20">
          <span className="text-gold">Outsource</span> Smarter, Achieve More
        </h1>

        <div className="w-full flex flex-col gap-y-14">
          <div className="w-full flex flex-col md:flex-row gap-y-6 sm:gap-x-10 items-center">
            <div className="relative">
              <img
                src={Img1}
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
              <b className="text-2xl font-medium">aim the career with</b>
              <h1 className="text-3xl font-semibold text-gold">
                YOUR VIRTUAL EXPERIENCE
              </h1>

              <p className="py-2 text-base sm:text-lg">
                In today’s fast-evolving digital world, remote work is more than
                just a trend—it’s the future.YVP equips you with the skills,
                resources, and opportunities to thrive in a virtual workspace.
              </p>
              <p className="py-2 text-base sm:text-lg">
                From expert training and career development to flexible job
                opportunities, we help you build a sustainable and rewarding
                career.
              </p>
              <p className="py-2 text-base sm:text-lg">
                Join a network of professionals embracing the freedom and
                potential of remote work. Start your journey with YVP and turn
                your virtual experience into real success.
              </p>
            </div>
          </div>

          {/* <div className="w-full flex flex-col md:flex-row-reverse gap-y-6 sm:gap-x-10 items-center">
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
                  LEARN MORE
                </Button>
              </div>
            </div>

            <div className="flex-1">
              <b className="text-2xl font-medium">aim the career with</b>
              <h1 className="text-3xl font-semibold text-gold">
                YOUR VIRTUAL EXPERIENCE
              </h1>

              <p className="py-2 text-base sm:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae, eligendi officiis. Tempora animi, quam doloribus illo
                a, esse labore optio voluptates, ipsa rem reprehenderit
                laudantium eligendi repellat consequuntur. Magni dolorem
                consequuntur tempore debitis optio. Sint eum aliquam quos
                numquam alias eos dolorem. Nihil voluptates sit, natus accusamus
                voluptate omnis quae!
              </p>
              <p className="py-2 text-base sm:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti excepturi quo necessitatibus nihil nostrum optio earum
                laborum, aut eveniet sapiente omnis aspernatur amet nemo unde
                blanditiis molestiae fugiat quidem rerum.
              </p>
              <p className="py-2 text-base sm:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente blanditiis dolore excepturi facilis quasi nobis minima
                hic. Qui, sunt cupiditate!
              </p>
            </div>
          </div> */}
        </div>
      </section>

      <section className="max-w-7xl mx-auto p-6 sm:p-10">
        <h1 className="text-center text-2xl sm:text-3xl font-medium pb-20">
          OUR CAREER TESTIMONIAL
        </h1>

        <p className="text-center text-xl sm:text-2xl text-primary font-medium pb-10">
          See the Impact - Hear from our expert Virtual Assistants <br />
          Real Stories, Real Success
        </p>

        <div className="w-full flex flex-col items-center border-y-8 border-slate-200 py-8">
          <div className="w-full flex gap-x-20 items-center">
            <img
              src={Img3}
              alt=""
              className="w-full max-h-80 object-cover rounded-2xl"
            />
            <img
              src={Img4}
              alt=""
              className="w-full max-h-80 object-cover rounded-2xl"
            />
          </div>

          <div className="pt-6">
            <Button
              fontSize="text-base"
              bg="bg-gold"
              radius="rounded-full"
              padding="py-2 px-8"
            >
              SEE MORE
            </Button>
          </div>
        </div>

        <div className="w-full border-b-4 border-slate-200 py-8">
          <h1 className="text-xl sm:text-5xl pb-2 text-primary font-semibold">
            How to become a <span className="text-gold">VA Partner</span>?
          </h1>

          <div className="w-full sm:p-10 grid grid-cols-2 items-start gap-2 sm:gap-8">
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
      </section>

      <StartConversation />

      <Footer />
    </div>
  );
};

const DropdownSelect = ({ toggle, title, text, active }) => {
  return (
    <div className="bg-secondary p-2 rounded-xl">
      <div className="flex justify-between items-center px-2">
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

export default CareersScreen;
