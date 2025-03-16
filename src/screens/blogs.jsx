import React, { useState } from "react";
import Img1 from "../assets/images/new-images/icon 1-1.png";
import Img2 from "../assets/images/new-images/icon 1-2.png";
import Img3 from "../assets/images/new-images/icon 1-3.png";
import Img4 from "../assets/images/new-images/icon 1-4.png";
import Img5 from "../assets/images/new-images/icon 1-5.png";
import Img6 from "../assets/images/new-images/icon 1-6.png";
import Img2_1 from "../assets/images/new-images/icon 2-1.png";
import img5 from "../assets/images/new-images/icon 5.png";
import Img6_2 from "../assets/images/new-images/icon 6.png";
import Img7_2 from "../assets/images/new-images/icon 7.png";
import Img8_2 from "../assets/images/new-images/icon 8.png";

import Button from "../components/Button";
import TitlteBar from "../components/TitlteBar";

const BlogScreen = () => {
  const [articleData, setArticleData] = useState([
    {
      image: Img1,
      text: "We value your skills and hard work. At YVP, you receive fair compensation, performance-based incentives, and opportunities for salary growth as you advance in your virtual career. We connect you with reputable clients who recognize and reward expertise.",
    },
    {
      image: Img2,
      text: "Your professional development matters. YVP provides exclusive training programs, skill-building workshops, and mentorship opportunities to help you stay ahead in the ever-evolving digital workspace. Whether you’re new to virtual work or an experienced professional, we ensure you continue to grow.",
    },
    {
      image: Img3,
      text: "You are never alone in your journey. Our collaborative network of virtual professionals offers guidance, peer support, and knowledge-sharing to help you succeed. YVP fosters a culture of teamwork, ensuring that you have the resources and encouragement to excel.",
    },
    {
      image: Img4,
      text: "Achieve work-life balance with remote work opportunities tailored to your schedule. Whether you prefer full-time, part-time, or project-based roles, YVP gives you the freedom to work in a way that suits your lifestyle while maintaining productivity.",
    },
    {
      image: Img5,
      text: "Expand your expertise by working with clients from various industries, including business support, marketing, finance, technology, e-commerce, and more. At YVP, you’ll gain hands-on experience across different sectors, helping you develop a well-rounded skill set.",
    },
    {
      image: Img6,
      text: "Stay connected and informed with career-building events, live webinars, training sessions, and networking opportunities through YVP. We regularly host industry expert panels, up-skilling workshops, and job readiness programs to give you a competitive edge.",
    },
  ]);

  const [descriptionData, setDescriptionData] = useState([
    {
      item1: [
        {
          icon: null,
          title: "Skill Assessment",
          text: "Depending on the role, you may be required to complete a skills test or task to showcase your expertise.",
        },
        {
          icon: null,
          title: "Application & Screening",
          text: "Submit your application through our online portal. We review your experience, skills, and background to ensure a good fit.",
        },
        {
          icon: null,
          title: "Initial Interview",
          text: "Our recruitment team will schedule an interview to discuss your background, work experience, and expectations.",
        },
      ],
      item2: [
        {
          icon: null,
          title: "Client Matching",
          text: "We connect you with businesses that align with your expertise and career goals.",
        },
        {
          icon: null,
          title: "Onboarding & Training",
          text: "Once matched, we provide orientation, training, and onboarding support to help you transition smoothly into your role.",
        },
        {
          icon: null,
          title: "Continuous Support & Growth",
          text: "We don’t stop at hiring. YVP ensures that you receive ongoing guidance, skill development, and access to networking opportunities to help you thrive.",
        },
      ],
    },
    {
      item1: [
        {
          icon: null,
          title: "Stable Remote Work",
          text: "Work from anywhere while maintaining job security.",
        },
        {
          icon: null,
          title: "Competitive Pay & Incentives",
          text: "Earn well with opportunities for salary growth and bonuses.",
        },
        {
          icon: null,
          title: "Diverse Job Opportunities",
          text: "Work with clients across various industries, expanding your expertise.",
        },
      ],
      item2: [
        {
          icon: null,
          title: "Work-Life Balance",
          text: "Set your own schedule and manage your time efficiently.",
        },
        {
          icon: null,
          title: "Training & Development",
          text: "Access free skill-building programs to enhance your career.",
        },
        {
          icon: null,
          title: "Supportive Community",
          text: "Be part of a network of professionals who collaborate and uplift each other.",
        },
      ],
    },

    {
      item1: [
        {
          title: "1. Financial Stability & Growth",
          text: "Secure a steady income with competitive pay and performance-based incentives, allowing you to build financial security while working remotely.",
        },
        {
          title: "2. Skill Development & Confidence Boost",
          text: "Gain hands-on experience, participate in free training programs, and enhance your expertise, making you more competitive in the virtual workforce.",
        },
        {
          title: "3. Stronger Work-Life Integration",
          text: "Enjoy flexible work arrangements that allow you to spend more time with family, pursue your passions, and create a balanced lifestyle.",
        },
      ],
      item2: [
        {
          title: "4. Career Advancement & Recognition",
          text: "YVP prioritizes internal growth, providing clear career paths, mentorship, and recognition for your contributions so you can continuously progress.",
        },
        {
          title: "5. Personal Empowerment & Independence",
          text: "Work on projects that challenge and excite you, giving you a sense of ownership over your career and professional journey.",
        },
        {
          title: "6. Meaningful Work with Impact",
          text: "By partnering with businesses worldwide, your skills directly contribute to helping companies grow, making a real impact while also building your personal success.",
        },
      ],
    },
    {
      item1: [
        {
          title: "1. Supportive & Inclusive",
          text: "We create a work culture where everyone is valued, heard, and respected, ensuring a collaborative and welcoming environment.",
        },
        {
          title: "2. Commitment to Growth",
          text: "Learning never stops at YVP. We provide continuous training, mentorship, and career-building resources to help you stay ahead in your field.",
        },
        {
          title: "3. Flexibility & Work-Life Balance",
          text: "We understand that success doesn’t have to come at the cost of personal well-being. YVP offers flexible work schedules so you can thrive both professionally and personally.",
        },
      ],
      item2: [
        {
          title: "4. Integrity & Excellence",
          text: "We take pride in delivering high-quality work with honesty, transparency, and professionalism, ensuring long-term success for both our team members and clients.",
        },
        {
          title: "5. Collaboration & Community",
          text: "At YVP, you’re not just an employee—you’re part of a network of skilled professionals who share knowledge, support one another, and grow together.",
        },
        {
          title: "6. Innovation & Adaptability",
          text: " We embrace new technologies, industry trends, and evolving client needs, making YVP a dynamic and future-ready workplace for virtual professionals.",
        },
      ],
    },
  ]);

  return (
    <div className="w-full h-full bg-white relative overflow-hidden">
      <TitlteBar title="Blogs" />

      <section className="w-full max-w-7xl mx-auto p-6 pt-10 ">
        <h1 className="text-xl sm:text-5xl pb-2 text-primary font-semibold">
          How to become a <span className="text-gold">VA Partner</span>?
        </h1>
        <div className="w-full relative">
          <img
            src={img5}
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
        <h1 className=" text-xl sm:text-4xl text-primary font-medium pb-6">
          Why pursue a career at Your Virtual Partner?
        </h1>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center ">
          {articleData?.map((item, index) => {
            return (
              <ArticlesCard key={index} image={item.image} text={item.text} />
            );
          })}
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
                At Your Virtual Partner (YVP), we believe in a streamlined and
                transparent hiring process that ensures the right match between
                skilled virtual professionals and businesses in need of reliable
                support. Here’s how it works:
              </p>
            </div>

            <div className="flex-1 relative">
              <img
                src={Img2_1}
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

          <div className="w-full flex flex-col sm:flex-row gap-y-4 sm:gap-x-4 py-8">
            <div className="flex-1 bg-gold p-4 rounded-2xl">
              {descriptionData[0].item1?.map((item, index) => {
                return (
                  <DescriptionCard
                    key={index}
                    title={item.title}
                    text={item.text}
                  />
                );
              })}
            </div>
            <div className="flex-1 bg-gold p-4 rounded-2xl">
              {descriptionData[0].item2?.map((item, index) => {
                return (
                  <DescriptionCard
                    key={index}
                    title={item.title}
                    text={item.text}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* reverse */}
        <div className="w-full py-8">
          <div className="flex flex-col-reverse sm:flex-row-reverse gap-y-4 sm:gap-x-8">
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-medium ">
                Your <span className="text-gold">Benefits</span> with YVP
              </h1>

              <p className="py-4 text-lg">
                Joining Your Virtual Partner means becoming part of a community
                that values growth, flexibility, and professional success.
                Here’s what you gain:
              </p>
            </div>

            <div className="flex-1 relative">
              <img
                src={Img6_2}
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

          <div className="w-full flex flex-col sm:flex-row gap-y-4 sm:gap-x-4 py-8">
            <div className="flex-1 bg-gold p-4 rounded-2xl">
              {descriptionData[1].item1?.map((item, index) => {
                return (
                  <DescriptionCard
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    text={item.text}
                  />
                );
              })}
            </div>
            <div className="flex-1 bg-gold p-4 rounded-2xl">
              {descriptionData[1].item2?.map((item, index) => {
                return (
                  <DescriptionCard
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    text={item.text}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto p-6 sm:p-10">
        <div className="w-full py-8">
          <div className="flex flex-col-reverse sm:flex-row gap-y-4 sm:gap-x-8">
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-medium ">
                <span className="text-gold">Impact</span> of Woring at YVP
              </h1>

              <p className="py-4 text-lg">
                At YVP, we understand that a fulfilling career is about more
                than just a paycheck—it’s about personal growth, empowerment,
                and work-life balance. Here’s how working with YVP can
                positively impact your life:
              </p>
            </div>

            <div className="flex-1 relative">
              <img
                src={Img7_2}
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

          <div className="w-full flex flex-col sm:flex-row gap-y-4 sm:gap-x-4 py-8">
            <div className="flex-1 bg-secondary p-4 rounded-2xl">
              {descriptionData[2].item1?.map((item, index) => {
                return (
                  <DescriptionCard2
                    key={index}
                    title={item.title}
                    text={item.text}
                  />
                );
              })}
            </div>
            <div className="flex-1 bg-secondary p-4 rounded-2xl">
              {descriptionData[2].item2?.map((item, index) => {
                return (
                  <DescriptionCard2
                    key={index}
                    title={item.title}
                    text={item.text}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* reverse */}
        <div className="w-full py-8">
          <div className="flex flex-col-reverse sm:flex-row-reverse gap-y-4 sm:gap-x-8">
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-medium ">
                Our <span className="text-gold">Culture</span> at YVP
              </h1>

              <p className="py-4 text-lg">
                At YVP, we believe that success starts with the right
                environment. Our culture is built on six key values that make us
                more than just a workplace—we’re a thriving community of virtual
                professionals who support and uplift each other.
              </p>
            </div>

            <div className="flex-1 relative">
              <img
                src={Img8_2}
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

          <div className="w-full flex flex-col sm:flex-row gap-y-4 sm:gap-x-4 py-8">
            <div className="flex-1 bg-secondary p-4 rounded-2xl">
              {descriptionData[3].item1?.map((item, index) => {
                return (
                  <DescriptionCard2
                    key={index}
                    title={item.title}
                    text={item.text}
                  />
                );
              })}
            </div>
            <div className="flex-1 bg-secondary p-4 rounded-2xl">
              {descriptionData[3].item2?.map((item, index) => {
                return (
                  <DescriptionCard2
                    key={index}
                    title={item.title}
                    text={item.text}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const DescriptionCard = ({ icon, title, text }) => {
  return (
    <div className="flex gap-x-2 items-start py-4">
      {icon && <img src={icon} alt="icon" className="w-8 h-8  " />}
      <p className="text-base">
        <span className="font-bold text-lg">{title}</span> - {text}
      </p>
    </div>
  );
};

const DescriptionCard2 = ({ title, text }) => {
  return (
    <div className="flex gap-x-2 items-start py-4">
      <p className="text-base text-white">
        <span className="font-bold text-lg">{title}</span> - {text}
      </p>
    </div>
  );
};

const ArticlesCard = ({ image, alt, text }) => {
  return (
    <div className=" flex flex-col gap-y-4">
      <img
        src={image}
        alt={alt}
        className="w-full h-48 sm:h-72 rounded-xl object-cover "
      />

      <p className="text-base">{text}</p>
    </div>
  );
};

export default BlogScreen;
