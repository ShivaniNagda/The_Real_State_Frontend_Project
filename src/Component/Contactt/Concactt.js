import React from "react";
import "./Contactt.css";

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <div className="firsst-container">
          <h1>Get In Touch</h1>
          <p>
            Contact us today to start your journey toward finding the perfect
            property.
            Reach out via phone, email, or visit our office-we're always here to{" "}
          connect with you.</p>
        </div>
        <div className="seconnd-container">  </div>

        <div className="contactt-form">
          <div className="contactt">
            <div className="contactt-2">
              <div className="contactt-3">
                <div className="name">Name</div>
                <div className="contactt-4" />
              </div>
              <div className="contactt-5">
                <div className="email">Email</div>
                <div className="contactt-4" />
              </div>
            </div>
            <div className="contactt-7">
              <div className="contactt-8">
                <div className="phone-number">Phone Number</div>
                <div className="contactt-4" />
              </div>
              <div className="contactt-10">
                <div className="subject">Subject</div>
                <div className="contactt-4" />
              </div>
            </div>
            <div className="message">Message</div>
            <div className="contactt-12" />
            <div className="send-message">Send Message</div>
          </div>
        </div>
      <div className="sectn2">
        <div className="location-service">
          <h1>Contact & Join Together</h1>
          <p>
            Contact us today to start your journey toward finding the perfect
            property
          </p>
          <p1>
            Reach out via phone, email, or visit our office-we're always here to
          </p1>
          <br />
          <p2>connect with you.</p2>

          <div className="loc-ser">
            <div className="divi">
              <div className="location1">Location</div>
              <div className="visit-us-at">Visit Us At</div>
              <div className="connect-with-you">
                we're always here to connect with you.
              </div>
            </div>
            <div className="divi">
              <div className="location1">24*7 Service</div>
              <div className="visit-us-at">Call Us On</div>
              <div className="connect-with-you">
                we're always here to connect with you.
              </div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
