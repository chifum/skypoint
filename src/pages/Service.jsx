import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import ServiceCardMain from "../components/servicesComponent/ServiceCardMain";

const Service = () => {
  return (
    <div className="bg-[#edeeef]">
      <div className="bg-[#edeeef]">
        <Header
          p={"Skypoint Support Services"}
          h3={"Our Service"}
          className={`backgroundHeaderImage`}
          to={"/"}
          to2={"service"}
          name={"Service"}
        />
      </div>
      <ServiceCardMain />
      <Footer />
    </div>
  );
};

export default Service;
