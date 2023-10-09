import HeroSection from "../HeroSection";
import React from 'react'
import MySkills from "../MySkills"
import AboutMe from "../AboutMe";
import MyPortfolio from "../MyPortfolio";
import Testimonials from "../Testimonials";
import Contact from "../Contact";

 
function Index() {
  return (
   <>
   <HeroSection />
   <MySkills />
   <AboutMe />
   <MyPortfolio />
   <Testimonials/>
   <Contact />
   </>
  )
}

export default Index