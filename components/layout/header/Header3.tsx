'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import RegistrationModal from '@/components/layout/RegistrationModal'

export default function Header3({ scroll, isMobileMenu, handleMobileMenu, isSearch, handleSearch }: any) {
	const [isRegistrationOpen, setIsRegistrationOpen] = useState(false)
	
	return (
		<>
			<header>
				<div className={`header-area homepage3 header header-sticky d-none d-lg-block ${scroll ? 'sticky' : ''}`} id="header">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="menu-top-area">
									<div className="top-menu-area">
										<p>Join the Future of HR Leadership<button onClick={() => setIsRegistrationOpen(true)} style={{background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textDecoration: 'underline', padding: 0, marginLeft: '5px'}}>Buy Ticket</button></p>
										<ul>
											<li>
												<a href="mailto:yasir@theboredroomx.com"><Image src="/assets/img/icons/mail1.svg" alt="" width={16} height={16} style={{display: 'inline', marginRight: '6px', verticalAlign: 'middle'}} />yasir@theboredroomx.com<span> | </span></a>
											</li>
											<li>
												<a href="tel:+966597183683"><Image src="/assets/img/icons/phn1.svg" alt="" width={16} height={16} style={{display: 'inline', marginRight: '6px', verticalAlign: 'middle'}} />+966 59 718 3683 <span> | </span></a>
												<a href="tel:+971522916745">+971 52 291 6745</a>
											</li>
										</ul>
									</div>
								</div>
								<div className="header-elements">
									<div className="site-logo">
										<Link href="/"><Image src="/assets/img/logo/final-logo.png" alt="Logo" width={200} height={60} style={{width: 'auto', height: 'auto'}} /></Link>
									</div>
									<div className="main-menu">
										<ul>
											<li><Link href="/">Home</Link></li>
											<li>
												<Link href="/#">Conferences <i className="fa-solid fa-angle-down" /></Link>
												<ul className="dropdown-padding conferences-dropdown" style={{
													width: '550px',
													display: 'grid',
													gridTemplateColumns: '1fr 1fr',
													gap: '30px',
													padding: '25px'
												}}>
													<div>
														<h4 style={{
															fontSize: '16px',
															fontWeight: 'bold',
															marginBottom: '15px',
															color: '#0e062e',
															paddingBottom: '10px',
															borderBottom: '2px solid #C9A545'
														}}>Past Conferences</h4>
														<ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
															<li style={{ marginBottom: '10px' }}>
																<Link href="/wwl26" style={{
																	display: 'block',
																	padding: '8px',
																	color: '#666',
																	textDecoration: 'none',
																	transition: 'all 0.3s',
																	borderRadius: '4px'
																}}
																onMouseEnter={(e) => {
																	e.currentTarget.style.paddingLeft = '15px'
																	e.currentTarget.style.color = '#C9A545'
																}}
																onMouseLeave={(e) => {
																	e.currentTarget.style.paddingLeft = '8px'
																	e.currentTarget.style.color = '#666'
																}}>WWL'26 Gallery</Link>
															</li>
														</ul>
													</div>
													<div>
														<h4 style={{
															fontSize: '16px',
															fontWeight: 'bold',
															marginBottom: '15px',
															color: '#0e062e',
															paddingBottom: '10px',
															borderBottom: '2px solid #C9A545'
														}}>Future Conferences</h4>
														<ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
															<li style={{ marginBottom: '10px' }}>
																<Link href="/opex-summit" style={{
																	display: 'block',
																	padding: '8px',
																	color: '#666',
																	textDecoration: 'none',
																	transition: 'all 0.3s',
																	borderRadius: '4px'
																}}
																onMouseEnter={(e) => {
																	e.currentTarget.style.paddingLeft = '15px'
																	e.currentTarget.style.color = '#C9A545'
																}}
																onMouseLeave={(e) => {
																	e.currentTarget.style.paddingLeft = '8px'
																	e.currentTarget.style.color = '#666'
																}}>OPEX Summit</Link>
															</li>
														</ul>
													</div>
												</ul>
											</li>
											<li><Link href="/about">About Event</Link></li>
                                            <li><Link href="/awards">Awards</Link></li>
											<li>
												<Link href="/speakers">Speakers <i className="fa-solid fa-angle-down" /></Link>
												<ul className="dropdown-padding">
													<li><Link href="/speakers">Speakers & Guests</Link></li>
												</ul>
											</li>
											<li>
												<Link href="/packages">Sponsors <i className="fa-solid fa-angle-down" /></Link>
												<ul className="dropdown-padding">
													<li><Link href="/packages">Packages</Link></li>
												</ul>
											</li>
											
											{/* <li>
												<Link href="/#">Schedule <i className="fa-solid fa-angle-down" /></Link>
												<ul className="dropdown-padding">
													<li><Link href="/event">Our Event</Link></li>
													<li><Link href="/event-schedule">Event Schedule</Link></li>
													<li><Link href="/event-single">Event Details</Link></li>
												</ul>
											</li>
											<li>
												<Link href="/#">Blogs <i className="fa-solid fa-angle-down" /></Link>
												<ul className="dropdown-padding">
													<li><Link href="/blog">Our Blog</Link></li>
													<li><Link href="/blog-single">Blog Details</Link></li>
												</ul>
											</li> */}
											{/* <li>
												<Link href="/#">Pages <i className="fa-solid fa-angle-down" /></Link>
												<ul className="dropdown-padding">
													<li><Link href="/memories">Our Memories</Link></li>
													<li><Link href="/pricing-plan">Pricing Plan</Link></li>
													<li><Link href="/faq">FAQ,s</Link></li>
													<li><Link href="/contact">Contact Us</Link></li>
												</ul>
											</li> */}
										</ul>
									</div>
									<div className="btn-area">
										<ul>
											<li>
												<Link href="https://www.instagram.com/brxeventsksa/" target="_blank"><i className="fa-brands fa-instagram" /></Link>
											</li>
											<li>
												<Link href="https://www.linkedin.com/company/brx-events/" target="_blank"><i className="fa-brands fa-linkedin-in" /></Link>
											</li>
										</ul>
									</div>
									<div className={`header-search-form-wrapper ${isSearch ? 'open' : ''}`}>
										<div className="tx-search-close tx-close" onClick={handleSearch}><i className="fa-solid fa-xmark" /></div>
										<div className="header-search-container">
											<form role="search" className="search-form">
												<input type="search" className="search-field" placeholder="Search …" name="s" />
												<button type="submit" className="search-submit"><Image src="/assets/img/icons/search1.svg" alt="Search" width={20} height={20} /></button>
											</form>
										</div>
									</div>
									{isSearch && <div className="body-overlay active" onClick={handleSearch} />}
								</div>
							</div>
						</div>
					</div>
				</div>
			</header >

			<RegistrationModal isOpen={isRegistrationOpen} onClose={() => setIsRegistrationOpen(false)} />
		</>
	)
}
