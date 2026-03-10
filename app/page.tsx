"use client"

import { HeroCarousel } from "@/components/hero-carousel"
import {
  ValuesSection,
  AboutSection,
  CategoriesSection,
  WhyChooseSection,
  CountriesSection,
} from "@/components/home-sections"

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <ValuesSection />
      <AboutSection />
      <CategoriesSection />
      <WhyChooseSection />
      <CountriesSection />
    </>
  )
}
