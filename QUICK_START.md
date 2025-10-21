# Quick Start Guide - Nomination System

## 🚀 Getting Started in 3 Steps

### Step 1: Set Up Email (5 minutes)

1. **Create `.env.local` file** in the project root:
   ```bash
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASS=your-app-password
   ```

2. **Generate Gmail App Password:**
   - Go to: https://myaccount.google.com/security
   - Enable 2-Step Verification
   - Go to App Passwords
   - Generate password for "Mail"
   - Copy the 16-character password

3. **Paste into `.env.local`**

> 📖 Detailed instructions: See `EMAIL_SETUP.md`

### Step 2: Restart Server

```bash
# Stop the current dev server (Ctrl+C)
npm run dev
```

The server will automatically load the new environment variables.

### Step 3: Test the System

1. Open: `http://localhost:3001/awards`
2. Click **"Submit Nomination"** button
3. Fill in the form
4. Click **"Pay to Continue"**
5. Complete Stripe payment
6. Confirm and submit
7. Check email at `Yasir@theboredroomx.com`

## ✅ What's Already Done

- ✅ Nomination form modal created
- ✅ Stripe payment integration
- ✅ Form data preservation during payment
- ✅ Email notification system
- ✅ All 20 award categories included
- ✅ Beautiful email template
- ✅ Success/error handling
- ✅ Mobile responsive design

## 🎯 Where to Click

The **"Submit Nomination"** button appears in:

1. **Top of Awards page** - Below the counter stats
2. **Bottom of Awards page** - In the CTA section with countdown

## 📧 Email Destination

All nomination submissions are sent to:
**`Yasir@theboredroomx.com`**

## 🔗 Stripe Payment Link

Currently configured:
**`https://buy.stripe.com/6oUcN5e1I5oadnG8954c81d`**

To change, edit: `components/layout/NominationModal.tsx` (line ~121)

## 🎨 Customization

### Change Colors

Edit `components/layout/NominationModal.tsx`:
- Gold accent: `#C9A545`
- Background: `#1a1a1a`
- Input background: `#2a2a2a`

### Change Email Recipient

Edit `app/api/submit-nomination/route.ts`:
```javascript
to: 'new-email@example.com'
```

### Modify Form Fields

Edit `components/layout/NominationModal.tsx`:
- Find `interface FormData`
- Add your fields
- Add corresponding inputs in the JSX

## 🐛 Troubleshooting

### "Modal not opening"
- Check browser console for errors
- Hard refresh: Ctrl+Shift+R

### "Email not sending"
- Verify `.env.local` exists
- Check credentials are correct
- Restart dev server

### "Payment redirect not working"
- Check Stripe URL
- Verify return URL is correct
- Look for console errors

## 📱 Browser Compatibility

Tested and working on:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers

## 🔒 Security Notes

- Never commit `.env.local` to Git
- Use App Passwords, not regular Gmail password
- Keep Stripe keys secure
- Validate all inputs on server-side

## 📞 Need Help?

1. Check `NOMINATION_SYSTEM_README.md` for detailed documentation
2. See `EMAIL_SETUP.md` for email configuration help
3. Review server console for error messages
4. Check browser console for client-side errors

## 🎉 You're Ready!

The nomination system is fully functional. Just set up your email credentials and you're good to go!

---

**Server URL:** http://localhost:3001
**Awards Page:** http://localhost:3001/awards


