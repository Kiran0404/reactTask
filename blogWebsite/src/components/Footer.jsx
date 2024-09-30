import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-company">
          <h2 style={{ color: "#FABC3F" }}>Company</h2>
          <ul className='listfoot' >
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy & Policy</li>
            <li>Terms & Conditions</li>
            <li>FAQs & Help</li>
          </ul>
        </div>
        <div className="footer-contact">
          <h2 style={{ color: "#FABC3F" }}>Contact</h2>
          <p className='footcontact'><span></span>123 Street, New York, USA <br />
            <span>&#9742; </span>+01234567860 <br />
            <span>&#128231; </span>info122@gmail.com</p>

          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel=""><img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook Logo" width="24" height="24" /> </a>
            <a href="https://twitter.com" target="_blank" rel=""><img src="https://www.clipartmax.com/png/middle/444-4444316_link-to-facebook-twitter-logo-telegram-icon.png" alt="Twitter Icon" style={{ width: '24px', height: '24px' }} /></a>
           
            <a href="https://instagram.com" target="_blank" rel=""> <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram Icon" style={{ width: '24px', height: '24px' }} /></a>
            <a href="https://linkedin.com" target="_blank" rel=""> <img src="https://w7.pngwing.com/pngs/1002/775/png-transparent-in-logo-linkedin-facebook-social-media-font-awesome-icon-linkedin-blue-text-trademark.png"  alt="LinkedIn Icon"  style={{ width: '24px', height: '24px' }} /></a>
          </div>
        </div>
        <div className="footer-gallery">
          <h2 style={{ color: "#FABC3F" }}>Gallery</h2>
          <div className="footimg1">
            <img className='footimgg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrQYQEyh7eYx0MGEhbq_zKpwO-9-4avO78r9gGinW6-6z4TChoGaWkeybphA&s" alt="" srcset="" height="50px" width="55px" />
            <img className='footimgg' src="https://static1.thetravelimages.com/wordpress/wp-content/uploads/2022/12/great-wall-of-china-at-sunrise.jpg" alt="" srcset="" height="50px" width="55px" />
            <img className='footimgg' src="https://dynamic.tourtravelworld.com/blog_images/top-20-places-to-visit-in-vietnam-20171212043038.jpg" alt="" srcset="" height="50px" width="55px" />
          </div>
          <div className="footimg2">
            <img className='footimgg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGosB1zv4C-K9Sp6-RVk1kYU5ofmoxVSwZncC-olEHVFHIk_RacJ9KEjWwyQ&s" alt="" srcset="" height="50px" width="55px" />
            <img className='footimgg' src="https://i.insider.com/5d3b004c2516e949fa4523ab?width=800&format=jpeg&auto=webp" alt="" srcset="" height="50px" width="55px" />
            <img className='footimgg' src="https://travelvistaexplorers.com/wp-content/uploads/2024/03/santorini-stuff-to-do-740x500.jpg" alt="" srcset="" height="50px" width="55px" />
          </div>
        </div>

        <div className="news">
          <h2 style={{ color: "#FABC3F" }}>NewsLetter</h2>
          <p className='footcontact'>Lorem ipsum dolor sit, amet consectetur adipisicing <br /> elit. Delectus, maiores!</p>
          <input type="email"  placeholder='your email' id="" /> <span style={{ color: '#FABC3F', cursor: 'pointer' }}>&#8594;</span>

        </div>
      </footer>

    </>
  )
}

export default Footer
