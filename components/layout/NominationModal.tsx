'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

interface NominationModalProps {
    isOpen: boolean
    onClose: () => void
}

interface FormData {
    nominatorFullName: string
    nominatorEmail: string
    nominatorCountryCode: string
    nominatorMobileNumber: string
    nominatorCompany: string
    nominatorDesignation: string
    nominatorCity: string
    category: string
    nomineeProfilePicture: File | null
    nomineeProjectDetails: string
    nomineeProject: File | null
    nomineeLinkedInURL: string
    nomineeInstagramLink: string
    confirmation: boolean
}

export default function NominationModal({ isOpen, onClose }: NominationModalProps) {
    const [step, setStep] = useState<'form' | 'payment' | 'confirm'>('form')
    const [formData, setFormData] = useState<FormData>({
        nominatorFullName: '',
        nominatorEmail: '',
        nominatorCountryCode: '+971',
        nominatorMobileNumber: '',
        nominatorCompany: '',
        nominatorDesignation: '',
        nominatorCity: '',
        category: '',
        nomineeProfilePicture: null,
        nomineeProjectDetails: '',
        nomineeProject: null,
        nomineeLinkedInURL: '',
        nomineeInstagramLink: '',
        confirmation: false
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitMessage, setSubmitMessage] = useState('')

    // Award categories from the awards page
    const categories = [
        "Best Diversity & Inclusion Strategy",
        "Best Employee Engagement Strategy",
        "Best Employee Wellbeing Programme",
        "Best Executive & Leadership Development",
        "Best HR Technology Implementation",
        "Best HR Transformation Strategy",
        "Best Flexible Working Initiative",
        "Best Innovative HR Initiative",
        "Best L&D Initiative (Private Sector)",
        "Best Recruitment & Onboarding Strategy",
        "Best Rewards & Recognition Strategy",
        "Best Social Impact Initiative",
        "Best Talent Management Strategy",
        "Best Women in Leadership Development",
        "CHRO of the Year",
        "Employer of the Year",
        "HR Team of the Year",
        "HR's Rising Star of the Year",
        "DEI Changemaker Award",
        "People Analytics Leader"
    ]

    // Load form data from localStorage on mount (for returning from Stripe)
    useEffect(() => {
        const savedFormData = localStorage.getItem('nominationFormData')
        const paymentCompleted = localStorage.getItem('paymentCompleted')
        
        if (savedFormData && paymentCompleted === 'true') {
            setFormData(JSON.parse(savedFormData))
            setStep('confirm')
            localStorage.removeItem('paymentCompleted')
        }
    }, [isOpen])

    // Check if returning from Stripe payment
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const urlParams = new URLSearchParams(window.location.search)
            if (urlParams.get('payment') === 'success') {
                localStorage.setItem('paymentCompleted', 'true')
                // Clean up URL
                window.history.replaceState({}, '', window.location.pathname)
            }
        }
    }, [])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target
        const checked = (e.target as HTMLInputElement).checked
        
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
        if (e.target.files && e.target.files[0]) {
            setFormData(prev => ({
                ...prev,
                [fieldName]: e.target.files![0]
            }))
        }
    }

    const handlePayment = () => {
        // Save form data to localStorage before redirecting to Stripe
        localStorage.setItem('nominationFormData', JSON.stringify(formData))
        
        // Redirect to Stripe payment link
        // The success URL should be configured in the Stripe Dashboard for this payment link
        window.location.href = `https://buy.stripe.com/6oUcN5e1I5oadnG8954c81d`
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitMessage('')

        try {
            const response = await fetch('/api/submit-nomination', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    nomineeProfilePicture: formData.nomineeProfilePicture?.name || 'None',
                    nomineeProject: formData.nomineeProject?.name || 'None'
                })
            })

            if (response.ok) {
                setSubmitMessage('Nomination submitted successfully! We will contact you soon.')
                localStorage.removeItem('nominationFormData')
                setTimeout(() => {
                    onClose()
                    resetForm()
                }, 3000)
            } else {
                setSubmitMessage('Error submitting nomination. Please try again.')
            }
        } catch (error) {
            console.error('Error:', error)
            setSubmitMessage('Error submitting nomination. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    const resetForm = () => {
        setFormData({
            nominatorFullName: '',
            nominatorEmail: '',
            nominatorCountryCode: '+971',
            nominatorMobileNumber: '',
            nominatorCompany: '',
            nominatorDesignation: '',
            nominatorCity: '',
            category: '',
            nomineeProfilePicture: null,
            nomineeProjectDetails: '',
            nomineeProject: null,
            nomineeLinkedInURL: '',
            nomineeInstagramLink: '',
            confirmation: false
        })
        setStep('form')
        setSubmitMessage('')
    }

    const handleClose = () => {
        if (step !== 'confirm') {
            localStorage.removeItem('nominationFormData')
        }
        onClose()
    }

    if (!isOpen) return null

    return (
        <>
            <div className="modal-overlay" onClick={handleClose} style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                zIndex: 9998,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }} />
            <div className="nomination-modal" style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: '#1a1a1a',
                padding: '40px',
                borderRadius: '12px',
                zIndex: 9999,
                maxWidth: '600px',
                width: '90%',
                maxHeight: '90vh',
                overflowY: 'auto',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)'
            }}>
                <div style={{ position: 'relative' }}>
                    <button
                        onClick={handleClose}
                        style={{
                            position: 'absolute',
                            top: '-20px',
                            right: '-20px',
                            background: 'transparent',
                            border: 'none',
                            fontSize: '30px',
                            cursor: 'pointer',
                            color: '#fff',
                            lineHeight: '1'
                        }}
                    >
                        ×
                    </button>

                    <div className="modal-header" style={{ marginBottom: '30px' }}>
                        <h2 style={{ color: '#C9A545', fontSize: '28px', marginBottom: '10px' }}>
                            {step === 'confirm' ? 'Confirm Your Nomination' : 'Submit Your Nomination'}
                        </h2>
                        {step === 'confirm' && (
                            <p style={{ color: '#fff', fontSize: '14px' }}>
                                Payment successful! Please review and confirm your nomination details below.
                            </p>
                        )}
                    </div>

                    <form onSubmit={handleSubmit}>
                        {/* Nominator Information */}
                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', color: '#fff', marginBottom: '8px', fontSize: '14px' }}>
                                Full Name <span style={{ color: '#C9A545' }}>*</span>
                            </label>
                            <input
                                type="text"
                                name="nominatorFullName"
                                value={formData.nominatorFullName}
                                onChange={handleInputChange}
                                required
                                disabled={step === 'confirm'}
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    backgroundColor: '#2a2a2a',
                                    border: '1px solid #444',
                                    borderRadius: '6px',
                                    color: '#fff',
                                    fontSize: '14px'
                                }}
                            />
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', color: '#fff', marginBottom: '8px', fontSize: '14px' }}>
                                Official Email ID <span style={{ color: '#C9A545' }}>*</span>
                            </label>
                            <input
                                type="email"
                                name="nominatorEmail"
                                value={formData.nominatorEmail}
                                onChange={handleInputChange}
                                required
                                disabled={step === 'confirm'}
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    backgroundColor: '#2a2a2a',
                                    border: '1px solid #444',
                                    borderRadius: '6px',
                                    color: '#fff',
                                    fontSize: '14px'
                                }}
                            />
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', color: '#fff', marginBottom: '8px', fontSize: '14px' }}>
                                Country Code <span style={{ color: '#C9A545' }}>*</span>
                            </label>
                            <select
                                name="nominatorCountryCode"
                                value={formData.nominatorCountryCode}
                                onChange={handleInputChange}
                                required
                                disabled={step === 'confirm'}
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    backgroundColor: '#2a2a2a',
                                    border: '1px solid #444',
                                    borderRadius: '6px',
                                    color: '#fff',
                                    fontSize: '14px'
                                }}
                            >
                                <option value="+971">+971 (UAE)</option>
                                <option value="+966">+966 (Saudi Arabia)</option>
                                <option value="+974">+974 (Qatar)</option>
                                <option value="+973">+973 (Bahrain)</option>
                                <option value="+965">+965 (Kuwait)</option>
                                <option value="+968">+968 (Oman)</option>
                            </select>
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', color: '#fff', marginBottom: '8px', fontSize: '14px' }}>
                                Mobile Number <span style={{ color: '#C9A545' }}>*</span>
                            </label>
                            <input
                                type="tel"
                                name="nominatorMobileNumber"
                                value={formData.nominatorMobileNumber}
                                onChange={handleInputChange}
                                required
                                disabled={step === 'confirm'}
                                placeholder="Enter mobile number"
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    backgroundColor: '#2a2a2a',
                                    border: '1px solid #444',
                                    borderRadius: '6px',
                                    color: '#fff',
                                    fontSize: '14px'
                                }}
                            />
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', color: '#fff', marginBottom: '8px', fontSize: '14px' }}>
                                Company Name <span style={{ color: '#C9A545' }}>*</span>
                            </label>
                            <input
                                type="text"
                                name="nominatorCompany"
                                value={formData.nominatorCompany}
                                onChange={handleInputChange}
                                required
                                disabled={step === 'confirm'}
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    backgroundColor: '#2a2a2a',
                                    border: '1px solid #444',
                                    borderRadius: '6px',
                                    color: '#fff',
                                    fontSize: '14px'
                                }}
                            />
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', color: '#fff', marginBottom: '8px', fontSize: '14px' }}>
                                Designation <span style={{ color: '#C9A545' }}>*</span>
                            </label>
                            <input
                                type="text"
                                name="nominatorDesignation"
                                value={formData.nominatorDesignation}
                                onChange={handleInputChange}
                                required
                                disabled={step === 'confirm'}
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    backgroundColor: '#2a2a2a',
                                    border: '1px solid #444',
                                    borderRadius: '6px',
                                    color: '#fff',
                                    fontSize: '14px'
                                }}
                            />
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', color: '#fff', marginBottom: '8px', fontSize: '14px' }}>
                                City <span style={{ color: '#C9A545' }}>*</span>
                            </label>
                            <input
                                type="text"
                                name="nominatorCity"
                                value={formData.nominatorCity}
                                onChange={handleInputChange}
                                required
                                disabled={step === 'confirm'}
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    backgroundColor: '#2a2a2a',
                                    border: '1px solid #444',
                                    borderRadius: '6px',
                                    color: '#fff',
                                    fontSize: '14px'
                                }}
                            />
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', color: '#fff', marginBottom: '8px', fontSize: '14px' }}>
                                Category of Nomination <span style={{ color: '#C9A545' }}>*</span>
                            </label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleInputChange}
                                required
                                disabled={step === 'confirm'}
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    backgroundColor: '#2a2a2a',
                                    border: '1px solid #444',
                                    borderRadius: '6px',
                                    color: '#fff',
                                    fontSize: '14px'
                                }}
                            >
                                <option value="">Select a category</option>
                                {categories.map((cat, index) => (
                                    <option key={index} value={cat}>{cat}</option>
                                ))}
                            </select>
                        </div>

                        {step !== 'confirm' && (
                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', color: '#fff', marginBottom: '8px', fontSize: '14px' }}>
                                    Upload your profile picture <span style={{ color: '#C9A545' }}>*</span>
                                </label>
                                <input
                                    type="file"
                                    onChange={(e) => handleFileChange(e, 'nomineeProfilePicture')}
                                    accept="image/*"
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        backgroundColor: '#2a2a2a',
                                        border: '1px solid #444',
                                        borderRadius: '6px',
                                        color: '#fff',
                                        fontSize: '14px'
                                    }}
                                />
                                <small style={{ color: '#888', fontSize: '12px', marginTop: '5px', display: 'block' }}>
                                    Upload 1 supported file. Max 10 MB
                                </small>
                            </div>
                        )}

                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', color: '#fff', marginBottom: '8px', fontSize: '14px' }}>
                                Write Project Details <span style={{ color: '#C9A545' }}>*</span>
                            </label>
                            <textarea
                                name="nomineeProjectDetails"
                                value={formData.nomineeProjectDetails}
                                onChange={handleInputChange}
                                required
                                disabled={step === 'confirm'}
                                rows={5}
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    backgroundColor: '#2a2a2a',
                                    border: '1px solid #444',
                                    borderRadius: '6px',
                                    color: '#fff',
                                    fontSize: '14px',
                                    resize: 'vertical'
                                }}
                            />
                        </div>

                        {step !== 'confirm' && (
                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', color: '#fff', marginBottom: '8px', fontSize: '14px' }}>
                                    Upload Your Project (if any)
                                </label>
                                <input
                                    type="file"
                                    onChange={(e) => handleFileChange(e, 'nomineeProject')}
                                    accept=".pdf,.doc,.docx,.ppt,.pptx"
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        backgroundColor: '#2a2a2a',
                                        border: '1px solid #444',
                                        borderRadius: '6px',
                                        color: '#fff',
                                        fontSize: '14px'
                                    }}
                                />
                                <small style={{ color: '#888', fontSize: '12px', marginTop: '5px', display: 'block' }}>
                                    Upload 1 supported file. Max 10 MB
                                </small>
                            </div>
                        )}

                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', color: '#fff', marginBottom: '8px', fontSize: '14px' }}>
                                Provide your LinkedIn URL <span style={{ color: '#C9A545' }}>*</span>
                            </label>
                            <input
                                type="url"
                                name="nomineeLinkedInURL"
                                value={formData.nomineeLinkedInURL}
                                onChange={handleInputChange}
                                required
                                disabled={step === 'confirm'}
                                placeholder="https://linkedin.com/in/yourprofile"
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    backgroundColor: '#2a2a2a',
                                    border: '1px solid #444',
                                    borderRadius: '6px',
                                    color: '#fff',
                                    fontSize: '14px'
                                }}
                            />
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', color: '#fff', marginBottom: '8px', fontSize: '14px' }}>
                                Provide your Instagram Link for collaboration post <span style={{ color: '#C9A545' }}>*</span>
                            </label>
                            <input
                                type="url"
                                name="nomineeInstagramLink"
                                value={formData.nomineeInstagramLink}
                                onChange={handleInputChange}
                                required
                                disabled={step === 'confirm'}
                                placeholder="https://instagram.com/yourprofile"
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    backgroundColor: '#2a2a2a',
                                    border: '1px solid #444',
                                    borderRadius: '6px',
                                    color: '#fff',
                                    fontSize: '14px'
                                }}
                            />
                        </div>

                        <div style={{ marginBottom: '30px' }}>
                            <label style={{ display: 'flex', alignItems: 'flex-start', color: '#fff', fontSize: '14px', cursor: 'pointer' }}>
                                <input
                                    type="checkbox"
                                    name="confirmation"
                                    checked={formData.confirmation}
                                    onChange={handleInputChange}
                                    required
                                    disabled={step === 'confirm'}
                                    style={{
                                        marginRight: '10px',
                                        marginTop: '4px',
                                        width: '18px',
                                        height: '18px',
                                        cursor: 'pointer'
                                    }}
                                />
                                <span>I confirm that the provided information is accurate and consent to being contacted by Event Company <span style={{ color: '#C9A545' }}>*</span></span>
                            </label>
                        </div>

                        {submitMessage && (
                            <div style={{
                                padding: '15px',
                                marginBottom: '20px',
                                backgroundColor: submitMessage.includes('success') ? '#1a4d1a' : '#4d1a1a',
                                color: '#fff',
                                borderRadius: '6px',
                                fontSize: '14px'
                            }}>
                                {submitMessage}
                            </div>
                        )}

                        <div style={{ display: 'flex', gap: '15px' }}>
                            {step !== 'confirm' ? (
                                <>
                                    <button
                                        type="button"
                                        onClick={handleClose}
                                        style={{
                                            flex: 1,
                                            padding: '14px',
                                            backgroundColor: 'transparent',
                                            border: '2px solid #C9A545',
                                            color: '#C9A545',
                                            borderRadius: '6px',
                                            cursor: 'pointer',
                                            fontSize: '16px',
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handlePayment}
                                        style={{
                                            flex: 1,
                                            padding: '14px',
                                            backgroundColor: '#C9A545',
                                            border: 'none',
                                            color: '#000',
                                            borderRadius: '6px',
                                            cursor: 'pointer',
                                            fontSize: '16px',
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        Pay to Continue
                                    </button>
                                </>
                            ) : (
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    style={{
                                        width: '100%',
                                        padding: '14px',
                                        backgroundColor: isSubmitting ? '#666' : '#C9A545',
                                        border: 'none',
                                        color: '#000',
                                        borderRadius: '6px',
                                        cursor: isSubmitting ? 'not-allowed' : 'pointer',
                                        fontSize: '16px',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    {isSubmitting ? 'Submitting...' : 'Confirm & Submit Nomination'}
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}


