'use client'
import { useEffect, useState } from "react"
import Link from 'next/link'

export default function WhatsAppButton() {
	const [hasScrolled, setHasScrolled] = useState(false)

	useEffect(() => {
		const onScroll = () => {
			setHasScrolled(window.scrollY > 100)
		}

		window.addEventListener("scroll", onScroll)
		return () => window.removeEventListener("scroll", onScroll)
	}, [])

	return (
		<>
				<Link 
					href="https://api.whatsapp.com/send?phone=966597183683" 
					target="_blank" 
					rel="noopener noreferrer"
					className="whatsapp-button"
					style={{
						position: 'fixed',
						bottom: '80px',
						right: '30px',
						width: '60px',
						height: '60px',
						borderRadius: '50%',
						backgroundColor: '#25D366',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						boxShadow: '0 4px 12px rgba(37, 211, 102, 0.4)',
						zIndex: 999,
						transition: 'all 0.3s ease',
						cursor: 'pointer'
					}}
					onMouseEnter={(e) => {
						e.currentTarget.style.transform = 'scale(1.1)';
						e.currentTarget.style.boxShadow = '0 6px 16px rgba(37, 211, 102, 0.6)';
					}}
					onMouseLeave={(e) => {
						e.currentTarget.style.transform = 'scale(1)';
						e.currentTarget.style.boxShadow = '0 4px 12px rgba(37, 211, 102, 0.4)';
					}}
				>
					<i className="fa-brands fa-whatsapp" style={{
						fontSize: '32px',
						color: 'white'
					}} />
				</Link>
		</>
	)
}

