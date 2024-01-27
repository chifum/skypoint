import React from "react";
import Container from "./Container";
import Card from "./Card";
import Centered from "./Centered";
import Green from "./Green";

const MainContainer = () => {
  return (
    <div className="bg-[#edeeef]">
      <Container />
      <Card />
      <Centered /> 
      <Green />
    </div>
  );
};

export default MainContainer;
