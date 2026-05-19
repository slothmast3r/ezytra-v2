'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export interface ContactFormPayload {
  name: string
  email: string
  company: string
  message: string
  projectType: string
  budget: string
  // Anti-spam fields. Humans never touch these.
  website?: string
  startedAt?: number
}

export type SendEmailResult =
  | { success: true }
  | { success: false; error: string }

const MIN_FILL_MS = 2000

const MAX_LEN = {
  name: 120,
  email: 200,
  company: 160,
  projectType: 60,
  budget: 60,
  message: 5000,
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function clean(value: unknown, max: number): string {
  if (typeof value !== 'string') return ''
  return value.trim().slice(0, max)
}

export async function sendEmail(formData: ContactFormPayload): Promise<SendEmailResult> {
  // Honeypot: hidden field humans never fill. If it has any value, treat as spam.
  // Silently report success so the bot has no signal to retry with a different shape.
  const honeypot = clean(formData?.website, 200)
  if (honeypot) {
    return { success: true }
  }

  // Time trap: humans take more than 2 seconds to fill a contact form.
  // A faster submission is almost certainly automated.
  const startedAt = typeof formData?.startedAt === 'number' ? formData.startedAt : 0
  if (startedAt && Date.now() - startedAt < MIN_FILL_MS) {
    return { success: true }
  }

  const name = clean(formData?.name, MAX_LEN.name)
  const email = clean(formData?.email, MAX_LEN.email)
  const company = clean(formData?.company, MAX_LEN.company)
  const projectType = clean(formData?.projectType, MAX_LEN.projectType)
  const budget = clean(formData?.budget, MAX_LEN.budget)
  const message = clean(formData?.message, MAX_LEN.message)

  if (!name || !email || !message) {
    return { success: false, error: 'Missing required fields.' }
  }
  if (!EMAIL_RE.test(email)) {
    return { success: false, error: 'Invalid email address.' }
  }

  // Subject is built from validated fields; strip CR/LF defensively to prevent header injection.
  const safeSubjectName = name.replace(/[\r\n]/g, ' ')
  const safeSubjectType = projectType.replace(/[\r\n]/g, ' ') || 'Project'

  const text = [
    'New project enquiry',
    '',
    `Name:         ${name}`,
    `Email:        ${email}`,
    `Company:      ${company || '—'}`,
    `Project type: ${projectType || '—'}`,
    `Budget:       ${budget || '—'}`,
    '',
    'Message:',
    message,
    '',
    '— Sent from the ezytra.com contact form.',
  ].join('\n')

  try {
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['oskar.straszynski@gmail.com'],
      subject: `New Project Enquiry: ${safeSubjectType} from ${safeSubjectName}`,
      replyTo: email,
      text,
    })
    return { success: true }
  } catch (error) {
    console.error('Email error:', error)
    return { success: false, error: 'Email service unavailable.' }
  }
}
