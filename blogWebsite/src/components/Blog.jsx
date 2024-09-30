import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './Blog.css'

function Blog() {

    const [resp, setResp] = useState([]);
    useEffect(() => {
      axios.get('https://fakestoreapi.com/products?limit=5')
        .then((res) => {
          setResp(res.data);
        });
    
    }, []);

  return (
    <>
   
   <h1 className='blogss'>
          <div className='about'>B</div>
          <div className='about'>L</div>
          <div className='about'>O</div>
          <div className='about'>G</div> 
          <div className='about'>S</div>
          </h1>

      {resp.map((response) => (
        <p key={response.id} style={{ color: response.completed ? "red" : "green" , border: '2px solid #FABC3F', padding: '100px', width: '500px', marginLeft: '400px' }}>
          <p>{response.id}</p>
          <p><img src={response.image} style={{ height: '200px', width: '200px'}}/></p>
          {response.title}</p>
      ))
      }
    </>
  )
}

export default Blog
