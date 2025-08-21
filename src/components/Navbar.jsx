import React from 'react'
import logo from '../assets/Images/logo.png'
import { Link } from 'react-router'

const Navbar = () => {

    const navItems = [
        {
            navContent: 'Home',
            navLinks: '/'
        },
        {
            navContent: 'About',
            navLinks: '/'
        },
        {
            navContent: 'Contact Us',
            navLinks: '/'
        },
    ]
  return (
    <>
    <nav id='Navbar'>
        <div className="container">
            <div className="main-row">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="items">
                    {
                        navItems.map((item , i)=>(

                            <Link key={i} className='text-xl font-normal text-primary font-DM' to={'/'}>{item.navContent}</Link>
                            
                        ))
                    }
                </div>
                <button>Get in touch</button>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar