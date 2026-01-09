import React, { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
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
      className='w-full max-w-sm p-4 border border-3 border-accent bg-white'
      onSubmit={handleSubmit}
    >
      <div className='mb-4'>
        <label
          className='block font-condensed text-sm mb-1'
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
          className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accent'
        />
      </div>

      <div className='mb-4'>
        <label
          className='block font-condensed text-sm mb-1'
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
          className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accent'
        />
      </div>

      <div className='mb-4'>
        <label
          className='block font-condensed text-sm mb-1'
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
          className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accent'
        />
      </div>

      <button
        type='submit'
        className='flex items-center justify-center px-4 py-2 border-3-accent bg-accent text-white rounded border-b-accent-hover hover:bg-accent-hover transition-colors'
      >
        <span className='mr-2'>✈️</span> Submit
      </button>
    </form>
  )
}
