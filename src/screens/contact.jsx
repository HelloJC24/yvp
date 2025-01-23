import Footer from "../components/Footer";
import Header from "../components/Header";
import StartConversation from "../components/StartConversation";
import TitlteBar from "../components/TitlteBar";

const ContactUsScreen = () => {
  return (
    <div className="w-full h-full bg-white">
      <Header />
      <TitlteBar title="Contact Us" />

      <StartConversation />
      <Footer />
    </div>
  );
};

export default ContactUsScreen;
