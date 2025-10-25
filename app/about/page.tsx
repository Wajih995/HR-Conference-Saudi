'use client'
import CountUp from 'react-countup'
import Countdown from '@/components/elements/Countdown'
import Layout from "@/components/layout/Layout"
import BrandSlider from '@/components/slider/BrandSlider'
import Link from "next/link"
export default function About() {

	return (
		<>

			<Layout headerStyle={3} footerStyle={1}>
				<div>
					<div className="inner-page-header" style={{ backgroundImage: 'url(assets/img/all-images/used-images/about-banner.png)', position: 'relative' }}>
						{/* Dark overlay for better text visibility */}
						<div style={{
							position: 'absolute',
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
							backgroundColor: 'rgba(0, 0, 0, 0.5)',
							zIndex: 1
						}}></div>
						<div className="container" style={{ position: 'relative', zIndex: 2 }}>
							<div className="row">
								<div className="col-lg-4 m-auto">
									<div className="heading1 text-center">
										<h1 style={{ color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>About Event</h1>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== HERO AREA ENDS =======*/}
					{/*===== ABOUT AREA STARTS =======*/}
					<div className="about1-section-area sp1">
						<div className="container">
							<div className="row align-items-center">
								<div className="col-lg-6">
									<div className="about-imges">
										<div className="img1 reveal image-anime">
											<img src="/assets/img/all-images/used-images/about-sec-3.avif" alt="" />
										</div>
										<div className="row">
											<div className="col-lg-6 col-md-6">
												<div className="space30" />
												<div className="img1 reveal image-anime">
													<img src="/assets/img/all-images/used-images/about-sec-1.jpg" alt="" />
												</div>
											</div>
											<div className="col-lg-6 col-md-6">
												<div className="space30" />
												<div className="img1 reveal image-anime">
													<img src="/assets/img/all-images/used-images/about-sec-2.webp" alt="" />
												</div>
											</div>
										</div>
										<div className="about-btnarea">
											<svg xmlns="http://www.w3.org/2000/svg" width={200} height={200} viewBox="0 0 200 200" fill="none" className="keyframe5">
												<path d="M93.8771 2.53621C96.8982 1.28483 98.4087 0.659138 100 0.659138C101.591 0.659138 103.102 1.28483 106.123 2.5362L164.588 26.7531C167.609 28.0045 169.119 28.6302 170.245 29.7554C171.37 30.8806 171.995 32.3912 173.247 35.4123L197.464 93.8771C198.715 96.8982 199.341 98.4087 199.341 100C199.341 101.591 198.715 103.102 197.464 106.123L173.247 164.588C171.995 167.609 171.37 169.119 170.245 170.245C169.119 171.37 167.609 171.995 164.588 173.247L106.123 197.464C103.102 198.715 101.591 199.341 100 199.341C98.4087 199.341 96.8982 198.715 93.8771 197.464L35.4123 173.247C32.3912 171.995 30.8806 171.37 29.7554 170.245C28.6302 169.119 28.0045 167.609 26.7531 164.588L2.53621 106.123C1.28483 103.102 0.659138 101.591 0.659138 100C0.659138 98.4087 1.28483 96.8982 2.5362 93.8771L26.7531 35.4123C28.0045 32.3912 28.6302 30.8806 29.7554 29.7554C30.8806 28.6302 32.3912 28.0045 35.4123 26.7531L93.8771 2.53621Z" fill="#FFBA00" />
											</svg>
											<Link href="/pricing-plan">
												<span><i className="fa-solid fa-arrow-right" /></span>
												<br />
												<div className="space12" />
												Buy Ticket
											</Link>
										</div>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="about-header-area heading2">
                                        <h5 data-aos="fade-left" data-aos-duration={800}>About Our Business Conferences</h5>
										<div className="space16" />
                                        <h2 className="text-anime-style-3">Explore the Future of HR Leadership</h2>
										<div className="space16" />
                                        <p data-aos="fade-left" data-aos-duration={900}>Discover the Future of HR at the <strong>HR Women Leadership Conference & Awards 2026</strong>. The GCC’s premier platform celebrating women who are transforming workplaces and driving inclusive growth. This flagship event inspires bold ideas, sparks collaboration, and redefines leadership through <strong>resilience, equity, and innovation</strong>. From advancing DEI and talent development to shaping future-ready people strategies, it brings together the region’s most influential HR minds to lead the change.</p>
										<div className="space32" />
										<div className="about-counter-area">
											<div className="counter-box">
											<h2><CountUp className="odometer" enableScrollSpy={true} end={80} />+</h2>
												<div className="space18" />
                                                <p>Top HR Leaders shaping people strategy</p>
											</div>
											<div className="counter-box box2">
												<h2><CountUp className="odometer" enableScrollSpy={true} end={15} />+</h2>
												<div className="space18" />
                                                <p>Top Industry Speakers</p>
											</div>
											<div className="counter-box box3" style={{ border: 'none' }}>
											<h2><CountUp className="odometer" enableScrollSpy={true} end={20} />+</h2>
												<div className="space18" />
                                                <p>Awardees across the GCC</p>
											</div>
										</div>
										<div className="space32" />
										<div className="btn-area1" data-aos="fade-left" data-aos-duration={1200}>
											<Link href="/contact" className="vl-btn1">Become an Attendee</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== ABOUT AREA ENDS =======*/}

                    {/*===== ABOUT THE EVENT (TEXT) STARTS =======*/}
                    <div className="about-text-section sp2" style={{backgroundImage: 'url(/assets/img/bg/header-bg4.png)', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative'}}>
                        {/* Left Top Image - Desktop Only */}
                        <div className="d-none d-lg-block" style={{position: 'absolute', top: '40px', left: '40px', width: '150px', height: '150px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 20px rgba(0,0,0,0.3)', zIndex: 2}}>
                            <img src="/assets/img/all-images/used-images/A4.jpg" alt="" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                        </div>
                        
                        {/* Right Bottom Image - Desktop Only */}
                        <div className="d-none d-lg-block" style={{position: 'absolute', bottom: '40px', right: '40px', width: '150px', height: '150px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 20px rgba(0,0,0,0.3)', zIndex: 2}}>
                            <img src="/assets/img/all-images/used-images/A31.jpg" alt="" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                        </div>
                        
                        <div className="container" style={{position: 'relative', zIndex: 3}}>
                            <div className="row">
                                <div className="col-lg-10 m-auto">
                                    <div className="heading2 text-center    ">
                                        <h5 style={{color: 'white'}}>About the Event</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-10 m-auto">
                                    <div className="choose-widget-boxarea">
                                        <div className="content-area heading2" style={{textAlign: 'center'}}>
                                            <p style={{color: 'white', fontSize: '30px', lineHeight: '1.6', fontWeight: '400'}}>Women Leading Change Conference & Awards 2026 is a one-day transformative experience giving you exclusive access to the region's most influential HR leaders, changemakers, and vision-driven women who are reshaping workplaces across the GCC. Learn from their journeys, insights, and strategies — so you can accelerate your growth, avoid the challenges they've overcome, and lead with confidence, inclusion, and purpose in the new era of HR leadership</p>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== ABOUT THE EVENT (TEXT) ENDS =======*/}
					{/*===== OTHERS AREA STARTS =======*/}
					<div className="brands3-section-area sp2">
						<div className="container">
							<div className="row">
								<div className="col-lg-7 m-auto">
									<div className="brand-header heading4 space-margin60 text-center">
                                        <h3>Be part of the region’s most forward-thinking companies shaping the future of work.</h3>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-12" data-aos="zoom-in" data-aos-duration={800}>
									<BrandSlider />
								</div>
							</div>
						</div>
					</div>
					{/*===== OTHERS AREA ENDS =======*/}
                    {/*===== WHY ATTEND AREA STARTS =======*/}
					<div className="choose-section-area sp2">
						<div className="container">
							<div className="row">
                                <div className=" m-auto">
									<div className="heading2 text-center space-margin60">
                                        <h2 style={{fontSize: '32px', lineHeight: '40px'}}>Why Attend the Event?</h2>
									</div>
								</div>
							</div>
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-md-6 d-flex mb-5">
                                    <div className="choose-widget-boxarea h-100 w-100 text-center" style={{
                                        border: '3px solid transparent',
                                        backgroundImage: 'linear-gradient(white, white), linear-gradient(90deg, #1a0b3d 0%, #4a1a5c 25%, #7d2a7f 50%, #b4428e 75%, #ff69b4 100%)',
                                        backgroundOrigin: 'border-box',
                                        backgroundClip: 'padding-box, border-box'
                                    }}>
										<div className="space24" />
                                        <h2 style={{fontSize: '64px', fontWeight: 'bold', color: '#C9A545', margin: '0'}}>92%</h2>
										<div className="space24" />
										<div className="content-area">
                                            <p>of past participants said the conference expanded their professional network and visibility across the GCC.</p>
										</div>
									</div>
								</div>
								
                                <div className="col-lg-4 col-md-6 d-flex mb-5">
                                    <div className="choose-widget-boxarea h-100 w-100 text-center" style={{
                                        border: '3px solid transparent',
                                        backgroundImage: 'linear-gradient(white, white), linear-gradient(90deg, #1a0b3d 0%, #4a1a5c 25%, #7d2a7f 50%, #b4428e 75%, #ff69b4 100%)',
                                        backgroundOrigin: 'border-box',
                                        backgroundClip: 'padding-box, border-box'
                                    }}>
										<div className="space24" />
                                        <h2 style={{fontSize: '64px', fontWeight: 'bold', color: '#C9A545', margin: '0'}}>89%</h2>
										<div className="space24" />
										<div className="content-area">
                                            <p>discovered practical HR strategies they could immediately apply to drive organizational growth and inclusion.</p>
										</div>
									</div>
								</div>
                                
                                <div className="col-lg-4 col-md-6 d-flex mb-5">
                                    <div className="choose-widget-boxarea h-100 w-100 text-center" style={{
                                        border: '3px solid transparent',
                                        backgroundImage: 'linear-gradient(white, white), linear-gradient(90deg, #1a0b3d 0%, #4a1a5c 25%, #7d2a7f 50%, #b4428e 75%, #ff69b4 100%)',
                                        backgroundOrigin: 'border-box',
                                        backgroundClip: 'padding-box, border-box'
                                    }}>
										<div className="space24" />
                                        <h2 style={{fontSize: '64px', fontWeight: 'bold', color: '#C9A545', margin: '0'}}>95%</h2>
										<div className="space24" />
										<div className="content-area">
                                            <p>felt inspired and more confident to step into senior leadership roles and champion change within their organizations.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
                    {/*===== WHY ATTEND AREA ENDS =======*/}
					{/*===== CTA AREA STARTS =======*/}
					<div className="cta1-section-area d-lg-block d-block">
						<div className="container">
							<div className="row">
								<div className="col-lg-10 m-auto">
									<div className="cta1-main-boxarea">
										<div className="timer-btn-area">
											<Countdown />
											<div className="btn-area1">
												<Link href="/pricing-plan" className="vl-btn1">Buy Ticket</Link>
											</div>
										</div>
										<ul>
											<li>
												<Link href="/#"><img src="/assets/img/icons/calender1.svg" alt="" />20 January 2026</Link>
											</li>
											<li className="m-0">
												<Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" />Riyadh, Saudi Arabia</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== CTA AREA ENDS =======*/}
					{/*===== CTA AREA STARTS =======*/}
					{/* <div className="cta1-section-area d-lg-none d-block">
						<div className="container">
							<div className="row">
								<div className="col-lg-10 m-auto">
									<div className="cta1-main-boxarea">
										<div className="timer-btn-area">
											<Countdown />
											<div className="btn-area1">
												<Link href="/pricing-plan" className="vl-btn1">Buy Ticket</Link>
											</div>
										</div>
										<ul>
											<li>
												<Link href="/#"><img src="/assets/img/icons/calender1.svg" alt="" />20 January 2026</Link>
											</li>
											<li className="m-0">
												<Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" />Riyadh, Saudi Arabia</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div> */}
				</div>

			</Layout>
		</>
	)
}