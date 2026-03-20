import type { Metadata } from "next"
import type { ReactNode } from "react"
import { seo } from "@/lib/seo"

export const metadata: Metadata = {
  title: seo.wholesale.title,
  description: seo.wholesale.description,
  openGraph: {
    title: seo.wholesale.title,
    description: seo.wholesale.description,
  },
}

export default function ProductsLayout({ children }: { children: ReactNode }) {
  return children
}
