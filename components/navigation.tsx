"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold tracking-wider text-primary rune-glow">ᚾᛟᚱᛋᛖ</div>
          <span className="text-xl font-bold tracking-widest">LEGENDS</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#skaadi-frost" className="text-sm tracking-wider hover:text-primary transition-colors">
            SKAADI
          </a>
          <a href="#astrid-shield" className="text-sm tracking-wider hover:text-primary transition-colors">
            ASTRID
          </a>
          <a href="#game-mechanics" className="text-sm tracking-wider hover:text-primary transition-colors">
            GAME MECHANICS
          </a>
          <a href="#compare" className="text-sm tracking-wider hover:text-primary transition-colors">
            COMPARE
          </a>
        </div>

        <Button
          variant="outline"
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
        >
          EXPLORE
        </Button>
      </div>
    </nav>
  )
}
