import React from "react";
import Container from "./Container";
import Card from "./Card";
import Centered from "./Centered";
import Green from "./Green";
import Mission from "./Mission";
import Vision from "./Vision";
import Value from "./Value";
import btnLogo from "../..//assets/img/service_box-logo.png";

const MainContainer = () => {
  return (
    <div className="relative bg-[#edeeef]">
      <div className="mb-24">
        <Container />
        <Card />
        <Centered />
        <Green />
        <Mission />
        <Vision />
        <Value />
      </div>
      <div className="absolute left-[50%] md:top-[100%] top-[100%]  translate-x-[-50%]">
        <img src={btnLogo} alt="" className="h-[180px]" />
      </div>
    </div>
  );
};

export default MainContainer;
