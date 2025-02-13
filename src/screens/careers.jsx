import React from "react";
import SplashIcon from "../assets/images/icon.png";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";
import StartConversation from "../components/StartConversation";
import TitlteBar from "../components/TitlteBar";

const CareersScreen = () => {
  return (
    <div className="w-full h-full bg-white relative overflow-hidden">
      <Header />

      <TitlteBar title="Careers" />

      <section className="w-full max-w-7xl mx-auto p-6 sm:py-20">
        <img
          src={SplashIcon}
          alt="img"
          className="w-full rounded-3xl object-cover sm:max-h-[580px] border border-slate-200"
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
          </div>

          <div className="w-full flex flex-col md:flex-row-reverse gap-y-6 sm:gap-x-10 items-center">
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
          </div>
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
              src={SplashIcon}
              alt=""
              className="w-full max-h-80 object-cover rounded-2xl"
            />
            <img
              src={SplashIcon}
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
          <p className="text-xl sm:text-2xl text-primary font-medium pb-4">
            Grow Your Career with YVP
          </p>

          <div className="w-full bg-secondary p-4 rounded-2xl">
            <p className="text-white text-base sm:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              ut similique ipsum aliquid suscipit qui ad vel, amet sint
              cupiditate labore! Necessitatibus modi ab excepturi itaque, quis
              quo nostrum, incidunt distinctio sint optio quod exercitationem
              assumenda nihil rerum nisi. Sed quos aspernatur eveniet ducimus
              iure adipisci enim. Eum, labore velit!
            </p>
          </div>
        </div>
      </section>

      <StartConversation />

      <Footer />
    </div>
  );
};

export default CareersScreen;
