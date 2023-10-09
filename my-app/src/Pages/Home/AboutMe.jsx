import React from 'react'
import CV from '../../Docs/CV.pdf'
function AboutMe() {
  return (
   <section id='AboutMe' className='about-section'>
    <div className='about-section-img'>
        <img src='/images/Adams.jpg' alt='About Me'/>
    </div>
    <div className='hero-section-content-section-box-about-section-box'>
        <div className='hero-section-content'>
            <p className='section-title'>About</p>
            <h1 className='hero-section-content-box'>About Me</h1>
            <p className='hero-section-description'>
                
                I am junior software developer with a passion for coding and a strong desire to learn and grow in the field. 
                My enthusiasm for solving complex problems and  dedication to writing clean, efficient code make me a valuable asset to any development team. 
                I pay attention to detail and have the willingness to collaborate with senior developers demonstrate my commitment to honing my skills and contributing to the success of software projects. 
                
            </p>
            <p className='hero-section-description'>
            With positive attitude and drive, I am poised for a bright future in software development . 
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