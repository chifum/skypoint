import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Nav = () => {
  return (
    <div className="max-w-full  bgColor">
      <div className="container">
        <div className="flex flex-row flex-wrap justify-between md:items-center p-1">
          <div className="grow shrink flex flex-col md:flex-row justify-between md:w-max text-white">
            <div className="flex items-center">
              <FaPhoneAlt className="pr-2 text-[20px]" />
              <p className="m-0 md:p-1">0452 370 284</p>
            </div>
            <div className="flex items-center ">
              <FaEnvelope />
              <p className="m-0 md:p-1">info@skypointsupportservice.com.au</p>
            </div>
          </div>
          <div className="grow shrink flex justify-end text-white">
            <a
              className="bg-[#007559] no-underline text-white pl-2 pr-2"
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
