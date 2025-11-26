"use client"

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-md">
      <div className="container-4m">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="text-white">4</span>
              <span className="text-accent">M</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-accent transition-colors font-medium">
              Home
            </Link>
            <Link href="/gallery" className="text-white hover:text-accent transition-colors font-medium">
              Our Work
            </Link>
            <Link href="/services" className="text-white hover:text-accent transition-colors font-medium">
              Services
            </Link>
            <Link href="/about" className="text-white hover:text-accent transition-colors font-medium">
              About Us
            </Link>
            <Link href="/estimate" className="text-white hover:text-accent transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Link
              href="/estimate"
              className="hidden sm:inline-flex bg-accent hover:opacity-90 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Get FREE ESTIMATE
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-6 space-y-4 animate-in slide-in-from-top">
            <Link
              href="/"
              className="block text-white hover:text-accent transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/gallery"
              className="block text-white hover:text-accent transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Work
            </Link>
            <Link
              href="/services"
              className="block text-white hover:text-accent transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about"
              className="block text-white hover:text-accent transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/estimate"
              className="block text-white hover:text-accent transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/estimate"
              className="block bg-accent text-white px-6 py-3 rounded-lg font-semibold text-center mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Get FREE ESTIMATE
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
