"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1600&q=80",
    alt: "Shipping containers at a U.S. port terminal",
  },
  {
    image:
      "https://images.unsplash.com/photo-1565891741441-64926e441838?auto=format&fit=crop&w=1600&q=80",
    alt: "Food export logistics and warehouse operations",
  },
  {
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
    alt: "Container loading and international freight operations",
  },
]

export function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const { t } = useLanguage()

  const titles = [t.hero.slide1Title, t.hero.slide2Title, t.hero.slide3Title]
  const subs = [t.hero.slide1Sub, t.hero.slide2Sub, t.hero.slide3Sub]

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    const interval = setInterval(next, 6000)
    return () => clearInterval(interval)
  }, [next])

  return (
    <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="h-full w-full object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/60 to-navy/30" />
        </div>
      ))}

      {/* Content — padding-top clears fixed transparent navbar so text never sits under logo/tagline */}
      <div className="relative z-10 flex h-full items-center pt-24 pb-8 md:pt-28 md:pb-12 lg:pt-32">
        <div className="mx-auto w-full max-w-7xl px-4 lg:px-8">
          <div className="max-w-2xl">
            <h1
              key={`title-${current}`}
              className="animate-in fade-in slide-in-from-bottom-4 mb-5 max-w-xl text-balance text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
              style={{ animationDuration: "700ms" }}
            >
              {titles[current]}
            </h1>

            <p
              key={`sub-${current}`}
              className="animate-in fade-in slide-in-from-bottom-4 mb-8 max-w-xl text-pretty text-base leading-relaxed text-white/78 md:text-lg"
              style={{ animationDuration: "700ms", animationDelay: "150ms", animationFillMode: "backwards" }}
            >
              {subs[current]}
            </p>

            <div
              className="animate-in fade-in slide-in-from-bottom-4 flex flex-wrap gap-4"
              style={{ animationDuration: "700ms", animationDelay: "300ms", animationFillMode: "backwards" }}
            >
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/products">{t.hero.cta}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="/request">{t.hero.ctaSecondary}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === current ? "w-10 bg-gold" : "w-2.5 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
