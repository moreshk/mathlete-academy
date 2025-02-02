'use client'

import Link from 'next/link'
import { useScrollPosition } from '@/hooks/useScrollPosition'

export default function Navbar() {
  const isVisible = useScrollPosition()

  return (
    <nav 
      className={`fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm transition-all duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-gray-900">
            Mathematics Mastery
          </Link>
          <div className="hidden md:flex space-x-8">
            <a href="#philosophy" className="text-gray-600 hover:text-gray-900">Philosophy</a>
            <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900">How It Works</a>
            <a href="#booking" className="text-blue-600 hover:text-blue-700 font-medium">Book Now</a>
          </div>
          <button className="md:hidden text-gray-600 hover:text-gray-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
} 