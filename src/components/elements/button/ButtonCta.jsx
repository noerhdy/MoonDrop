import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const ButtonCta = ({ children, linkPage, classname }) => {
  return (
    <NavLink to={linkPage}>
      <Button
        className={`rounded-full font-semibold ${classname}  ease-in-out duration-200 text-[1rem]`}
        type="submit"
      >
        {children}
      </Button>
    </NavLink>
  );
};

export default ButtonCta;
