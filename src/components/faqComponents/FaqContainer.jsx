import React from "react";
import Ndis from "../faqComponents/Ndis";
import VerticalTimelineContainer from "./VerticalTimelineContainer"
import FrequentAsk from "./FrequentAsk"

const FaqContainer = () => {
  return (
    <div className="faqContainerbg max-w-full">
      <div className="container">
        <Ndis />
        <VerticalTimelineContainer />
        <FrequentAsk />
      </div>
    </div>
  );
};
export default FaqContainer;
