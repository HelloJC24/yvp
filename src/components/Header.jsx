import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppLogo,
  ArrowChevronDownIcon,
  ArrowRightIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  YoutubeIcon,
} from "./Icons";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="hidden w-full bg-white py-2 px-6 md:flex justify-between items-center sticky top-0 z-50 shadow-md">
      <AppLogo size={100} onClick={() => navigate("/")} />

      <Navigation />

      <SocialIcon />
    </div>
  );
};

const Navigation = () => {
  const [showDropdown, setToggleDropdown] = useState(false);

  let dropdownTimeout;

  const handleMouseEnter = () => {
    clearTimeout(dropdownTimeout);
    setToggleDropdown(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout = setTimeout(() => setToggleDropdown(false), 100);
  };

  return (
    <nav className="hidden sm:flex justify-between items-center">
      <ul className="flex gap-x-6 items-center">
        <li
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className=" flex gap-x-2 items-center cursor-pointer relative"
        >
          <a className="text-xl" href="">
            <p className="hover:text-gold">Resources</p>
          </a>
          <ArrowChevronDownIcon size="15" />

          {showDropdown && (
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className=" absolute top-8 -left-20 w-48 bg-white rounded-xl border border-slate-200 shadow-lg p-4"
            >
              <Dropdown />
            </div>
          )}
        </li>
        <li className="flex gap-x-2 items-center cursor-pointer">
          <a className="text-xl" href="">
            <p className="hover:text-gold">Services</p>
          </a>
          <ArrowChevronDownIcon size="15" />
        </li>
        <li className="flex gap-x-2 items-center cursor-pointer">
          <a className="text-xl" href="">
            <p className="hover:text-gold">Careers</p>
          </a>
          <ArrowChevronDownIcon size="15" />
        </li>
        <li className="flex gap-x-2 items-center cursor-pointer">
          <a className="text-xl" href="">
            <p className="hover:text-gold">Givings</p>
          </a>
          <ArrowChevronDownIcon size="15" />
        </li>
      </ul>
    </nav>
  );
};

const Dropdown = () => {
  return (
    <ul className="dropdown-ul">
      <li className="flex gap-x-0 justify-between items-center">
        <a href="">
          <p>Learning Centre</p>
        </a>

        <ArrowRightIcon size="24" />
      </li>
      <li className="flex gap-x-0 justify-between items-center">
        <a href="/contact-us">
          <p>Contact us</p>
        </a>
        <ArrowRightIcon size="24" />
      </li>
      <li className="flex gap-x-0 justify-between items-center">
        <a href="">
          <p>Careers</p>
        </a>
        <ArrowRightIcon size="24" />
      </li>
    </ul>
  );
};

const SocialIcon = () => {
  return (
    <div className="">
      <ul className="flex gap-x-4 items-center">
        <li>
          <a href="https://www.facebook.com/profile.php?id=61569410633625">
            <FacebookIcon size="24" />
          </a>
        </li>
        <li>
          <a href="https://www.aedin.com/in/your-virtual-partner-346724339/">
            <LinkedInIcon size="24" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/yourvirtualpartner.io/">
            <InstagramIcon size="24" />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCyk_QxzhRlT2UdcIz2fRyOg"
            className="nav-a"
          >
            <YoutubeIcon size="28" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
