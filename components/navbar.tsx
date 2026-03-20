"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { useLanguage } from "@/contexts/language-context"
import { Logo } from "@/components/logo"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { t, language, toggleLanguage } = useLanguage()
  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/products", label: t.nav.products },
    { href: "/store", label: t.nav.store },
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? "bg-card/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 lg:gap-6 lg:px-8">
        {/* Solo logo a la izquierda */}
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Logo inverted={!scrolled && isHome} />
        </Link>

        {/* Todo lo demás alineado a la derecha: nav + CTAs + idioma + menú */}
        <div className="flex min-w-0 flex-1 items-center justify-end gap-2 sm:gap-3 md:gap-4 lg:gap-5">
          <div className="hidden items-center gap-0.5 md:flex lg:gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium transition-colors lg:px-4 ${
                  isActive(link.href)
                    ? scrolled || !isHome
                      ? "bg-primary text-primary-foreground"
                      : "bg-white/20 text-white"
                    : scrolled || !isHome
                      ? "text-foreground hover:bg-secondary"
                      : "text-white/90 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <Button
              asChild
              size="sm"
              className="rounded-full bg-gold px-3.5 font-semibold text-white shadow-sm hover:bg-gold/90 lg:px-4"
            >
              <Link href="/request">{t.nav.request}</Link>
            </Button>
            <Button
              asChild
              size="sm"
              className="rounded-full bg-primary px-3.5 font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 lg:px-4"
            >
              <Link href="/business-matchmaking">{t.nav.businessMatchmaking}</Link>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className={`shrink-0 px-2.5 text-xs font-semibold sm:px-3 ${
              scrolled || !isHome
                ? "text-foreground hover:bg-secondary"
                : "text-white hover:bg-white/10"
            }`}
          >
            <Globe className="mr-1 h-4 w-4 sm:mr-1.5" />
            {language === "en" ? "中文" : "EN"}
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={`md:hidden ${
                  scrolled || !isHome ? "text-foreground" : "text-white"
                }`}
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-card">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col gap-1 pt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-md px-4 py-3 text-sm font-medium transition-colors ${
                      isActive(link.href)
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-secondary"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-4 flex flex-col gap-2 border-t border-border pt-4">
                  <Button
                    asChild
                    className="w-full rounded-full bg-gold font-semibold text-white hover:bg-gold/90"
                  >
                    <Link href="/request" onClick={() => setOpen(false)}>
                      {t.nav.request}
                    </Link>
                  </Button>
                  <Button
                    asChild
                    className="w-full rounded-full bg-primary font-semibold text-primary-foreground hover:bg-primary/90"
                  >
                    <Link href="/business-matchmaking" onClick={() => setOpen(false)}>
                      {t.nav.businessMatchmaking}
                    </Link>
                  </Button>
                </div>
                <Link
                  href="/admin"
                  onClick={() => setOpen(false)}
                  className="mt-4 rounded-md border border-border px-4 py-3 text-center text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary"
                >
                  {t.nav.admin}
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
