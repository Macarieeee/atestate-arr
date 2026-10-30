import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import ts from "typescript";

const source = readFileSync(new URL("../src/lib/questionAdmin.ts", import.meta.url), "utf8")
  .replace('import { getSupabase } from "./supabase";', 'const getSupabase = () => globalThis.adminTestClient;');
const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext } });
const { questionChanges, saveAdminQuestion } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`);
const question = { id: 1, sourceNo: "001", revision: 3, text: " Question ", answers: [{ key: "a", text: " First " }, { key: "b", text: "Second" }], correct: "a" };
test("validates content and only sends editable fields", () => {
  assert.deepEqual(questionChanges(question), { text: "Question", answers: [{ key: "a", text: "First" }, { key: "b", text: "Second" }], correct: "a" });
  for (const invalid of [{ ...question, text: " " }, { ...question, correct: "c" }, { ...question, answers: [question.answers[0], question.answers[0]] }, { ...question, answers: [{ key: "a", text: " " }, question.answers[1]] }]) {
    assert.throws(() => questionChanges(invalid));
  }
});
test("save scopes updates by category, language, ID and revision and rejects zero updates", async () => {
  const filters = {};
  let payload;
  const query = { update(value) { payload = value; return query; }, eq(key, value) { filters[key] = value; return query; }, select() { return query; }, maybeSingle() { return Promise.resolve({ data: null, error: null }); } };
  globalThis.adminTestClient = { from(table) { assert.equal(table, "question_bank"); return query; } };
  await assert.rejects(saveAdminQuestion("sofer-taxi", "en", question), /altă sesiune/);
  assert.deepEqual(filters, { category: "sofer-taxi", language: "en", id: 1, revision: 3 });
  assert.deepEqual(Object.keys(payload).sort(), ["answers", "correct", "text"]);
});
