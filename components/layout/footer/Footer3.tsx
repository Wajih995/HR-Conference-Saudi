
import Link from 'next/link'

export default function Footer3() {
	return (
		<>
			<div className="footer3-sertion-area">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-6">
							<div className="footer-logo-area">
								<img src="/assets/img/all-images/used-images/BRX-logo.webp" alt="" />
								<div className="space16" />
								<p> We are dedicated to building a platform that brings together business leaders, innovators, and professionals to share insights, inspire collaboration, and drive meaningful impact.</p>
								<div className="space24" />
								<ul>
									<li>
										<Link href="https://www.instagram.com/brxeventsksa/"><i className="fa-brands fa-instagram" /></Link>
									</li>
									<li>
										<Link href="https://www.linkedin.com/company/brx-events/"><i className="fa-brands fa-linkedin-in" /></Link>
									</li>
								</ul>
								<div className="cpd-logo-container" style={{marginTop: '30px'}}>
									<img 
										src="/assets/img/all-images/used-images/cpd-logo.png" 
										alt="CPD Standards Office" 
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
									<li><Link href="/about">About Us</Link></li>
									<li><Link href="/blog">Our Blogs</Link></li>
									<li><Link href="/event">Event Listing</Link></li>
									<li><Link href="/pricing-plan">Pricing Plan</Link></li>
									<li><Link href="/contact">Contact Us</Link></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="link-content2">
								<h3>Contact Us</h3>
								<ul>
									<li>
										<Link href="/tel:+966597183683"><img src="/assets/img/icons/phn1.svg" alt="" />+966 59 718 3683</Link>
										<Link href="/tel:+971522916745"><img src="/assets/img/icons/phn1.svg" alt="" />+971 52 291 6745</Link>
									</li>
									<li>
										<Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" />Riyadh, Saudi Arabia</Link>
									</li>
									<li>
										<Link href="/mailto:eventifyevent@gmail.com"><img src="/assets/img/icons/mail1.svg" alt="" />Yasir@theboredroomx.com</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
						<div className="footer-social-box">
								<h3>Our Recent Event Gallery</h3>
								<div className="space12" />
								<div className="row">
									<div className="col-lg-4 col-md-4 col-4">
										<div className="img1" style={{aspectRatio: '1/1', overflow: 'hidden'}}>
											<img src="/assets/img/all-images/used-images/footer-1.png" alt="" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
											<div className="icons">
												<Link href="/#"><i className="fa-brands fa-instagram" /></Link>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-4 col-4">
										<div className="img1" style={{aspectRatio: '1/1', overflow: 'hidden'}}>
											<img src="/assets/img/all-images/used-images/footer-2.png" alt="" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
											<div className="icons">
												<Link href="/#"><i className="fa-brands fa-instagram" /></Link>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-4 col-4">
										<div className="img1" style={{aspectRatio: '1/1', overflow: 'hidden'}}>
											<img src="/assets/img/all-images/used-images/footer-3.jpg" alt="" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
											<div className="icons">
												<Link href="/#"><i className="fa-brands fa-instagram" /></Link>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-4 col-4">
										<div className="img1" style={{aspectRatio: '1/1', overflow: 'hidden'}}>
											<img src="/assets/img/all-images/used-images/footer-4.jpg" alt="" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
											<div className="icons">
												<Link href="/#"><i className="fa-brands fa-instagram" /></Link>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-4 col-4">
										<div className="img1" style={{aspectRatio: '1/1', overflow: 'hidden'}}>
											<img src="/assets/img/all-images/used-images/footer-5.webp" alt="" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
											<div className="icons">
												<Link href="/#"><i className="fa-brands fa-instagram" /></Link>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-4 col-4">
										<div className="img1" style={{aspectRatio: '1/1', overflow: 'hidden'}}>
											<img src="/assets/img/all-images/used-images/footer-6.avif" alt="" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
											<div className="icons">
												<Link href="/#"><i className="fa-brands fa-instagram" /></Link>
											</div>
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
								<p>© Copyright {new Date().getFullYear()} -BRX Events. All Right Reserved</p>
							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}
