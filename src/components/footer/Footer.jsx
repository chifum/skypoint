import React, { Fragment } from "react";
// import { FaEnvelope } from "react-icons/fa";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaRegCalendarAlt,
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import downloadRemovebgPreview from "../../assets/img/downloadRemovebgPreview.png";
import image15 from "../../assets/img/image15.png";
import { NavLink, Outlet } from "react-router-dom";
import ScrollToTop from "../utility/ScrollToTop";

const Footer = () => {
  return (
    <Fragment>
    <div className="OvalBg p-3"></div>
      <div className="Footer">
        <div className="container flex flex-wrap flex-col md:flex-row textColor pt-[4rem]">
          <div className="grow shrink basis-1/3 w-full ">
            <div className="flex items-baseline">
              <p className="text-3xl footerVerticalBg">|</p>
              <h6 className="ml-2">Contact Details</h6>
            </div>
            <div className=" p-3">
              <div className="flex items-baseline">
                <FaPhoneAlt />
                <p className="ml-3">0452 370 284</p>
              </div>
              <div className="flex items-baseline">
                <FaEnvelope />
                <p className="ml-3 text-sm overflow-auto">
                  info@skypointsupportservices.com.au
                </p>
              </div>
              <div className="flex items-baseline">
                <HiOutlineBuildingOffice2 />
                <p className="ml-3">10 - 12 Anzac Avenue, Hillcrest QLD 4118</p>
              </div>
            </div>
          </div>
          <div className="grow shrink basis-1/3 overflow-hidden">
            <div className="flex items-center">
              <p className="text-3xl footerVerticalBg">|</p>
              <h6 className="ml-2">We Love NDIS</h6>
            </div>
            <div className="p-3">
              <div className="flex items-baseline">
                <img src={downloadRemovebgPreview} alt="" />
                <img src={image15} alt="" className="md:w-80" />
              </div>
              <div>
                <p className=" mt-3">
                  We recognize the Traditional Owners of the property on which
                  we work and their ongoing custodianship and relationship to
                  the land, rivers, and communities.
                </p>
              </div>
            </div>
          </div>
          <div className="grow shrink basis-1/3 w-full overflow-hidden">
            <div className="flex items-center">
              <p className="text-3xl footerVerticalBg">|</p>
              <h6 className="ml-2">Appointments</h6>
            </div>
            <div className="p-3">
              <div>
                <p>
                  Let’s schedule a meeting Give us an opportunity to explain how
                  we can help you to be independent.
                </p>
              </div>
              <div>
                <NavLink className="flex bookNowBg items-center p-2 w-36 justify-evenly no-underline text-white rounded-md">
                  <FaRegCalendarAlt to="/" /> Book Now
                </NavLink>
              </div>
            </div>
            <div>
              <div className="flex items-center mt-2">
                <p className="text-3xl footerVerticalBg">|</p>
                <h6 className="ml-2">Share On</h6>
              </div>
              <div className="p-3">
                <div className="flex">
                  <div className=" border w-[40px] h-[40px] rounded-full flex justify-center items-center opacity-50">
                    <NavLink className="no-underline text-white" to="/">
                      <FaFacebook size={20} />
                    </NavLink>
                  </div>
                  <div className=" border w-[40px] h-[40px] rounded-full flex justify-center items-center opacity-50 ml-3">
                    <NavLink className="no-underline text-white" to="/">
                      <FaTwitter size={20} />
                    </NavLink>
                  </div>
                  <div className=" border w-[40px] h-[40px] rounded-full flex justify-center items-center opacity-50 ml-3">
                    <NavLink className="no-underline text-white" to="/">
                      <IoLogoWhatsapp size={20} />
                    </NavLink>
                  </div>
                  <div className=" border w-[40px] h-[40px] rounded-full flex justify-center items-center opacity-50 ml-3">
                    <NavLink className="no-underline text-white" to="/">
                      <FaInstagramSquare size={20} />
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ScrollToTop />
        <main>
          <Outlet />
        </main>
      </div>
    </Fragment>
  );
};

export default Footer;
