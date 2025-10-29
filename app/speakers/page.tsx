
import Countdown from '@/components/elements/Countdown'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Speakers() {

	return (
		<>

			<Layout headerStyle={3} footerStyle={3}>
				<div>
					<div className="inner-page-header" style={{ backgroundImage: 'url(assets/img/all-images/used-images/speakers-banner.jpg)' }}>
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
										<h1 style={{ color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>Speakers and Guests</h1>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== HERO AREA ENDS =======*/}
					{/*===== AMBASSADORS AREA STARTS =======*/}
					<div className="team-sperkers-section-area sp1">
						<div className="container">
							<div className="row">
								<div className="col-lg-8 m-auto">
									<div className="heading2 text-center space-margin60">
										<h5>Event Ambassadors</h5>
										<div className="space18" />
										<h2>Meet Our Distinguished Ambassadors</h2>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-3 col-md-6">
									<div className="our-team-boxarea">
										<div className="team-widget-area">
											<img src="/assets/img/elements/elements25.png" alt="" className="elements21" />
											<img src="/assets/img/elements/elements26.png" alt="" className="elements22" />
											<div className="img1">
												<img src="/assets/img/all-images/team/team-img12.png" alt="" className="team-img4" />
												<div className="share">
													<Link href="/#"><i className="fa-brands fa-linkedin-in" /></Link>
												</div>
											</div>
										</div>
										<div className="space28" />
										<div className="content-area">
											<Link href="/speakers-single">Sarah Al-Mansouri</Link>
											<div className="space16" />
											<p>Event Ambassador</p>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6">
									<div className="our-team-boxarea">
										<div className="team-widget-area">
											<img src="/assets/img/elements/elements25.png" alt="" className="elements21" />
											<img src="/assets/img/elements/elements26.png" alt="" className="elements22" />
											<div className="img1">
												<img src="/assets/img/all-images/team/team-img13.png" alt="" className="team-img4" />
												<div className="share">
													<Link href="/#"><i className="fa-brands fa-linkedin-in" /></Link>
												</div>
											</div>
										</div>
										<div className="space28" />
										<div className="content-area">
											<Link href="/speakers-single">Fatima Al-Zahra</Link>
											<div className="space16" />
											<p>Event Ambassador</p>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6">
									<div className="our-team-boxarea">
										<div className="team-widget-area">
											<img src="/assets/img/elements/elements25.png" alt="" className="elements21" />
											<img src="/assets/img/elements/elements26.png" alt="" className="elements22" />
											<div className="img1">
												<img src="/assets/img/all-images/team/team-img14.png" alt="" className="team-img4" />
												<div className="share">
													<Link href="/#"><i className="fa-brands fa-linkedin-in" /></Link>
												</div>
											</div>
										</div>
										<div className="space28" />
										<div className="content-area">
											<Link href="/speakers-single">Aisha Al-Rashid</Link>
											<div className="space16" />
											<p>Event Ambassador</p>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6">
									<div className="our-team-boxarea">
										<div className="team-widget-area">
											<img src="/assets/img/elements/elements25.png" alt="" className="elements21" />
											<img src="/assets/img/elements/elements26.png" alt="" className="elements22" />
											<div className="img1">
												<img src="/assets/img/all-images/team/team-img15.png" alt="" className="team-img4" />
												<div className="share">
													<Link href="/#"><i className="fa-brands fa-linkedin-in" /></Link>
												</div>
											</div>
										</div>
										<div className="space28" />
										<div className="content-area">
											<Link href="/speakers-single">Mariam Al-Sabah</Link>
											<div className="space16" />
											<p>Event Ambassador</p>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6">
									<div className="our-team-boxarea">
										<div className="team-widget-area">
											<img src="/assets/img/elements/elements25.png" alt="" className="elements21" />
											<img src="/assets/img/elements/elements26.png" alt="" className="elements22" />
											<div className="img1">
												<img src="/assets/img/all-images/team/team-img16.png" alt="" className="team-img4" />
												<div className="share">
													<Link href="/#"><i className="fa-brands fa-linkedin-in" /></Link>
												</div>
											</div>
										</div>
										<div className="space28" />
										<div className="content-area">
											<Link href="/speakers-single">Noura Al-Kuwaiti</Link>
											<div className="space16" />
											<p>Event Ambassador</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== AMBASSADORS AREA ENDS =======*/}
					{/*===== CHROs AREA STARTS =======*/}
					<div className="team-sperkers-section-area sp1">
						<div className="container">
							<div className="row">
								<div className="col-lg-8 m-auto">
									<div className="heading2 text-center space-margin60">
										<h5>Chief Human Resources Officers</h5>
										<div className="space18" />
										<h2>Meet Our CHROs</h2>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-3 col-md-6">
									<div className="our-team-boxarea">
										<div className="team-widget-area">
											<img src="/assets/img/elements/elements25.png" alt="" className="elements21" />
											<img src="/assets/img/elements/elements26.png" alt="" className="elements22" />
											<div className="img1">
												<img src="/assets/img/all-images/team/team-img17.png" alt="" className="team-img4" />
												<div className="share">
													<Link href="/#"><i className="fa-brands fa-linkedin-in" /></Link>
												</div>
											</div>
										</div>
										<div className="space28" />
										<div className="content-area">
											<Link href="/speakers-single">Dr. Layla Al-Mahmoud</Link>
											<div className="space16" />
											<p>Chief Human Resources Officer</p>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6">
									<div className="our-team-boxarea">
										<div className="team-widget-area">
											<img src="/assets/img/elements/elements25.png" alt="" className="elements21" />
											<img src="/assets/img/elements/elements26.png" alt="" className="elements22" />
											<div className="img1">
												<img src="/assets/img/all-images/team/team-img18.png" alt="" className="team-img4" />
												<div className="share">
													<Link href="/#"><i className="fa-brands fa-linkedin-in" /></Link>
												</div>
											</div>
										</div>
										<div className="space28" />
										<div className="content-area">
											<Link href="/speakers-single">Hanan Al-Rashid</Link>
											<div className="space16" />
											<p>Chief Human Resources Officer</p>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6">
									<div className="our-team-boxarea">
										<div className="team-widget-area">
											<img src="/assets/img/elements/elements25.png" alt="" className="elements21" />
											<img src="/assets/img/elements/elements26.png" alt="" className="elements22" />
											<div className="img1">
												<img src="/assets/img/all-images/team/team-img19.png" alt="" className="team-img4" />
												<div className="share">
													<Link href="/#"><i className="fa-brands fa-linkedin-in" /></Link>
												</div>
											</div>
										</div>
										<div className="space28" />
										<div className="content-area">
											<Link href="/speakers-single">Dr. Amira Al-Sheikh</Link>
											<div className="space16" />
											<p>Chief Human Resources Officer</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== CHROs AREA ENDS =======*/}
					{/*===== SPEAKERS AREA STARTS =======*/}
					<div className="team-sperkers-section-area sp1">
						<div className="container">
							<div className="row">
								<div className="col-lg-8 m-auto">
									<div className="heading2 text-center space-margin60">
										<h5>Speakers</h5>
										<div className="space18" />
										<h2>Meet Our Expert Speakers</h2>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-3 col-md-6">
									<div className="our-team-boxarea">
										<div className="team-widget-area">
											<img src="/assets/img/elements/elements25.png" alt="" className="elements21" />
											<img src="/assets/img/elements/elements26.png" alt="" className="elements22" />
											<div className="img1">
												<img src="/assets/img/all-images/team/team-img12.png" alt="" className="team-img4" />
												<div className="share">
													<Link href="/#"><i className="fa-brands fa-linkedin-in" /></Link>
												</div>
											</div>
										</div>
										<div className="space28" />
										<div className="content-area">
											<Link href="/speakers-single">Alex Robertson</Link>
											<div className="space16" />
											<p>HR Leadership Expert</p>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6">
									<div className="our-team-boxarea">
										<div className="team-widget-area">
											<img src="/assets/img/elements/elements25.png" alt="" className="elements21" />
											<img src="/assets/img/elements/elements26.png" alt="" className="elements22" />
											<div className="img1">
												<img src="/assets/img/all-images/team/team-img13.png" alt="" className="team-img4" />
												<div className="share">
													<Link href="/#"><i className="fa-brands fa-linkedin-in" /></Link>
												</div>
											</div>
										</div>
										<div className="space28" />
										<div className="content-area">
											<Link href="/speakers-single">Alexy Sammony</Link>
											<div className="space16" />
											<p>Diversity & Inclusion Specialist</p>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6">
									<div className="our-team-boxarea">
										<div className="team-widget-area">
											<img src="/assets/img/elements/elements25.png" alt="" className="elements21" />
											<img src="/assets/img/elements/elements26.png" alt="" className="elements22" />
											<div className="img1">
												<img src="/assets/img/all-images/team/team-img14.png" alt="" className="team-img4" />
												<div className="share">
													<Link href="/#"><i className="fa-brands fa-linkedin-in" /></Link>
												</div>
											</div>
										</div>
										<div className="space28" />
										<div className="content-area">
											<Link href="/speakers-single">Kireon Pollardy</Link>
											<div className="space16" />
											<p>Talent Management Expert</p>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6">
									<div className="our-team-boxarea">
										<div className="team-widget-area">
											<img src="/assets/img/elements/elements25.png" alt="" className="elements21" />
											<img src="/assets/img/elements/elements26.png" alt="" className="elements22" />
											<div className="img1">
												<img src="/assets/img/all-images/team/team-img15.png" alt="" className="team-img4" />
												<div className="share">
													<Link href="/#"><i className="fa-brands fa-linkedin-in" /></Link>
												</div>
											</div>
										</div>
										<div className="space28" />
										<div className="content-area">
											<Link href="/speakers-single">Dr. Sarah Johnson</Link>
											<div className="space16" />
											<p>Organizational Psychology Expert</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
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