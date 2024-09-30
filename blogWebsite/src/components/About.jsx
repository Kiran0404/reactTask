import React from 'react'
import './About.css'
import Footer from './Footer'

function About() {
  return (
    <>
      <h1 className='aboutUs'>
          <span className='about'>A</span>
          <span className='about'>B</span>
          <span className='about'>O</span>
          <span className='about'>U</span> 
          <span className='about'>T</span>
          <span className='about' style={{marginLeft: '20px'}}>U</span>
          <span className='about'>S</span>
          </h1>
     <div className="main-about">
          <div className="aboutImg">
            <img src="https://cdn.dribbble.com/users/795597/screenshots/3569676/travel-planning__1_.gif" height="500px" width="450px" alt="" srcset="" />
          </div>

          <div className="about-content">
            <h1>Welcome to <span style={{color: '#FABC3F'}}>Travel</span></h1>
          
            <p className='para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis placeat quis, repellat dolor quidem itaque laborum officiis inventore nemo velit?</p>
  
            <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae hic, quod necessitatibus voluptatibus delectus ea rem illum odio numquam perferendis exercitationem error nesciunt odit possimus.</p>
            <div className="points">
              <div className="point1">
              <p className='para'><span style={{color: '#FABC3F'}}>&#8594;</span> First Class Flights</p>
              <p className='para'><span style={{color: '#FABC3F'}}>&#8594;</span> Five Star Accommodations</p>
              <p className='para'><span style={{color: '#FABC3F'}}>&#8594;</span> 150 Premium City Tours</p>
              </div>
              <div className="point2">
              <p className='para'><span style={{color: '#FABC3F'}}>&#8594;</span> Handpicked Hotels</p>
              <p className='para'><span style={{color: '#FABC3F'}}>&#8594;</span> Latest Model Vehicles</p>
              <p className='para'><span style={{color: '#FABC3F'}}>&#8594;</span> 24/7 Service</p>
              </div>
            </div>
          <button className='abt'>READ MORE</button>
          </div>



          </div>
      <Footer/>
    </>
  )
}

export default About
