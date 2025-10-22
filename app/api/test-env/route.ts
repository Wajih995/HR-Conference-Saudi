import { NextResponse } from 'next/server'

export async function GET() {
    return NextResponse.json({
        EMAIL_USER: process.env.EMAIL_USER || 'brxevents@gmail.com (hardcoded)',
        EMAIL_PASS: process.env.EMAIL_PASS ? 'SET' : 'vlenulgbxljrtaje (hardcoded)',
        NODE_ENV: process.env.NODE_ENV || 'NOT_SET',
        allEnvVars: Object.keys(process.env).filter(key => key.includes('EMAIL')),
        note: 'Using hardcoded values since env vars not loading'
    })
}
