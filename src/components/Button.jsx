const Button = ({ bg, withIcon, textColor, onPress, children }) => {
  if (withIcon) {
    return (
      <div
        onClick={onPress}
        className={`w-full cursor-pointer ${bg} rounded-2xl py-3 px-8 flex gap-x-4 justify-center items-center shadow-md`}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      onClick={onPress}
      className={`w-full cursor-pointer ${
        bg || "bg-primary"
      } rounded-2xl py-3 px-8 shadow-md`}
    >
      <p
        className={`${
          textColor || "text-white"
        } text-center sm:text-xl xl:text-2xl whitespace-nowrap font-[500]`}
      >
        {children}
      </p>
    </div>
  );
};

export default Button;
