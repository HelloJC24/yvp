const Button = ({
  bg,
  withIcon,
  textColor,
  radius,
  padding,
  onPress,
  children,
}) => {
  if (withIcon) {
    return (
      <div
        onClick={onPress}
        className={`w-full cursor-pointer ${bg || "bg-primary"} ${
          radius || "rounded-3xl"
        } ${
          padding || "py-3 px-8"
        }  flex gap-x-4 justify-center items-center shadow-md`}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      onClick={onPress}
      className={`w-full cursor-pointer ${bg || "bg-primary"} ${
        radius || "rounded-3xl"
      } ${padding || "py-3 px-8"} shadow-md border border-primary`}
    >
      <p
        className={`${
          textColor || "text-white"
        } text-center text-sm  sm:text-xl xl:text-2xl whitespace-nowrap `}
      >
        {children}
      </p>
    </div>
  );
};

export default Button;
