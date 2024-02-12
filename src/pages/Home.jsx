import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import Card from "../components/homeComponent/Card";
import Card2 from "../components/homeComponent/Card2";
import Footer from "../components/footer/Footer";
import Card3 from "../components/homeComponent/Card3";
// import Card4 from "../components/homeComponent/Card4"; pexels-judita

const Home = () => {
  return (
    <div className="bg-[#edeeef]">
      <div className="backgroundImage">
        <div className="flex flex-row items-center h-[717px] justify-center">
          <div className="h-80 flex flex-col flex-wrap w-auto">
            <p className="textColor font-semibold text-sm leading-6 mt-4 text-center font-sans">
              Skypoint Support Services
            </p>
            <h3 className="font-semibold textColor font-sans md:text-6xl text-center text-3xl">
              Best Support Cordination
            </h3>
            <button className="outline outline-offset-2 outlineButtonColor textColor w-[8rem] text-center rounded-[3rem] m-auto pl-2  flex flex-row items-center justify-between  mt-5">
              Refer to Us <FaArrowCircleRight className=" text-[22px]" />
            </button>
          </div>
        </div>
      </div>
      <Card />
      <Card2 />
      <Card3 />
      {/* <Card4 /> */}
      <Footer />
    </div>
  );
};

export default Home;
