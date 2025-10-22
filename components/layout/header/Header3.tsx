import Link from 'next/link'

export default function Header3({ scroll, isMobileMenu, handleMobileMenu, isSearch, handleSearch }: any) {
	return (
		<>
			<header>
				<div className={`header-area homepage3 header header-sticky d-none d-lg-block ${scroll ? 'sticky' : ''}`} id="header">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="menu-top-area">
									<div className="top-menu-area">
										<p>Join the Future of HR Leadership<Link href="/#">Buy Ticket</Link></p>
										<ul>
											<li>
												<Link href="/mailto:eventifyconference@.com"><img src="/assets/img/icons/mail1.svg" alt="" />yasir@theboredroomx.com<span> | </span></Link>
											</li>
											<li>
												<Link href="/tel:+966597183683"><img src="/assets/img/icons/phn1.svg" alt="" />+966 59 718 3683 <span> | </span></Link>
												<Link href="/tel:+971522916745">+971 52 291 6745</Link>
											</li>
										</ul>
									</div>
								</div>
								<div className="header-elements">
									<div className="site-logo">
										<Link href="/"><img src="/assets/img/logo/final-logo.png" alt="" /></Link>
									</div>
									<div className="main-menu">
										<ul>
											<li><Link href="/">Home</Link></li>
											<li><Link href="/about">About Event</Link></li>
                                            <li><Link href="/awards">Awards</Link></li>
											<li>
												<Link href="/#">Speakers <i className="fa-solid fa-angle-down" /></Link>
												<ul className="dropdown-padding">
													<li><Link href="/speakers">Speakers</Link></li>
													<li><Link href="/speakers-single">Speakers Details</Link></li>
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
											<li>
												<Link href="/#">Pages <i className="fa-solid fa-angle-down" /></Link>
												<ul className="dropdown-padding">
													<li><Link href="/memories">Our Memories</Link></li>
													<li><Link href="/pricing-plan">Pricing Plan</Link></li>
													<li><Link href="/faq">FAQ,s</Link></li>
													<li><Link href="/contact">Contact Us</Link></li>
												</ul>
											</li>
										</ul>
									</div>
									<div className="btn-area">
										<ul>
											<li>
												<Link href="https://www.instagram.com/brxeventsksa/"><i className="fa-brands fa-instagram" /></Link>
											</li>
											<li>
												<Link href="https://www.linkedin.com/company/brx-events/"><i className="fa-brands fa-linkedin-in" /></Link>
											</li>
										</ul>
									</div>
									<div className={`header-search-form-wrapper ${isSearch ? 'open' : ''}`}>
										<div className="tx-search-close tx-close" onClick={handleSearch}><i className="fa-solid fa-xmark" /></div>
										<div className="header-search-container">
											<form role="search" className="search-form">
												<input type="search" className="search-field" placeholder="Search …" name="s" />
												<button type="submit" className="search-submit"><img src="/assets/img/icons/search1.svg" alt="" /></button>
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

		</>
	)
}
