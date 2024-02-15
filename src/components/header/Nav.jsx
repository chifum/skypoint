import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Nav = () => {
  return (
    <div className="max-w-full  bgColor">
      <div className="container">
        <div className="flex flex-row flex-wrap justify-between md:items-center p-1 relative">
          <div className="grow shrink flex flex-col md:flex-row justify-between md:w-max text-white ">
            <div className="flex items-center">
              <FaPhoneAlt className="pr-2 text-[20px]" />
              <p className="m-0 md:p-1">0452 370 284</p>
            </div>
            <div className="flex items-center ">
              <FaEnvelope className="pr-2 text-[21px]" />
              <p className="m-0 md:p-1">info@skypointsupportservices.com.au</p>
            </div>
          </div>
          <div className="grow shrink flex justify-end text-white md:static absolute md:left-0 left-[50%]">
            <span className="border-r-[1px] mr-2"></span>
            <a
              className="bg-[#007559] no-underline  text-white pl-4 pr-4 flex items-center justify-center"
              href="/"
            >
              Appointment
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Nav;
