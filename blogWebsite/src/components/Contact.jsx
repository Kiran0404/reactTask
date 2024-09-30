import React from 'react'
import './Contact.css'
import Footer from './Footer'

function Contact() {
  return (
    <>
      <h1 className='book'>
        <span className='bookNow'>C</span>
        <span className='bookNow'>O</span>
        <span className='bookNow'>N</span>
        <span className='bookNow'>T</span>
        <span className='bookNow'>A</span>
        <span className='bookNow'>C</span>
        <span className='bookNow' style={{ marginRight: '20px' }}>T</span>
        <span className='bookNow'>U</span>
        <span className='bookNow'>S</span>

      </h1>

      <div className="mainContact">
        <div className="img1">
          <img src="https://media.tenor.com/VjFfwPWbxokAAAAi/happy-travel.gif" alt="" srcset="" />
        </div>

        <form action="#" method="post">
          <label for="name">Full Name:</label>
          <input type="text" id="name" className="name" required />

          <label for="email">Email:</label>
          <input type="email" id="email" className="email" required />

          <label for="destination">Destination:</label>
          <input type="text" id="destination" className="destination" required />

          <label for="start-date">Start Date:</label>
          <input type="date" id="start-date" className="start-date" required />

          <label for="end-date">End Date:</label>
          <input type="date" id="end-date" className="end-date" required />

          <label for="message">Message:</label>
          <textarea id="message" className="message" rows="4"></textarea>

          <button className='formBtn' type="submit">Book Now</button>
        </form>

      </div>
      <Footer />
    </>
  )
}

export default Contact
