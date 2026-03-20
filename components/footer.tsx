"use client"

import Link from "next/link"
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { Logo } from "@/components/logo"
import { siteConfig } from "@/lib/site-config"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {/* Brand */}
          <div className="flex flex-col gap-4 lg:pr-6 xl:pr-8">
            <Link href="/" className="flex items-center gap-2">
              <Logo inverted />
            </Link>
            <p className="text-sm leading-relaxed text-white/70">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4 border-t border-white/25 pt-8 md:border-t-0 md:border-l md:border-white/25 md:pt-0 md:pl-8 lg:pl-6 xl:pl-8">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              {t.footer.quickLinks}
            </h3>
            <div className="flex flex-col gap-2">
              {[
                { href: "/", label: t.nav.home },
                { href: "/products", label: t.nav.products },
                { href: "/store", label: t.nav.store },
                { href: "/request", label: t.nav.request },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/70 transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4 border-t border-white/25 pt-8 md:border-t md:pt-12 md:border-l-0 lg:border-l lg:border-t-0 lg:pt-0 lg:border-white/25 lg:pl-6 xl:pl-8">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              {t.footer.contactInfo}
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <div className="text-sm text-white/70">
                  <p>{siteConfig.contact.addressLine1}</p>
                  <p>{siteConfig.contact.addressLine2}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                <span className="text-sm text-white/70">{siteConfig.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-gold" />
                <span className="text-sm text-white/70">{siteConfig.contact.email}</span>
              </div>
            </div>
          </div>

          {/* Sellers program */}
          <div className="flex flex-col gap-4 border-t border-white/25 pt-8 text-left md:border-t md:border-l md:border-white/25 md:pl-8 md:pt-12 lg:border-l lg:border-t-0 lg:pt-0 lg:pl-6 xl:pl-8">
            <div className="rounded-2xl border border-white/15 bg-white/[0.06] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] md:p-5">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#D2A64A]">
                {t.footer.sellersCardTitle}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/85">
                {t.footer.sellersCardBody}
              </p>
              <Button
                asChild
                className="mt-4 h-11 w-full rounded-full border-0 bg-[#D2A64A] px-6 text-sm font-semibold text-[#0B2D6B] shadow-[0_2px_12px_rgba(0,0,0,0.2)] transition-colors hover:bg-[#c49a3a] sm:w-auto"
              >
                <Link
                  href="/request?role=seller"
                  className="inline-flex items-center justify-center gap-1"
                >
                  {t.footer.sellersCta}
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom bar — copyright + crédito desarrollo (centrado) */}
        <div className="mt-12 border-t border-white/10 pt-10">
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-xs font-normal text-white/55 sm:text-sm">
              &copy; {new Date().getFullYear()} {siteConfig.name}. {t.footer.rights}
            </p>
            <p className="text-xs font-normal text-white/45 sm:text-sm">
              {t.footer.developedBy}{" "}
              <Link
                href={siteConfig.developer.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 underline-offset-2 transition-colors hover:text-white hover:underline"
                aria-label={t.footer.developerAria}
              >
                {siteConfig.developer.displayUrl}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
