import React from 'react';
import serviceImage1 from '../../assets/img/service_dsw_image1.png';
import serviceImage2 from '../../assets/img/service_dsw_image2.png';
import serviceImage4 from '../../assets/img/service_dsw_image4.png';
import serviceImage5 from '../../assets/img/service_dsw_image5.png';
import serviceImage6 from '../../assets/img/service_dsw_image6.png';
import serviceImage7 from '../../assets/img/service_dsw_image7.png';
import serviceImage8 from '../../assets/img/service_dsw_image8.png';
import serviceImage9 from '../../assets/img/service_dsw_image9.png';
import btnLogo from '../..//assets/img/service_box-logo.png';

const serviceCardMain = () => {
  return (
    <div className="bg-[#edeeef] max-w-full relative">
      <div className="container mt-[5rem] mb-[12rem]">
        <div className="w-full overflow-hidden mb-6 6flex justify-center items-center">
          <div className="grid md:grid-cols-3 gap-x-8 gap-y-6 sm:grid-cols-1">
            <div className="rounded-[1rem] border-[1px] border-[#007559] h-[579px] w-[100%] transition duration-300 ease-in-out hover:scale-110">
              <img
                src={serviceImage1}
                alt=""
                height={200}
                className=" bg-gradient-to-r from-[#76B296] to-99% rounded-t-[1rem] pb-3 mb-4"
              />
              <h3 className=" text-center text-[#007559] mt-8 mb-4">
                Disability Support Worker
              </h3>
              <p className=" pl-8 pr-8 sm:mb-2 md:mb-9 text-sm text-ellipsis">
                SkyPoint Support Services is dedicated to providing
                comprehensive and compassionate disability support to enhance
                the well-being and independence of individuals facing various
                challenges. Our mission is to empower and enable those with
                disabilities to lead fulfilling lives by offering tailored
                support services.
              </p>
              <button className=" ml-8 mr-8 pl-4 pr-4 pt-1 pb-1 rounded-[2rem] text-white border-0 bg-[#76B296]">
                Read More
              </button>
            </div>
            <div className="rounded-[1rem] border-[1px] border-[#007559] h-[579px] w-[100%] transition duration-300 ease-in-out hover:scale-110">
              <img
                src={serviceImage2}
                alt=""
                height={200}
                className="bg-gradient-to-r from-[#76B296] to-99%  rounded-t-[1rem] pb-3 mb-4"
              />
              <h3 className=" text-center text-[#007559] mt-8 mb-4">
                NDIS Support Coordinator
              </h3>
              <p className=" pl-8 pr-8 sm:mb-2 md:mb-12 text-sm text-ellipsis">
                SkyPoint Support Service is dedicated to providing exceptional
                support coordination services to individuals with diverse needs.
                Our Support Coordinators play a pivotal role in ensuring that
                each person receives tailored assistance and has access to the
                necessary resources to achieve their goals.
              </p>
              <button className=" ml-8 mr-8 pl-4 pr-4 pt-1 pb-1 rounded-[2rem] text-white border-0 bg-[#76B296]">
                Read More
              </button>
            </div>
            <div className="rounded-[1rem] border-[1px] border-[#007559] h-[579px] w-[100%] transition duration-300 ease-in-out hover:scale-110">
              <img
                src={serviceImage1}
                alt=""
                height={200}
                className=" bg-gradient-to-r from-[#76B296] to-99%  rounded-t-[1rem] pb-3 mb-4"
              />
              <h3 className=" text-center text-[#007559] mt-8 mb-4">
                Daily Living Skills
              </h3>
              <p className=" pl-8 pr-8 sm:mb-4 md:mb-12 text-sm text-ellipsis">
                At SkyPoint Support Service, we recognize the importance of
                daily living skills in fostering independence and enhancing the
                quality of life for individuals we serve. Our dedicated team
                focuses on providing personalized assistance to develop and
                strengthen these essential skills.
              </p>
              <button className=" ml-8 mr-8 pl-4 pr-4 pt-1 pb-1 rounded-[2rem] text-white border-0 bg-[#76B296]">
                Read More
              </button>
            </div>
          </div>
        </div>

        <div className="w-full overflow-hidden mb-6 flex justify-center items-center">
          <div className="grid md:grid-cols-3 gap-x-8 gap-y-6 sm:grid-cols-1">
            <div className="rounded-[1rem] border-[1px] border-[#007559] h-[579px] w-[100%] transition duration-300 ease-in-out hover:scale-110">
              <img
                src={serviceImage4}
                alt=""
                height={200}
                className=" bg-gradient-to-r from-[#76B296] to-99%  rounded-t-[1rem] pb-3 mb-4"
              />
              <h3 className=" text-center text-[#007559] mt-8 mb-4">
                Employment Pathways
              </h3>
              <p className=" pl-8 pr-8 sm:mb-2 md:mb-12 text-sm text-ellipsis">
                SkyPoint Support Service is dedicated to facilitating meaningful
                employment pathways for individuals with diverse needs. Our
                comprehensive approach to employment support is designed to
                empower individuals, promote skill development, and foster a
                sense of purpose in the workforce.
              </p>
              <button className=" ml-8 mr-8 pl-4 pr-4 pt-1 pb-1 rounded-[2rem] text-white border-0 bg-[#76B296]">
                Read More
              </button>
            </div>
            <div className="rounded-[1rem] border-[1px] border-[#007559] h-[579px] w-[100%] transition duration-300 ease-in-out hover:scale-110">
              <img
                src={serviceImage5}
                alt=""
                height={200}
                className=" bg-gradient-to-r from-[#76B296] to-99%  rounded-t-[1rem] pb-3 mb-4"
              />
              <h3 className=" text-center text-[#007559] mt-8 mb-4">
                Mental Health
              </h3>
              <p className=" pl-8 pr-8 sm:mb-2 md:mb-8 text-sm text-ellipsis">
                At SkyPoint Support Service, we understand the crucial link
                between mental health and overall well-being. Our dedicated
                mental health support services are designed to provide
                compassionate care, foster emotional resilience, and promote a
                positive and supportive environment for individuals facing
                diverse challenges.
              </p>
              <button className=" ml-8 mr-8 pl-4 pr-4 pt-1 pb-1 rounded-[2rem] text-white border-0 bg-[#76B296]">
                Read More
              </button>
            </div>
            <div className="rounded-[1rem] border-[1px] border-[#007559] h-[579px] w-[100%] transition duration-300 ease-in-out hover:scale-110">
              <img
                src={serviceImage6}
                alt=""
                height={200}
                className=" bg-gradient-to-r from-[#76B296] to-99%  rounded-t-[1rem] pb-3 mb-4"
              />
              <h3 className=" text-center text-[#007559] mt-8 mb-4">
                Support Independent Living
              </h3>
              <p className=" pl-8 pr-8 mb-4 text-sm text-ellipsis">
                SkyPoint Support Service is dedicated to empowering individuals
                to achieve and maintain independent living. Our comprehensive
                support services are designed to enhance autonomy, build life
                skills, and create a supportive environment for those striving
                for greater self-sufficiency.
              </p>
              <button className=" ml-8 mr-8 pl-4 pr-4 pt-1 pb-1 rounded-[2rem] text-white border-0 bg-[#76B296]">
                Read More
              </button>
            </div>
          </div>
        </div>

        <div className="w-full overflow-hidden mb-6 flex justify-center items-center">
          <div className="grid md:grid-cols-3 gap-x-8 gap-y-6 sm:grid-cols-1">
            <div className="rounded-[1rem] border-[1px] border-[#007559] h-[579px] w-[100%] transition duration-300 ease-in-out hover:scale-110">
              <img
                src={serviceImage7}
                alt=""
                height={200}
                className=" bg-gradient-to-r from-[#76B296] to-99% rounded-t-[1rem] pb-3 mb-4"
              />
              <h3 className=" text-center text-[#007559] mt-8 mb-4">
                NDIS Transport
              </h3>
              <p className=" pl-8 pr-8 sm:mb-2 md:mb-8 text-sm text-ellipsis">
                SkyPoint Support Service is dedicated to facilitating seamless
                and accessible transportation solutions for individuals under
                the National Disability Insurance Scheme (NDIS). Our NDIS
                Transport Support services are designed to ensure that
                individuals can participate fully in their communities by
                addressing their unique transportation needs.
              </p>
              <button className=" ml-8 mr-8 pl-4 pr-4 pt-1 pb-1 rounded-[2rem] text-white border-0 bg-[#76B296]">
                Read More
              </button>
            </div>
            <div className="rounded-[1rem] border-[1px] border-[#007559] h-[579px] w-[100%] transition duration-300 ease-in-out hover:scale-110">
              <img
                src={serviceImage8}
                alt=""
                height={200}
                className=" bg-gradient-to-r from-[#76B296] to-99%  rounded-t-[1rem] pb-3 mb-4"
              />
              <h3 className=" text-center text-[#007559] mt-8 mb-4">
                Short Term Accomodation
              </h3>
              <p className=" pl-8 pr-8 sm:mb-2 md:mb-14 text-sm text-ellipsis">
                SkyPoint Support Service is pleased to provide Short-Term
                Accommodation options tailored to meet the diverse needs of
                individuals seeking temporary housing solutions. Our commitment
                is to offer a safe, welcoming, and supportive environment during
                short-term stays.
              </p>
              <button className=" ml-8 mr-8 pl-4 pr-4 pt-1 pb-1 rounded-[2rem] text-white border-0 bg-[#76B296]">
                Read More
              </button>
            </div>
            <div className="rounded-[1rem] border-[1px] border-[#007559] h-[579px] w-[100%] transition duration-300 ease-in-out hover:scale-110">
              <img
                src={serviceImage9}
                alt=""
                height={200}
                className=" bg-gradient-to-r from-[#76B296] to-99%  rounded-t-[1rem] pb-3 mb-4"
              />
              <h3 className=" text-center text-[#007559] mt-8 mb-4">
                Community Participation Program
              </h3>
              <p className=" pl-8 pr-8 sm:mb-5 md:mb-10 text-sm text-ellipsis resize-y">
                SkyPoint Support Service is excited to introduce our Community
                Participation Program, designed to promote social inclusion,
                engagement, and enriching experiences for individuals seeking to
                actively participate in their communities.
              </p>
              <button className=" ml-8 mr-8 pl-4 pr-4 pt-1 pb-1 rounded-[2rem] text-white border-0 bg-[#76B296]">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[50%] md:top-[102%] top-[101%]  translate-x-[-50%] mt-[3rem]">
        <img src={btnLogo} alt="" className="h-[180px]" />
      </div>
    </div>
  );
};

export default serviceCardMain;
