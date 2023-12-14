import React from 'react'
import { IoIosSend } from "react-icons/io";


import '../Styles/contact.css'

const Contact = () => {
  return (
    <>
        <section id='contact-wrapper'>
        <div style={{backgroundColor: '#e8e8e8', padding: '50px 0'}}>
        <section className='container'>
          <header>
              <h2>Get in touch</h2>
          </header>
        <div id='contact-cards-wrapper'>
           <div className='contact-card'>
            lorem lorem lorem lorem lorem lorem lorem lorem
            lorem lorem lorem lorem lorem lorem lorem lorem
           </div>
           <div className='contact-card'>
            lorem lorem lorem lorem lorem lorem lorem lorem
            lorem lorem lorem lorem lorem lorem lorem lorem
           </div>
        </div>

        <div className='row' >
          <div className='col-sm-0 col-lg-1'></div>
          <div className='col-sm-12 col-md-7 col-lg-6'>
             <form id="contact-form">
                <div className='form-group'>
                    <label htmlFor="firstname">First Name</label>
                    <input id="firstname" type='text' className='form-control' />
                </div>
                <div className='form-group'>
                    <label htmlFor="lastname">Last Name</label>
                    <input id="lastname" type='text' className='form-control' />
                </div>
                <div className='form-group'>
                    <label htmlFor="email">Email Address</label>
                    <input id="email" type='email' className='form-control' />
                </div>

                <div className='form-group'>
                    <label htmlFor="subject">Subject</label>
                    <input id="subject" type='text' className='form-control' />
                </div>

                <div className='form-group'>
                    <label htmlFor="message">Last Name</label>
                    <textarea id="message" className='form-control' placeholder='How can we kindly help?'>
                    </textarea>
                </div>
                <div className='d-flex justify-content-end'>
                  <button className='btn btn-md msg-btn shadow-lg'>
                    <IoIosSend />
                    Send Message</button>
                </div>
             </form>
          </div>
          <div className='col-sm-12 col-md-5 col-lg-4'>
            <aside id="contact-aside" className='shadow-lg'>
            <div>
                <p style={{fontFamily: 'italic'}}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                </p>
              </div>

              <div>
                <p>
                  <span className='contact-heading'>Email: </span>
                  <span>info@example.co.za</span>
                </p>
              </div>

              <div>
                <p>
                  <span className='contact-heading'>Phone: </span>
                  <span>0723030303</span>
                </p>
              </div>

              <div>
                <p>
                  <span className='contact-heading'>Fax: </span>
                  <span>1-900-334-4545</span>
                </p>
              </div>

              <div>
                <p>
                  <span className='contact-heading'>Address: </span>
                  <span>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                  </span>
                </p>
              </div>
            </aside>
          </div>
          <div className='col-sm-0 col-lg-1'></div>
        </div>
        </section>
        </div>
        </section>
    </>
  )
}

export default Contact