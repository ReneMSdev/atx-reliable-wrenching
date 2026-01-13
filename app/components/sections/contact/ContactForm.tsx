'use client'
import React, { useState } from 'react'
import { FaRegPaperPlane } from 'react-icons/fa6'
import { toast } from 'react-toastify'

const initialState = { name: '', phone: '', email: '', message: '' }

export default function ContactForm() {
  const [formData, setFormData] = useState(initialState)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const formatPhoneNumber = (value: string): string => {
    // Remove all non-digit characters
    const digits = value.replace(/\D/g, '')

    // Apply mask: (XXX) XXX-XXXX
    if (digits.length <= 3) {
      return digits.length > 0 ? `(${digits}` : digits
    } else if (digits.length <= 6) {
      return `(${digits.slice(0, 3)}) ${digits.slice(3)}`
    } else {
      return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`
    }
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value)
    setFormData({ ...formData, phone: formatted })
    setErrors({ ...errors, phone: '' })
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}
    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) {
        newErrors[key] = 'This field is required'
      } else if (key === 'phone') {
        // Validate phone number: must have at least 9 digits
        const digits = value.replace(/\D/g, '')
        if (digits.length < 9) {
          newErrors[key] = 'invalid phone number'
        }
      } else if (key === 'email') {
        // Validate email format: name@email.com
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(value.trim())) {
          newErrors[key] = 'invalid email address'
        }
      }
    })
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    try {
      setLoading(true)
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error()
      toast.success('Message sent successfully')
    } catch {
      toast.error('Failed to send message')
    } finally {
      setLoading(false)
    }
  }

  const inputClass = 'w-full p-[7px] bg-surface focus:outline-none focus:ring-2 focus:ring-accent'

  return (
    <form
      className='w-full max-w-[345px] px-[14px] py-[22px] border-4 border-accent bg-white'
      onSubmit={handleSubmit}
      noValidate
    >
      {/* Name field */}
      <div className='mb-3.5'>
        <label className='block font-condensed font-semibold tracking-wide text-sm'>Name</label>
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
          className={inputClass}
        />
        {errors.name && <p className='text-red-600 text-xs mt-1'>{errors.name}</p>}
      </div>

      {/* Phone field with custom mask */}
      <div className='mb-3.5'>
        <label className='block font-condensed font-semibold tracking-wide text-sm'>Phone</label>
        <input
          type='tel'
          name='phone'
          value={formData.phone}
          onChange={handlePhoneChange}
          maxLength={14}
          className={inputClass}
        />
        {errors.phone && <p className='text-red-600 text-xs mt-1'>{errors.phone}</p>}
      </div>

      {/* Email field */}
      <div className='mb-3.5'>
        <label className='block font-condensed font-semibold tracking-wide text-sm'>Email</label>
        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          className={inputClass}
        />
        {errors.email && <p className='text-red-600 text-xs mt-1'>{errors.email}</p>}
      </div>

      <div className='mb-3.5'>
        <label
          className='block font-condensed font-semibold tracking-wide text-sm'
          htmlFor='message'
        >
          Message
        </label>
        <textarea
          name='message'
          id='message'
          value={formData.message}
          onChange={handleChange}
          rows={4}
          required
          className='w-full p-[7px] bg-surface focus:outline-none focus:ring-2 focus:ring-accent min-h-[100px]'
        />
        {errors.message && <p className='text-red-600 text-xs mt-1'>{errors.message}</p>}
      </div>
      <div className='flex justify-center'>
        <button
          type='submit'
          disabled={loading}
          className='flex items-center justify-center py-[11px] px-[43px] bg-accent text-white hover:bg-accent-hover transition-colors cursor-pointer font-semibold text-sm'
        >
          <span className='mr-2'>
            <FaRegPaperPlane className='text-white' />
          </span>
          {loading ? 'Sending...' : 'Submit'}
        </button>
      </div>
    </form>
  )
}
