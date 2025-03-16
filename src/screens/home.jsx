import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import CookiesPopupModal from "../components/CookiesPopupModal";
import { ArrowChevronRightIcon } from "../components/Icons";
import Loading from "../components/Loading";
import { NewsletterCon } from "../components/Newsletter";
import OurPartnersAndInvestors from "../components/Partners";
import GoogleReviews from "../components/Reviews";
import { CONTENT_API, COVER_API, SERVICES_API } from "../config/constant";
const VideoPlayer = ({ url }) => {
  return (
    <div className="w-screen h-full">
      {/* <video
        width="100%"
        height="auto"
        autoPlay
        loop
        muted
        controls
        src="https://fruitask.com/assets/file_upload/q5xuGH12Ps/Vk90OHQrSWlQTFhmZHFnZw.mp4"
      >
        Your browser does not support the video tag.
      </video> */}
      <img src={url} className="w-full h-full"></img>
    </div>
  );
};

const HomeScreen = () => {
  const [showCookiesPopup, setShowCookiesPopup] = useState(false);
  const [cover, setCover] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const CoverData = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(COVER_API);
        const data = res.data?.data;
        const btnData = res.data?.button;
        const video = res.data?.video;
        setCover({ video, ...data, ...btnData });
        console.log(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    CoverData();
  }, []);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowCookiesPopup(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowCookiesPopup(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setShowCookiesPopup(false);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="w-full h-full bg-white relative overflow-hidden ">
      {showCookiesPopup && (
        <CookiesPopupModal close={handleReject} accept={handleAccept} />
      )}

      <main className="mt-24 sm:mt-20 overflow-hidden relative w-full h-full  bg-gradient-to-r from-white to-[#4f4f4f]">
        <VideoPlayer url={cover?.video} />
        <div className="inset-0 absolute h-full z-20 bg-white bg-opacity-50 gap-y-6 sm:gap-y-[80px] px-20 flex flex-col  justify-center items-center">
          <div className="text-center">
            <h1 className="sm:text-6xl xl:text-7xl text-3xl outfit-500 text-center  [text-shadow:_0_2px_4px_rgba(0,0,0,0.3)]">
              {cover?.title1 || "Your Reliable"}
              <span className="ml-3 text-gold">
                {cover?.title2 || "Partner"}
              </span>
            </h1>
            <p className="sm:text-3xl text-base font-semibold text-white [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)] ">
              {cover?.subtag || "for Seamless Outsourcing"}
            </p>
          </div>

          <div className="w-full hidden sm:w-[50%] sm:flex  gap-x-4 items-center justify-center px-4">
            <Button onPress={() => window.open(cover?.[0].redirect, "_blank")}>
              {cover?.button?.[0]?.text || "Unlock Your Virtual Partner"}
            </Button>
            <Button
              onPress={() => window.open(cover?.[1].redirect, "_blank")}
              withIcon={true}
            >
              <svg
                id="Layer_1"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="#ffffff"
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
              >
                <path d="m19 24h-14a5.006 5.006 0 0 1 -5-5v-14a5.006 5.006 0 0 1 5-5h14a5.006 5.006 0 0 1 5 5v14a5.006 5.006 0 0 1 -5 5zm-14-22a3 3 0 0 0 -3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-14a3 3 0 0 0 -3-3zm4.342 15.005a2.368 2.368 0 0 1 -1.186-.323 2.313 2.313 0 0 1 -1.164-2.021v-5.322a2.337 2.337 0 0 1 3.5-2.029l5.278 2.635a2.336 2.336 0 0 1 .049 4.084l-5.376 2.687a2.2 2.2 0 0 1 -1.101.289zm-.025-8a.314.314 0 0 0 -.157.042.327.327 0 0 0 -.168.292v5.322a.337.337 0 0 0 .5.293l5.376-2.688a.314.314 0 0 0 .12-.266.325.325 0 0 0 -.169-.292l-5.274-2.635a.462.462 0 0 0 -.228-.068z" />
              </svg>

              <p className="text-white text-sm sm:text-xl xl:text-2xl whitespace-nowrap">
                {cover?.button?.[1]?.text || "Start Your VA Journey"}
              </p>
            </Button>
          </div>
        </div>
      </main>

      <section className="w-full  bg-white py-8 px-4 sm:px-20 relative">
        <div className="w-full absolute -top-5 left-0 z-30 sm:hidden sm:w-[50%] flex gap-x-1 sm:gap-x-4 items-center justify-center px-4">
          <div className="max-w-60">
            <Button
              padding="px-3 py-2"
              onPress={() =>
                window.open(cover?.button?.[0]?.redirect, "_blank")
              }
            >
              {cover?.button?.[0]?.text || "Unlock Your Virtual Partner"}
            </Button>
          </div>
          <div className="max-w-60">
            <Button
              onPress={() =>
                window.open(cover?.button?.[1]?.redirect, "_blank")
              }
              padding="px-3 py-2"
            >
              {cover?.button?.[1]?.text || "Start Your VA Journey"}
            </Button>
          </div>
        </div>
        <p className="mt-4 sm:mt-0 text-center font-[500] text-xl sm:text-2xl xl:text-3xl text-slate-500">
          Our Partners and Investors
        </p>
        <OurPartnersAndInvestors />
      </section>

      <HomeThirdSection />

      <section className="w-full bg-gold p-8 ">
        <div className="w-full text-center ">
          <h1 className="text-3xl text-white">
            What We We&apos;ve got your back!
          </h1>

          <p className="text-base text-white">
            Our expert virtual assistants are selected through a meticulous
            recruitment process, ensuring you receive top-<br></br>tier support
            tailored to your unique needs.
          </p>
        </div>
      </section>

      <ServicesSection />

      <section className="w-full bg-white p-4 sm:p-8 relative">
        <div className="w-56 h-4 rounded-full bg-gold mx-auto my-4"></div>

        <div className="w-full text-center py-4">
          <h1 className="text-3xl font-semibold py-2">
            Hear from some of our valuable clients
          </h1>

          <p className="text-base text-slate-600">
            Valuable customer feedback helps identify our strengths and areas
            for development,<br></br> fosters better decision-making, and
            enhances overall performance.
          </p>
        </div>

        <div className="py-4">
          <GoogleReviews />
        </div>
      </section>

      <section>
        <NewsletterCon />
      </section>
    </div>
  );
};

const HomeThirdSection = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await axios.get(CONTENT_API);

        const data = res.data?.data;
        setContent(data);
      } catch (err) {
        console.log(err);
      }
    };

    loadData();
  }, []);

  return (
    <section className="w-full bg-white py-6 flex flex-col gap-y-10">
      {content?.map((item, index) => {
        const isLeftSide = item?.style == "left" ? true : false;
        return (
          <div
            key={index}
            className={`w-full flex flex-col ${
              isLeftSide ? "items-start" : "items-end"
            }`}
          >
            <div
              className={`w-[90%] sm:w-[80%] ${
                isLeftSide
                  ? "border-y border-r border-slate-200 rounded-tr-2xl rounded-br-2xl"
                  : "border-y border-l border-secondary bg-secondary rounded-tl-2xl rounded-bl-2xl"
              } p-4 sm:px-10`}
            >
              <div
                className={`max-w-7xl mx-auto flex flex-col ${
                  isLeftSide ? "md:flex-row" : "md:flex-row-reverse"
                }  gap-x-4  `}
              >
                <img
                  src={item?.image}
                  className="object-cover w-full sm:w-72 h-72 rounded-xl"
                  alt={item?.alt}
                />

                <div className="p-2 sm:p-6">
                  <h1
                    className={`text-2xl sm:text-4xl font-semibold py-4 ${
                      isLeftSide ? "text-primary" : "text-white"
                    }`}
                  >
                    {item?.title}
                  </h1>
                  <p
                    className={`text-base sm:text-lg ${
                      isLeftSide ? "text-primary" : "text-white"
                    }`}
                  >
                    {item?.subtitle}
                  </p>

                  <div className="max-w-56 py-4">
                    <Button
                      bg={isLeftSide ? "bg-primary" : "bg-white"}
                      textColor={isLeftSide ? "text-white" : "text-primary"}
                      onPress={() => navigate(item?.redirect)}
                    >
                      {item?.button}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

const ServicesSection = () => {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await axios.get(SERVICES_API);

        const data = res.data?.data;
        setServices(data);
      } catch (err) {
        console.log(err);
      }
    };

    loadData();
  }, []);

  return (
    <section className="w-full bg-white p-6">
      <div className="w-full grid grid-cols-1 sm:grid-cols-card gap-6 justify-center items-center">
        {services?.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => navigate(item?.redirect)}
              className="cursor-pointer rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="w-full h-48 relative">
                <img
                  src={item?.image}
                  className="w-full h-full object-cover"
                  alt={item?.alt}
                />
              </div>
              <div className="w-full min-h-20 bg-secondary p-4 flex gap-x-6 justify-center items-center">
                <p className="text-base sm:text-xl text-white">{item?.title}</p>

                <ArrowChevronRightIcon size="20" fill="white" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HomeScreen;
