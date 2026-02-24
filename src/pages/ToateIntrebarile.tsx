import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { managerTaxiQuestions } from "../data/managerTaxiQuestions";
import { soferiInchiriereQuestions } from "../data/soferiInchiriereQuestions";

type AnswerKey = "a" | "b" | "c" | "d";

// Tip minim folosit de UI (evităm dependențe între fișierele de întrebări)
type QuestionItem = {
  text: string;
  answers: { key: AnswerKey; text: string }[];
  correct: AnswerKey;
};

export default function ToateIntrebarile() {
  const [searchParams] = useSearchParams();
  const atestat = searchParams.get("atestat") || "manager-taxi-inchiriere";

  // Ordinea din fișier (la rând)
  const questions = useMemo(() => {
    const key = (atestat || "").toLowerCase();

    const map: Record<string, unknown[]> = {
      "manager-taxi-inchiriere": managerTaxiQuestions as unknown[],
      "sofer-inchiriere": soferiInchiriereQuestions as unknown[],
    };

    return (map[key] || managerTaxiQuestions) as (QuestionItem & { correct: AnswerKey })[];
  }, [atestat]);

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<AnswerKey | null>(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    // când se schimbă tipul de atestat, resetăm progresul
    setIndex(0);
    setSelected(null);
    setChecked(false);
  }, [atestat]);

  const q = questions[index];

  const total = questions.length;
  const currentNo = index + 1;

  const onPrev = () => {
    if (index === 0) return;
    setIndex((p) => p - 1);
    setSelected(null);
    setChecked(false);
  };

  const onCheck = () => {
    if (!selected) return;
    setChecked(true);
  };

  const onNext = () => {
    if (index >= total - 1) return;
    setIndex((p) => p + 1);
    setSelected(null);
    setChecked(false);
  };

  const isCorrect = checked && selected && selected === q.correct;
  const isWrong = checked && selected && selected !== q.correct;

  const optionClass = (key: AnswerKey) => {
    // before checking
    if (!checked) {
      const base =
        "border border-[#bdbdbd] bg-white text-black hover:bg-[#f5f5f5]";
      const picked =
        selected === key ? "outline outline-2 outline-[#6aa9d8]" : "";
      return `${base} ${picked}`;
    }

    // after checking
    if (key === q.correct) {
      return "border border-green-600 bg-green-100 text-black";
    }
    if (selected === key && key !== q.correct) {
      return "border border-red-600 bg-red-100 text-black";
    }
    return "border border-[#bdbdbd] bg-white text-black opacity-80";
  };

  return (
    <div className="min-h-screen w-full bg-[#5aa9e6] flex items-center justify-center py-3">
      <div
        className="
          bg-[#f3f3f3] border border-[#8c8c8c] rounded-sm overflow-hidden
          w-[94vw] h-[92vh]
          md:w-[60vw] md:h-[90vh]
          flex flex-col
        "
      >
        <Navbar />

        <div className="flex-1 min-h-0 bg-[#e2e2e2] flex flex-col">
          {/* HEADER (fix) */}
          <div className="shrink-0 border-b border-[#bdbdbd] px-3 md:px-4 py-2">
            <div className="flex items-center justify-between gap-3">
              <div className="text-[12px] md:text-[13px] font-semibold text-black">
                Toate întrebările — {currentNo}/{total}
              </div>

              <div className="text-[11px] md:text-[12px] text-black">
                {checked ? (
                  isCorrect ? (
                    <span className="font-bold text-green-700">
                      Corect ✅
                    </span>
                  ) : isWrong ? (
                    <span className="font-bold text-red-700">
                      Greșit ❌
                    </span>
                  ) : null
                ) : (
                  <span className="opacity-80">Alege un răspuns și verifică</span>
                )}
              </div>
            </div>
          </div>

          {/* CONTENT (fills) */}
          <div className="flex-1 min-h-0 px-3 md:px-4 py-3">
            <div className="h-full flex flex-col gap-2">
              {/* ÎNTREBARE */}
              <div className="border border-[#bdbdbd] bg-white px-3 py-2 text-[12px] md:text-[14px] text-black leading-snug">
                {q?.text || "Întrebare indisponibilă."}
              </div>

              <div className="text-[12px] md:text-[13px] font-semibold text-black">
                Variante de răspuns:
              </div>

              {/* RĂSPUNSURI (umple restul, fără scroll) */}
              <div className="border border-[#bdbdbd] bg-white px-3 py-2 flex-1 min-h-0 overflow-hidden">
                <div className="space-y-2 text-[11px] md:text-[12px] text-black leading-snug">
                  {q.answers.map((a) => (
                    <button
                      key={a.key}
                      type="button"
                      disabled={checked}
                      onClick={() => setSelected(a.key)}
                      className={[
                        "w-full text-left rounded-md px-3 py-2 transition duration-300 ease-in-out",
                        optionClass(a.key),
                        checked ? "cursor-default" : "cursor-pointer",
                      ].join(" ")}
                    >
                      <span className="font-bold mr-2">
                        {a.key.toUpperCase()}.
                      </span>
                      {a.text}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* FOOTER (fix) */}
          <div className="shrink-0 px-3 md:px-4 pb-3">
            <div className="flex gap-3">
              {/* Întrebarea anterioară */}
              <button
                type="button"
                onClick={onPrev}
                disabled={index === 0}
                className={[
                  "h-[44px] md:h-[48px] w-1/3 border border-[#bdbdbd] font-bold rounded-md shadow-[0_0_0_2px_#e7e7e7] text-[12px] md:text-[13px] px-2 transition duration-300 ease-in-out",
                  index === 0
                    ? "bg-[#efefef] text-[#9a9a9a] cursor-not-allowed"
                    : "bg-[#d6d6d6] text-black",
                ].join(" ")}
              >
                Întrebarea anterioară
              </button>

              {/* Verifică răspuns */}
              {!checked && (
                <button
                  type="button"
                  onClick={onCheck}
                  disabled={!selected}
                  className={[
                    "h-[44px] md:h-[48px] w-2/3 border border-[#bdbdbd] font-bold rounded-md shadow-[0_0_0_2px_#e7e7e7] text-[12px] md:text-[13px] px-2 transition duration-300 ease-in-out",
                    !selected
                      ? "bg-[#efefef] text-[#9a9a9a] cursor-not-allowed"
                      : "bg-[#d6d6d6] text-black",
                  ].join(" ")}
                >
                  Verifică răspuns
                </button>
              )}

              {/* Întrebarea următoare (după verificare) */}
              {checked && (
                <button
                  type="button"
                  onClick={onNext}
                  disabled={index >= total - 1}
                  className={[
                    "h-[44px] md:h-[48px] w-2/3 border border-[#bdbdbd] font-bold rounded-md shadow-[0_0_0_2px_#e7e7e7] text-[12px] md:text-[13px] px-2 transition duration-300 ease-in-out",
                    index >= total - 1
                      ? "bg-[#efefef] text-[#9a9a9a] cursor-not-allowed"
                      : "bg-[#d6d6d6] text-black",
                  ].join(" ")}
                >
                  Întrebarea următoare
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
