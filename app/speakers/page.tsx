
import Image from 'next/image'
import Countdown from '@/components/elements/Countdown'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Speakers() {

	return (
		<>

			<Layout headerStyle={3} footerStyle={3}>
				<div>
					<div className="inner-page-header" style={{ backgroundImage: 'url(assets/img/all-images/used-images/speakers-banner.png)' }}>
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
					{/* <div className="team-sperkers-section-area sp1">
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
											<div className="img1" style={{ width: '270px', height: '270px', margin: '0 auto' }}>
													<Image src="/assets/img/all-images/used-images/Ambassador-1.webp" alt="Speaker" className="team-img4" fill quality={90} style={{ objectFit: 'cover' }} />
												<div className="share">
													<Link href="/#"><i className="fa-brands fa-linkedin-in" /></Link>
												</div>
											</div>
										</div>
										<div className="space28" />
										<div className="content-area">
										    <Link href="/speakers-single">H.E OMAR LEBBE  AMEER AJWAD</Link>
											<div className="space16" />
											<p>Ambassador of Sri Lanka to the Kingdom of Saudi ArabiaEvent Ambassador</p>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6">
									<div className="our-team-boxarea">
										<div className="team-widget-area">
											<div className="img1" style={{ width: '270px', height: '270px', margin: '0 auto' }}>
													<Image src="/assets/img/all-images/used-images/Ambassador-2.jpeg" alt="Speaker" className="team-img4" fill quality={90} style={{ objectFit: 'cover' }} />
												<div className="share">
													<Link href="/#"><i className="fa-brands fa-linkedin-in" /></Link>
												</div>
											</div>
										</div>
										<div className="space28" />
										<div className="content-area">
											<Link href="/speakers-single">H.E. Mohammed Barrie</Link>
											<div className="space16" />
											<p>Ambassador of Sierra Leone to the Kingdom of Saudi ArabiaEvent Ambassador</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div> */}
					{/*===== AMBASSADORS AREA ENDS =======*/}
					{/*===== CHROs AREA STARTS =======*/}
					{/* <div className="team-sperkers-section-area sp1">
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
					</div> */}
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
											<div className="img1" style={{ width: '270px', height: '270px', margin: '0 auto' }}>
													<Image src="/assets/img/all-images/used-images/Ambassador-1.webp" alt="Speaker" className="team-img4" fill quality={90} style={{ objectFit: 'cover' }} />
												<div className="share">
													<Link href="https://www.linkedin.com/in/omar-lebbe-ameer-ajwad-58390a25/" target="_blank"><i className="fa-brands fa-linkedin-in" /></Link>
												</div>
											</div>
										</div>
										<div className="space28" />
										<div className="content-area">
										    <Link href="/#">H.E OMAR LEBBE AMEER AJWAD</Link>
											<div className="space16" />
											<p>Ambassador of Sri Lanka to the Kingdom of Saudi ArabiaEvent Ambassador</p>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6">
									<div className="our-team-boxarea">
										<div className="team-widget-area">
											<div className="img1" style={{ width: '270px', height: '270px', margin: '0 auto' }}>
													<Image src="/assets/img/all-images/used-images/Ambassador-2.jpeg" alt="Speaker" className="team-img4" fill quality={90} style={{ objectFit: 'cover' }} />
												<div className="share">
													<Link href="https://www.linkedin.com/company/brx-events/"><i className="fa-brands fa-linkedin-in" /></Link>
												</div>
											</div>
										</div>
										<div className="space28" />
										<div className="content-area">
											<Link href="/#">H.E. Mohammed Barrie</Link>
											<div className="space16" />
											<p>Ambassador of Sierra Leone to the Kingdom of Saudi ArabiaEvent Ambassador</p>
										</div>
									</div>
								</div>	
								<div className="col-lg-3 col-md-6">
									<div className="our-team-boxarea">
										<div className="team-widget-area">
											<div className="img1" style={{ width: '270px', height: '270px', margin: '0 auto' }}>
													<Image src="/assets/img/all-images/used-images/speaker-1.jpg" alt="Speaker" className="team-img4" fill quality={90} style={{ objectFit: 'cover' }} />
												<div className="share">
													<Link href="https://www.linkedin.com/in/razan-al-ajmi-%D8%B1%D8%A7%D8%B2%D8%A7%D9%86-%D8%A7%D9%84%D8%B9%D8%AC%D9%85%D9%8A-7778a3282/" target="_blank"><i className="fa-brands fa-linkedin-in" /></Link>
												</div>
											</div>
										</div>
										<div className="space28" />
										<div className="content-area">
											<Link href="/#">Razan Al-Ajmi</Link>
											<div className="space16" />
											<p>1st Saudi Female Skydiver</p>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6">
									<div className="our-team-boxarea">
										<div className="team-widget-area">
											<div className="img1" style={{ width: '270px', height: '270px', margin: '0 auto' }}>
													<Image src="/assets/img/all-images/used-images/speaker-2.jpeg" alt="Speaker" className="team-img4" fill quality={90} style={{ objectFit: 'cover' }} />
												<div className="share">
													<Link href="https://www.linkedin.com/in/reem-algasim/" target="_blank"><i className="fa-brands fa-linkedin-in" /></Link>
												</div>
											</div>
										</div>
										<div className="space28" />
										<div className="content-area">
											<Link href="/#">Reem Algasim</Link>
											<div className="space16" />
											<p>Head of Human Resource - Airbus</p>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6">
									<div className="our-team-boxarea">
										<div className="team-widget-area">
											<div className="img1" style={{ width: '270px', height: '270px', margin: '0 auto' }}>
													<Image src="/assets/img/all-images/used-images/speaker-3.jpg" alt="Speaker" className="team-img4" fill quality={90} style={{ objectFit: 'cover' }} />
												<div className="share">
													<Link href="https://www.linkedin.com/in/kanarikurayim/" target="_blank"><i className="fa-brands fa-linkedin-in" /></Link>
												</div>
											</div>
										</div>
										<div className="space28" />
										<div className="content-area">
											<Link href="/#">Kanari Kurayim</Link>
											<div className="space16" />
											<p>GCC People & Culture Leader<br />
											Formerly - PepsiCo, Johnson & Johnson, and Schneider Electric </p>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6">
									<div className="our-team-boxarea">
										<div className="team-widget-area">
											<div className="img1" style={{ width: '270px', height: '270px', margin: '0 auto' }}>
													<Image src="/assets/img/all-images/used-images/speaker-4.jpeg" alt="Speaker" className="team-img4" fill quality={90} style={{ objectFit: 'cover' }} />
												<div className="share">
													<Link href="https://www.linkedin.com/in/ghada-ghandourah-79610576" target="_blank"><i className="fa-brands fa-linkedin-in" /></Link>
												</div>
											</div>
										</div>
										<div className="space28" />
										<div className="content-area">
											<Link href="/#">Ghada A Ghandourah</Link>
											<div className="space16" />
											<p>C.Suite Executive</p>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6">
									<div className="our-team-boxarea">
										<div className="team-widget-area">
											<div className="img1" style={{ width: '270px', height: '270px', margin: '0 auto' }}>
													<Image src="/assets/img/all-images/used-images/speaker-5.jpeg" alt="Speaker" className="team-img4" fill quality={90} style={{ objectFit: 'cover' }} />
												<div className="share">
													<Link href="https://www.linkedin.com/in/dr-roaa-talal-466a42b7/" target="_blank"><i className="fa-brands fa-linkedin-in" /></Link>
												</div>
											</div>
										</div>
										<div className="space28" />
										<div className="content-area">
											<Link href="/#">Dr Roaa Talal</Link>
											<div className="space16" />
											<p>Certified Trainer
											sisterhoodmc.ksa</p>
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
												<Link href="/#"><img src="/assets/img/icons/calender1.svg" alt="" />20 February 2026</Link>
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
				</div>

			</Layout>
		</>
	)
}