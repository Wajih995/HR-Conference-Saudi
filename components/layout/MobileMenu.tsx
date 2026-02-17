'use client'
import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'

export default function MobileMenu({ isMobileMenu, handleMobileMenu }: any) {
	const [isAccordion, setIsAccordion] = useState(null)

const handleAccordion = (key: any) => {
    setIsAccordion(prevState => prevState === key ? null : key)
}
	return (
		<>
			<div className="mobile-header mobile-haeder1 d-block d-lg-none">
				<div className="container-fluid">
					<div className="col-12">
						<div className="mobile-header-elements">
							<div className="mobile-logo">
								<Link href="/"><Image src="/assets/img/logo/final-logo.png" alt="Logo" width={200} height={60} style={{width: 'auto', height: 'auto'}} /></Link>
							</div>
							<div className="mobile-nav-icon dots-menu" onClick={handleMobileMenu}>
								<i className="fa-solid fa-bars-staggered" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={`mobile-sidebar mobile-sidebar1 ${isMobileMenu ? 'mobile-menu-active' : ''}`}>
				<div className="logosicon-area">
					<div className="logos">
						<Image src="/assets/img/logo/final-logo.png" alt="Logo" width={200} height={60} style={{width: 'auto', height: 'auto'}} />
					</div>
					<div className="menu-close" onClick={handleMobileMenu}>
						<i className="fa-solid fa-xmark" />
					</div>
				</div>
				<div className="mobile-nav mobile-nav1">
					<ul className="mobile-nav-list nav-list1">
						<li className="hash-has-sub">
							<Link href="/" className="hash-nav">Home</Link>
						</li>
						<li className="hash-has-sub"><Link href="/about" className="hash-nav">About Event</Link></li>
						<li className="hash-has-sub"><Link href="/awards" className="hash-nav">Awards</Link></li>
						<li className="has-sub hash-has-sub">
							<span className={`submenu-button ${isAccordion == 2 ? "submenu-opened" : ""}`} onClick={() => handleAccordion(2)}><em /></span>
							<Link href="/#" className="hash-nav">Conferences</Link>
							<ul className={`sub-menu ${isAccordion == 2 ? "open-sub" : ""}`} style={{ display: `${isAccordion == 2 ? "block" : "none"}` }}>
								<li style={{ marginBottom: '15px', paddingBottom: '10px', borderBottom: '1px solid #ddd' }}>
									<h4 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px', color: '#0e062e' }}>Past Conferences</h4>
								</li>
								<li className="hash-has-sub"><Link href="/wwl26" className="hash-nav" style={{ paddingLeft: '20px' }}>WWL'26 Gallery</Link></li>
								<li style={{ marginTop: '15px', marginBottom: '10px', paddingTop: '15px', paddingBottom: '10px', borderTop: '1px solid #ddd', borderBottom: '1px solid #ddd' }}>
									<h4 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px', color: '#0e062e' }}>Future Conferences</h4>
								</li>
								<li className="hash-has-sub">
									<Link href="/wwl-dec26" className="hash-nav" style={{ paddingLeft: '20px' }}>
										Women Who Lead Dec 2026
									</Link>
								</li>
								<li className="hash-has-sub">
									<Link href="/opex-summit-amsterdam" className="hash-nav" style={{ paddingLeft: '20px' }}>
										OPEX Summit Amsterdam Apr 2026
									</Link>
								</li>
								<li className="hash-has-sub">
									<Link href="/opex-summit-london" className="hash-nav" style={{ paddingLeft: '20px' }}>
										OPEX Summit London Sep 2026
									</Link>
								</li>
								<li className="hash-has-sub">
									<Link href="/opex-summit-houston" className="hash-nav" style={{ paddingLeft: '20px' }}>
										OPEX Summit Houston Oct 2026
									</Link>
								</li>
							</ul>
						</li>
						<li className="has-sub hash-has-sub"><span className={`submenu-button ${isAccordion == 3 ? "submenu-opened" : ""}`} onClick={() => handleAccordion(3)}><em /></span>
							<Link href="/#" className="hash-nav">Sponsors</Link>
							<ul className={`sub-menu ${isAccordion == 3 ? "open-sub" : ""}`} style={{ display: `${isAccordion == 3 ? "block" : "none"}` }}>
								<li className="hash-has-sub"><Link href="/packages" className="hash-nav">Packages</Link></li>
							</ul>
						</li>
					</ul>

					<div className="allmobilesection">
						<div className="single-footer">
							<h3>Contact Info</h3>
							<div className="footer1-contact-info">
								<div className="contact-info-single">
									<div className="contact-info-icon">
										<span><i className="fa-solid fa-phone-volume" /></span>
									</div>
									<div className="contact-info-text">
										<a href="tel:+966597183683">+966 59 718 3683</a>
										<span> | </span>
										<a href="tel:+971522916745">+971 52 291 6745</a>
									</div>
								</div>
								<div className="contact-info-single">
									<div className="contact-info-icon">
										<span><i className="fa-solid fa-envelope" /></span>
									</div>
									<div className="contact-info-text">
										<a href="mailto:yasir@theboredroomx.com">yasir@theboredroomx.com</a>
									</div>
								</div>
								<div className="single-footer">
									<h3>Social Links</h3>
									<div className="social-links-mobile-menu">
										<ul>
											<li>
												<Link href="https://www.instagram.com/brxeventsksa/" target="_blank"><i className="fa-brands fa-instagram" /></Link>
											</li>
											<li>
												<Link href="https://www.linkedin.com/company/brx-events/" target="_blank"><i className="fa-brands fa-linkedin-in" /></Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
