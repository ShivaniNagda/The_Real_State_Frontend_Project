import * as React from "react";
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import TestimonialBox from "../Testimonials/Testimonialss";
import ContactForm from "../Contact/Contact";
import About from "../Aboutt/Aboutt";
import Property from "../Property/Property";
import Services from "../Servicess/Servicess";
import Offer from "../Offer/Offer";

function MyComponent() {
  const navigate = useNavigate();

 const scrollToSection = (id) => {
  if (window.location.pathname === '/') {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  } else {
    navigate('/');
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0);
  }
};


  return (
    <>
    
      <div>
        <div className="homepage-content">
          <div className="h1-cont">
          <h1>Find Your Next Home</h1>
          <h1>In Your LOCATION</h1>
          </div>
          <div className="para">
          <p className="paracontent">With a deep understanding of the market and a dedicated team, we
          specialize in connecting buyers with their perfect homes and helping
          sellers achieve top value for their properties.</p>
        </div></div>
        <div className="div-search">
        <div className="search-here">Search here</div>
        <button className="search-button">Search</button>
      </div>
      <div className="image">
      <img src="/images/roofhouse.png" alt="House" className="homepage-image" />
      </div>
      <br/>

          {/* About */}
     <div id="about">
       <About />
     </div>

<br/>

{/* Properties */}

<div id="properties" className="container">
  <div className="heading">
    <h2>PROPERTIES</h2>
    <p className="prop1">Explore The Latest</p>  
    <p className="prop1">Properties Available</p>
  </div>
  <div className="explore">
  
    <div className='grid-property'>
      <Property id = {1}/>  
      <Property id = {2}/> 
      <Property id = {3}/>  
      <Property id = {4}/>  
      <Property id = {5}/>  
      <Property id = {6}/>   
    </div>
  </div>
</div> 

{/* Offer */}
<Offer/>

{/* Testimonial */}
<div id="testimonials" className="testimonials">
  <div className="Client-testo">
    <h2>Client Testimonials</h2>
    <h1>Feedback From Our</h1>
    <h1>Clients</h1>
  </div>
  <div className="grid">
    <TestimonialBox/>
    <TestimonialBox/>
    <TestimonialBox/>
    <TestimonialBox/>
    <TestimonialBox/>
    <TestimonialBox/>
  </div>
</div>

{/* Contact */}
<div id="contact">
  <ContactForm/>
</div>

{/* Footer */}
     </div>
      
    </>
  );
}

export default MyComponent;
