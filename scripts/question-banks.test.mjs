import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import test from "node:test";
import ts from "typescript";
import { readQuestionBanks } from "./question-bank-sources.mjs";

// Substitute only the network dependency; execute the real loader implementation.
const source = readFileSync(new URL("../src/data/questionBanks.ts", import.meta.url), "utf8")
  .replace('import { getSupabase } from "../lib/supabase";', 'const getSupabase = () => globalThis.questionBankTestClient;');
const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext } });
const { getQuestionBank, getBankLanguage } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`);

function mockClient(pages) {
  const calls = [];
  globalThis.questionBankTestClient = { from(table) {
    const call = { table, filters: {} }; calls.push(call);
    const query = {
      select() { return query; },
      eq(key, value) { call.filters[key] = value; return query; },
      order(key) { call.order = key; return query; },
      range(start, end) { call.range = [start, end]; return query; },
      abortSignal(signal) { call.signal = signal; return query; },
      then(resolve, reject) { return Promise.resolve(pages.shift()).then(resolve, reject); },
    };
    return query;
  } };
  return calls;
}
const row = id => ({ id, source_no: "001", text: `Question ${id}`, answers: [{ key: "a", text: "Yes" }, { key: "b", text: "No" }], correct: "b", images: [] });

test("all six source banks retain unique IDs and valid illustrations", async () => {
  const banks = await readQuestionBanks();
  assert.equal(banks.length, 6);
  assert.equal(banks.reduce((sum, b) => sum + b.questions.length, 0), 1313);
  for (const bank of banks) for (const q of bank.questions) for (const path of q.images ?? []) {
    assert.ok(existsSync(new URL(`../public/${path}`, import.meta.url)));
  }
});
test("pagination follows server count even when server returns fewer than 500 rows", async () => {
  const calls = mockClient([{ data: [row(1)], count: 2 }, { data: [row(2)], count: 2 }]);
  const signal = new AbortController().signal;
  const result = await getQuestionBank("sofer-taxi", "en", signal);
  assert.deepEqual(result.map(q => q.id), [1, 2]);
  assert.equal(result[0].sourceNo, "001");
  assert.deepEqual(calls.map(c => c.range), [[0, 499], [1, 500]]);
  assert.deepEqual(calls[0].filters, { category: "sofer-taxi", language: "en" });
  assert.equal(calls[0].order, "id");
  assert.equal(calls[0].signal, signal);
});
test("Romanian-only categories cannot request a missing English bank", () => {
  assert.equal(getBankLanguage("ca-marfa", "en"), "ro");
  assert.equal(getBankLanguage("manager-taxi-inchiriere", "en"), "ro");
  assert.equal(getBankLanguage("sofer-inchiriere", "en"), "en");
});
test("empty, failed and incomplete responses fail rather than start an exam", async () => {
  for (const pages of [
    [{ data: [], count: 0 }],
    [{ data: null, error: { message: "Database unavailable" } }],
    [{ data: [row(1)], count: 2 }, { data: [], count: 2 }],
    [{ data: [{ ...row(1), correct: "c" }], count: 1 }],
  ]) {
    mockClient(pages);
    await assert.rejects(getQuestionBank("ca-marfa", "ro"));
  }
});
