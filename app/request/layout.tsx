import type { Metadata } from "next"
import type { ReactNode } from "react"
import { seo } from "@/lib/seo"

export const metadata: Metadata = {
  title: seo.request.title,
  description: seo.request.description,
  openGraph: {
    title: seo.request.title,
    description: seo.request.description,
  },
}

export default function RequestLayout({ children }: { children: ReactNode }) {
  return children
}
