import React from 'react'
import './About.css'

const About = () => {
  return (
    <>
    <div className='full-about'>
    <div className='about-heading-par-image'>
        <h1>ABOUT US</h1>
        
        <p class="line1">
            
                We are dedicated to making your property journey as seamless and
            successful as possible. Whatever your real estate needs, we're here to help
           you achieve your goals with confidence and ease.
        </p>
    </div>
    <div className='image-container'>
        <img src='/images/abouthouse1.png' alt='not-founded' className='house1' />
        <div className='container1'></div>
        <img src='/images/abouthouse2.png' alt='not-founded' className='house2' />
        <div className='container2'>    </div>

        <div className='about-shadow-container'>
            <h1>About Us</h1>
            <p>At SnehGrah Real Estate, we are 
                {/* <br /> */}
                dedicated to turning property dreams 
                {/* <br /> */}
                into reality. With a deep
                {/* <br /> */}
                understanding of the market and a
                {/* <br /> */}
                commitment to excellence, we guide 
                {/* <br /> */}
                our clients through the buying and 
                {/* <br /> */}
                selling process with confidence and 
                {/* <br /> */}
                ease.</p>
        </div>
        </div>
        <div className='about-cont2'>
            <h1>What About Us</h1>
            <div className='about-frames'>
             <img src='/images/aboutframe1.png' alt='not-founded' />   
             <img src='/images/aboutframe2.png' alt='not-founded' />   
             <img src='/images/aboutframe3.png' alt='not-founded' />   

            </div>
        </div>
    <div className='why-choose-us'>
         <div className='pink-cont'>
            <h1>Why Choose Us</h1>
            <p>At SnehGrah, we value honesty and
                 transparency in every interaction. We
                  provide clear communication, keep
                   you informed at every stage, and 
                   ensure that you feel confident and
                    empowered in your decisions.</p>
         </div>
        <img src='/images/home11.png' alt='not-founded' className='background-image' />

    </div>
</div>

    </>
  )
}

export default About