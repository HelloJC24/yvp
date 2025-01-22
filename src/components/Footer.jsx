import {
  AppLogo,
  ArrowRightIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  YoutubeIcon,
} from "./Icons";

const Footer = () => {
  return (
    <footer className="w-full bg-secondary p-4">
      <div className="w-full px-20 py-8 flex gap-x-12 items-center justify-between">
        <AppLogo size={150} />

        <div className="px-10 flex-1 flex justify-between items-center">
          <Address />
          <ContactUs />
          <Company />
        </div>
      </div>

      <div className="w-full px-14 flex justify-between items-center">
        <p className="text-sm text-white">YourVirtualPartner.io 2025</p>
        <p className="text-sm text-white">ALL RIGHT RESERVED</p>
        <SocialIcon />
      </div>
    </footer>
  );
};

const Address = () => {
  return (
    <div className="w-full">
      <h1 className="text-xl text-slate-300">Address</h1>
      <p className="text-base text-slate-300">
        44/2 O&apos;Connell Street, Parramatta, NSW 2150, Level 49, 8 Parramatta
        Square, Parramatta NSW 2150, Australias
      </p>
    </div>
  );
};

const ContactUs = () => {
  return (
    <div className="w-full">
      <h1 className="text-xl text-slate-300">Contact Us</h1>
      <ul>
        <li>
          <p className="text-base text-slate-300">
            Phone number: +61-3563 2065
          </p>
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
  return (
    <div className="w-full">
      <h1 className="text-xl text-slate-300">Company</h1>
      <ul className="max-w-36">
        <li className="flex gap-x-0 justify-between items-center">
          <a href="">
            <p className="text-base text-slate-300">About Us</p>
          </a>

          <ArrowRightIcon size="24" fill="#cbd5e1" />
        </li>
        <li className="flex gap-x-0 justify-between items-center">
          <a href="">
            <p className="text-base text-slate-300">Services</p>
          </a>
          <ArrowRightIcon size="24" fill="#cbd5e1" />
        </li>
        <li className="flex gap-x-0 justify-between items-center">
          <a href="">
            <p className="text-base text-slate-300">Testimonials</p>
          </a>
          <ArrowRightIcon size="24" fill="#cbd5e1" />
        </li>
      </ul>
    </div>
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
          <a href="https://www.linkedin.com/in/your-virtual-partner-346724339/">
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
            className="nav-link"
          >
            <YoutubeIcon size="28" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
