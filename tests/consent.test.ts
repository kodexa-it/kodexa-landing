import { test } from "node:test"
import assert from "node:assert/strict"
import { CONSENT_COOKIE, consentBootScript, consentDenied, consentGranted, parseConsent, serializeConsent } from "../lib/consent.ts"

test("parseConsent: solo acepta granted/denied", () => {
  assert.equal(parseConsent(null), null)
  assert.equal(parseConsent(""), null)
  assert.equal(parseConsent("a=1; kx_consent=granted; b=2"), "granted")
  assert.equal(parseConsent("kx_consent=denied"), "denied")
  assert.equal(parseConsent("kx_consent=yes"), null)
  assert.equal(parseConsent("xkx_consent=granted"), null)
})

test("serializeConsent: atributos de la cookie", () => {
  const c = serializeConsent("granted", true)
  assert.ok(c.startsWith(`${CONSENT_COOKIE}=granted;`))
  assert.match(c, /Path=\/; Max-Age=15552000; SameSite=Lax; Secure$/)
  assert.ok(!serializeConsent("denied", false).includes("Secure"))
})

test("consentimiento: por defecto todo denegado; aceptar habilita solo analítica", () => {
  assert.ok(Object.values(consentDenied).every((v) => v === "denied"))
  assert.equal(consentGranted.analytics_storage, "granted")
  assert.equal(consentGranted.ad_storage, "denied")
  assert.equal(consentGranted.ad_user_data, "denied")
  assert.equal(consentGranted.ad_personalization, "denied")
})

test("script de arranque: default denied antes que cualquier update, update solo con granted", () => {
  const d = consentBootScript.indexOf("'consent','default'")
  const u = consentBootScript.indexOf("'consent','update'")
  assert.ok(d >= 0 && u > d)
  assert.ok(consentBootScript.includes("kx_consent=granted"))
  assert.ok(!consentBootScript.includes("kx_consent=denied"))
})
