import React from "react";
import Form from "./Form";
import btnLogo from "../..//assets/img/service_box-logo.png";

const GetInTouch = () => {
  return (
    <div className="relative">
      <div className="flex md:flex-row flex-col justify-between mb-44">
        <div className="m-1 basis-2/4 flex justify-center items-center Rectangle8 h-[300px]">
          {/* <div className="Rectangle8 h-[300px]">Yes</div> */}
        </div>
        <div className="m-1 basis-2/4">
          <div className="pt-3">
            <p className="whatIsNdis2">Get in Touch</p>
            <h5 className="whatIsNdis1 flex items-baseline">
              <span className="whatIsNdis2">|</span>{" "}
              <span className=" ml-1">Message </span>
              <span className="whatIsNdis2 ml-1"> Us</span>
            </h5>
          </div>
          <Form />
        </div>
      </div>
      <div className="absolute left-[50%] md:top-[100%] top-[100%]  translate-x-[-50%] mt-20">
        <img src={btnLogo} alt="" className="h-[180px]" />
      </div>
    </div>
  );
};

export default GetInTouch;

// h-[466px] w-[500px] absolute left-[68%] md:bottom-[302%] bottom-[101%] translate-x-[4.5%]
