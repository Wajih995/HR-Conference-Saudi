import { NextRequest, NextResponse } from 'next/server'
import { put } from '@vercel/blob'

export const maxDuration = 60 // Maximum execution time (seconds)
export const dynamic = 'force-dynamic'
export const runtime = 'nodejs' // Use Node.js runtime for larger payloads

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    const fileIds: { profilePictureId: string; projectFileId: string } = {
      profilePictureId: '',
      projectFileId: ''
    }

    // Handle profile picture upload to Vercel Blob
    const profilePictureFile = formData.get('nomineeProfilePicture') as File
    if (profilePictureFile && profilePictureFile.size > 0) {
      const fileName = `profile-${Date.now()}-${profilePictureFile.name}`
      const blob = await put(fileName, profilePictureFile, {
        access: 'public',
      })
      
      fileIds.profilePictureId = blob.url
    }

    // Handle project file upload to Vercel Blob
    const projectFile = formData.get('nomineeProject') as File
    if (projectFile && projectFile.size > 0) {
      const fileName = `project-${Date.now()}-${projectFile.name}`
      const blob = await put(fileName, projectFile, {
        access: 'public',
      })
      
      fileIds.projectFileId = blob.url
    }

    return NextResponse.json({ fileIds })
  } catch (error) {
    console.error('Error uploading files:', error)
    return NextResponse.json(
      { error: 'Failed to upload files' },
      { status: 500 }
    )
  }
}

