import React from "react";
import { NavLink } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
// import Rectangle4 from "../../assets/img/Rectangle4.png";

const Card2 = () => {
  return (
    <div className="container">
      <div className="flex flex-col justify-between md:flex-row mt-5">
        <div className="basis-2/4  ">
          <img className="backgroundRectangle4 rounded" src="" alt="" />
        </div>
        <div className="basis-2/4  bg-[#76B296]">
          <div className="pill flex flex-col justify-center ">
            <h6 className="text-[#007559] font-medium text-lg pl-3">
              Skill Development | Diverse Activities
            </h6>
            <h5 className="pl-3 text-[#007559] font-bold">
              <span className="text-[#76B296]">|</span> Community <br />{" "}
              <span className="text-[#76B296]">|</span> Participation
            </h5>
            <p className="pl-3 text-justify p-3">
              we recognize the significance of Community Participation as a
              vital Core Support for individuals with disabilities. Our aim is
              to assist you in achieving your goals related to enhanced
              community interaction and participation. Here’s how our Community
              Participation program can benefit you
            </p>
            <NavLink className="ml-3 p-1 rounded-sm no-underline bg-[#76B296] w-[138px] text-[#FFFFFF] font-medium text-lg flex justify-center items-center">
              <FaLongArrowAltRight className=" rounded-full bg-[#FFF] text-[#76B296]" />{" "}
              &nbsp; Read More
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
// rounded-s-lg
