import { useState } from 'react';
import Image from 'next/image';
import logo from '@/images/logo0001.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', text: 'Home' },
    { href: 'pricing', text: 'Pricing' },
    { href: '#', text: 'About Us' },
  ];

  return (
    <header className="relative bg-white z-50">
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-between items-center px-6 py-4 sm:px-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <Image
                className="h-20 w-auto sm:h-22"
                src={logo}
                alt="GitBlender"
              />    

            </a>
            <p className='ml-2 mt-5 text-2xl font-semibold text-orange-950 dark:text-white' >GetYourSEO</p>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-orange-900 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            {navLinks.map((link) => (
              <a key={link.text} href={link.href} className="text-base font-medium text-orange-900 hover:text-gray-900">
                {link.text}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right z-50 md:hidden">
          <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                <Image
                  className="h-8 w-auto"
                  src={logo}
                  alt="Your Company"
                />
                
              </div>
              <div className="-mr-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.text}
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}