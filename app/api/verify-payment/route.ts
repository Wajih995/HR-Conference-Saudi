import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-09-30.clover',
})

export async function POST(request: NextRequest) {
  try {
    const { sessionId } = await request.json()

    if (!sessionId) {
      return NextResponse.json(
        { error: 'Session ID is required' },
        { status: 400 }
      )
    }

    // Retrieve the session from Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId)

    // Check if payment was successful
    if (session.payment_status !== 'paid') {
      return NextResponse.json(
        { error: 'Payment not completed', paymentStatus: session.payment_status },
        { status: 400 }
      )
    }

    // Reassemble form data from metadata chunks
    const chunkCount = parseInt(session.metadata?.chunkCount || '0')
    
    if (chunkCount === 0) {
      return NextResponse.json(
        { error: 'No form data found in session' },
        { status: 400 }
      )
    }

    // Reassemble the chunks
    let formDataString = ''
    for (let i = 0; i < chunkCount; i++) {
      const chunk = session.metadata?.[`chunk_${i}`] || ''
      formDataString += chunk
    }

    let formData
    try {
      formData = JSON.parse(formDataString)
    } catch (error) {
      console.error('Error parsing form data:', error)
      return NextResponse.json(
        { error: 'Invalid form data in session' },
        { status: 400 }
      )
    }

    return NextResponse.json({
      paymentStatus: session.payment_status,
      formData: formData,
      customerEmail: session.customer_email,
      amountTotal: session.amount_total,
    })

  } catch (error) {
    console.error('Error verifying payment:', error)
    return NextResponse.json(
      { error: 'Failed to verify payment' },
      { status: 500 }
    )
  }
}

