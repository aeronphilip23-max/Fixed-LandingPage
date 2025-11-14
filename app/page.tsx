import { HeroSection } from "@/components/hero-section"
import { GameSection } from "@/components/game-section"
import { ComparisonSection } from "@/components/comparison-section"
import { GameMechanicsSection } from "@/components/game-mechanics-section"
import { DiscoverySection } from "@/components/discovery-section"
import { CTASection } from "@/components/cta-section"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <HeroSection />

      {/* Skaadi: The Frost Warrior */}
      <GameSection
        id="skaadi-frost"
        title="Skaadi: The Frost Warrior"
        subtitle="The Chosen of Skaadi"
        description="A legendary warrior chosen by the goddess Skadi to traverse the frozen realms and uncover the truth behind Ragnarök. Wield the power of winter itself as you battle through divine trials and uncover the secrets of the Norse gods."
        features={[
          "Master the Frostbite Blade and ice magic abilities",
          "Unravel the prophecy of Ragnarök through ancient trials",
          "Face both mortal and divine enemies in brutal combat",
          "Discover your true destiny in the Nine Realms",
        ]}
        imageQuery="Skaadi frost warrior with ice and snow abilities in Norse setting"
        imageUrl="/images/norseman.jpg"
        theme="valhalla"
      />

      {/* Astrid: The Shieldmaiden */}
      <GameSection
        id="astrid-shield"
        title="Astrid: The Shieldmaiden"
        subtitle="Protector of the Northern Kingdoms"
        description="A legendary shieldmaiden of the North tasked with uniting scattered Viking clans and establishing a thriving settlement. Lead expeditions across dangerous territories, engage in tactical raids, and forge alliances that will determine the fate of kingdoms."
        features={[
          "Lead your clan through perilous open-world exploration",
          "Master diverse Viking weapons and combat tactics",
          "Build and manage a thriving Nordic settlement",
          "Engage in strategic raids to progress your story",
        ]}
        imageQuery="Astrid shieldmaiden Viking warrior with settlement and clan"
        imageUrl="/images/norse woman.jpg"
        theme="viking"
        reverse
      />

      {/* Game Mechanics Section */}
      <GameMechanicsSection />

      <ComparisonSection />
      <DiscoverySection />
      <CTASection />
    </main>
  )
}
