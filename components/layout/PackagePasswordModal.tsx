'use client'
import { useState } from 'react'

interface PackagePasswordModalProps {
	isOpen: boolean
	onClose: () => void
	onSuccess: () => void
}

export default function PackagePasswordModal({ isOpen, onClose, onSuccess }: PackagePasswordModalProps) {
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if (password.toLocaleLowerCase() === 'wlca-brx26') {
			setError('')
			onSuccess()
		} else {
			setError('Incorrect passcode. Please try again.')
			setPassword('')
		}
	}

	if (!isOpen) return null

	return (
		<>
			{/* Overlay */}
			<div 
				style={{
					position: 'fixed',
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					backgroundColor: 'rgba(0, 0, 0, 0.7)',
					zIndex: 9999,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					padding: '20px'
				}}
				onClick={onClose}
			>
				{/* Modal */}
				<div 
					style={{
						background: 'linear-gradient(135deg, #0e062e 0%, #981970 100%)',
						borderRadius: '16px',
						padding: '40px',
						maxWidth: '600px',
						width: '100%',
						position: 'relative',
						boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
						border: '2px solid rgba(201, 165, 69, 0.3)'
					}}
					onClick={(e) => e.stopPropagation()}
				>
					{/* Close button */}
					<button
						onClick={onClose}
						style={{
							position: 'absolute',
							top: '20px',
							right: '20px',
							background: 'transparent',
							border: 'none',
							color: 'white',
							fontSize: '28px',
							cursor: 'pointer',
							width: '40px',
							height: '40px',
							borderRadius: '50%',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							transition: 'all 0.3s ease'
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.background = 'transparent'
						}}
					>
						×
					</button>

					{/* Content */}
					<div style={{ textAlign: 'center', color: 'white' }}>
						<h2 style={{
							fontSize: '28px',
							fontWeight: '700',
							marginBottom: '20px',
							color: '#C9A545',
							textTransform: 'uppercase',
							letterSpacing: '1px'
						}}>
							Packages Access
						</h2>
						
						<p style={{
							fontSize: '16px',
							marginBottom: '30px',
							lineHeight: '1.6',
							color: 'rgba(255, 255, 255, 0.9)'
						}}>
							To view the packages please enter passcode or call <br />
							<a href="tel:+966597183683" style={{
								color: '#C9A545',
								textDecoration: 'none',
								fontWeight: '600',
								fontSize: '18px'
							}}>
								+966 59 718 3683
							</a>
							<br />
							<a href="mailto:yasir@theboredroomx.com"style={{
								color: '#C9A545',
								textDecoration: 'none',
								fontWeight: '600',
								fontSize: '18px'
							}}>yasir@theboredroomx.com</a>
							
						</p>

						<form onSubmit={handleSubmit}>
							<input
								type="text"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								placeholder="Enter Passcode"
								style={{
									width: '100%',
									padding: '15px 20px',
									fontSize: '16px',
									border: '2px solid rgba(201, 165, 69, 0.5)',
									borderRadius: '8px',
									marginBottom: '20px',
									background: 'rgba(255, 255, 255, 0.1)',
									color: 'white',
									outline: 'none',
									textAlign: 'center',
									transition: 'all 0.3s ease'
								}}
								onFocus={(e) => {
									e.currentTarget.style.borderColor = '#C9A545'
									e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'
								}}
								onBlur={(e) => {
									e.currentTarget.style.borderColor = 'rgba(201, 165, 69, 0.5)'
									e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
								}}
							/>

							{error && (
								<p style={{
									color: '#ff4444',
									fontSize: '14px',
									marginBottom: '15px',
									fontWeight: '500'
								}}>
									{error}
								</p>
							)}

							<button
								type="submit"
								style={{
									background: '#C9A545',
									color: 'white',
									border: 'none',
									padding: '15px 40px',
									fontSize: '16px',
									fontWeight: '600',
									borderRadius: '8px',
									cursor: 'pointer',
									transition: 'all 0.3s ease',
									textTransform: 'uppercase',
									letterSpacing: '1px'
								}}
								onMouseEnter={(e) => {
									e.currentTarget.style.background = '#b89539'
									e.currentTarget.style.transform = 'scale(1.05)'
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.background = '#C9A545'
									e.currentTarget.style.transform = 'scale(1)'
								}}
							>
								Enter
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}

