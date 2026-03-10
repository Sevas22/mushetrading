"use client"

import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroBannerProps {
  title: string
  subtitle: string
  image?: string
}

export function HeroBanner({ title, subtitle, image }: HeroBannerProps) {
  return (
    <section className="relative flex min-h-[430px] items-center overflow-hidden pb-12 pt-28">
      {image ? (
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <img
          src="/brand/hero-skyline.svg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(8,28,29,0.94)_0%,rgba(8,28,29,0.78)_45%,rgba(8,28,29,0.35)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(199,157,71,0.18),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_20%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 lg:px-8">
        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.15fr)_340px]">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-white/90 backdrop-blur-sm">
              Jibala Trading
            </div>
            <h1 className="mb-4 text-balance text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="max-w-2xl text-pretty text-base leading-relaxed text-white/78 md:text-lg">
              {subtitle}
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/85">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm">
                <ShieldCheck className="h-4 w-4 text-gold" />
                Export-ready presentation
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-gold" />
                Premium Middle East positioning
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="rounded-[28px] border border-white/15 bg-white/10 p-6 text-white shadow-2xl backdrop-blur-md">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-gold">
                Regional profile
              </p>
              <h3 className="mb-4 text-2xl font-semibold leading-tight">
                Catalogs and programs prepared for GCC retail, wholesale, and hospitality channels.
              </h3>
              <div className="space-y-3 border-t border-white/10 pt-4 text-sm text-white/80">
                <div className="flex items-center justify-between gap-4">
                  <span>Focus</span>
                  <span className="font-semibold text-white">Quality + logistics</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span>Programs</span>
                  <span className="font-semibold text-white">Private label / mixed loads</span>
                </div>
              </div>
              <Button
                asChild
                size="sm"
                className="mt-5 w-full bg-gold text-navy hover:bg-gold/90"
              >
                <a href="/request">
                  Request proposal
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
