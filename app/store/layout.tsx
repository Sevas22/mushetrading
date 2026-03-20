import type { Metadata } from "next"
import type { ReactNode } from "react"
import { seo } from "@/lib/seo"

export const metadata: Metadata = {
  title: seo.store.title,
  description: seo.store.description,
  openGraph: {
    title: seo.store.title,
    description: seo.store.description,
  },
}

export default function StoreLayout({ children }: { children: ReactNode }) {
  return children
}
