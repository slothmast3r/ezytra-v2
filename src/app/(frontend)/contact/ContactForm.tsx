'use client'

import React, { useEffect, useId, useRef, useState } from 'react'
import Button from '../components/Button'
import { SITE_DATA } from '../data'
import { trackEvent } from '@/lib/analytics'
import { sendEmail, type ContactFormPayload } from './actions'
import type { Locale } from '../i18n'

const FORM_COPY = {
  en: {
    projectTypes: ['Web Design', 'Development', 'Brand Identity', 'CMS Setup', 'Full Project', 'Other'],
    budgets: ['< €1k', '€1k–3k', '€3k–8k', '€6k+', "Let's talk"],
    defaultProjectType: 'Full Project',
    defaultBudget: '€3k–8k',
    available: 'Available for new projects',
    eyebrow: '— Send a Message',
    successTitle: 'Message sent.',
    successDesc: "I'll get back to you within 24 hours.",
    nameLabel: 'Name',
    namePlaceholder: 'John Kowalski',
    emailLabel: 'Email',
    emailPlaceholder: 'hello@example.com',
    companyLabel: 'Company',
    companyOptional: '(optional)',
    companyPlaceholder: 'Your company or project name',
    projectTypeLabel: 'Project type',
    budgetLabel: 'Budget range',
    budgetNote:
      'Heads up: projects under €1k rarely fit the way I work. Send the brief anyway. If I can point you somewhere better, I will.',
    messageLabel: 'Your message',
    messagePlaceholder: 'A few sentences about what you have in mind…',
    honeypotLabel: 'Your website (leave this empty)',
    submitErrorTitle: 'Couldn’t send your message.',
    submitErrorRetry: 'Try again, or email me directly at',
    sending: 'Sending…',
    send: 'Send Message',
    errName: 'What should I call you?',
    errEmailMissing: 'Add your email so I can write back',
    errEmailInvalid: 'That doesn’t look like an email. Try name@example.com',
    errMessageMissing: 'A sentence or two about your project is enough to start',
    errMessageShort: 'A little more detail would help me reply usefully',
    cardEyebrow: 'What to expect',
    expect: [
      {
        num: '01',
        title: 'I read every message',
        desc: 'No auto-replies. I read your message personally and respond with something useful, not a template.',
      },
      {
        num: '02',
        title: 'Response within 24h',
        desc: "I'll reply within one working day. Usually faster. If I'm travelling I'll let you know.",
      },
      {
        num: '03',
        title: 'Honest answer',
        desc: "If your budget or brief doesn't fit what I do, I'll tell you, and point you somewhere better if I can.",
      },
      {
        num: '04',
        title: 'A quick call if it fits',
        desc: "If things look good on paper, I'll suggest a 20-minute call to make sure we're right for each other.",
      },
    ],
    preferEmail: 'Prefer email?',
  },
  pl: {
    projectTypes: ['Projekt strony', 'Wdrożenie', 'Identyfikacja wizualna', 'Konfiguracja CMS', 'Cały projekt', 'Inne'],
    budgets: ['< €1k', '€1k–3k', '€3k–8k', '€6k+', 'Porozmawiajmy'],
    defaultProjectType: 'Cały projekt',
    defaultBudget: '€3k–8k',
    available: 'Otwarty na nowe projekty',
    eyebrow: '— Wyślij wiadomość',
    successTitle: 'Wiadomość wysłana.',
    successDesc: 'Odezwę się w ciągu 24 godzin.',
    nameLabel: 'Imię i nazwisko',
    namePlaceholder: 'Jan Kowalski',
    emailLabel: 'Email',
    emailPlaceholder: 'czesc@przyklad.pl',
    companyLabel: 'Firma',
    companyOptional: '(opcjonalnie)',
    companyPlaceholder: 'Nazwa firmy lub projektu',
    projectTypeLabel: 'Rodzaj projektu',
    budgetLabel: 'Budżet',
    budgetNote:
      'Uwaga: projekty poniżej €1k rzadko pasują do tego, jak pracuję. Mimo to wyślij brief — jeśli będę mógł wskazać Ci lepsze miejsce, zrobię to.',
    messageLabel: 'Twoja wiadomość',
    messagePlaceholder: 'Kilka zdań o tym, co masz w głowie…',
    honeypotLabel: 'Twoja strona (zostaw to pole puste)',
    submitErrorTitle: 'Nie udało się wysłać wiadomości.',
    submitErrorRetry: 'Spróbuj ponownie albo napisz do mnie bezpośrednio na',
    sending: 'Wysyłam…',
    send: 'Wyślij wiadomość',
    errName: 'Jak mam się do Ciebie zwracać?',
    errEmailMissing: 'Podaj email, żebym mógł odpisać',
    errEmailInvalid: 'To nie wygląda jak email. Spróbuj imie@przyklad.pl',
    errMessageMissing: 'Zdanie lub dwa o projekcie w zupełności wystarczą na start',
    errMessageShort: 'Odrobina więcej szczegółów pomoże mi sensownie odpowiedzieć',
    cardEyebrow: 'Czego się spodziewać',
    expect: [
      {
        num: '01',
        title: 'Czytam każdą wiadomość',
        desc: 'Żadnych automatycznych odpowiedzi. Czytam Twoją wiadomość osobiście i odpowiadam konkretnie, nie szablonem.',
      },
      {
        num: '02',
        title: 'Odpowiedź w 24h',
        desc: 'Odpisuję w ciągu jednego dnia roboczego. Zwykle szybciej. Jeśli jestem w podróży, dam znać.',
      },
      {
        num: '03',
        title: 'Szczera odpowiedź',
        desc: 'Jeśli Twój budżet albo brief nie pasują do tego, co robię, powiem to wprost — i jeśli mogę, wskażę lepsze miejsce.',
      },
      {
        num: '04',
        title: 'Krótka rozmowa, jeśli pasujemy',
        desc: 'Jeśli na papierze wygląda to dobrze, zaproponuję 20-minutową rozmowę, żeby upewnić się, że to dobre dopasowanie.',
      },
    ],
    preferEmail: 'Wolisz email?',
  },
} as const

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

interface RadioPillsProps {
  name: string
  label: string
  options: readonly string[]
  value: string
  onChange: (value: string) => void
}

function RadioPills({ name, label, options, value, onChange }: RadioPillsProps) {
  const groupId = `${name}-label`
  const refs = useRef<(HTMLButtonElement | null)[]>([])

  const focusAt = (idx: number) => {
    const target = (idx + options.length) % options.length
    onChange(options[target])
    refs.current[target]?.focus()
  }

  const handleKey = (e: React.KeyboardEvent<HTMLButtonElement>, idx: number) => {
    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        e.preventDefault()
        focusAt(idx + 1)
        break
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault()
        focusAt(idx - 1)
        break
      case 'Home':
        e.preventDefault()
        focusAt(0)
        break
      case 'End':
        e.preventDefault()
        focusAt(options.length - 1)
        break
      case ' ':
      case 'Enter':
        e.preventDefault()
        onChange(options[idx])
        break
    }
  }

  return (
    <div className="cform__field">
      <span className="cform__label" id={groupId}>{label}</span>
      <div className="cform__toggles" role="radiogroup" aria-labelledby={groupId}>
        {options.map((opt, idx) => {
          const checked = value === opt
          return (
            <button
              key={opt}
              ref={(el) => { refs.current[idx] = el }}
              type="button"
              role="radio"
              aria-checked={checked}
              tabIndex={checked ? 0 : -1}
              onKeyDown={(e) => handleKey(e, idx)}
              onClick={() => onChange(opt)}
              className={`cform__toggle${checked ? ' cform__toggle--active' : ''}`}
            >
              <svg
                className={`cform__check ${checked ? 'cform__check--active' : ''}`}
                width="10"
                height="8"
                viewBox="0 0 10 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M1 4.5L3.5 7L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {opt}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default function ContactForm({ locale = 'en' }: { locale?: Locale }) {
  const copy = FORM_COPY[locale]
  const uid = useId()
  const ids = {
    name: `${uid}-name`,
    email: `${uid}-email`,
    company: `${uid}-company`,
    message: `${uid}-message`,
    website: `${uid}-website`,
    nameErr: `${uid}-name-err`,
    emailErr: `${uid}-email-err`,
    messageErr: `${uid}-message-err`,
    submitErr: `${uid}-submit-err`,
  }

  // Captured once on mount, used as a server-side time-trap.
  const startedAtRef = useRef<number>(0)
  useEffect(() => {
    startedAtRef.current = Date.now()
  }, [])
  const [honeypot, setHoneypot] = useState('')

  const [formData, setFormData] = useState<ContactFormPayload>({
    name: '',
    email: '',
    company: '',
    message: '',
    projectType: copy.defaultProjectType,
    budget: copy.defaultBudget,
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [sent, setSent] = useState(false)
  const [isShaking, setIsShaking] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const validate = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = copy.errName
    }

    if (!formData.email.trim()) {
      newErrors.email = copy.errEmailMissing
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = copy.errEmailInvalid
    }

    if (!formData.message.trim()) {
      newErrors.message = copy.errMessageMissing
    } else if (formData.message.trim().length < 10) {
      newErrors.message = copy.errMessageShort
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
    if (submitError) setSubmitError(null)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (isSubmitting) return
    setSubmitError(null)

    if (!validate()) {
      setIsShaking(true)
      setTimeout(() => setIsShaking(false), 500)
      return
    }

    setIsSubmitting(true)
    const result = await sendEmail({
      ...formData,
      website: honeypot,
      startedAt: startedAtRef.current,
    })

    if (result.success) {
      trackEvent('contact_form_submitted', {
        projectType: formData.projectType,
        budget: formData.budget,
        locale,
      })
      setSent(true)
    } else {
      trackEvent('contact_form_error', { error: result.error, locale })
      setSubmitError(result.error)
    }

    setIsSubmitting(false)
  }

  return (
    <div className="cform__layout">
      {/* Left, form */}
      <div className="cform__left">
        <div className="hero__available cform__available">
          <span className="hero__dot" />
          {copy.available}
        </div>
        <p className="eyebrow">{copy.eyebrow}</p>

        {sent ? (
          <div className="cform__success cform__success--animate" role="status">
            <h2 className="cform__success-title">{copy.successTitle}</h2>
            <p className="cform__success-desc">{copy.successDesc}</p>
          </div>
        ) : (
          <form className="cform" onSubmit={handleSubmit} noValidate>
            <div className="cform__row">
              <div className="cform__field">
                <label htmlFor={ids.name} className="cform__label">{copy.nameLabel}</label>
                <input
                  id={ids.name}
                  name="name"
                  className={`cform__input ${errors.name ? 'cform__input--error' : ''} ${isShaking && errors.name ? 'cform__input--shake' : ''}`}
                  type="text"
                  autoComplete="name"
                  required
                  maxLength={120}
                  placeholder={copy.namePlaceholder}
                  value={formData.name}
                  onChange={handleChange}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? ids.nameErr : undefined}
                />
                {errors.name && (
                  <span id={ids.nameErr} className="cform__error" role="alert">
                    {errors.name}
                  </span>
                )}
              </div>
              <div className="cform__field">
                <label htmlFor={ids.email} className="cform__label">{copy.emailLabel}</label>
                <input
                  id={ids.email}
                  name="email"
                  className={`cform__input ${errors.email ? 'cform__input--error' : ''} ${isShaking && errors.email ? 'cform__input--shake' : ''}`}
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  required
                  maxLength={200}
                  placeholder={copy.emailPlaceholder}
                  value={formData.email}
                  onChange={handleChange}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? ids.emailErr : undefined}
                />
                {errors.email && (
                  <span id={ids.emailErr} className="cform__error" role="alert">
                    {errors.email}
                  </span>
                )}
              </div>
            </div>

            <div className="cform__field">
              <label htmlFor={ids.company} className="cform__label">
                {copy.companyLabel} <span className="cform__optional">{copy.companyOptional}</span>
              </label>
              <input
                id={ids.company}
                name="company"
                className="cform__input"
                type="text"
                autoComplete="organization"
                maxLength={160}
                placeholder={copy.companyPlaceholder}
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            <RadioPills
              name={`${uid}-projectType`}
              label={copy.projectTypeLabel}
              options={copy.projectTypes}
              value={formData.projectType}
              onChange={(v) => setFormData((prev) => ({ ...prev, projectType: v }))}
            />

            <RadioPills
              name={`${uid}-budget`}
              label={copy.budgetLabel}
              options={copy.budgets}
              value={formData.budget}
              onChange={(v) => setFormData((prev) => ({ ...prev, budget: v }))}
            />

            {formData.budget === '< €1k' && (
              <p className="cform__budget-note" role="note">
                {copy.budgetNote}
              </p>
            )}

            <div className="cform__field">
              <label htmlFor={ids.message} className="cform__label">{copy.messageLabel}</label>
              <textarea
                id={ids.message}
                name="message"
                className={`cform__textarea ${errors.message ? 'cform__input--error' : ''} ${isShaking && errors.message ? 'cform__input--shake' : ''}`}
                rows={5}
                required
                maxLength={5000}
                placeholder={copy.messagePlaceholder}
                value={formData.message}
                onChange={handleChange}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? ids.messageErr : undefined}
              />
              {errors.message && (
                <span id={ids.messageErr} className="cform__error" role="alert">
                  {errors.message}
                </span>
              )}
            </div>

            {/* Honeypot. Hidden from humans, not from bots. */}
            <div className="cform__honeypot" aria-hidden="true">
              <label htmlFor={ids.website}>
                {copy.honeypotLabel}
              </label>
              <input
                id={ids.website}
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </div>

            {submitError && (
              <div
                id={ids.submitErr}
                className="cform__submit-error"
                role="alert"
                aria-live="assertive"
              >
                <p className="cform__submit-error-title">{copy.submitErrorTitle}</p>
                <p className="cform__submit-error-desc">
                  {submitError} {copy.submitErrorRetry}{' '}
                  <a href={`mailto:${SITE_DATA.email}`} className="cform__submit-error-link">
                    {SITE_DATA.email}
                  </a>
                  .
                </p>
              </div>
            )}

            <Button
              variant="primary"
              chevron
              type="submit"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
            >
              {isSubmitting ? copy.sending : copy.send}
            </Button>
          </form>
        )}
      </div>

      {/* Right, what to expect */}
      <div className="cform__right">
        <div className="cform__card">
          <p className="cform__card-eyebrow">{copy.cardEyebrow}</p>
          <div className="cform__card-items">
            {copy.expect.map((item) => (
              <div key={item.num} className="cform__card-item">
                <span className="cform__card-num">{item.num}</span>
                <div className="cform__card-rule" />
                <h3 className="cform__card-title">{item.title}</h3>
                <p className="cform__card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="cform__card-footer">
            <span className="cform__card-footer-text">{copy.preferEmail}</span>
            <a
              href={`mailto:${SITE_DATA.email}`}
              className="cform__card-email"
              onClick={() => trackEvent('email_link_click', { location: 'contact_form_card', locale })}
            >
              {SITE_DATA.email}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
