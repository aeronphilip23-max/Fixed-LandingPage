"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

export function CTASection() {
  const [email, setEmail] = useState("")

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/epic-snowy-norse-mountains-with-ravens-flying-over-BGD1HOsg7nGvwUqSAH65jrpD2RiWqT.jpg" alt="Snowy mountains" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/50" />
      </div>

      {/* Glowing Runes */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-[20rem] text-primary/5 font-bold rune-glow">ᚡ</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <div className="text-primary text-sm tracking-[0.3em] rune-glow">ᛃᛟᚢᚱ · ᛞᛖᛋᛏᛁᚾᛃ · ᚨᚹᚨᛁᛏᛋ</div>

            <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight text-balance">
              ENTER THE
              <span className="block text-primary mt-2">NORSE REALM</span>
            </h2>

            <p className="text-3xl md:text-4xl font-bold text-accent">Live the Legend.</p>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
              Join millions of warriors who have answered the call. Your saga begins now.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-xl px-12 py-8 font-bold tracking-wider"
            >
              PLAY NOW
            </Button>
        <a href="https://www.tiktok.com/@pangs.xx/video/7558417576460651777" target="_blank" rel="noopener noreferrer">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground text-xl px-12 py-8 font-bold tracking-wider bg-transparent"
          >
            WATCH TRAILER
          </Button>
        </a>
          </div>

          {/* Newsletter */}
          <div className="pt-12 border-t border-border/50">
            <div className="max-w-md mx-auto space-y-4">
              <h3 className="text-lg font-semibold">Join the Warrior's Guild</h3>
              <p className="text-sm text-muted-foreground">
                Get exclusive updates, behind-the-scenes content, and legendary rewards
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 bg-muted/50 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                />
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">JOIN</Button>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 pt-8">
            {["Twitter", "Discord", "YouTube", "Twitch"].map((platform) => (
              <button
                key={platform}
                className="text-muted-foreground hover:text-primary transition-colors text-sm tracking-wider"
              >
                {platform.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
