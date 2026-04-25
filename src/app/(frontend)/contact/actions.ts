'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface ContactFormData {
  name: string
  email: string
  company: string
  projectType: string
  budget: string
  message: string
}

export async function sendEmail(formData: ContactFormData) {
  const { name, email, company, projectType, budget, message } = formData

  try {
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['oskar.straszynski@gmail.com'],
      subject: `New Project Enquiry: ${projectType} from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #111;">
          <h2 style="border-bottom: 1px solid #eee; padding-bottom: 10px;">New Project Enquiry</h2>
          
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || 'Not provided'}</p>
          <p><strong>Project Type:</strong> ${projectType}</p>
          <p><strong>Budget Range:</strong> ${budget}</p>
          
          <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-radius: 4px;">
            <strong>Message:</strong><br/>
            ${message.replace(/\n/g, '<br/>')}
          </div>
          
          <p style="font-size: 12px; color: #666; margin-top: 30px;">
            Sent from your portfolio website contact form.
          </p>
        </div>
      `,
    })

    return { success: true, data }
  } catch (error) {
    console.error('Email error:', error)
    return { success: false, error }
  }
}
