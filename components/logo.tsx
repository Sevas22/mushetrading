interface LogoProps {
  showWordmark?: boolean
  inverted?: boolean
}

export function Logo({ showWordmark = true, inverted = false }: LogoProps) {
  return (
    <div className="flex items-center gap-3">
      <img
        src={
          inverted && showWordmark
            ? "/brand/jibala-logo-light.svg"
            : "/brand/jibala-logo.svg"
        }
        alt="MusheTrading"
        className="h-11 w-auto shrink-0"
      />
    </div>
  )
}
