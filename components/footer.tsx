"use client"

import Link from "next/link"
import { Hexagon, MessageCircle, Shield, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-t from-black to-slate-950 border-t border-orange-500/10 py-16 px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3 group">
              <Hexagon className="h-10 w-10 text-orange-500 fill-current group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-2xl font-bold text-white">SYNEX</span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Premium hardware protection technology for the modern digital landscape. Undetected, unmatched,
              uncompromising.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/features" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/compatibility" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Compatibility
                </Link>
              </li>
              <li>
                <Link href="/updates" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Updates
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/docs" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-orange-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/discord"
                  className="text-gray-400 hover:text-orange-400 transition-colors flex items-center space-x-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Discord</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/license" className="text-gray-400 hover:text-orange-400 transition-colors">
                  License
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-orange-500/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400">© 2024 SYNEX. All rights reserved. Premium protection technology.</div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-green-400">
              <Shield className="h-4 w-4" />
              <span className="text-sm font-medium">Secure & Protected</span>
            </div>
            <div className="flex items-center space-x-2 text-orange-400">
              <Mail className="h-4 w-4" />
              <span className="text-sm font-medium">Premium Support</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
