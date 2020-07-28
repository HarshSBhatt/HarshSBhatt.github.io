import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu } from 'react-feather';

function Navbar() {
	const [ cls, setCls ] = useState('');
	const [ open, setOpen ] = useState(false);
	useEffect(() => {
		window.addEventListener('scroll', listenScrollEvent);
	}, []);
	const listenScrollEvent = () => {
		if (window.innerWidth >= 800) {
			if (window.scrollY > 500) {
				setCls('fixed');
			} else {
				setCls('');
			}
		}
	};
	const handleClick = () => {
		setOpen(!open);
	};
	return (
		// className="fade-down"
		<header className={cls}>
			<div className="nav-container">
				<div className="company-name">
					<a href="/">The Solvers</a>
				</div>
				<div onClick={handleClick} className="ham-burger">
					<Menu />
				</div>
				<div className={open ? 'navbar show' : 'navbar'}>
					<ul>
						<li>
							<Link to="home" onClick={handleClick} spy={true} activeClass="active">
								Home
							</Link>
						</li>
						<li>
							<Link to="services" onClick={handleClick} spy={true} activeClass="active">
								Services
							</Link>
						</li>
						<li>
							<Link to="portfolio" onClick={handleClick} spy={true} activeClass="active">
								Portfolio
							</Link>
						</li>
						<li>
							<Link to="about" onClick={handleClick} spy={true} activeClass="active">
								About
							</Link>
						</li>
						<li>
							<a href="mailto:harsh.sjs.bhatt@gmail.com?subject=Hey there!">Contact Us</a>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
}

export default Navbar;
