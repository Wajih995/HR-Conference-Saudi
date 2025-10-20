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
					<div className="inner-page-header" style={{ backgroundImage: 'url(assets/img/bg/header-bg5.png)' }}>
						<div className="container">
							<div className="row">
								<div className="col-lg-4 m-auto">
									<div className="heading1 text-center">
										<h1>About Event</h1>
										<div className="space20" />
										<Link href="/">Home <i className="fa-solid fa-angle-right" /> <span>About Us</span></Link>
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
											<img src="/assets/img/all-images/about/about-img1.png" alt="" />
										</div>
										<div className="row">
											<div className="col-lg-6 col-md-6">
												<div className="space30" />
												<div className="img1 reveal image-anime">
													<img src="/assets/img/all-images/about/about-img2.png" alt="" />
												</div>
											</div>
											<div className="col-lg-6 col-md-6">
												<div className="space30" />
												<div className="img1 reveal image-anime">
													<img src="/assets/img/all-images/about/about-img3.png" alt="" />
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
                                        <p data-aos="fade-left" data-aos-duration={900}>Explore the Future of HR Leadership at our flagship annual conference — a premier platform dedicated to empowering women leaders and transforming workplaces across the GCC. The HR Women Leadership Conference & Awards 2026 is designed to inspire, challenge, and redefine how organizations approach inclusion, equity, leadership, and talent development. From building resilient workplaces and advancing DEI strategies to aligning people practices with Saudi Vision 2030, this event brings together the brightest minds shaping the future of HR.</p>
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
                    <div className="about-text-section sp2">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 m-auto">
                                    <div className="heading2 text-center space-margin60">
                                        <h5>About the Event</h5>
                                        <div className="space18" />
                                        <h2 className="text-anime-style-3" style={{fontSize: '32px', lineHeight: '40px'}}>Women Leading Change: Inclusive, Resilient & Vision-Driven HR in the GCC</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-10 m-auto">
                                    <div className="choose-widget-boxarea">
                                        <div className="content-area heading2">
                                            <p>Women Leading Change: Inclusive, Resilient & Vision-Driven HR in the GCC is a pioneering leadership conference and awards platform dedicated to celebrating and empowering women shaping the future of Human Resources in the Gulf region.</p>
                                            <div className="space16" />
                                            <p>Taking place in January 2026 in [City, Saudi Arabia], this one-of-a-kind event brings together visionary CHROs, HR Directors, People Leaders, policymakers, and industry pioneers who are transforming workplaces and rewriting leadership narratives across the GCC.</p>
                                            <div className="space16" />
                                            <p>Anchored in the principles of Saudi Vision 2030, the conference spotlights how women leaders are driving organizational transformation, championing inclusive cultures, and breaking long-standing barriers in male-dominated industries. Through insightful keynotes, high-impact panel discussions, case studies, and strategic networking, we explore the evolving role of HR as a driver of business resilience, equity, and innovation.</p>
                                            <div className="space16" />
                                            <p>From pay equity to maternity acceleration, from measurable DEI outcomes to next-generation leadership pipelines — this platform isn’t just about dialogue, it’s about actionable strategies, real-world impact, and future-ready HR leadership.</p>
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
                                        <h5 >Why Attend the Event?</h5>
                                        <div className="space18" />
                                        <h2 style={{fontSize: '32px', lineHeight: '40px'}}>Women Leading Change: Inclusive, Resilient & Vision-Driven HR</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 d-flex mb-5">
                                    <div className="choose-widget-boxarea h-100 w-100">
                                        <div className="icons">
                                            <img src="/assets/img/icons/choose-icons1.svg" alt="" />
                                        </div>
                                        <div className="space24" />
                                        <div className="content-area">
                                            <Link href="/#">Join Movement</Link>
                                            <div className="space16" />
                                            <p>Be part of a regional platform driving women-led HR transformation and leadership change.</p>
                                        </div>
                                    </div>
                                </div>
								
                                <div className="col-lg-4 col-md-6 d-flex mb-5">
                                    <div className="choose-widget-boxarea h-100 w-100">
                                        <div className="icons">
                                            <img src="/assets/img/icons/choose-icons1.svg" alt="" />
                                        </div>
                                        <div className="space24" />
                                        <div className="content-area">
                                            <Link href="/#">Learn Leaders</Link>
                                            <div className="space16" />
                                            <p>Hear from top CHROs and experts sharing innovative strategies shaping future workplaces.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 d-flex mb-5">
                                    <div className="choose-widget-boxarea h-100 w-100">
                                        <div className="icons">
                                            <img src="/assets/img/icons/choose-icons1.svg" alt="" />
                                        </div>
                                        <div className="space24" />
                                        <div className="content-area">
                                            <Link href="/#">Gain Strategies</Link>
                                            <div className="space16" />
                                            <p>Access proven frameworks to advance equity, leadership pipelines, inclusion, and measurable DEI outcomes.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 d-flex mb-5">
                                    <div className="choose-widget-boxarea h-100 w-100">
                                        <div className="icons">
                                            <img src="/assets/img/icons/choose-icons1.svg" alt="" />
                                        </div>
                                        <div className="space24" />
                                        <div className="content-area">
                                            <Link href="/#">Build Networks</Link>
                                            <div className="space16" />
                                            <p>Connect with HR leaders, policymakers, and decision-makers shaping inclusive, future-ready organizations.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 d-flex mb-5">
                                    <div className="choose-widget-boxarea h-100 w-100">
                                        <div className="icons">
                                            <img src="/assets/img/icons/choose-icons1.svg" alt="" />
                                        </div>
                                        <div className="space24" />
                                        <div className="content-area">
                                            <Link href="/#">Celebrate Leaders</Link>
                                            <div className="space16" />
                                            <p>Honor women breaking barriers and transforming HR through impactful leadership and innovation.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 d-flex mb-5">
                                    <div className="choose-widget-boxarea h-100 w-100">
                                        <div className="icons">
                                            <img src="/assets/img/icons/choose-icons1.svg" alt="" />
                                        </div>
                                        <div className="space24" />
                                        <div className="content-area">
                                            <Link href="/#">Shape Future</Link>
                                            <div className="space16" />
                                            <p>Contribute to discussions defining the GCC’s future of work aligned with Vision 2030.</p>
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
												<Link href="/#"><img src="/assets/img/icons/calender1.svg" alt="" />30 January 2025 - 6pm to 11:30pm</Link>
											</li>
											<li className="m-0">
												<Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" />Secret Location In The UK</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== CTA AREA ENDS =======*/}
					{/*===== CTA AREA STARTS =======*/}
					<div className="cta1-section-area d-lg-none d-block">
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
												<Link href="/#"><img src="/assets/img/icons/calender1.svg" alt="" />30 January 2025 - 6pm to 11:30pm</Link>
											</li>
											<li className="m-0">
												<Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" />Secret Location In The UK</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</Layout>
		</>
	)
}