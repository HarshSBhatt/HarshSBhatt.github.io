import React from 'react';
import { infos } from './information/information'

function About() {

    return (
        <section id="section2" className="about-wrapper">
            <div className="about-row">
                <div className="section-title">
                    <h1 data-aos="fade-down">About Us</h1>
                    <p data-aos="fade-up">Information about us</p>
                </div>
            </div>
            <div className="info-wrapper">
                {infos.map(({ id, src, name, interest, description, pd, social_handle }) => (
                    <div className={`info${id % 2}`} key={id}>
                        <div className="image" data-aos={id % 2 === 0 ? "fade-right" : "fade-left"}>
                            <img src={src} alt="erorr" />
                        </div>
                        <div className="text" data-aos={id % 2 === 0 ? "fade-left" : "fade-right"}>
                            <h4>I'm {name}</h4>
                            <h6>
                                <strong>Interest</strong> {interest}
                            </h6>
                            <p>{description}</p>
                            <div className='detail_info'>{
                                pd.map((data, key) => (
                                    <div className='list' key={key}>
                                        <label data-aos="flip-down">{Object.keys(data)}</label>
                                        <p data-aos="zoom-in-right">{Object.values(data)}</p>
                                    </div>
                                ))}
                                <div className='social-links'>
                                    {
                                        social_handle.map((handle, key) => (
                                            <a data-aos={id % 2 === 0 ? "fade-left" : "fade-right"} key={key} href={handle.link}>
                                                <div className={handle.name}>
                                                    {handle.icon}
                                                </div>
                                            </a>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default About;
