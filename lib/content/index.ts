import type { Locale } from "@/lib/i18n/core"
import { articles } from "./articles"
import { articlesEn } from "./articles.en"
import { method, principles, stack } from "./method"
import { methodEn, principlesEn, stackEn } from "./method.en"
import { ecosystem, products } from "./products"
import { ecosystemEn, productsEn } from "./products.en"
import { kindLabel, projects, featuredSlugs } from "./projects"
import { kindLabelEn, projectsEn } from "./projects.en"
import { groupMeta, services } from "./services"
import { groupMetaEn, servicesEn } from "./services.en"

/** Selector de contenido por idioma. Mismas formas de datos en es y en (ver tests/content-parity.test.ts). */
export function getContent(locale: Locale) {
  const en = locale === "en"
  const svc = en ? servicesEn : services
  const prods = en ? productsEn : products
  const projs = en ? projectsEn : projects
  const arts = en ? articlesEn : articles
  return {
    services: svc,
    getService: (slug: string) => svc.find((s) => s.slug === slug),
    groupMeta: en ? groupMetaEn : groupMeta,
    products: prods,
    productList: [prods.nexo, prods.nodo],
    ecosystem: en ? ecosystemEn : ecosystem,
    projects: projs,
    getProject: (slug: string) => projs.find((p) => p.slug === slug),
    featuredProjects: featuredSlugs.map((s) => projs.find((p) => p.slug === s)!),
    kindLabel: en ? kindLabelEn : kindLabel,
    articles: arts,
    method: en ? methodEn : method,
    principles: en ? principlesEn : principles,
    stack: en ? stackEn : stack,
  }
}

/** Slugs canónicos (iguales en ambos idiomas) para armar equivalencias de URL, sitemap y static params. */
export const knownSlugs = {
  services: services.map((s) => s.slug),
  products: Object.keys(products),
  projects: projects.map((p) => p.slug),
  articles: articles.map((a) => a.slug),
}
