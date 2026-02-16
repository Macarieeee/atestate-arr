import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

import {
  managerTaxiQuestions,
  pickRandomQuestions,
  type QuestionItem,
} from "../data/managerTaxiQuestions";

type ExamState = {
  atestat?: string;
  nume?: string;
  prenume?: string;
  cnp?: string;
};

type AnswerKey = "a" | "b" | "c" | "d";

const TOTAL = 60;
const INITIAL_SECONDS = 60 * 60;

function pad2(n: number) {
  return String(n).padStart(2, "0");
}

function formatHMS(totalSeconds: number) {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  return `${pad2(h)} : ${pad2(m)} : ${pad2(s)}`;
}

export default function Examen() {
  const { state } = useLocation();
  const s = (state as ExamState) || {};

  const atestat = s.atestat || "Manager TAXI / inchiriere";
  const nume = s.nume || "NUME TEST";
  const prenume = s.prenume || "PRENUME TEST";
  const cnp = s.cnp || "1234455998877";

  // ✅ pick random 60 la intrare (o singură dată)
  const selectedQuestions = useMemo(() => {
    const picked: QuestionItem[] = pickRandomQuestions(
      managerTaxiQuestions,
      TOTAL
    );

    return picked.map((q: QuestionItem, idx: number) => ({
      ...q,
      examNo: idx + 1, // 1..60 în examen
    }));
  }, []);

  const [secondsLeft, setSecondsLeft] = useState(INITIAL_SECONDS);

  const questionNumbers = useMemo(
    () => Array.from({ length: TOTAL }, (_, i) => i + 1),
    []
  );

  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selected, setSelected] = useState<AnswerKey | null>(null);

  const [status, setStatus] = useState<
    Record<number, "unanswered" | "correct" | "wrong">
  >(() => {
    const init: Record<number, "unanswered" | "correct" | "wrong"> = {};
    for (let i = 1; i <= TOTAL; i++) init[i] = "unanswered";
    return init;
  });

  const [wrongOverlay, setWrongOverlay] = useState<{
    qId: number;
    questionText: string;
    correctKey: AnswerKey;
    correctText: string;
  } | null>(null);

  const correctCount = useMemo(
    () => Object.values(status).filter((v) => v === "correct").length,
    [status]
  );

  const wrongCount = useMemo(
    () => Object.values(status).filter((v) => v === "wrong").length,
    [status]
  );

  const remaining = useMemo(
    () => Object.values(status).filter((v) => v === "unanswered").length,
    [status]
  );

  useEffect(() => {
    const id = window.setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    setSelected(null);
  }, [currentQuestion]);

  const current =
    selectedQuestions[currentQuestion - 1] as
      | (QuestionItem & { examNo: number })
      | undefined;

  const answers = current?.answers ?? [];

  const goToQuestion = (n: number) => {
    if (n < 1 || n > TOTAL) return;
    setCurrentQuestion(n);
  };

  const handleSave = () => {
    if (!selected) return;
    if (status[currentQuestion] !== "unanswered") return;

    const q = current;
const correctKey = q?.correct;
const isCorrect = selected === correctKey;
    setStatus((prev) => ({
      ...prev,
      [currentQuestion]: isCorrect ? "correct" : "wrong",
    }));

    if (!isCorrect && q && correctKey) {
      const correctAnswerText =
        q.answers.find((a) => a.key === correctKey)?.text || "";

      setWrongOverlay({
        qId: q.examNo,
        questionText: q.text,
        correctKey,
        correctText: correctAnswerText,
      });
    } else {
      setWrongOverlay(null);
    }

    if (currentQuestion < TOTAL) setCurrentQuestion(currentQuestion + 1);
  };

  const handleNext = () => {
    if (currentQuestion < TOTAL) setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className="min-h-screen w-full bg-[#5aa9e6] flex items-center justify-center py-3">
      {/* CONTAINER PRINCIPAL */}
      <div
        className="
          bg-[#f3f3f3] border border-[#8c8c8c] rounded-sm overflow-hidden
          w-[94vw] h-[92vh]
          md:w-[60vw] md:h-[90vh]
          flex flex-col
        "
      >
        <Navbar />

        {/* BODY */}
        <div className="flex-1 min-h-0 bg-[#ffffff] flex flex-col relative">
          {/* OVERLAY răspuns greșit (doar dacă există barem) */}
          {wrongOverlay && (
            <div className="absolute z-20 left-2 right-2 top-2 md:left-4 md:right-4 md:top-3">
              <div className="border border-[#bdbdbd] bg-white px-3 py-2 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <div className="text-[12px] md:text-[13px] font-bold text-red-600 leading-tight">
                    Raspuns gresit la intrebarea {wrongOverlay.qId}. Raspuns
                    corect:
                    <span className="ml-2 text-black font-bold">
                      ({wrongOverlay.correctKey.toUpperCase()})
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setWrongOverlay(null)}
                    className="h-[22px] w-[22px] border border-[#bdbdbd] bg-[#efefef] text-[14px] font-bold leading-none"
                    title="Inchide"
                    aria-label="Inchide"
                  >
                    ×
                  </button>
                </div>

                <div className="mt-1 text-[12px] md:text-[13px] text-black leading-snug">
                  {wrongOverlay.correctText}
                </div>
              </div>
            </div>
          )}

          {/* HEADER */}
          <div className="shrink-0 border-b border-[#bdbdbd] px-3 md:px-4 py-2 pt-3 md:pt-3">
            <div className="grid grid-cols-1 md:grid-cols-[220px_1fr_170px] gap-2 md:gap-4 items-start">
              <div className="text-[11px] md:text-[12px] text-black leading-tight">
                <div className="font-semibold">Total intrebari: {TOTAL}</div>
                <div className="font-semibold">Ramase: {remaining}</div>
                <div className="font-semibold">Corecte: {correctCount}</div>
                <div className="font-semibold">Gresite: {wrongCount}</div>
              </div>

              <div>
                <div className="grid grid-cols-10 md:grid-cols-12 gap-[3px]">
                  {questionNumbers.map((n) => {
                    const st = status[n];
                    const base =
                      "h-[18px] md:h-[20px] border border-[#8f8f8f] text-[10px] md:text-[11px] leading-none";
                    const bg =
                      st === "wrong"
                        ? "bg-red-600 text-white"
                        : st === "correct"
                        ? "bg-[#5cb85c] text-white"
                        : "bg-[#efefef] text-black";
                    const active =
                      n === currentQuestion
                        ? "outline outline-2 outline-[#6aa9d8]"
                        : "";

                    return (
                      <button
                        key={n}
                        type="button"
                        onClick={() => goToQuestion(n)}
                        className={[base, bg, active].join(" ")}
                      >
                        {n}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="text-left md:text-right">
                <div className="text-[11px] md:text-[12px] font-semibold text-black">
                  Timp ramas:
                </div>
                <div className="mt-1 text-[18px] md:text-[20px] font-bold text-[#0b5fa5] leading-none">
                  {formatHMS(secondsLeft)}
                </div>
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="flex-1 min-h-0 px-3 md:px-4 py-3">
            <div className="h-full flex flex-col gap-2">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h2 className="text-[18px] md:text-[22px] font-bold text-[#0b5fa5] leading-tight">
                    {atestat}
                  </h2>

                  <div className="mt-1 text-[11px] md:text-[12px] font-bold text-red-600 leading-tight">
                    {nume} {prenume} [CNP: {cnp}]
                  </div>

                  <div className="mt-2 text-[12px] md:text-[13px] text-black">
                    <span className="font-semibold">Intrebarea nr. :</span>{" "}
                    <span className="font-semibold">{currentQuestion}</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="shrink-0 h-[40px] md:h-[46px] w-[180px] md:w-[200px] rounded-md bg-red-600 text-[12px] md:text-[14px] font-bold text-white"
                >
                  Finalizare examen
                </button>
              </div>

              {/* ÎNTREBARE */}
              <div className="border-2 border-[#777777] rounded-[4px] bg-[#E2E2E2] px-3 py-2 text-[12px] md:text-[14px] text-black leading-snug !font-normal">
  {current?.text || "Intrebare indisponibila."}
</div>

              <div className="text-[12px] md:text-[13px] text-black">
                Raspunsuri:
              </div>

              {/* RĂSPUNSURI */}
             <div className="border-2 border-[#777777] rounded-[4px] bg-[#E2E2E2] px-3 py-2 h-auto">
                <div className="space-y-2 text-[11px] md:text-[12px] text-black leading-snug">
                  {answers.map((a) => (
                    <label key={a.key} className="flex gap-2">
                      <input
                        type="radio"
                        name="r"
                        className="mt-[2px]"
                        checked={selected === a.key}
                        onChange={() => setSelected(a.key)}
                      />
                      <span>{a.text}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* FOOTER */}
          <div className="shrink-0 px-3 md:px-4 pb-3">
            <div className="flex gap-3">
              <button
                type="button"
                onClick={handleNext}
                className="h-[44px] md:h-[48px] w-1/2 border border-[#bdbdbd] bg-[#d6d6d6] text-[12px] md:text-[13px] font-bold rounded-md shadow-[0_0_0_2px_#e7e7e7] leading-tight px-2"
              >
                Intrebarea urmatoare
              </button>

              <button
                type="button"
                onClick={handleSave}
                disabled={!selected || status[currentQuestion] !== "unanswered"}
                className={[
                  "h-[44px] md:h-[48px] w-1/2 border border-[#bdbdbd] text-[12px] md:text-[13px] font-bold rounded-md shadow-[0_0_0_2px_#e7e7e7] leading-tight px-2",
                  !selected || status[currentQuestion] !== "unanswered"
                    ? "bg-[#efefef] text-[#9a9a9a] cursor-not-allowed"
                    : "bg-[#d6d6d6] text-black",
                ].join(" ")}
              >
                Salvare raspuns
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
