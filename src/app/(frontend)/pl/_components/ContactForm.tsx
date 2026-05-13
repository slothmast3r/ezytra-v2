'use client'

import React, { useState } from 'react'

type Props = {
  niche: 'taniec' | 'walki'
  schoolFieldLabel: string
  schoolFieldPlaceholder: string
  submitLabel: string
  successMessage: string
}

export function ContactForm({
  niche,
  schoolFieldLabel,
  schoolFieldPlaceholder,
  submitLabel,
  successMessage,
}: Props) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState<string>('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    const formData = new FormData(e.currentTarget)
    const payload = {
      niche,
      name: String(formData.get('name') || ''),
      school: String(formData.get('school') || ''),
      contact: String(formData.get('contact') || ''),
      message: String(formData.get('message') || ''),
      consent: formData.get('consent') === 'on',
    }

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.error || 'Coś poszło nie tak')
      }
      setStatus('sent')
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Coś poszło nie tak')
    }
  }

  if (status === 'sent') {
    return <p className="pl-form__success">{successMessage}</p>
  }

  return (
    <form className="pl-form" onSubmit={handleSubmit} noValidate>
      <div className="pl-form__row">
        <label className="pl-form__field">
          <span className="pl-form__label">Imię</span>
          <input name="name" required autoComplete="name" placeholder="Jak masz na imię?" />
        </label>
        <label className="pl-form__field">
          <span className="pl-form__label">{schoolFieldLabel}</span>
          <input
            name="school"
            required
            autoComplete="organization"
            placeholder={schoolFieldPlaceholder}
          />
        </label>
      </div>
      <label className="pl-form__field">
        <span className="pl-form__label">E-mail lub telefon</span>
        <input
          name="contact"
          required
          autoComplete="email"
          placeholder="np. ola@szkola.pl albo +48 600 000 000"
        />
      </label>
      <label className="pl-form__field">
        <span className="pl-form__label">Wiadomość (opcjonalnie)</span>
        <textarea
          name="message"
          rows={4}
          placeholder="Krótko: czego potrzebujesz, kiedy chciałbyś/chciałabyś ruszyć."
        />
      </label>
      <label className="pl-form__consent">
        <input type="checkbox" name="consent" required />
        <span>
          Wyrażam zgodę na kontakt w sprawie zapytania. Dane przetwarzane zgodnie z{' '}
          <a href="/pl/polityka-prywatnosci">polityką prywatności</a>.
        </span>
      </label>
      {status === 'error' && <p className="pl-form__error">{errorMsg}</p>}
      <button type="submit" className="pl-btn pl-btn--primary" disabled={status === 'sending'}>
        {status === 'sending' ? 'Wysyłanie…' : submitLabel}
      </button>
    </form>
  )
}
