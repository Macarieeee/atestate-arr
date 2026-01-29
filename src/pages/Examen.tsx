import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

type ExamState = {
  atestat?: string;
  nume?: string;
  prenume?: string;
  cnp?: string;
};

type Question = {
  id: number; // 1..60
  text: string;
  answers: { key: "a" | "b" | "c" | "d"; text: string }[];
  correct: "a" | "b" | "c" | "d";
};

const TOTAL = 60;
const INITIAL_SECONDS = 60 * 60; // 60:00

function pad2(n: number) {
  return String(n).padStart(2, "0");
}
function formatHMS(totalSeconds: number) {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  return `${pad2(h)} : ${pad2(m)} : ${pad2(s)}`;
}

const demoQuestions: Question[] = [
  {
    id: 1,
    text: "Expirarea valabilitatii inspectiei tehnice periodice, se sanctioneaza prin:",
    answers: [
      {
        key: "a",
        text: "suspendarea pentru 1 – 3 luni a autorizatiei de transport in regim de taxi sau in regim de inchiriere, dupa caz, pana la efectuarea inspectiei tehnice periodice",
      },
      {
        key: "b",
        text: "anularea autorizatiei taxi sau a copiei conform a autorizatiei de transport, dupa caz",
      },
      {
        key: "c",
        text: "suspendarea pentru 1 – 3 luni a autorizatiei taxi sau a copiei conforme a autorizatiei de transport, dupa caz",
      },
      {
        key: "d",
        text: "retragerea autorizatiei taxi sau a copiei conform a autorizatiei de transport, dupa caz",
      },
    ],
    correct: "a",
  },
  {
    id: 2,
    text: "Ecusoanele care se elibereaza odata autorizatia taxi contin obligatoriu urmatorul inscris:",
    answers: [
      {
        key: "a",
        text: "numerele de circulatie ale autovehiculelor pentru care este valabila autorizatia taxi",
      },
      { key: "b", text: "denumirea transportatorului autorizat" },
      { key: "c", text: "termenul de valabilitate autorizatiei taxi" },
      { key: "d", text: "termenul de valabilitate al autorizatiei de transport" },
    ],
    correct: "b",
  },
];

export default function Examen() {
  const { state } = useLocation();
  const s = (state as ExamState) || {};

  const atestat = s.atestat || "Manager TAXI / inchiriere";
  const nume = s.nume || "NUME TEST";
  const prenume = s.prenume || "PRENUME TEST";
  const cnp = s.cnp || "1234455998877";

  const [secondsLeft, setSecondsLeft] = useState(INITIAL_SECONDS);

  const questionNumbers = useMemo(
    () => Array.from({ length: TOTAL }, (_, i) => i + 1),
    []
  );

  const questionsById = useMemo(() => {
    const map = new Map<number, Question>();
    demoQuestions.forEach((q) => map.set(q.id, q));
    return map;
  }, []);

  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selected, setSelected] = useState<"a" | "b" | "c" | "d" | null>(null);

  const [status, setStatus] = useState<
    Record<number, "unanswered" | "correct" | "wrong">
  >(() => {
    const init: Record<number, "unanswered" | "correct" | "wrong"> = {};
    for (let i = 1; i <= TOTAL; i++) init[i] = "unanswered";
    return init;
  });

  // NEW: info box după răspuns greșit
  const [lastWrongInfo, setLastWrongInfo] = useState<{
    qId: number;
    questionText: string;
    correctKey: "a" | "b" | "c" | "d";
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

  const current = questionsById.get(currentQuestion);

  const goToQuestion = (n: number) => {
    setCurrentQuestion(n);
  };

  const handleSave = () => {
    if (!selected) return;
    if (status[currentQuestion] !== "unanswered") return;

    const q = questionsById.get(currentQuestion);
    const correctKey = q?.correct;

    const isCorrect = correctKey ? selected === correctKey : false;

    // setează status
    setStatus((prev) => ({
      ...prev,
      [currentQuestion]: isCorrect ? "correct" : "wrong",
    }));

    // NEW: dacă e greșit, pregătește chenarul cu întrebarea + răspunsul corect
    if (!isCorrect && q && correctKey) {
      const correctAnswerText =
        q.answers.find((a) => a.key === correctKey)?.text || "";

      setLastWrongInfo({
        qId: q.id,
        questionText: q.text,
        correctKey,
        correctText: correctAnswerText,
      });
    } else {
      // dacă a fost corect, nu afișa chenar
      setLastWrongInfo(null);
    }

    // treci la următoarea întrebare
    if (currentQuestion < TOTAL) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleNext = () => {
    // aici nu schimbăm chenarul; el apare doar dacă ultimul răspuns salvat a fost greșit
    if (currentQuestion < TOTAL) setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className="min-h-screen w-full bg-white">
      <Navbar />

      <main className="px-8 pt-2">
        <div className="w-full max-w-[1100px] bg-[#e2e2e2]">
          {/* TOP BAR */}
          <div className="border-b border-[#bdbdbd] px-6 py-3">
            <div className="flex items-start justify-between gap-6">
              <div className="text-[14px] text-black">
                <div className="font-semibold">Total intrebari: {TOTAL}</div>
                <div className="font-semibold">Ramase: {remaining}</div>
                <div className="font-semibold">
                  Nr. intrebari corecte: {correctCount}
                </div>
                <div className="font-semibold">
                  Nr. intrebari gresite: {wrongCount}
                </div>
              </div>

              <div className="flex-1 px-6">
                <div className="grid grid-cols-11 gap-1">
                  {questionNumbers.map((n) => {
                    const st = status[n];
                    const base =
                      "h-[26px] border border-[#8f8f8f] text-[13px]";
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

              <div className="min-w-[170px] text-right">
                <div className="text-[14px] font-semibold text-black">
                  Timp ramas:
                </div>
                <div className="mt-1 text-[26px] font-bold text-[#0b5fa5]">
                  {formatHMS(secondsLeft)}
                </div>
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="px-6 py-6">
            <div className="flex items-start justify-between gap-6">
              <div>
                <h2 className="text-[30px] font-bold text-[#0b5fa5]">
                  {atestat}
                </h2>

                <div className="mt-1 text-[16px] font-bold text-red-600">
                  {nume} {prenume} [CNP: {cnp}]
                </div>

                <div className="mt-6 text-[18px] text-black">
                  <span className="font-semibold">Intrebarea nr. :</span>{" "}
                  <span className="font-semibold">{currentQuestion}</span>
                </div>
              </div>

              <button
                type="button"
                className="h-[72px] w-[240px] rounded-md bg-red-600 text-[20px] font-bold text-white"
              >
                Finalizare examen
              </button>
            </div>

            {/* NEW: CHENAR cu răspunsul corect (doar dacă ultimul răspuns salvat a fost greșit) */}
            {lastWrongInfo && (
              <div className="mt-6 border border-[#bdbdbd] bg-white px-4 py-4 text-black">
                <div className="flex items-start justify-between gap-4">
                  <div className="text-[16px] font-bold text-red-600">
                    Raspuns gresit la intrebarea {lastWrongInfo.qId}. Raspunsul
                    corect este:
                  </div>

                  <button
                    type="button"
                    onClick={() => setLastWrongInfo(null)}
                    className="h-[28px] w-[28px] border border-[#bdbdbd] bg-[#efefef] text-[16px] font-bold"
                    aria-label="Inchide"
                    title="Inchide"
                  >
                    ×
                  </button>
                </div>

                <div className="mt-3 text-[16px] font-semibold">
                  Intrebarea:
                </div>
                <div className="mt-1 text-[16px]">
                  {lastWrongInfo.questionText}
                </div>

                <div className="mt-3 text-[16px] font-semibold">
                  Raspuns corect ({lastWrongInfo.correctKey.toUpperCase()}):
                </div>
                <div className="mt-1 text-[16px]">
                  {lastWrongInfo.correctText}
                </div>
              </div>
            )}

            {/* ÎNTREBARE */}
            <div className="mt-6 border border-[#bdbdbd] bg-white px-4 py-3 text-[18px] text-black">
              {current?.text ||
                "Intrebare demo indisponibila (adauga intrebarea in lista)."}
            </div>

            <div className="mt-6 text-[18px] font-semibold text-black">
              Raspunsuri:
            </div>

            {/* RĂSPUNSURI */}
            <div className="mt-3 border border-[#bdbdbd] bg-white px-4 py-4">
              <div className="space-y-3 text-[16px] text-black">
                {(current?.answers || [
                  { key: "a", text: "Varianta A" },
                  { key: "b", text: "Varianta B" },
                  { key: "c", text: "Varianta C" },
                  { key: "d", text: "Varianta D" },
                ]).map((a) => (
                  <label key={a.key} className="flex gap-3">
                    <input
                      type="radio"
                      name="r"
                      className="mt-1"
                      checked={selected === a.key}
                      onChange={() => setSelected(a.key)}
                    />
                    <span>{a.text}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* BUTOANE */}
            <div className="mt-10 flex justify-between">
              <button
                type="button"
                onClick={handleNext}
                className="h-[80px] w-[260px] border border-[#bdbdbd] bg-[#d6d6d6] text-[18px] font-bold rounded-md shadow-[0_0_0_2px_#e7e7e7]"
              >
                Intrebarea urmatoare
              </button>

              <button
                type="button"
                onClick={handleSave}
                disabled={!selected || status[currentQuestion] !== "unanswered"}
                className={[
                  "h-[80px] w-[260px] border border-[#bdbdbd] text-[18px] font-bold rounded-md shadow-[0_0_0_2px_#e7e7e7]",
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
      </main>
    </div>
  );
}
