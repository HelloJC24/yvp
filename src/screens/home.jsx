import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import CookiesPopupModal from "../components/CookiesPopupModal";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ArrowChevronRightIcon } from "../components/Icons";
import { NewsletterCon } from "../components/Newsletter";
import OurPartnersAndInvestors from "../components/Partners";
import StartConversation from "../components/StartConversation";
const VideoPlayer = () => {
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
      <img src="https://yourvirtualpartner.io/storage/video/HOME%20PAGE.gif" className="w-full h-full"></img>
    </div>
  );
};

const HomeScreen = () => {
  const [showCookiesPopup, setShowCookiesPopup] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowCookiesPopup(true);
    }
  }, []);


  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowCookiesPopup(false)
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setShowCookiesPopup(false)
  };

  return (
    <div className="w-full h-full bg-white relative overflow-hidden">
      {showCookiesPopup && (
        <CookiesPopupModal close={() => handleReject()} />
      )}

      <Header />
      <main className="mt-24 sm:mt-20 overflow-hidden relative w-full h-full  bg-gradient-to-r from-white to-[#4f4f4f]">
        <VideoPlayer />
        <div className="inset-0 absolute h-full z-20 bg-white bg-opacity-50 gap-y-6 sm:gap-y-[80px] px-20 flex flex-col  justify-center items-center">
          <div className="text-center">
            <h1 className="sm:text-6xl xl:text-7xl text-3xl outfit-500 text-center ">
              Your Reliable
              <span className="ml-3 text-gold">Partner</span>
            </h1>
            <p className="sm:text-3xl text-base font-semibold text-white">
              for Seamless Outsourcing
            </p>
          </div>

          <div className="w-full hidden sm:w-[50%] sm:flex  gap-x-4 items-center justify-center px-4">
            <Button
              onPress={() =>
                window.open(
                  "https://calendar.app.google/MgZAPLZaPbi5fTVo6",
                  "_blank"
                )
              }
            >
              Unlock Your Virtual Partner
            </Button>
            <Button withIcon={true}>
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
                Start Your VA Journey
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
                window.open(
                  "https://outlook.office365.com/owa/calendar/ZenrgFinanceBookingCopy@zenrgfinance.com.au/bookings/",
                  "_blank"
                )
              }
            >
              Unlock Your Virtual Partner
            </Button>
          </div>
          <div className="max-w-60">
            <Button padding="px-3 py-2">Start Your VA Journey</Button>
          </div>
        </div>
        <p className="mt-4 sm:mt-0 text-center font-[500] text-xl sm:text-2xl xl:text-3xl text-slate-500">
          Our Partners and Investors
        </p>
        <OurPartnersAndInvestors />
      </section>

      <section className="w-full bg-white py-6 flex flex-col gap-y-10">
        <div className="w-full flex flex-col items-start">
          <div
            className="w-[80%] border-y border-r border-slate-200 rounded-tr-2xl rounded-br-2xl p-4 sm:px-10
          "
          >
            <div className="max-w-7xl flex flex-col md:flex-row gap-x-4 items-start md:items-center justify-start">
              <img
                src="https://fruitask.com/assets/file_upload/eLA83DpvIiTsDXN/SUpnZjF0MEJIZz09.jpg"
                className="object-cover w-full sm:w-72 h-72 rounded-xl"
                alt=""
              />

              <div className="p-2 sm:p-6">
                <h1 className="text-4xl font-semibold py-4 text-primary">
                  Empowering Your Business Through Smart Outsourcing
                </h1>
                <p className="text-base sm:text-lg text-primary">
                  Streamline your operations and scale effortlessly with Your
                  Virtual Partners. From admin support to specialized tasks, we
                  connect you with skilled professionals who work as an
                  extension of your team—saving you time, reducing costs, and
                  driving growth.
                </p>

                <div className="max-w-56 py-4">
                  <Button onPress={() => navigate("coming-soon")}>
                    Explore
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col items-end">
          <div
            className="w-[80%]  border-y border-l border-secondary bg-secondary rounded-tl-2xl rounded-bl-2xl p-4 sm:px-10
          flex justify-end"
          >
            <div className="max-w-7xl flex flex-col md:flex-row-reverse gap-x-4 items-start md:items-center justify-end">
              <img
                src="https://fruitask.com/assets/file_upload/eLA83DpvIiTsDXN/SlpzYXdJRklTOEhGS1BaK3MxND0.jpg"
                className="object-cover w-full sm:w-72 h-72 rounded-xl"
                alt=""
              />

              <div className="p-2 sm:p-6">
                <h1 className="text-4xl font-semibold py-4 text-white">
                  Your Virtual Partners: Outsource Smarter, Achieve More
                </h1>
                <p className="text-base sm:text-lg text-white">
                  Discover the power of outsourcing with Your Virtual Partners.
                  We provide top-tier virtual talent to handle your business
                  needs, so you can focus on what matters most—growing your
                  success.
                </p>

                <div className="max-w-56 py-4">
                  <Button
                    onPress={() => navigate("/")}
                    bg="bg-white"
                    textColor="text-secondary"
                  >
                    Explore
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <section className="w-full bg-white p-6">
        <div className="w-full grid grid-cols-1 sm:grid-cols-card gap-6 justify-center items-center">
          <div className=" rounded-2xl shadow-xl overflow-hidden">
            <div className="w-full h-48 relative">
              <img
                src="https://fruitask.com/assets/file_upload/eLA83DpvIiTsDXN/SnBzV3lKa2JDWjQ9.jpg"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="w-full min-h-20 bg-secondary p-4 flex gap-x-6 justify-center items-center">
              <p className="text-base sm:text-xl text-white">
                Financial Planning
              </p>

              <ArrowChevronRightIcon size="20" fill="white" />
            </div>
          </div>

          <div className=" rounded-2xl shadow-xl overflow-hidden">
            <div className="w-full h-48 relative">
              <img
                src="https://fruitask.com/assets/file_upload/eLA83DpvIiTsDXN/SVprY3paa2JDWjQ9.jpg"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="w-full min-h-20 bg-secondary p-4 flex gap-x-6 justify-center items-center">
              <p className="text-base sm:text-xl text-white">
                Mortgage Broking Service
              </p>
              <ArrowChevronRightIcon size="20" fill="white" />
            </div>
          </div>

          <div className=" rounded-2xl shadow-xl overflow-hidden">
            <div className="w-full h-48 relative">
              <img
                src="https://fruitask.com/assets/file_upload/eLA83DpvIiTsDXN/SlpzYnlJUkRTOG5KSS9aK3MxND0.jpg"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="w-full min-h-20 bg-secondary p-4 flex gap-x-6 justify-center items-center">
              <p className="text-base sm:text-xl text-white">
                Real State Services
              </p>

              <ArrowChevronRightIcon size="20" fill="white" />
            </div>
          </div>

          <div className=" rounded-2xl shadow-xl overflow-hidden">
            <div className="w-full h-48 relative">
              <img
                src="https://fruitask.com/assets/file_upload/eLA83DpvIiTsDXN/SUo4WHlaa2JDWjQ9.jpg"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="w-full min-h-20 bg-secondary p-4 flex gap-x-6 justify-center items-center">
              <p className="text-base sm:text-xl text-white">Other services</p>
              <ArrowChevronRightIcon size="20" fill="white" />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white p-8 relative">
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
      </section>

      <section>
        <NewsletterCon />
      </section>

      <StartConversation />

      <Footer />
    </div>
  );
};

export default HomeScreen;
