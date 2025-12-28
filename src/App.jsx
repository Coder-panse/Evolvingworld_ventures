import React from "react";
import Globe from "./Globe";
import Navbar from "./Component/Navbar";
import Service from "./Component/Service";
import ExpertiseSection from "./Component/ExpertiseSection";
import StaffSection from "./Component/StaffSection";
import StaffDirectory from "./Component/StaffDirectory";
import Footer from "./Component/Footer";

const App = () => {
  return (
    <>
      <Navbar/>
      <Globe />
      {/* <Service/> */}
      <ExpertiseSection/>
      {/* <StaffSection/> */}
      <StaffDirectory/>
      <Footer/>
    </>
  );
};

export default App;
