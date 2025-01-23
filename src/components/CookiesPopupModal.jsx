import { CookieIcon } from "./Icons";

const CookiesPopupModal = ({ close }) => {
  return (
    <div
      className="fixed bottom-5 left-5 right-5 z-50 rounded-xl shadow-xl border border-slate-200 bg-white p-6
    flex gap-x-4"
    >
      <div className="bg-gold w-24 h-24 flex items-center justify-center rounded-xl">
        <CookieIcon size="50" fill="#fff" />
      </div>
      <div className="flex-1 px-4">
        <p className="text-sm sm:text-base">
          We use cookies to improve your experience, analyze site usage, and
          enhance our services. By continuing to browse, you agree to our use of
          cookies. Manage your preferences anytime in settings.
        </p>

        <p className="text-sm">
          What is cookies? Click here to{" "}
          <span className="font-bold text-black">Learn more.</span>
        </p>
      </div>

      <div className="flex flex-col gap-y-2">
        <div className="px-14 py-2 rounded-full cursor-pointer bg-primary">
          <p className="text-white text-xl">Accept</p>
        </div>

        <div
          onClick={close}
          className="px-14 py-2 rounded-full cursor-pointer bg-white border border-primary"
        >
          <p className="text-primary text-xl">Reject</p>
        </div>
      </div>
    </div>
  );
};

export default CookiesPopupModal;
