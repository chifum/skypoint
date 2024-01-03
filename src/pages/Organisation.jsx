import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const Organisation = () => {
  return (
    <div>
      <Header p={"Skypoint Support Services"} h3={"About Us"} className={`aboutUs`} to={"/"} to2={"organisation"} name={"About Us"}/>
      <Footer />
    </div>
  );
};

export default Organisation;
