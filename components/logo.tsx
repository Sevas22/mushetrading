import { siteConfig } from "@/lib/site-config"

interface LogoProps {
  showWordmark?: boolean
  inverted?: boolean
}

export function Logo({ showWordmark = true, inverted = false }: LogoProps) {
  const wordmarkColor = inverted ? "#FFFFFF" : "#123F49"
  const emerald = inverted ? "#3FC1A7" : "#0F8A5F"
  const navy = inverted ? "#D9EEF1" : "#123F66"
  const gold = inverted ? "#E7D2A1" : "#B9964A"
  const sand = inverted ? "#EFE5CE" : "#D9CDB2"

  return (
    <div className="flex items-center gap-3">
      <svg viewBox="0 0 760 150" aria-hidden="true" className="h-11 w-auto shrink-0" role="img">
        <g transform="translate(10 18)">
          <path
            d="M18 22H102V38H76V102C76 116 65 128 48 128C35 128 23 122 12 110L24 97C31 105 39 109 46 109C56 109 61 103 61 94V38H18V22Z"
            fill={navy}
          />
          <path
            d="M95 22H177V38H150V126H133V38H95V22Z"
            fill={emerald}
          />
          <path
            d="M126 126H109V80C109 50 125 30 159 22L163 36C139 43 126 57 126 80V126Z"
            fill={emerald}
          />
          <path
            d="M79 18L87 30H101L91 38L95 51L79 43L63 51L67 38L57 30H71L79 18Z"
            fill="none"
            stroke={gold}
            strokeWidth="4"
            strokeLinejoin="round"
          />
        </g>

        {showWordmark ? (
          <g transform="translate(225 24)">
            <text
              x="0"
              y="52"
              fill={wordmarkColor}
              fontFamily="Arial, Helvetica, sans-serif"
              fontSize="44"
              fontWeight="800"
              letterSpacing="1"
            >
              {siteConfig.name.toUpperCase()}
            </text>
            <path d="M0 88c88 7 171 5 257 0 77-4 151-4 229 0" stroke={emerald} strokeWidth="6" fill="none" strokeLinecap="round" />
            <path d="M0 98c96 7 185 5 275 0 76-4 148-4 223 0" stroke={navy} strokeWidth="5" fill="none" strokeLinecap="round" />
            <path d="M0 108c104 7 196 5 287 0 74-4 144-4 215 0" stroke={gold} strokeWidth="4" fill="none" strokeLinecap="round" />
            <path d="M0 118c112 7 206 5 298 0 72-4 139-4 207 0" stroke={sand} strokeWidth="3" fill="none" strokeLinecap="round" />
          </g>
        ) : null}
      </svg>

    </div>
  )
}
