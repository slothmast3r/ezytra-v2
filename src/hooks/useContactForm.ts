'use client'

import { useState } from 'react'
import { track } from '@vercel/analytics'
import { sendEmail } from '../app/(frontend)/contact/actions'

interface ContactFormData {
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

export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
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

    const trimmedMessage = formData.message.trim()
    if (!trimmedMessage) {
      newErrors.message = 'Tell me a bit about your project'
    } else if (trimmedMessage.length < 10) {
      newErrors.message = 'Your message is a bit too short'
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
  }

  const setField = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
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
      alert('Failed to send message. Please try again or email directly.')
    }

    setIsSubmitting(false)
  }

  return {
    formData,
    errors,
    isSubmitting,
    sent,
    isShaking,
    handleChange,
    handleSubmit,
    setField,
  }
}
