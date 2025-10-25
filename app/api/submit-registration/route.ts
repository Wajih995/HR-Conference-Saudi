import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
    
    try {
        console.log('=== Registration API called ===')
        
        // Parse form data
        const formData = await request.formData()
        console.log('Form data received')
        
        // Extract text fields
        const body = {
            fullName: formData.get('fullName') as string,
            officialEmail: formData.get('officialEmail') as string,
            companyName: formData.get('companyName') as string,
            jobTitle: formData.get('jobTitle') as string,
            countryCode: formData.get('countryCode') as string,
            contactNo: formData.get('contactNo') as string,
            city: formData.get('city') as string,
            linkedInURL: formData.get('linkedInURL') as string,
            instagramLink: formData.get('instagramLink') as string,
            confirmation: formData.get('confirmation') === 'true'
        }
        
        console.log('Request body received:', body)
        
        const {
            fullName,
            officialEmail,
            companyName,
            jobTitle,
            countryCode,
            contactNo,
            city,
            linkedInURL,
            instagramLink,
            confirmation
        } = body

        // Hardcode credentials for now since env vars aren't loading
        const emailUser = process.env.EMAIL_USER || 'brxevents@gmail.com'
        const emailPass = process.env.EMAIL_PASS || 'vlenulgbxljrtaje'
        
        console.log('Using email credentials')
        
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

        // Email content to admin
        const mailOptions = {
            from: emailUser,
            to: 'Yasir@theboredroomx.com',
            subject: `New Conference Registration - ${fullName}`,
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
                            <h1 style="margin: 0;">New Conference Registration Received</h1>
                            <p style="margin: 10px 0 0 0;">Women Leadership in HR Conference & Awards 2026</p>
                        </div>
                        <div class="content">
                            <div class="section">
                                <div class="section-title">Attendee Information</div>
                                <div class="field">
                                    <div class="field-label">Full Name:</div>
                                    <div class="field-value">${fullName}</div>
                                </div>
                                <div class="field">
                                    <div class="field-label">Official Email ID:</div>
                                    <div class="field-value">${officialEmail}</div>
                                </div>
                                <div class="field">
                                    <div class="field-label">Company Name:</div>
                                    <div class="field-value">${companyName}</div>
                                </div>
                                <div class="field">
                                    <div class="field-label">Job Title:</div>
                                    <div class="field-value">${jobTitle}</div>
                                </div>
                                <div class="field">
                                    <div class="field-label">Contact Number:</div>
                                    <div class="field-value">${countryCode} ${contactNo}</div>
                                </div>
                                <div class="field">
                                    <div class="field-label">City:</div>
                                    <div class="field-value">${city}</div>
                                </div>
                            </div>

                            <div class="section">
                                <div class="section-title">Social Media</div>
                                <div class="field">
                                    <div class="field-label">LinkedIn URL:</div>
                                    <div class="field-value"><a href="${linkedInURL}" style="color: #C9A545;">${linkedInURL}</a></div>
                                </div>
                                <div class="field">
                                    <div class="field-label">Instagram Link:</div>
                                    <div class="field-value"><a href="${instagramLink}" style="color: #C9A545;">${instagramLink}</a></div>
                                </div>
                                <div class="field">
                                    <div class="field-label">Confirmation:</div>
                                    <div class="field-value">${confirmation ? 'Yes' : 'No'}</div>
                                </div>
                            </div>

                            <div class="footer">
                                <p><strong>Payment Status:</strong> Pending - Redirected to Stripe</p>
                                <p>This registration was submitted on ${new Date().toLocaleString('en-US', { 
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
New Conference Registration Received

ATTENDEE INFORMATION:
Full Name: ${fullName}
Official Email ID: ${officialEmail}
Company Name: ${companyName}
Job Title: ${jobTitle}
Contact Number: ${countryCode} ${contactNo}
City: ${city}

SOCIAL MEDIA:
LinkedIn URL: ${linkedInURL}
Instagram Link: ${instagramLink}
Confirmation: ${confirmation ? 'Yes' : 'No'}

Payment Status: Pending - Redirected to Stripe
Submitted on: ${new Date().toLocaleString()}
            `
        }

        // Send email to admin
        console.log('Sending email to admin:', 'Yasir@theboredroomx.com')
        await transporter.sendMail(mailOptions)
        console.log('Admin email sent successfully!')

        // Send confirmation email to user
        console.log('Sending confirmation email to user:', officialEmail)
        const confirmationMailOptions = {
            from: emailUser,
            to: officialEmail,
            subject: `Registration Confirmation - Women Leadership Conference 2026`,
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
                        <h1 style="margin: 0; font-size: 28px;">Registration Received Successfully!</h1>
                        <p style="margin: 10px 0 0 0; font-size: 16px;">Women Leadership in HR Conference & Awards 2026</p>
                    </div>
                    
                    <div class="content">
                        <div style="text-align: center;">
                            <div class="success-icon">✓</div>
                            <h2 style="color: #28a745; margin-bottom: 10px;">Welcome, ${fullName}!</h2>
                            <p style="font-size: 18px; margin-bottom: 30px;">Your registration has been successfully submitted.</p>
                        </div>

                        <div class="highlight">
                            <h3 style="margin: 0 0 10px 0;">Registration Details</h3>
                            <p style="margin: 5px 0;"><strong>Name:</strong> ${fullName}</p>
                            <p style="margin: 5px 0;"><strong>Company:</strong> ${companyName}</p>
                            <p style="margin: 5px 0;"><strong>Job Title:</strong> ${jobTitle}</p>
                            <p style="margin: 5px 0;"><strong>Registration Date:</strong> ${new Date().toLocaleString('en-US', { 
                                dateStyle: 'full', 
                                timeStyle: 'short' 
                            })}</p>
                        </div>

                        <div class="info-box">
                            <h3 style="margin-top: 0; color: #C9A545;">Event Details</h3>
                            <p><strong>Date:</strong> 20th January 2026</p>
                            <p><strong>Venue:</strong> Dorat Najd Resort, Riyadh, Saudi Arabia</p>
                            <p><strong>Time:</strong> Full Day Conference</p>
                        </div>

                        <div class="info-box">
                            <h3 style="margin-top: 0; color: #C9A545;">What to Expect</h3>
                            <ul style="margin: 0; padding-left: 20px;">
                                <li>Access to all conference sessions and keynotes</li>
                                <li>Networking opportunities with 80+ HR leaders</li>
                                <li>CPD certification for professional development</li>
                                <li>Complimentary LinkedIn Professional Headshot</li>
                                <li>Conference materials and resources</li>
                            </ul>
                        </div>

                        <div class="info-box">
                            <h3 style="margin-top: 0; color: #C9A545;">Contact Information</h3>
                            <p>If you have any questions about your registration, please contact us:</p>
                            <p><strong>Email:</strong> Yasir@theboredroomx.com</p>
                            <p><strong>Phone:</strong> +966 59 718 3683</p>
                        </div>
                    </div>

                    <div class="footer">
                        <p><strong>Women Leadership in HR Conference & Awards 2026</strong></p>
                        <p>Empowering Women Leaders Across the GCC</p>
                        <p style="font-size: 12px; margin-top: 15px;">
                            This is an automated confirmation email. Please do not reply to this message.
                        </p>
                    </div>
                </body>
                </html>
            `,
            text: `
Registration Confirmation - Women Leadership Conference 2026

Dear ${fullName},

Thank you for registering for the Women Leadership in HR Conference & Awards 2026!

REGISTRATION DETAILS:
Name: ${fullName}
Company: ${companyName}
Job Title: ${jobTitle}
Registration Date: ${new Date().toLocaleString()}

EVENT DETAILS:
Date: 20th January 2026
Venue: Dorat Najd Resort, Riyadh, Saudi Arabia
Time: Full Day Conference

WHAT TO EXPECT:
- Access to all conference sessions and keynotes
- Networking opportunities with 80+ HR leaders
- CPD certification for professional development
- Complimentary LinkedIn Professional Headshot
- Conference materials and resources

CONTACT INFORMATION:
If you have any questions about your registration, please contact us:
Email: Yasir@theboredroomx.com
Phone: +966 59 718 3683

Thank you for joining us at the Women Leadership in HR Conference & Awards 2026!

Best regards,
The Conference Team
            `
        }

        await transporter.sendMail(confirmationMailOptions)
        console.log('Confirmation email sent successfully!')

        return NextResponse.json({ 
            message: 'Registration submitted successfully! Confirmation email sent to your inbox.',
            emailsSent: 2
        }, { status: 200 })

    } catch (error) {
        console.error('=== Error submitting registration ===')
        console.error('Error details:', error)
        
        let errorMessage = 'Failed to submit registration. Please try again.'
        
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

