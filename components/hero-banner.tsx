"use client"

interface HeroBannerProps {
  title: string
  subtitle: string
  image?: string
}

export function HeroBanner({ title, subtitle, image }: HeroBannerProps) {
  return (
    <section className="relative flex h-[45vh] min-h-[320px] items-center justify-center overflow-hidden">
      {/* Background */}
      {image ? (
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-navy" />
      )}
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(11,45,107,0.92),rgba(11,45,107,0.78),rgba(200,31,50,0.55))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.1),transparent_20%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center lg:px-8">
        <div className="mx-auto mb-4 h-1 w-16 bg-white/80" />
        <h1 className="mb-4 text-balance text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-white/75">
          {subtitle}
        </p>
      </div>
    </section>
  )
}
