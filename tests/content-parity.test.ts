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
