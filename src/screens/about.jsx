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
import { CloseIcon } from "../components/Icons";
import StartConversation from "../components/StartConversation";
import TitlteBar from "../components/TitlteBar";

const AboutUsScreen = () => {
  const [activeModal, setActiveModal] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);

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

  const ourTeams = [
    {
      id: 1,
      profile:
        "https://fruitask.com/assets/file_upload/eLA83DpvIiTsDXN/VnVaaXZmbFJPckd3VmZaa3JWND0.png",
      name: "ALLEN CHAN",
      position: "YVP DIRECTOR",
      text: "Allen is the Director and Founder of YVP & ZENRG Finance. He has over 15 years of experience within the Mortgage and Finance industry and graduated from the University of Technology Sydney with a Bachelor of Mathematics and Finance. To further pursue his passion for finance, Allen obtained a Diploma of Finance and Mortgage Brokering Management from KAPLAN. He is also a full member of the Mortgage & Finance Association of Australia (MFAA), the peak national body for the mortgage and finance broking industry. As a Sydney local, Allen attended Newtown High School of the Performing Arts before purchasing his first home at the age of 23. Since then, he has purchased over 10 different types of properties with diverse taxation structures across multiple states. His keen interest and expertise in property investment have allowed him to accrue back the more than 6-figure sum he lost during the global financial crisis (GFC) of 2008. When Allen isn’t busily working away here at ZENRG Finance, you’ll find him enjoying road trips in his Lexus 450H hybrid vehicle, tinkering with high-tech gadgets, or spending time with his partner and two beautiful daughters. He also loves to MC and DJ at weddings and corporate events—with this passion for performing dating back to his appearance in the Opening Ceremony of the Sydney 2000 Olympics. Allen is passionate about helping others, and one day hopes to become a philanthropist to assist communities in need around the world.",
    },
    {
      id: 2,
      profile:
        "https://fruitask.com/assets/file_upload/eLA83DpvIiTsDXN/VU9acnR2TXdXYlN3WHZoYWpIY2l0V09sRGc9PQ.png",
      name: "GLENDA MAE NONO",
      position: "EXECUTIVE ASSISTANT",
      text: "Gone are the days of long commutes and missed puppy playtime! As a former banking professional turned virtual executive assistant, I've traded the boardroom for the blissful chaos of my home office. My four canine companions, my constant furry shadows, used to get the short end of the stick. Long hours at the bank meant precious little time for cuddles and playtime. Now, the workday unfolds amidst a symphony of tail wags and happy barks. My office is a haven of productivity and pure doggy delight. I can tackle projects while my furballs snooze nearby, or enjoy a midday play break with my furry friends. Working from home isn't just about flexibility; it's about prioritizing the things that truly matter. And for me, that means sharing every precious moment with my beloved pack.",
    },
    {
      id: 3,
      profile:
        "https://fruitask.com/assets/file_upload/eLA83DpvIiTsDXN/WGV0ajJQRTRON3F3TmFoNnBBPT0.png",
      name: "JAM FINCA",
      position: "HUMAN RESOURCE MANAGER",
      text: "With over seven years of experience in Human Resources, Jam Finca is a dedicated professional with expertise in recruitment, employee support, and HR operations. She has effectively handled comprehensive HR processes, including talent acquisition, payroll management, and benefits administration, while showcasing excellent organizational and communication abilities. Having undergone training in Lean Six Sigma Yellow Belt and Red Belt methodologies and certified in Microsoft Power BI, Jam applies process improvement strategies to streamline operations and boost efficiency. As a Recruitment Manager, her combination of HR knowledge, analytical skills, and commitment to continuous improvement makes her a dynamic leader who excels at building strong teams and fostering organizational growth. In addition to her HR expertise, Jam enjoys photography, graphic design, and video editing, showcasing her creative side. Outside of work, she loves exploring new activities, traveling locally, and looks forward to traveling the world. Jam finds relaxation and inspiration in sunset viewing, which allows her to appreciate the beauty of nature and the environment.",
    },
    {
      id: 4,
      profile:
        "https://fruitask.com/assets/file_upload/eLA83DpvIiTsDXN/VnVscjJQb3dMYTI1WG84MGdYdzR5ejI3QncwPQ.png",
      name: "ACE MATTHEW BEUP",
      position: "SOCIAL MEDIA MANAGER",
      text: "A highly skilled Creative Specialist with over 5 years of experience in graphic design, web content creation, and social media management, I bring a unique blend of technical expertise and creativity to every project. Proficient in tools like Adobe Photoshop, Canva, Premiere, Figma, and CapCut, I specialize in developing visually compelling designs and strategies that effectively communicate brand messages. My work spans a variety of industries, focusing on creating engaging visuals, managing brand identity, and enhancing online presence through SEO and data-driven social media strategies. Beyond design, I have a passion for sharing knowledge and empowering others. I have conducted workshops and training sessions on Canva and Photoshop in partnership with DICT Region IVB-Palawan, mentoring aspiring creatives across various municipalities. This teaching experience reflects my strong communication skills and ability to inspire others to achieve their creative potential. As a media consultant and branding expert, I excel in creating cohesive visual identities, from logo designs to full-scale marketing campaigns. My work is rooted in a deep understanding of design principles and audience engagement, ensuring that each project delivers measurable results. I immerse myself in photography and storytelling in my free time, constantly exploring new creative concepts that spark innovation. Whether behind a camera lens or at a design desk, I am committed to crafting visuals that inspire, connect, and leave a lasting impact.",
    },
    {
      id: 5,
      profile:
        "https://fruitask.com/assets/file_upload/eLA83DpvIiTsDXN/UmU5cHNmazBXYSswVjVsSGdIWkQ2MzJz.png",
      name: "REGINE VELASCO",
      position: "HUMAN RESOURCE GENERALIST",
      text: "A Certified Human Resource Associate with over 4 years of experience, I specialize in leveraging strong communication and analytical thinking to enhance core Human Resource practices. My expertise spans diverse HR functions, including recruitment, onboarding, employee relations, performance management, training and development, and strategic compensation and benefits administration. Throughout my career, I have successfully contributed to creating streamlined processes, fostering positive workplace cultures, and aligning HR strategies with organizational goals. Outside of my professional endeavors, I have a passion for lifelong learning and personal growth. In my free time, I enjoy immersing myself in thought-provoking books that expand my perspective and fuel my creativity. Additionally, I relish the opportunity to explore new destinations, creating lasting memories while discovering different cultures, cuisines, and landscapes with my family. This combination of professional dedication and personal interests drives me to bring both a structured and innovative approach to my work and life.",
    },
  ];

  const handleToggle = (id) => {
    const updatedQuestions = questions.map((question) => {
      if (question.id === id) {
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
    <div className="w-full h-full bg-white relative">
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
        <h1 className="text-2xl sm:text-4xl font-semibold py-4 text-center">
          Our Team
        </h1>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-team-card justify-center gap-14 p-8">
          {ourTeams.map(({ id, profile, name, position, text }) => {
            return (
              <OurTeam
                key={id}
                onClick={() => handleSelectProfile(id)}
                profile={profile}
                name={name}
                position={position}
                text={text}
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
        <h1 className="text-2xl sm:text-4xl font-semibold py-4 text-center">
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

      <section className="w-full min-h-[50vh] bg-white p-8 relative">
        <div className="w-full flex flex-col justify-center md:flex-row gap-x-6  px-4 md:px-8">
          <img
            src="https://fruitask.com/assets/file_upload/eLA83DpvIiTsDXN/SlpzZnlJOUFWNU9CZkE9PQ.jpg"
            alt=""
            className="w-72 h-full sm:w-96 rounded-2xl object-cover"
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

      {activeModal && selectedProfile && (
        <ProfileModal close={handleCloseModal} {...selectedProfile} />
      )}
    </div>
  );
};

const OurTeam = ({ onClick, profile, name, position, text }) => {
  return (
    <div className="min-w-72">
      <div
        onClick={onClick}
        className="flex flex-col justify-center items-center cursor-pointer"
      >
        <img
          src={profile}
          alt=""
          className="w-72 h-72 sm:w-full sm:h-80 border-4 border-primary object-cover object-[0,1px] mb-2"
        />
        <h1 className="text-center text-2xl font-bold text-primary">{name}</h1>
        <p className="text-center text-base">{position}</p>
      </div>

      <div className="py-4">
        <p className="text-sm sm:text-base pb-6">{text.substring(0, 400)}</p>

        <b className="text-primary text-sm sm:text-base cursor-pointer">
          <i>Read more.</i>
        </b>
      </div>
    </div>
  );
};

const ProfileModal = ({ profile, name, position, text, close }) => {
  return (
    <div className="w-full h-full fixed left-0 right-0 bottom-0 bg-black/20 flex justify-center items-center">
      <div
        className="modal-scroll w-[80%] max-h-[calc(100vh-9rem)] overflow-y-auto
        shadow-md border border-primary mt-20 z-50 bg-white p-10 pt-20 md:p-20
          flex flex-col md:flex-row gap-y-10 md:gap-x-8 items-center md:items-start relative"
      >
        <div onClick={close} className="absolute right-4 top-4 cursor-pointer">
          <CloseIcon size="25" />
        </div>

        <div className="flex flex-col justify-center items-center cursor-pointer">
          <img
            src={profile}
            alt=""
            className="w-full h-72 sm:w-72 sm:h-80 border-4 border-primary object-cover mb-2"
          />
          <h1 className="text-center text-2xl font-bold text-primary">
            {name}
          </h1>
          <p className="text-center text-base">{position}</p>
        </div>

        <div className="flex-1">
          <h1 className="text-center text-3xl font-bold text-primary">
            About{" "}
            {name.split(" ")[0].charAt(0).toUpperCase() +
              name.split(" ")[0].slice(1).toLowerCase()}
          </h1>

          <p className="py-6 text-lg">{text}</p>
        </div>
      </div>
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
          <div className="w-full p-6 my-4 bg-secondary rounded-2xl ">
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
