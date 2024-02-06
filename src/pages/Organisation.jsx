import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import MainContainer from "../components/ourOrganisationComponent/MainContainer";

const Organisation = () => {
  return (
    <div className="bg-[#edeeef]">
      <Header
        p={"Skypoint Support Services"}
        h3={"About Us"}
        className={`aboutUs`}
        to={"/"}
        to2={"organisation"}
        name={"About Us"}
      />
      <MainContainer />
      <Footer />
    </div>
  );
};

export default Organisation;
