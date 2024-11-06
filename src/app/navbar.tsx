'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { label: 'About', href: '/' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="bg-bg p-4 shadow-[0_4px_0_0_#000]">
      <div className="max-w-6xl mx-auto flex justify-center items-center">
        
        <div className="hidden md:flex space-x-4 items-center">
          {navLinks.map((link) => (
            <NavLink key={link.label} label={link.label} href={link.href} />
          ))}
        </div>
        <button
          className="md:hidden p-2 bg-[#ffc800] border-4 border-black rounded-none shadow-[5px_4px_0px_0px_#000] hover:translate-x-[5px] hover:translate-y-[4px] hover:shadow-none transition-all duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-2">
          {navLinks.map((link) => (
            <NavLink key={link.label} label={link.label} href={link.href} isMobile />
          ))}
        </div>
      )}
    </nav>
  )
}

interface NavLinkProps {
  label: string
  href: string
  isMobile?: boolean
}

function NavLink({ label, href, isMobile = false }: NavLinkProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
   <>
   
    <Link
      href={href}
      className={`
        px-4 py-2 text-sm font-bold bg-[#ffc800] border-4 border-black rounded-none 
        hover:rotate-0 transition-all duration-300 shadow-[5px_4px_0px_0px_#000] 
        hover:translate-x-[5px] hover:translate-y-[4px] hover:shadow-none
        sm:px-6 sm:py-3 sm:text-base
        ${isMobile ? 'block w-full text-center' : 'inline-block'}
        `}
        onClick={() => isMobile && setIsMenuOpen(false)}
        >
      {label.toUpperCase()}
    </Link>
      </>
  )
}