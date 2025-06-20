"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function HeroHeader() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "features", "pricing"]
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = sectionId === "home" ? 0 : element.offsetTop - 100
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 hero-glass">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          {/* Left Side - SYNEX Logo and Text */}
          <div className="flex items-center space-x-6">
            <div className="synex-logo">
              <Image
                src="/images/synex-logo.png"
                alt="SYNEX Logo"
                width={60}
                height={60}
                className="w-15 h-15"
                priority
              />
            </div>
            <div className="synex-text text-4xl font-black tracking-tight">SYNEX</div>
          </div>

          {/* Right Side - Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className={`nav-item ${activeSection === "home" ? "text-orange-400" : ""}`}
            >
              Home
            </button>

            <button className="nav-item disabled" disabled>
              Customer Area
            </button>

            <button
              onClick={() => scrollToSection("features")}
              className={`nav-item ${activeSection === "features" ? "text-orange-400" : ""}`}
            >
              Features
            </button>

            <button
              onClick={() => scrollToSection("pricing")}
              className={`nav-item nav-glass rounded-xl px-6 py-3 ${
                activeSection === "pricing" ? "text-orange-400" : ""
              }`}
            >
              Buy SYNEX
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="lg:hidden nav-glass rounded-xl p-3">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
