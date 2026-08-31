import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

type LeadPayload = {
  name?: string
  school?: string
  contact?: string
  message?: string
  niche?: string
  consent?: boolean
}

export async function POST(request: Request) {
  let body: LeadPayload
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Nieprawidłowy format danych' }, { status: 400 })
  }

  const name = body.name?.trim()
  const school = body.school?.trim()
  const contact = body.contact?.trim()
  const message = body.message?.trim() ?? ''
  const niche = body.niche === 'taniec' || body.niche === 'walki' ? body.niche : 'inne'

  if (!name || !school || !contact) {
    return NextResponse.json({ error: 'Brakuje wymaganych pól' }, { status: 400 })
  }
  if (!body.consent) {
    return NextResponse.json({ error: 'Wymagana jest zgoda na kontakt' }, { status: 400 })
  }

  // Subject is built from user input; strip CR/LF defensively to prevent header injection.
  const safeSubjectName = name.replace(/[\r\n]/g, ' ').slice(0, 120)

  const text = [
    'Nowe zapytanie z landingu PL',
    '',
    `Imię:      ${name.slice(0, 120)}`,
    `Szkoła:    ${school.slice(0, 160)}`,
    `Kontakt:   ${contact.slice(0, 200)}`,
    `Nisza:     ${niche}`,
    `Źródło:    ${request.headers.get('referer') ?? '—'}`,
    '',
    'Wiadomość:',
    message.slice(0, 5000) || '—',
  ].join('\n')

  try {
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['oskar.straszynski@gmail.com'],
      subject: `Nowe zapytanie (${niche}): ${safeSubjectName}`,
      text,
    })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Lead email failed:', err)
    return NextResponse.json({ error: 'Nie udało się zapisać zapytania' }, { status: 500 })
  }
}
