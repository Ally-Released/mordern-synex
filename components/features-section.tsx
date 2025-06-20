"use client"

import { Shield, Zap, Globe, Monitor, Gamepad2, Clock, Star, Eye } from "lucide-react"

export function FeaturesSection() {
  const premiumFeatures = [
    {
      icon: Shield,
      title: "Military-Grade Protection",
      description: "Advanced virtualization technology creates an impenetrable barrier against detection systems",
      gradient: "from-blue-500 via-blue-600 to-cyan-500",
      bgGradient: "from-blue-500/5 to-cyan-500/5",
    },
    {
      icon: Zap,
      title: "Zero Performance Impact",
      description: "Optimized algorithms ensure maximum protection with minimal system overhead and latency",
      gradient: "from-orange-500 via-orange-600 to-red-500",
      bgGradient: "from-orange-500/5 to-red-500/5",
    },
    {
      icon: Eye,
      title: "Complete Invisibility",
      description: "Advanced stealth technology makes your protection completely undetectable to all scanning methods",
      gradient: "from-purple-500 via-purple-600 to-pink-500",
      bgGradient: "from-purple-500/5 to-pink-500/5",
    },
    {
      icon: Globe,
      title: "Universal Compatibility",
      description: "Seamlessly integrates with all major gaming platforms, applications, and security systems",
      gradient: "from-green-500 via-green-600 to-emerald-500",
      bgGradient: "from-green-500/5 to-emerald-500/5",
    },
  ]

  const systemFeatures = [
    {
      icon: Monitor,
      label: "ALL SYSTEMS",
      sublabel: "Windows 10/11 Compatible",
      description: "Complete compatibility across all Windows versions",
    },
    {
      icon: Gamepad2,
      label: "ALL GAMES",
      sublabel: "Universal Game Support",
      description: "Works with every game and application",
    },
    {
      icon: Clock,
      label: "24/7 SUPPORT",
      sublabel: "Premium Assistance",
      description: "Round-the-clock expert technical support",
    },
    {
      icon: Star,
      label: "LIFETIME ACCESS",
      sublabel: "One-Time Purchase",
      description: "Permanent access with lifetime updates",
    },
  ]

  return (
    <section className="py-40 px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-orange-500/8 via-red-500/6 to-yellow-500/4 rounded-full blur-3xl animate-liquid-glow" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-l from-orange-500/8 via-red-500/6 to-purple-500/4 rounded-full blur-3xl animate-liquid-glow delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-r from-blue-500/6 to-cyan-500/4 rounded-full blur-2xl animate-liquid-glow delay-2000" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center space-x-4 liquid-badge rounded-full px-10 py-5 mb-12 group hover:scale-105 transition-all duration-300">
            <Star className="h-7 w-7 text-orange-400 group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-orange-300 font-black text-xl tracking-wider">PREMIUM FEATURES</span>
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
          </div>

          <h2 className="text-display text-6xl md:text-7xl lg:text-8xl mb-12">
            <span className="text-white">Why </span>
            <span className="gradient-text-primary">SYNEX</span>
            <span className="text-white"> Dominates</span>
          </h2>

          <p className="text-body-large text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Experience the pinnacle of protection technology with features designed for the most demanding users
          </p>
        </div>

        {/* Enhanced Premium Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-32">
          {premiumFeatures.map((feature, index) => (
            <div
              key={index}
              className="liquid-card rounded-3xl p-10 group"
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              {/* Enhanced hover effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl`}
              />

              {/* Shimmer effect */}
              <div className="absolute inset-0 animate-liquid-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />

              <div className="relative z-10">
                <div className="flex items-start space-x-8">
                  <div
                    className={`flex-shrink-0 w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 liquid-glass`}
                  >
                    <feature.icon className="h-10 w-10 text-white" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-subheading text-3xl text-white mb-6 group-hover:gradient-text-primary transition-all duration-500">
                      {feature.title}
                    </h3>
                    <p className="text-body text-xl text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Enhanced decorative elements */}
                <div className="absolute top-6 right-6 w-24 h-24 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-xl group-hover:from-orange-500/10 transition-colors duration-700" />
                <div className="absolute bottom-6 left-6 w-16 h-16 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-lg group-hover:from-orange-500/10 transition-colors duration-700" />
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced System Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {systemFeatures.map((feature, index) => (
            <div
              key={index}
              className="liquid-glass-orange rounded-3xl p-8 text-center group hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-16 h-16 liquid-button rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>

                <div className="text-orange-300 font-black text-xl mb-2 group-hover:gradient-text-primary transition-all duration-300">
                  {feature.label}
                </div>

                <div className="text-gray-400 text-lg font-bold mb-3 group-hover:text-gray-300 transition-colors duration-300">
                  {feature.sublabel}
                </div>

                <div className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400 transition-colors duration-300">
                  {feature.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
