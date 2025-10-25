import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
    
    try {
        console.log('=== Nomination API called ===')
        
        // Parse form data instead of JSON
        const formData = await request.formData()
        console.log('Form data received')
        
        // Extract text fields
        const body = {
            nominatorFullName: formData.get('nominatorFullName') as string,
            nominatorEmail: formData.get('nominatorEmail') as string,
            nominatorCountryCode: formData.get('nominatorCountryCode') as string,
            nominatorMobileNumber: formData.get('nominatorMobileNumber') as string,
            nominatorCompany: formData.get('nominatorCompany') as string,
            nominatorDesignation: formData.get('nominatorDesignation') as string,
            nominatorCity: formData.get('nominatorCity') as string,
            category: formData.get('category') as string,
            nomineeProjectDetails: formData.get('nomineeProjectDetails') as string,
            nomineeLinkedInURL: formData.get('nomineeLinkedInURL') as string,
            nomineeInstagramLink: formData.get('nomineeInstagramLink') as string,
            confirmation: formData.get('confirmation') === 'true'
        }
        
        console.log('Request body received:', body)
        
        const {
            nominatorFullName,
            nominatorEmail,
            nominatorCountryCode,
            nominatorMobileNumber,
            nominatorCompany,
            nominatorDesignation,
            nominatorCity,
            category,
            nomineeProjectDetails,
            nomineeLinkedInURL,
            nomineeInstagramLink,
            confirmation
        } = body

        // Validate required environment variables
        console.log('Environment check:')
        console.log('EMAIL_USER exists:', !!process.env.EMAIL_USER)
        console.log('EMAIL_PASS exists:', !!process.env.EMAIL_PASS)
        console.log('EMAIL_USER value:', process.env.EMAIL_USER ? 'Set' : 'Not set')
        
        // Hardcode credentials for now since env vars aren't loading
        const emailUser = process.env.EMAIL_USER || 'brxevents@gmail.com'
        const emailPass = process.env.EMAIL_PASS || 'vlenulgbxljrtaje'
        
        console.log('Using email credentials:')
        console.log('EMAIL_USER:', emailUser)
        console.log('EMAIL_PASS:', emailPass ? 'Set' : 'Not set')
        
        if (!emailUser || !emailPass) {
            console.error('Email credentials not configured')
            return NextResponse.json({ 
                error: 'Email service not configured. Please contact support.' 
            }, { status: 500 })
        }

        console.log('Creating email transporter...')
        // Create a transporter using Gmail SMTP
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: emailUser,
                pass: emailPass,
            },
        })

        console.log('Email transporter created successfully')

        // Handle file uploads - check for both direct files and file IDs
        const attachments: any[] = []
        
        // Check for file IDs (from Stripe payment flow)
        const profilePictureId = formData.get('profilePictureId') as string
        const projectFileId = formData.get('projectFileId') as string
        
        if (profilePictureId || projectFileId) {
            // Files were uploaded to Vercel Blob, download them
            
            if (profilePictureId) {
                try {
                    // Download file from Vercel Blob URL
                    const response = await fetch(profilePictureId)
                    const arrayBuffer = await response.arrayBuffer()
                    const buffer = Buffer.from(arrayBuffer)
                    
                    // Extract original filename from URL
                    const urlParts = profilePictureId.split('/')
                    const fileName = urlParts[urlParts.length - 1]
                    const originalName = fileName.split('-').slice(2).join('-') || 'profile-picture'
                    
                    attachments.push({
                        filename: originalName,
                        content: buffer,
                    })
                    console.log('Profile picture downloaded from Blob:', originalName)
                } catch (error) {
                    console.error('Error downloading profile picture:', error)
                }
            }
            
            if (projectFileId) {
                try {
                    // Download file from Vercel Blob URL
                    const response = await fetch(projectFileId)
                    const arrayBuffer = await response.arrayBuffer()
                    const buffer = Buffer.from(arrayBuffer)
                    
                    // Extract original filename from URL
                    const urlParts = projectFileId.split('/')
                    const fileName = urlParts[urlParts.length - 1]
                    const originalName = fileName.split('-').slice(2).join('-') || 'project-file'
                    
                    attachments.push({
                        filename: originalName,
                        content: buffer,
                    })
                    console.log('Project file downloaded from Blob:', originalName)
                } catch (error) {
                    console.error('Error downloading project file:', error)
                }
            }
        } else {
            // Direct file upload (old flow, keep for compatibility)
            // Process profile picture
            const profilePictureFile = formData.get('nomineeProfilePicture') as File
            if (profilePictureFile && profilePictureFile.size > 0) {
                console.log('Processing profile picture:', profilePictureFile.name)
                const bytes = await profilePictureFile.arrayBuffer()
                const buffer = Buffer.from(bytes)
                
                attachments.push({
                    filename: profilePictureFile.name,
                    content: buffer,
                    contentType: profilePictureFile.type
                })
                console.log('Profile picture processed:', profilePictureFile.name)
            }
            
            // Process project file
            const projectFile = formData.get('nomineeProject') as File
            if (projectFile && projectFile.size > 0) {
                console.log('Processing project file:', projectFile.name)
                const bytes = await projectFile.arrayBuffer()
                const buffer = Buffer.from(bytes)
                
                attachments.push({
                    filename: projectFile.name,
                    content: buffer,
                    contentType: projectFile.type
                })
                console.log('Project file processed:', projectFile.name)
            }
        }

        console.log('Attachments prepared:', attachments.length, 'files')

        // Determine attachment names for email display
        const profilePictureName = attachments.length > 0 && attachments[0].filename ? attachments[0].filename : 'None'
        const projectFileName = attachments.length > 1 && attachments[1].filename ? attachments[1].filename : (attachments.length === 1 ? 'None' : 'None')

        // Email content
        const mailOptions = {
            from: emailUser,
            to: 'Yasir@theboredroomx.com',
            subject: `New Award Nomination - ${category}`,
            attachments: attachments,
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            line-height: 1.6;
                            color: #333;
                        }
                        .container {
                            max-width: 600px;
                            margin: 0 auto;
                            padding: 20px;
                            background-color: #f9f9f9;
                        }
                        .header {
                            background-color: #C9A545;
                            color: #000;
                            padding: 20px;
                            text-align: center;
                            border-radius: 8px 8px 0 0;
                        }
                        .content {
                            background-color: #fff;
                            padding: 30px;
                            border-radius: 0 0 8px 8px;
                        }
                        .section {
                            margin-bottom: 25px;
                        }
                        .section-title {
                            font-size: 18px;
                            font-weight: bold;
                            color: #C9A545;
                            margin-bottom: 10px;
                            border-bottom: 2px solid #C9A545;
                            padding-bottom: 5px;
                        }
                        .field {
                            margin-bottom: 12px;
                        }
                        .field-label {
                            font-weight: bold;
                            color: #555;
                        }
                        .field-value {
                            color: #333;
                            margin-top: 3px;
                        }
                        .footer {
                            margin-top: 20px;
                            padding: 15px;
                            background-color: #f0f0f0;
                            text-align: center;
                            font-size: 12px;
                            color: #666;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1 style="margin: 0;">New Award Nomination Received</h1>
                            <p style="margin: 10px 0 0 0;">Women Leadership in HR Awards 2026</p>
                        </div>
                        <div class="content">
                            <div class="section">
                                <div class="section-title">Nominator Information</div>
                                <div class="field">
                                    <div class="field-label">Full Name:</div>
                                    <div class="field-value">${nominatorFullName}</div>
                                </div>
                                <div class="field">
                                    <div class="field-label">Official Email ID:</div>
                                    <div class="field-value">${nominatorEmail}</div>
                                </div>
                                <div class="field">
                                    <div class="field-label">Mobile Number:</div>
                                    <div class="field-value">${nominatorCountryCode} ${nominatorMobileNumber}</div>
                                </div>
                                <div class="field">
                                    <div class="field-label">Company Name:</div>
                                    <div class="field-value">${nominatorCompany}</div>
                                </div>
                                <div class="field">
                                    <div class="field-label">Designation:</div>
                                    <div class="field-value">${nominatorDesignation}</div>
                                </div>
                                <div class="field">
                                    <div class="field-label">City:</div>
                                    <div class="field-value">${nominatorCity}</div>
                                </div>
                            </div>

                            <div class="section">
                                <div class="section-title">Nomination Details</div>
                                <div class="field">
                                    <div class="field-label">Category:</div>
                                    <div class="field-value"><strong>${category}</strong></div>
                                </div>
                                <div class="field">
                                    <div class="field-label">Profile Picture:</div>
                                    <div class="field-value">${profilePictureName !== 'None' ? profilePictureName + ' (attached)' : 'None'}</div>
                                </div>
                                <div class="field">
                                    <div class="field-label">Project Details:</div>
                                    <div class="field-value" style="white-space: pre-wrap;">${nomineeProjectDetails}</div>
                                </div>
                                <div class="field">
                                    <div class="field-label">Project File:</div>
                                    <div class="field-value">${projectFileName !== 'None' ? projectFileName + ' (attached)' : 'None'}</div>
                                </div>
                                <div class="field">
                                    <div class="field-label">LinkedIn URL:</div>
                                    <div class="field-value"><a href="${nomineeLinkedInURL}" style="color: #C9A545;">${nomineeLinkedInURL}</a></div>
                                </div>
                                <div class="field">
                                    <div class="field-label">Instagram Link:</div>
                                    <div class="field-value"><a href="${nomineeInstagramLink}" style="color: #C9A545;">${nomineeInstagramLink}</a></div>
                                </div>
                                <div class="field">
                                    <div class="field-label">Confirmation:</div>
                                    <div class="field-value">${confirmation ? 'Yes' : 'No'}</div>
                                </div>
                            </div>

                            <div class="footer">
                                <p><strong>Payment Status:</strong> Completed via Stripe</p>
                                <p>This nomination was submitted on ${new Date().toLocaleString('en-US', { 
                                    dateStyle: 'full', 
                                    timeStyle: 'short' 
                                })}</p>
                            </div>
                        </div>
                    </div>
                </body>
                </html>
            `,
            text: `
New Award Nomination Received

NOMINATOR INFORMATION:
Full Name: ${nominatorFullName}
Official Email ID: ${nominatorEmail}
Mobile Number: ${nominatorCountryCode} ${nominatorMobileNumber}
Company Name: ${nominatorCompany}
Designation: ${nominatorDesignation}
City: ${nominatorCity}

NOMINATION DETAILS:
Category: ${category}
Profile Picture: ${profilePictureName !== 'None' ? profilePictureName + ' (attached)' : 'None'}
Project Details: ${nomineeProjectDetails}
Project File: ${projectFileName !== 'None' ? projectFileName + ' (attached)' : 'None'}
LinkedIn URL: ${nomineeLinkedInURL}
Instagram Link: ${nomineeInstagramLink}
Confirmation: ${confirmation ? 'Yes' : 'No'}

Payment Status: Completed via Stripe
Submitted on: ${new Date().toLocaleString()}
            `
        }

        // Send email to admin
        console.log('Sending email to admin:', 'Yasir@theboredroomx.com')
        await transporter.sendMail(mailOptions)
        console.log('Admin email sent successfully!')

        // Send confirmation email to user
        console.log('Sending confirmation email to user:', nominatorEmail)
        const confirmationMailOptions = {
            from: emailUser,
            to: nominatorEmail,
            subject: `Nomination Confirmation - ${category}`,
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            line-height: 1.6;
                            color: #333;
                            max-width: 600px;
                            margin: 0 auto;
                            padding: 20px;
                        }
                        .header {
                            background: linear-gradient(135deg, #C9A545 0%, #B8941F 100%);
                            color: #000;
                            padding: 30px;
                            text-align: center;
                            border-radius: 10px 10px 0 0;
                        }
                        .content {
                            background-color: #f9f9f9;
                            padding: 30px;
                            border-radius: 0 0 10px 10px;
                        }
                        .success-icon {
                            font-size: 48px;
                            color: #28a745;
                            margin-bottom: 20px;
                        }
                        .highlight {
                            background-color: #C9A545;
                            color: #000;
                            padding: 15px;
                            border-radius: 8px;
                            margin: 20px 0;
                            font-weight: bold;
                        }
                        .info-box {
                            background-color: #fff;
                            border-left: 4px solid #C9A545;
                            padding: 20px;
                            margin: 20px 0;
                        }
                        .footer {
                            text-align: center;
                            margin-top: 30px;
                            padding: 20px;
                            background-color: #f0f0f0;
                            border-radius: 8px;
                            font-size: 14px;
                            color: #666;
                        }
                        .button {
                            display: inline-block;
                            background-color: #C9A545;
                            color: #000;
                            padding: 15px 30px;
                            text-decoration: none;
                            border-radius: 8px;
                            font-weight: bold;
                            margin: 20px 0;
                        }
                    </style>
                </head>
                <body>
                    <div class="header">
                        <h1 style="margin: 0; font-size: 28px;">Nomination Received Successfully!</h1>
                        <p style="margin: 10px 0 0 0; font-size: 16px;">Women Leadership in HR Awards 2026</p>
                    </div>
                    
                    <div class="content">
                        <div style="text-align: center;">
                            <div class="success-icon">✓</div>
                            <h2 style="color: #28a745; margin-bottom: 10px;">Thank You, ${nominatorFullName}!</h2>
                            <p style="font-size: 18px; margin-bottom: 30px;">Your nomination has been successfully submitted and is now under review.</p>
                        </div>

                        <div class="highlight">
                            <h3 style="margin: 0 0 10px 0;">Nomination Details</h3>
                            <p style="margin: 5px 0;"><strong>Category:</strong> ${category}</p>
                            <p style="margin: 5px 0;"><strong>Submitted by:</strong> ${nominatorFullName}</p>
                            <p style="margin: 5px 0;"><strong>Company:</strong> ${nominatorCompany}</p>
                            <p style="margin: 5px 0;"><strong>Submission Date:</strong> ${new Date().toLocaleString('en-US', { 
                                dateStyle: 'full', 
                                timeStyle: 'short' 
                            })}</p>
                        </div>

                        <div class="info-box">
                            <h3 style="margin-top: 0; color: #C9A545;">What Happens Next?</h3>
                            <ul style="margin: 0; padding-left: 20px;">
                                <li>Our judging panel will review your nomination</li>
                                <li>You will receive updates on the evaluation process</li>
                                <li>Finalists will be announced on our website</li>
                                <li>Winners will be celebrated at our awards ceremony</li>
                            </ul>
                        </div>

                        <div class="info-box">
                            <h3 style="margin-top: 0; color: #C9A545;">Contact Information</h3>
                            <p>If you have any questions about your nomination, please contact us:</p>
                            <p><strong>Email:</strong> Yasir@theboredroomx.com</p>
                            <p><strong>Phone:</strong> +971 XX XXX XXXX</p>
                        </div>
                    </div>

                    <div class="footer">
                        <p><strong>Women Leadership in HR Awards 2026</strong></p>
                        <p>Recognizing Excellence in Human Resources Leadership Across the GCC</p>
                        <p style="font-size: 12px; margin-top: 15px;">
                            This is an automated confirmation email. Please do not reply to this message.
                        </p>
                    </div>
                </body>
                </html>
            `,
            text: `
Nomination Confirmation - ${category}

Dear ${nominatorFullName},

Thank you for submitting your nomination for the Women Leadership in HR Awards 2026!

NOMINATION DETAILS:
Category: ${category}
Submitted by: ${nominatorFullName}
Company: ${nominatorCompany}
Submission Date: ${new Date().toLocaleString()}

WHAT HAPPENS NEXT:
- Our judging panel will review your nomination
- You will receive updates on the evaluation process
- Finalists will be announced on our website
- Winners will be celebrated at our awards ceremony

CONTACT INFORMATION:
If you have any questions about your nomination, please contact us:
Email: Yasir@theboredroomx.com
Phone: +971 XX XXX XXXX

Thank you for your participation in the Women Leadership in HR Awards 2026!

Best regards,
The Awards Team
            `
        }

        await transporter.sendMail(confirmationMailOptions)
        console.log('Confirmation email sent successfully!')

        return NextResponse.json({ 
            message: 'Nomination submitted successfully! Confirmation email sent to your inbox.',
            attachments: attachments.length,
            emailsSent: 2
        }, { status: 200 })

    } catch (error) {
        console.error('=== Error submitting nomination ===')
        console.error('Error details:', error)
        
        let errorMessage = 'Failed to submit nomination. Please try again.'
        
        if (error instanceof Error) {
            console.error('Error message:', error.message)
            console.error('Error stack:', error.stack)
            errorMessage = error.message
        }
        
        return NextResponse.json({ 
            error: errorMessage,
            details: error instanceof Error ? error.message : 'Unknown error'
        }, { status: 500 })
    }
}


