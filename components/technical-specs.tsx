"use client"

import { Cpu, HardDrive, Monitor, Wifi, Server, Database, Shield, Zap } from "lucide-react"

export function TechnicalSpecs() {
  const specs = [
    {
      icon: Monitor,
      title: "System Compatibility",
      details: [
        "Windows 11 (All Versions & Builds)",
        "Windows 10 (22H2, 21H2, 21H1, 20H2)",
        "Both x64 and ARM64 Architecture",
        "UEFI and Legacy BIOS Support",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Cpu,
      title: "Processor Support",
      details: [
        "Intel Core Series (6th Gen and newer)",
        "AMD Ryzen Series (All Generations)",
        "Intel Xeon Workstation Processors",
        "AMD Threadripper Pro Series",
      ],
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: HardDrive,
      title: "Storage & Performance",
      details: [
        "Minimum 2GB Available Space",
        "SSD Recommended for Optimal Performance",
        "NVMe Support for Maximum Speed",
        "Network Storage Compatible",
      ],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Wifi,
      title: "Network & Security",
      details: [
        "VPN Integration Support",
        "Proxy Chain Compatibility",
        "Encrypted Communication Protocols",
        "Zero-Log Network Architecture",
      ],
      gradient: "from-purple-500 to-pink-500",
    },
  ]

  const additionalFeatures = [
    {
      icon: Server,
      title: "Enterprise Features",
      description: "Advanced virtualization with enterprise-grade security protocols",
    },
    {
      icon: Database,
      title: "Data Protection",
      description: "Complete hardware fingerprint masking and data encryption",
    },
    {
      icon: Shield,
      title: "Real-time Protection",
      description: "Continuous monitoring and adaptive protection algorithms",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Zero-latency protection with intelligent resource management",
    },
  ]

  return (
    <section className="py-40 px-6 lg:px-8 bg-gradient-to-b from-black via-slate-950 to-gray-950 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-gradient-to-r from-blue-500/6 to-cyan-500/4 rounded-full blur-3xl animate-liquid-glow" />
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-gradient-to-l from-orange-500/6 to-red-500/4 rounded-full blur-3xl animate-liquid-glow delay-1000" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Liquid Glass section header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center space-x-4 liquid-badge rounded-full px-10 py-5 mb-12 group hover:scale-105 transition-all duration-300 animate-liquid-morph">
            <Cpu className="h-7 w-7 text-orange-400 group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-orange-300 font-black text-xl tracking-wider">TECHNICAL EXCELLENCE</span>
          </div>

          <h2 className="text-display text-6xl md:text-7xl font-black mb-12">
            <span className="text-white">Enterprise-Grade </span>
            <span className="gradient-text-primary">Specifications</span>
          </h2>

          <p className="text-body-large text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Built on cutting-edge technology with enterprise-grade specifications for uncompromising performance,
            reliability, and security in the most demanding environments.
          </p>
        </div>

        {/* Liquid Glass specs grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-24">
          {specs.map((spec, index) => (
            <div
              key={index}
              className="liquid-card rounded-3xl p-10 group animate-liquid-morph"
              style={{ animationDelay: `${index * 0.4}s` }}
            >
              {/* Enhanced hover effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />
              <div className="absolute inset-0 animate-liquid-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />

              <div className="relative z-10">
                <div className="flex items-center space-x-6 mb-8">
                  <div
                    className={`w-18 h-18 bg-gradient-to-br ${spec.gradient} rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 liquid-glass`}
                  >
                    <spec.icon className="h-9 w-9 text-white" />
                  </div>
                  <h3 className="text-subheading text-3xl text-white group-hover:gradient-text-primary transition-all duration-500">
                    {spec.title}
                  </h3>
                </div>

                <ul className="space-y-4">
                  {spec.details.map((detail, detailIndex) => (
                    <li
                      key={detailIndex}
                      className="flex items-start space-x-4 text-gray-300 group-hover:text-gray-200 transition-colors duration-500"
                    >
                      <div className="w-2.5 h-2.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex-shrink-0 mt-2" />
                      <span className="text-body text-lg leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Liquid Glass additional features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {additionalFeatures.map((feature, index) => (
            <div
              key={index}
              className="liquid-glass-orange rounded-3xl p-8 text-center group hover:scale-105 transition-all duration-500 animate-liquid-morph"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-16 h-16 liquid-button rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-subheading text-xl text-white mb-4 group-hover:gradient-text-primary transition-all duration-300">
                  {feature.title}
                </h3>

                <p className="text-body text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
