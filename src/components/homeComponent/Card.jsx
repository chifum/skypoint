import React from "react";

const Card = () => {
  return (
    <div className="max-w-full">
      <h6 className="text-center p-2 m-2 weLoveNdis">We Love NDIS</h6>
      <h3 className="text-center weLoveNdis p-2 m-2">Services We Offer</h3>
      <div className="container">
        <div className="w-full overflow-hidden shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="backgroundImage6 object-contain w-full h-[300px] text-white text-center flex flex-row flex-wrap justify-center items-center">
              <p className="">IN HOME & DAILY ACTIVITY SUPPORT</p>
            </div>
            <div className="backgroundImage7 object-cover w-full h-[300px] text-white text-center flex flex-row flex-wrap justify-center items-center">
              <p className="">SUPPORTED INDEPENDENT LIVING</p>
            </div>
            <div
              div
              className="backgroundImage8 object-contain w-full h-[300px] text-white text-center flex flex-row flex-wrap justify-center items-center"
            >
              <p className="">COMMUNITY ACCESS</p>
            </div>
          </div>
        </div>
        <br />
        <div className="w-full overflow-hidden shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="backgroundImage9 object-contain w-full h-[300px] text-white text-center flex flex-row flex-wrap justify-center items-center">
              <p className="">LIFE SKILLS DEVELOPMENT PROGRAM</p>
            </div>
            <div className="backgroundImage11 object-cover w-full h-[300px] text-white text-center flex flex-row flex-wrap justify-center items-center">
              <p className="">SUPPORT COORDINATION</p>
            </div>
            <div
              div
              className="backgroundImage12 object-contain w-full h-[300px] text-white text-center flex flex-row flex-wrap justify-center items-center"
            >
              <p className="">SPECIALIZED BEHAVIOR SUPPORT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
