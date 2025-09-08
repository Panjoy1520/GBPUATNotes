import React from 'react'
import GBPUATNotes_logo from "../../assets/GBPUATNotes_logo.png";


function HeroNav() {
  return (
    <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-0 md:px-4  backdrop-blur-sm text-white z-50">
        {/* Logo */}
        <div className="flex items-center">
          <img src={GBPUATNotes_logo} alt="logo" className="h-24 md:h-24 w-auto" />
        
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="/" className="hover:text-orange-400">
            Home
          </a>
          <a href="#about" className="hover:text-orange-400">
            About
          </a>
          <a href="#contact" className="hover:text-orange-400">
            Contact
          </a>
          <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-md font-medium">
            Sign in
          </button>
        </div>
      </nav>
  )
}

export default HeroNav