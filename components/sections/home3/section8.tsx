
'use client'
import Link from 'next/link'

export default function Section8() {
	return (
		<>

			<div className="contact3-section-area sp8">
				<div className="container">
					<div className="row">
						<div className="col-lg-5 m-auto">
							<div className="contact3-header text-center heading5 space-margin60">
								<h5>how to reach</h5>
								<div className="space18" />
								<h2 className="text-anime-style-3">Direction To The Venue</h2>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="contact-bg-section">
				<div className="img1">
					<img src="/assets/img/all-images/contact/news-10.jpg" alt="" className="contact-img1" />
				</div>
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="space10" />
							<div className="row">
								<div className="">
									<div className="contact-boxarea" data-aos="zoom-in" data-aos-duration={900}>
										<div className="icons">
											<img src="/assets/img/icons/mail1.svg" alt="" />
										</div>
										<div className="text">
											<h5>Our Email</h5>
											<div className="space14" />
											<Link href="/maito:eventify@gmail.com">yasir@theboredroomx.com</Link>
										</div>
									</div>
									<div className="space18" />
									<div className="contact-boxarea" data-aos="zoom-in" data-aos-duration={1000}>
										<div className="icons">
											<img src="/assets/img/icons/location1.svg" alt="" />
										</div>
										<div className="text">
											<h5>our location</h5>
											<div className="space14" />
											<Link href="/#">Riyadh, Saudi Arabia</Link>
										</div>
									</div>
								</div>
								<div className="space18" />

								<div className="">
									<div className="space20 d-md-none d-block" />
									<div className="contact-boxarea" data-aos="zoom-in" data-aos-duration={1000}>
										<div className="icons">
											<img src="/assets/img/icons/phn1.svg" alt="" />
										</div>
										<div className="text">
											<h5>Call/Message</h5>
											<div className="space14" />
											<Link href="/tel:+11234567890"> +971 52 291 6745 <span> | </span> +966 59 718 3683</Link>
										</div>
									</div>
									<div className="space18" />
									<div className="contact-boxarea" data-aos="zoom-in" data-aos-duration={1200}>
										<div className="icons">
											<img src="/assets/img/icons/instagram.svg" alt="" />
										</div>
										<div className="text">
											<h5>Instagram</h5>
											<div className="space14" />
											<Link href="https://www.instagram.com/brxeventsksa/">@brxeventsksa</Link>
										</div>
									</div>
									<div className="space10" />

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			{/* Venue Heading */}
			<div className="venue-heading-container" style={{
				textAlign: 'center',
				padding: '40px 0 20px 0',
				background: 'linear-gradient(135deg, #0e062e 0%, #981970  100%)',
				position: 'relative',
				overflow: 'hidden'
			}}>
				<div style={{
					position: 'absolute',
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					background: 'rgba(0, 0, 0, 0.1)',
					zIndex: 1
				}}></div>
			<div style={{position: 'relative', zIndex: 2}}>
				<Link href="https://doratnajd.sa/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
					<h2 className="venue-heading" style={{
						fontFamily: 'var(--dancing-script), cursive, "Brush Script MT", cursive',
						fontSize: '3.5rem',
						fontWeight: '700',
						color: 'white',
						margin: 0,
						textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
						letterSpacing: '2px',
						transform: 'perspective(1000px) rotateX(10deg)',
						transition: 'all 0.3s ease',
						cursor: 'pointer',
						display: 'inline-block'
					}}
					onMouseEnter={(e) => {
						e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) scale(1.05)';
						e.currentTarget.style.textShadow = '3px 3px 6px rgba(0, 0, 0, 0.4)';
					}}
					onMouseLeave={(e) => {
						e.currentTarget.style.transform = 'perspective(1000px) rotateX(10deg) scale(1)';
						e.currentTarget.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.3)';
					}}
					>
						Venue: Dorat Najd Resort
					</h2>
				</Link>
					<div style={{
						width: '100px',
						height: '3px',
						background: 'linear-gradient(90deg, transparent, white, transparent)',
						margin: '15px auto 0 auto',
						borderRadius: '2px',
						animation: 'shimmer 2s infinite'
					}}></div>
				</div>
			</div>
			
			
				<div className="mapouter">
					<div className="gmap_canvas">
						{/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4506257.120552435!2d88.67021924228865!3d21.954385721237916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1704088968016!5m2!1sen!2sbd" width='100%' height={450} style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /> */}
						<img src="/assets/img/all-images/used-images/location.jpg" alt="" />
					</div>
				</div>


		</>
	)
}
