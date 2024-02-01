import React from 'react'
import CV from '../../Docs/ADAMS-ALVIN-WORK-CV.pdf'
function AboutMe() {
  return (
   <section id='AboutMe' className='about-section'>
    <div className='about-section-img'>
        <img src='/images/Adams.jpg' alt='About Me'/>
    </div>
    <div className='hero-section-content-section-box-about-section-box'>
        <div className='hero-section-content'>
            <p className='section-title'>Here's more about me</p>
            <h1 className='hero-section-content-box'>About Me</h1>
            <p className='hero-section-description'>
                
                My passion for software started way back in primary school, I was curious to know how computers and the internet worked.
                With little tools at my disposal, I gathered all the information I could. My curiosity helped me choose my path.
                I grew up to become a software developer with abilities to code in various languages and a strong desire to learn and grow in the field. 
                
                
            </p>
            <p className='hero-section-description'>
              With now the world's fast growth in technology, I won't agree to be left behind. 
            </p>
            <a href={CV} download>
            <button className='btn btn-primary'>Download CV</button>
            </a>
        </div>
    </div>
   </section>
  )
}

export default AboutMe