import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HEADER_API, SOCIALS_API } from "../config/constant";
import {
  AppLogo,
  ArrowChevronDownIcon,
  ArrowRightIcon,
  FacebookIcon,
  HamburgerIcon,
  InstagramIcon,
  LinkedInIcon,
  TiktokIcon,
  YoutubeIcon,
} from "./Icons";

const Header = () => {
  const { width, height } = useWindowSize();
  const [activeSidemenu, setActiveSideMenu] = useState(false);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  const redirect = (url) => {
    if (!url) return;

    const isExternal = url.startsWith("http");
    if (isExternal) {
      window.open(url, "_blank");
    } else {
      navigate(url);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(HEADER_API);
        const data = res.data;
        console.log("header: ", data);
        setData(data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <div className=" w-full bg-white py-2 pt-4 md:pt-2 px-6 flex justify-between items-end md:items-center fixed top-0 z-[100] shadow-md">
      <AppLogo
        image={data?.logo_image}
        alt={data?.alt}
        size={70}
        onClick={() => navigate("/")}
      />

      <Navigation redirect={redirect} data={data} />

      <div className="hidden md:block">
        <SocialIcon iconColor="#333" />
      </div>

      <div className="md:hidden flex flex-col items-end">
        <SocialIcon iconColor="#333" />

        <div
          className="py-4"
          onClick={() => setActiveSideMenu(!activeSidemenu)}
        >
          <HamburgerIcon size="30" fill="#bc9f62" />
        </div>
      </div>

      {/* for mobile view */}
      <MobileNavMenu
        redirect={redirect}
        data={data}
        activeSidemenu={activeSidemenu}
      />
    </div>
  );
};

const MobileNavMenu = ({ redirect, data, activeSidemenu }) => {
  const navigate = useNavigate();
  const [activeDropdownIndex, setActiveDropdownIndex] = useState(null);
  const dropdownTimeout = useRef(null);

  const handleMouseEnter = (index) => {
    clearTimeout(dropdownTimeout.current);
    setActiveDropdownIndex(index);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setActiveDropdownIndex(null);
    }, 100);
  };

  return (
    <div
      className={`${
        activeSidemenu ? "-translate-x-0 right-1" : "translate-x-full"
      }  block md:hidden duration-100 ease-in border border-slate-200 absolute top-28 right-0  bg-white min-w-56 p-4 rounded-md shadow-md z-[100]`}
    >
      <ul className="flex flex-col gap-x-6 items-start">
        {data?.data?.map((item, index) => {
          return (
            <li
              key={index}
              className={`${
                !item?.dropdown && "flex gap-x-2 items-center"
              } cursor-pointer relative`}
              onMouseEnter={
                item?.dropdown ? () => handleMouseEnter(index) : undefined
              }
              onClick={
                item?.dropdown ? () => handleMouseEnter(index) : undefined
              }
              onMouseLeave={item?.dropdown ? handleMouseLeave : undefined}
            >
              <div
                onClick={() =>
                  item?.dropdown && setActiveDropdownIndex(!activeDropdownIndex)
                }
                className="flex gap-x-2 items-center"
              >
                <a
                  onClick={() => !item?.dropdown && redirect(item?.redirect)}
                  className="text-xl"
                >
                  <p className="hover:text-gold">{item?.item}</p>
                </a>
                <ArrowChevronDownIcon size="10" />
              </div>

              {item?.dropdown && activeDropdownIndex === index && (
                <div className="px-2 w-full duration-300">
                  <Dropdown redirect={redirect} dropItem={item?.drop_item} />
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Navigation = ({ data, redirect }) => {
  const [activeDropdownIndex, setActiveDropdownIndex] = useState(null);
  const navigate = useNavigate();
  const dropdownTimeout = useRef(null);

  const handleMouseEnter = (index) => {
    clearTimeout(dropdownTimeout.current);
    setActiveDropdownIndex(index);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setActiveDropdownIndex(null);
    }, 100);
  };

  return (
    <nav className="hidden md:flex justify-between items-center">
      <ul className="flex gap-x-6 items-center">
        {data?.data?.map((item, index) => (
          <li
            key={index}
            className={`flex gap-x-2 items-center cursor-pointer relative`}
            onMouseEnter={
              item?.dropdown ? () => handleMouseEnter(index) : undefined
            }
            onMouseLeave={item?.dropdown ? handleMouseLeave : undefined}
          >
            <a
              className="text-xl"
              onClick={() => !item?.dropdown && redirect(item?.redirect)}
            >
              <p className="hover:text-gold">{item?.item}</p>
            </a>
            <ArrowChevronDownIcon size="15" />

            {item?.dropdown && activeDropdownIndex === index && (
              <div className="absolute top-8 -left-20 bg-white rounded-xl border border-slate-200 shadow-lg p-4">
                <Dropdown dropItem={item?.drop_item} redirect={redirect} />
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Dropdown = ({ dropItem, redirect }) => {
  const { width } = useWindowSize();

  const navigate = useNavigate();
  return (
    <ul className="sm:min-w-36">
      {dropItem?.map((item, index) => {
        return (
          <li
            key={index}
            className="w-full flex gap-x-4 justify-between items-center"
          >
            <a onClick={() => redirect(item?.redirect)}>
              <p className="text-lg whitespace-nowrap">{item?.title}</p>
            </a>

            <ArrowRightIcon size={width < 800 ? "20" : "24"} />
          </li>
        );
      })}
    </ul>
  );
};

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export const SocialIcon = ({ iconColor }) => {
  const { width } = useWindowSize();
  const [socials, setSocials] = useState([]);

  useEffect(() => {
    const LoadSocials = async () => {
      try {
        const res = await axios.get(SOCIALS_API);
        const data = res.data?.data;
        setSocials(data);
      } catch (error) {
        console.error(error);
      }
    };
    LoadSocials();
  }, []);

  const openNextTab = (url) => {
    if (url) window.open(url, "_blank");
  };

  const Icons = (icon) => {
    const size = width < 800 ? "20" : "24";
    switch (icon) {
      case "facebook":
        return <FacebookIcon size={size} fill={iconColor} />;
      case "tiktok":
        return <TiktokIcon size={size} fill={iconColor} />;
      case "instagram":
        return <InstagramIcon size={size} fill={iconColor} />;
      case "linkedin":
        return <LinkedInIcon size={size} fill={iconColor} />;
      case "youtube":
        return (
          <YoutubeIcon size={width < 800 ? "20" : "28"} fill={iconColor} />
        );
      default:
        return null;
    }
  };

  return (
    <div className="">
      <ul className="flex gap-x-4 items-center">
        {socials?.map((item, index) => {
          return (
            <li key={index}>
              <span
                className="cursor-pointer text-xs"
                onClick={() => openNextTab(item?.redirect)}
              >
                {Icons(item?.icon)}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Header;
