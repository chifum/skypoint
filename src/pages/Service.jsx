import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import ServiceCardMain from "../components/servicesComponent/ServiceCardMain";

const Service = () => {
  return (
    <div>
      <Header
        p={"Skypoint Support Services"}
        h3={"Our Service"}
        className={`backgroundHeaderImage`}
        to={"/"}
        to2={"service"}
        name={"Service"}
      />

      <ServiceCardMain />
      <Footer />
    </div>
  );
};

export default Service;
