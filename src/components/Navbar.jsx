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
    <nav id='Navbar' className='pt-[22px]'>
        <div className="container">
            <div className="main-row flex items-center justify-between">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="items flex gap-[35px]">
                    {
                        navItems.map((item , i)=>(

                            <Link key={i} className='text-xl hover:text-brand font-normal text-primary font-DM' to={item.navLinks}>{item.navContent}</Link>

                        ))
                    }
                </div>
                <button className='w-[140px] h-[47px] bg-primary rounded-[23px] text-lg font-DM font-normal'>Get in touch</button>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar