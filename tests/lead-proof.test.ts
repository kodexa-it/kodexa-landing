import { test } from "node:test"
import assert from "node:assert/strict"

import { signProof, verifyProof, PROOF_TTL_SECONDS } from "../lib/lead-proof.ts"

// La clave se lee al firmar/verificar (no al importar), así que se puede fijar acá.
process.env.FORMINIT_API_KEY = "test-key"

test("prueba de envío: válida, vencida, manipulada y ausente", () => {
  const now = Date.now()
  const p = signProof(now)!
  assert.ok(verifyProof(p, now + 1000))
  assert.equal(verifyProof(p, now + (PROOF_TTL_SECONDS + 1) * 1000), false) // vencida
  assert.equal(verifyProof(p, now - 5000), false) // del futuro
  const [ts, sig] = p.split(".")
  assert.equal(verifyProof(`${Number(ts) + 1}.${sig}`, now), false) // timestamp alterado
  assert.equal(verifyProof(`${ts}.${sig.slice(0, -2)}xx`, now), false) // firma alterada
  assert.equal(verifyProof(undefined, now), false)
  assert.equal(verifyProof("basura", now), false)
})

test("sin clave configurada no se emite ni se acepta nada", () => {
  const saved = process.env.FORMINIT_API_KEY
  delete process.env.FORMINIT_API_KEY
  delete process.env.LEAD_PROOF_SECRET
  assert.equal(signProof(), null)
  assert.equal(verifyProof("1700000000000.abc"), false)
  process.env.FORMINIT_API_KEY = saved
})
