import React from 'react'
import './Services.css'

const Services = () => {
  return (
    <>
   
   <div>
      <div className='service'>

        {/* This is header paragraph and heding */}
        <div className='header'>
        <h1 className='shead'>SERVICES</h1>
        <p className='spara'>We are dedicated to making your property journey as seamless and
          successful as possible. Whatever your real estate needs, we're here to help
          you achieve your goals with confidence and ease.
        </p>
        </div>
      {/* sctn -1 */}
      {/* <main></main> */}
      <div className="container-serv">
        <div className="first-container">
          <div className='imag'>
          <img src='./images/Group74.jpg.png' alt='not-found' className='image01' />
          <img src='./images/Group74.jpg.png' alt='not-found' className='image001' />
          </div>
        </div>

        <div className="second-container2">
        <img src='./images/imgsc.jpg.png' alt='not-found' className='image-main' />
        </div>
        <div className="third-container">
        <img src='./images/Rectangle.jpg.png' alt='not-found' className='image04' />
        </div>
        <div className="fourth-container">
          <h1 className='h1-4'>See What's Popular</h1>
          <div className='four-pink'>
         <div className='pink-box'></div>
         <div className='pink-box'></div>
         <div className='pink-box'></div>
         <div className='pink-box'></div>

          </div>
        </div>
        <div className='sec2'>
        <div className="fifth-container">
        <img src='./images/Rectangle22.jpg.png' alt='not-found' className='image06' />
        </div>
        <div className="vertical-6">
        <div className="sixth-container">
        <img src='./images/Group.jpg.png' alt='not-found' className='image07' />
        </div>
        <div className="sixth01-container">
        <img src='./images/Group.jpg.png' alt='not-found' className='image08' />
        </div>
        </div>
        <div className='seventh-container'>
          <h1>Client 
            Testimonial's
          </h1>
        </div>
        </div>
        <div className='eight-container'>
      <div className="srv">
        <div className="how-we-work">
          <h1 className='h1-8'>How We Work</h1> 
        <p className='p-8'> Their testimonials reflect the trust and success we’ve built together,
          showcasing our commitment to excellence in every real estate journey.
          </p></div>
       
                <div className="concept">
                  <h1 className='h1-8'>Concept</h1>
                <p className='p-8'> The concept behind a property 
                  development refers to the vision
                  or theme that guides the design, layout,
                  and purpose of the project.
                  </p>
             
                </div>
                <div className="design">
                  <h1 className='h1-8'>Design</h1>
                <p className='p-8'> our design concept is about creating
                  
                  spaces that people love, spaces that are
                 
                  as beautiful as they are practical,
                  </p>
              </div>
  
              <div className="development">
                <h1 className='h1-8'>Development</h1>
                <p className='p-8'>our development concept is about building
                more than just structures; it's about creating
                communities.</p>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</>
);
}

    

export default Services