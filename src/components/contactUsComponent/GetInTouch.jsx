import React from "react";
import Form from "./Form";

const GetInTouch = () => {
  return (
    <div className="flex md:flex-row flex-col justify-between">
      <div className="m-1 basis-2/4 flex justify-center items-center Rectangle8 h-[300px]">
        {/* <div className="Rectangle8 h-[300px]">Yes</div> */}
      </div>
      <div className="m-1 basis-2/4">
        <div className="pt-3">
          <p className="whatIsNdis2">Get in Touch</p>
          <h5 className="whatIsNdis1 flex items-baseline">
            <span className="whatIsNdis2">|</span>{" "}
            <span className=" ml-1">Message </span>
            <span className="whatIsNdis2 ml-1">  Us</span>
          </h5>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default GetInTouch;

// h-[466px] w-[500px] absolute left-[68%] md:bottom-[302%] bottom-[101%] translate-x-[4.5%]
