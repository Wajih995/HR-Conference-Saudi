'use client'
import { useState, useEffect } from 'react'

interface SponsorshipModalProps {
	isOpen: boolean
	onClose: () => void
	preSelectedPackage?: string
}

export default function SponsorshipModal({ isOpen, onClose, preSelectedPackage }: SponsorshipModalProps) {
	const [formData, setFormData] = useState({
		companyName: '',
		industry: '',
		websiteUrl: '',
		socialMediaLink: '',
		officeLocation: '',
		countryCode: '',
		contactNo: '',
		designation: '',
		officialEmail: '',
		sponsorshipPackage: [] as string[],
		customPackage: '',
		estimatedBudget: '',
		keyObjective: '',
		specialRequirements: ''
	})

	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

	// Update form when modal opens or preSelectedPackage changes
	useEffect(() => {
		if (isOpen && preSelectedPackage) {
			setFormData(prev => ({
				...prev,
				sponsorshipPackage: [preSelectedPackage]
			}))
		}
	}, [isOpen, preSelectedPackage])

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const { name, value } = e.target
		setFormData(prev => ({
			...prev,
			[name]: value
		}))
	}

	const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value, checked } = e.target
		setFormData(prev => ({
			...prev,
			sponsorshipPackage: checked
				? [...prev.sponsorshipPackage, value]
				: prev.sponsorshipPackage.filter(item => item !== value)
		}))
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsSubmitting(true)
		setSubmitStatus('idle')

		try {
			const response = await fetch('/api/submit-sponsorship', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			})

			if (response.ok) {
				setSubmitStatus('success')
				setTimeout(() => {
					onClose()
					setFormData({
						companyName: '',
						industry: '',
						websiteUrl: '',
						socialMediaLink: '',
						officeLocation: '',
						countryCode: '',
						contactNo: '',
						designation: '',
						officialEmail: '',
						sponsorshipPackage: [],
						customPackage: '',
						estimatedBudget: '',
						keyObjective: '',
						specialRequirements: ''
					})
					setSubmitStatus('idle')
				}, 2000)
			} else {
				setSubmitStatus('error')
			}
		} catch (error) {
			console.error('Error submitting form:', error)
			setSubmitStatus('error')
		} finally {
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
				<button onClick={onClose} style={{
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
					<p style={{ color: '#666' }}>Sponsorship Application Form</p>
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
						Thank you! Your sponsorship application has been submitted successfully.
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
						Something went wrong. Please try again.
					</div>
				)}

				<form onSubmit={handleSubmit}>
					<style jsx>{`
						@media (max-width: 768px) {
							.form-grid {
								grid-template-columns: 1fr !important;
							}
						}
					`}</style>

					<div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
						<div style={{ gridColumn: '1 / -1' }}>
							<label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
								Company Name <span style={{ color: 'red' }}>*</span>
							</label>
							<input
								type="text"
								name="companyName"
								value={formData.companyName}
								onChange={handleChange}
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
								Industry / Sector <span style={{ color: 'red' }}>*</span>
							</label>
							<input
								type="text"
								name="industry"
								value={formData.industry}
								onChange={handleChange}
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
								Website URL <span style={{ color: 'red' }}>*</span>
							</label>
							<input
								type="url"
								name="websiteUrl"
								value={formData.websiteUrl}
								onChange={handleChange}
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
								Social Media Link <span style={{ color: 'red' }}>*</span>
							</label>
							<input
								type="url"
								name="socialMediaLink"
								value={formData.socialMediaLink}
								onChange={handleChange}
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
								Office Location (City & Country) <span style={{ color: 'red' }}>*</span>
							</label>
							<input
								type="text"
								name="officeLocation"
								value={formData.officeLocation}
								onChange={handleChange}
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
								Country Code <span style={{ color: 'red' }}>*</span>
							</label>
							<select
								name="countryCode"
								value={formData.countryCode}
								onChange={handleChange}
								required
								style={{
									width: '100%',
									padding: '12px',
									border: '1px solid #ddd',
									borderRadius: '8px',
									fontSize: '14px'
								}}
							>
								<option value="">Select</option>
								<option value="+971">+971 (UAE)</option>
								<option value="+966">+966 (Saudi Arabia)</option>
								<option value="+974">+974 (Qatar)</option>
								<option value="+973">+973 (Bahrain)</option>
								<option value="+965">+965 (Kuwait)</option>
								<option value="+968">+968 (Oman)</option>
								<option value="Other">Other</option>
							</select>
						</div>

						<div>
							<label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
								Contact No <span style={{ color: 'red' }}>*</span>
							</label>
							<input
								type="tel"
								name="contactNo"
								value={formData.contactNo}
								onChange={handleChange}
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
								Designation / Role <span style={{ color: 'red' }}>*</span>
							</label>
							<input
								type="text"
								name="designation"
								value={formData.designation}
								onChange={handleChange}
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

						<div style={{ gridColumn: '1 / -1' }}>
							<label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
								Official Email Address <span style={{ color: 'red' }}>*</span>
							</label>
							<input
								type="email"
								name="officialEmail"
								value={formData.officialEmail}
								onChange={handleChange}
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

						<div style={{ gridColumn: '1 / -1' }}>
							<label style={{ display: 'block', marginBottom: '12px', fontWeight: '500' }}>
								Select Your Sponsorship Tier / Package <span style={{ color: 'red' }}>*</span>
							</label>
							<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
								{[
									'Platinum Partner',
									'Gold Partner',
									'Silver Partner',
									'Networking Bright + Accessories Sponsorship',
									'Speaker Package',
									'Awards Sponsorship',
									'Tech Sponsor',
									'Engagement Partner',
									'Co-Sponsors',
									'F&B Chocolate/Sweets',
									'Training Partner',
									'Insurance Partner',
									'Gala Dinner Sponsor',
									'Entertainment Sponsor',
									'Other'
								].map((pkg) => (
									<label key={pkg} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
										<input
											type="checkbox"
											value={pkg}
											checked={formData.sponsorshipPackage.includes(pkg)}
											onChange={handleCheckboxChange}
											style={{ marginRight: '8px' }}
										/>
										<span style={{ fontSize: '14px' }}>{pkg}</span>
									</label>
								))}
							</div>
						</div>

						<div style={{ gridColumn: '1 / -1' }}>
							<label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
								If Custom, please specify your preferred partnership type
							</label>
							<textarea
								name="customPackage"
								value={formData.customPackage}
								onChange={handleChange}
								rows={3}
								style={{
									width: '100%',
									padding: '12px',
									border: '1px solid #ddd',
									borderRadius: '8px',
									fontSize: '14px',
									resize: 'vertical'
								}}
							/>
						</div>

						<div style={{ gridColumn: '1 / -1' }}>
							<label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
								Estimated Sponsorship Budget <span style={{ color: 'red' }}>*</span>
							</label>
							<input
								type="text"
								name="estimatedBudget"
								value={formData.estimatedBudget}
								onChange={handleChange}
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

						<div style={{ gridColumn: '1 / -1' }}>
							<label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
								Company's Key Objective for Sponsorship <span style={{ color: 'red' }}>*</span>
							</label>
							<textarea
								name="keyObjective"
								value={formData.keyObjective}
								onChange={handleChange}
								required
								rows={3}
								style={{
									width: '100%',
									padding: '12px',
									border: '1px solid #ddd',
									borderRadius: '8px',
									fontSize: '14px',
									resize: 'vertical'
								}}
							/>
						</div>

						<div style={{ gridColumn: '1 / -1' }}>
							<label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
								Any special requirements or notes?
							</label>
							<textarea
								name="specialRequirements"
								value={formData.specialRequirements}
								onChange={handleChange}
								rows={3}
								style={{
									width: '100%',
									padding: '12px',
									border: '1px solid #ddd',
									borderRadius: '8px',
									fontSize: '14px',
									resize: 'vertical'
								}}
							/>
						</div>
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
							{isSubmitting ? 'Submitting...' : 'Submit Application'}
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

