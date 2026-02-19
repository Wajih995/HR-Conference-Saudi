'use client'
import dynamic from 'next/dynamic'

// Dynamically import Swiper with SSR disabled to prevent hydration errors
const ConferenceSlider = dynamic(() => import('@/components/sections/home3/ConferenceSliderInner'), {
	ssr: false,
	loading: () => <div style={{ minHeight: '520px', background: '#0e062e' }} />,
})

export default function Section6CPD() {
	return (
		<div className="event3-section-area" style={{ position: 'relative', overflow: 'hidden' }}>
			{/* Section heading above slider */}
			{/* <div
				style={{
					textAlign: 'center',
					padding: '48px 0 32px',
					background: '#0e062e',
				}}
			>
				<div className="heading2">
					<h5 style={{ color: '#C9A545' }}>Future Events</h5>
					<div className="space18" />
					<h2 style={{ color: 'white' }}>Our Upcoming Conferences</h2>
				</div>
			</div> */}

			{/* Slider (client-only) */}
			<ConferenceSlider />
		</div>
	)
}
