import { Card } from "@/components/ui/card"

export function ComparisonSection() {
  const comparisons = [
    {
      category: "The Warriors",
      skaadi: "Divine warrior chosen by fate and the gods",
      astrid: "Legendary shieldmaiden uniting the Viking clans",
      similarity: "Both are legendary Norse warriors seeking glory and destiny",
    },
    {
      category: "Combat Style",
      skaadi: "Divine warrior with legendary combat prowess",
      astrid: "Master of multiple weapons and tactical warfare",
      similarity: "Powerful warriors combining strength with skill and strategy",
    },
    {
      category: "Journey",
      skaadi: "Seeking divine purpose through epic trials",
      astrid: "Building Viking legacy and uniting clans",
      similarity: "Personal growth through adversity, combat, and meaningful choices",
    },
    {
      category: "Norse Connection",
      skaadi: "Champion of the Norse pantheon",
      astrid: "Builder of Viking civilization and settlements",
      similarity: "Deep immersion in Norse culture, mythology, and warrior traditions",
    },
  ]

  return (
    <section id="compare" className="relative py-32 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-primary text-sm tracking-[0.3em] mb-4 rune-glow">ᚲᛟᛗᛈᚨᚱᛖ</div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            COMPARE THE <span className="text-primary">LEGENDS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Skaadi and Astrid: Two warriors, one mythology, infinite glory
          </p>
        </div>

        <div className="grid gap-6 max-w-6xl mx-auto">
          {/* Header */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <div className="hidden md:block" />
            <div className="text-center">
              <div className="mb-4 mx-auto">
                
              </div>
              <div className="text-2xl font-bold text-primary">SKAADI</div>
              <div className="text-sm text-muted-foreground">The Divine Warrior</div>
            </div>
            <div className="text-center">
              <div className="mb-4 mx-auto">

              </div>
              <div className="text-2xl font-bold text-primary">ASTRID</div>
              <div className="text-sm text-muted-foreground">The Shieldmaiden</div>
            </div>
            <div className="hidden md:block text-center">
              <div className="text-sm text-muted-foreground">Common Ground</div>
            </div>
          </div>

          {/* Comparison Rows */}
          {comparisons.map((item, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
                <div className="font-bold text-lg text-foreground">{item.category}</div>
                <div className="text-muted-foreground border-l-2 border-primary/50 pl-4">{item.skaadi}</div>
                <div className="text-muted-foreground border-l-2 border-secondary/50 pl-4">{item.astrid}</div>
                <div className="text-sm text-primary/80 italic border-l-2 border-accent/50 pl-4">{item.similarity}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
