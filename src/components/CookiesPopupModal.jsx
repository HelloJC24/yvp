import { CookieIcon } from "./Icons";

const CookiesPopupModal = ({ close, accept }) => {
  return (
    <div className="fixed bottom-5 left-5 right-5 z-50 rounded-xl shadow-xl border border-slate-300 bg-white p-6 flex sm:flex-row sm:gap-y-0 gap-y-4 flex-col">
      <div className="flex flex-col gap-y-2 sm:gap-y-0 sm:flex-row items-center">
        <div className="bg-gold w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center rounded-xl">
          <CookieIcon size="50" fill="#fff" />
        </div>
        <div className="flex-1 sm:px-4 py-2">
          <p className="text-sm sm:text-lg">
            We use cookies to improve your experience, analyze site usage, and
            enhance our services. By continuing to browse, you agree to our use
            of cookies. Manage your preferences anytime in settings.
          </p>

          <p className="text-sm sm:text-lg">
            What is cookies? Click here to{" "}
            <span className="font-bold text-black">Learn more.</span>
          </p>
        </div>
      </div>

      <div className="flex sm:flex-col flex-row-reverse gap-x-2 sm:gap-x-0 gap-y-2">
        <div
          onClick={accept}
          className="flex-1 flex justify-center items-center sm:px-14 py-2 rounded-full cursor-pointer bg-primary"
        >
          <p className="text-white text-xl text-center">Accept</p>
        </div>

        <div
          onClick={close}
          className="flex-1 flex justify-center items-center sm:px-14 py-2 rounded-full cursor-pointer bg-white border border-primary"
        >
          <p className="text-primary text-xl text-center">Reject</p>
        </div>
      </div>
    </div>
  );
};

export default CookiesPopupModal;
