import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const {
            nominatorFullName,
            nominatorEmail,
            nominatorCountryCode,
            nominatorMobileNumber,
            nominatorCompany,
            nominatorDesignation,
            nominatorCity,
            category,
            nomineeProfilePicture,
            nomineeProjectDetails,
            nomineeProject,
            nomineeLinkedInURL,
            nomineeInstagramLink,
            confirmation
        } = body

        // Create a transporter using Gmail SMTP
        // Note: You'll need to set up environment variables for email credentials
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        })

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'Yasir@theboredroomx.com',
            subject: `New Award Nomination - ${category}`,
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
                                    <div class="field-value">${nomineeProfilePicture || 'None'}</div>
                                </div>
                                <div class="field">
                                    <div class="field-label">Project Details:</div>
                                    <div class="field-value" style="white-space: pre-wrap;">${nomineeProjectDetails}</div>
                                </div>
                                <div class="field">
                                    <div class="field-label">Project File:</div>
                                    <div class="field-value">${nomineeProject || 'None'}</div>
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
Profile Picture: ${nomineeProfilePicture || 'None'}
Project Details: ${nomineeProjectDetails}
Project File: ${nomineeProject || 'None'}
LinkedIn URL: ${nomineeLinkedInURL}
Instagram Link: ${nomineeInstagramLink}
Confirmation: ${confirmation ? 'Yes' : 'No'}

Payment Status: Completed via Stripe
Submitted on: ${new Date().toLocaleString()}
            `
        }

        // Send email
        await transporter.sendMail(mailOptions)

        return NextResponse.json({ 
            message: 'Nomination submitted successfully!' 
        }, { status: 200 })

    } catch (error) {
        console.error('Error submitting nomination:', error)
        return NextResponse.json({ 
            error: 'Failed to submit nomination. Please try again.' 
        }, { status: 500 })
    }
}


