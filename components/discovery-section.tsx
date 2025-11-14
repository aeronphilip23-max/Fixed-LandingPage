import { Card } from "@/components/ui/card"

export function DiscoverySection() {
  const discoveries = [
    {
      title: "The Nine Realms",
      description:
        "Explore Midgard, Asgard, Jotunheim, and beyond. Each realm holds secrets, dangers, and legendary treasures.",
      icon: "🌍",
      games: ["Norse Mythology", "Legendary Adventures"],
    },
    {
      title: "Norse Gods & Mythology",
      description:
        "Encounter Odin, Thor, Freya, and other deities. Witness their power, politics, and prophecies unfold.",
      icon: "⚡",
      games: ["Divine Encounters", "Mythic Trials"],
    },
    {
      title: "Viking Culture",
      description:
        "Experience authentic Norse traditions, raids, settlements, and the warrior code that defined an era.",
      icon: "⚔️",
      games: ["Settlement Building", "Epic Raids"],
    },
    {
      title: "Legendary Weapons",
      description: "Wield powerful weapons forged by gods and legends. Master weapons to dominate your enemies.",
      icon: "🔨",
      games: ["Weapon Mastery", "Divine Artifacts"],
    },
  ]

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="text-secondary text-sm tracking-[0.3em] mb-4 rune-glow">ᛞᛁᛋᚲᛟᚡᛖᚱ</div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            HOW THEY DISCOVER THE <span className="text-primary">NORSE WORLD</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Explore legendary realms through two epic Norse warriors
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {discoveries.map((item, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-secondary/50 transition-all duration-300 hover:scale-105 group"
            >
              <div className="p-6 space-y-4">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                <div className="pt-4 border-t border-border/50">
                  <div className="text-xs text-secondary font-mono">{item.games.join(" • ")}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">The Legend Timeline</h3>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/30" />

            <div className="space-y-12">
              {[
                { year: "Age of Skaadi", event: "The divine warrior emerges from the frost", game: "Skaadi's Journey", side: "left" },
                { year: "Clan Rising", event: "Astrid unites the scattered Viking clans", game: "Astrid's Saga", side: "right" },
                { year: "Prophecy Unfolds", event: "Ancient mysteries and divine trials await", game: "All Realms", side: "left" },
                {
                  year: "Ragnarök Destiny",
                  event: "The final battle for the fate of the Nine Realms",
                  game: "The Final War",
                  side: "right",
                },
              ].map((item, index) => (
                <div key={index} className={`flex items-center ${item.side === "right" ? "flex-row-reverse" : ""}`}>
                  <div className={`w-1/2 ${item.side === "right" ? "text-left pl-8" : "text-right pr-8"}`}>
                    <div className="text-primary font-bold text-lg">{item.year}</div>
                    <div className="text-foreground font-semibold">{item.event}</div>
                    <div className="text-sm text-muted-foreground">{item.game}</div>
                  </div>
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-background relative z-10" />
                  <div className="w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
