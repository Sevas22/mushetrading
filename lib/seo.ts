import { siteConfig } from "@/lib/site-config"

/**
 * SEO (inglés) para meta title & description.
 * Los títulos de sección son el segmento `%s` del template `%s | ${shortName}` en layout raíz.
 * GA4 / Meta Pixel: configurar en Google Tag Manager (contenedor GTM).
 */
export const seo = {
  home: {
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  wholesale: {
    /** Segmento de título (resultado: "… | MUSHE") */
    title: "Wholesale Food Export Catalog",
    description:
      "Browse export-ready food products: rice, canned goods, beverages, spices, and private label programs. Technical specs and logistics support for U.S. importers and distributors.",
  },
  store: {
    title: "Store — Food & Trade",
    description:
      "Shop selected food products and commercial programs for wholesale. View pricing, categories, and submit an RFQ for export and logistics coordination.",
  },
  request: {
    title: "RFQ — Request a Quote",
    description:
      "Submit your food export or logistics inquiry. Our team replies with availability, pricing, and next steps for container programs and wholesale orders.",
  },
  businessMatchmaking: {
    title: "Business Matchmaking",
    description:
      "Connect with aligned buyers, suppliers, and distributors. Share your categories and volume—we coordinate introductions and follow-up for U.S. food trade.",
  },
  productWholesale: (productName: string, description: string) => ({
    title: `${productName} | Wholesale`,
    description: description.slice(0, 160),
  }),
  productStore: (productName: string, description: string) => ({
    title: `${productName} | Store`,
    description: description.slice(0, 160),
  }),
} as const
