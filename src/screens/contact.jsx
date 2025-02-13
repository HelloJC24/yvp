import axios from "axios";
import { useState } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { MapMarkerIcon } from "../components/Icons";
import StartConversation from "../components/StartConversation";
import TitlteBar from "../components/TitlteBar";
import { SUBMIT_CONTACT_FORM_API } from "../config/constant";

const ContactUsScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [industry, setIndustry] = useState("");
  const [hearAboutUs, setHearAboutUs] = useState("");
  const [helpWith, setHelpWith] = useState("");
  const [hiringTimeframe, setHiringTimeframe] = useState("");

  // for address under the map
  const [companyAddress, setCompanyAddress] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission here

    try {
      const res = await axios.post(SUBMIT_CONTACT_FORM_API, {
        firstName,
        lastName,
        email,
        phone,
        address,
        companyName,
        industry,
        hearAboutUs,
        helpWith,
        hiringTimeframe,
      });
      console.log(res);

      toast.success("Email sent successfully! Will get back to you soon.", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="w-full h-full bg-white relative overflow-hidden">
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />

      <Header />
      <TitlteBar title="Contact Us" />

      <main className="w-full p-4 sm:p-8 max-w-7xl mx-auto">
        <div className="text-center py-8 w-full">
          <h1 className="text-xl sm:text-3xl font-semibold">
            Join us and collaborate.
          </h1>
          <h1 className="text-xl sm:text-3xl font-semibold">
            Schedule a <span className="text-gold">FREE consultation</span> with
            one of our experts.
          </h1>
        </div>

        <form className="w-full my-10 p-4 sm:p-8 rounded-2xl bg-slate-200 grid gap-4 grid-cols-0 sm:grid-cols-2">
          <input
            type="text"
            className="col-span-2"
            placeholder="Full Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {/* <input
            type="text"
            className="col-span-2 sm:col-span-1"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          /> */}
          <input
            className="col-span-2"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

        <input
            className="col-span-2"
            type="phone"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <textarea
            className="col-span-2 resize-none"
            rows={2}
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>
          {/* <input
            className="col-span-2"
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          /> */}
          <input
            type="text"
            placeholder="Company Name"
            className="col-span-2 sm:col-span-1"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Industry"
            className="col-span-2 sm:col-span-1"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
          />
          <input
            className="col-span-2"
            type="text"
            placeholder="How do you hear about us?"
            value={hearAboutUs}
            onChange={(e) => setHearAboutUs(e.target.value)}
          />
          <input
            className="col-span-2"
            type="text"
            placeholder="What can we help you with?"
            value={helpWith}
            onChange={(e) => setHelpWith(e.target.value)}
          />
          <input
            className="col-span-2"
            type="text"
            placeholder="Hiring Timeframe"
            value={hiringTimeframe}
            onChange={(e) => setHiringTimeframe(e.target.value)}
          />

          <div className="col-span-2">
            <Button onPress={handleSubmit}>Submit</Button>
          </div>
        </form>

        <div className="w-full h-[500px] rounded-2xl mt-20 overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3314.8026267319137!2d150.9990565!3d-33.8174062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDQ5JzAyLjciUyAxNTDCsDU5JzU2LjYiRQ!5e0!3m2!1sen!2sph!4v1732349406467!5m2!1sen!2sph"
            width="100%"
            height="500"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <p className="text-center text-base py-4 flex gap-x-2 items-center justify-center">
          <MapMarkerIcon size="20" fill="#23313f" />
          {companyAddress}
        </p>
      </main>

      <StartConversation />
      <Footer address={(v) => setCompanyAddress(v)} />
    </div>
  );
};

export default ContactUsScreen;
