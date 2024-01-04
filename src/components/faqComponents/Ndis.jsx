import React from "react";

const Ndis = () => {
  return (
    <div className="mt-4 flex flex-col">
      <div className="faqText font-semibold text-lg cursor-pointer">
        <p className="">Understanding</p>
      </div>
      <div className="font-semibold text-3xl cursor-pointer">
        <p>
          <span className="whatIsNdis1">What is the</span>{" "}
          <span className="whatIsNdis2">NDIS</span>
        </p>
      </div>
      <div className="ndisBlackText font-semibold text-sm text-justify leading-5">
        <p className="">
          The National Disability Insurance Scheme (NDIS) is an Australian
          government initiative that provides funding and support for people
          with disabilities. It is designed to help people with disabilities
          live an ordinary life and participate in the community. The NDIS
          provides individualized plans, funding for support services, and
          access to assistive technology. The scheme is funded through taxes and
          is administered by the National Disability Insurance Agency (NDIA).
        </p>
        <p>
          At Skypoint Support Services, we would like to make a difference in
          the lives of those with disability and make life easier, fairer and
          get people involved and participating within their communities. Our
          staff provide in home support for people with disabilities to help
          them lead more independent and fulfilling lives. Our staff are
          committed to providing compassionate and personalized care to our
          clients, giving them the tools and support they need to reach their
          goals.
        </p>
      </div>
    </div>
  );
};
export default Ndis;
