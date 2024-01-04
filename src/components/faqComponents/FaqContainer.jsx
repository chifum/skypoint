import React from "react";
import Ndis from "../faqComponents/Ndis";
import VerticalTimelineContainer from "./VerticalTimelineContainer"

const FaqContainer = () => {
  return (
    <div className="faqContainerbg max-w-full">
      <div className="container">
        <Ndis />
        <VerticalTimelineContainer />
      </div>
    </div>
  );
};
export default FaqContainer;
