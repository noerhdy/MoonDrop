import { NavLink } from "react-router-dom";

const ButtonNav = ({ children, linkPage, classname }) => {
  return (
    <NavLink
      to={linkPage}
      className={({ isActive }) =>
        isActive
          ? `text-[#ff7c30] bg-zinc-800/5 rounded-full ${classname}`
          : `text-zinc-400 hover:text-[#ff7c30] hover:bg-zinc-800/10 rounded-full ${classname}`
      }
    >
      <button
        className={`py-1 px-[1.6rem] text-center sm:text-[1rem] text-[0.875rem] font-semibold  ${classname}  ease-in-out duration-300`}
        type="submit"
      >
        {children}
      </button>
    </NavLink>
  );
};

export default ButtonNav;
