import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

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

  try {
    const payload = await getPayload({ config })
    await payload.create({
      collection: 'leads',
      data: {
        name,
        school,
        contact,
        message,
        niche,
        source: request.headers.get('referer') ?? '',
      },
    })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Lead create failed:', err)
    return NextResponse.json({ error: 'Nie udało się zapisać zapytania' }, { status: 500 })
  }
}
