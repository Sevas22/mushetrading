import { siteConfig } from "@/lib/site-config"

interface LogoProps {
  showWordmark?: boolean
  inverted?: boolean
}

/**
 * Layout (same everywhere: navbar hero, navbar scrolled, footer):
 * [icon]  MUSHE | TRADING
 *         FOOD EXPORT LOGISTICS  (centered under the wordmark row)
 *         [red] [navy] [gold]
 */
export function Logo({ showWordmark = true, inverted = false }: LogoProps) {
  const title = inverted ? "text-white" : "text-[#0B2D6B]"
  const pipe = inverted ? "text-white/70" : "text-[#0B2D6B]/45"
  const tagline = inverted ? "text-white" : "text-[#C81F32]"

  const iconShadow =
    inverted
      ? "[filter:drop-shadow(0_2px_8px_rgba(0,0,0,0.45))_drop-shadow(0_0_14px_rgba(255,255,255,0.12))]"
      : ""

  return (
    <div className="flex items-center gap-3 sm:gap-3.5">
      <svg
        viewBox="0 0 110 110"
        aria-hidden="true"
        className={`h-10 w-10 shrink-0 sm:h-11 sm:w-11 ${iconShadow}`}
        role="img"
      >
        <g transform="translate(5 5)">
          <path
            d="M10 76V18h36l18 20 18-20h36v58H92V42L65 72 38 42v34H10Z"
            fill="#0B2D6B"
          />
          <path
            d="M52 86c-8-13-7-25 1-37L87 10h33L86 47c-5 5-7 11-7 18v21H52Z"
            fill="#C81F32"
          />
          <path d="M68 8l4 12h12l-10 7 4 12-10-7-10 7 4-12-10-7h12l4-12Z" fill="#D2A64A" />
        </g>
      </svg>

      {showWordmark ? (
        <div className="flex min-w-0 flex-col items-center">
          {/* One row: MUSHE | TRADING — pipe always visible, same on mobile */}
          <div
            className={`flex w-max max-w-[calc(100vw-8rem)] items-center justify-center gap-2 whitespace-nowrap ${title}`}
          >
            <span className="text-lg font-extrabold tracking-tight sm:text-xl">
              {siteConfig.brandMushe}
            </span>
            <span
              className={`select-none text-lg font-light leading-none sm:text-xl ${pipe}`}
              aria-hidden
            >
              |
            </span>
            <span className="text-base font-bold uppercase tracking-[0.14em] sm:text-lg">
              {siteConfig.brandTrading}
            </span>
          </div>

          <p
            className={`mt-1 text-center text-[9px] font-bold uppercase tracking-[0.32em] sm:text-[10px] sm:tracking-[0.28em] ${tagline}`}
          >
            {siteConfig.tagline}
          </p>

          <div className="mt-1.5 flex w-full max-w-[200px] justify-center gap-1.5 sm:max-w-[220px]">
            <span className="h-0.5 flex-1 rounded-full bg-[#C81F32]" />
            <span className="h-0.5 flex-1 rounded-full bg-[#0B2D6B]" />
            <span className="h-0.5 flex-1 rounded-full bg-[#D2A64A]" />
          </div>
        </div>
      ) : null}
    </div>
  )
}
