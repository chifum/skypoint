import React from "react";
import image16 from "../../assets/img/image16.png";
import Accordion2 from "./Accordion2";

const FrequentAsk = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap mt-5 grow shrink">
      <div className="basis-2/5 flex justify-start">
        <img src={image16} alt="" className="w-fit h-fit" />
      </div>
      <div className="basis-3/5">
        <p className="whatIsNdis2">Need Help</p>
        <h5 className="whatIsNdis1">
          <span className="whatIsNdis2">|</span> Frequently Asked{" "}
          <span className="whatIsNdis2">Question</span>
        </h5>
        <Accordion2 />
      </div>
    </div>
  );
};

export default FrequentAsk;
