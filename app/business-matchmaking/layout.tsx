import type { Metadata } from "next"
import type { ReactNode } from "react"
import { seo } from "@/lib/seo"

export const metadata: Metadata = {
  title: seo.businessMatchmaking.title,
  description: seo.businessMatchmaking.description,
  openGraph: {
    title: seo.businessMatchmaking.title,
    description: seo.businessMatchmaking.description,
  },
}

export default function BusinessMatchmakingLayout({ children }: { children: ReactNode }) {
  return children
}
