import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Hardcode credentials for now since env vars aren't loading
    const emailUser = process.env.EMAIL_USER || 'brxevents@gmail.com'
    const emailPass = process.env.EMAIL_PASS || 'vlenulgbxljrtaje'

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    // Email HTML content
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #0e062e 0%, #981970 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .field { margin-bottom: 20px; padding: 15px; background: white; border-radius: 8px; }
          .label { font-weight: bold; color: #0e062e; margin-bottom: 5px; }
          .value { color: #555; }
          .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 2px solid #C9A545; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🤝 New Sponsorship Application</h1>
            <p>Women Leading Change: HR Conference & Awards 2026</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Company Name:</div>
              <div class="value">${data.companyName}</div>
            </div>
            
            <div class="field">
              <div class="label">Industry / Sector:</div>
              <div class="value">${data.industry}</div>
            </div>
            
            <div class="field">
              <div class="label">Website URL:</div>
              <div class="value"><a href="${data.websiteUrl}">${data.websiteUrl}</a></div>
            </div>
            
            <div class="field">
              <div class="label">Social Media Link:</div>
              <div class="value"><a href="${data.socialMediaLink}">${data.socialMediaLink}</a></div>
            </div>
            
            <div class="field">
              <div class="label">Office Location:</div>
              <div class="value">${data.officeLocation}</div>
            </div>
            
            <div class="field">
              <div class="label">Contact Number:</div>
              <div class="value">${data.countryCode} ${data.contactNo}</div>
            </div>
            
            <div class="field">
              <div class="label">Designation / Role:</div>
              <div class="value">${data.designation}</div>
            </div>
            
            <div class="field">
              <div class="label">Official Email:</div>
              <div class="value">${data.officialEmail}</div>
            </div>
            
            <div class="field">
              <div class="label">Sponsorship Package(s):</div>
              <div class="value">${data.sponsorshipPackage.join(', ')}</div>
            </div>
            
            ${data.customPackage ? `
            <div class="field">
              <div class="label">Custom Package Details:</div>
              <div class="value">${data.customPackage}</div>
            </div>
            ` : ''}
            
            <div class="field">
              <div class="label">Estimated Budget:</div>
              <div class="value">${data.estimatedBudget}</div>
            </div>
            
            <div class="field">
              <div class="label">Key Objective:</div>
              <div class="value">${data.keyObjective}</div>
            </div>
            
            ${data.specialRequirements ? `
            <div class="field">
              <div class="label">Special Requirements:</div>
              <div class="value">${data.specialRequirements}</div>
            </div>
            ` : ''}
            
            <div class="footer">
              <p><strong>Submitted on:</strong> ${new Date().toLocaleString()}</p>
              <p>Women Leading Change: HR Leadership Conference & Awards 2026</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send email to admin
    await transporter.sendMail({
      from: emailUser,
      to: 'Yasir@theboredroomx.com',
      subject: `New Sponsorship Application - ${data.companyName}`,
      html: htmlContent,
    });

    // Send confirmation email to user
    const confirmationMailOptions = {
      from: emailUser,
      to: data.officialEmail,
      subject: `Sponsorship Application Confirmation - ${data.companyName}`,
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
          </style>
        </head>
        <body>
          <div class="header">
            <h1 style="margin: 0; font-size: 28px;">Sponsorship Application Received!</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px;">Women Leading Change: HR Conference & Awards 2026</p>
          </div>
          
          <div class="content">
            <div style="text-align: center;">
              <div class="success-icon">✓</div>
              <h2 style="color: #28a745; margin-bottom: 10px;">Thank You for Your Interest!</h2>
              <p style="font-size: 18px; margin-bottom: 30px;">Your sponsorship application has been successfully submitted and is now under review.</p>
            </div>

            <div class="highlight">
              <h3 style="margin: 0 0 10px 0;">Application Details</h3>
              <p style="margin: 5px 0;"><strong>Company:</strong> ${data.companyName}</p>
              <p style="margin: 5px 0;"><strong>Package(s):</strong> ${data.sponsorshipPackage.join(', ')}</p>
              <p style="margin: 5px 0;"><strong>Estimated Budget:</strong> ${data.estimatedBudget}</p>
              <p style="margin: 5px 0;"><strong>Submission Date:</strong> ${new Date().toLocaleString('en-US', { 
                dateStyle: 'full', 
                timeStyle: 'short' 
              })}</p>
            </div>

            <div class="info-box">
              <h3 style="margin-top: 0; color: #C9A545;">What Happens Next?</h3>
              <ul style="margin: 0; padding-left: 20px;">
                <li>Our team will review your sponsorship application</li>
                <li>We will contact you within 2-3 business days</li>
                <li>We'll discuss customization options and finalize the package</li>
                <li>You'll receive a formal sponsorship agreement</li>
              </ul>
            </div>

            <div class="info-box">
              <h3 style="margin-top: 0; color: #C9A545;">Contact Information</h3>
              <p>If you have any questions about your application, please contact us:</p>
              <p><strong>Email:</strong> Yasir@theboredroomx.com</p>
              <p><strong>Phone:</strong> +966 59 718 3683</p>
            </div>
          </div>

          <div class="footer">
            <p><strong>Women Leading Change: HR Conference & Awards 2026</strong></p>
            <p>Empowering Women Leaders Across the GCC</p>
            <p style="font-size: 12px; margin-top: 15px;">
              This is an automated confirmation email. Please do not reply to this message.
            </p>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(confirmationMailOptions);

    return NextResponse.json({ 
      message: 'Sponsorship application submitted successfully! Confirmation email sent to your inbox.',
      emailsSent: 2
    }, { status: 200 });
  } catch (error) {
    console.error('Error submitting sponsorship:', error);
    return NextResponse.json({ error: 'Failed to submit sponsorship application' }, { status: 500 });
  }
}

