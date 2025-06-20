"use client"

import { Check, Crown, ArrowRight, Star, Shield, Zap, Clock, Sparkles } from "lucide-react"

export function PricingSection() {
  // Condensed to 6 most crucial features
  const keyFeatures = [
    "Military-Grade Hardware Protection",
    "Zero Performance Impact Technology",
    "Universal Game & Application Support",
    "24/7 Premium Support Access",
    "Lifetime Updates & Improvements",
    "Complete Hardware Signature Masking",
  ]

  const guarantees = [
    { icon: Shield, title: "99.9% Undetected", desc: "Proven track record" },
    { icon: Zap, title: "Zero Performance Loss", desc: "Optimized algorithms" },
    { icon: Clock, title: "Instant Activation", desc: "Ready in seconds" },
    { icon: Star, title: "Lifetime Support", desc: "Never pay again" },
  ]

  return (
    <section className="py-40 px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-gray-950 to-black relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-orange-500/6 via-red-500/4 to-yellow-500/3 rounded-full blur-3xl animate-liquid-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-l from-purple-500/4 via-orange-500/6 to-red-500/4 rounded-full blur-3xl animate-liquid-glow delay-1000" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Simplified section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 liquid-badge rounded-full px-8 py-4 mb-8 group hover:scale-105 transition-all duration-300">
            <Crown className="h-6 w-6 text-orange-400 group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-orange-300 font-bold text-lg tracking-wider">GET SYNEX</span>
          </div>

          <h2 className="text-display text-5xl md:text-6xl font-black mb-8">
            <span className="text-white">Choose Your </span>
            <span className="gradient-text-primary">Protection</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="liquid-card rounded-3xl overflow-hidden">
            {/* Premium badge */}
            <div className="absolute top-0 right-0 liquid-button px-6 py-3 rounded-bl-2xl rounded-tr-3xl font-bold text-sm shadow-lg z-10">
              <div className="flex items-center space-x-2">
                <Crown className="h-4 w-4" />
                <span>PREMIUM</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Side - Simplified CTA */}
              <div className="p-12 lg:p-16 space-y-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-3xl md:text-4xl font-black text-white">SYNEX Premium</h3>
                    <p className="text-lg text-gray-400">Complete protection suite with lifetime access</p>
                  </div>

                  {/* Simplified pricing display */}
                  <div className="space-y-4">
                    <div className="flex items-baseline space-x-4">
                      <div className="text-3xl font-bold text-gray-500 relative">
                        €59.99
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-full h-1 bg-red-500 transform rotate-12 rounded-full"></div>
                        </div>
                      </div>
                      <div className="text-5xl md:text-6xl font-black gradient-text-primary">€39.99</div>
                    </div>

                    <div className="inline-flex items-center space-x-2 liquid-badge rounded-full px-4 py-2">
                      <Sparkles className="h-4 w-4 text-green-400" />
                      <span className="text-green-300 font-semibold text-sm">Save €20 - Limited Time</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="text-xl font-bold text-white">Lifetime Access</div>
                    <p className="text-gray-400 leading-relaxed">
                      One-time payment. No subscriptions. Includes all future updates and premium support.
                    </p>
                  </div>
                </div>

                {/* Simplified CTA button */}
                <button className="liquid-button w-full px-8 py-6 text-xl font-bold text-white rounded-2xl group relative overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center">
                    Get SYNEX Now
                    <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-2" />
                  </span>
                </button>

                {/* Simplified guarantees */}
                <div className="grid grid-cols-2 gap-3 pt-6 border-t border-orange-500/20">
                  {guarantees.map((guarantee, index) => (
                    <div key={index} className="text-center group">
                      <guarantee.icon className="h-5 w-5 text-orange-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                      <div className="text-sm font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
                        {guarantee.title}
                      </div>
                      <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                        {guarantee.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - Condensed Feature Bars with Pricing Below */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/70 p-12 lg:p-16 space-y-8">
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold text-white mb-6">Key Features Included:</h4>

                  {/* Condensed to 6 key features */}
                  <div className="space-y-4">
                    {keyFeatures.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 group hover:scale-[1.02] transition-all duration-300 liquid-glass rounded-xl p-4"
                      >
                        <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-all duration-300">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Reference to additional details */}
                  <div className="liquid-glass rounded-xl p-4 border border-orange-500/20">
                    <p className="text-gray-400 text-sm text-center">
                      <span className="text-orange-400 font-semibold">+6 additional features</span> detailed in the
                      specifications section above
                    </p>
                  </div>
                </div>

                {/* Pricing positioned beneath feature bars */}
                <div className="pt-8 border-t border-gray-700/50 space-y-6">
                  <div className="text-center space-y-4">
                    <div className="text-gray-400 text-sm font-medium">Total Value</div>

                    {/* Large pricing display */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-center space-x-4">
                        <div className="text-2xl font-bold text-gray-500 relative">
                          €59.99
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-full h-1 bg-red-500 transform rotate-12 rounded-full"></div>
                          </div>
                        </div>
                        <div className="text-4xl font-black gradient-text-primary">€39.99</div>
                      </div>

                      <div className="text-lg font-bold text-white">Lifetime License</div>

                      <div className="inline-flex items-center space-x-2 liquid-badge rounded-full px-3 py-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-green-300 font-semibold text-xs">33% OFF Today</span>
                      </div>
                    </div>
                  </div>

                  {/* Money back guarantee */}
                  <div className="liquid-glass-orange rounded-xl p-4 text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <Shield className="h-5 w-5 text-green-400" />
                      <span className="text-green-300 font-bold text-sm">30-Day Guarantee</span>
                    </div>
                    <p className="text-gray-400 text-xs leading-relaxed">Full refund if not completely satisfied</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional trust indicators */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-8 liquid-glass rounded-2xl px-8 py-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-green-400" />
              <span className="text-green-300 font-semibold text-sm">Secure Payment</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-blue-400" />
              <span className="text-blue-300 font-semibold text-sm">Instant Access</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-orange-400" />
              <span className="text-orange-300 font-semibold text-sm">5-Star Rated</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
