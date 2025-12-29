import React from "react";
import Globe from "../Globe.jsx"
import ExpertiseSection from "../Component/ExpertiseSection";
import StaffDirectory from "../Component/StaffDirectory";

const Home = () => {
  return (
    <div>
      <Globe />
      {/* <Service/> */}
      <ExpertiseSection />
      {/* <StaffSection/> */}
      <StaffDirectory />
    </div>
  );
};

export default Home;
