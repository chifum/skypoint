import React from "react";
import Connect from "./Connect";
import GetInTouch from "./GetInTouch";
import Ellipse from "../../assets/img/Ellipse.png";

const ContactUsContainer = () => {
  return (
    <div>
      <div className="bg-[#edeeef] borderRadius">
        <div className="container">
          <Connect />
        </div>
        {/* <div className="flex justify-end">
          <img src={Ellipse} alt="" className="w-64 h-96" />
        </div> */}
      </div>
      <div className="bg-[#fff] borderRadius m-0">
        <div className="container">
          <GetInTouch />
        </div>
      </div>
    </div>
  );
};

export default ContactUsContainer;
// <Connect />
