import React from 'react';
import brendan from '../assets/brendan.png'

function AboutMe() {
  return (
 <div className="media py-5 ml-2 d-flex" >
  <img src= {brendan} className= "m-2 rounded" />
  <div className="media-body m-2">
    <h5>Welcome! </h5>
    <p>I am a Minnesota based web developer passionate about building clean, responsive, and functional web applications. I am currently in the process of completing my University of MN Full Stack Web Development Bootcamp, which focuses on the MERN stack. Please view my resume for a list of current technologies I have experience with, my portfolio for examples of my work, and don't hesitate to reach out with any questions, opportunities, or advice. Thank you! </p>
  </div>
</div> 
  );
}

export default AboutMe;