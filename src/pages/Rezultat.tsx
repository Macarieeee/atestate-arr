import type { QuestionItem } from "../data/managerTaxiQuestions";
import { getExamResult, type SavedAnswers } from "../examResult";
import { useUiLanguage } from "../uiLanguage";
import { Link } from "react-router-dom";

export default function Rezultat({ title, questions, answers, passMark, timedOut }: {
  title: string;
  questions: QuestionItem[];
  answers: SavedAnswers;
  passMark: number;
  timedOut: boolean;
}) {
  const { t } = useUiLanguage();
  const result = getExamResult(questions, answers, passMark);

  return (
    <main className="min-h-screen bg-[#5aa9e6] px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-4xl rounded-xl bg-white p-5 shadow-xl sm:p-8">
        <p className="text-center text-lg font-semibold text-[#083b66]">{t(title)}</p>
        <h1 className={`mt-4 text-center text-4xl font-extrabold sm:text-5xl ${result.passed ? "text-green-700" : "text-red-700"}`}>
          {t(result.passed ? "ADMIS" : "RESPINS")}
        </h1>
        <p className="mt-4 text-center text-2xl font-bold text-slate-900">
          {t("Răspunsuri corecte:")} {result.correct}/{result.total}
        </p>
        {timedOut && <p className="mt-3 text-center text-slate-700">{t("Timpul a expirat.")}</p>}

        <section className="mt-8" aria-labelledby="review-heading">
          <h2 id="review-heading" className="text-xl font-bold text-[#083b66]">
            {t("Întrebări greșite sau fără răspuns")}
          </h2>
          {result.mistakes.length === 0 ? (
            <p className="mt-4 text-green-700">{t("Ai răspuns corect la toate întrebările.")}</p>
          ) : (
            <ol className="mt-4 space-y-5">
              {result.mistakes.map(({ question, number, selected }) => {
                return (
                  <li key={number} className="rounded-lg border border-slate-300 p-4">
                    <h3 className="font-semibold text-slate-900">{number}. {question.text}</h3>
                    {!selected && (
                      <p className="mt-3 text-red-700">
                        <strong>{t("Răspunsul tău:")}</strong> {t("Fără răspuns")}
                      </p>
                    )}
                    <ul className="mt-3 space-y-2">
                      {question.answers.map((answer) => {
                        const isCorrect = answer.key === question.correct;
                        const isSelected = answer.key === selected;
                        return (
                          <li
                            key={answer.key}
                            className={`rounded-md border p-3 ${
                              isCorrect
                                ? "border-green-600 bg-green-50 text-green-800"
                                : isSelected
                                  ? "border-red-600 bg-red-50 text-red-800"
                                  : "border-slate-200 text-slate-700"
                            }`}
                          >
                            {isCorrect && <strong className="block">{t("Răspunsul corect:")}</strong>}
                            {isSelected && <strong className="block">{t("Răspunsul tău:")}</strong>}
                            {answer.key.toUpperCase()}. {answer.text}
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}
            </ol>
          )}
        </section>
        <div className="mt-8 flex justify-center">
          <Link
            to="/"
            className="rounded-lg bg-[#083b66] px-6 py-3 text-center font-semibold text-white hover:bg-[#0b5fa5] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#083b66]"
          >
            {t("Înapoi la pagina principală")}
          </Link>
        </div>
      </div>
    </main>
  );
}
