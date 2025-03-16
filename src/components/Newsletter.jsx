import axios from "axios";
import { useState } from "react";
import { NEWSLETTER_API } from "../config/constant";
import { Bounce, toast, ToastContainer } from "react-toastify";

export const NewsletterCon = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = async () => {
    try {
      if (!email) return;

      const res = await axios.get(`${NEWSLETTER_API}?email=${email}`);
      console.log(res.data);
      if(res.data.status == 'ok'){
             toast.success("You are now subscribed to our newsletter!", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
              });
      }
      setEmail("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
       <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-4xl font-semibold tracking-tight text-white">
              Subscribe to our newsletter
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Subscribe to our newsletter and be the first to receive expert
              outsourcing tips, industry insights, and exclusive updates.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-gold px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                onClick={handleSubscribe}
              >
                Subscribe
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10"></div>
              <dt className="mt-4 text-base font-semibold text-white">
                Our Services
              </dt>
              <dd className="mt-2 text-base/7 text-gray-400">
                Administrative Support Social Media Management Content Creation
                Customer Service Specialized Industry Support (Real Estate,
                Financial Planning, and more)
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10"></div>
              <dt className="mt-4 text-base font-semibold text-white">
                Who we are?
              </dt>
              <dd className="mt-2 text-base/7 text-gray-400">
                Your Virtual Partner (YVP) is a premier provider of virtual
                assistance services. We specialize in connecting businesses with
                skilled virtual associates from the Philippines, empowering
                companies to scale while creating sustainable opportunities that
                transform lives.
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-1155/678 w-[72.1875rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
    </div>
  );
};
