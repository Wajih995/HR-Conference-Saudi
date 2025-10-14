'use client'
import Link from 'next/link'
import { useState } from "react"

export default function Section7() {
	const [isTab, setIsTab] = useState(1)
	const handleTab = (i: number) => {
		setIsTab(i)
	}
	return (
		<>

			<div className="event3-section-area sp1">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 m-auto">
							<div className="event2-header heading5 text-center mb-4">
								<div className="space18" />
								<h2 className="text-anime-style-3">Award Nominations</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="btn-area1" data-aos="fade-left" data-aos-duration={1000} style={{display: 'flex', justifyContent: 'center'}}>
							<Link href="/event-schedule" className="vl-btn3" style={{fontSize: 'var(--ztc-font-size-font-s16)', padding: '16px 18px'}}>Submit Your Nominee for Recognition</Link>
						</div>
						<div className="space24" />
						<p data-aos="fade-left" data-aos-duration={900}>Nominate women leaders who have made significant contributions to the GCC’s HR industry. Your nominations will be reviewed by our esteemed panel of judges, ensuring recognition for those who have demonstrated exceptional leadership and innovation.</p>
					</div>

				</div>
			</div>

		</>
	)
}
