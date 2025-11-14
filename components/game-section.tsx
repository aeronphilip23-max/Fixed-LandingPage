import { Card } from "@/components/ui/card"

interface GameSectionProps {
  id: string
  title: string
  subtitle: string
  description: string
  features: string[]
  imageQuery: string
  imageUrl?: string
  theme: "valhalla" | "ragnarok" | "viking"
  reverse?: boolean
}

export function GameSection({
  id,
  title,
  subtitle,
  description,
  features,
  imageQuery,
  imageUrl,
  theme,
  reverse = false,
}: GameSectionProps) {
  const themeColors = {
    valhalla: "from-primary/20 to-background",
    ragnarok: "from-accent/20 to-background",
    viking: "from-secondary/20 to-background",
  }

  const themeAccents = {
    valhalla: "text-primary border-primary",
    ragnarok: "text-accent border-accent",
    viking: "text-secondary border-secondary",
  }

  return (
    <section id={id} className="relative py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-b ${themeColors[theme]}`} />

      <div className="container mx-auto px-4 relative z-10">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? "lg:flex-row-reverse" : ""}`}>
          {/* Content */}
          <div className={`space-y-8 ${reverse ? "lg:order-2" : ""}`}>
            <div>
              <div className={`text-sm tracking-[0.3em] mb-4 ${themeAccents[theme]}`}>{subtitle.toUpperCase()}</div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight">{title}</h2>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">{description}</p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div
                    className={`mt-1 w-2 h-2 rounded-full ${themeAccents[theme]} flex-shrink-0 group-hover:scale-150 transition-transform`}
                  />
                  <p className="text-lg text-foreground/90">{feature}</p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                className={`px-8 py-4 border-2 ${themeAccents[theme]} hover:bg-current hover:text-background transition-all duration-300 text-lg tracking-wider font-semibold`}
              >
                LEARN MORE
              </button>
            </div>
          </div>

          {/* Image */}
          <div className={reverse ? "lg:order-1" : ""}>
            <Card className="overflow-hidden border-2 border-border/50 bg-card/50 backdrop-blur-sm">
              <div className="relative aspect-[4/3] overflow-hidden group">
                <img
                  src={imageUrl || `/placeholder.svg?height=800&width=1000&query=${encodeURIComponent(imageQuery)}`}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
