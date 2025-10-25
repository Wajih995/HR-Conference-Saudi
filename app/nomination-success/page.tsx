'use client'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Layout from '@/components/layout/Layout'
import Link from 'next/link'

export default function NominationSuccess() {
	const [status, setStatus] = useState<'processing' | 'success' | 'error'>('processing')
	const [message, setMessage] = useState('Processing your nomination...')
	const searchParams = useSearchParams()

	useEffect(() => {
		const submitNomination = async () => {
			try {
				// Get session ID from URL
				const sessionId = searchParams.get('session_id')
				
				if (!sessionId) {
					setStatus('error')
					setMessage('No payment session found. Please try again.')
					return
				}

				// Verify payment and get form data from session
				const verifyResponse = await fetch('/api/verify-payment', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ sessionId }),
				})

				const verifyData = await verifyResponse.json()

				if (!verifyResponse.ok || verifyData.paymentStatus !== 'paid') {
					throw new Error('Payment verification failed')
				}

				const formDataFromStripe = verifyData.formData

				// Create FormData object with files
				const formDataToSend = new FormData()
				
				// Append all text fields
				formDataToSend.append('nominatorFullName', formDataFromStripe.nominatorFullName)
				formDataToSend.append('nominatorEmail', formDataFromStripe.nominatorEmail)
				formDataToSend.append('nominatorCountryCode', formDataFromStripe.nominatorCountryCode)
				formDataToSend.append('nominatorMobileNumber', formDataFromStripe.nominatorMobileNumber)
				formDataToSend.append('nominatorCompany', formDataFromStripe.nominatorCompany)
				formDataToSend.append('nominatorDesignation', formDataFromStripe.nominatorDesignation)
				formDataToSend.append('nominatorCity', formDataFromStripe.nominatorCity)
				formDataToSend.append('category', formDataFromStripe.category)
				formDataToSend.append('nomineeProjectDetails', formDataFromStripe.nomineeProjectDetails)
				formDataToSend.append('nomineeLinkedInURL', formDataFromStripe.nomineeLinkedInURL)
				formDataToSend.append('nomineeInstagramLink', formDataFromStripe.nomineeInstagramLink)
				formDataToSend.append('confirmation', formDataFromStripe.confirmation.toString())
				
				// Add file IDs for server to retrieve files
				if (formDataFromStripe.profilePictureId) {
					formDataToSend.append('profilePictureId', formDataFromStripe.profilePictureId)
				}
				if (formDataFromStripe.projectFileId) {
					formDataToSend.append('projectFileId', formDataFromStripe.projectFileId)
				}

				// Submit to API
				const response = await fetch('/api/submit-nomination', {
					method: 'POST',
					body: formDataToSend,
				})

				const data = await response.json()

				if (!response.ok) {
					throw new Error(data.error || 'Failed to submit nomination')
				}
				
				setStatus('success')
				setMessage('Nomination completed successfully!')

			} catch (error) {
				console.error('Error submitting nomination:', error)
				setStatus('error')
				setMessage(error instanceof Error ? error.message : 'Failed to submit nomination')
			}
		}

		// Submit after a short delay to ensure page is fully loaded
		const timer = setTimeout(() => {
			submitNomination()
		}, 1000)

		return () => clearTimeout(timer)
	}, [searchParams])

	return (
		<Layout headerStyle={3} footerStyle={3}>
			<div style={{
				minHeight: '80vh',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				padding: '40px 20px'
			}}>
				<div style={{
					maxWidth: '600px',
					width: '100%',
					textAlign: 'center',
					background: 'white',
					padding: '60px 40px',
					borderRadius: '15px',
					boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
				}}>
					{status === 'processing' && (
						<>
							<div style={{
								width: '80px',
								height: '80px',
								border: '5px solid #f3f3f3',
								borderTop: '5px solid #C9A545',
								borderRadius: '50%',
								animation: 'spin 1s linear infinite',
								margin: '0 auto 30px'
							}} />
							<style jsx>{`
								@keyframes spin {
									0% { transform: rotate(0deg); }
									100% { transform: rotate(360deg); }
								}
							`}</style>
							<h2 style={{ color: '#0e062e', marginBottom: '15px' }}>Processing Your Nomination</h2>
							<p style={{ color: '#666', fontSize: '16px' }}>{message}</p>
						</>
					)}

					{status === 'success' && (
						<>
							<div style={{
								width: '80px',
								height: '80px',
								background: '#28a745',
								borderRadius: '50%',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								margin: '0 auto 30px',
								fontSize: '48px',
								color: 'white'
							}}>
								✓
							</div>
							<h2 style={{ color: '#28a745', marginBottom: '15px' }}>Payment Successful!</h2>
							<p style={{ color: '#666', fontSize: '16px', marginBottom: '20px' }}>{message}</p>
							<p style={{ color: '#666', fontSize: '14px', marginBottom: '30px' }}>
								A confirmation email has been sent to your registered email address with all the details.
							</p>
							<Link href="/" style={{
								display: 'inline-block',
								background: '#C9A545',
								color: 'white',
								padding: '15px 40px',
								borderRadius: '8px',
								textDecoration: 'none',
								fontWeight: 'bold',
								transition: 'background 0.3s'
							}}>
								Back to Home
							</Link>
						</>
					)}

					{status === 'error' && (
						<>
							<div style={{
								width: '80px',
								height: '80px',
								background: '#dc3545',
								borderRadius: '50%',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								margin: '0 auto 30px',
								fontSize: '48px',
								color: 'white'
							}}>
								✕
							</div>
							<h2 style={{ color: '#dc3545', marginBottom: '15px' }}>Nomination Error</h2>
							<p style={{ color: '#666', fontSize: '16px', marginBottom: '30px' }}>{message}</p>
							<div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
								<Link href="/" style={{
									display: 'inline-block',
									background: '#C9A545',
									color: 'white',
									padding: '15px 40px',
									borderRadius: '8px',
									textDecoration: 'none',
									fontWeight: 'bold'
								}}>
									Back to Home
								</Link>
								<Link href="mailto:Yasir@theboredroomx.com" style={{
									display: 'inline-block',
									background: '#0e062e',
									color: 'white',
									padding: '15px 40px',
									borderRadius: '8px',
									textDecoration: 'none',
									fontWeight: 'bold'
								}}>
									Contact Support
								</Link>
							</div>
						</>
					)}
				</div>
			</div>
		</Layout>
	)
}

