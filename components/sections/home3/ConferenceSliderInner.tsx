'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import Link from 'next/link'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const conferences = [
	{
		title: 'Women Who Lead – HR Leadership Conference & Awards Dec 2026',
		date: 'December 2026 · Riyadh, Saudi Arabia',
		bg: '/assets/img/all-images/Women-Who-Lead/cover.jpg',
		cta: 'Become an Attendee',
		href: '/wwl-dec26',
	},
	{
		title: '3rd Annual Global EPC Project Management Forum 2026',
		date: '22nd -23rd -24th April 2026 Amsterdam, NL',
		bg: '/assets/img/all-images/used-images/opex-amsterdam.jpg',
		cta: 'Register Now',
		href: '/opex-summit-amsterdam',
	},
	{
		title: '14th Annual Global EPC Project Management Summit',
		date: '23-24-25 September 2026 London, UK',
		bg: '/assets/img/all-images/used-images/opex-london.jpg',
		cta: 'Register Now',
		href: '/opex-summit-london',
	},
	{
		title: '2nd Annual Houston EPC Project Management Summit 2026',
		date: '28th-29th-30th October 2026 Houston, USA',
		bg: '/assets/img/all-images/used-images/opex-houston.jpg',
		cta: 'Register Now',
		href: '/opex-summit-houston',
	},
]

const swiperOptions = {
	modules: [Autoplay, Navigation, Pagination],
	slidesPerView: 1 as const,
	spaceBetween: 0,
	loop: true,
	autoplay: {
		delay: 3500,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: '.conf-slider-next',
		prevEl: '.conf-slider-prev',
	},
	pagination: {
		el: '.conf-slider-pagination',
		clickable: true,
	},
}

export default function ConferenceSliderInner() {
	return (
		<div style={{ position: 'relative' }}>
		<style dangerouslySetInnerHTML={{__html: `
			.conf-slider-pagination {
				position: absolute !important;
				bottom: 20px !important;
				left: 0 !important;
				right: 0 !important;
				width: 100% !important;
				transform: none !important;
				display: flex !important;
				justify-content: center !important;
				align-items: center !important;
				gap: 8px;
				z-index: 10;
			}
			.conf-slider-pagination .swiper-pagination-bullet {
				width: 10px;
				height: 10px;
				background: rgba(255,255,255,0.5);
				opacity: 1;
				margin: 0 !important;
			}
			.conf-slider-pagination .swiper-pagination-bullet-active {
				background: #C9A545;
			}
			.conf-slider-prev:hover,
			.conf-slider-next:hover {
				background: rgba(201,165,69,0.4) !important;
				border-color: #C9A545 !important;
			}
		`}} />

			<Swiper {...swiperOptions}>
				{conferences.map((conf, i) => (
					<SwiperSlide key={i}>
						<div
							style={{
								position: 'relative',
								minHeight: '520px',
								backgroundImage: `url(${conf.bg})`,
								backgroundSize: 'cover',
								backgroundPosition: 'center',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							{/* Dark overlay */}
							<div
								style={{
									position: 'absolute',
									inset: 0,
									background: 'rgba(0,0,0,0.55)',
									zIndex: 1,
								}}
							/>
							{/* Slide content */}
							<div
								className="container"
								style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}
							>
								<div className="row">
									<div className="col-lg-8 m-auto">
										<h5
											style={{
												color: '#C9A545',
												letterSpacing: '2px',
												textTransform: 'uppercase',
												marginBottom: '16px',
												fontSize: '14px',
											}}
										>
											Upcoming Conference
										</h5>
										<h2
											style={{
												color: 'white',
												textShadow: '2px 2px 8px rgba(0,0,0,0.6)',
												marginBottom: '16px',
												fontSize: '36px',
												lineHeight: '1.25',
											}}
										>
											{conf.title}
										</h2>
										<p
											style={{
												color: 'rgba(255,255,255,0.85)',
												fontSize: '18px',
												marginBottom: '32px',
											}}
										>
											{conf.date}
										</p>
										<div className="btn-area1">
											<Link href={conf.href} className="vl-btn1">
												{conf.cta}
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			{/* Navigation arrows */}
			<button
				className="conf-slider-prev"
				style={{
					position: 'absolute',
					left: '20px',
					top: '50%',
					transform: 'translateY(-50%)',
					zIndex: 10,
					background: 'rgba(255,255,255,0.15)',
					border: '2px solid rgba(255,255,255,0.5)',
					borderRadius: '50%',
					width: '48px',
					height: '48px',
					cursor: 'pointer',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					color: 'white',
					fontSize: '20px',
					transition: 'background 0.3s, border-color 0.3s',
				}}
			>
				&#8592;
			</button>
			<button
				className="conf-slider-next"
				style={{
					position: 'absolute',
					right: '20px',
					top: '50%',
					transform: 'translateY(-50%)',
					zIndex: 10,
					background: 'rgba(255,255,255,0.15)',
					border: '2px solid rgba(255,255,255,0.5)',
					borderRadius: '50%',
					width: '48px',
					height: '48px',
					cursor: 'pointer',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					color: 'white',
					fontSize: '20px',
					transition: 'background 0.3s, border-color 0.3s',
				}}
			>
				&#8594;
			</button>

			{/* Pagination dots */}
			<div className="conf-slider-pagination swiper-pagination" />
		</div>
	)
}

