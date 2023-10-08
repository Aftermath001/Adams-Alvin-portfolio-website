import React from 'react'

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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi incidunt 
                temporibus asperiores similique, iste dignissimos tempore. Eum praesentium 
                ratione perspiciatis!
            </p>
            <p className='hero-section-description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi incidunt 
                temporibus asperiores similique, iste dignissimos tempore. Eum praesentium 
                ratione perspiciatis!
            </p>
        </div>
    </div>
   </section>
  )
}

export default AboutMe