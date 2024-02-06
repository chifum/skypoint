import React from "react";
import { NavLink } from "react-router-dom";
import Group6 from "../../assets/img/Group6.png"

const Green = () => {
  return (
    <div className="">
      {/* <img className="" src={Group6} alt="" /> */}
      <div className=" flex justify-center items-center Green mt-5 md:h-[580px] h-[620px]">
      <div className="flex md:flex-row flex-col justify-between bg-white w-11/12 md:h-[418px] h-[580px] rounded-md p-4">
        <div className="image18 basis-2/4 m-2"></div>
        <div className=" basis-2/4 m-2">
          <p className="text-justify">
            Skypoint Solution Service is committed to delivering the highest
            quality of care and support services to all our participants. We are
            dedicated to creating an inclusive and supportive environment where
            you can thrive, grow, and achieve your goals.
          </p>
          <p className="text-justify">
            Whether you’re a participant seeking reliable NDIS support or a
            family member exploring options, we invite you to join us on this
            journey of empowerment and transformation. Contact us today to learn
            more about how{" "}
            <strong>
              Skypoint Solution Service can be your trusted partner in your NDIS
              journey
            </strong>
            .
          </p>
          <div className="md:w-9/12 w-11/12">
          <div className="flex md:justify-between justify-start">
            <button
              to="/"
              className="rounded-full bg-[#007559] no-underline text-[#FFFFFF] w-[183px] h-[52px] flex justify-center items-center"
            >
              Contact Now
            </button>
            <button
              to="service"
              className="rounded-full bg-[#007559] no-underline text-[#FFFFFF] w-[183px] h-[52px] flex justify-center items-center md:ml-0 ml-2"
            >
              View Services
            </button>
            
          </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Green;
// flex md:flex-row flex-col
// md:w-8/12 w-11/12 md:m-0 m-2
