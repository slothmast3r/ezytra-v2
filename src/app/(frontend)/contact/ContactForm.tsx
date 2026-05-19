'use client'

import React, { useId, useRef, useState } from 'react'
import Button from '../components/Button'
import { SITE_DATA } from '../data'
import { track } from '@vercel/analytics'
import { sendEmail, type ContactFormPayload } from './actions'

const PROJECT_TYPES = ['Web Design', 'Development', 'Brand Identity', 'CMS Setup', 'Full Project', 'Other'] as const
const BUDGETS = ['< €1k', '€1k–3k', '€3k–8k', '€6k+', "Let's talk"] as const

const WHAT_TO_EXPECT = [
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
]

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

export default function ContactForm() {
  const uid = useId()
  const ids = {
    name: `${uid}-name`,
    email: `${uid}-email`,
    company: `${uid}-company`,
    message: `${uid}-message`,
    nameErr: `${uid}-name-err`,
    emailErr: `${uid}-email-err`,
    messageErr: `${uid}-message-err`,
    submitErr: `${uid}-submit-err`,
  }

  const [formData, setFormData] = useState<ContactFormPayload>({
    name: '',
    email: '',
    company: '',
    message: '',
    projectType: 'Full Project',
    budget: '€3k–8k',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [sent, setSent] = useState(false)
  const [isShaking, setIsShaking] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const validate = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'What should I call you?'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Add your email so I can write back'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'That doesn’t look like an email. Try name@example.com'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'A sentence or two about your project is enough to start'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'A little more detail would help me reply usefully'
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
    const result = await sendEmail(formData)

    if (result.success) {
      track('contact_form_submitted', {
        projectType: formData.projectType,
        budget: formData.budget,
      })
      setSent(true)
    } else {
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
          Available for new projects
        </div>
        <p className="eyebrow">— Send a Message</p>

        {sent ? (
          <div className="cform__success cform__success--animate" role="status">
            <h2 className="cform__success-title">Message sent.</h2>
            <p className="cform__success-desc">I&apos;ll get back to you within 24 hours.</p>
          </div>
        ) : (
          <form className="cform" onSubmit={handleSubmit} noValidate>
            <div className="cform__row">
              <div className="cform__field">
                <label htmlFor={ids.name} className="cform__label">Name</label>
                <input
                  id={ids.name}
                  name="name"
                  className={`cform__input ${errors.name ? 'cform__input--error' : ''} ${isShaking && errors.name ? 'cform__input--shake' : ''}`}
                  type="text"
                  autoComplete="name"
                  required
                  maxLength={120}
                  placeholder="John Kowalski"
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
                <label htmlFor={ids.email} className="cform__label">Email</label>
                <input
                  id={ids.email}
                  name="email"
                  className={`cform__input ${errors.email ? 'cform__input--error' : ''} ${isShaking && errors.email ? 'cform__input--shake' : ''}`}
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  required
                  maxLength={200}
                  placeholder="hello@example.com"
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
                Company <span className="cform__optional">(optional)</span>
              </label>
              <input
                id={ids.company}
                name="company"
                className="cform__input"
                type="text"
                autoComplete="organization"
                maxLength={160}
                placeholder="Your company or project name"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            <RadioPills
              name={`${uid}-projectType`}
              label="Project type"
              options={PROJECT_TYPES}
              value={formData.projectType}
              onChange={(v) => setFormData((prev) => ({ ...prev, projectType: v }))}
            />

            <RadioPills
              name={`${uid}-budget`}
              label="Budget range"
              options={BUDGETS}
              value={formData.budget}
              onChange={(v) => setFormData((prev) => ({ ...prev, budget: v }))}
            />

            {formData.budget === '< €1k' && (
              <p className="cform__budget-note" role="note">
                Heads up: projects under €1k rarely fit the way I work. Send the brief
                anyway. If I can point you somewhere better, I will.
              </p>
            )}

            <div className="cform__field">
              <label htmlFor={ids.message} className="cform__label">Your message</label>
              <textarea
                id={ids.message}
                name="message"
                className={`cform__textarea ${errors.message ? 'cform__input--error' : ''} ${isShaking && errors.message ? 'cform__input--shake' : ''}`}
                rows={5}
                required
                maxLength={5000}
                placeholder="A few sentences about what you have in mind…"
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

            {submitError && (
              <div
                id={ids.submitErr}
                className="cform__submit-error"
                role="alert"
                aria-live="assertive"
              >
                <p className="cform__submit-error-title">Couldn&apos;t send your message.</p>
                <p className="cform__submit-error-desc">
                  {submitError} Try again, or email me directly at{' '}
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
              {isSubmitting ? 'Sending…' : 'Send Message'}
            </Button>
          </form>
        )}
      </div>

      {/* Right, what to expect */}
      <div className="cform__right">
        <div className="cform__card">
          <p className="cform__card-eyebrow">What to expect</p>
          <div className="cform__card-items">
            {WHAT_TO_EXPECT.map((item) => (
              <div key={item.num} className="cform__card-item">
                <span className="cform__card-num">{item.num}</span>
                <div className="cform__card-rule" />
                <h3 className="cform__card-title">{item.title}</h3>
                <p className="cform__card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="cform__card-footer">
            <span className="cform__card-footer-text">Prefer email?</span>
            <a href={`mailto:${SITE_DATA.email}`} className="cform__card-email">{SITE_DATA.email}</a>
          </div>
        </div>
      </div>
    </div>
  )
}
