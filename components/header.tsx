"use client"

import Link from "next/link"
import { Hexagon, Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 liquid-glass border-b border-orange-500/10">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Hexagon className="h-10 w-10 text-orange-500 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 fill-current" />
              <div className="absolute inset-0 h-10 w-10 bg-orange-500/20 rounded-full blur-md group-hover:bg-orange-500/40 transition-all duration-300" />
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">SYNEX</span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-12">
            <Link
              href="/"
              className="text-white hover:text-orange-400 transition-all duration-300 font-medium text-lg relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/features"
              className="text-gray-300 hover:text-orange-400 transition-all duration-300 font-medium text-lg relative group"
            >
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/support"
              className="text-gray-300 hover:text-orange-400 transition-all duration-300 font-medium text-lg relative group"
            >
              Support
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* Simplified Buy Button */}
            <button className="liquid-button px-6 py-3 text-lg font-bold text-white rounded-xl group relative overflow-hidden">
              <span className="relative z-10 flex items-center">Get SYNEX</span>
            </button>
          </nav>

          <button
            className="lg:hidden text-white hover:text-orange-400 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Simplified Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden liquid-glass rounded-2xl mt-4 p-6 border border-orange-500/20">
            <nav className="flex flex-col space-y-6">
              <Link href="/" className="text-white hover:text-orange-400 transition-colors font-medium text-lg">
                Home
              </Link>
              <Link
                href="/features"
                className="text-gray-300 hover:text-orange-400 transition-colors font-medium text-lg"
              >
                Features
              </Link>
              <Link
                href="/support"
                className="text-gray-300 hover:text-orange-400 transition-colors font-medium text-lg"
              >
                Support
              </Link>
              <button className="liquid-button px-6 py-3 text-lg font-bold text-white rounded-xl">Get SYNEX</button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
