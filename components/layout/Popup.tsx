'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Popup() {
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		const t = window.setTimeout(() => setIsOpen(true), 100)
		return () => window.clearTimeout(t)
	}, [])

	return (
		<>
			<div
				id="popup"
				className="popup-overlay"
				style={{ display: isOpen ? 'flex' : 'none' }}
				role="dialog"
				aria-modal="true"
			>
				<div className="popup-content popup-content--wide">
					<button
						type="button"
						className="close-btn"
						aria-label="Close"
						onClick={() => setIsOpen(false)}
					>
						×
					</button>

					<div className="popup-image">
						<Image
							src="/assets/img/all-images/used-images/Opex-riyadh.jpeg"
							alt="Global EPC Projects Riyadh Summit 2026"
							width={900}
							height={900}
							priority
							style={{ width: '100%', height: 'auto', borderRadius: 10 }}
						/>
					</div>

					<a
						className="cta-button"
						href="https://opex-project-management.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Register now
					</a>
				</div>
			</div>
		</>
	)
}
