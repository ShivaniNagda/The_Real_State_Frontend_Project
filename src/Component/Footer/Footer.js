import React from 'react'
import { TiSocialFacebook } from "react-icons/ti";
import { CiInstagram } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import './Footer.css'

const Footer = () => {
  return (
    <>
    <div className='footer-container'>
        <div className='image-p'>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/eacce8bcd70ac4edb88994f80eaeabd9a038de64fe40eed36b349e5098334ae7?placeholderIfAbsent=true&apiKey=2f9d20c0b8a04fd0bd635c00c3d77c1b"
          className="img-Footer"
        />
        <div className='paragraph'>
            <p className='para-text'
            >Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Libero, placeat? Odit 
         aliquam, maiores ducimus perspiciatis
                  cupiditate dolorum sit repellendus nulla?</p>
               <div className="icons">
    <div className="icon-box"><TiSocialFacebook /></div>
    <div className="icon-box"><CiInstagram /></div>
    <div className="icon-box"><FaXTwitter /></div>
    <div className="icon-box"><FaYoutube /></div>
</div>
</div>
</div>
          <div className='Contact'>
            <h1>Contact Us</h1>
            <ul>
                <li>123, Vijay Nagar</li>
                <li>+91-12345 67890</li>
                <li>snehgrah01@gmail.com</li>
            </ul>
                  </div>

        <div className='gallery'>
    <h1>Gallery</h1>
    <div className="gallery-images">
        <div className='g-image1'>
    <img src='/images/gallery.jpg' alt='not-found'/>
    <img src='/images/gallery.jpg' alt='not-found'/>
    </div>

    <div className='g-image2'>
    <img src='/images/gallery.jpg' alt='not-found'/>
    <img src='/images/gallery.jpg' alt='not-found'/>
    </div>
    </div>

</div>


    </div>
    <div className='footer-line'>
      <p>Copyright SnehGrah Real Estate , All Rights Reserved</p>
      
    </div>

    </>
  )
}

export default Footer