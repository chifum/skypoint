import React from "react";
import VerticalTimelin from "./VerticalTimelin"

const VerticalTimelineContainer = () => {
  return (
    <div className="mt-3 leading-[1px]">
      <div className="flex justify-center faqText font-semibold text-lg cursor-pointer">
        <p>As A Participant</p>
      </div>
      <div className="flex justify-center font-semibold text-3xl cursor-pointer">
        <p>
          <span className="whatIsNdis1">The NDIS</span>{" "}
          <span className="whatIsNdis2">Journey</span>
        </p>
      </div>
      <div>
        <VerticalTimelin />
      </div>
    </div>
  );
};

export default VerticalTimelineContainer;
