import HeroSection from "../HeroSection";
import React from 'react'
import MySkills from "../MySkills"
import AboutMe from "../AboutMe";
import MyPortfolio from "../MyPortfolio";
import Testimonials from "../Testimonials";
import Contact from "../Contact";
import Footer from "../Footer";

 
function Index() {
  return (
   <>
   <HeroSection />
   <MySkills />
   <AboutMe />
   <MyPortfolio />
   <Testimonials/>
   <Contact />
   <Footer />
   </>
  )
}

export default Index