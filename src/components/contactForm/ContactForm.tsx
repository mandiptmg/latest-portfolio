import { useState } from 'react'

const ContactForm = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic
  }

  return (
    <form className='w-full text-left mx-auto' onSubmit={handleSubmit}>
      <div className='mb-6'>
        <label
          htmlFor='full-name'
          className='block text-gray-700 font-semibold'
        >
          Full Name
        </label>
        <input
          type='text'
          id='full-name'
          className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1F618D] focus:outline-[#1F618D] focus:ring-[#1F618D]'
          placeholder='Enter your full name'
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </div>
      <div className='mb-6'>
        <label htmlFor='email' className='block text-gray-700 font-semibold'>
          Email Address
        </label>
        <input
          type='email'
          id='email'
          className='mt-1 block p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-[#1F618D] focus:outline-[#1F618D] focus:ring-[#1F618D]'
          placeholder='Enter your email address'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className='mb-6'>
        <label htmlFor='message' className='block text-gray-700 font-semibold'>
          Message
        </label>
        <textarea
          id='message'
          className='mt-1 block w-full focus:outline-[#1F618D] rounded-md p-2 border-gray-300 shadow-sm focus:border-[#1F618D] resize-none focus:ring-[#1F618D]'
          rows={4}
          placeholder='Enter your message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>
      <button
        type='submit'
        className='w-full bg-[#1F618D] hover:bg-[#164362] duration-700 text-white py-2 px-4 rounded-md  focus:outline-[#1F618D] focus:ring-2 focus:ring-offset-2 focus:ring-[#1F618D]'
      >
        Send Message
      </button>
    </form>
  )
}

export default ContactForm
