import React from 'react'

const Footer = () => {
  return (
    <footer>

      <footer className="bg-neutral-primary-soft dark:bg-gray-900 rounded-base shadow-xs border border-default dark:border-gray-700 ">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">

          <div className="sm:flex sm:items-center sm:justify-between">

            <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <img src="https://flowbite.com/docs/images/logo.svg" className="h-7" alt="Flowbite Logo" />
              <span className="text-heading dark:text-white self-center text-2xl font-semibold whitespace-nowrap">Movix</span>
            </a>

            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-body dark:text-gray-300 sm:mb-0">

              <li>
                <a href="https://www.instagram.com/its_ali.niaz" className="hover:underline me-4 md:me-6 dark:hover:text-white">Instagram</a>
              </li>

              <li>
                <a href="https://www.linkedin.com/in/ali-niaz-/" className="hover:underline me-4 md:me-6 dark:hover:text-white">Linkedn</a>
              </li>

              <li>
                <a href="https://github.com/AliNiaz-dev" className="hover:underline me-4 md:me-6 dark:hover:text-white">Github</a>
              </li>

            </ul>

          </div>

          <hr className="my-6 border-default dark:border-gray-700 sm:mx-auto lg:my-8" />

          <span className="block text-sm text-body dark:text-gray-400 sm:text-center">
            © 20230 <a href="/" className="hover:underline dark:text-white">Movix™</a>. All Rights Reserved.
          </span>

        </div>
      </footer>

    </footer>
  )
}

export default Footer