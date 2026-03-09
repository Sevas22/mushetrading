import { siteConfig } from "@/lib/site-config"

interface LogoProps {
  showWordmark?: boolean
  inverted?: boolean
}

export function Logo({ showWordmark = true, inverted = false }: LogoProps) {
  const wordmarkColor = inverted ? "#FFFFFF" : "#0B2D6B"
  const stripeSecondary = inverted ? "#FFFFFF" : "#0B2D6B"

  return (
    <div className="flex items-center gap-3">
      <svg viewBox="0 0 540 110" aria-hidden="true" className="h-11 w-auto shrink-0" role="img">
        <g transform="translate(0 6)">
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

        {showWordmark ? (
          <g transform="translate(140 8)">
            <text
              x="0"
              y="43"
              fill={wordmarkColor}
              fontFamily="Arial, Helvetica, sans-serif"
              fontSize="30"
              fontWeight="800"
              letterSpacing="0.5"
            >
              {siteConfig.name.toUpperCase()}
            </text>
            <text
              x="0"
              y="66"
              fill="#C81F32"
              fontFamily="Arial, Helvetica, sans-serif"
              fontSize="10"
              fontWeight="700"
              letterSpacing="4"
            >
              {siteConfig.tagline.toUpperCase()}
            </text>
            <path d="M0 77c54 9 126 5 197 1 56-4 115-5 184 0" stroke="#C81F32" strokeWidth="5" fill="none" />
            <path d="M0 85c64 7 139 3 212-1 57-4 113-5 180 0" stroke={stripeSecondary} strokeWidth="4" fill="none" />
            <path d="M0 92c67 5 141 2 214-1 56-3 111-4 179 0" stroke="#D2A64A" strokeWidth="3" fill="none" />
          </g>
        ) : null}
      </svg>

    </div>
  )
}
