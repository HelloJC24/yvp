import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-dvh absolute inset-0 flex items-center justify-center bg-white z-[999]">
      <div className="loader"></div>
    </div>
  );
};

export default Loading;
