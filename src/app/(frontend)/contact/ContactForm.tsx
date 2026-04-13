'use client'

import { useState } from 'react'
import Button from '../components/Button'
import { SITE_DATA } from '../data'

const PROJECT_TYPES = ['Web Design', 'Development', 'Brand Identity', 'CMS Setup', 'Full Project', 'Other']
const BUDGETS = ['< €1k', '€1k–3k', '€3k–8k', '€6k+', "Let's talk"]

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
    desc: "If your budget or brief doesn't fit what I do, I'll tell you — and point you somewhere better if I can.",
  },
  {
    num: '04',
    title: 'A quick call if it fits',
    desc: "If things look good on paper, I'll suggest a 20-minute call to make sure we're right for each other.",
  },
]

interface FormData {
  name: string
  email: string
  company: string
  message: string
  projectType: string
  budget: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
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

  const validate = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Tell me a bit about your project'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Your message is a bit too short'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) {
      setIsShaking(true)
      setTimeout(() => setIsShaking(false), 500)
      return
    }

    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setSent(true)
  }

  return (
    <div className="cform__layout">
      {/* Left — form */}
      <div className="cform__left">
        <div className="hero__available" style={{ marginBottom: '2rem' }}>
          <span className="hero__dot" />
          Available for new projects
        </div>
        <p className="eyebrow">— Send a Message</p>

        {sent ? (
          <div className="cform__success">
            <h2 className="cform__success-title">Message sent.</h2>
            <p className="cform__success-desc">I&apos;ll get back to you within 24 hours.</p>
          </div>
        ) : (
          <form className="cform" onSubmit={handleSubmit} noValidate>
            <div className="cform__row">
              <div className="cform__field">
                <label className="cform__label">Name</label>
                <input
                  name="name"
                  className={`cform__input ${errors.name ? 'cform__input--error' : ''} ${isShaking && errors.name ? 'cform__input--shake' : ''}`}
                  type="text"
                  placeholder="John Kowalski"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <span className="cform__error">{errors.name}</span>}
              </div>
              <div className="cform__field">
                <label className="cform__label">Email</label>
                <input
                  name="email"
                  className={`cform__input ${errors.email ? 'cform__input--error' : ''} ${isShaking && errors.email ? 'cform__input--shake' : ''}`}
                  type="email"
                  placeholder="hello@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <span className="cform__error">{errors.email}</span>}
              </div>
            </div>

            <div className="cform__field">
              <label className="cform__label">Company <span className="cform__optional">(optional)</span></label>
              <input
                name="company"
                className="cform__input"
                type="text"
                placeholder="Your company or project name"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            <div className="cform__field">
              <label className="cform__label">Project type</label>
              <div className="cform__toggles">
                {PROJECT_TYPES.map((t) => (
                  <button
                    key={t}
                    type="button"
                    className={`cform__toggle${formData.projectType === t ? ' cform__toggle--active' : ''}`}
                    onClick={() => setFormData(prev => ({ ...prev, projectType: t }))}
                  >
                    <svg className={`cform__check ${formData.projectType === t ? 'cform__check--active' : ''}`} width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 4.5L3.5 7L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="cform__field">
              <label className="cform__label">Budget range</label>
              <div className="cform__toggles">
                {BUDGETS.map((b) => (
                  <button
                    key={b}
                    type="button"
                    className={`cform__toggle${formData.budget === b ? ' cform__toggle--active' : ''}`}
                    onClick={() => setFormData(prev => ({ ...prev, budget: b }))}
                  >
                    <svg className={`cform__check ${formData.budget === b ? 'cform__check--active' : ''}`} width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 4.5L3.5 7L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {b}
                  </button>
                ))}
              </div>
            </div>

            <div className="cform__field">
              <label className="cform__label">Your message</label>
              <textarea
                name="message"
                className={`cform__textarea ${errors.message ? 'cform__input--error' : ''} ${isShaking && errors.message ? 'cform__input--shake' : ''}`}
                rows={5}
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && <span className="cform__error">{errors.message}</span>}
            </div>

            <Button variant="primary" chevron disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        )}
      </div>

      {/* Right — what to expect */}
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
