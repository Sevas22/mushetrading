"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight, CircleCheckBig, PackageCheck, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { siteConfig } from "@/lib/site-config"

const slides = [
  {
    image: "/images/hero-1.jpg",
  },
  {
    image: "/images/hero-2.jpg",
  },
  {
    image: "/images/hero-3.jpg",
  },
]

export function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const { t } = useLanguage()

  const titles = [t.hero.slide1Title, t.hero.slide2Title, t.hero.slide3Title]
  const subs = [t.hero.slide1Sub, t.hero.slide2Sub, t.hero.slide3Sub]
  const highlights = [
    { icon: CircleCheckBig, label: "Shanghai / Shenzhen / Guangzhou" },
    { icon: PackageCheck, label: "China-ready private label" },
    { icon: ShieldCheck, label: "Sourcing · QC · Logistics" },
  ]

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
    <section className="relative h-[92vh] min-h-[700px] w-full overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(8,28,29,0.94)_0%,rgba(8,28,29,0.76)_42%,rgba(8,28,29,0.28)_100%)]" />
        </div>
      ))}

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-4 lg:px-8">
          <div className="grid items-end gap-10 pt-20 lg:grid-cols-[minmax(0,1.2fr)_380px]">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-white/90 backdrop-blur-sm">
                China-focused sourcing, export, and distribution
              </div>

              <h1
                key={`title-${current}`}
                className="animate-in fade-in slide-in-from-bottom-4 mb-5 max-w-2xl text-balance text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl"
                style={{ animationDuration: "700ms" }}
              >
                {titles[current]}
              </h1>

              <p
                key={`sub-${current}`}
                className="animate-in fade-in slide-in-from-bottom-4 mb-8 max-w-2xl text-pretty text-base leading-relaxed text-white/78 md:text-lg"
                style={{ animationDuration: "700ms", animationDelay: "150ms", animationFillMode: "backwards" }}
              >
                {subs[current]}
              </p>

              <div
                className="animate-in fade-in slide-in-from-bottom-4 mb-8 flex flex-wrap gap-3"
                style={{ animationDuration: "700ms", animationDelay: "230ms", animationFillMode: "backwards" }}
              >
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm"
                  >
                    <item.icon className="h-4 w-4 text-gold" />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>

              <div
                className="animate-in fade-in slide-in-from-bottom-4 flex flex-wrap gap-4"
                style={{ animationDuration: "700ms", animationDelay: "300ms", animationFillMode: "backwards" }}
              >
                <Button asChild size="lg" className="bg-primary px-6 text-primary-foreground hover:bg-primary/90">
                  <Link href="/products">{t.hero.cta}</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/25 bg-white/5 px-6 text-white hover:bg-white/10 hover:text-white"
                >
                  <Link href="/request">
                    {t.hero.ctaSecondary}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="animate-in fade-in slide-in-from-bottom-4 hidden lg:block" style={{ animationDuration: "700ms", animationDelay: "380ms", animationFillMode: "backwards" }}>
              <div className="rounded-[28px] border border-white/15 bg-white/10 p-6 text-white shadow-2xl backdrop-blur-md">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-gold">
                  {t.hero.cardEyebrow}
                </p>
                <h3 className="mb-5 text-2xl font-semibold leading-tight">
                  {t.hero.cardTitle}
                </h3>
                <div className="space-y-4 border-t border-white/10 pt-5 text-sm text-white/80">
                  <div className="flex items-center justify-between gap-4">
                    <span>{t.hero.cardPrimaryHub}</span>
                    <span className="font-semibold text-white">{t.hero.cardPrimaryHubValue}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span>{t.hero.cardPrograms}</span>
                    <span className="font-semibold text-white">{t.hero.cardProgramsValue}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span>{t.hero.cardContact}</span>
                    <span className="font-semibold text-white">{siteConfig.contact.phone}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

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
