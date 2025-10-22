'use client'
import { useState } from 'react'
import CircleText from '@/components/elements/CircleText'
import NominationModal from '@/components/layout/NominationModal'
import Link from 'next/link'

export default function Section1() {
	const [isModalOpen, setIsModalOpen] = useState(false)
	
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
									<button onClick={() => setIsModalOpen(true)} className="vl-btn3" style={{fontSize: 'var(--ztc-font-size-font-s16)', padding: '16px 18px', border: 'none', cursor: 'pointer'}}>Reserve premium Seat</button>
									<button onClick={() => setIsModalOpen(true)} className="vl-btn3 btn2" style={{fontSize: 'var(--ztc-font-size-font-s16)', padding: '16px 18px', border: 'none', cursor: 'pointer'}}>buy ticket now</button>
									<button onClick={() => setIsModalOpen(true)} className="vl-btn3 btn2" style={{fontSize: 'var(--ztc-font-size-font-s16)', padding: '16px 18px', border: 'none', cursor: 'pointer'}}>Submit Your Nomination</button>
								</div>
								<div className="arrow-btnarea">
									<Link href="/about">
										<div className="content" >
											<CircleText text="Build LEAD INSPIRE EMPOWER." />
										</div>
										<img src="/assets/img/icons/arrow1.svg" alt="" className="arrow1" />
									</Link>
								</div>
								<div className="date-btn aniamtion-key-1" style={{right: '-300px'}}>
									<h4>20</h4>
									<div className="space14" />
									<p>January</p>
									<div className="space20" />
									<Link href="/pricing-plan">Buy Ticket</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<NominationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
		</>
	)
}
