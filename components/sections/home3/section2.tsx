'use client'
import CountUp from 'react-countup'
import Link from 'next/link'

export default function Section2() {
	return (
		<>

			<div className="about3-section-area sp1">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<div className="about3-images">
								{/* <img src="/assets/img/all-images/about/about-img10.png" alt="" className="about-img10 aniamtion-key-1" /> */}
								<div className="img1" data-aos="zoom-in" data-aos-duration={1000}>
									<img src="/assets/img/all-images/used-images/slider-3.jpg" alt="" />
								</div>
								<div className="img2" data-aos="zoom-in" data-aos-duration={1100}>
									<img src="/assets/img/all-images/about/about-2.webp" alt="" />
								</div>
								<div className="img3" data-aos="zoom-in" data-aos-duration={1200}>
									<img src="/assets/img/all-images/about/about-3.jpg" alt="" />
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="about-header heading5">
								<h5 data-aos="fade-left" data-aos-duration={800}>About Our Conference</h5>
								<div className="space18" />
								<h2 className="text-anime-style-3" style={{fontSize: 'var(--ztc-font-size-font-s26)', lineHeight: '33px'}}>Discover the Future of HR at the Women Leadership Conference & Awards 2026. A premier platform celebrating women shaping workplaces across the GCC.</h2>
								<div className="space18" />
								<p data-aos="fade-left" data-aos-duration={900}>Focused on inclusion, equity, resilience, and Vision 2030, the event brings together top HR leaders and experts to share insights, inspire change, and build the future of work.</p>
								<div className="space12" />
								<div className="counter-area" data-aos="fade-left" data-aos-duration={1000}>
									<div className="counter-box">
										<h3><CountUp className="odometer" enableScrollSpy={true} end={80} />+</h3>
										<div className="space18" />
										<p>Top HR Leaders</p>
									</div>
									<div className="counter-box">
										<h3><CountUp className="odometer" enableScrollSpy={true} end={15} />+</h3>
										<div className="space18" />
										<p>Top Industry Speakers</p>
									</div>
									<div className="counter-box" style={{ border: 'none' }}>
										<h3><CountUp className="odometer" enableScrollSpy={true} end={20} />+</h3>
										<div className="space18" />
										<p>Awardees honored </p>
									</div>
								</div>
								<div className="space32" />
								<div className="btn-area1" data-aos="fade-left" data-aos-duration={1200}>
									<Link href="/event-schedule" className="vl-btn3">Reserve premium Seat</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}
