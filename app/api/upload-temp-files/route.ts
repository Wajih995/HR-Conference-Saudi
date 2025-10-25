import { NextRequest, NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'
import { existsSync } from 'fs'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    
    // Create temp directory if it doesn't exist
    const tempDir = join(process.cwd(), 'temp-uploads')
    if (!existsSync(tempDir)) {
      await mkdir(tempDir, { recursive: true })
    }

    const fileIds: { profilePictureId: string; projectFileId: string } = {
      profilePictureId: '',
      projectFileId: ''
    }

    // Handle profile picture
    const profilePictureFile = formData.get('nomineeProfilePicture') as File
    if (profilePictureFile && profilePictureFile.size > 0) {
      const fileId = `profile-${Date.now()}-${Math.random().toString(36).substring(7)}`
      const bytes = await profilePictureFile.arrayBuffer()
      const buffer = Buffer.from(bytes)
      
      const filePath = join(tempDir, `${fileId}-${profilePictureFile.name}`)
      await writeFile(filePath, buffer)
      
      fileIds.profilePictureId = `${fileId}-${profilePictureFile.name}`
    }

    // Handle project file
    const projectFile = formData.get('nomineeProject') as File
    if (projectFile && projectFile.size > 0) {
      const fileId = `project-${Date.now()}-${Math.random().toString(36).substring(7)}`
      const bytes = await projectFile.arrayBuffer()
      const buffer = Buffer.from(bytes)
      
      const filePath = join(tempDir, `${fileId}-${projectFile.name}`)
      await writeFile(filePath, buffer)
      
      fileIds.projectFileId = `${fileId}-${projectFile.name}`
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

