import { NavLink } from "react-router-dom";

const ButtonNav = ({ children, linkPage, classname }) => {
  return (
    <NavLink
      to={linkPage}
      className={({ isActive }) =>
        isActive
          ? `text-white sm:text-black rounded-[1.5rem] sm:bg-transparent bg-zinc-800 ${classname}`
          : `text-zinc-300 hover:text-zinc-400 bg-zinc-600/50 sm:bg-transparent rounded-[1.5rem] ${classname}`
      }
    >
      <button
        className={`py-1 whitespace-nowrap px-4 rounded-[1.5rem] text-center sm:text-[1rem] text-[0.875rem] font-semibold  ${classname}  ease-in-out duration-300`}
        type="submit"
      >
        {children}
      </button>
    </NavLink>
  );
};

export default ButtonNav;
