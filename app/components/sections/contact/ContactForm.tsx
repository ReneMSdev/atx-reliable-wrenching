import React, { useState } from 'react'
import { FaRegPaperPlane } from 'react-icons/fa6'
import { toast } from 'react-toastify'
import InputMask from 'react-input-mask'

const initialState = { name: '', phone: '', email: '', message: '' }

export default function ContactForm() {
  const [formData, setFormData] = useState(initialState)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}
    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) newErrors[key] = 'This field is required'
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
    >
      {['name', 'phone', 'email'].map((field) => (
        <div
          key={field}
          className='mb-3.5'
        >
          <label className='block font-condensed font-semibold tracking-wide text-sm'>
            {field.charAt(0).toUpperCase() + field.slice(1)}
          </label>
          <input
            type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
            name={field}
            value={formData[field as keyof typeof formData]}
            onChange={handleChange}
            className={inputClass}
          />
          {errors[field] && <p className='text-red-600 text-sm mt-1'>{errors[field]}</p>}
        </div>
      ))}

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
          className='w-full p-[7px] bg-surface focus:outline-none focus:ring-2 focus:ring-accent min-h-[100px]'
        />
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
