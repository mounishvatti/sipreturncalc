import React from 'react'
import moneysvgrepo from '/src/assets/moneysvgrepo.svg'

function Navbar() {
  return (
    <div className="relative w-full">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
    <div className="inline-flex items-center space-x-2">
      <img src={moneysvgrepo} alt="moneysvgrepo" width="30" height="30" />
      <span className="font-bold">SIP Calculator</span>
    </div>
    {/* <div className="hidden grow items-start lg:flex">
      <ul className="ml-12 inline-flex space-x-8">
        <li>
          <a
            href="#"
            className="text-sm font-semibold text-gray-200 hover:text-green-300"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-sm font-semibold text-gray-200 hover:text-green-300"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-sm font-semibold text-gray-200 hover:text-green-300"
          >
            Contact
          </a>
        </li>
      </ul>
    </div> */}
    <div className="hidden lg:block">
      <button
        type="button"
        className="rounded-md bg-purple-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        GitHub
      </button>
    </div>
    <div className="lg:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-6 w-6 cursor-pointer"
      >
        <line x1="4" y1="12" x2="20" y2="12"></line>
        <line x1="4" y1="6" x2="20" y2="6"></line>
        <line x1="4" y1="18" x2="20" y2="18"></line>
      </svg>
    </div>
  </div>
</div>

  )
}

export default Navbar