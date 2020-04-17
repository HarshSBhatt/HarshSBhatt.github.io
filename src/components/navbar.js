import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <header data-aos='fade-down'>
            <div className='navbar-container'>
                <div className='company-name'>
                    <Link to='/'>
                        Harsh
                    </Link>
                </div>
                <div className='navbar'>
                    <ul>
                        <li><a className='active' href='/'>Home</a></li>
                        <li><a href='/'>About</a></li>
                        <li><a href='/'>Services</a></li>
                        <li><a href='/'>Portfolio</a></li>
                        <li><a href='/'>Contact</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Navbar
