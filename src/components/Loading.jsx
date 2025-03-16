import React from "react";
import { AppLogo } from "./Icons";

const Loading = () => {
  return (
    <div className="w-full h-dvh absolute inset-0 flex items-center justify-center bg-white z-[999]">
      <div className="flex flex-col gap-y-4 items-center">
        <AppLogo size={200} />

        <div className="loader"></div>
      </div>
    </div>
  );
};

export default Loading;
