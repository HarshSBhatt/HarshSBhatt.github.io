import React from 'react';
import { infos } from './information/information';

function About() {
	return (
		<section id="about" className="about-wrapper">
			<div className="about-row">
				<div className="section-title">
					<h1 className="fade-down">About Us</h1>
					<p className="fade-up">Who are we?</p>
				</div>
			</div>
			<div className="info-wrapper">
				{infos.map(({ id, src, download, name, interest, description, pd, social_handle }) => (
					<div className={`info${id % 2}`} key={id}>
						<div className="image">
							<img src={src} height={400} alt="erorr" className="zoom-in" />
							<a className="fade-up" href={download} download>
								Download CV
							</a>
						</div>
						{/* className="fade-up" */}
						<div className="text">
							<h4>I'm {name}</h4>
							<h6>
								<strong>Interest</strong> {interest}
							</h6>
							<p>{description}</p>
							<div className="detail_info">
								{pd.map((data, key) => {
									return Object.keys(data)[0] !== 'Address' ? (
										<div className="list" key={key}>
											<label className="flip-down">{Object.keys(data)}</label>
											<p className="zoom-in">{Object.values(data)}</p>
										</div>
									) : (
										<div className="list" key={key}>
											<label className="flip-down">{Object.keys(data)}</label>
											<p className="zoom-in">-</p>
										</div>
									);
								})}
								<div className="social-links">
									{social_handle.map(
										(handle, key) =>
											handle.link !== '#' && (
												<a className="zoom-in" key={key} href={handle.link}>
													<div className={handle.name}>{handle.icon}</div>
												</a>
											)
									)}
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
