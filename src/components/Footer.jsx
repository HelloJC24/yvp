import { useNavigate } from "react-router";
import { SocialIcon } from "./Header";
import { AppLogo, ArrowRightIcon } from "./Icons";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="w-full bg-secondary p-4">
      <div className="w-full max-w-7xl mx-auto px-2  py-8 flex flex-col md:flex-row justify-center items-start md:items-center">
        <AppLogo size={150} onClick={() => navigate("/")} />

        <div className="px-4 sm:px-10 w-full flex flex-col sm:flex-row gap-y-2 sm:gap-x-4 justify-center items-start">
          <Address />
          <ContactUs />
          <Company />
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-2 flex flex-col  sm:flex-row gap-y-2 gap-x-2 justify-between items-center">
        <p className="text-sm text-white">YourVirtualPartner.io 2025</p>
        <p className="hidden sm:block text-sm text-white">
          © ALL RIGHT RESERVED
        </p>

        <SocialIcon iconColor="#fff" />
      </div>

      <p className="block sm:hidden text-center p-4 text-sm text-white">
        © ALL RIGHT RESERVED
      </p>
    </footer>
  );
};

const Address = () => {
  return (
    <div className="min-w-60">
      <h1 className="text-xl text-slate-300">Address</h1>
      <p className="text-base text-slate-300">Parramatta NSW 2150</p>
    </div>
  );
};

const ContactUs = () => {
  return (
    <div className="w-full">
      <h1 className="text-xl text-slate-300">Contact Us</h1>
      <ul>
        <li>
          <p className="text-base text-slate-300">Phone number: 0435632065</p>
        </li>
        <li>
          <p className="text-base text-slate-300">
            Email us: hello@yourvirtualpartner.io
          </p>
        </li>
        <li>
          <p className="text-base text-slate-300">Time: 9AM - 5PM EAST</p>
        </li>
      </ul>
    </div>
  );
};

const Company = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full footer-nav">
      <h1 className="text-xl text-slate-300">Company</h1>
      <ul className="max-w-36">
        <li className="flex gap-x-0 justify-between items-center cursor-pointer">
          <a onClick={() => navigate("/about-us")}>
            <p className="hover:text-white text-base text-slate-300">
              About Us
            </p>
          </a>

          <ArrowRightIcon size="24" fill="#cbd5e1" />
        </li>
        <li className="flex gap-x-0 justify-between items-center cursor-pointer">
          <a onClick={() => navigate("/coming-soon")}>
            <p className="hover:text-white text-base text-slate-300">
              Services
            </p>
          </a>
          <ArrowRightIcon size="24" fill="#cbd5e1" />
        </li>
        <li className="flex gap-x-0 justify-between items-center cursor-pointer">
          <a onClick={() => navigate("/coming-soon")}>
            <p className="hover:text-white text-base text-slate-300">
              Testimonials
            </p>
          </a>
          <ArrowRightIcon size="24" fill="#cbd5e1" />
        </li>
      </ul>
    </div>
  );
};

export default Footer;
