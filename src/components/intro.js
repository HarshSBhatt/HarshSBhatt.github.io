import React from 'react';

function Intro() {
	return (
		<section id="home" className="intro-wrapper">
			{/* className="fade-right" */}
			<div className="intro-row">
				<div className="intro-content">
					<h6>Hey there!, We are</h6>
					<h1>The Solvers</h1>
					<h3>Group of Freelancers</h3>
					<h3 className="contact">
						<a href="mailto:harsh.sjs.bhatt@gmail.com?subject=Hey there!">Get in Touch</a>
					</h3>
				</div>
				{/* className="fade-up-left" */}
				<div className="img-wrapper">
					<img alt="Not found" src={require('../images/cover.svg')} />
				</div>
			</div>
		</section>
	);
}

export default Intro;
