
import CircleText from '@/components/elements/CircleText'
import Link from 'next/link'

export default function Section1() {
	return (
		<>

			<div className="hero3-section-area">
				<img src="/assets/img/elements/elements18.png" alt="" className="elements18" />
				<img src="/assets/img/elements/elements9.png" alt="" className="elements9" />
				<div className="container">
					<div className="row">
						<div className="col-lg-8 m-auto">
							<div className="hero3-header text-center">
								<h5><img src="/assets/img/icons/sub-logo1.svg" alt="" />Join the Future of HR Leadership</h5>
								<div className="space32" />
								<h1 className="text-anime-style-3" style={{fontSize: '70px'}}>Women Leadership</h1>
								<div className="space24" />
								<h1 className="text-anime-style-3" style={{fontSize: '63px'}}><span className="conferences">Conference & Awards</span> ‘<span>26</span></h1>
								<div className="space40" />
								<div className="btn-area1">
									<Link href="/event-schedule" className="vl-btn3" style={{fontSize: 'var(--ztc-font-size-font-s16)', padding: '16px 18px'}}>Reserve premium Seat</Link>
									<Link href="/pricing-plan" className="vl-btn3 btn2" style={{fontSize: 'var(--ztc-font-size-font-s16)', padding: '16px 18px'}}>buy ticket now</Link>
									<Link href="/pricing-plan" className="vl-btn3 btn2" style={{fontSize: 'var(--ztc-font-size-font-s16)', padding: '16px 18px'}}>Submit Your Nomination</Link>
								</div>
								<div className="arrow-btnarea">
									<Link href="/about">
										<div className="content" >
											<CircleText text="Build Success Brand." />
										</div>
										<img src="/assets/img/icons/arrow1.svg" alt="" className="arrow1" />
									</Link>
								</div>
								<div className="date-btn aniamtion-key-1" style={{right: '-300px'}}>
									<h4>15</h4>
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

		</>
	)
}
