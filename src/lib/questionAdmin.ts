import { getSupabase } from "./supabase";
import type { QuestionItem } from "../data/questionTypes";

export const ADMIN_USER_ID = "ee76fecc-6cd2-4568-b73f-24276961ae14";
export type AdminQuestion = QuestionItem & { revision: number };
export const adminBanks = [
  { category: "ca-marfa", language: "ro", title: "CA Marfă · Română" },
  { category: "manager-taxi-inchiriere", language: "ro", title: "Manager TAXI / Închiriere · Română" },
  { category: "sofer-taxi", language: "ro", title: "Șofer TAXI · Română" },
  { category: "sofer-taxi", language: "en", title: "Șofer TAXI · Engleză" },
  { category: "sofer-inchiriere", language: "ro", title: "Șofer Închiriere · Română" },
  { category: "sofer-inchiriere", language: "en", title: "Șofer Închiriere · Engleză" },
];

export function questionChanges(question: QuestionItem) {
  const text = question.text.trim();
  const answers = question.answers.map(a => ({ key: a.key, text: a.text.trim() }));
  if (!text || answers.length < 2 || answers.length > 4 || answers.some(a => !a.text || !/^[a-d]$/.test(a.key)) ||
      new Set(answers.map(a => a.key)).size !== answers.length || !answers.some(a => a.key === question.correct)) {
    throw new Error("Completează întrebarea, toate variantele și selectează un răspuns corect.");
  }
  return { text, answers, correct: question.correct };
}

export async function loadAdminQuestions(category: string, language: string, signal: AbortSignal): Promise<AdminQuestion[]> {
  const questions: AdminQuestion[] = [];
  for (let offset = 0; ; ) {
    const { data, error, count } = await getSupabase().from("question_bank")
      .select("id,source_no,text,answers,correct,images,revision", { count: "exact" })
      .eq("category", category).eq("language", language).order("id").range(offset, offset + 499).abortSignal(signal);
    if (error) throw new Error(error.message);
    if (!data.length) {
      if (count !== null && offset < count) throw new Error("Încărcare incompletă.");
      break;
    }
    questions.push(...data.map(row => ({ id: row.id, sourceNo: row.source_no, text: row.text,
      answers: row.answers, correct: row.correct, images: row.images, revision: row.revision })));
    offset += data.length;
    if (count !== null && offset >= count) break;
  }
  return questions;
}

export async function saveAdminQuestion(category: string, language: string, question: AdminQuestion): Promise<AdminQuestion> {
  const { data, error } = await getSupabase().from("question_bank").update(questionChanges(question))
    .eq("category", category).eq("language", language).eq("id", question.id).eq("revision", question.revision)
    .select("id,source_no,text,answers,correct,images,revision").maybeSingle();
  if (error) throw new Error("Salvarea a eșuat. Verifică conexiunea și sesiunea, apoi reîncearcă.");
  if (!data) throw new Error("Întrebarea a fost modificată în altă sesiune sau nu mai ai acces. Copiază modificările și reîncarcă pagina.");
  return { id: data.id, sourceNo: data.source_no, text: data.text, answers: data.answers,
    correct: data.correct, images: data.images, revision: data.revision };
}
