import React, { useState } from 'react'
import { FaRegPaperPlane } from 'react-icons/fa6'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
  }

  return (
    <form
      className='w-full max-w-[345px] px-[14px] py-[22px] border-4 border-accent bg-white'
      onSubmit={handleSubmit}
    >
      <div className='mb-3.5'>
        <label
          className='block font-condensed font-semibold tracking-wide text-sm'
          htmlFor='name'
        >
          Name
        </label>
        <input
          type='text'
          name='name'
          id='name'
          value={formData.name}
          onChange={handleChange}
          className='w-full p-[7px] bg-surface focus:outline-none focus:ring-2 focus:ring-accent'
        />
      </div>

      <div className='mb-3.5'>
        <label
          className='block font-condensed font-semibold tracking-wide text-sm'
          htmlFor='email'
        >
          Phone
        </label>
        <input
          type='tel'
          name='phone'
          id='phone'
          value={formData.phone}
          onChange={handleChange}
          className='w-full p-[7px] bg-surface focus:outline-none focus:ring-2 focus:ring-accent'
        />
      </div>

      <div className='mb-3.5'>
        <label
          className='block font-condensed font-semibold tracking-wide text-sm'
          htmlFor='email'
        >
          Email
        </label>
        <input
          type='email'
          name='email'
          id='email'
          value={formData.email}
          onChange={handleChange}
          className='w-full p-[7px] bg-surface focus:outline-none focus:ring-2 focus:ring-accent'
        />
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
          className='w-full p-[7px] bg-surface focus:outline-none focus:ring-2 focus:ring-accent min-h-[100px]'
        />
      </div>
      <div className='flex justify-center'>
        <button
          type='submit'
          className='flex items-center justify-center py-[11px] px-[43px] bg-accent text-white hover:bg-accent-hover transition-colors cursor-pointer font-semibold text-sm'
        >
          <span className='mr-2'>
            <FaRegPaperPlane className='text-white' />
          </span>
          Submit
        </button>
      </div>
    </form>
  )
}
