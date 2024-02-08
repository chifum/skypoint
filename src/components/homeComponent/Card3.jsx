import React from "react";
import { NavLink } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

const Card3 = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="flex flex-col justify-center">
          <h6 className="text-center text-[#007576] text-lg font-semibold">
            Unique About Us
          </h6>
          <h5 className="text-center text-3xl font-semibold text-[#007559]">
            Why Choose <span className="text-[#76B296]">Us</span>
          </h5>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold text-justify text-[#121212]">
            <strong>Personalized Support Plans</strong>: At Skypoint Support
            Service, we value each person's uniqueness. For this reason, we
            collaborate closely with you to develop specialized assistance
            programs that complement your unique requirements and goals. We view
            your journey with us as a partnership in which you provide the
            direction.
          </p>
          <p className="text-lg font-semibold text-justify text-[#121212]">
            <strong>Experienced Team</strong>: Skypoint Support Service benefits
            from the vast knowledge and experience of our seasoned management
            team. They offer strong leadership and direction to guarantee the
            provision of high-quality services and have a thorough awareness of
            the difficulties of the disability sector. Under their direction, we
            constantly attempt to enhance our procedures, keep abreast of
            developments in the field, and provide a welcoming and inclusive
            work environment for our employees.
            <br />
            <br />
            We are not just service providers – we are your advocates, here to
            navigate the NDIS landscape alongside you.
          </p>
          <p className="text-lg font-semibold text-justify text-[#121212]">
            <strong>Holistic Care</strong>: Skypoint Support Service prioritizes
            holistic care that takes into account all facets of your well-being
            in addition to attending to your urgent needs. Our goal is to
            provide you with the knowledge and abilities required to attain
            sustained development and self-sufficiency.
          </p>
          <p className="text-lg font-semibold text-justify text-[#121212]">
            <strong>Rigorous Recruitment</strong>: At Skypoint Support Service,
            we recognize the significance of an adept and empathetic support
            team. Hence, we maintain a stringent recruitment process to
            guarantee the selection of the most qualified and devoted
            professionals. Our thorough screening and assessment protocols
            emphasize experience, qualifications, and unwavering dedication to
            person-centered care. Rest assured, our support workers are not only
            highly skilled but also deeply enthusiastic about making a positive
            impact in the lives of individuals with disabilities.
          </p>
          <p className="text-lg font-semibold text-justify text-[#121212]">
            <strong>Community Integration</strong>: At Skypoint Support Service
            we are passionate advocates for the strength of community bonds. We
            are dedicated to actively encouraging and facilitating your
            integration into local communities. We believe that through this
            process, we can help foster a profound sense of belonging, allowing
            you to build meaningful social connections that enrich your life.
            Our commitment to community integration extends beyond providing
            care and support; it’s about helping you become an integral part of
            the communities where you live and thrive
          </p>
          <p className="text-lg font-semibold text-justify text-[#121212]">
            <strong>Exceptional Person-Centred Approach</strong>: At Skypoint
            Support Services, we firmly believe in placing the individual at the
            center of everything we do. Our person-centred approach ensures that
            each person we support receives personalised care tailored to their
            unique needs, goals, and preferences. We value open communication,
            active participation, and collaboration, empowering individuals to
            have control over their own lives and the services they receive.
          </p>
          <p className="text-lg font-semibold text-justify text-[#121212]">
            <strong>Rigorous Recruitment</strong>: At Skypoint Support Service,
            we recognize the significance of an adept and empathetic support
            team. Hence, we maintain a stringent recruitment process to
            guarantee the selection of the most qualified and devoted
            professionals. Our thorough screening and assessment protocols
            emphasize experience, qualifications, and unwavering dedication to
            person-centered care. Rest assured, our support workers are not only
            highly skilled but also deeply enthusiastic about making a positive
            impact in the lives of individuals with disabilities.
          </p>
        </div>
      </div>
      <div className="image13 mt-5 mb-40 relative">
        <div className=" container">
          <div className="bg-[#FFFFFF] rounded-[20px] p-20 w-[85%] left-[7.5%]  absolute top-[86%]"></div>
          <div className="Frame10 absolute left-[28%] md:left-[45%] top-[60%]"></div>
          <p className="text-[#007576] font-semibold text-lg absolute left-[29%] md:left-[45.5%] top-[105%]">
            Your Trusted Partners
          </p>
          <h5 className="text-[#007576] font-semibold text-2xl absolute left-[22%] md:left-[43.5%] top-[112%]">
            <span className="text-[#007559]">Experience</span>{" "}
            <span className="text-[#76B296]">& Expertise</span>
          </h5>
        </div>
      </div>
      <div className="container">
        <p className="text-lg font-semibold text-justify text-[#121212]">
          Our dedicated staff at Skypoint Support Service is committed to
          offering innovative solutions to help you overcome any challenges that
          may stand in the way of achieving your goals. We understand that
          everyone’s journey is unique, and we tailor our services to address
          your specific needs and aspirations. Whether it’s finding creative
          approaches to accessibility or harnessing the power of technology,
          we’re here to pave the way for your success.
        </p>
        <p className="text-lg font-semibold text-justify text-[#121212]">
          At Skypoint Support Service, we place a strong emphasis on innovation
          and technology in our Care and Support services. We continuously
          strive to provide you with cutting-edge solutions that enhance your
          quality of life and independence. By staying at the forefront of
          advancements in disability support services, we ensure that you have
          access to the best tools and resources to help you reach your full
          potential and lead a fulfilling life.
        </p>
      </div>
      <div className="flex justify-center mb-8">
        <NavLink className="ml-3 p-1 rounded-sm no-underline bg-[#76B296] w-[230px] text-[#FFFFFF] font-medium text-lg flex justify-center items-center">
          <FaLongArrowAltRight className=" rounded-full bg-[#FFF] text-[#76B296]" />{" "}
          &nbsp; Know more about us
        </NavLink>
      </div>
    </div>
  );
};

export default Card3;
// left-[4.5%]
