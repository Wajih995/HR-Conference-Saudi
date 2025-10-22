'use client'
import { useState } from 'react'
import CountUp from 'react-countup'
import Countdown from '@/components/elements/Countdown'
import Layout from "@/components/layout/Layout"
import BrandSlider from '@/components/slider/BrandSlider'
import NominationModal from '@/components/layout/NominationModal'
import Link from "next/link"
// Function to create laurel wreath with text
const LaurelWreathWithText = ({ title, fontSize = '16px' }: { title: string, fontSize?: string }) => {
	const lines = title.split(',');
	return (
		<div style={{position: 'relative', display: 'inline-block'}}>
			<img src="/assets/img/icons/laurel-wreath.svg" alt="" style={{width: '300px', height: '260px', filter: 'brightness(0) invert(1)'}} />
			<div style={{position: 'absolute', top: '44%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', textAlign: 'center'}}>
				<div style={{color: '#C9A545', fontSize, fontWeight: 'bold', fontFamily: 'Arial, sans-serif', lineHeight: '1.2'}}>
					{lines.map((line, index) => (
						<div key={index}>{line}</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default function Awards() {
	const [isModalOpen, setIsModalOpen] = useState(false)

	return (
		<>

			<Layout headerStyle={3} footerStyle={1}>
				<div>
					<div className="inner-page-header" style={{ backgroundImage: 'url(assets/img/bg/header-bg5.png)' }}>
						<div className="container">
							<div className="row">
								<div className="col-lg-4 m-auto">
									<div className="heading1 text-center">
										<h1>Awards</h1>
										<div className="space20" />
										<Link href="/">Home <i className="fa-solid fa-angle-right" /> <span>Awards</span></Link>
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
								<div className="col-lg-12">
									<div className="about-header-area heading2 text-center">
										<h5 data-aos="fade-left" data-aos-duration={800}>About Our Awards</h5>
										<div className="space16" />
										<h2 className="text-anime-style-3">Recognizing HR Women Leading Change Across GCC</h2>
										<div className="space16" />
										<p data-aos="fade-left" data-aos-duration={900}>Our awards platform recognizes trailblazing HR leaders and teams who drive inclusion, equity, and sustainable performance. Entries are evaluated on measurable outcomes, leadership impact, and alignment with Vision 2030. Categories span leadership excellence, DEI innovation, talent strategy, culture transformation, and more. Nominate outstanding leaders who are shaping the future of work across the GCC.</p>
										<div className="space32" />
										<div className="about-counter-area text-center" style={{justifyContent: 'center'}}>
											<div className="counter-box">
												<h2><CountUp className="odometer" enableScrollSpy={true} end={100} />+</h2>
												<div className="space18" />
												<p style={{color: 'white'}}>Award Submissions</p>
											</div>
											<div className="counter-box box2">
												<h2><CountUp className="odometer" enableScrollSpy={true} end={80} />+</h2>
												<div className="space18" />
												<p style={{color: 'white'}}>Attendees </p>
											</div>
											<div className="counter-box box2">
												<h2><CountUp className="odometer" enableScrollSpy={true} end={15} />+</h2>
												<div className="space18" />
												<p style={{color: 'white'}}>Expert Judges</p>
											</div>
                                            <div className="counter-box box2">
												<h2><CountUp className="odometer" enableScrollSpy={true} end={20} />+</h2>
												<div className="space18" />
												<p style={{color: 'white'}}>Award Categories</p>
											</div>
                                            <div className="counter-box box3" style={{ border: 'none' }}>
												<h2><CountUp className="odometer" enableScrollSpy={true} end={1} /></h2>
												<div className="space18" />
												<p style={{color: 'white'}}>Exciting Evening</p>
											</div>
										</div>
									<div className="space32" />
									<div className="btn-area1" data-aos="fade-left" data-aos-duration={1200}>
										<button onClick={() => setIsModalOpen(true)} className="vl-btn1" style={{ border: 'none', cursor: 'pointer' }}>Submit Nomination</button>
									</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== ABOUT AREA ENDS =======*/}

                    {/*===== WHY BE PART SECTION STARTS =======*/}
                    <div className="choose-section-area sp2 brands3-section-area">
                        <div className="container">
                            <div className="row">
                                <div className=" m-auto">
                                    <div className="heading2 text-center space-margin60">
                                        <h2 style={{fontSize: '32px', lineHeight: '40px'}}>Why Be Part of Women Leadership Awards 2026</h2>
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
                                            <Link href="/#">Showcase Your Leadership</Link>
                                            <div className="space16" />
                                            <p>Being part of the Women Leadership in HR Awards 2026 positions your brand as a champion of inclusion, equity, and innovation. It highlights your commitment to empowering women in leadership and enhances your visibility across leading media and industry platforms.</p>
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
                                            <Link href="/#">Recognize & Inspire Your Team</Link>
                                            <div className="space16" />
                                            <p>Submitting nominations is an excellent way to celebrate and honor the women driving transformation within your organization. It boosts morale, showcases achievements, and demonstrates that you value leadership growth, diversity, and future-focused HR practices.</p>
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
                                            <Link href="/#">Celebrate Excellence Together</Link>
                                            <div className="space16" />
                                            <p>Join industry leaders, senior HR professionals, and decision-makers from across the GCC in an inspiring evening dedicated to celebrating women shaping the future of work. It’s an unmatched opportunity to network, share insights, and learn from the best.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== WHY BE PART SECTION ENDS =======*/}

					{/*===== DEADLINES TIMELINE STARTS =======*/}
					<div className="sp2">
						<div className="container">
							<div className="row">
								<div className="col-lg-4 m-auto">
									<div className="heading2 text-center space-margin60">
										<h5>Deadlines</h5>
									</div>
								</div>
							</div>
                            {/* Desktop timeline (alternating cards) */}
                            <div className="d-none d-lg-block mt-5" style={{position:'relative', paddingTop:120, paddingBottom:120}}>
                                <div style={{position:'absolute', left:0, right:0, top:'50%', height:4, background:'rgb(160 15 161)', borderRadius:2}} />
                                <div className="row text-center">
                                    {/* 01 - above the line */}
                                    <div className="col-lg-3" style={{position:'relative'}}>
                                        <div style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)', width:18, height:18, borderRadius:'50%', background:'#C9A545', border:'4px solid #0B0B0B'}} />
                                        <div style={{position:'absolute', top:'calc(50% - 80px)', left:'50%', transform:'translateX(-50%)', width:2, height:80, background:'#0B0B0B'}} />
                                        <div className="choose-widget-boxarea" style={{position:'absolute', top:'calc(50% - 145px)', left:'50%', transform:'translateX(-50%)', width:260, fontSize: '14px'}}>
                                            <h5>01</h5>
                                            <h4 style={{fontSize: '20px',}}>Applications Open</h4>
                                            <p>1st November 2025</p>
                                        </div>
                                    </div>
                                    {/* 02 - below the line */}
                                    <div className="col-lg-3" style={{position:'relative'}}>
                                        <div style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)', width:18, height:18, borderRadius:'50%', background:'#C9A545', border:'4px solid #0B0B0B'}} />
                                        <div style={{position:'absolute', top:'50%', left:'50%', transform:'translateX(-50%)', width:2, height:80, background:'#0B0B0B'}} />
                                        <div className="choose-widget-boxarea" style={{position:'absolute', bottom:'calc(50% - 170px)', left:'50%', transform:'translateX(-50%)', width:260, fontSize: '14px'}}>
                                            <h5>02</h5>
                                            <h4 style={{fontSize: '20px',}}>Nomination Form Submission Deadline</h4>
                                            <p>5 January 2026</p>
                                        </div>
                                    </div>
                                    {/* 03 - above the line */}
                                    <div className="col-lg-3" style={{position:'relative'}}>
                                        <div style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)', width:18, height:18, borderRadius:'50%', background:'#C9A545', border:'4px solid #0B0B0B'}} />
                                        <div style={{position:'absolute', top:'calc(50% - 80px)', left:'50%', transform:'translateX(-50%)', width:2, height:80, background:'#0B0B0B'}} />
                                        <div className="choose-widget-boxarea" style={{position:'absolute', top:'calc(50% - 145px)', left:'50%', transform:'translateX(-50%)', width:260, fontSize: '14px'}}>
                                            <h5>03</h5>
                                            <h4 style={{fontSize: '20px',}}>Jury Selection</h4>
                                            <p>20th January 2026</p>
                                        </div>
                                    </div>
                                    {/* 04 - below the line */}
                                    <div className="col-lg-3" style={{position:'relative'}}>
                                        <div style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)', width:18, height:18, borderRadius:'50%', background:'#C9A545', border:'4px solid #0B0B0B'}} />
                                        <div style={{position:'absolute', top:'50%', left:'50%', transform:'translateX(-50%)', width:2, height:80, background:'#0B0B0B'}} />
                                        <div className="choose-widget-boxarea" style={{position:'absolute', bottom:'calc(50% - 150px)', left:'50%', transform:'translateX(-50%)', width:260, fontSize: '14px'}}>
                                            <h5>04</h5>
                                            <h4 style={{fontSize: '20px',}}>Awards Ceremony</h4>
                                            <p>20th January 2026</p>
                                        </div>
                                    </div>
                                </div>
                                {/* end arrow */}
                                <div style={{position:'absolute', right:-6, top:'calc(50% - 10px)', width:0, height:0, borderTop:'10px solid transparent', borderBottom:'10px solid transparent', borderLeft:'14px solid #0B0B0B'}} />
                            </div>
							{/* Mobile stacked */}
							<div className="d-lg-none">
								<div className="row">
									<div className="col-12 mb-3">
										<div className="choose-widget-boxarea text-center">
											<h5>01</h5>
											<h4>Applications Open</h4>
											<p style={{color: 'white'}}>1st November 2025</p>
										</div>
									</div>
									<div className="col-12 mb-3">
										<div className="choose-widget-boxarea text-center">
											<h5>02</h5>
											<h4>Nomination Form Submission Deadline</h4>
											<p style={{color: 'white'}}>5 January 2026</p>
										</div>
									</div>
									<div className="col-12 mb-3">
										<div className="choose-widget-boxarea text-center">
											<h5>03</h5>
											<h4>Jury Selection</h4>
											<p style={{color: 'white'}}>20th January 2026</p>
										</div>
									</div>
									<div className="col-12">
										<div className="choose-widget-boxarea text-center">
											<h5>04</h5>
											<h4>Awards Ceremony</h4>
											<p style={{color: 'white'}}>20th January 2026</p>
										</div>
									</div>
								</div>
							</div>
                        </div>
                        </div>
					{/*===== DEADLINES TIMELINE ENDS =======*/}

					{/*===== AWARDS CATEGORIES STARTS =======*/}
					<div className="sp2 brands3-section-area">
						<div className="container">
							<div className="row">
								<div className="col-lg-8 m-auto">
									<div className="heading2 text-center space-margin60">
										<h5>Awards Categories</h5>
										<div className="space18" />
										<h2 className="text-anime-style-3">Celebrating Excellence in HR Leadership</h2>
										<div className="space16" />
										<p>The Women Leadership in HR Awards 2026 celebrate the outstanding achievements and contributions of women shaping the future of work across the GCC. These awards recognise visionary leadership, innovation, inclusion, and impact across multiple categories — honoring those who are breaking barriers, driving transformation, and redefining the HR landscape in alignment with Saudi Vision 2030.</p>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-3 col-md-6 mb-4">
									<div className="choose-widget-boxarea text-center h-100" style={{backgroundImage: 'url(/assets/img/bg/header-bg4.png)', backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', padding: '32px 24px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)'}}>
										<div className="icons" style={{marginBottom: '20px', position: 'relative'}}>
											<LaurelWreathWithText title="BEST DIVERSITY INCLUSION STRATEGY" fontSize="16px" />
										</div>
										<div className="content-area">
											<p style={{color: 'white', fontSize: '14px', lineHeight: '1.5', margin: '0', opacity: '0.9'}}>Honours initiatives that successfully foster diverse, equitable, and inclusive workplaces.</p>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 mb-4">
									<div className="choose-widget-boxarea text-center h-100" style={{backgroundImage: 'url(/assets/img/bg/header-bg4.png)', backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', padding: '32px 24px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)'}}>
										<div className="icons" style={{marginBottom: '20px', position: 'relative'}}>
											<LaurelWreathWithText title="BEST EMPLOYEE ENGAGEMENT STRATEGY" fontSize="16px" />
										</div>
										<div className="content-area">
											<p style={{color: 'white', fontSize: '14px', lineHeight: '1.5', margin: '0', opacity: '0.9'}}>Celebrates innovative strategies that significantly enhance employee motivation and satisfaction.</p>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 mb-4">
									<div className="choose-widget-boxarea text-center h-100" style={{backgroundImage: 'url(/assets/img/bg/header-bg4.png)', backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', padding: '32px 24px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)'}}>
										<div className="icons" style={{marginBottom: '20px', position: 'relative'}}>
											<LaurelWreathWithText title="BEST EMPLOYEE WELLBEING PROGRAMME" fontSize="16px" />
										</div>
										<div className="content-area">
											<p style={{color: 'white', fontSize: '14px', lineHeight: '1.5', margin: '0', opacity: '0.9'}}>Recognizes organizations that prioritize holistic employee wellness and support.</p>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 mb-4">
									<div className="choose-widget-boxarea text-center h-100" style={{backgroundImage: 'url(/assets/img/bg/header-bg4.png)', backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', padding: '32px 24px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)'}}>
										<div className="icons" style={{marginBottom: '20px', position: 'relative'}}>
											<LaurelWreathWithText title="BEST EXECUTIVE ,&, LEADERSHIP DEVELOPMENT" fontSize="16px" />
										</div>
										<div className="content-area">
											<p style={{color: 'white', fontSize: '14px', lineHeight: '1.5', margin: '0', opacity: '0.9'}}>Awards organizations with outstanding programs designed to nurture leadership capabilities.</p>

										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 mb-4">
									<div className="choose-widget-boxarea text-center h-100" style={{backgroundImage: 'url(/assets/img/bg/header-bg4.png)', backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', padding: '32px 24px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)'}}>
										<div className="icons" style={{marginBottom: '20px', position: 'relative'}}>
											<LaurelWreathWithText title="BEST HR TECHNOLOGY IMPLEMENTATION" fontSize="16px" />
										</div>
										<div className="content-area">
											<p style={{color: 'white', fontSize: '14px', lineHeight: '1.5', margin: '0', opacity: '0.9'}}>Acknowledges organizations that leverage cutting-edge HR technology to enhance processes.</p>

										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 mb-4">
									<div className="choose-widget-boxarea text-center h-100" style={{backgroundImage: 'url(/assets/img/bg/header-bg4.png)', backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', padding: '32px 24px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)'}}>
										<div className="icons" style={{marginBottom: '20px', position: 'relative'}}>
											<LaurelWreathWithText title="BEST HR TRANSFORMATION STRATEGY" fontSize="16px" />
										</div>
										<div className="content-area">
											<p style={{color: 'white', fontSize: '14px', lineHeight: '1.5', margin: '0', opacity: '0.9'}}>Honours strategic initiatives that redefine HR functions, processes, and culture.</p>

										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 mb-4">
									<div className="choose-widget-boxarea text-center h-100" style={{backgroundImage: 'url(/assets/img/bg/header-bg4.png)', backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', padding: '32px 24px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)'}}>
										<div className="icons" style={{marginBottom: '20px', position: 'relative'}}>
											<LaurelWreathWithText title="BEST FLEXIBLE WORKING, INITIATIVE" fontSize="16px" />
										</div>
										<div className="content-area">
											<p style={{color: 'white', fontSize: '14px', lineHeight: '1.5', margin: '0', opacity: '0.9'}}>Celebrates forward-thinking approaches to flexible work that balance organizational needs.</p>

										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 mb-4">
									<div className="choose-widget-boxarea text-center h-100" style={{backgroundImage: 'url(/assets/img/bg/header-bg4.png)', backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', padding: '32px 24px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)'}}>
										<div className="icons" style={{marginBottom: '20px', position: 'relative'}}>
											<LaurelWreathWithText title="BEST INNOVATIVE ,HR INITIATIVE" fontSize="16px" />
										</div>
										<div className="content-area">
											<p style={{color: 'white', fontSize: '14px', lineHeight: '1.5', margin: '0', opacity: '0.9'}}>Honours pioneering ideas reshaping HR practices and delivering measurable results.</p>

										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 mb-4">
									<div className="choose-widget-boxarea text-center h-100" style={{backgroundImage: 'url(/assets/img/bg/header-bg4.png)', backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', padding: '32px 24px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)'}}>
										<div className="icons" style={{marginBottom: '20px', position: 'relative'}}>
											<LaurelWreathWithText title="BEST L&D ,INITIATIVE, (PRIVATE SECTOR)" fontSize="16px" />
										</div>
										<div className="content-area">
											<p style={{color: 'white', fontSize: '14px', lineHeight: '1.5', margin: '0', opacity: '0.9'}}>Awards impactful learning and development initiatives that upskill and empower employees.</p>

										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 mb-4">
									<div className="choose-widget-boxarea text-center h-100" style={{backgroundImage: 'url(/assets/img/bg/header-bg4.png)', backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', padding: '32px 24px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)'}}>
										<div className="icons" style={{marginBottom: '20px', position: 'relative'}}>
											<LaurelWreathWithText title="BEST ,RECRUITMENT, & ONBOARDING STRATEGY" fontSize="16px" />
										</div>
										<div className="content-area">
											<p style={{color: 'white', fontSize: '14px', lineHeight: '1.5', margin: '0', opacity: '0.9'}}>Celebrates exceptional recruitment and onboarding practices that attract top talent.</p>

										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 mb-4">
									<div className="choose-widget-boxarea text-center h-100" style={{backgroundImage: 'url(/assets/img/bg/header-bg4.png)', backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', padding: '32px 24px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)'}}>
										<div className="icons" style={{marginBottom: '20px', position: 'relative'}}>
											<LaurelWreathWithText title="BEST REWARDS & RECOGNITION STRATEGY" fontSize="16px" />
										</div>
										<div className="content-area">
											<p style={{color: 'white', fontSize: '14px', lineHeight: '1.5', margin: '0', opacity: '0.9'}}>Acknowledges outstanding reward and recognition programs that motivate employees.</p>

										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 mb-4">
									<div className="choose-widget-boxarea text-center h-100" style={{backgroundImage: 'url(/assets/img/bg/header-bg4.png)', backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', padding: '32px 24px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)'}}>
										<div className="icons" style={{marginBottom: '20px', position: 'relative'}}>
											<LaurelWreathWithText title="BEST SOCIAL IMPACT INITIATIVE" fontSize="16px" />
										</div>
										<div className="content-area">
											<p style={{color: 'white', fontSize: '14px', lineHeight: '1.5', margin: '0', opacity: '0.9'}}>Honours organizations delivering significant social change through HR-driven initiatives.</p>

										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 mb-4">
									<div className="choose-widget-boxarea text-center h-100" style={{backgroundImage: 'url(/assets/img/bg/header-bg4.png)', backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', padding: '32px 24px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)'}}>
										<div className="icons" style={{marginBottom: '20px', position: 'relative'}}>
											<LaurelWreathWithText title="BEST TALENT MANAGEMENT STRATEGY" fontSize="16px" />
										</div>
										<div className="content-area">
											<p style={{color: 'white', fontSize: '14px', lineHeight: '1.5', margin: '0', opacity: '0.9'}}>Celebrates comprehensive strategies that effectively attract, develop, and retain talent.</p>

										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 mb-4">
									<div className="choose-widget-boxarea text-center h-100" style={{backgroundImage: 'url(/assets/img/bg/header-bg4.png)', backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', padding: '32px 24px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)'}}>
										<div className="icons" style={{marginBottom: '20px', position: 'relative'}}>
											<LaurelWreathWithText title="BEST WOMEN IN LEADERSHIP DEVELOPMENT" fontSize="16px" />
										</div>
										<div className="content-area">
											<p style={{color: 'white', fontSize: '14px', lineHeight: '1.5', margin: '0', opacity: '0.9'}}>Recognizes initiatives dedicated to advancing women into leadership roles.</p>

										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 mb-4">
									<div className="choose-widget-boxarea text-center h-100" style={{backgroundImage: 'url(/assets/img/bg/header-bg4.png)', backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', padding: '32px 24px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)'}}>
										<div className="icons" style={{marginBottom: '20px', position: 'relative'}}>
											<LaurelWreathWithText title="CHRO, OF THE YEAR" fontSize="16px" />
										</div>
										<div className="content-area">
											<p style={{color: 'white', fontSize: '14px', lineHeight: '1.5', margin: '0', opacity: '0.9'}}>Honours an exceptional Chief Human Resources Officer demonstrating visionary leadership.</p>

										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 mb-4">
									<div className="choose-widget-boxarea text-center h-100" style={{backgroundImage: 'url(/assets/img/bg/header-bg4.png)', backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', padding: '32px 24px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)'}}>
										<div className="icons" style={{marginBottom: '20px', position: 'relative'}}>
											<LaurelWreathWithText title="EMPLOYER OF THE YEAR" fontSize="16px" />
										</div>
										<div className="content-area">
											<p style={{color: 'white', fontSize: '14px', lineHeight: '1.5', margin: '0', opacity: '0.9'}}>Celebrates organizations that set new benchmarks for workplace excellence.</p>

										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 mb-4">
									<div className="choose-widget-boxarea text-center h-100" style={{backgroundImage: 'url(/assets/img/bg/header-bg4.png)', backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', padding: '32px 24px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)'}}>
										<div className="icons" style={{marginBottom: '20px', position: 'relative'}}>
											<LaurelWreathWithText title="HR TEAM OF THE YEAR" fontSize="16px" />
										</div>
										<div className="content-area">
											<p style={{color: 'white', fontSize: '14px', lineHeight: '1.5', margin: '0', opacity: '0.9'}}>Honours collaborative HR teams delivering exceptional results across people strategy.</p>

										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 mb-4">
									<div className="choose-widget-boxarea text-center h-100" style={{backgroundImage: 'url(/assets/img/bg/header-bg4.png)', backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', padding: '32px 24px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)'}}>
										<div className="icons" style={{marginBottom: '20px', position: 'relative'}}>
											<LaurelWreathWithText title="HR'S RISING STAR OF THE YEAR" fontSize="16px" />
										</div>
										<div className="content-area">
											<p style={{color: 'white', fontSize: '14px', lineHeight: '1.5', margin: '0', opacity: '0.9'}}>Recognizes an emerging HR professional making significant contributions early in their career.</p>

										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 mb-4">
									<div className="choose-widget-boxarea text-center h-100" style={{backgroundImage: 'url(/assets/img/bg/header-bg4.png)', backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', padding: '32px 24px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)'}}>
										<div className="icons" style={{marginBottom: '20px', position: 'relative'}}>
											<LaurelWreathWithText title="DEI, CHANGEMAKER AWARD" fontSize="16px" />
										</div>
										<div className="content-area">
											<p style={{color: 'white', fontSize: '14px', lineHeight: '1.5', margin: '0', opacity: '0.9'}}>Honours individuals or teams driving meaningful diversity, equity, and inclusion impact.</p>

										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 mb-4">
									<div className="choose-widget-boxarea text-center h-100" style={{backgroundImage: 'url(/assets/img/bg/header-bg4.png)', backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', padding: '32px 24px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)'}}>
										<div className="icons" style={{marginBottom: '20px', position: 'relative'}}>
											<LaurelWreathWithText title="PEOPLE, ANALYTICS LEADER" fontSize="16px" />
										</div>
										<div className="content-area">
											<p style={{color: 'white', fontSize: '14px', lineHeight: '1.5', margin: '0', opacity: '0.9'}}>Celebrates excellence in leveraging data and analytics for strategic HR decisions.</p>

										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== AWARDS CATEGORIES ENDS =======*/}

					{/*===== BRANDS =======*/}
					{/* <div className="">
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
					</div> */}
					{/*===== BRANDS ENDS =======*/}

					{/*===== CTA AREA STARTS =======*/}
					<div className="cta1-section-area d-lg-block d-block">
						<div className="container">
							<div className="row">
								<div className="col-lg-10 m-auto">
									<div className="cta1-main-boxarea">
										<div className="timer-btn-area">
											<Countdown />
											<div className="btn-area1">
												<button onClick={() => setIsModalOpen(true)} className="vl-btn1" style={{ border: 'none', cursor: 'pointer' }}>Submit Nomination</button>
											</div>
										</div>
										<ul>
											<li>
												<Link href="/#"><img src="/assets/img/icons/calender1.svg" alt="" />30 January 2026 - 6pm to 11:30pm</Link>
											</li>
											<li className="m-0">
												<Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" />[City], Saudi Arabia</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== CTA AREA ENDS =======*/}
				</div>

			</Layout>

			<NominationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
		</>
	)
}


