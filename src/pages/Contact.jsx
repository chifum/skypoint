import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import ContactUsContainer from "../components/contactUsComponent/ContactUsContainer";

const Contact = () => {
  return (
    <div>
      <Header
        p={"Skypoint Support Services"}
        h3={"Contact Us"}
        className={`contactUs`}
        to={"/"}
        to2={"contact"}
        name={"Contact Us"}
      />
      <br></br>
      <ContactUsContainer />
      <Footer />
    </div>
  );
};

export default Contact;
