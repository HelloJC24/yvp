import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { FOOTER_API } from "../config/constant";
import { SocialIcon } from "./Header";
import { AppLogo, ArrowRightIcon } from "./Icons";

const Footer = ({ address }) => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await axios.get(FOOTER_API);
        console.log(res.data);
        setData(res.data);

        // set the address outside of footer
        address(data?.address?.location_name);
      } catch (e) {
        console.log(e);
      }
    };

    loadData();
  }, [address, data?.address?.location_name]);

  return (
    <footer className="w-full bg-secondary p-4">
      <div className="w-full max-w-7xl mx-auto px-2  py-8 flex flex-col md:flex-row justify-center items-start md:items-center">
        <AppLogo
          image={data?.logo?.image}
          size={150}
          onClick={() => navigate("/")}
        />

        <div className="px-4 sm:px-10 w-full flex flex-col sm:flex-row gap-y-2 sm:gap-x-4 justify-center items-start">
          <Address location={data?.address?.location_name} />
          <ContactUs contact={data?.contact} extra={data?.extra_links} />
          <Company nav={data?.others} />
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-2 flex flex-col  sm:flex-row gap-y-2 gap-x-2 justify-between items-center">
        <p className="text-sm text-white">{data?.logo?.year}</p>
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

const Address = ({ location }) => {
  return (
    <div className="min-w-60">
      <h1 className="text-xl text-slate-300">Address</h1>
      <p className="text-base text-slate-300">{location}</p>
    </div>
  );
};

const ContactUs = ({ contact, extra }) => {
  return (
    <div className="w-full">
      <h1 className="text-xl text-slate-300">Contact Us</h1>
      <ul>
        {extra?.map((item, index) => {
          return (
            <li key={index}>
              <a
                href={item?.link}
                className="underline text-base text-slate-300"
              >
                {item?.name === "B2B"
                  ? "Business to Business"
                  : item?.name === "B2C"
                  ? " Business to Consumer"
                  : ""}
              </a>
            </li>
          );
        })}
      </ul>
      <ul>
        <li>
          <p className="text-base text-slate-300">
            Phone number: {contact?.phone}
          </p>
        </li>
        <li>
          <p className="text-base text-slate-300">Email us: {contact?.email}</p>
        </li>
        <li>
          <p className="text-base text-slate-300">Time: {contact?.time}</p>
        </li>
      </ul>
    </div>
  );
};

const Company = ({ nav }) => {
  const navigate = useNavigate();
  return (
    <div className="w-full footer-nav">
      <h1 className="text-xl text-slate-300">Company</h1>
      <ul className="max-w-36">
        {nav?.map((item, index) => {
          return (
            <li
              key={index}
              className="flex gap-x-0 justify-between items-center cursor-pointer"
            >
              <a onClick={() => navigate(item?.page)}>
                <p className="hover:text-white text-base text-slate-300">
                  {item?.title}
                </p>
              </a>

              <ArrowRightIcon size="24" fill="#cbd5e1" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Footer;
