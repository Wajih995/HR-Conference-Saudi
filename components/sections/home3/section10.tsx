'use client'
import CountUp from 'react-countup'
import Image from 'next/image'
import Link from 'next/link'

export default function Section10() {
	return (
		<>

			<div className="cta3-section-area sp1">
				<Image src="/assets/img/elements/elements9.png" alt="" className="elements9" width={200} height={200}/>
				<Image src="/assets/img/elements/elements18.png" alt="" className="elements18" width={200} height={200}/>
				<Image src="/assets/img/elements/elements24.png" alt="" className="elements24" width={200} height={200}/>
				<div className="date-btn aniamtion-key-1">
					{/* <h4></h4> */}
					<div className="space14" />
					<p style={{fontSize: '25px', margin: 0, textTransform: 'uppercase', letterSpacing: '1px'}}>December</p>
					<div className="space10" />
					<h4 style={{fontSize: '28px', fontWeight: 'bold', margin: 0, lineHeight: 1}}>2026</h4>
					<div className="space20" />
					<Link href="/pricing-plan">Buy Ticket</Link>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-lg-7">
							<div className="row">
								<div className="col-lg-4 col-md-4">
									<div className="cta-counter-box">
										<Image src="/assets/img/elements/elements23.png" alt="" className="elements23 keyframe5" width={100} height={100} style={{width: '100%', height: 'auto'}}/>
										<h2><CountUp className="odometer" enableScrollSpy={true} end={100} />+</h2>
										<div className="space14" />
										<p>Attendance</p>
									</div>
								</div>
								<div className="col-lg-4 col-md-4">
									<div className="cta-counter-box">
										<Image src="/assets/img/elements/elements23.png" alt="" className="elements23 keyframe5" width={100} height={100} style={{width: '100%', height: 'auto'}}/>
										<h2><CountUp className="odometer" enableScrollSpy={true} end={20} />+</h2>
										<div className="space14" />
										<p>Award Categories</p>
									</div>
								</div>
								<div className="col-lg-4 col-md-4">
									<div className="cta-counter-box">
										<Image src="/assets/img/elements/elements23.png" alt="" className="elements23 keyframe5" width={100} height={100} style={{width: '100%', height: 'auto'}}/>
										<h2><CountUp className="odometer" enableScrollSpy={true} end={15} /></h2>
										<div className="space14" />
										<p>Speakers</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-1" />
						<div className="col-lg-3">
							<div className="img1">
								<Image src="/assets/img/all-images/used-images/about-1-removebg.png" alt="About" width={400} height={500}/>
							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}
