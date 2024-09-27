import React from "react";
import "./Aboutt.css";

function Aboutt() {
  return (
    <div className="About">
      <div className="about-images">
        <img src="/images/house2.png" alt="house" className="imgabout" />
        <div className="about-images1">
          <img src="/images/house3.png" alt="house1" className="imageabout1" />
         </div>
        </div>
       
      <div className="about-content">
        <div className="heading-dream">
          <h5 className="headingwho">WHO WE ARE</h5>
          <h1 className="common-heading">Connecting You to Your</h1>
          <h1 className="common-heading">Dream Property</h1>
        </div>
        <div className="vertical-text">
          <p className="vertical-text-content">
            We believe in building lasting relationships.With years
          </p>
          <p className="vertical-text-content">
            of experience and a passion for helping our clients
          </p>
          <p className="vertical-text-content">
            of experience and a passion for helping our clients
          </p>
          <p className="vertical-text-content">
            of experience and a passion for helping our clients
          </p>
          <p className="vertical-text-content">
            succeed, we are dedicated to providing personalized
          </p>
          <p className="vertical-text-content">
            service tailored to your unique needs
          </p>
        </div>
        <button className="view-more-button1">View More</button>
      </div>
      
    </div>
  );
}

export default Aboutt;
