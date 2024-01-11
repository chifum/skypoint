import React from "react";
import Ndis from "../faqComponents/Ndis";
import VerticalTimelineContainer from "./VerticalTimelineContainer"
import FrequentAsk from "./FrequentAsk"
import Accordion from "./Accordion";
import btnLogo from "../..//assets/img/service_box-logo.png";

const FaqContainer = () => {
  return (
    <div className="faqContainerbg max-w-full relative">
      <div className="container mb-40">
        <Ndis />
        <VerticalTimelineContainer />
        <FrequentAsk />
        <Accordion />
      </div>
      <div className="absolute left-[50%] md:top-[100%] top-[100%]  translate-x-[-50%] mt-[3rem]">
        <img src={btnLogo} alt="" className="h-[180px]" />
      </div>
    </div>
  );
};
export default FaqContainer;
