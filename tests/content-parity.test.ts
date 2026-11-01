import { test } from "node:test"
import assert from "node:assert/strict"
import { articles } from "../lib/content/articles.ts"
import { articlesEn } from "../lib/content/articles.en.ts"

test("artículos: mismos slugs y metadatos completos en es y en", () => {
  assert.deepEqual(articles.map((a) => a.slug), articlesEn.map((a) => a.slug))
  for (const a of [...articles, ...articlesEn]) {
    for (const k of ["title", "description", "date", "readingTime", "ogImage", "storyImage"] as const) assert.ok(a[k], `${a.slug}.${k}`)
  }
})

test("artículos: cada artículo tiene cuerpo en es y en, con los mismos bloques y una imagen por idioma", async () => {
  const es = (await import("../messages/es/articulos.json", { with: { type: "json" } })).default as Record<string, { blocks: { t: string }[] }>
  const en = (await import("../messages/en/articulos.json", { with: { type: "json" } })).default as Record<string, { blocks: { t: string }[] }>
  for (const a of articles.filter((x) => x.slug in es)) {
    assert.ok(en[a.slug], `en: falta ${a.slug}`)
    assert.deepEqual(es[a.slug].blocks.map((b) => b.t), en[a.slug].blocks.map((b) => b.t), `bloques de ${a.slug}`)
  }
  for (const a of articles) assert.ok(a.description.length >= 120 && a.description.length <= 165, `${a.slug}: description ${a.description.length}`)
  for (const a of articlesEn) assert.ok(a.description.length >= 120 && a.description.length <= 165, `${a.slug} (en): description ${a.description.length}`)
})
