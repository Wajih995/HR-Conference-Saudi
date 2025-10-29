'use client'

interface PrivacyPolicyModalProps {
	isOpen: boolean
	onClose: () => void
}

export default function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
	if (!isOpen) return null

	return (
		<>
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
						<h2 style={{ color: '#0e062e', marginBottom: '10px' }}>Privacy Policy</h2>
						<p style={{ color: '#666', fontSize: '14px', marginTop: '10px' }}>
							BRX Events Privacy Policy
						</p>
					</div>

					<div style={{
						lineHeight: '1.8',
						color: '#333',
						fontSize: '16px'
					}}>
						<p style={{ marginBottom: '20px' }}>
							At BRX Events, we value your trust and are committed to protecting your personal data in accordance with the Kingdom of Saudi Arabia's Personal Data Protection Law (PDPL).
						</p>

						<p style={{ marginBottom: '20px' }}>
							Any information you provide through our website — including contact details, inquiries, or event registrations — is collected and processed solely for communication and service-related purposes.
						</p>

						<p style={{ marginBottom: '20px' }}>
							We implement strict administrative, technical, and organizational measures to safeguard your personal data against unauthorized access, disclosure, or misuse.
						</p>

						<p style={{ marginBottom: '20px' }}>
							We do not share or sell your personal information to any third party without your explicit consent, except where required by law or to deliver our services effectively. If you wish to access, update, or delete your personal data, please contact us at <a href="mailto:Yasir@theboredroomx.com" style={{ color: '#C9A545', textDecoration: 'none' }}>Yasir@theboredroomx.com</a>.
						</p>
					</div>

					<div style={{ marginTop: '30px', textAlign: 'center' }}>
						<button
							type="button"
							onClick={onClose}
							style={{
								backgroundColor: '#C9A545',
								color: 'white',
								padding: '15px 40px',
								border: 'none',
								borderRadius: '8px',
								fontSize: '16px',
								fontWeight: 'bold',
								cursor: 'pointer',
								transition: 'background-color 0.3s'
							}}
						>
							Close
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

