import React from "react";
import SplashIcon from "../assets/images/icon.png";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";
import StartConversation from "../components/StartConversation";
import TitlteBar from "../components/TitlteBar";

const BlogScreen = () => {
  return (
    <div className="w-full h-full bg-white relative overflow-hidden">
      <Header />

      <TitlteBar title="Blogs" />

      <section className="w-full max-w-7xl mx-auto p-6 pt-10 ">
        <h1 className="text-xl sm:text-5xl pb-2 text-primary font-semibold">
          How to become a <span className="text-gold">VA Partner</span>?
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
          Why pursue a career at Your Virtual Partner?
        </h1>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center ">
          <ArticlesCard />
          <ArticlesCard />
          <ArticlesCard />
          <ArticlesCard />
          <ArticlesCard />
          <ArticlesCard />
        </div>
      </section>

      <section className="max-w-7xl mx-auto p-6 sm:p-10">
        <div className="w-full py-8">
          <div className="flex flex-col-reverse sm:flex-row gap-y-4 sm:gap-x-8">
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-medium ">
                The <span className="text-gold">Process of Hiring</span> at YVP
              </h1>

              <p className="py-4 text-lg">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
                sit repellendus quas officiis iusto expedita necessitatibus amet
                molestias ratione impedit quia corporis hic asperiores ipsam
                placeat consectetur perspiciatis, minus et iure totam adipisci
                aperiam iste? Molestiae ut minus aut! Error laboriosam quia
                magni.
              </p>
            </div>

            <div className="flex-1 relative">
              <img
                src={SplashIcon}
                alt="img"
                className="w-full max-h-60 rounded-3xl object-cover  border border-slate-200"
              />

              <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
                <Button
                  fontSize="text-base"
                  bg="bg-gold"
                  radius="rounded-full"
                  padding="py-2 px-8"
                >
                  READ MORE
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-0 sm:py-6 sm:px-8">
            <DescriptionItem />
            <DescriptionItem />
            <DescriptionItem />
            <DescriptionItem />
            <DescriptionItem />
            <DescriptionItem />
          </div>
        </div>

        {/* reverse */}
        <div className="w-full py-8">
          <div className="flex flex-col-reverse sm:flex-row-reverse gap-y-4 sm:gap-x-8">
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-medium ">
                The <span className="text-gold">Process of Hiring</span> at YVP
              </h1>

              <p className="py-4 text-lg">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
                sit repellendus quas officiis iusto expedita necessitatibus amet
                molestias ratione impedit quia corporis hic asperiores ipsam
                placeat consectetur perspiciatis, minus et iure totam adipisci
                aperiam iste? Molestiae ut minus aut! Error laboriosam quia
                magni.
              </p>
            </div>

            <div className="flex-1 relative">
              <img
                src={SplashIcon}
                alt="img"
                className="w-full max-h-60 rounded-3xl object-cover  border border-slate-200"
              />

              <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
                <Button
                  fontSize="text-base"
                  bg="bg-gold"
                  radius="rounded-full"
                  padding="py-2 px-8"
                >
                  READ MORE
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-0 sm:py-6 sm:px-8">
            <DescriptionItem />
            <DescriptionItem />
            <DescriptionItem />
            <DescriptionItem />
            <DescriptionItem />
            <DescriptionItem />
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

const ArticlesCard = ({ image, alt, text }) => {
  return (
    <div className=" flex flex-col gap-y-4">
      <img
        src={SplashIcon}
        alt={alt}
        className="w-full h-48 sm:h-56 rounded-xl object-cover"
      />

      <p className="text-base">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium
        tenetur accusamus esse molestias harum exercitationem voluptas amet nam
        minus tempora libero veritatis, error aliquid quo quae excepturi iusto
        magnam sunt ullam modi optio perspiciatis voluptatem! Recusandae minus
        dignissimos expedita minima, optio amet soluta unde officiis autem eius
        asperiores voluptates ullam.
      </p>
    </div>
  );
};

export default BlogScreen;
