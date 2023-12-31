import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import FaqContainer from "../components/faqComponents/FaqContainer"

const Faq = () => {
  return (
    <div>
      <Header
        p={"Skypoint Support Services"}
        h3={"FAQ"}
        className={`faq`}
        to={"/"}
        to2={"faq"}
        name={"FAQ"}
      />
      <FaqContainer />
      <Footer />
    </div>
  );
};

export default Faq;
