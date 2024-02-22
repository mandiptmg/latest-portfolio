import { useState } from 'react'
import { BiMessageAltCheck } from 'react-icons/bi'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ContactForm = () => {
  // const [fullName, setFullName] = useState('')
  // const [email, setEmail] = useState('')
  // const [message, setMessage] = useState('')
  const [user, setUser] = useState({
    fullName: '',
    email: '',
    message: '',
  })
  let id, value
  const handlerChange = (e: React.FormEvent) => {
    id = (e.target as HTMLInputElement).id
    value = (e.target as HTMLInputElement).value
    setUser({
      ...user,
      [id]: value,
    })
  }

  const handlerSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const { fullName, email, message } = user
    const res = await fetch(
      'https://portfolio-form-1fd77-default-rtdb.firebaseio.com/portfolio-form.json',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName,
          email,
          message,
        }),
      }
    )

    // Form validation
    if (!fullName || !email || !message) {
      toast.error('Please fill out all fields.')
      return
    }

    // Form submission logic (e.g., API call)
    // Assuming the form submission is successful
    toast.success('Message sent successfully!', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })

    // Reset form fields after successful submission
    setUser({
      fullName: '',
      email: '',
      message: '',
    })
  }

  return (
    <div>
      <form onSubmit={handlerSubmit}
        data-aos='fade-left'
        method='POST'
        className='w-full text-left dark:text-black mx-auto'
      >
        <div className='mb-6'>
          <label
            htmlFor='full-name'
            className='block text-gray-700 dark:text-gray-200 font-semibold'
          >
            Full Name
          </label>
          <input
            type='text'
            id='fullName'
            className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1F618D] focus:outline-[#1F618D] focus:ring-[#1F618D]'
            placeholder='Enter your full name'
            value={user.fullName}
            onChange={handlerChange}
            required
          />
        </div>
        <div className='mb-6'>
          <label
            htmlFor='email'
            className='block text-gray-700 dark:text-gray-200 font-semibold'
          >
            Email Address
          </label>
          <input
            type='email'
            id='email'
            className='mt-1 block p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-[#1F618D] focus:outline-[#1F618D] focus:ring-[#1F618D]'
            placeholder='Enter your email address'
            value={user.email}
            onChange={handlerChange}
            required
          />
        </div>
        <div className='mb-6'>
          <label
            htmlFor='message'
            className='block text-gray-700 dark:text-gray-200 font-semibold'
          >
            Message
          </label>
          <textarea
            id='message'
            className='mt-1 block w-full focus:outline-[#1F618D] rounded-md p-2 border-gray-300 shadow-sm focus:border-[#1F618D] resize-none focus:ring-[#1F618D]'
            rows={4}
            placeholder='Enter your message'
            value={user.message}
            onChange={handlerChange}
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
      <ToastContainer />
    </div>
  )
}

export default ContactForm
