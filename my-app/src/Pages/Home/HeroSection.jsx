import React from 'react'
import { Link } from 'react-scroll'

function HeroSection() {
  return (
    <section id ="hero--section" className='hero--section'>
        <div className='hero--section--content-box'>
            <div className='hero--section--content'>
                <p className='section-title'>Hello, I'm Adams</p>
                <h1 className='hero--section--title'>
                    <span className='hero-section-title-color'>Full Stack</span>{" "} <br />
                    Developer
                </h1>
                <p className='hero--section--description'>
                    
                    As a software engineer, I possess a strong foundation in programming concepts, 
                    combined with extensive hands-on experience developing software solutions for diverse industries.
                    <br />
                    I am skilled in multiple programming languages and have a proven track record of delivering high-quality, efficient, and reliable software products. 
                </p>
            </div>
            <Link
             smooth={true}
             offset={-70}
             duration={500}
             to="Contact"

            >
            <button className='btn btn-primary'>Get In Touch</button>
            </Link>
        </div>
        <div className='hero--section--img'>
            {/* <img src='./images/Bg.png' alt='Hero Section'/> */}
        </div>
    </section>
  )
}

export default HeroSection