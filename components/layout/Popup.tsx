'use client'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Popup() {
	useEffect(() => {
		// Ensure the elements are properly typed, and add event listeners in useEffect
		const popup = document.getElementById('popup') as HTMLElement | null
		const closeBtn = document.getElementById('close-popup') as HTMLElement | null
		const noThanksBtn = document.querySelector('.no-thanks') as HTMLElement | null

		// Display the popup after a short delay
		if (popup) {
			setTimeout(() => {
				popup.style.display = 'flex'
			}, 100)
		}

		// Close the popup when the close button is clicked
		if (closeBtn) {
			closeBtn.addEventListener('click', () => {
				if (popup) {
					popup.style.display = 'none'
				}
			})
		}

		// Close the popup when the "No thanks" button is clicked
		if (noThanksBtn) {
			noThanksBtn.addEventListener('click', () => {
				if (popup) {
					popup.style.display = 'none'
				}
			})
		}

		// Cleanup event listeners on component unmount
		return () => {
			if (closeBtn) {
				closeBtn.removeEventListener('click', () => { })
			}
			if (noThanksBtn) {
				noThanksBtn.removeEventListener('click', () => { })
			}
		}
	}, [])

	return (
		<>
			<div id="popup" className="popup-overlay">
				<div className="popup-content">
					<span className="close-btn" id="close-popup">×</span>
					<div className="popup-icon">
						<img src="/assets/img/logo/final-logo.png" alt="" />
					</div>
					<div className="space32" />
					<div className="heading2">
						<h2>Empower Your Leadership Journey</h2>
						<div className="space8" />
						<ul>
							<li><img src="/assets/img/icons/check3.svg" alt="" />Celebrate Women Transforming Workplaces</li>
							<li><img src="/assets/img/icons/check3.svg" alt="" /> Gain Insights from Top CHROs & HR Visionaries</li>
							<li><img src="/assets/img/icons/check3.svg" alt="" />Join the GCC’s Premier HR Leadership Conference</li>
						</ul>
					</div>
					<div className="space50" />
					<Link className="vl-btn2" href="/contact">
						<span className="demo">Buy Ticket Now</span>
						<span className="arrow">
							<i className="fa-solid fa-arrow-right" />
						</span>
					</Link>
					<p className="no-thanks">No thanks</p>
				</div>
			</div>
		</>
	)
}
