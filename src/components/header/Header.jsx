import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { IoMdHome } from "react-icons/io";

const Header = ({ p, h3, className, to, to2, name }) => {
  return (
    <div>
      <div className={className}>
        <div className="flex flex-row items-center h-[617px] justify-center">
          <div className="h-80 flex flex-col flex-wrap w-auto">
            <p className="textColor font-semibold text-sm leading-6 mt-4 text-center font-sans">
              {p}
            </p>
            <h3 className="font-semibold textColor font-sans md:text-6xl text-center text-3xl">
              {h3}
            </h3>
            <div className="flex justify-center items-center">
              <NavLink
                to={to}
                className="iconColor OvalBg w-[113px] h-[30px] text-center rounded-lg flex flex-row  items-center justify-evenly mt-5 no-underline"
              >
              <IoMdHome /> Home 
              </NavLink>
              <NavLink
                to2={to2}
                className="iconColor2 textColor w-[113px] h-[30px] text-center rounded-lg flex flex-row  items-center justify-evenly mt-5 no-underline"
              >
                {name} 
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Header;
