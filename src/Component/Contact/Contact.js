import React, { useState } from 'react';
import './Contact.css'

function ContactForm() {
  // State variables to store form input values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Log the values to the console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Mobile Number:', mobile);
    console.log('Message:', message);

    // Optionally, reset form fields after logging
    setName('');
    setEmail('');
    setMobile('');
    setMessage('');
  };

  return (
    <div className='contactstructure'>

    <div className="contact">
      <div className="contact-form">
        <div className="h-p">
          <h1 className='center'>Contact Us</h1>
          <p className='p1'>Feel free to contact us any time. We will get back to you as
         soon as we can!</p>
        </div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <input
              type="text" 
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            /><br />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            /><br />
            <input
              type="tel"
              placeholder="Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            /><br />
            <input
            type='text'
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            /><br />
            <button type="submit" className="send-email">Send Email</button>
          </form>
        </div>
      </div>
      <div className='cont2'>
      <div className='small'></div>
      <div className="colored-box">
        <div className="contact-box">
          <h1>Get In Touch</h1>
          <p>Feel Free to contact us any time. We will get back to you as soon as we can!</p>
          <button className="contact-button">Contact Us</button>
        </div></div>
      </div>
    </div>
    </div>
  );
}

export default ContactForm;
