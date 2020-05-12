import React from 'react'

function Intro() {
    return (
        <section id='home' className='intro-wrapper'>
            <div data-aos='fade-right' className='intro-row'>
                <div className='intro-content'>
                    <h6>Hey there!, We are</h6>
                    <h1>The Solvers</h1>
                    <h3>Group of Freelancers</h3>
                </div>
                <div className='img-wrapper'>
                    <img alt='Not found' src={require('../images/cover.png')} />
                </div>
            </div>
        </section>
    )
}

export default Intro
