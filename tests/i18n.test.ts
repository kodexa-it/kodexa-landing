import { test } from "node:test"
import assert from "node:assert/strict"
import { pickLocale, isBot, toPublicPath, parsePublicPath, equivalentPath } from "../lib/i18n/core.ts"

const known = {
  services: ["desarrollo-web", "mvp"],
  products: ["nexo", "nodo"],
  projects: [],
  articles: ["que-aprendimos-construyendo-un-saas-desde-cero"],
}

test("pickLocale: variantes de inglés y español", () => {
  assert.equal(pickLocale("en-US,en;q=0.9"), "en")
  assert.equal(pickLocale("en-GB"), "en")
  assert.equal(pickLocale("es-AR,es;q=0.9,en;q=0.8"), "es")
  assert.equal(pickLocale("es-ES"), "es")
  assert.equal(pickLocale("EN-us"), "en")
})
test("pickLocale: respeta q y orden", () => {
  assert.equal(pickLocale("es;q=0.5,en;q=0.9"), "en")
  assert.equal(pickLocale("en;q=0.8,es;q=0.8"), "en")
  assert.equal(pickLocale("fr-FR,fr;q=0.9,en;q=0.8"), "en")
})
test("pickLocale: no soportado, vacío o inválido → es", () => {
  assert.equal(pickLocale("fr-FR,fr;q=0.9"), "es")
  assert.equal(pickLocale("de"), "es")
  assert.equal(pickLocale("*"), "es")
  assert.equal(pickLocale(""), "es")
  assert.equal(pickLocale(null), "es")
  assert.equal(pickLocale("en;q=0"), "es")
  assert.equal(pickLocale(";;;,,,q=x"), "es")
})
test("isBot", () => {
  assert.equal(isBot("Mozilla/5.0 (compatible; Googlebot/2.1)"), true)
  assert.equal(isBot(undefined), true)
  assert.equal(isBot("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 Version/17 Safari/605.1.15"), false)
})
test("toPublicPath", () => {
  assert.equal(toPublicPath("/", "es"), "/")
  assert.equal(toPublicPath("/", "en"), "/en")
  assert.equal(toPublicPath("/servicios/desarrollo-web", "es"), "/servicios/desarrollo-web")
  assert.equal(toPublicPath("/servicios/desarrollo-web", "en"), "/en/services/web-development")
  assert.equal(toPublicPath("/equipo-it", "en"), "/en/it-team")
  assert.equal(toPublicPath("/contacto?service=mvp#form", "en"), "/en/contact?service=mvp#form")
  assert.equal(toPublicPath("/productos/nexo", "en"), "/en/products/nexo")
})
test("parsePublicPath: ida y vuelta y canonicalización", () => {
  assert.deepEqual(parsePublicPath("/en/services/web-development"), { locale: "en", internal: "/servicios/desarrollo-web", canonical: "/en/services/web-development" })
  assert.equal(parsePublicPath("/en").internal, "/")
  assert.equal(parsePublicPath("/servicios/mvp/").canonical, "/servicios/mvp")
  assert.equal(parsePublicPath("/es/servicios").canonical, "/servicios")
  assert.equal(parsePublicPath("/en/servicios/desarrollo-web").canonical, "/en/services/web-development")
  assert.equal(parsePublicPath("/en/nope/x").canonical, "/en/nope/x")
  assert.equal(parsePublicPath("/").canonical, "/")
})
test("equivalentPath", () => {
  assert.equal(equivalentPath("/servicios/mvp", "en", known), "/en/services/mvp")
  assert.equal(equivalentPath("/en/services/web-development", "es", known), "/servicios/desarrollo-web")
  assert.equal(equivalentPath("/en", "es", known), "/")
  assert.equal(equivalentPath("/en/no-existe", "es", known), "/")
  assert.equal(equivalentPath("/servicios/no-existe", "en", known), "/en")
})

test("URLs legadas se normalizan en ambos idiomas", () => {
  assert.equal(parsePublicPath("/proyectos/nexo").canonical, "/productos/nexo")
  assert.equal(parsePublicPath("/en/projects/nexo").canonical, "/en/products/nexo")
})

test("artículo del caso: slug en inglés y equivalencia entre idiomas", () => {
  const k = { ...known, articles: ["que-aprendimos-construyendo-un-saas-desde-cero", "de-los-requerimientos-a-una-solucion-digital-a-medida"] }
  const en = toPublicPath("/recursos/de-los-requerimientos-a-una-solucion-digital-a-medida", "en")
  assert.equal(en, "/en/resources/from-requirements-to-a-custom-digital-solution")
  assert.equal(parsePublicPath(en).internal, "/recursos/de-los-requerimientos-a-una-solucion-digital-a-medida")
  assert.equal(equivalentPath("/recursos/de-los-requerimientos-a-una-solucion-digital-a-medida", "en", k), en)
})
