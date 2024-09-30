import React from 'react'
import './Home.css'
import Footer from './Footer'

function Home() {
  return (
    <>
    <div className="container">
      <div className="homeContent">
        <h1>Welcome to Our Website</h1>
        <p>Your journey begins here</p>
        <button className='homeButton'>Get Started</button>
      </div>
      </div>
      <Footer/>
    </>
  )
}

export default Home