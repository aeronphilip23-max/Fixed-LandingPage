import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function GameMechanicsSection() {
  const explorationMechanics = [
    {
      title: "Dynamic Open World",
      description:
        "Explore vast Nordic landscapes including snow-covered mountains, dense forests, and coastal settlements. Each location holds secrets, hidden treasures, and challenging encounters.",
    },
    {
      title: "Environmental Interaction",
      description:
        "Use the environment to your advantage - climb cliff faces, traverse frozen rivers, and navigate treacherous weather. Weather systems affect exploration and combat difficulty.",
    },
    {
      title: "Settlement Building",
      description:
        "Discover and develop your base camp. Recruit followers, build structures, and unlock new abilities as your settlement grows more powerful.",
    },
    {
      title: "Fast Travel & Navigation",
      description:
        "Unlock waypoints and fast travel points across the realm. Use your Viking longship to explore coastal areas and reach new territories.",
    },
    {
      title: "NPC Interactions",
      description:
        "Meet unique NPCs who offer side quests, trading opportunities, and crucial information about the main storyline.",
    },
    {
      title: "Loot & Crafting",
      description:
        "Gather resources from the environment and defeated enemies. Craft powerful weapons, armor, and consumable items to enhance your abilities.",
    },
  ]

  const combatMechanics = [
    {
      title: "Strategic Combat",
      description:
        "Engage in brutal melee combat requiring timing, positioning, and tactical awareness. Dodge enemy attacks and exploit openings for powerful counterattacks.",
    },
    {
      title: "Enemy Variety",
      description:
        "Face diverse enemy types - from common soldiers and beasts to powerful bosses and supernatural creatures. Each enemy type requires unique strategies.",
    },
    {
      title: "Weapon Mastery",
      description:
        "Unlock and master multiple weapon types including axes, swords, spears, and magical items. Each weapon has unique movesets and abilities.",
    },
    {
      title: "Special Abilities",
      description:
        "Chain powerful special moves and magic abilities to devastate enemies. Build momentum with consecutive hits to unlock ultimate abilities.",
    },
    {
      title: "Parry & Block System",
      description:
        "Master defensive techniques including blocking, parrying, and dodging. Perfect timing blocks can stun enemies and create critical opportunities.",
    },
    {
      title: "Boss Encounters",
      description:
        "Confront legendary warriors and mythological creatures in intense boss battles. Learn attack patterns and adapt your strategy to emerge victorious.",
    },
  ]

  const progressionMechanics = [
    {
      title: "Enemy Elimination",
      description:
        "Defeat enemies to gain experience points, level up your character, and unlock new abilities. Slaying tougher foes grants greater rewards.",
    },
    {
      title: "Quest Completion",
      description:
        "Complete main quests, side quests, and raids to advance the story. Each quest victory brings you closer to uncovering the prophecy.",
    },
    {
      title: "Skill Trees",
      description:
        "Invest skill points in diverse ability trees focusing on combat, exploration, magic, and survival. Customize your playstyle to your preferences.",
    },
    {
      title: "Stat Growth",
      description:
        "Increase your health, damage, defense, and magical power through leveling and equipment upgrades. Balance your character for your preferred playstyle.",
    },
    {
      title: "Legendary Gear",
      description:
        "Hunt for legendary weapons and armor pieces that grant unique bonuses and powerful abilities. Equip the best gear to maximize your combat potential.",
    },
    {
      title: "Story Progression",
      description:
        "Each defeated enemy, completed raid, and discovered secret brings you closer to the truth. Your choices and victories shape the outcome of your journey.",
    },
  ]

  return (
    <section id="game-mechanics" className="relative py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/10 to-background" />
      
      <div className="absolute bottom-0 left-0 right-0 h-1/3 opacity-20 pointer-events-none">
        <img 
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/epic-norse-battlefield-with-valhalla-gates-glowing-hI4JjD5be6XlTmrbzc4ILIQUJT12mb.jpg" 
          alt="Norse battlefield" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="text-accent text-sm tracking-[0.3em] mb-4">GAMEPLAY SYSTEMS</div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            MASTER THE <span className="text-accent">GAME MECHANICS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Explore vast realms, master brutal combat, and slay enemies to progress through an epic Norse saga
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="exploration" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 gap-2 bg-muted/50 p-2 rounded-lg">
              <TabsTrigger 
                value="exploration"
                className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary hover:bg-primary/10 transition-all duration-200"
              >
                Exploration
              </TabsTrigger>
              <TabsTrigger 
                value="combat"
                className="data-[state=active]:bg-secondary/20 data-[state=active]:text-secondary data-[state=active]:border-b-2 data-[state=active]:border-secondary hover:bg-secondary/10 transition-all duration-200"
              >
                Combat
              </TabsTrigger>
              <TabsTrigger 
                value="progression"
                className="data-[state=active]:bg-accent/20 data-[state=active]:text-accent data-[state=active]:border-b-2 data-[state=active]:border-accent hover:bg-accent/10 transition-all duration-200"
              >
                Progression
              </TabsTrigger>
            </TabsList>

            {/* Exploration Tab */}
            <TabsContent value="exploration" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {explorationMechanics.map((mechanic, index) => (
                  <Card
                    key={index}
                    className="bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary/60 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                  >
                    <div className="p-6 space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <h3 className="text-lg font-bold text-foreground">{mechanic.title}</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{mechanic.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
              <div className="mt-8 p-6 bg-primary/5 border-l-4 border-primary rounded">
                <p className="text-foreground font-semibold mb-2">Open World Exploration</p>
                <p className="text-muted-foreground">
                  Inspired by Assassin's Creed Valhalla, traverse expansive Nordic landscapes with dynamic weather,
                  hidden locations, and dangerous territories. Discover settlements to build, resources to gather, and
                  enemies to overcome on your journey.
                </p>
              </div>
            </TabsContent>

            {/* Combat Tab */}
            <TabsContent value="combat" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {combatMechanics.map((mechanic, index) => (
                  <Card
                    key={index}
                    className="bg-card/50 backdrop-blur-sm border-secondary/30 hover:border-secondary/60 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20"
                  >
                    <div className="p-6 space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                        <h3 className="text-lg font-bold text-foreground">{mechanic.title}</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{mechanic.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
              <div className="mt-8 p-6 bg-secondary/5 border-l-4 border-secondary rounded">
                <p className="text-foreground font-semibold mb-2">God of War-Inspired Combat</p>
                <p className="text-muted-foreground">
                  Experience intense, skill-based combat with deep mechanics inspired by God of War. Master weapon
                  combos, execute perfectly-timed defensive maneuvers, and unleash devastating special abilities to
                  overwhelm your enemies.
                </p>
              </div>
            </TabsContent>

            {/* Progression Tab */}
            <TabsContent value="progression" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {progressionMechanics.map((mechanic, index) => (
                  <Card
                    key={index}
                    className="bg-card/50 backdrop-blur-sm border-accent/30 hover:border-accent/60 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
                  >
                    <div className="p-6 space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <h3 className="text-lg font-bold text-foreground">{mechanic.title}</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{mechanic.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
              <div className="mt-8 p-6 bg-accent/5 border-l-4 border-accent rounded">
                <p className="text-foreground font-semibold mb-2">Slay to Progress</p>
                <p className="text-muted-foreground">
                  The path to glory is paved with fallen enemies. Eliminate foes to gain experience, unlock new abilities,
                  and gather powerful equipment. Complete raids, defeat legendary bosses, and overcome trials to uncover the
                  truth behind the prophecy and advance through an epic Norse narrative.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
