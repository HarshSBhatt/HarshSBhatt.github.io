import React from 'react';
import { our_services } from './information/our_service';

function Services() {
	return (
		<section id="services" className="services-wrapper">
			<div className="services-row">
				<div className="section-title">
					{/* // className={window.innerWidth <= 768 ? 'zoom-in' : 'fade-down'} */}
					<h1>Our Services</h1>
					<span />
				</div>
				<div className="our-service-wrapper">
					{/* /*className="flip-up"*/}
					{our_services.map((service, key) => (
						<div key={key} className="box">
							<div className="icon">{service.icon}</div>
							<h5>{service.title}</h5>
							<p>{service.desc}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Services;
