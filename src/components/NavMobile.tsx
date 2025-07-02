import { useState } from "react";
import { NavLink } from "react-router-dom";
import { NAV_LINKS } from "../data/navigation";

type NavMobileProps = {
  numberOfCartProducts: number;
};

const NavMobile = ({ numberOfCartProducts }: NavMobileProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex  lg:hidden">
      <button onClick={toggleMenu} className="">
        <div className="space-y-1 m-2">
          <div className="w-6 h-0.5 bg-gray-400"></div>
          <div className="w-6 h-0.5 bg-gray-400"></div>
          <div className="w-6 h-0.5 bg-gray-400"></div>
        </div>
      </button>

      {isOpen && (
        <div className="absolute right-0  top-12 bg-darkGray bg-opacity-90">
          <div className=" flex flex-col items-s p-4 space-y-2">
            {NAV_LINKS.map((link, index) => (
              <NavLink
                key={index}
                onClick={() => setIsOpen(false)}
                to={link.path}
                className="uppercase"
              >
                {link.label}
                {link.isCart &&
                  numberOfCartProducts !== undefined &&
                  numberOfCartProducts > 0 &&
                  ` ${numberOfCartProducts}`}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default NavMobile;
