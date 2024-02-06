import React from "react";
// import Frame56 from "../../assets/img/Frame56.png"

const Mission = () => {
  return (
    <div className="container mt-16">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="basis-2/4 m-3 flex flex-col justify-center">
          <h5 className="whatIsNdis1 flex items-baseline pb-4">
            <span className="whatIsNdis2">|</span>{" "}
            <span className=" ml-1"> &nbsp;Our </span>
            <span className="whatIsNdis2 ml-1">Mission</span>
          </h5>
          <p className="bg-[#FFFFFF] rounded-lg p-5 text-justify text-[#000000] text-lg font-medium">
              Our driving force at the core of our organization is to create a
              positive impact on the people and communities we serve. We're
              fuelled by a shared purpose that inspires everything we do, from
              our company values to our visionary goals.
            </p>
        </div>
        <div className="basis-2/4 m-3 h-[400px]"><img className="Frame56" src="" alt="" /></div>
      </div>
    </div>
  );
};

export default Mission;
