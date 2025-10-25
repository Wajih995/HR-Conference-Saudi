'use client'
import { useState } from 'react'
import CircleText from '@/components/elements/CircleText'
import NominationModal from '@/components/layout/NominationModal'
import RegistrationModal from '@/components/layout/RegistrationModal'
import Link from 'next/link'

export default function Section1() {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [isRegistrationOpen, setIsRegistrationOpen] = useState(false)
	
	return (
		<>

			<div className="hero3-section-area">
				<img src="/assets/img/elements/elements18.png" alt="" className="elements18" />
				<img src="/assets/img/elements/elements9.png" alt="" className="elements9" />
				<div className="container">
					<div className="row">
						<div className="col-lg-8 m-auto">
							<div className="hero3-header text-center">
								<h1 className="text-anime-style-3 conferences" style={{fontSize: '45px'}}>Women Who Lead:</h1>
								<h1 className="text-anime-style-3 hr-conference-title" style={{fontSize: '57px'}}>HR Leadership Conference</h1>
								<h1 className="text-anime-style-3 hr-conference-title" style={{fontSize: '57px'}}>& Awards 2026</h1>
								
								<div className="space24" />
								<div className="btn-area1">
									<button onClick={() => setIsRegistrationOpen(true)} className="vl-btn3" style={{fontSize: 'var(--ztc-font-size-font-s16)', padding: '16px 18px', border: 'none', cursor: 'pointer'}}>Reserve premium Seat</button>
									<button onClick={() => setIsModalOpen(true)} className="vl-btn3 btn2" style={{fontSize: 'var(--ztc-font-size-font-s16)', padding: '16px 18px', border: 'none', cursor: 'pointer'}}>Submit Your Nomination</button>
								</div>
								<div className="arrow-btnarea">
									<Link href="/about">
										<div className="content aniamtion-key-1" >
											{/* <CircleText text="Build LEAD INSPIRE EMPOWER." /> */}
											<img src="/assets/img/all-images/used-images/cpd-circle.jpeg" alt="" className="arrow1" />
										</div>
										{/* <img src="/assets/img/icons/arrow1.svg" alt="" className="arrow1" /> */}
									</Link>
								</div>
								<div className="date-btn aniamtion-key-1" style={{right: '-300px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
									<h4 style={{fontSize: '48px', fontWeight: 'bold', margin: 0, lineHeight: 1}}>20</h4>
									<div className="space14" />
									<p style={{fontSize: '16px', margin: 0, textTransform: 'uppercase', letterSpacing: '1px'}}>January</p>
									<div className="space10" />
									<h4 style={{fontSize: '28px', fontWeight: 'bold', margin: 0, lineHeight: 1}}>2026</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
		</div>

		<NominationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
		<RegistrationModal isOpen={isRegistrationOpen} onClose={() => setIsRegistrationOpen(false)} />
	</>
)
}
