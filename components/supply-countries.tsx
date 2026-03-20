"use client"

import { useLanguage } from "@/contexts/language-context"

/** Banderas PNG (funciona en Windows; los emojis de bandera a veces salen como "CO", "CL"…) */
function flagSrc(iso: string): string {
  return `https://flagcdn.com/w40/${iso.toLowerCase()}.png`
}

const SUPPLY_COUNTRIES = [
  { iso: "CO", nameKey: "countryColombia" as const },
  { iso: "CL", nameKey: "countryChile" as const },
  { iso: "PE", nameKey: "countryPeru" as const },
  { iso: "EC", nameKey: "countryEcuador" as const },
  { iso: "BR", nameKey: "countryBrasil" as const },
]

export function SupplyCountriesSection() {
  const { t } = useLanguage()

  return (
    <section className="relative border-b border-[#e8e1d6] bg-[#fdfaf3] py-10 md:py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="rounded-3xl border border-black/[0.06] bg-white p-6 shadow-sm md:p-8">
          <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-emerald-800">
            {t.storePage.originKicker}
          </p>
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-[#162033] md:text-[1.65rem]">
            {t.storePage.supplyCountriesTitle}
          </h2>

          <div className="flex flex-wrap gap-3 md:gap-4">
            {SUPPLY_COUNTRIES.map(({ iso, nameKey }) => {
              const label = t.storePage[nameKey]
              return (
                <div
                  key={iso}
                  className="inline-flex items-center gap-2.5 rounded-full border border-[#e5dcc8] bg-[#f9f3e9] px-4 py-2 text-sm font-medium text-[#162033] shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]"
                >
                  <img
                    src={flagSrc(iso)}
                    alt={`${label} flag`}
                    width={28}
                    height={20}
                    loading="lazy"
                    decoding="async"
                    className="h-5 w-7 shrink-0 rounded-sm object-cover shadow-sm ring-1 ring-black/10"
                  />
                  <span className="leading-tight">{label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
