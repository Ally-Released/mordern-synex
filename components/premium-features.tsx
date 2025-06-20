"use client"
import { ArrowRight, MessageCircle, Clock, Settings, Users, Headphones } from "lucide-react"

export function PremiumFeatures() {
  return (
    <section className="py-40 px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-orange-500/4 via-red-500/3 to-purple-500/2 rounded-full blur-3xl animate-liquid-glow" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-gradient-to-l from-blue-500/6 to-cyan-500/4 rounded-full blur-2xl animate-liquid-glow delay-1000" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Enhanced Permanent vs Temporary Section */}
        <div className="text-center mb-40">
          <div className="inline-flex items-center space-x-4 liquid-badge rounded-full px-10 py-5 mb-12 group hover:scale-105 transition-all duration-300 animate-liquid-morph">
            <Settings className="h-7 w-7 text-orange-400 group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-orange-300 font-black text-xl tracking-wider">DEPLOYMENT OPTIONS</span>
          </div>

          <h2 className="text-display text-6xl md:text-7xl font-black mb-16">
            <span className="text-white">Permanent </span>
            <span className="gradient-text-primary">or</span>
            <span className="text-white"> Temporary?</span>
          </h2>

          <div className="max-w-5xl mx-auto space-y-8">
            <p className="text-body-large text-2xl text-gray-300 leading-relaxed">
              SYNEX offers <span className="gradient-text-primary font-bold">unparalleled flexibility</span> to match
              your exact requirements. Whether you need temporary protection for a specific project or permanent
              integration into your system architecture, our advanced virtualization technology adapts seamlessly to
              your workflow.
            </p>

            <p className="text-body text-xl text-gray-400 leading-relaxed">
              Complete control over deployment duration, with enterprise-grade support and hassle-free configuration
              ensuring your system remains protected exactly as you specify. Switch between modes instantly without
              system restarts or configuration changes.
            </p>
          </div>

          {/* Liquid Glass feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            {[
              { icon: Clock, title: "Instant Switching", desc: "Toggle between modes in real-time" },
              { icon: Settings, title: "Zero Configuration", desc: "Automatic setup and optimization" },
              { icon: Users, title: "Multi-User Support", desc: "Perfect for teams and organizations" },
            ].map((item, index) => (
              <div
                key={index}
                className="liquid-glass-orange rounded-2xl p-6 group hover:scale-105 transition-all duration-300 animate-liquid-morph"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <item.icon className="h-12 w-12 text-orange-400 mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                <h3 className="text-subheading text-xl text-white mb-2 group-hover:gradient-text-primary transition-all duration-300">
                  {item.title}
                </h3>
                <p className="text-body text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Discord Community Section - Removed Active Members */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-4 liquid-badge rounded-full px-10 py-5 mb-12 group hover:scale-105 transition-all duration-300 animate-liquid-morph">
            <MessageCircle className="h-7 w-7 text-[#5865f2] group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-[#5865f2] font-black text-xl tracking-wider">PREMIUM COMMUNITY</span>
          </div>

          <h2 className="text-display text-6xl md:text-7xl font-black mb-16">
            <span className="text-white">Join Our </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5865f2] via-[#7289da] to-[#99aab5]">
              Elite
            </span>
            <span className="text-white"> Community</span>
          </h2>

          <div className="max-w-5xl mx-auto mb-16">
            <p className="text-body-large text-2xl text-gray-300 leading-relaxed mb-8">
              Connect with our <span className="text-[#5865f2] font-bold">exclusive Discord community</span> for premium
              support, advanced tutorials, and direct access to our development team. Get real-time assistance and stay
              updated with the latest features and insider tips.
            </p>

            <p className="text-body text-xl text-gray-400 leading-relaxed">
              Share experiences and get help from both our expert team and the community. Priority support channels
              available for premium users.
            </p>
          </div>

          {/* Liquid Glass Discord CTA */}
          <div className="inline-flex items-center space-x-8 liquid-glass rounded-3xl p-10 group hover:scale-105 transition-all duration-500 border-2 border-[#5865f2]/30 hover:border-[#5865f2]/50 shadow-2xl hover:shadow-[#5865f2]/20 animate-liquid-morph">
            <div className="w-20 h-20 bg-gradient-to-br from-[#5865f2] to-[#7289da] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 liquid-glass">
              <MessageCircle className="h-10 w-10 text-white" />
            </div>

            <div className="text-left">
              <div className="text-3xl font-black text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#5865f2] group-hover:to-[#7289da] transition-all duration-300">
                discord.gg/synex
              </div>
              <div className="text-gray-400 text-lg font-semibold group-hover:text-gray-300 transition-colors duration-300">
                Premium Support & Elite Community
              </div>
            </div>

            <button className="liquid-button px-10 py-6 text-xl font-bold text-white rounded-2xl group relative overflow-hidden">
              <span className="relative z-10 flex items-center">
                Join Elite Community
                <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-2" />
              </span>
            </button>
          </div>

          {/* Simplified community stats - Removed Active Members */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-2xl mx-auto">
            {[
              { value: "<5min", label: "Response Time", icon: Clock },
              { value: "24/7", label: "Expert Support", icon: Headphones },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center group liquid-glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 animate-liquid-morph"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <stat.icon className="h-8 w-8 text-[#5865f2] mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#5865f2] to-[#7289da] mb-2 group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-400 font-semibold text-lg group-hover:text-gray-300 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
