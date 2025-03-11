import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import AboutSection from "./AboutSection";
import Breadcrumb from "./Breadcrumb";
import ContactSection from "./ContactSection";
import PortfolioSection from "./PortfolioSection";
import ServiceSection from "./ServiceSection";
import FooterSection from "./FooterSection";


function App(){
  return(
    <>
    <Header/>
    <Hero/>
    <AboutSection/>
    <Breadcrumb/>
    <ContactSection/>
    <PortfolioSection/>
    <ServiceSection/>
    <FooterSection/>
    </>
  )
}

export default App