import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const Contact = () => {
  return (
    <div>
      <Header  p={"Skypoint Support Services"} h3={"Contact Us"} className={`contactUs`} to={"/"} to2={"contact"} name={"Contact Us"}/>
      <Footer />
    </div>
  );
};

export default Contact;
