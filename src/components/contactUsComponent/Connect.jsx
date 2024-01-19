import React from "react";
import btnLogo from "../../assets/img/service_box-logo.png";
import {
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
  FaTelegram,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoMdChatboxes } from "react-icons/io";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";


const Connect = () => {
  return (
    <div className="mt-5">
      <p className="whatIsNdis2">Enquire Now</p>
      <h5 className="whatIsNdis1 flex items-baseline">
        <span className="whatIsNdis2">|</span>{" "}
        <span className=" ml-1">Connect </span>
        <span className="whatIsNdis2 ml-1"> With Us</span>
      </h5>
      <div className="flex flex-wrap flex-col md:flex-row mt-2">
        <div className="basis-2/4 flex flex-col justify-evenly">
          
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
        <div className="basis-2/4 flex justify-center flex-col items-center">
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
    </div>
  );
};

export default Connect;


// <div className="rounded w-full h-16 flex">
//             <div className="colorRadius rounded-l-lg h-full flex justify-center items-center w-20">
//               <IoMdChatboxes className="textColor" size={30} />
//             </div>{" "}
//             <div className=" flex items-center OvalBg w-full rounded-r-lg">
//               <span className="OvalBgText ml-2 text-lg font-medium">0452 370 284</span>
//             </div>
//           </div>
//           <div className="rounded w-full h-16 flex">
//             <div className="colorRadius rounded-l-lg h-full flex justify-center items-center w-20">
//               <FaEnvelope className="textColor" size={30} />
//             </div>{" "}
//             <div className=" flex items-center OvalBg w-full rounded-r-lg">
//               <span className="OvalBgText ml-2 text-lg font-medium">info@skypointsupportservice.com.au</span>
//             </div>
//           </div>
//           <div className="rounded w-full h-16 flex">
//             <div className="colorRadius rounded-l-lg h-full flex justify-center items-center w-20">
//               <HiOutlineBuildingOffice2 className="textColor" size={30} />
//             </div>{" "}
//             <div className=" flex items-center OvalBg w-full rounded-r-lg">
//               <span className="OvalBgText ml-2 text-lg font-medium">10 - 12 Anzac Avenue, Hillcrest QLD 4118</span>
//             </div>
//           </div>




// <div className="rounded w-full h-16 flex">
//             <div className="colorRadius rounded-l-lg h-full flex justify-center items-center w-20">
//               <FaPhoneAlt className="textColor" size={30} />
//             </div>{" "}
//             <div className=" flex items-center OvalBg w-full rounded-r-lg">
//               <span className="OvalBgText ml-2 text-lg font-medium">0452 370 284</span>
//             </div>
//           </div>