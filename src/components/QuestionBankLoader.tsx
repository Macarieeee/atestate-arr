import { useEffect, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { getQuestionBank } from "../data/questionBanks";
import type { QuestionItem } from "../data/questionTypes";

export default function QuestionBankLoader({ category, language, minimum = 1, children }: {
  category: string;
  language: string;
  minimum?: number;
  children: (questions: QuestionItem[]) => ReactNode;
}) {
  const [questions, setQuestions] = useState<QuestionItem[] | null>(null);
  const [error, setError] = useState(false);
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    const controller = new AbortController();
    getQuestionBank(category, language, controller.signal).then((bank) => {
      if (controller.signal.aborted) return;
      if (bank.length < minimum) throw new Error("Insufficient questions for this exam.");
      setQuestions(bank);
    }).catch((reason: unknown) => {
      if (controller.signal.aborted) return;
      console.error("Could not load Supabase question bank:", reason);
      setError(true);
    });
    return () => controller.abort();
  }, [category, language, minimum, attempt]);

  if (questions) return children(questions);
  const english = language === "en";
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#5aa9e6] p-6">
      <div className="max-w-lg rounded-xl bg-white p-8 text-center text-[#083b66] shadow-xl">
        <p role={error ? "alert" : "status"}>
          {error
            ? english ? "Questions could not be loaded. Please try again." : "Întrebările nu au putut fi încărcate. Încearcă din nou."
            : english ? "Loading questions…" : "Se încarcă întrebările…"}
        </p>
        {error && <button className="mt-5 rounded bg-[#083b66] px-5 py-3 text-white" onClick={() => { setError(false); setAttempt((value) => value + 1); }}>
          {english ? "Try again" : "Reîncearcă"}
        </button>}
        <Link to="/" className="mt-5 block underline">{english ? "Back to home" : "Înapoi la pagina principală"}</Link>
      </div>
    </main>
  );
}
