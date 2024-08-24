const ButtonNav = (props) => {
  const { children, onClick } = props;

  return (
    <button
      onClick={onClick}
      className="group flex justify-center w-1/2  py-2 items-center bg-transparent text-zinc-600 hover:text-zinc-950 border border-zinc-500 font-semibold text-[1rem] relative overflow-hidden rounded-full transition-all duration-400"
    >
      <div className="relative overflow-hidden z-[1] transition-all duration-200">
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

export default ButtonNav;
