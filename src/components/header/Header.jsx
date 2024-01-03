import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";

const Header = ({ p, h3, className }) => {
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
            <button className="outline outline-offset-2 outlineButtonColor textColor w-28 text-center rounded-lg m-auto flex flex-row items-baseline justify-evenly mt-5">
              Refer to Us <FaArrowCircleRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
