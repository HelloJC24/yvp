import { useState } from "react";
import { Link } from "react-router";
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
  return (
    <div className="w-full bg-white py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      <AppLogo size={100} />

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
    <nav className="flex justify-between items-center">
      <ul className="flex gap-x-6 items-center">
        <li
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className=" flex gap-x-2 items-center cursor-pointer relative"
        >
          <Link className="text-xl" href="">
            <p className="hover:text-gold">Resources</p>
          </Link>
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
          <Link className="text-xl" href="">
            <p className="hover:text-gold">Services</p>
          </Link>
          <ArrowChevronDownIcon size="15" />
        </li>
        <li className="flex gap-x-2 items-center cursor-pointer">
          <Link className="text-xl" href="">
            <p className="hover:text-gold">Careers</p>
          </Link>
          <ArrowChevronDownIcon size="15" />
        </li>
        <li className="flex gap-x-2 items-center cursor-pointer">
          <Link className="text-xl" href="">
            <p className="hover:text-gold">Givings</p>
          </Link>
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
        <Link href="">
          <p>Learning Centre</p>
        </Link>

        <ArrowRightIcon size="24" />
      </li>
      <li className="flex gap-x-0 justify-between items-center">
        <Link href="">
          <p>Contact us</p>
        </Link>
        <ArrowRightIcon size="24" />
      </li>
      <li className="flex gap-x-0 justify-between items-center">
        <Link href="">
          <p>Careers</p>
        </Link>
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
          <Link href="https://www.facebook.com/profile.php?id=61569410633625">
            <FacebookIcon size="24" />
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/your-virtual-partner-346724339/">
            <LinkedInIcon size="24" />
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/yourvirtualpartner.io/">
            <InstagramIcon size="24" />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.youtube.com/channel/UCyk_QxzhRlT2UdcIz2fRyOg"
            className="nav-link"
          >
            <YoutubeIcon size="28" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
