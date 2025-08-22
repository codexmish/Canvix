import React from 'react'
import logo from '../assets/Images/logo.png'
import { Link } from 'react-router'
import { IoMdArrowDropup } from "react-icons/io";

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
            navLinks: '/',
            dropDown:[
                {
                    dropContent: 'Location',
                    dropLink: '/'
                },
                {
                    dropContent: 'Phone',
                    dropLink: '/'
                },
                {
                    dropContent: 'Social',
                    dropLink: '/'
                }
            ]
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
                        navItems.map((item , i)=>{
                            return(
                                <ul>
                                    <li className='relative group'>

                                    <Link key={i} className='text-xl hover:text-brand font-normal text-primary font-DM' to={item.navLinks}>{item.navContent}</Link>
                                    

                                    {
                                        item.dropDown&&
                                        <div className='w-[300px] p-3 rounded-[5px] bg-white absolute top-8 invisible opacity-0 group-hover:visible group-hover:opacity-[100%]' >
                                            <IoMdArrowDropup className='text-2xl text-white absolute top-[-15px] left-5'/>
                                            <ul>
                                                {
                                                    item.dropDown.map((item , i)=>(

                                                        <li><Link className='text-lg inline-block mb-5 font-DM' key={i} to={item.dropLink}>{item.dropContent}</Link></li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                        
                                    }
                                    </li>
                                </ul>
                            )
                        }


                        )
                    }
                </div>
                <button className='w-[140px] h-[47px] bg-primary hover:bg-brand rounded-[23px] text-lg font-DM font-normal'>Get in touch</button>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar