import React from 'react'

const correction = () => {
  return (
    <div className="flex flex-wrap flex-col md:flex-row mt-2 m-[10px] p-[20px]">
        <div className="basis-2/5 flex flex-col justify-evenly border-2">
          
        <div className="h-16 flex">
        <div className="colorRadius rounded-l-lg h-full flex justify-center items-center w-20">
          <FaPhoneAlt className="textColor" size={30} />
        </div>{" "}
        <div className=" flex items-center OvalBg w-full rounded-r-lg">
          <span className="OvalBgText ml-2 text-lg font-medium">0452 370 284</span>
        </div>
      </div>


      <div className="h-16 flex">
        <div className="colorRadius rounded-l-lg h-full flex justify-center items-center w-20">
          <FaPhoneAlt className="textColor" size={30} />
        </div>{" "}
        <div className=" flex items-center OvalBg w-full rounded-r-lg">
          <span className="OvalBgText ml-2 text-lg font-medium">0452 370 284</span>
        </div>
      </div>

      <div className="h-16 flex">
        <div className="colorRadius rounded-l-lg h-full flex justify-center items-center w-20">
          <FaPhoneAlt className="textColor" size={30} />
        </div>{" "}
        <div className=" flex items-center OvalBg w-full rounded-r-lg">
          <span className="OvalBgText ml-2 text-lg font-medium">0452 370 284</span>
        </div>
      </div>

      <div className="h-16 flex">
        <div className="colorRadius rounded-l-lg h-full flex justify-center items-center w-20">
          <FaPhoneAlt className="textColor" size={30} />
        </div>{" "}
        <div className=" flex items-center OvalBg w-full rounded-r-lg">
          <span className="OvalBgText ml-2 text-lg font-medium">0452 370 284</span>
        </div>
      </div>
      </div>


        <div className="basis-2/5 flex justify-center flex-col items-center border-3">
          <img src={btnLogo} alt="" className="fir h-[215px] w-[215px]" />
          <h6 className="mt-4 text-[#878787] text-lg font-semibold">
            Share On
          </h6>
          <div className="flex justify-evenly w-80 mt-2">
            <div className="">
              <IoLogoWhatsapp className="whatsApp" size={25} />{" "}
            </div>
            <div>
              <FaTelegram className="telegram" size={25} />
            </div>
            <div>
              <FaLinkedin className="linkedIn" size={25} />
            </div>
            <div>
              <FaTwitter className="twitter" size={25} />
            </div>
            <div>
              <FaFacebook className="facebook" size={25} />
            </div>
            <div>
              <FaInstagramSquare className="instagram" size={25} />
            </div>
          </div>
        </div>
      </div>
  )
}

export default correction