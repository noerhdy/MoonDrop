const ButtonCta = (props) => {
  const { children, classname = "", link } = props;
  const handleClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <button
      onClick={() => handleClick(link)}
      className={`group flex    ${classname} transition-all duration-400`}
    >
      <div className="relative overflow-hidden z-[1] transition-all duration-200 font-semibold text-[1rem]">
        <span className="group-hover:translate-y-full inline-block transition-all duration-500">
          {children}
        </span>
        <span className="absolute inset-0 -translate-y-full group-hover:translate-y-0 inline-block transition-all duration-500">
          {children}
        </span>
      </div>
    </button>
  );
};

export default ButtonCta;
