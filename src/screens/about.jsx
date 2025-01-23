import { useState } from "react";
import Icon from "../assets/images/icon.png";
import Contribution from "../assets/images/icons//handshake.png";
import Adaptability from "../assets/images/icons/adaptation.png";
import Impletemantion from "../assets/images/icons/confidentiality.png";
import Growth from "../assets/images/icons/optimization.png";
import Safety from "../assets/images/icons/safety.png";
import Workteam from "../assets/images/icons/work-team.png";
import Footer from "../components/Footer";
import Header from "../components/Header";
import StartConversation from "../components/StartConversation";
import TitlteBar from "../components/TitlteBar";

const AboutUsScreen = () => {
  const coreValues = [
    {
      id: 1,
      icon: Workteam,
      title: "Transparency",
      text: "Tell it like it is, clear, concise & objective.",
    },
    {
      id: 2,
      icon: Safety,
      title: "Excellence",
      text: "When clients or candidates go WOW",
    },
    {
      id: 3,
      icon: Growth,
      title: "Growth",
      text: "Push beyond boundaries and constantly challenging ourselves.",
    },
    {
      id: 4,
      icon: Contribution,
      title: "Contribution",
      text: "Don't forget your roots, the secret of living is giving and pay it forward.",
    },
    {
      id: 5,
      icon: Impletemantion,
      title: "Implementation",
      text: "Talk is cheap, stop talking and take massive action.",
    },
    {
      id: 6,
      icon: Adaptability,
      title: "Adaptability",
      text: "Understanding trends and asking us what business should we be in.",
    },
  ];

  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "WHAT SERVICES DO YOU OFFER AS A VIRTUAL ASSISTANCE COMPANY?",
      answer:
        "The process of hiring a virtual assistant is simple. You can contact us through our website or call us directly. We will then schedule a meeting to discuss your needs and requirements. We will then match you with a virtual assistant who has the skills and experience you need. Once you have chosen a virtual assistant, we will provide you with all the information you need to get started.",
      active: false,
    },
    {
      id: 2,
      question: "PURPOSE OF VIRTUAL ASSISTANCE COMPANY?",
      answer:
        "The process of hiring a virtual assistant is simple. You can contact us through our website or call us directly. We will then schedule a meeting to discuss your needs and requirements. We will then match you with a virtual assistant who has the skills and experience you need. Once you have chosen a virtual assistant, we will provide you with all the information you need to get started.",
      active: false,
    },
    {
      id: 3,
      question: "DO VIRTUAL ASSISTANCE COMPANY ORGANIZE EVENTS & PROGRAMMES?",
      answer:
        "We provide a wide range of services, including Administrative support (e.g., scheduling, email management) Customer service and support Bookkeeping and financial management Project management and coordination",
      active: false,
    },
  ]);

  const handleToggle = (id) => {
    const updatedQuestions = questions.map((question) => {
      if (question.id === id) {
        return { ...question, active: !question.active };
      }
      return question;
    });

    setQuestions(updatedQuestions);
  };

  return (
    <div className="w-full h-full bg-white">
      <Header />

      <TitlteBar title="About Us" />

      <main className="w-full flex flex-col gap-y-6 p-4 sm:p-12">
        <AboutCard
          bg="gold"
          title="Our Mission"
          image={Icon}
          text="Our mission is to transform lives by providing businesses with skilled virtual associates from the Philippines. Through offshore recruitment, we aim to deliver top-quality services that empower individuals, “Changing Lives – Impacting Communities One Job at a Time!”"
        />

        <AboutCard
          bg="primary"
          title="Our Vision"
          image={Icon}
          text="To be the leading partner in offshore recruitment globally, connecting global businesses with skilled talent while empowering professionals & enriching communities through sustainable job opportunities around the world."
        />
      </main>

      <section className="w-full bg-white p-2 sm:p-8 relative">
        <div className="w-56 h-4 rounded-full bg-slate-300 mx-auto my-4"></div>
        <h1 className="text-3xl font-semibold py-3 text-center">
          Our Core Values
        </h1>
        <div className="w-full grid gap-6 grid-cols-2 p-2 sm:p-8">
          {coreValues.map(({ id, icon, title, text }) => {
            return (
              <CoreValuesCard key={id} icon={icon} title={title} text={text} />
            );
          })}
        </div>
      </section>

      <section className="w-full bg-white p-8 relative">
        <div className="w-56 h-4 rounded-full bg-slate-300 mx-auto my-4"></div>
        <h1 className="text-3xl font-semibold py-3 text-center">
          Frequently Asked Questions
        </h1>

        {questions.map(({ id, question, answer, active }) => {
          return (
            <Questions
              key={id}
              toggle={() => handleToggle(id)}
              question={question}
              answer={answer}
              active={active}
            />
          );
        })}
      </section>

      <section className="w-full bg-white p-8 relative">
        <div className="w-full flex flex-col justify-center sm:flex-row gap-x-6  px-4 sm:px-8">
          <img
            src={Icon}
            alt=""
            className="w-72 h-80 sm:w-96  rounded-2xl object-cover"
          />

          <div className="w-full flex-1 p-4">
            <b className="text-2xl text-secondary">Why?</b>
            <h1 className="text-3xl text-gold font-bold">
              YOUR VIRTUAL PARTNERS
            </h1>

            <p className="text-base sm:text-lg py-1">
              Thriving Leaders, Flourishing Business, Positive Impact.
            </p>
            <p className="text-base sm:text-lg py-1">
              We are convinced that when business owners thrive both at work and
              in their personal lives, it initiates a ripple effect that fosters
              success in their businesses, empowers their teams, and benefits
              the broader community.
            </p>
            <p className="text-base sm:text-lg py-1">
              Their success fuels business growth, uplifts their employees, and
              creates a lasting positive influence on society.
            </p>
          </div>
        </div>
      </section>

      <StartConversation />
      <Footer />
    </div>
  );
};

const Questions = ({ toggle, question, answer, active }) => {
  return (
    <div className="w-full p-2 sm:px-8">
      <div className="py-4 border-b-4 border-slate-300">
        <h1 className="text-xl sm:text-2xl py-2 font-bold text-primary">
          {question}
        </h1>

        <div
          onClick={toggle}
          className="max-w-48 bg-slate-300 py-2 text-center rounded-2xl cursor-pointer"
        >
          <p className="text-base sm:text-xl text-slate-600 ">
            {active ? "hide answers" : "See answers"}
          </p>
        </div>

        {active && (
          <div className="w-full px-4 py-6 my-4 bg-secondary rounded-2xl ">
            <p className="text-white text-sm sm:text-base">{answer}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const CoreValuesCard = ({ icon, title, text }) => {
  return (
    <div className="rounded-xl p-4 border border-slate-200">
      <div className="flex gap-x-4 items-center">
        <img
          src={icon}
          alt=""
          className="sm:w-16 sm:h-16 w-10 h-10 object-contain"
        />
        <h1 className="sm:text-2xl text-lg font-semibold text-primary">
          {title}
        </h1>
      </div>
      <p className="sm:text-base text-sm py-2 text-primary">{text}</p>
    </div>
  );
};

const AboutCard = ({ image, title, text, bg }) => {
  return (
    <div className={`w-full rounded-2xl bg-${bg} px-8 py-6`}>
      <h1 className="text-2xl font-semibold text-white py-2">{title}</h1>

      <div className="flex gap-x-4 flex-col  sm:flex-row">
        <img src={image} alt="" className="w-40 h-40 object-cover rounded-xl" />

        <p className="text-lg text-white">{text}</p>
      </div>
    </div>
  );
};

export default AboutUsScreen;
