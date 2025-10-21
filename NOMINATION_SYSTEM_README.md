# Nomination System Documentation

## Overview

The Awards Nomination System allows users to submit nominations for the Women Leadership in HR Awards 2026. The system includes:

1. **Modal Form** - Collects nomination details
2. **Stripe Payment Integration** - Processes nomination fees
3. **Email Notification** - Sends submissions to `Yasir@theboredroomx.com`

## How It Works

### User Flow

```
1. User clicks "Submit Nomination" button
   ↓
2. Modal opens with nomination form
   ↓
3. User fills in all required fields
   ↓
4. User clicks "Pay to Continue"
   ↓
5. Form data saved to localStorage
   ↓
6. User redirected to Stripe payment page
   ↓
7. User completes payment
   ↓
8. User redirected back to Awards page
   ↓
9. Modal reopens with pre-filled data
   ↓
10. User confirms and submits nomination
   ↓
11. Email sent to Yasir@theboredroomx.com
   ↓
12. Success message displayed
```

## Files Created/Modified

### New Files

1. **`components/layout/NominationModal.tsx`**
   - Modal component with form
   - Manages form state and localStorage
   - Handles Stripe redirect and return flow
   - Submits nomination via API

2. **`app/api/submit-nomination/route.ts`**
   - API endpoint for form submission
   - Sends formatted email using Nodemailer
   - Returns success/error responses

3. **`EMAIL_SETUP.md`**
   - Instructions for configuring email credentials
   - Gmail App Password setup guide
   - Alternative SMTP configurations

### Modified Files

1. **`app/awards/page.tsx`**
   - Added useState for modal control
   - Imported NominationModal component
   - Changed "Submit Nomination" links to buttons
   - Added modal at end of component

2. **`package.json`**
   - Added nodemailer dependency
   - Added @types/nodemailer for TypeScript

## Form Fields

The nomination form includes all fields from the Google Form:

1. **Your Full Name** (required)
2. **Your Email Address** (required)
3. **Your Phone Number** (required)
4. **Nominee's Name** (required)
5. **Nominee's Email Address** (required)
6. **Nominee's Phone Number** (required)
7. **Category of Nomination** (required, dropdown with 20 categories)
8. **Reason for Nomination** (required, textarea)
9. **Supporting Documents** (optional, file upload)

## Award Categories

The system includes all 20 award categories:

- Best Diversity & Inclusion Strategy
- Best Employee Engagement Strategy
- Best Employee Wellbeing Programme
- Best Executive & Leadership Development
- Best HR Technology Implementation
- Best HR Transformation Strategy
- Best Flexible Working Initiative
- Best Innovative HR Initiative
- Best L&D Initiative (Private Sector)
- Best Recruitment & Onboarding Strategy
- Best Rewards & Recognition Strategy
- Best Social Impact Initiative
- Best Talent Management Strategy
- Best Women in Leadership Development
- CHRO of the Year
- Employer of the Year
- HR Team of the Year
- HR's Rising Star of the Year
- DEI Changemaker Award
- People Analytics Leader

## Stripe Integration

**Payment Link:** `https://buy.stripe.com/6oUcN5e1I5oadnG8954c81d`

### How It Works

1. Form data is saved to `localStorage` before redirect
2. User is redirected to Stripe with success URL parameter
3. After payment, Stripe redirects to: `/awards?payment=success`
4. Modal detects the `payment=success` parameter
5. Form data is loaded from `localStorage`
6. User can review and submit

### Return URL Format

```javascript
const returnUrl = `${window.location.origin}/awards?payment=success`
```

## Email Configuration

### Required Environment Variables

Create a `.env.local` file in the project root:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

### Gmail Setup

1. Enable 2-Step Verification in Google Account
2. Generate App Password:
   - Go to Google Account Security
   - 2-Step Verification → App passwords
   - Select Mail → Other (Custom name)
   - Generate password
3. Use the generated password in `.env.local`

**See `EMAIL_SETUP.md` for detailed instructions**

## Email Template

The system sends a beautifully formatted HTML email with:

- Golden header with conference branding
- Organized sections for nominator and nominee info
- Highlighted category and reason
- Payment confirmation status
- Submission timestamp

### Email Recipient

All nominations are sent to: **`Yasir@theboredroomx.com`**

## Testing the System

### Prerequisites

1. Set up email credentials in `.env.local`
2. Restart development server: `npm run dev`
3. Have a test Stripe account or use live payment

### Test Steps

1. Navigate to `/awards`
2. Click any "Submit Nomination" button
3. Fill in the form with test data
4. Click "Pay to Continue"
5. Complete Stripe payment (use test card if in test mode)
6. Verify you're redirected back to awards page
7. Confirm modal reopens with your data
8. Click "Confirm & Submit Nomination"
9. Check email at `Yasir@theboredroomx.com`

### Test Credit Cards (Stripe Test Mode)

- Success: `4242 4242 4242 4242`
- Decline: `4000 0000 0000 0002`
- Requires Authentication: `4000 0025 0000 3155`

Use any future expiration date and any 3-digit CVC.

## Features

### Data Persistence

- Form data saved to `localStorage` before Stripe redirect
- Automatically restored when returning from payment
- Cleaned up after successful submission

### Validation

- All required fields enforced with HTML5 validation
- Email format validation
- Phone number format validation
- Category selection required

### User Experience

- Modal overlay with dark theme matching site design
- Disabled form fields in confirmation step
- Loading states during submission
- Success/error messages
- Smooth transitions and animations

### Security

- Environment variables for email credentials
- Server-side email sending (not exposed to client)
- Input sanitization in API route
- File upload validation (type and size)

## Troubleshooting

### Modal Not Opening

- Check browser console for errors
- Verify `useState` is imported
- Ensure `isModalOpen` state is properly set

### Payment Redirect Issues

- Verify Stripe URL is correct
- Check return URL format
- Ensure `window.location.origin` is accessible

### Email Not Sending

- Verify `.env.local` exists and has correct credentials
- Check email service (Gmail) is not blocking
- Look for errors in server console
- Confirm Nodemailer is installed

### Form Data Lost

- Check browser localStorage
- Ensure localStorage is not disabled
- Verify `payment=success` parameter in URL

## Customization

### Change Email Recipient

Edit `app/api/submit-nomination/route.ts`:

```javascript
to: 'new-email@example.com'
```

### Modify Stripe Link

Edit `components/layout/NominationModal.tsx`:

```javascript
window.location.href = `https://your-new-stripe-link.com`
```

### Add Form Fields

1. Add to `FormData` interface
2. Add to initial state
3. Add input field in JSX
4. Include in email template

### Style Changes

All inline styles are in `NominationModal.tsx`. Update the `style` props to customize:

- Colors
- Spacing
- Fonts
- Border radius
- Shadows

## Production Checklist

- [ ] Set up production email credentials
- [ ] Configure Stripe live payment link
- [ ] Test complete flow in production
- [ ] Verify email delivery to Yasir@theboredroomx.com
- [ ] Test on mobile devices
- [ ] Verify SSL certificate for payment security
- [ ] Add Google Analytics tracking for form submissions
- [ ] Set up error logging (e.g., Sentry)

## Support

For issues or questions, contact the development team or refer to:

- Next.js documentation
- Stripe documentation
- Nodemailer documentation

## Version

- **Created:** 2024
- **Last Updated:** 2024
- **Next.js Version:** 14.2.15
- **Node.js Version:** Required 18+


