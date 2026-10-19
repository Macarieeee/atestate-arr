import { useEffect, useMemo, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

import {
  managerTaxiQuestions,
  pickRandomQuestions,
  type QuestionItem,
} from "../data/managerTaxiQuestions";

import { getQuestionBank } from "../data/questionBanks";
import { soferiTaxiQuestions } from "../data/soferiTaxiQuestions";
import { soferiInchiriereQuestions } from "../data/soferiInchiriereQuestions";

type ExamState = {
  atestat?: string;
  nume?: string;
  prenume?: string;
  cnp?: string;
};

type AnswerKey = "a" | "b" | "c" | "d";

const examConfigs = {
  "sofer-taxi": {
    title: "Șofer TAXI",
    total: 20,
    seconds: 20 * 60,
    bank: soferiTaxiQuestions,
  },
  "manager-taxi-inchiriere": {
    title: "Manager TAXI / Închiriere",
    total: 60,
    seconds: 60 * 60,
    bank: managerTaxiQuestions,
  },
  "sofer-inchiriere": {
    title: "Șofer Închiriere",
    total: 20,
    seconds: 20 * 60,
    bank: soferiInchiriereQuestions,
  },
};

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
const [searchParams] = useSearchParams();
const s = (state as ExamState) || {};

const atestatFromUrl = searchParams.get("atestat");
const examKey = atestatFromUrl === "sofer-taxi" || atestatFromUrl === "sofer-inchiriere" || atestatFromUrl === "manager-taxi-inchiriere"
  ? atestatFromUrl
  : s.atestat === "Sofer TAXI" || s.atestat === "Șofer TAXI"
    ? "sofer-taxi"
    : s.atestat === "Sofer Inchiriere" || s.atestat === "Șofer Închiriere"
    ? "sofer-inchiriere"
    : "manager-taxi-inchiriere";

const language = searchParams.get("limba") === "en" ? "en" : "ro";
const config = { ...examConfigs[examKey], bank: getQuestionBank(examKey, language) };
return <ExamSession key={`${examKey}-${language}`} config={config} candidate={s} />;
}

function ExamSession({ config, candidate: s }: {
  config: (typeof examConfigs)[keyof typeof examConfigs];
  candidate: ExamState;
}) {
  const { title: atestat, total: TOTAL, seconds: INITIAL_SECONDS, bank } = config;
  const nume = s.nume || "NUME TEST";
  const prenume = s.prenume || "PRENUME TEST";
  const cnp = s.cnp || "1234455998877";

  // Selectăm întrebări aleatorii din setul categoriei la începutul testului.
const selectedQuestions = useMemo(() => {
  const picked: QuestionItem[] = pickRandomQuestions(bank, TOTAL);

  return picked.map((q: QuestionItem, idx: number) => ({
    ...q,
    examNo: idx + 1,
  }));
}, [bank, TOTAL]);

  const [secondsLeft, setSecondsLeft] = useState(INITIAL_SECONDS);

  const questionNumbers = useMemo(
    () => Array.from({ length: TOTAL }, (_, i) => i + 1),
    [TOTAL]
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


  const current =
    selectedQuestions[currentQuestion - 1] as
      | (QuestionItem & { examNo: number })
      | undefined;

  const answers = current?.answers ?? [];

  const goToQuestion = (n: number) => {
    if (n < 1 || n > TOTAL) return;
    if (n !== currentQuestion) setSelected(null);
    setCurrentQuestion(n);
  };

  const handleSave = () => {
 if (!selected || secondsLeft === 0) return;
  if (status[currentQuestion] !== "unanswered") return;

  const ok = window.confirm(
    "Salvam raspunsul dat ? Dupa salvare nu veti mai putea accesa aceasta intrebare."
  );
  if (!ok) return;

  const q = current;
  const correctKey = q?.correct;
  const isCorrect = selected === correctKey;

  setStatus((prev) => ({
    ...prev,
    [currentQuestion]: isCorrect ? "correct" : "wrong",
  }));

    if (currentQuestion < TOTAL) {
      setSelected(null);
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < TOTAL) {
      setSelected(null);
      setCurrentQuestion(currentQuestion + 1);
    }
  };

return (
  <div className="min-h-screen w-full bg-[#5aa9e6] flex items-center justify-center py-3">
    {/* CONTAINER PRINCIPAL */}
    <div
      className="
        bg-[#f3f3f3] border border-[#8c8c8c] rounded-sm
        w-[94vw] h-[92vh]
        lg:w-[60vw] lg:h-[90vh]
        overflow-y-auto
      "
    >

      <div className="relative flex min-h-full flex-col bg-[#ffffff]">

        {/* HEADER */}
        <div className="border-b border-[#bdbdbd] px-3 md:px-4 py-2 pt-3 md:pt-3">
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_170px] gap-2 lg:gap-4 items-start">
            <div className="text-[11px] md:text-[12px] text-black leading-tight">
              <div className="font-semibold">Total intrebari: {TOTAL}</div>
              <div className="font-semibold">Ramase: {remaining}</div>
              <div className="font-semibold">Corecte: {correctCount}</div>
              <div className="font-semibold">Gresite: {wrongCount}</div>
            </div>

            <div>
              <div className="grid grid-cols-10 lg:grid-cols-12 gap-[3px]">
                {questionNumbers.map((n) => {
                  const st = status[n];
                  const base =
                    "h-[18px] lg:h-[20px] border border-[#8f8f8f] text-[10px] lg:text-[11px] leading-none";
                  const bg =
                    st === "wrong"
                      ? "bg-red-600 text-white"
                      : st === "correct"
                      ? "bg-[#5cb85c] text-white"
                      : "bg-[#efefef] text-black";
                  const active =
                    n === currentQuestion ? "outline outline-2 outline-[#6aa9d8]" : "";

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

            <div className="text-left lg:text-right">
              <div className="text-[11px] lg:text-[12px] font-semibold text-black">
                Timp ramas:
              </div>
              <div className="mt-1 text-[18px] lg:text-[20px] font-bold text-[#0b5fa5] leading-none">
                {formatHMS(secondsLeft)}
                {secondsLeft === 0 && <p role="status" className="mt-2 text-sm text-red-600">Timpul a expirat.</p>}
              </div>
            </div>
          </div>
        </div>

        {/* CONTENT (curge normal, NU flex-1, NU overflow) */}
        <div className="px-3 md:px-4 py-3">
          <div className="flex flex-col gap-2">
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

            </div>

            {/* ÎNTREBARE */}
            <div className="border-2 border-[#777777] rounded-[4px] bg-[#E2E2E2] px-3 py-2 text-[12px] md:text-[14px] text-black leading-snug !font-normal">
              {current?.text || "Intrebare indisponibila."}
            </div>

            <div className="text-[12px] md:text-[13px] text-black">Raspunsuri:</div>

            {/* RĂSPUNSURI */}
            <div className="border-2 border-[#777777] rounded-[4px] bg-[#E2E2E2] px-3 py-2 h-auto">
              <div className="space-y-2 text-[11px] md:text-[12px] text-black leading-snug">
                {answers.map((a) => (
                  <label key={a.key} className="flex gap-2">
                    <input
                      type="radio"
                      name="r"
                      className="mt-[2px]"
                      disabled={secondsLeft === 0 || status[currentQuestion] !== "unanswered"}
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

        {/* FOOTER (ultima sectiune din pagina, ajungi la el prin scroll) */}
        <div className="flex flex-1 flex-col px-3 md:px-4 pb-3 pt-2 border-t border-[#bdbdbd] bg-[#f3f3f3]">
          <div className="flex gap-4">
            <button
              onClick={handleNext}
              className="flex-1 bg-[#d9d9d9] border border-[#9c9c9c] rounded-lg py-3 text-black font-semibold hover:bg-[#cfcfcf] transition"
            >
              Intrebarea urmatoare
            </button>

            <button
              onClick={handleSave}
              disabled={!selected || secondsLeft === 0 || status[currentQuestion] !== "unanswered"}
              className={`flex-1 rounded-lg py-3 font-semibold transition ${
                selected
                  ? "bg-[#d9d9d9] border border-[#9c9c9c] text-black hover:bg-[#cfcfcf]"
                  : "bg-[#e5e5e5] border border-[#c5c5c5] text-gray-400 cursor-not-allowed"
              }`}
            >
              Salvare raspuns
            </button>
          </div>
          <div className="mt-auto flex justify-end pt-6">
            <button
              type="button"
              className={`h-[40px] w-[180px] rounded-md text-[12px] font-bold text-white transition-colors md:h-[46px] md:w-[200px] md:text-[14px] ${
                correctCount >= 14 ? "bg-green-600" : "bg-red-600"
              }`}
            >
              Finalizare examen
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}
