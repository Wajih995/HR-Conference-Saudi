# Stripe Payment Link Configuration

## Important: Configure Success URL in Stripe Dashboard

The Stripe Payment Link you're using doesn't accept URL parameters directly. You need to configure the success URL in your Stripe Dashboard.

## Steps to Configure Stripe Payment Link

### 1. Log in to Stripe Dashboard
Go to: https://dashboard.stripe.com/

### 2. Find Your Payment Link
1. Click on **"Payment links"** in the left sidebar
2. Find the payment link: `https://buy.stripe.com/6oUcN5e1I5oadnG8954c81d`
3. Click on it to edit

### 3. Configure Success URL
In the Payment Link settings, find the **"After payment"** section:

**Set the Success URL to:**
```
https://yourdomain.com/awards?payment=success
```

**For local development:**
```
http://localhost:3001/awards?payment=success
```

### 4. Save Changes
Click **"Save"** to apply the changes.

## How It Works

### Payment Flow

1. User fills out nomination form
2. Form data is saved to browser's localStorage
3. User is redirected to Stripe payment page
4. After successful payment, Stripe redirects to the success URL you configured
5. The `?payment=success` parameter triggers the modal to reopen
6. Form data is loaded from localStorage
7. User can review and submit

### URL Parameters

The system looks for: `?payment=success` in the URL

When detected:
- Sets `paymentCompleted` flag in localStorage
- Modal automatically opens with pre-filled data
- User sees confirmation screen

## Testing

### Local Testing

1. Set success URL to: `http://localhost:3001/awards?payment=success`
2. Test the complete flow
3. Verify redirect works correctly

### Production Testing

1. Set success URL to your production domain
2. Example: `https://hrconference.com/awards?payment=success`
3. Test with Stripe test mode first
4. Then switch to live mode

## Stripe Test Mode

### Enable Test Mode
In Stripe Dashboard:
1. Toggle "Viewing test data" in the left sidebar
2. Use test payment methods:
   - Success: `4242 4242 4242 4242`
   - Decline: `4000 0000 0000 0002`

### Test Card Details
- **Card Number:** 4242 4242 4242 4242
- **Expiry:** Any future date (e.g., 12/34)
- **CVC:** Any 3 digits (e.g., 123)
- **ZIP:** Any 5 digits (e.g., 12345)

## Troubleshooting

### Issue: "Something went wrong" on Stripe page

**Solution:**
- Verify the payment link is correct
- Check that the link is activated in Stripe
- Ensure you're not using an expired or deleted link
- Try regenerating the payment link if needed

### Issue: Not redirecting after payment

**Solution:**
- Confirm success URL is set in Stripe Dashboard
- Check that the URL matches your domain exactly
- Ensure no typos in the URL
- Include the protocol (http:// or https://)

### Issue: Form data not preserved

**Solution:**
- Check browser localStorage is enabled
- Verify form data is being saved before redirect
- Check browser console for errors
- Try clearing localStorage and testing again

## Alternative: Using Stripe Checkout Session

If you need more control over the payment flow, consider using Stripe Checkout Sessions instead of Payment Links.

### Benefits of Checkout Sessions:
- Can pass success URL programmatically
- More customization options
- Better tracking capabilities
- Client reference IDs

### Implementation:
You would need to:
1. Create an API route to create checkout sessions
2. Use Stripe SDK to generate sessions
3. Redirect to the session URL

See Stripe documentation: https://stripe.com/docs/payments/checkout

## Current Payment Link

**URL:** `https://buy.stripe.com/6oUcN5e1I5oadnG8954c81d`

**What to do:**
1. Configure success URL in Stripe Dashboard (as described above)
2. Test the payment flow
3. Verify redirect works correctly
4. Deploy to production

## Support

- **Stripe Documentation:** https://stripe.com/docs
- **Payment Links Guide:** https://stripe.com/docs/payment-links
- **Stripe Support:** https://support.stripe.com

## Security Notes

- Never expose Stripe secret keys
- Always use HTTPS in production
- Test in test mode before going live
- Monitor failed payments in Stripe Dashboard
- Set up webhook notifications for payment events

