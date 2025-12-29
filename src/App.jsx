import React from "react";
import Navbar from "./Component/Navbar";
import Service from "./Component/Service";
import ExpertiseSection from "./Component/ExpertiseSection";
import StaffSection from "./Component/StaffSection";
import StaffDirectory from "./Component/StaffDirectory";
import Footer from "./Component/Footer";
import ContactPage from "./Pages/ContactPage";
import ProductsPage from "./Pages/ProductPage";
import { Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUsPage from "./Pages/AboutUsPage";


const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutUsPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/product" element={<ProductsPage/>} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
