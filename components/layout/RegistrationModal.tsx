'use client'
import { useState } from 'react'

interface RegistrationModalProps {
	isOpen: boolean
	onClose: () => void
}

export default function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
	const [formData, setFormData] = useState({
		fullName: '',
		officialEmail: '',
		companyName: '',
		jobTitle: '',
		countryCode: '+971',
		contactNo: '',
		city: '',
		linkedInURL: '',
		instagramLink: '',
		confirmation: false
	})

	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
	const [errorMessage, setErrorMessage] = useState('')

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
		const { name, value, type } = e.target
		setFormData(prev => ({
			...prev,
			[name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
		}))
	}

	const handleClose = () => {
		if (!isSubmitting) {
			setFormData({
				fullName: '',
				officialEmail: '',
				companyName: '',
				jobTitle: '',
				countryCode: '+971',
				contactNo: '',
				city: '',
				linkedInURL: '',
				instagramLink: '',
				confirmation: false
			})
			setSubmitStatus('idle')
			setErrorMessage('')
			onClose()
		}
	}

	const handleSubmitAndPay = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsSubmitting(true)
		setSubmitStatus('idle')
		setErrorMessage('')

		try {
			// Create Stripe Checkout Session with form data
			const response = await fetch('/api/create-checkout-session', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					type: 'registration',
					formData: formData,
				}),
			})

			const data = await response.json()

			if (!response.ok) {
				throw new Error(data.error || 'Failed to create checkout session')
			}

			// Redirect to Stripe Checkout
			if (data.url) {
				window.location.href = data.url
			} else {
				throw new Error('No checkout URL received')
			}

		} catch (error) {
			console.error('Error processing registration:', error)
			setSubmitStatus('error')
			setErrorMessage(error instanceof Error ? error.message : 'Failed to process registration')
			setIsSubmitting(false)
		}
	}

	if (!isOpen) return null

	return (
		<div style={{
			position: 'fixed',
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			backgroundColor: 'rgba(0, 0, 0, 0.7)',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			zIndex: 1000,
			overflowY: 'auto',
			padding: '20px'
		}}>
			<div style={{
				background: 'white',
				padding: '40px',
				borderRadius: '15px',
				maxWidth: '900px',
				width: '95%',
				maxHeight: '90vh',
				overflowY: 'auto',
				position: 'relative'
			}}>
				<style jsx>{`
					@media (max-width: 768px) {
						.form-grid {
							grid-template-columns: 1fr !important;
						}
					}
				`}</style>
				
				<button onClick={handleClose} style={{
					position: 'absolute',
					top: '20px',
					right: '20px',
					background: 'none',
					border: 'none',
					fontSize: '28px',
					cursor: 'pointer',
					color: '#666'
				}}>
					&times;
				</button>

				<div style={{ textAlign: 'center', marginBottom: '30px' }}>
					<img src="/assets/img/logo/final-logo.png" alt="Logo" style={{ maxWidth: '200px', marginBottom: '20px' }} />
					<h2 style={{ color: '#0e062e', marginBottom: '10px' }}>Women Who Lead: HR Leadership Conference & Awards 2026</h2>
					<p style={{ color: '#666' }}>Registration Form</p>
					<p style={{ color: '#666', fontSize: '14px', marginTop: '10px' }}>
						Fill out the form below. Upon submission, we'll send your registration details via email and open the payment page.
					</p>
				</div>

				{submitStatus === 'success' && (
					<div style={{
						padding: '15px',
						marginBottom: '20px',
						backgroundColor: '#d4edda',
						color: '#155724',
						borderRadius: '8px',
						textAlign: 'center'
					}}>
						Registration submitted successfully! Redirecting to payment...
					</div>
				)}

				{submitStatus === 'error' && (
					<div style={{
						padding: '15px',
						marginBottom: '20px',
						backgroundColor: '#f8d7da',
						color: '#721c24',
						borderRadius: '8px',
						textAlign: 'center'
					}}>
						{errorMessage}
					</div>
				)}

				<form onSubmit={handleSubmitAndPay}>
					{/* Personal Information */}
					<div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
						<div>
							<label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
								Full Name <span style={{ color: 'red' }}>*</span>
							</label>
							<input
								type="text"
								name="fullName"
								value={formData.fullName}
								onChange={handleInputChange}
								required
								style={{
									width: '100%',
									padding: '12px',
									border: '1px solid #ddd',
									borderRadius: '8px',
									fontSize: '14px'
								}}
							/>
						</div>

						<div>
							<label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
								Official Email ID <span style={{ color: 'red' }}>*</span>
							</label>
							<input
								type="email"
								name="officialEmail"
								value={formData.officialEmail}
								onChange={handleInputChange}
								required
								style={{
									width: '100%',
									padding: '12px',
									border: '1px solid #ddd',
									borderRadius: '8px',
									fontSize: '14px'
								}}
							/>
						</div>
					</div>

					<div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
						<div>
							<label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
								Company Name <span style={{ color: 'red' }}>*</span>
							</label>
							<input
								type="text"
								name="companyName"
								value={formData.companyName}
								onChange={handleInputChange}
								required
								style={{
									width: '100%',
									padding: '12px',
									border: '1px solid #ddd',
									borderRadius: '8px',
									fontSize: '14px'
								}}
							/>
						</div>

						<div>
							<label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
								Job Title <span style={{ color: 'red' }}>*</span>
							</label>
							<input
								type="text"
								name="jobTitle"
								value={formData.jobTitle}
								onChange={handleInputChange}
								required
								style={{
									width: '100%',
									padding: '12px',
									border: '1px solid #ddd',
									borderRadius: '8px',
									fontSize: '14px'
								}}
							/>
						</div>
					</div>

					{/* Contact Information */}
					<div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '20px', marginBottom: '20px' }}>
						<div>
							<label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
								Country Code <span style={{ color: 'red' }}>*</span>
							</label>
							<select
								name="countryCode"
								value={formData.countryCode}
								onChange={handleInputChange}
								required
								style={{
									width: '100%',
									padding: '12px',
									border: '1px solid #ddd',
									borderRadius: '8px',
									fontSize: '14px'
								}}
							>
								<option value="+971">+971</option>
								<option value="+966">+966</option>
								<option value="+974">+974</option>
								<option value="+973">+973</option>
								<option value="+965">+965</option>
								<option value="+968">+968</option>
							</select>
						</div>

						<div>
							<label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
								Contact No. <span style={{ color: 'red' }}>*</span>
							</label>
							<input
								type="tel"
								name="contactNo"
								value={formData.contactNo}
								onChange={handleInputChange}
								required
								style={{
									width: '100%',
									padding: '12px',
									border: '1px solid #ddd',
									borderRadius: '8px',
									fontSize: '14px'
								}}
							/>
						</div>
					</div>

					<div style={{ marginBottom: '20px' }}>
						<label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
							City <span style={{ color: 'red' }}>*</span>
						</label>
						<input
							type="text"
							name="city"
							value={formData.city}
							onChange={handleInputChange}
							required
							style={{
								width: '100%',
								padding: '12px',
								border: '1px solid #ddd',
								borderRadius: '8px',
								fontSize: '14px'
							}}
						/>
					</div>

					{/* Social Media Links */}
					<div style={{ marginBottom: '20px' }}>
						<label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
							Provide your LinkedIn URL <span style={{ color: 'red' }}>*</span>
						</label>
						<input
							type="url"
							name="linkedInURL"
							value={formData.linkedInURL}
							onChange={handleInputChange}
							required
							placeholder="https://linkedin.com/in/yourprofile"
							style={{
								width: '100%',
								padding: '12px',
								border: '1px solid #ddd',
								borderRadius: '8px',
								fontSize: '14px'
							}}
						/>
					</div>

					<div style={{ marginBottom: '20px' }}>
						<label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
							Provide your Instagram Link for collaboration post <span style={{ color: 'red' }}>*</span>
						</label>
						<input
							type="url"
							name="instagramLink"
							value={formData.instagramLink}
							onChange={handleInputChange}
							required
							placeholder="https://instagram.com/yourprofile"
							style={{
								width: '100%',
								padding: '12px',
								border: '1px solid #ddd',
								borderRadius: '8px',
								fontSize: '14px'
							}}
						/>
					</div>

					{/* Confirmation */}
					<div style={{ marginBottom: '30px' }}>
						<label style={{ display: 'flex', alignItems: 'flex-start', cursor: 'pointer' }}>
							<input
								type="checkbox"
								name="confirmation"
								checked={formData.confirmation}
								onChange={handleInputChange}
								required
								style={{
									marginRight: '10px',
									marginTop: '4px',
									width: '18px',
									height: '18px',
									cursor: 'pointer'
								}}
							/>
							<span style={{ fontSize: '14px', color: '#333' }}>
								I confirm that the provided information is accurate and consent to being contacted by Event Company. <span style={{ color: 'red' }}>*</span>
							</span>
						</label>
					</div>

					<div style={{ marginTop: '30px', textAlign: 'center' }}>
						<button
							type="submit"
							disabled={isSubmitting}
							style={{
								backgroundColor: isSubmitting ? '#ccc' : '#C9A545',
								color: 'white',
								padding: '15px 40px',
								border: 'none',
								borderRadius: '8px',
								fontSize: '16px',
								fontWeight: 'bold',
								cursor: isSubmitting ? 'not-allowed' : 'pointer',
								transition: 'background-color 0.3s'
							}}
						>
							{isSubmitting ? 'Submitting...' : 'Submit & Pay'}
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

