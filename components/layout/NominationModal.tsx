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
    const [showPaymentLink, setShowPaymentLink] = useState(false)

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

    // No need for localStorage or payment flow checks anymore

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
            const file = e.target.files[0]
            const maxSize = 3 * 1024 * 1024 // 3MB in bytes
            
            // Validate file size
            if (file.size > maxSize) {
                alert('File size must be less than 3MB. Please choose a smaller file.')
                e.target.value = '' // Clear the input
                return
            }
            
            // Validate image file type for profile picture
            if (fieldName === 'nomineeProfilePicture') {
                const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png']
                if (!allowedTypes.includes(file.type.toLowerCase())) {
                    alert('Only JPG, JPEG, and PNG image formats are allowed. WebP and other formats are not supported.')
                    e.target.value = '' // Clear the input
                    return
                }
            }
            
            setFormData(prev => ({
                ...prev,
                [fieldName]: file
            }))
        }
    }

    const handleSubmitAndPay = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitMessage('')

        try {
            // Upload files directly to Vercel Blob (client-side)
            let fileIds = { profilePictureId: '', projectFileId: '' }
            
            // Upload profile picture
            if (formData.nomineeProfilePicture) {
                const { upload } = await import('@vercel/blob/client')
                const timestamp = Date.now()
                const fileName = `nomination-profile-${timestamp}-${formData.nomineeProfilePicture.name}`
                const blob = await upload(fileName, formData.nomineeProfilePicture, {
                    access: 'public',
                    handleUploadUrl: '/api/upload-url',
                })
                fileIds.profilePictureId = blob.url
            }
            
            // Upload project file
            if (formData.nomineeProject) {
                const { upload } = await import('@vercel/blob/client')
                const timestamp = Date.now()
                const fileName = `nomination-project-${timestamp}-${formData.nomineeProject.name}`
                const blob = await upload(fileName, formData.nomineeProject, {
                    access: 'public',
                    handleUploadUrl: '/api/upload-url',
                })
                fileIds.projectFileId = blob.url
            }

            // Create text-only form data for Stripe metadata
            const textFormData = {
                nominatorFullName: formData.nominatorFullName,
                nominatorEmail: formData.nominatorEmail,
                nominatorCountryCode: formData.nominatorCountryCode,
                nominatorMobileNumber: formData.nominatorMobileNumber,
                nominatorCompany: formData.nominatorCompany,
                nominatorDesignation: formData.nominatorDesignation,
                nominatorCity: formData.nominatorCity,
                category: formData.category,
                nomineeProjectDetails: formData.nomineeProjectDetails,
                nomineeLinkedInURL: formData.nomineeLinkedInURL,
                nomineeInstagramLink: formData.nomineeInstagramLink,
                confirmation: formData.confirmation,
                profilePictureId: fileIds.profilePictureId,
                projectFileId: fileIds.projectFileId
            }

            // Create Stripe Checkout Session with text data and file IDs
            const response = await fetch('/api/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    type: 'nomination',
                    formData: textFormData,
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
            console.error('Error:', error)
            setSubmitMessage(error instanceof Error ? error.message : 'Error processing nomination. Please try again.')
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
        setSubmitMessage('')
        setShowPaymentLink(false)
    }

    const handleClose = () => {
        onClose()
    }

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
                    <p style={{ color: '#666' }}>Award Nomination Form</p>
                    <p style={{ color: '#666', fontSize: '14px', marginTop: '10px' }}>
                        Fill out the form below. Upon submission, we'll send your nomination details via email and open the payment page.
                    </p>
                    </div>

                    <form onSubmit={handleSubmitAndPay}>
                        {/* Nominator Information */}
                        <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                            <div>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                                Full Name <span style={{ color: 'red' }}>*</span>
                            </label>
                            <input
                                type="text"
                                name="nominatorFullName"
                                value={formData.nominatorFullName}
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
                                name="nominatorEmail"
                                value={formData.nominatorEmail}
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
                                Country Code <span style={{ color: 'red' }}>*</span>
                            </label>
                            <select
                                name="nominatorCountryCode"
                                value={formData.nominatorCountryCode}
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
                                <option value="+971">+971 (UAE)</option>
                                <option value="+966">+966 (Saudi Arabia)</option>
                                <option value="+974">+974 (Qatar)</option>
                                <option value="+973">+973 (Bahrain)</option>
                                <option value="+965">+965 (Kuwait)</option>
                                <option value="+968">+968 (Oman)</option>
                            </select>
                        </div>
                            <div>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                                Mobile Number <span style={{ color: 'red' }}>*</span>
                            </label>
                            <input
                                type="tel"
                                name="nominatorMobileNumber"
                                value={formData.nominatorMobileNumber}
                                onChange={handleInputChange}
                                required
                                placeholder="Enter mobile number"
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
                                name="nominatorCompany"
                                value={formData.nominatorCompany}
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
                                Designation <span style={{ color: 'red' }}>*</span>
                            </label>
                            <input
                                type="text"
                                name="nominatorDesignation"
                                value={formData.nominatorDesignation}
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
                                City <span style={{ color: 'red' }}>*</span>
                            </label>
                            <input
                                type="text"
                                name="nominatorCity"
                                value={formData.nominatorCity}
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
                                Category of Nomination <span style={{ color: 'red' }}>*</span>
                            </label>
                            <select
                                name="category"
                                value={formData.category}
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
                                <option value="">Select a category</option>
                                {categories.map((cat, index) => (
                                    <option key={index} value={cat}>{cat}</option>
                                ))}
                            </select>
                        </div>
                        </div>


                        <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                                    Upload your profile picture <span style={{ color: 'red' }}>*</span>
                                </label>
                                <input
                                    type="file"
                                    onChange={(e) => handleFileChange(e, 'nomineeProfilePicture')}
                                    accept=".jpg,.jpeg,.png"
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
                                <small style={{ color: '#666', fontSize: '12px', marginTop: '5px', display: 'block' }}>
                                    Only JPG, JPEG, or PNG formats. Max 3 MB
                                </small>
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
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
                                <small style={{ color: '#666', fontSize: '12px', marginTop: '5px', display: 'block' }}>
                                    Upload 1 supported file. Max 3 MB
                                </small>
                            </div>
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                                Write Project Details <span style={{ color: 'red' }}>*</span>
                            </label>
                            <textarea
                                name="nomineeProjectDetails"
                                value={formData.nomineeProjectDetails}
                                onChange={handleInputChange}
                                required
                                rows={5}
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

                        <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                            <div>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                                Provide your LinkedIn URL <span style={{ color: 'red' }}>*</span>
                            </label>
                            <input
                                    type="text"
                                name="nomineeLinkedInURL"
                                value={formData.nomineeLinkedInURL}
                                onChange={handleInputChange}
                                required
                                    placeholder="https://linkedin.com/in/yourprofile or www.linkedin.com/in/yourprofile"
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
                                Provide your Instagram Link for collaboration post <span style={{ color: 'red' }}>*</span>
                            </label>
                            <input
                                    type="text"
                                name="nomineeInstagramLink"
                                value={formData.nomineeInstagramLink}
                                onChange={handleInputChange}
                                required
                                    placeholder="https://instagram.com/yourprofile or www.instagram.com/yourprofile"
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

                        <div style={{ marginBottom: '30px' }}>
                            <label style={{ display: 'flex', alignItems: 'flex-start', fontSize: '14px', cursor: 'pointer' }}>
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
                                <span>I confirm that the provided information is accurate and consent to being contacted by Event Company <span style={{ color: 'red' }}>*</span></span>
                            </label>
                        </div>

                        {submitMessage && (
                            <div style={{
                                padding: '15px',
                                marginBottom: '20px',
                                backgroundColor: submitMessage.includes('success') ? '#d4edda' : '#f8d7da',
                                color: submitMessage.includes('success') ? '#155724' : '#721c24',
                                borderRadius: '8px',
                                textAlign: 'center'
                            }}>
                                {submitMessage}
                                {showPaymentLink && (
                                    <div style={{ marginTop: '15px' }}>
                                        <a 
                                            href="https://buy.stripe.com/test_9B67sL2sQdH3eDBdQsgbm01" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            style={{
                                                display: 'inline-block',
                                                padding: '12px 24px',
                                                backgroundColor: '#C9A545',
                                                color: 'white',
                                                textDecoration: 'none',
                                                borderRadius: '8px',
                                                fontWeight: 'bold',
                                                fontSize: '16px'
                                            }}
                                        >
                                            Complete Payment - $500
                                        </a>
                                    </div>
                                )}
                            </div>
                        )}

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

        </>

    )

}













