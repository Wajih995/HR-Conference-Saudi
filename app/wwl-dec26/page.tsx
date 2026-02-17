'use client'
import { useState } from 'react'
import Image from 'next/image'
import Layout from '@/components/layout/Layout'
import RegistrationModal from '@/components/layout/RegistrationModal'

export default function WWLDec26Page() {
	const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false)

	return (
		<>
			<Layout headerStyle={3} footerStyle={1}>
				<div>
					{/* HERO */}
					<div
						className="inner-page-header"
						style={{
							backgroundImage: 'url(/assets/img/all-images/Women-Who-Lead/cover.jpg)',
							backgroundPosition: 'center',
							backgroundSize: 'cover',
							position: 'relative',
						}}
					>
						<div
							style={{
								position: 'absolute',
								top: 0,
								left: 0,
								right: 0,
								bottom: 0,
								backgroundColor: 'rgba(0, 0, 0, 0.55)',
								zIndex: 1,
							}}
						/>
						<div className="container" style={{ position: 'relative', zIndex: 2 }}>
							<div className="row">
								<div className="col-lg-8 m-auto">
									<div className="heading1 text-center">
										<h1 style={{ color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
											Women Who Lead – HR Leadership Conference & Awards Dec 2026
										</h1>
										<div className="space16" />
										<p style={{ color: 'rgba(255,255,255,0.92)', margin: 0, fontSize: '18px' }}>
											December 2026 · Riyadh, Saudi Arabia
										</p>
										<div className="space24" />
										<div className="btn-area1">
											<button
												onClick={() => setIsRegistrationModalOpen(true)}
												className="vl-btn1"
												style={{ cursor: 'pointer' }}
											>
												Become an Attendee
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* ABOUT SECTION */}
					<div className="about-text-section sp2" style={{ backgroundImage: 'url(/assets/img/bg/header-bg4.png)', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
						<div className="d-none d-lg-block" style={{ position: 'absolute', top: '40px', left: '40px', width: '150px', height: '150px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 20px rgba(0,0,0,0.3)', zIndex: 2 }}>
							<Image src="/assets/img/all-images/used-images/A4.jpg" alt="Women Who Lead Event" fill style={{ objectFit: 'cover' }} />
						</div>
						<div className="d-none d-lg-block" style={{ position: 'absolute', bottom: '40px', right: '40px', width: '150px', height: '150px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 20px rgba(0,0,0,0.3)', zIndex: 2 }}>
							<Image src="/assets/img/all-images/used-images/A31.jpg" alt="Women Who Lead Event" fill style={{ objectFit: 'cover' }} />
						</div>

						<div className="container" style={{ position: 'relative', zIndex: 3 }}>
							<div className="row">
								<div className="col-lg-10 m-auto">
									<div className="heading2 text-center">
										<h5 style={{ color: 'white' }}>About Women Who Lead Dec 2026</h5>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-10 m-auto">
									<div className="choose-widget-boxarea">
										<div className="content-area heading2" style={{ textAlign: 'center' }}>
											<p
												style={{
													color: 'white',
													fontSize: '24px',
													lineHeight: '1.6',
													fontWeight: 400,
												}}
											>
												Women Who Lead Dec 2026 is a one-day transformative experience giving you exclusive access to
												the region&apos;s most influential HR leaders, changemakers, and vision-driven women who are
												reshaping workplaces across the GCC. Learn from their journeys, insights, and strategies so you
												can accelerate your growth, avoid the challenges they&apos;ve overcome, and lead with
												confidence, inclusion, and purpose in the new era of HR leadership.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* WHY ATTEND SECTION */}
					<div className="choose-section-area sp2">
						<div className="container">
							<div className="row">
								<div className="m-auto">
									<div className="heading2 text-center space-margin60">
										<h2 style={{ fontSize: '32px', lineHeight: '40px' }}>Why Attend Women Who Lead Dec 2026?</h2>
									</div>
								</div>
							</div>
							<div className="row justify-content-center">
								<div className="col-lg-4 col-md-6 d-flex mb-5">
									<div
										className="choose-widget-boxarea h-100 w-100 text-center"
										style={{
											border: '3px solid transparent',
											backgroundImage:
												'linear-gradient(white, white), linear-gradient(90deg, #1a0b3d 0%, #4a1a5c 25%, #7d2a7f 50%, #b4428e 75%, #ff69b4 100%)',
											backgroundOrigin: 'border-box',
											backgroundClip: 'padding-box, border-box',
										}}
									>
										<div className="space24" />
										<h2
											style={{
												fontSize: '64px',
												fontWeight: 'bold',
												color: '#C9A545',
												margin: 0,
											}}
										>
											92%
										</h2>
										<div className="space24" />
										<div className="content-area">
											<p>
												of past participants said the conference expanded their professional network and visibility
												across the GCC.
											</p>
										</div>
									</div>
								</div>

								<div className="col-lg-4 col-md-6 d-flex mb-5">
									<div
										className="choose-widget-boxarea h-100 w-100 text-center"
										style={{
											border: '3px solid transparent',
											backgroundImage:
												'linear-gradient(white, white), linear-gradient(90deg, #1a0b3d 0%, #4a1a5c 25%, #7d2a7f 50%, #b4428e 75%, #ff69b4 100%)',
											backgroundOrigin: 'border-box',
											backgroundClip: 'padding-box, border-box',
										}}
									>
										<div className="space24" />
										<h2
											style={{
												fontSize: '64px',
												fontWeight: 'bold',
												color: '#C9A545',
												margin: 0,
											}}
										>
											89%
										</h2>
										<div className="space24" />
										<div className="content-area">
											<p>
												discovered practical HR strategies they could immediately apply to drive organizational
												growth and inclusion.
											</p>
										</div>
									</div>
								</div>

								<div className="col-lg-4 col-md-6 d-flex mb-5">
									<div
										className="choose-widget-boxarea h-100 w-100 text-center"
										style={{
											border: '3px solid transparent',
											backgroundImage:
												'linear-gradient(white, white), linear-gradient(90deg, #1a0b3d 0%, #4a1a5c 25%, #7d2a7f 50%, #b4428e 75%, #ff69b4 100%)',
											backgroundOrigin: 'border-box',
											backgroundClip: 'padding-box, border-box',
										}}
									>
										<div className="space24" />
										<h2
											style={{
												fontSize: '64px',
												fontWeight: 'bold',
												color: '#C9A545',
												margin: 0,
											}}
										>
											95%
										</h2>
										<div className="space24" />
										<div className="content-area">
											<p>
												felt inspired and more confident to step into senior leadership roles and champion change
												within their organizations.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* BOTTOM CTA */}
					<div className="cta1-section-area sp2">
						<div className="container">
							<div className="row">
								<div className="col-lg-10 m-auto">
									<div className="cta1-main-boxarea">
										<div className="timer-btn-area" style={{ justifyContent: 'center' }}>
											<div className="btn-area1">
												<button
													onClick={() => setIsRegistrationModalOpen(true)}
													className="vl-btn1"
													style={{ cursor: 'pointer' }}
												>
													Ready to Join Women Who Lead Dec 2026?
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Layout>

			<RegistrationModal
				isOpen={isRegistrationModalOpen}
				onClose={() => setIsRegistrationModalOpen(false)}
			/>
		</>
	)
}

