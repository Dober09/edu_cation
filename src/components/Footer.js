import React from 'react'
import { IoLogoFacebook, IoLogoLinkedin, IoLogoTwitter, IoLogoInstagram } from "react-icons/io";
import '../Styles/footer.css'


const Footer = () => {
  return (
    <footer>
       <section>
           <div className='footer-column d-flex justify-content-center align-items-center'>
            <div className='inner-footer-column text-white'>
              <p>lorem lorem lorem lorem</p>
              <p>lorem lorem lorem lorem</p>
              <p>lorem lorem lorem lorem</p>
            </div>
           </div>
           <div className='footer-column d-flex justify-content-center align-items-center'>
            <div className='inner-footer-column'>
            <h5 className='my-3'>About</h5>
              <span className='footer-link'>
                 <a href='#'>Our Story</a>
              </span>
              <span className='footer-link'>
                 <a href='#'>Our Team</a>
              </span>
              <span className='footer-link'>
                 <a href='#'>item 1</a>
              </span>
            </div>
           </div>
           <div className='footer-column d-flex justify-content-center align-items-center'>
            <div className='inner-footer-column'>
               <h5 className='my-3'>Company</h5>
              <span className='footer-link'>
                 <a href='#'>Our Services</a>
              </span>
              <span className='footer-link'>
                 <a href='#'>Clients</a>
              </span>
              <span className='footer-link'>
                 <a href='#'>Contact</a>
              </span>
            </div>
           </div>
           <div className='footer-column d-flex justify-content-center align-items-center'>
            <div className='inner-footer-column'>
            <h5 className='my-3'>Subscribe</h5>
              <form>
                <div>
                <input type='text' className='email-input' placeholder='Email Address' />
                </div>
                <button className='btn p-1'>subscribe</button>
              </form>
            </div>

           </div>
       </section>
       <section>
        <p>lorem lorem lorem lorem</p>
        <p>
          <a href='#' title='visit facebook page'>
            <IoLogoFacebook></IoLogoFacebook>
          </a>
          <a href='#' title='visit twitter page'>
            <IoLogoTwitter></IoLogoTwitter>
          </a>
          <a href='#' title='visit LinkedIn page'>
            <IoLogoLinkedin></IoLogoLinkedin>
          </a>
          <a href='#' title='visit instagram page'>
            <IoLogoInstagram></IoLogoInstagram>
          </a>
        </p>
       </section>
    </footer>
  )
}

export default Footer