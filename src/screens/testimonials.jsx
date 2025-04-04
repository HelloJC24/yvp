import React, { useState } from "react";
import AceImg from "../assets/images/new-images/ace.jpg";
import AlbertImg from "../assets/images/new-images/albert.jpg";
import DanicaImg from "../assets/images/new-images/danica.jpg";
import GlendaImg from "../assets/images/new-images/glenda.jpg";
import JoannaImg from "../assets/images/new-images/joanna.jpg";
import KandraImg from "../assets/images/new-images/kandra.jpg";
import MarkImg from "../assets/images/new-images/mark.jpg";
import MonicaImg from "../assets/images/new-images/monica.jpg";
import Button from "../components/Button";
import TitlteBar from "../components/TitlteBar";

const TestimonialsScreen = () => {
  const testimonials = [
    {
      id: 1,
      img: DanicaImg,
      name: "DANICA DUKE",
      text: "I’ve been with Your Virtual Partner for over 2 years, and I’ve seen a lot of growth both personally and professionally. The company truly invests in employee development, offering continuous training and opportunities to advance. My managers are approachable and supportive, which has made my experience here very rewarding.",
    },
    {
      id: 2,
      img: AceImg,
      name: "ACE MATHEW BEUP",
      text: "As a proud product of YVP Outsourcing, I can confidently say that their services have been life-changing! 🚀 From providing top-notch outsourcing solutions to helping professionals like me grow in the industry, YVP has been a game-changer. Their expertise, efficiency, and commitment to excellence make them stand out.",
    },
  ];

  const [articleData, setArticleData] = useState([
    {
      image: JoannaImg,
      name: "JOANNA PAOLLA SIGLOS",
      text: "I am very grateful to be part of YVP team , its been an amazing learning experience specially for someone like me who started here with no experience in this kind of field and come to think of it I've been part of the team for 2yrs already. Yohoooo!!",
    },
    {
      image: GlendaImg,
      name: "GLENDA MAE NONO",
      text: "Working here has been awesome! The work-life balance here is amazing. I'm an executive assistant and I actually have a life outside of work! The company is really understanding and flexible. So glad I found this place!",
    },
    {
      image: AlbertImg,
      name: "ALBERT MICHAEL AGUILAR",
      text: "Grateful to be part of YVP. Great culture, supportive colleagues, and excellent career development opportunities. Proud to be here!",
    },
    {
      image: MarkImg,
      name: "MARK IGNACIO",
      text: "I’ve been with Your Virtual Partner for over 2 years, and I’ve seen a lot of growth both personally and professionally. The company truly invests in employee development, offering continuous training and opportunities to advance. My managers are approachable and supportive, which has made my experience here very rewarding.",
    },
    {
      image: KandraImg,
      name: "KANDRA ANDONE",
      text: "An amazing opportunity with YVP has been unlocked to me. Flexible schedule, supportive workmates, incredible CEO & dedicated Brokers, work-life balance and sharing of ideas are all in this company. My heart is happy to be a part of YVP. ",
    },
    {
      image: MonicaImg,
      name: "MONICA ORIEL",
      text: "I am truly grateful to be a part of YVP. The culture is great, colleagues and management are very supportive and career development opportunities are available to everyone. Extremely proud to be here!",
    },
  ]);

  return (
    <div className="w-full h-full bg-white relative overflow-hidden">
      <TitlteBar title="Testimonials" />

      <main className="max-w-7xl mx-auto p-4 sm:p-20">
        <section>
          <h1 className="text-center text-2xl sm:text-3xl font-medium pb-20">
            OUR CAREER TESTIMONIAL
          </h1>

          <p className="text-center text-xl sm:text-2xl text-primary font-medium pb-10">
            See the Impact - Hear from our expert Virtual Assistants <br />
            Real Stories, Real Success
          </p>

          <div className="w-full flex flex-col items-center border-t-4 border-slate-200 py-8">
            <div className="w-full flex flex-col sm:flex-row gap-y-4 sm:gap-x-20 items-start">
              {testimonials.map((item, index) => {
                return (
                  <div key={index} className="w-full">
                    <img
                      src={item.img}
                      alt=""
                      className="w-full sm:max-h-96 object-cover rounded-2xl"
                    />

                    <div className="py-4">
                      <h1 className="text-xl font-medium">{item.name}</h1>

                      <p className="text-base sm:text-lg">{item.text}</p>
                    </div>
                  </div>
                );
              })}
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
        </section>

        <section className="w-full py-10">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center ">
            {articleData?.map((item, index) => {
              return <ArticlesCard key={index} item={item} />;
            })}
          </div>
        </section>

        <VideoTestimonial />
      </main>
    </div>
  );
};

const VideoTestimonial = () => {
  const [videoData, setVideoData] = useState([
    {
      id: 1,
      name: "ADRIAN MCVITTIE",
      video: "https://youtube.com/embed/VXTIGTduZk0?feature=share",
    },
    {
      id: 2,
      name: "TK YEOH",
      video: "https://youtube.com/embed/MOnRuaX1Wr8?feature=share",
    },
  ]);

  return (
    <section className="w-full py-10">
      <h1 className="text-center text-2xl sm:text-3xl font-medium pb-20">
        <span className="text-gold">VIDEO</span> TESTIMONIAL
      </h1>

      <div className="w-full flex flex-col gap-y-10 sm:flex-row sm:gap-x-10 justify-center items-center">
        {videoData?.map((item, index) => {
          return (
            <div key={index} className="max-w-[450px]">
              <iframe
                className="w-full h-96"
                src={item.video}
                allowfullscreen
              ></iframe>

              <h1 className="text-center text-lg sm:text-2xl font-medium p-4">
                {item.name}
              </h1>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const ArticlesCard = ({ item }) => {
  return (
    <div className=" flex flex-col gap-y-4">
      <img
        src={item.image}
        alt="img"
        className="w-full max-h-72 rounded-xl object-cover"
      />

      <div className="">
        <h1 className="text-xl font-medium">{item.name}</h1>

        <p className="text-base sm:text-lg">{item.text}</p>
      </div>
    </div>
  );
};

export default TestimonialsScreen;
