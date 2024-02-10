import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Outlet, NavLink } from "react-router-dom";
import MainLogo from "../../assets/img/MainLogo.png";

function MainNavBar2() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="bg-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center container justify-between">
              <div className="flex-shrink-0">
                <NavLink to="/"><img className="h-16 w-16" src={MainLogo} alt="MainLogo" /></NavLink>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <NavLink
                    to="/"
                    className="text-[#007559] no-underline hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="organisation"
                    className="text-[#007559] no-underline hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Our Organization
                  </NavLink>
                  <NavLink
                    to="service"
                    className="text-[#007559] no-underline hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Our Service
                  </NavLink>
                  <NavLink
                    to="contact"
                    className="text-[#007559] no-underline hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contact Us
                  </NavLink>
                  <NavLink
                    to="faq"
                    className="text-[#007559] no-underline hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    FAQ
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none  focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${
                    isOpen ? "hidden" : "block"
                  } h-6 w-6 bgColor text-white outline-none focus:outline-none`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`${
                    isOpen ? "block" : "hidden"
                  } h-6 w-6 text-[#007559] outline-none focus:outline-none`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <NavLink
                  to="/"
                  className="text-[#007559] no-underline hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </NavLink>
                <NavLink
                  to="organisation"
                  className="text-[#007559] no-underline hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Our Organization
                </NavLink>
                <NavLink
                  to="service"
                  className="text-[#007559] no-underline hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Our Service
                </NavLink>
                <NavLink
                  to="contact"
                  className="text-[#007559] no-underline hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact Us
                </NavLink>
                <NavLink
                  to="faq"
                  className="text-[#007559] no-underline hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  FAQ
                </NavLink>
              </div>
            </div>
          )}
        </Transition>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MainNavBar2;
