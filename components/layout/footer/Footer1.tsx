
'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PrivacyPolicyModal from '@/components/layout/PrivacyPolicyModal'

export default function Footer3() {
	const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false)
	
	return (
		<>
			<div className="footer3-sertion-area">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-6">
							<div className="footer-logo-area">
								<Image src="/assets/img/all-images/used-images/BRX-logo.webp" alt="BRX Logo" width={200} height={80} 	/>
								<div className="space16" />
								<ul>
									<li>
										<Link href="https://www.instagram.com/brxeventsksa/"><i className="fa-brands fa-instagram" /></Link>
									</li>
									<li>
										<Link href="https://www.linkedin.com/company/brx-events/"><i className="fa-brands fa-linkedin-in" /></Link>
									</li>
								</ul>
								<div className="cpd-logo-container" style={{marginTop: '30px'}}>
									<Image 
										src="/assets/img/all-images/used-images/cpd-logo.png" 
										alt="CPD Standards Office" 
										width={300}
										height={150}
										style={{
											maxWidth: '300px',
											height: 'auto',
                                            backgroundColor: 'white',
                                            borderRadius: '10px',
											// filter: 'brightness(0) invert(1)'
										}}
									/>
								</div>
							</div>
						</div>
						<div className="col-lg-2 col-md-6">
							<div className="link-content">
								<h3>Quick Links</h3>
								<ul>
									{/* <li><Link href="/">Home</Link></li> */}
									<li><Link href="/about">About Event</Link></li>
									<li><Link href="/awards">Awards</Link></li>
									<li><Link href="/packages">Packages</Link></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="link-content2">
								<h3>Contact Us</h3>
								<ul>
									<li>
										<a href="tel:+966597183683"><Image src="/assets/img/icons/phn1.svg" alt="" width={20} height={20} style={{display: 'inline', marginRight: '8px', verticalAlign: 'middle'}} />+966 59 718 3683</a>
										<a href="tel:+971522916745"><Image src="/assets/img/icons/phn1.svg" alt="" width={20} height={20} style={{display: 'inline', marginRight: '8px', verticalAlign: 'middle'}} />+971 52 291 6745</a>
									</li>
									<li>
										<Link href="/#"><Image src="/assets/img/icons/location1.svg" alt="" width={20} height={20} style={{display: 'inline', marginRight: '8px', verticalAlign: 'middle'}} />Al Bustan Village, Riyadh, Saudi Arabia</Link>
									</li>
									<li>
										<a href="mailto:yasir@theboredroomx.com"><Image src="/assets/img/icons/mail1.svg" alt="" width={20} height={20} style={{display: 'inline', marginRight: '8px', verticalAlign: 'middle'}} />Yasir@theboredroomx.com</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
						<div className="footer-social-box">
								<h3>Our Recent Event Gallery</h3>
								<div className="space12" />
								<style jsx>{`
									.img1 img {
										image-rendering: -webkit-optimize-contrast;
										image-rendering: crisp-edges;
										backface-visibility: hidden;
										transform: translateZ(0);
									}
								`}</style>
								<div className="row">
									<div className="col-lg-4 col-md-4 col-4">
										<div className="img1" style={{aspectRatio: '1/1', overflow: 'hidden', borderRadius: '8px', position: 'relative'}}>
											<Image src="/assets/img/all-images/used-images/footer-1.png" alt="Gallery" fill style={{objectFit: 'cover'}} />
											
										</div>
									</div>
									<div className="col-lg-4 col-md-4 col-4">
										<div className="img1" style={{aspectRatio: '1/1', overflow: 'hidden', borderRadius: '8px', position: 'relative'}}>
											<Image src="/assets/img/all-images/used-images/A1.jpg" alt="Gallery" fill style={{objectFit: 'cover'}} />
											
										</div>
									</div>
									<div className="col-lg-4 col-md-4 col-4">
										<div className="img1" style={{aspectRatio: '1/1', overflow: 'hidden', borderRadius: '8px', position: 'relative'}}>
											<Image src="/assets/img/all-images/used-images/A2.jpg" alt="Gallery" fill style={{objectFit: 'cover'}} />
											
										</div>
									</div>
									<div className="col-lg-4 col-md-4 col-4">
										<div className="img1" style={{aspectRatio: '1/1', overflow: 'hidden', borderRadius: '8px', position: 'relative'}}>
											<Image src="/assets/img/all-images/used-images/A3.jpg" alt="Gallery" fill style={{objectFit: 'cover'}} />
											
										</div>
									</div>
									<div className="col-lg-4 col-md-4 col-4">
										<div className="img1" style={{aspectRatio: '1/1', overflow: 'hidden', borderRadius: '8px', position: 'relative'}}>
											<Image src="/assets/img/all-images/used-images/footer-5.webp" alt="Gallery" fill style={{objectFit: 'cover'}} />
											
										</div>
									</div>
									<div className="col-lg-4 col-md-4 col-4">
										<div className="img1" style={{aspectRatio: '1/1', overflow: 'hidden', borderRadius: '8px', position: 'relative'}}>
											<Image src="/assets/img/all-images/used-images/footer-6.avif" alt="Gallery" fill style={{objectFit: 'cover'}} />
											
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="space60" />
					<div className="row">
						<div className="col-lg-12">
							<div className="copyright">
								<p>© Copyright {new Date().getFullYear()} -BRX Events. All Right Reserved | <a href="#" onClick={(e) => { e.preventDefault(); setIsPrivacyModalOpen(true); }} style={{ color: 'inherit', textDecoration: 'underline', cursor: 'pointer' }}>Privacy Policy</a></p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<PrivacyPolicyModal 
				isOpen={isPrivacyModalOpen} 
				onClose={() => setIsPrivacyModalOpen(false)} 
			/>
		</>
	)
}
