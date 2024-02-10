import React from 'react'
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";


const NotFound = () => {
  return (
    <div className="bg-[#edeeef]">
      <div className="bg-[#edeeef]">
        <Header
          p={"Skypoint Support Services"}
          h3={"Page Not Found"}
          className={`backgroundHeaderImage`}
          to={"/"}
          to2={"service"}
          name={"Not Found"}
        />
      </div>
      <Footer />
    </div>
  )
}

export default NotFound