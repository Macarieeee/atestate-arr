import assert from "node:assert/strict";
import { createClient } from "@supabase/supabase-js";
import { loadEnv } from "vite";
import { readQuestionBanks } from "./question-bank-sources.mjs";

const env = loadEnv("development", process.cwd(), "VITE_");
const client = createClient(env.VITE_SUPABASE_URL, env.VITE_SUPABASE_PUBLISHABLE_KEY,
  { auth: { persistSession: false, autoRefreshToken: false } });
for (const { category, language, questions } of await readQuestionBanks()) {
  const rows = [];
  for (let offset = 0; ; ) {
    const { data, error, count } = await client.from("question_bank")
      .select("id,source_no,text,answers,correct,images", { count: "exact" })
      .eq("category", category).eq("language", language).order("id").range(offset, offset + 499);
    if (error) throw new Error(`${category}/${language}: ${error.message}`);
    if (!data.length) break;
    rows.push(...data);
    offset += data.length;
    if (offset >= count) break;
  }
  const expected = questions.map(q => ({ id: q.id, source_no: q.sourceNo, text: q.text,
    answers: q.answers, correct: q.correct, images: q.images ?? [] }));
  assert.deepEqual(rows, expected, `${category}/${language} differs from local source`);
  console.log(`${category}/${language}: ${rows.length} questions match, including answers and images.`);
}
console.log("All migrated questions verified through the public API.");
