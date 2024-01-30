import React from "react";
import Frame14 from "../../assets/img/Frame14.png"

const Centered = () => {
  return (
    <div className="container flex flex-col md:flex-row justify-between flex-wrap mt-5">
      <div className="basis-2/4">
        <div>
          <h5 className="whatIsNdis1 flex items-baseline">
            <span className="whatIsNdis2">|</span>{" "}
            <span className=" ml-1">Person </span>
            <span className="whatIsNdis2 ml-1"> - Centered Approach</span>
          </h5>
          <p className="text-justify font-medium text-lg text-[#121212]">
            Person-Centered approach forms the core of our service model. We
            ensure that our participants and their families are the top
            priority, and we provide them with dedicated support. By
            highlighting each individual’s distinctive qualities and
            contributions, the Person-Centered approach fosters positive social
            progress. Our support team employs this approach to guide our
            participants systematically in working towards and achieving their
            goals. We integrate the Person-Centered approach into our daily
            practices across all levels of management to ensure that plans are
            effectively executed, and participants receive continued support
            that aligns with their preferences and needs.
          </p>
        </div>
      </div>
      <div className="basis-2/4 flex justify-center">
        <img className="" src={Frame14} alt="" />
      </div>
    </div>
  );
};

export default Centered;
