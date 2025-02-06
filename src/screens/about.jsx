import axios from "axios";
import { useEffect, useState } from "react";
import Contribution from "../assets/images/icons//handshake.png";
import Adaptability from "../assets/images/icons/adaptation.png";
import Impletemantion from "../assets/images/icons/confidentiality.png";
import Growth from "../assets/images/icons/optimization.png";
import Safety from "../assets/images/icons/safety.png";
import Workteam from "../assets/images/icons/work-team.png";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { CloseIcon } from "../components/Icons";
import StartConversation from "../components/StartConversation";
import TitlteBar from "../components/TitlteBar";
import { FAQS, MISSION_VISSION_API, TEAM_API } from "../config/constant";

const AboutUsScreen = () => {
  const [activeModal, setActiveModal] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [missionVission, setMissionVission] = useState([]);
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

  const [questions, setQuestions] = useState([]);

  const [ourTeams, setOurTeams] = useState([]);

  useEffect(() => {
    const loadMV = async () => {
      try {
        const res = await axios.get(MISSION_VISSION_API);
        const data = res.data?.data;
        setMissionVission(data);
      } catch (error) {
        console.log(error);
      }
    };

    const loadTeams = async () => {
      try {
        const res = await axios.get(TEAM_API);
        const data = res.data?.data;
        setOurTeams(data);
      } catch (error) {
        console.log(error);
      }
    };

    const loadFaqs = async () => {
      try {
        const res = await axios.get(FAQS);
        const data = res.data?.data;

        setQuestions(
          data?.map((question) => ({
            ...question,
            active: false,
          }))
        );
      } catch (error) {
        console.log(error);
      }
    };

    loadMV();
    loadTeams();
    loadFaqs();
  }, []);

  const handleToggle = (index) => {
    const updatedQuestions = questions.map((question, i) => {
      if (i === index) {
        return { ...question, active: !question.active };
      }
      return question;
    });

    setQuestions(updatedQuestions);
  };

  const handleSelectProfile = (id) => {
    const profile = ourTeams.find((team) => team.id === id);
    if (profile) {
      setSelectedProfile(profile);
      setActiveModal(true);
    }
  };

  const handleCloseModal = () => {
    setActiveModal(false);
    setSelectedProfile(null);
  };

  return (
    <div className="w-full h-full bg-white relative overflow-hidden">
      <Header />

      <TitlteBar title="About Us" />

      <main className="w-full max-w-7xl mx-auto flex flex-col gap-y-6 p-4 sm:p-12">
        {missionVission?.map((item, index) => {
          return (
            <AboutCard
              key={index}
              bg={index === 0 ? "gold" : index === 1 ? "primary" : ""}
              title={item?.title}
              image={item?.image}
              alt={item?.alt}
              text={item?.subtitle}
            />
          );
        })}
      </main>

      <section className="w-full bg-white p-2 sm:p-8 relative">
        <h1 className="text-2xl sm:text-4xl font-semibold py-4 text-center">
          Our Team
        </h1>
        <div className="w-full max-w-7xl mx-auto flex flex-wrap justify-center gap-14 p-4">
          {ourTeams.map(({ id, image, alt, name, role, about }) => {
            return (
              <OurTeam
                key={id}
                onClick={() => handleSelectProfile(id)}
                image={image}
                alt={alt}
                name={name}
                role={role}
                about={about}
              />
            );
          })}
        </div>
      </section>

      <section className="w-full bg-white p-2 sm:p-8 relative">
        <div className="w-56 h-4 rounded-full bg-slate-300 mx-auto my-4"></div>
        <h1 className="text-2xl sm:text-4xl font-semibold py-4 text-center">
          Our Core Values
        </h1>
        <div className="w-full max-w-7xl mx-auto grid gap-6 grid-cols-2 p-2 sm:p-8">
          {coreValues.map(({ id, icon, title, text }) => {
            return (
              <CoreValuesCard key={id} icon={icon} title={title} text={text} />
            );
          })}
        </div>
      </section>

      <section className="w-full bg-white p-8 relative">
        <div className="w-56 h-4 rounded-full bg-slate-300 mx-auto my-4"></div>
        <h1 className="text-2xl sm:text-4xl font-semibold py-4 text-center">
          Frequently Asked Questions
        </h1>

        {questions.map(({ title, answer, active }, index) => {
          return (
            <Questions
              key={index}
              toggle={() => handleToggle(index)}
              title={title}
              answer={answer}
              active={active}
            />
          );
        })}
      </section>

      <section className="w-full min-h-[50vh] bg-white p-2 sm:p-8 relative">
        <div className="w-full max-w-7xl mx-auto flex flex-col gap-y-4  justify-center md:flex-row gap-x-6  px-4 md:px-8">
          <img
            src="https://fruitask.com/assets/file_upload/eLA83DpvIiTsDXN/SlpzZnlJOUFWNU9CZkE9PQ.jpg"
            alt=""
            className="w-72 h-full sm:w-96 rounded-2xl object-cover"
          />

          <div className="w-full flex-1 sm:p-4">
            <b className="text-2xl text-secondary">Why?</b>
            <h1 className="text-3xl text-gold font-bold">
              YOUR VIRTUAL PARTNER
            </h1>

            <p className="text-base sm:text-lg py-1">
              Customized Recruitment: Tailored solutions to match your unique
              business needs.
            </p>
            <p className="text-base sm:text-lg py-1">
              HR & Labor Compliance: Assurance is provided for every hire.
              Dedicated Support: We've got your back from onboarding to ongoing
              coaching. Global Talent Pool: Access a network of professionals
              ready to elevate your business.
            </p>
            <p className="text-base sm:text-lg py-1">
              Cost Savings: Reduce overhead costs by up to 70%.
            </p>
          </div>
        </div>
      </section>

      <StartConversation />
      <Footer />

      {activeModal && selectedProfile && (
        <ProfileModal
          close={handleCloseModal}
          isOpen={activeModal}
          {...selectedProfile}
        />
      )}
    </div>
  );
};

const OurTeam = ({ onClick, image, alt, name, role, about }) => {
  return (
    <div className="max-w-80">
      <div
        onClick={onClick}
        className="flex flex-col justify-center items-center cursor-pointer"
      >
        <img
          src={image}
          alt=""
          className="w-72 h-72 sm:w-full sm:h-80 border-4 border-primary object-cover object-[0,1px] mb-2"
          alt={alt}
        />
        <h1 className="text-center text-2xl font-bold text-primary">{name}</h1>
        <p className="text-center text-base">{role}</p>
      </div>

      <div className="py-4">
        <p className="text-sm sm:text-base pb-6">
          {about[0]?.substring(0, 300)}...
        </p>

        <b
          onClick={onClick}
          className="text-primary text-sm sm:text-base cursor-pointer"
        >
          <i onClick={onClick}>Read more.</i>
        </b>
      </div>
    </div>
  );
};

const ProfileModal = ({ image, alt, name, role, about, isOpen, close }) => {
  // dissable the background scrolling when the modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // Reset on unmount
    };
  }, [isOpen]);

  return (
    <div className="w-full h-full fixed left-0 right-0 bottom-0 bg-black/20 flex justify-center items-center p-4">
      <div
        className="modal-scroll w-full sm:w-[90%] xl:w-[80%] max-h-[calc(100vh-9rem)] overflow-y-auto
        shadow-md border border-primary mt-20 z-50 bg-white p-6 pt-20 md:p-20
          flex flex-col md:flex-row gap-y-10 md:gap-x-8 items-center md:items-start relative"
      >
        <div onClick={close} className="absolute right-4 top-4 cursor-pointer">
          <CloseIcon size="25" />
        </div>

        <div className="flex flex-col justify-center items-center cursor-pointer">
          <img
            src={image}
            alt={alt}
            className="w-full h-72 sm:w-72 sm:h-80 border-4 border-primary object-cover object-[0,1px]  mb-2"
          />
          <h1 className="text-center text-2xl font-bold text-primary">
            {name}
          </h1>
          <p className="text-center text-base">{role}</p>
        </div>

        <div className="flex-1">
          <h1 className="text-center text-3xl font-bold text-primary pb-4">
            Get to Know{" "}
            {name.split(" ")[0].charAt(0).toUpperCase() +
              name.split(" ")[0].slice(1).toLowerCase()}
          </h1>

          {about?.map((value, index) => {
            return (
              <p key={index} className="py-2 indent-8 text-lg text-justify">
                {value}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Questions = ({ toggle, title, answer, active }) => {
  return (
    <div className="w-full p-2 sm:px-8">
      <div className="py-4 border-b-4 border-slate-300">
        <h1 className="text-xl sm:text-2xl py-2 font-bold text-primary">
          {title}
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
          <div className="w-full p-6 my-4 bg-secondary rounded-2xl ">
            <p className="text-white text-base">{answer}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const CoreValuesCard = ({ icon, title, text }) => {
  return (
    <div className="rounded-xl p-4 border border-slate-200">
      <div className="flex flex-col sm:flex-row gap-x-4 sm:items-center">
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

const AboutCard = ({ image, alt, title, text, bg }) => {
  return (
    <div className={`w-full rounded-2xl bg-${bg} px-8 py-6`}>
      <h1 className="text-2xl font-semibold text-white py-2">{title}</h1>

      <div className="flex gap-x-4 flex-col gap-y-2 sm:flex-row">
        <img
          src={image}
          alt={alt}
          className="w-full sm:w-40 h-40 object-cover rounded-xl"
        />

        <p className="text-lg text-white">{text}</p>
      </div>
    </div>
  );
};

export default AboutUsScreen;
