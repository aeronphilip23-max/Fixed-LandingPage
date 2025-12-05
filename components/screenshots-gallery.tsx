"use client"

import { useState } from "react"
import Image from "next/image"

export function ScreenshotsGallery() {
  const [activeIndex, setActiveIndex] = useState(0)

  const screenshots = [
    {
      title: "Frozen Prophecy",
      description: "Discover the frozen wastelands and divine prophecies",
      image: "/images/scenery-204.jpg",
      game: "Skaadi's Journey",
    },
    {
      title: "Verdant Kingdoms",
      description: "Traverse lush valleys and rolling green landscapes",
      image: "/images/scenery-202.jpg",
      game: "Astrid's Saga",
    },
    {
      title: "Horseman's Path",
      description: "Journey across vast wilderness on epic quests",
      image: "/images/scenery-201.jpg",
      game: "The Legend Journey",
    },
    {
      title: "Island Legends",
      description: "Command ancient vessels toward mystical shores",
      image: "/images/scenery-205.jpg",
      game: "Viking Conquest",
    },
    {
      title: "Snowy Haven",
      description: "Establish mighty settlements in harsh Arctic realms",
      image: "/images/scenery-203.jpg",
      game: "Northern Settlement",
    },
  ]

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-primary text-sm tracking-[0.3em] mb-4 rune-glow">ᚾᚢᚱᛏᚢᚱ</div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            WITNESS THE <span className="text-primary">EPIC VISTAS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Breathtaking landscapes await the brave. Experience cinematic environments that bring Norse legends to life.
          </p>
        </div>

        {/* Main gallery display */}
        <div className="max-w-5xl mx-auto mb-8">
          <div className="relative rounded-xl overflow-hidden border border-primary/20 shadow-2xl">
            {/* Active image with animation */}
            <div className="relative aspect-video bg-black/50 flex items-center justify-center">
              <Image
                src={screenshots[activeIndex].image || "/placeholder.svg"}
                alt={screenshots[activeIndex].title}
                fill
                className="object-cover transition-opacity duration-500"
                priority
              />
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Text overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="text-sm text-primary font-mono mb-2">{screenshots[activeIndex].game}</div>
                <h3 className="text-3xl font-bold mb-2">{screenshots[activeIndex].title}</h3>
                <p className="text-lg text-gray-200">{screenshots[activeIndex].description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail grid */}
        <div className="flex gap-4 overflow-x-auto pb-4 max-w-5xl mx-auto">
          {screenshots.map((screenshot, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`relative flex-shrink-0 w-24 h-24 rounded-lg border-2 transition-all duration-300 overflow-hidden hover:scale-110 ${
                activeIndex === index
                  ? "border-primary shadow-lg shadow-primary/50"
                  : "border-primary/30 hover:border-primary/50"
              }`}
              aria-label={`View ${screenshot.title}`}
            >
              <Image
                src={screenshot.image || "/placeholder.svg"}
                alt={screenshot.title}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>

        {/* Counter */}
        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            {activeIndex + 1} <span className="text-primary">of</span> {screenshots.length}
          </p>
        </div>
      </div>
    </section>
  )
}
