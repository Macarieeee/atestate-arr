import { getSupabase } from "../lib/supabase";
import type { QuestionItem } from "./questionTypes";

export function getBankLanguage(atestat: string, language: string | null) {
  return (atestat === "sofer-taxi" || atestat === "sofer-inchiriere") && language === "en" ? "en" : "ro";
}

export async function getQuestionBank(atestat: string, language: string | null, signal?: AbortSignal): Promise<QuestionItem[]> {
  const client = getSupabase();
  const questions: QuestionItem[] = [];
  for (let offset = 0; ; ) {
    let query = client.from("question_bank")
      .select("id,source_no,text,answers,correct,images", { count: "exact" })
      .eq("category", atestat)
      .eq("language", getBankLanguage(atestat, language))
      .order("id")
      .range(offset, offset + 499);
    if (signal) query = query.abortSignal(signal);
    const { data, error, count } = await query;
    if (error) throw new Error(error.message);
    if (!data?.length) {
      if (count !== null && offset < count) throw new Error("Incomplete question bank response.");
      break;
    }
    for (const row of data) {
      if (!Array.isArray(row.answers) || row.answers.length < 2 ||
          !row.answers.some((answer) => answer.key === row.correct) ||
          !row.text || !Array.isArray(row.images)) {
        throw new Error("Invalid question bank data.");
      }
      questions.push({ id: row.id, sourceNo: row.source_no, text: row.text,
        answers: row.answers, correct: row.correct, images: row.images });
    }
    offset += data.length;
    if (count !== null && offset >= count) break;
  }
  if (!questions.length) throw new Error("Question bank is empty.");
  return questions;
}
