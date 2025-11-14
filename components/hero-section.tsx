"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/epic-snowy-norse-mountains-with-ravens-flying-over-BGD1HOsg7nGvwUqSAH65jrpD2RiWqT.jpg" alt="Norse landscape" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background" />
      </div>

      {/* Floating Runes */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 text-6xl text-primary/20 rune-glow float-animation">ᚠ</div>
        <div
          className="absolute top-1/3 right-1/4 text-5xl text-secondary/20 rune-glow float-animation"
          style={{ animationDelay: "1s" }}
        >
          ᚦ
        </div>
        <div
          className="absolute bottom-1/3 left-1/3 text-7xl text-primary/15 rune-glow float-animation"
          style={{ animationDelay: "2s" }}
        >
          ᚱ
        </div>
      </div>

      {/* Content */}
      <div
        className={`relative z-20 text-center px-4 transition-all duration-1000 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="mb-6 text-primary text-sm tracking-[0.3em] font-mono rune-glow">
          ᚹᚨᛚᚺᚨᛚᛚᚨ · ᚱᚨᚷᚾᚨᚱᛟᚲ · ᚡᛁᚲᛁᚾᚷ
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight text-balance">
          LEGENDS OF THE
          <span className="block text-primary mt-2">NORSE REALM</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto text-balance leading-relaxed">
          Three epic sagas. One legendary mythology. Experience the raw power, emotion, and glory of the Norse gods.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
            BEGIN YOUR JOURNEY
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
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
