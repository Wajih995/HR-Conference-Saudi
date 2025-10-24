'use client'

export default function Section6CPD() {
	return (
		<>
			<div className="event3-section-area sp1" style={{
				backgroundImage: 'url(/assets/img/bg/header-bg4.png)',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				position: 'relative'
			}}>
				<div style={{
					position: 'absolute',
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					background: 'rgba(0, 0, 0, 0.3)',
					zIndex: 1
				}}></div>
				<div className="container" style={{position: 'relative', zIndex: 2}}>
					<div className="row">
						<div className="col-lg-8 m-auto">
							<div className="event2-header heading5 text-center mb-4">
								<div className="space18" />
								<div className="cpd-logo-container" style={{marginBottom: '30px'}}>
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
								<h2 className="text-anime-style-3" style={{color: 'white', marginBottom: '20px'}}>Earn CPD Points & Certificate</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-10 m-auto">
							<div className="cpd-content" style={{textAlign: 'center'}}>
																
								<p data-aos="fade-up" data-aos-duration={900} style={{ 
									color: 'white', 
									fontFamily: 'var(--grotesk)', 
									fontSize: 'var(--ztc-font-size-font-s18)', 
									fontStyle: 'normal', 
									lineHeight: '28px', 
									textAlign: 'center',
									marginBottom: '20px'
								}}>
									By attending the conference, <a href="https://www.cpdstandards.com/" target="_blank" rel="noopener noreferrer" style={{color: '#C9A545', fontWeight: 'bold', textDecoration: 'none', borderBottom: '2px solid #C9A545', transition: 'all 0.3s ease'}}>Delegates will earn CPD points</a> for each hour of accredited learning and receive an official CPD certificate immediately after the event, issued in partnership with the CPD Standards Office.
								</p>
								
								<p data-aos="fade-up" data-aos-duration={1000} style={{ 
									color: 'white', 
									fontFamily: 'var(--grotesk)', 
									fontSize: 'var(--ztc-font-size-font-s18)', 
									fontStyle: 'normal', 
									lineHeight: '28px', 
									textAlign: 'center',
									marginBottom: '20px'
								}}>
									In addition, every participant will enjoy a <strong style={{color: '#C9A545', fontWeight: 'bold'}}>Complimentary LinkedIn Professional Headshot</strong> captured on our exclusive Media Wall, the perfect way to refresh your professional profile and celebrate your participation.
								</p>
								
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
