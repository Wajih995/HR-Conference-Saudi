import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-09-30.clover',
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { formData, type } = body // type: 'registration' or 'nomination'

    // Determine price and product details based on type
    const productDetails = type === 'registration' 
      ? {
          name: 'Conference Registration - Women Leadership HR 2026',
          description: 'Full access to the conference, networking, CPD certification, and professional headshot',
          amount: 17000, // $170 in cents
        }
      : {
          name: 'Award Nomination - Women Leadership HR 2026',
          description: 'Award nomination submission and processing',
          amount: 50000, // $500 in cents
        }

    // Split form data into smaller chunks for metadata
    // Stripe metadata limit: 500 chars per key, 50 keys max, 8KB total
    const formDataString = JSON.stringify(formData)
    const chunkSize = 450 // Leave some margin
    const chunks: string[] = []
    
    for (let i = 0; i < formDataString.length; i += chunkSize) {
      chunks.push(formDataString.substring(i, i + chunkSize))
    }

    // Create metadata object with chunks
    const metadata: any = {
      type: type,
      chunkCount: chunks.length.toString(),
    }
    
    // Add each chunk to metadata (max 50 keys, but we'll use much less)
    chunks.forEach((chunk, index) => {
      metadata[`chunk_${index}`] = chunk
    })

    // Create Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: productDetails.name,
              description: productDetails.description,
            },
            unit_amount: productDetails.amount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/${type}-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/?canceled=true`,
      metadata: metadata,
      customer_email: type === 'registration' ? formData.officialEmail : formData.nominatorEmail,
    })

    return NextResponse.json({ sessionId: session.id, url: session.url })
  } catch (error) {
    console.error('Error creating checkout session:', error)
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}

