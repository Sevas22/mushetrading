import type { Metadata } from "next"
import type { ReactNode } from "react"
import { getProductById } from "@/lib/products-store"
import { seo } from "@/lib/seo"

type Props = { children: ReactNode; params: Promise<{ id: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const product = getProductById(id)

  if (!product || product.type !== "store") {
    return {
      title: "Product",
      description: seo.store.description,
    }
  }

  const { title, description } = seo.productStore(product.name, product.description)

  return {
    title,
    description,
    openGraph: { title, description },
  }
}

export default function StoreProductDetailLayout({ children }: { children: ReactNode }) {
  return children
}
