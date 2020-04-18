import React from 'react';
import { Twitter, Facebook, Instagram, Linkedin } from 'react-feather';

const social_handle = [
    {
        name: 'fb',
        icon: <Facebook />,
        link: 'https://www.facebook.com/harsh.bhatt.39395'
    },
    {
        name: 'tt',
        icon: <Twitter />,
        link: 'https://twitter.com/harsh_bhatt03'
    },
    {
        name: 'ig',
        icon: <Instagram />,
        link: 'https://www.instagram.com/harshbhatt2108/'
    },
    {
        name: 'lin',
        icon: <Linkedin />,
        link: 'https://www.linkedin.com/in/harsh-bhatt-a2771b161/'
    }
];

function Footer() {
    return (
        <React.Fragment>
            <footer>
                <div className="footer-wrapper">
                    <div data-aos="zoom-out" className="logo">The Solvers</div>
                    <div className="social-links">
                        {social_handle.map((handle, key) => (
                            <a data-aos="fade-up" key={key} href={handle.link}>
                                <div className={handle.name}>{handle.icon}</div>
                            </a>
                        ))}
                    </div>
                </div>
            </footer>
            <div className='copyright'>
                <p>&copy; 2020 copyright. All rights reserved</p>
            </div>
        </React.Fragment>
    );
}

export default Footer;
