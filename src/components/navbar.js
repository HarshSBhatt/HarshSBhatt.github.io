import React from 'react'
import { Link } from "react-scroll";

function Navbar() {
    const menu = ['Home', 'About', 'Services', 'Portfolio', 'Contact']
    return (
        <header data-aos='fade-down'>
            <div className='navbar-container'>
                <div className='company-name'>
                    <a href='/'>
                        Harsh
                    </a>
                </div>
                <div className='navbar'>
                    <ul>
                        {
                            menu.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        activeClass="active"
                                        to={`section${index + 1}`}
                                        spy={true}
                                        smooth={true}
                                        duration={700}
                                    >
                                        {menu[index]}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Navbar
