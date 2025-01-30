import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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

  return (
    <div className=" w-full bg-white py-2 pt-4 md:pt-2 px-6 flex justify-between items-end md:items-center fixed top-0 z-50 shadow-md">
      <AppLogo size={70} onClick={() => navigate("/")} />

      <Navigation />

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
      <MobileNavMenu activeSidemenu={activeSidemenu} />
    </div>
  );
};

const MobileNavMenu = ({ activeSidemenu }) => {
  const navigate = useNavigate();
  const [activeDropdown, setActiveDropdown] = useState(false);

  return (
    <div
      className={`${
        activeSidemenu ? "-translate-x-0 right-1" : "translate-x-full"
      }  block md:hidden duration-100 ease-in border border-slate-200 absolute top-28 right-0  bg-white min-w-56 p-4 rounded-md shadow-md z-[100]`}
    >
      <ul className="flex flex-col gap-x-6 items-start">
        <li className=" cursor-pointer">
          <div
            onClick={() => setActiveDropdown(!activeDropdown)}
            className="flex gap-x-2 items-center"
          >
            <a className="text-xl">
              <p className="hover:text-gold">Resources</p>
            </a>
            <ArrowChevronDownIcon size="10" />
          </div>

          {activeDropdown && (
            <div className="px-2 w-full duration-300">
              <Dropdown />
            </div>
          )}
        </li>
        <li className="flex gap-x-2 items-center cursor-pointer">
          <a className="text-xl" onClick={() => navigate("/coming-soon")}>
            <p className="hover:text-gold">Services</p>
          </a>
          <ArrowChevronDownIcon size="10" />
        </li>
        <li className="flex gap-x-2 items-center cursor-pointer">
          <a className="text-xl" onClick={() => navigate("/coming-soon")}>
            <p className="hover:text-gold">Careers</p>
          </a>
          <ArrowChevronDownIcon size="10" />
        </li>
        <li className="flex gap-x-2 items-center cursor-pointer">
          <a className="text-xl" onClick={() => navigate("/givings")}>
            <p className="hover:text-gold">Givings</p>
          </a>
          <ArrowChevronDownIcon size="10" />
        </li>
        <li className="flex gap-x-2 items-center cursor-pointer">
          <a className="text-xl" onClick={() => navigate("/about-us")}>
            <p className="hover:text-gold">Our Team</p>
          </a>
          <ArrowChevronDownIcon size="10" />
        </li>
      </ul>
    </div>
  );
};

const Navigation = () => {
  const [showDropdown, setToggleDropdown] = useState(false);
  const navigate = useNavigate();
  let dropdownTimeout;

  const handleMouseEnter = () => {
    clearTimeout(dropdownTimeout);
    setToggleDropdown(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout = setTimeout(() => setToggleDropdown(false), 100);
  };

  return (
    <nav className="hidden md:flex justify-between items-center">
      <ul className="flex gap-x-6 items-center">
        <li
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className=" flex gap-x-2 items-center cursor-pointer relative"
        >
          <a className="text-xl">
            <p className="hover:text-gold">Resources</p>
          </a>
          <ArrowChevronDownIcon size="15" />

          {showDropdown && (
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className=" absolute top-8 -left-20  bg-white rounded-xl border border-slate-200 shadow-lg p-4"
            >
              <Dropdown />
            </div>
          )}
        </li>
        <li className="flex gap-x-2 items-center cursor-pointer">
          <a className="text-xl" onClick={() => navigate("/coming-soon")}>
            <p className="hover:text-gold">Services</p>
          </a>
          <ArrowChevronDownIcon size="15" />
        </li>
        <li className="flex gap-x-2 items-center cursor-pointer">
          <a className="text-xl" onClick={() => navigate("/coming-soon")}>
            <p className="hover:text-gold">Careers</p>
          </a>
          <ArrowChevronDownIcon size="15" />
        </li>
        <li className="flex gap-x-2 items-center cursor-pointer">
          <a className="text-xl" onClick={() => navigate("/givings")}>
            <p className="hover:text-gold">Givings</p>
          </a>
          <ArrowChevronDownIcon size="15" />
        </li>
        <li className="flex gap-x-2 items-center cursor-pointer">
          <a className="text-xl" onClick={() => navigate("/about-us")}>
            <p className="hover:text-gold">Our Team</p>
          </a>
          <ArrowChevronDownIcon size="15" />
        </li>
      </ul>
    </nav>
  );
};

const Dropdown = () => {
  const { width } = useWindowSize();

  const navigate = useNavigate();
  return (
    <ul className="w-full">
      <li className="w-full flex gap-x-4 justify-between items-center">
        <a onClick={() => navigate("/coming-soon")}>
          <p className="text-lg whitespace-nowrap">Learning Centre</p>
        </a>

        <ArrowRightIcon size={width < 800 ? "20" : "24"} />
      </li>
      <li className="w-full flex gap-x-4 justify-between items-center">
        <a onClick={() => navigate("/contact-us")}>
          <p className="text-lg whitespace-nowrap">Contact us</p>
        </a>
        <ArrowRightIcon size={width < 800 ? "20" : "24"} />
      </li>
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

  const openNextTab = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="">
      <ul className="flex gap-x-4 items-center">
        <li>
          <span
            className="cursor-pointer text-xs"
            onClick={() =>
              openNextTab(
                "https://www.facebook.com/profile.php?id=61569410633625"
              )
            }
          >
            <FacebookIcon size={width < 800 ? "20" : "24"} fill={iconColor} />
          </span>
        </li>
        <li>
          <span
            className="cursor-pointer"
            onClick={() =>
              openNextTab(
                "https://www.tiktok.com/@yourvirtualpartner?fbclid=IwY2xjawH74DNleHRuA2FlbQIxMAABHSn6YHiu8d1vPh4Xb2zdqbmuuULAnxfk5Wjy7yOB5blAqx4I4j9Fj7ONng_aem_l2xN7JmxUWzaOJBj12rGJw"
              )
            }
          >
            <TiktokIcon size={width < 800 ? "20" : "24"} fill={iconColor} />
          </span>
        </li>
        <li>
          <span
            className="cursor-pointer"
            onClick={() =>
              openNextTab(
                "https://www.aedin.com/in/your-virtual-partner-346724339/"
              )
            }
          >
            <LinkedInIcon size={width < 800 ? "20" : "24"} fill={iconColor} />
          </span>
        </li>
        <li>
          <span
            className="cursor-pointer"
            onClick={() =>
              openNextTab("https://www.instagram.com/yourvirtualpartner.io/")
            }
          >
            <InstagramIcon size={width < 800 ? "20" : "24"} fill={iconColor} />
          </span>
        </li>
        <li>
          <span
            className="cursor-pointer"
            onClick={() =>
              openNextTab(
                "https://www.youtube.com/channel/UCyk_QxzhRlT2UdcIz2fRyOg"
              )
            }
          >
            <YoutubeIcon size={width < 800 ? "20" : "28"} fill={iconColor} />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Header;
