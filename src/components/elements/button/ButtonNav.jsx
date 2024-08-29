import { NavLink } from "react-router-dom";

const ButtonNav = ({ children, linkPage, classname }) => {
  return (
    <NavLink
      to={linkPage}
      className={({ isActive }) =>
        isActive
          ? `text-white lg:text-black rounded-[1.5rem] lg:bg-transparent bg-zinc-800 ${classname}`
          : `text-zinc-400 lg:hover:text-zinc-500 hover:text-zinc-300  bg-zinc-900/50 lg:bg-transparent rounded-[1.5rem] ${classname}`
      }
    >
      <button
        className={`py-2 whitespace-nowrap px-4  rounded-[1.5rem] text-center lg:text-[1rem] text-[0.825rem] font-semibold  ${classname}  ease-in-out duration-300`}
        type="submit"
      >
        {children}
      </button>
    </NavLink>
  );
};

export default ButtonNav;
