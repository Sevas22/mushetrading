"use client"

import Link from "next/link"
import {
  ArrowRight,
  Building2,
  Crown,
  Globe,
  Landmark,
  ShieldCheck,
  Truck,
  Cookie,
  Coffee,
  Package,
  Leaf,
  Wheat,
  Flame,
  Milk,
  UtensilsCrossed,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { siteConfig } from "@/lib/site-config"

export function ValuesSection() {
  const { t } = useLanguage()

  const values = [
    {
      icon: ShieldCheck,
      title: t.values.quality,
      desc: t.values.qualityDesc,
      cardClass: "border-primary/15 bg-white/85",
    },
    {
      icon: Globe,
      title: t.values.focus,
      desc: t.values.focusDesc,
      cardClass: "border-gold/20 bg-white/85",
    },
    {
      icon: Truck,
      title: t.values.innovation,
      desc: t.values.innovationDesc,
      cardClass: "border-primary/15 bg-white/85",
    },
    {
      icon: Building2,
      title: t.values.global,
      desc: t.values.globalDesc,
      cardClass: "border-gold/20 bg-white/85",
    },
  ]

  return (
    <section className="bg-gradient-to-b from-secondary/80 via-background to-background py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 flex flex-col items-center text-center">
          <div className="mb-4 inline-flex rounded-full border border-primary/10 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            Core strengths
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {t.values.title}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Card
              key={i}
              className={`overflow-hidden border shadow-sm backdrop-blur transition-all hover:-translate-y-1 hover:shadow-xl ${v.cardClass}`}
            >
              <CardContent className="flex flex-col items-center p-8 text-center">
                <div className="mb-5 flex h-18 w-18 items-center justify-center rounded-2xl bg-secondary/60 p-3 shadow-sm">
                  <v.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{v.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export function AboutSection() {
  const { t } = useLanguage()

  const stats = [
    { value: "08+", label: t.about.yearsExp },
    { value: "06", label: t.about.countries },
    { value: "30+", label: t.about.products },
    { value: "24/7", label: t.about.clients },
  ]

  const pillars = [
    "Premium retail packaging",
    "Mixed container planning",
    "Regional buyer alignment",
  ]

  return (
    <section className="relative overflow-hidden bg-background py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(15,92,77,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(199,157,71,0.12),transparent_30%)]" />
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="relative flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <div className="relative w-full lg:w-1/2">
            <div className="overflow-hidden rounded-[28px] border border-border/70 bg-secondary/40 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80"
                alt="Professional sourcing and export coordination meeting"
                className="h-[460px] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 rounded-3xl border border-primary/10 bg-card/90 p-5 shadow-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">China Trade Hub</p>
              <p className="mt-2 text-lg font-semibold text-foreground">Shanghai, China</p>
              <p className="mt-1 text-sm text-muted-foreground">Professional sourcing, compliance, and logistics coordination.</p>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="mb-4 inline-flex rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              Brand profile
            </div>
            <h2 className="mb-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {t.about.title}
            </h2>
            <p className="mb-6 text-lg font-medium text-gold">{t.about.subtitle}</p>
            <p className="mb-4 leading-relaxed text-muted-foreground">{t.about.p1}</p>
            <p className="mb-8 leading-relaxed text-muted-foreground">{t.about.p2}</p>

            <div className="mb-8 flex flex-wrap gap-3">
              {pillars.map((pillar) => (
                <div
                  key={pillar}
                  className="rounded-full border border-primary/10 bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm"
                >
                  {pillar}
                </div>
              ))}
            </div>

            <div className="mb-8 grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <div key={i} className="rounded-2xl border border-primary/10 bg-white/80 p-4 shadow-sm">
                  <div className="text-3xl font-bold text-primary">{s.value}</div>
                  <div className="text-sm text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>

            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/products">{t.about.discover}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export function CategoriesSection() {
  const { t } = useLanguage()

  const categories = [
    { icon: Cookie, label: t.categories.snacks, color: "bg-[#fff1db] text-[#a45e11]" },
    { icon: Coffee, label: t.categories.beverages, color: "bg-[#f8edcf] text-[#8c641d]" },
    { icon: Package, label: t.categories.canned, color: "bg-[#e2f0ea] text-[#155a4b]" },
    { icon: Leaf, label: t.categories.produce, color: "bg-[#e5f2e4] text-[#3c7a44]" },
    { icon: Wheat, label: t.categories.grains, color: "bg-[#f5efd9] text-[#8b6d1a]" },
    { icon: Flame, label: t.categories.spices, color: "bg-[#fff0e5] text-[#b85b16]" },
    { icon: Milk, label: t.categories.dairy, color: "bg-[#edf5f3] text-[#216c66]" },
    { icon: UtensilsCrossed, label: t.categories.sauces, color: "bg-[#f2ebdf] text-[#5e4937]" },
  ]

  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(199,157,71,0.24),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_30%)]" />
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="relative mb-12 text-center">
          <div className="mx-auto mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            Product lines
          </div>
          <h2 className="mb-3 text-balance text-3xl font-bold tracking-tight text-white md:text-4xl">
            {t.categories.title}
          </h2>
          <p className="text-white/70">{t.categories.subtitle}</p>
        </div>
        <div className="relative grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <Link key={i} href="/products">
              <Card className="group cursor-pointer border border-white/10 bg-white/10 shadow-sm backdrop-blur transition-all hover:-translate-y-1 hover:border-gold/30 hover:bg-white/12 hover:shadow-lg">
                <CardContent className="flex flex-col items-center gap-3 p-6 text-center">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${cat.color}`}>
                    <cat.icon className="h-7 w-7" />
                  </div>
                  <span className="text-sm font-semibold text-white">{cat.label}</span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function WhyChooseSection() {
  const { t } = useLanguage()

  const features = [
    { icon: Globe, title: t.whyChoose.experience, desc: t.whyChoose.experienceDesc },
    { icon: ShieldCheck, title: t.whyChoose.qualityAssurance, desc: t.whyChoose.qualityAssuranceDesc },
    { icon: Truck, title: t.whyChoose.reliableService, desc: t.whyChoose.reliableServiceDesc },
    { icon: Crown, title: t.whyChoose.competitivePricing, desc: t.whyChoose.competitivePricingDesc },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-secondary/50 to-background py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(15,92,77,0.08),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(199,157,71,0.08),transparent_25%)]" />
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="relative mb-12 text-center">
          <div className="mx-auto mb-4 inline-flex rounded-full border border-primary/10 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            Why MusheTrading
          </div>
          <h2 className="mb-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {t.whyChoose.title}
          </h2>
          <p className="text-muted-foreground">{t.whyChoose.subtitle}</p>
        </div>
        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex gap-5 rounded-2xl border border-primary/10 bg-white/80 p-6 shadow-sm backdrop-blur transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-secondary/70 p-2">
                <f.icon className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="mb-1 text-lg font-semibold text-foreground">{f.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CountriesSection() {
  const { t } = useLanguage()

  const markets = [
    { name: "Shanghai", code: "SHA", icon: Landmark },
    { name: "Shenzhen", code: "SZX", icon: Crown },
    { name: "Guangzhou", code: "CAN", icon: Building2 },
    { name: "Hong Kong", code: "HKG", icon: ShieldCheck },
    { name: "Ningbo", code: "NGB", icon: Globe },
    { name: "Tianjin", code: "TSN", icon: Crown },
    { name: "Beijing", code: "PEK", icon: Landmark },
    { name: "Chongqing", code: "CKG", icon: Truck },
  ]

  return (
    <section className="bg-[linear-gradient(135deg,#020617_0%,#991b1b_55%,#fbbf24_100%)] py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mx-auto mb-4 inline-flex rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-white/90">
            Focus markets
          </div>
          <h2 className="mb-3 text-balance text-3xl font-bold tracking-tight text-white md:text-4xl">
            {t.countries.title}
          </h2>
          <p className="text-white/75">{t.countries.subtitle}</p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-4">
          {markets.map((market, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-5 text-center shadow-sm backdrop-blur transition-shadow hover:bg-white/15 hover:shadow-md"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-sm font-bold text-white">
                <market.icon className="h-5 w-5" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">{market.code}</span>
              <span className="text-center text-sm font-medium text-white">{market.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CTABanner() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0b2628_0%,#0f5c4d_52%,#c79d47_100%)] py-20">
      <div className="absolute inset-0 opacity-15">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full border-[40px] border-white" />
        <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full border-[30px] border-white" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center lg:px-8">
        <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
          {t.cta.title}
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/80">
          {t.cta.subtitle}
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            asChild
            size="lg"
            className="bg-gold text-navy hover:bg-gold/90"
          >
            <Link href="/request">
              {t.cta.button}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <p className="text-sm text-primary-foreground/70">
            {t.cta.call}{" "}
            <span className="font-semibold text-primary-foreground">{siteConfig.contact.phone}</span>
          </p>
        </div>
      </div>
    </section>
  )
}
