import React from 'react';
import { infos } from './information/information'

function About() {

    return (
        <section id="about" className="about-wrapper">
            <div className="about-row">
                <div className="section-title">
                    <h1 data-aos="fade-down">About Us</h1>
                    <p data-aos="fade-up">Information about us</p>
                </div>
            </div>
            <div className="info-wrapper">
                {infos.map(({ id, src, download, name, interest, description, pd, social_handle }) => (
                    <div className={`info${id % 2}`} key={id}>
                        <div className="image">
                            <img src={src} height={300} alt="erorr" data-aos='zoom-in' />
                            <a data-aos='fade-up' href={download} download>Download CV</a>
                        </div>
                        <div className="text" data-aos='fade-up'>
                            <h4>I'm {name}</h4>
                            <h6>
                                <strong>Interest</strong> {interest}
                            </h6>
                            <p>{description}</p>
                            <div className='detail_info'>{
                                pd.map((data, key) => (
                                    <div className='list' key={key}>
                                        <label data-aos="flip-down">{Object.keys(data)}</label>
                                        <p data-aos="zoom-in">{Object.values(data)}</p>
                                    </div>
                                ))}
                                <div className='social-links'>
                                    {
                                        social_handle.map((handle, key) => (
                                            handle.link !== '#' &&
                                            <a data-aos='zoom-in' key={key} href={handle.link}>
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
