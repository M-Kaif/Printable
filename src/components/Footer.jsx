import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between ">
          <div className="mb-6 md:mb-0 md:w-3/6">
            <Link to="/" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap">InkMudra</span>
            </Link>
            <div className='p-4 mt-4 rounded-md text-sm'>
              <h3 className="text-lg font-semibold">Welcome to InkMudra - Your Ultimate Printing Partner!</h3>
              <p className="mt-2 text-gray-500">
              At InkMudra, we specialize in printing high-quality blackbooks and documents. Customize your prints with ease, and enjoy fast, reliable service tailored to your needs
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6">
            <div className="flex flex-col items-start">
              <h2 className="mb-4 text-sm font-semibold uppercase">Pages</h2>
              <ul className="text-gray-500 font-medium space-y-2">
                <li><Link to="/pricecal" className="hover:underline">Calculate Price</Link></li>
                <li><Link to="/documents" className="hover:underline">Documents</Link></li>
                <li><Link to="/blackbook" className="hover:underline">Blackbook</Link></li>
              </ul>
            </div>
           
            <div className="flex flex-col items-start">
              <h2 className="mb-4 text-sm font-semibold uppercase">Policies</h2>
              <ul className="text-gray-500 font-medium space-y-2">
                <li><Link to="/privacypolicy" className="hover:underline">Privacy Policy</Link></li>
                <li><Link to="/cancellation-policy" className="hover:underline">Cancellation Policy</Link></li>
              </ul>
            </div>
            <div className="flex flex-col items-start">
              <h2 className="mb-4 text-sm font-semibold uppercase">Contact Us</h2>
              <ul className="text-gray-500 font-medium space-y-2">
                <li><Link to="/contact-us" className="hover:underline">Contact Form</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <Link to="/" className="hover:underline">InkMudra™</Link>. All Rights Reserved.</span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-5">
            <Link to="https://facebook.com/inkmudra" className="text-gray-500 hover:text-blue-900 dark:hover:text-white">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
              </svg>
              <span className="sr-only">Facebook page</span>
            </Link>
            <Link to="https://instagram.com/inkmudra" className="text-gray-500 hover:text-pink-600 dark:hover:text-white">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="sr-only">Instagram page</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
