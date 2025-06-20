import { HeroHeader } from "@/components/hero-header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { TechnicalSpecs } from "@/components/technical-specs"
import { PremiumFeatures } from "@/components/premium-features"
import { PricingSection } from "@/components/pricing-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-gray-950 to-black">
      <HeroHeader />
      <main>
        <HeroSection />
        <div id="features" className="scroll-offset">
          <FeaturesSection />
        </div>
        <TechnicalSpecs />
        <PremiumFeatures />
        <div id="pricing" className="scroll-offset">
          <PricingSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}
