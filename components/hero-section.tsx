"use client"

import { ArrowRight, Shield, Zap, Star } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-32 scroll-offset">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Primary gradient orbs */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-l from-orange-500/20 via-orange-600/15 to-red-500/10 rounded-full blur-3xl animate-liquid-glow" />
        <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-gradient-to-t from-red-500/15 via-orange-500/12 to-yellow-500/8 rounded-full blur-2xl animate-liquid-glow delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-gradient-to-r from-orange-400/10 via-yellow-500/8 to-transparent rounded-full blur-xl animate-liquid-glow delay-2000" />

        {/* Enhanced grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,133,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,133,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40" />

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-20 items-center">
          {/* Enhanced Left Content */}
          <div className="space-y-12">
            <div className="space-y-8">
              {/* Liquid Glass Badge */}
              <div className="inline-flex items-center space-x-3 liquid-badge rounded-full px-8 py-4 group hover:scale-105 transition-all duration-300">
                <Shield className="h-6 w-6 text-orange-400 group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-orange-300 font-bold tracking-wider text-lg">PREMIUM PROTECTION</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              </div>

              {/* Enhanced main heading */}
              <h1 className="text-display">
                <div className="text-7xl md:text-8xl lg:text-9xl mb-4">
                  <span className="gradient-text-secondary">Undetected,</span>
                </div>
                <div className="text-7xl md:text-8xl lg:text-9xl">
                  <span className="gradient-text-primary">Unmatched.</span>
                </div>
              </h1>

              {/* Enhanced subheading */}
              <div className="space-y-6">
                <p className="text-3xl md:text-4xl text-heading text-white/95">
                  Fair play is{" "}
                  <span className="gradient-text-primary relative inline-block">
                    Overrated
                    <div className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 rounded-full" />
                  </span>
                </p>

                <p className="text-xl md:text-2xl text-body-large text-gray-300 max-w-2xl leading-relaxed">
                  SYNEX creates an impenetrable virtual environment that completely masks your hardware signature,
                  ensuring <span className="text-orange-400 font-semibold">absolute protection</span> while maintaining{" "}
                  <span className="text-orange-400 font-semibold">peak performance</span>.
                </p>
              </div>
            </div>

            {/* Liquid Glass CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="liquid-button px-12 py-8 text-xl font-bold text-white rounded-2xl group relative overflow-hidden">
                <span className="relative z-10 flex items-center justify-center">
                  Get SYNEX Now
                  <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-2" />
                </span>
              </button>

              <button className="liquid-glass border-2 border-orange-500/40 hover:border-orange-400/60 text-orange-300 hover:text-orange-200 font-bold px-12 py-8 text-xl rounded-2xl group transition-all duration-500 hover:scale-105">
                <span className="flex items-center justify-center">
                  <Zap className="mr-3 h-6 w-6 transition-transform group-hover:scale-110 group-hover:rotate-12" />
                  View Features
                </span>
              </button>
            </div>

            {/* Enhanced stats with liquid glass */}
            <div className="grid grid-cols-3 gap-8 pt-12">
              {[
                { value: "99.9%", label: "Undetected Rate", icon: Shield },
                { value: "24/7", label: "Premium Support", icon: Star },
                { value: "∞", label: "Lifetime Access", icon: Zap },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center group liquid-glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 relative hover:z-50"
                >
                  <div className="flex items-center justify-center mb-3">
                    <stat.icon className="h-6 w-6 text-orange-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="text-4xl font-black gradient-text-primary mb-2 group-hover:scale-105 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 font-semibold text-lg group-hover:text-gray-300 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Motherboard with Precise Lighting Animation */}
          <div className="relative">
            <div className="relative w-full h-[700px] lg:h-[800px] group">
              {/* Motherboard glow effect */}
              <div className="absolute top-50% left-50% transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-orange-500/15 via-orange-400/10 to-transparent animate-liquid-glow pointer-events-none" />

              {/* Motherboard image with precise masking */}
              <div className="relative w-full h-full">
                <Image
                  src="/images/premium-motherboard.png"
                  alt="Premium Gaming Motherboard with SYNEX Protection"
                  fill
                  className="object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-700 relative z-10"
                  priority
                />

                {/* Precisely masked lighting animation */}
                <div className="absolute inset-0 z-20 pointer-events-none">
                  <div
                    className="w-full h-full relative overflow-hidden"
                    style={{
                      maskImage: `url('/images/premium-motherboard.png')`,
                      WebkitMaskImage: `url('/images/premium-motherboard.png')`,
                      maskSize: "contain",
                      WebkitMaskSize: "contain",
                      maskRepeat: "no-repeat",
                      WebkitMaskRepeat: "no-repeat",
                      maskPosition: "center",
                      WebkitMaskPosition: "center",
                    }}
                  >
                    {/* Light sweep animation - only visible within motherboard boundaries */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-400/30 to-transparent w-[200%] h-full animate-liquid-shimmer" />

                    {/* Additional glow effects masked to motherboard */}
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-orange-400/20 rounded-full blur-xl animate-pulse" />
                    <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-red-500/15 rounded-full blur-lg animate-pulse delay-1000" />
                    <div className="absolute top-2/3 left-2/3 w-20 h-20 bg-yellow-500/25 rounded-full blur-md animate-pulse delay-2000" />
                  </div>
                </div>
              </div>

              {/* Liquid Glass floating elements */}
              <div className="absolute top-12 right-12 liquid-glass-orange rounded-2xl p-6 animate-liquid-float z-30">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <div className="text-green-300 font-bold text-lg">PROTECTED</div>
                </div>
              </div>

              <div className="absolute bottom-12 left-12 liquid-glass-orange rounded-2xl p-6 animate-liquid-float delay-1000 z-30">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse" />
                  <div className="text-orange-300 font-bold text-lg">ACTIVE</div>
                </div>
              </div>

              <div className="absolute top-1/2 right-0 liquid-glass-orange rounded-2xl p-4 animate-liquid-float delay-2000 z-30">
                <div className="text-blue-300 font-bold text-sm">SECURE</div>
              </div>

              {/* Additional integration elements */}
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-tr from-orange-500/20 to-transparent rounded-full blur-2xl animate-liquid-glow" />
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-bl from-red-500/20 to-transparent rounded-full blur-xl animate-liquid-glow delay-1000" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
