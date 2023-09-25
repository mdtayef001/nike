const Button = ({
  label,
  iconURl,
  backgroundColor,
  borderColor,
  textColor,
  fullwidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
    ${
      backgroundColor
        ? `${backgroundColor} ${textColor} ${borderColor}`
        : " bg-coral-red  text-white border-coral-red"
    } rounded-full 
          ${fullwidth && "w-full"}`}
    >
      {label}

      {iconURl && (
        <img
          src={iconURl}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;