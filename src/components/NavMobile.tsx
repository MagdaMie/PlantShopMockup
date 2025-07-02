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
    <div className="flex lg:hidden">
      <button onClick={toggleMenu}>
        <div className="m-2 space-y-1">
          <div className="h-0.5 w-6 bg-gray-400"></div>
          <div className="h-0.5 w-6 bg-gray-400"></div>
          <div className="h-0.5 w-6 bg-gray-400"></div>
        </div>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-12 bg-darkGray bg-opacity-90">
          <div className="items-s flex flex-col space-y-2 p-4">
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
