import { test } from "node:test"
import assert from "node:assert/strict"
import { readdirSync, readFileSync } from "node:fs"

const dir = (l: string) => new URL(`../messages/${l}/`, import.meta.url)
const files = (l: string) => readdirSync(dir(l)).filter((f) => f.endsWith(".json")).sort()

function flat(v: unknown, prefix = ""): Record<string, unknown> {
  if (Array.isArray(v)) return v.reduce<Record<string, unknown>>((a, x, i) => ({ ...a, ...flat(x, `${prefix}[${i}]`) }), {})
  if (v && typeof v === "object") return Object.entries(v).reduce<Record<string, unknown>>((a, [k, x]) => ({ ...a, ...flat(x, prefix ? `${prefix}.${k}` : k) }), {})
  return { [prefix]: v }
}

test("es y en tienen los mismos namespaces", () => {
  assert.deepEqual(files("es"), files("en"))
})

for (const f of files("es")) {
  test(`paridad de claves: ${f}`, () => {
    const es = flat(JSON.parse(readFileSync(new URL(f, dir("es")), "utf8")))
    const en = flat(JSON.parse(readFileSync(new URL(f, dir("en")), "utf8")))
    assert.deepEqual(Object.keys(en).sort(), Object.keys(es).sort())
    for (const [k, v] of [...Object.entries(es), ...Object.entries(en)]) {
      assert.ok(typeof v !== "string" || v.trim() !== "" || k === "hero.titleAfter", `valor vacío en ${f}: ${k}`)
    }
  })
}
