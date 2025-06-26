import { NavLink } from "react-router";
import { navLinks } from "../assets/navLinks";
import PurpleButton from "./PurpleButton";
import BorderedButton from "./BorderedButton";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  return (
    <nav className="px-2 md:px-8 lg:px-15 py-2 lg:py-5 w-full">
      <div className="grid grid-cols-4 lg:grid-cols-12 gap-4 lg:gap-8 w-full bg-palm-white rounded-xl p-2 lg:px-5 lg:py-4">
        <div className="col-span-2 lg:col-span-3 flex items-center">
          <NavLink to={"/"} className={`max-w-fit`}>
            <img src="/logo.png" alt="Palm Logo" width={255} height={58} />
          </NavLink>
        </div>
        <div className="flex lg:hidden col-start-4 justify-self-end lg:px-6">
          <button
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            type="button"
            className="text-white hover:text-white focus:outline-none focus:text-white"
            aria-label="toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 rotate-90 transition-transform duration-300 text-palm-purple"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 transition duration-300 text-palm-purple"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
              </svg>
            )}
          </button>
        </div>

        <div
          className={`
        ${
          isMobileMenuOpen ? "bg-palm-dark-green text-palm-mint-green" : "invisible lg:visible "
        } absolute lg:static top-18 md:top-24  left-0 flex flex-col gap-4 px-4 lg:px-0 pt-12 pb-6 lg:pt-0 lg:pb-0 w-full  xl:col-span-9 lg:col-start-5 lg:col-end-13 lg:flex-row justify-end-safe lg:items-center`}
        >
          {navLinks.map(({ name }, index) => {
            return (
              <NavLink
                key={`${name} + ${index}`}
                to={`#`}
                className={`text-xs lg:text-sm xl:text-lg`}
              >
                {name}
              </NavLink>
            );
          })}
          <PurpleButton>Start Hiring</PurpleButton>
          <BorderedButton>Find a Job</BorderedButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
