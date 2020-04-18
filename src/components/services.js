import React from 'react'
import { our_services } from './information/our_service'

function Services() {
    return (
        <section id='services' className='services-wrapper'>
            <div className='services-row'>
                <div data-aos={window.innerWidth <= 768 ? "zoom-in" : "fade-down"} className='section-title'>
                    <h1>Our Services</h1>
                    <span></span>
                </div>
                <div className="our-service-wrapper">
                    {
                        our_services.map((service, key) => (
                            <div key={key} className='box' data-aos='flip-up'>
                                <div className='icon'>
                                    {service.icon}
                                </div>
                                <h5>{service.title}</h5>
                                <p>{service.desc}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Services
