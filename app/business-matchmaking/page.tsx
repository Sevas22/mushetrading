"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HeroBanner } from "@/components/hero-banner"
import { useLanguage } from "@/contexts/language-context"

export default function BusinessMatchmakingPage() {
  const { t } = useLanguage()

  return (
    <>
      <HeroBanner title={t.matchmakingPage.title} subtitle={t.matchmakingPage.subtitle} />
      <section className="bg-background py-16">
        <div className="mx-auto max-w-2xl px-4 text-center lg:px-8">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-primary px-8 text-primary-foreground hover:bg-primary/90"
          >
            <Link href="/request">{t.matchmakingPage.cta}</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
