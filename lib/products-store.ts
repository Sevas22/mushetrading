import type { Product } from "./types"
import { sampleCatalogProducts, sampleStoreProducts } from "./sample-data"

const productSources: Record<"store" | "catalog", Product[]> = {
  store: sampleStoreProducts.map(cloneProduct),
  catalog: sampleCatalogProducts.map(cloneProduct),
}

function cloneProduct(product: Product): Product {
  return {
    ...product,
    specifications: product.specifications ? { ...product.specifications } : undefined,
  }
}

export function getProducts(type: "store" | "catalog"): Product[] {
  return productSources[type].map(cloneProduct)
}

export function getProductById(id: string): Product | undefined {
  const allProducts = [...getProducts("store"), ...getProducts("catalog")]
  return allProducts.find((p) => p.id === id)
}

export function addProduct(product: Omit<Product, "id" | "createdAt">): Product {
  const newProduct: Product = {
    ...product,
    id: `${product.type}-${Date.now()}`,
    createdAt: new Date().toISOString().split("T")[0],
  }
  productSources[product.type].push(cloneProduct(newProduct))
  return cloneProduct(newProduct)
}

export function updateProduct(id: string, updates: Partial<Product>): Product | undefined {
  const product = getProductById(id)
  if (!product) return undefined

  const products = productSources[product.type]
  const index = products.findIndex((p) => p.id === id)
  if (index === -1) return undefined

  const updated = cloneProduct({ ...products[index], ...updates })
  products[index] = updated
  return cloneProduct(updated)
}

export function deleteProduct(id: string): boolean {
  const product = getProductById(id)
  if (!product) return false

  const products = productSources[product.type]
  const index = products.findIndex((p) => p.id === id)
  if (index === -1) return false
  products.splice(index, 1)
  return true
}

export function getCategories(type: "store" | "catalog"): string[] {
  const products = getProducts(type)
  const cats = new Set(products.map((p) => p.category))
  return Array.from(cats).sort()
}
