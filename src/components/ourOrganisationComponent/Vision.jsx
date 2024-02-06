import React from "react";
// import Frame56 from "../../assets/img/Frame56.png"

const Vision = () => {
  return (
    <div className="container mt-16">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="basis-2/4 m-3 h-[400px]">
          <img className="Frame58" src="" alt="" />
        </div>
        <div className="basis-2/4 m-3 flex flex-col justify-center">
          <h5 className="whatIsNdis1 flex items-baseline pb-4">
            <span className="whatIsNdis2">|</span>{" "}
            <span className=" ml-1"> &nbsp;Our </span>
            <span className="whatIsNdis2 ml-1">Vision</span>
          </h5>
          <p className="bg-[#FFFFFF] rounded-lg p-5 text-justify text-[#000000] text-lg font-medium">
            Once upon a time, there was a group of passionate individuals who
            came together with one goal in mind - to help people living with
            disabilities lead a life of dignity and independence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vision;
