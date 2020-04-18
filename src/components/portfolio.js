import React from 'react'
import { works } from './information/works'
import { Heart } from 'react-feather'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

function Work(props) {
    const { target } = props
    return (
        works.map((work, key) => {

            return (
                work.target.includes(target) &&
                <div data-aos='fade-up' key={key} className='item' data-id={work.target}>
                    <div className='inner'>
                        <img src={work.img} alt='portfolio' />
                        <div className='overlay'>
                            <span><Heart /></span>
                            <h4>{work.title}</h4>
                        </div>
                    </div>
                </div>
            )
        })
    )
}
function Portfolio() {
    return (
        <section id='portfolio' className='portfolio-wrapper'>
            <div className='portfolio-row'>
                <div className='section-title' data-aos={window.innerWidth <= 768 ? "zoom-in" : "fade-down"}>
                    <h1>Our Latest Works</h1>
                    <span></span>
                </div>
                <Tabs defaultActiveKey="all" id="uncontrolled-tab-example">
                    <Tab eventKey="all" title="All">
                        <div className='portfolio-gallery'>
                            <Work target='all' />
                        </div>
                    </Tab>
                    <Tab eventKey="webapp" title="Web Development">
                        <div className='portfolio-gallery'>
                            <Work target='webapp' />
                        </div>
                    </Tab>
                    <Tab eventKey="ai" title="IoT, ML & AI">
                        <div className='portfolio-gallery'>
                            <Work target='ai' />
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </section>
    )
}

export default Portfolio
