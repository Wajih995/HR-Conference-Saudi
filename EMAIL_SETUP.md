# Email Configuration Setup

## Environment Variables

To enable email functionality for nomination submissions, you need to create a `.env.local` file in the root directory with the following variables:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password-here
```

## Gmail Setup Instructions

### 1. Enable 2-Step Verification
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Click on "2-Step Verification"
3. Follow the steps to enable it

### 2. Create App Password
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Click on "2-Step Verification"
3. Scroll down to "App passwords"
4. Click "Select app" and choose "Mail"
5. Click "Select device" and choose "Other (Custom name)"
6. Enter "HR Conference Nominations"
7. Click "Generate"
8. Copy the 16-character password (spaces will be removed)

### 3. Update .env.local
Create a file named `.env.local` in the project root:

```env
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=abcd efgh ijkl mnop
```

**Important:** 
- Replace `your-gmail@gmail.com` with your actual Gmail address
- Replace the password with the App Password you generated
- Make sure `.env.local` is in your `.gitignore` file (it should be by default)

## Alternative Email Services

If you prefer to use a different email service, update the transporter configuration in `app/api/submit-nomination/route.ts`:

### For Outlook/Hotmail:
```javascript
const transporter = nodemailer.createTransporter({
    service: 'hotmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
})
```

### For Custom SMTP:
```javascript
const transporter = nodemailer.createTransporter({
    host: 'smtp.example.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
})
```

## Testing

After setting up the environment variables:

1. Restart your development server: `npm run dev`
2. Go to the Awards page
3. Click "Submit Nomination"
4. Fill out the form
5. Complete the payment flow
6. Submit the nomination
7. Check the inbox at `Yasir@theboredroomx.com`

## Troubleshooting

### Error: "Invalid login"
- Make sure you're using an App Password, not your regular Gmail password
- Verify 2-Step Verification is enabled
- Check that EMAIL_USER matches the Gmail account exactly

### Error: "Connection refused"
- Check your internet connection
- Verify Gmail SMTP is not blocked by your firewall
- Try using port 465 with `secure: true`

### Emails not arriving
- Check spam/junk folder
- Verify EMAIL_USER has permission to send emails
- Check Gmail's "Less secure app access" settings


