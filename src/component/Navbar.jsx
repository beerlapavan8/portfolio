import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <header className="flex flex-wrap items-center px-4 py-4 bg-white shadow-md shadow-xl lg:px-16">
        <div className="flex items-center justify-between flex-1">
          <Link to="/" className="text-xl font-bold">Beerla Pavan</Link>
        </div>
        <label htmlFor="menu-toggle" className="block pointer-cursor md:hidden">
          <svg className="text-gray-900 fill-current"
            xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />
        <div className="hidden w-full md:flex md:items-center md:w-auto" id="menu">
          <nav>
            <ul className="items-center justify-between pt-4 text-base text-gray-700 md:flex md:pt-0">
              <li className="block px-0 py-3 text-xl font-bold md:p-4"><Link to="/projects">Projects</Link></li>
              <li className="block px-0 py-3 text-xl font-bold md:p-4"><Link to="/certificates">Certifications</Link></li>
              <li className="block px-0 py-3 text-xl font-bold md:p-4"><Link to="/skills">Skills</Link></li>
              <li className="block px-0 py-3 text-xl font-bold md:p-4"><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Navbar


