import React from 'react'


// Icons

import { IoArrowForward } from "react-icons/io5";

// images
import img1 from '../assets/images/hero-image.jpg'

// Styles
import '../Styles/services.css'

const Services = () => {
  return (
    <>
      <main id="services-main-wrapper">
        <div id="services-main">
           <section className="service-section">
                
                <div className='service-section-item service-section-item-1'>
                    <section style={{width: '100%', height: '400px', backgroundColor: 'black', position: 'relative'}}>
                       <div style={{width: '100%', height: '100%', backgroundColor: 'red', position: 'relative', zIndex: 12}}>
                           <img src={img1} style={{width: '100%', height: '100%'}} alt='not found' />
                       </div>
                       <div style={{width: '100%', height: '100%', backgroundColor: '#122c50', position: 'absolute', top: '15px', left: '20px', zIndex: 11}}></div>
                    </section>
                </div>

                <div className='service-section-item service-section-item-2'>
                  <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, 
                  </p>
                  <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, 
                  </p>
                  <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, 
                  </p>
                </div>
           </section>
<br />

           <section className="service-section">

                <div className='service-section-item service-section-item-2'>
                  <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, 
                  </p>
                  <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, 
                  </p>
                  <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, 
                  </p>
                </div>

                <div className='service-section-item service-section-item-1'>
                    <section style={{width: '100%', height: '400px', backgroundColor: 'black', position: 'relative'}}>
                       <div style={{width: '100%', height: '100%', backgroundColor: 'red', position: 'relative', zIndex: 12}}>
                           <img src={img1} style={{width: '100%', height: '100%'}} alt='not found' />
                       </div>
                       <div style={{width: '100%', height: '100%', backgroundColor: '#122c50', position: 'absolute', top: '15px', left: '20px', zIndex: 11}}></div>
                    </section>
                </div>
           </section>
        </div>
      </main>
      <section id="service-contact-wrapper">
         <div id="service-contact-wrapper-overlay">
           <div id="service-contact-content">
               <h1>How can we assist you?</h1>
               <p className='py-4'>We are very happy to help.</p>
               <a href="#" className='contact-btn'>
                Talk to us
                <IoArrowForward className='testc' />
                </a>
           </div>
         </div>
      </section>
    </>
  )
}

export default Services