import React from "react";
import Connect from "./Connect";
import GetInTouch from "./GetInTouch";
import Ellipse from "../../assets/img/Ellipse.png";
import btnLogo from "../..//assets/img/service_box-logo.png";

const ContactUsContainer = () => {
  return (
    <div className="">
      <div className="bg-[#edeeef] borderRadius">
        <div className="container">
          <Connect />
        </div>
        {/* <div className="flex justify-end">
          <img src={Ellipse} alt="" className="w-64 h-96" />
        </div> */}
      </div>
      <div className="bg-[#fff] borderRadius m-0 mb-20">
        <div className="container">
          <GetInTouch />
        </div>
      </div>
      {/* <div className="absolute left-[50%] md:top-[100%] top-[100%]  translate-x-[-50%] ">
        <img src={btnLogo} alt="" className="h-[180px]" />
      </div> */}
    </div>
  );
};

export default ContactUsContainer;
// <Connect />
