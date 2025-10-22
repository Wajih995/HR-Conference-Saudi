'use client'
import CountUp from 'react-countup'
import Link from 'next/link'

export default function Section10() {
	return (
		<>

			<div className="cta3-section-area sp1">
				<img src="/assets/img/elements/elements9.png" alt="" className="elements9" />
				<img src="/assets/img/elements/elements18.png" alt="" className="elements18" />
				<img src="/assets/img/elements/elements24.png" alt="" className="elements24" />
				<div className="date-btn aniamtion-key-1">
					<h4>20</h4>
					<div className="space14" />
					<p>January</p>
					<div className="space20" />
					<Link href="/pricing-plan">Buy Ticket</Link>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-lg-7">
							<div className="row">
								<div className="col-lg-4 col-md-4">
									<div className="cta-counter-box">
										<img src="/assets/img/elements/elements23.png" alt="" className="elements23 keyframe5" />
										<h2><CountUp className="odometer" enableScrollSpy={true} end={100} />+</h2>
										<div className="space14" />
										<p>Attendance</p>
									</div>
								</div>
								<div className="col-lg-4 col-md-4">
									<div className="cta-counter-box">
										<img src="/assets/img/elements/elements23.png" alt="" className="elements23 keyframe5" />
										<h2><CountUp className="odometer" enableScrollSpy={true} end={20} />+</h2>
										<div className="space14" />
										<p>Guest</p>
									</div>
								</div>
								<div className="col-lg-4 col-md-4">
									<div className="cta-counter-box">
										<img src="/assets/img/elements/elements23.png" alt="" className="elements23 keyframe5" />
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
								<img src="/assets/img/all-images/used-images/about-1-removebg.png" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}
