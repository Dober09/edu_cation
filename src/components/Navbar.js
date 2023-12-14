import React, { useState } from 'react'
import { IoIosList, IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';

// Styles
import '../Styles/navbar.css'


const Navbar = () => {

    const [menuState, setMenuState] = useState('closed');

    const showMenu = () => {
        document.querySelector('.menu').classList.add('show-menu');
        setMenuState('open');
    }

    const hideMenu = () => {
        document.querySelector('.menu').classList.remove('show-menu');
        setMenuState('closed');
    }


  return (
    <nav id="navbar-wrapper">
         <div className='inner-nav'>
            <header>
               <h3 className='nav-brand'>Logo</h3>
               <IoIosList 
                  className='ioListIcon'
                  onClick={menuState === 'closed' ? showMenu : hideMenu}
                  style={{display: menuState === 'closed' ? 'inline' : 'none' }}
                  />              
                <IoMdClose 
                  className='ioCloseIcon'
                  onClick={menuState === 'closed' ? showMenu : hideMenu}
                  style={{display: menuState === 'closed' ? 'none' : 'inline' }}
                />
            </header>
             <ul className='menu'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
                <li>
                   <Link to="/services">Services</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
             </ul>
         </div>
    </nav>
  )
}

export default Navbar