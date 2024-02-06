import React from "react";
// import Frame56 from "../../assets/img/Frame56.png"

const Value = () => {
  return (
    <div className="container mt-16">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="basis-2/4 m-3 flex flex-col justify-center">
          <h5 className="whatIsNdis1 flex items-baseline pb-4">
            <span className="whatIsNdis2">|</span>{" "}
            <span className=" ml-1"> &nbsp;Our </span>
            <span className="whatIsNdis2 ml-1">Values</span>
          </h5>
          <p className="bg-[#FFFFFF] rounded-lg p-5 text-justify text-[#000000] text-lg font-medium">
            "At the heart of our approach to all relationships lies creativity,
            respect, courage, and responsiveness. We hold the trust placed in us
            in high regard, and strive to exceed expectations by delivering
            reliable support
          </p>
        </div>
        <div className="basis-2/4 m-3 h-[400px]">
          <img className="Frame60" src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Value;
