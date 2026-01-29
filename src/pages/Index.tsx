import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Index() {
    const navigate = useNavigate();
  const [generatedCode, setGeneratedCode] = useState<string | null>(null);
  const [candidateCode, setCandidateCode] = useState("");

  const isValid = useMemo(() => {
    if (!generatedCode) return false;
    return candidateCode.trim() === generatedCode;
  }, [candidateCode, generatedCode]);

  const handleGenerate = () => {
    // cod 8 cifre (ca în exemplu)
    const code = String(Math.floor(10000000 + Math.random() * 90000000));
    setGeneratedCode(code);
  };

  return (
    <div className="min-h-screen w-full bg-white">
      <Navbar />

      <main className="px-8 pt-6">
        <h1 className="text-[28px] font-bold text-[#0b5fa5]">
          Selectie candidat
        </h1>

        {/* CARD INFO */}
        <section className="mt-4 w-full max-w-[1100px] border border-[#8c8c8c] bg-[#e6e6e6] px-6 py-4">
          <div className="grid grid-cols-[200px_1fr] gap-y-2 text-[16px] text-black">
            <div className="font-bold">Utilizator</div>
            <div className="font-bold">
              Autoritatea Rutiera Romana - A.R.R.
            </div>

            <div className="font-bold">Institut</div>
            <div className="font-bold">
              Autoritatea Rutiera Romana - A.R.R.
            </div>

            <div className="font-bold">Judet</div>
            <div className="font-bold">BUCURESTI</div>

            <div className="font-bold">Localitate</div>
            <div className="font-bold">BUCURESTI</div>
          </div>
        </section>

        {/* NOUL CHENAR ROSU (doar după Generate) */}
        {generatedCode && (
          <div className="mt-6 w-full max-w-[1100px] border border-[#f1b5b5] bg-[#fdeaea] px-4 py-3">
            <p className="text-[15px] font-bold text-[#e30000]">
              Codul generat este{" "}
              <span className="font-extrabold">{generatedCode}</span> (valabil o
              singura data). Va rugam introduceti mai jos codul generat, apoi
              selectati butonul <span className="font-extrabold">Tip atestat</span>.
            </p>
          </div>
        )}

        {/* ALERT EXISTENT */}
        <div className="mt-6 w-full max-w-[1100px] border border-[#f1b5b5] bg-[#fdeaea] px-4 py-3">
          <p className="text-[15px] font-bold text-[#e30000]">
            Ai de sustinut un examen teoretic in 2026? NU uita sa achiti noul
            tarif de examinare teoretica in quantum de 100 de lei
          </p>
        </div>

        {/* COD CANDIDAT + BUTON GENEREAZA */}
        <div className="mt-10 flex w-full max-w-[1100px] items-center justify-between">
          <div className="flex items-center gap-4">
            <label className="text-[16px] font-bold text-black">
              Cod candidat
            </label>

            <input
              type="text"
              value={candidateCode}
              onChange={(e) => setCandidateCode(e.target.value)}
              className="h-[30px] w-[220px] border border-[#8c8c8c] px-2 text-[14px] outline-none"
            />
          </div>

          <button
            type="button"
            onClick={handleGenerate}
            className="h-[34px] px-6 rounded-sm bg-[#5cb85c] text-[14px] font-bold text-white flex items-center justify-center"
          >
            Genereaza cod
          </button>
        </div>

        {/* TIP ATESTAT - activ doar dacă e codul corect */}
        <div className="mt-20">
          <button
  type="button"
  disabled={!isValid}
  onClick={() => {
    if (!isValid) return;
    navigate("/tip-atestat", {
      state: { code: generatedCode },
    });
  }}
  className={[
    "h-[90px] w-[260px] border text-[18px] font-bold flex items-center justify-center",
    isValid
      ? "border-[#7f7f7f] bg-[#d6d6d6] text-black cursor-pointer"
      : "border-[#cfcfcf] bg-[#efefef] text-[#9a9a9a] cursor-not-allowed",
  ].join(" ")}
>
  Tip atestat
</button>


          {/* (opțional) un mic hint ca în aplicațiile vechi */}
          {generatedCode && !isValid && (
            <p className="mt-3 text-[13px] text-[#666]">
              Introdu codul generat ca să activezi butonul „Tip atestat”.
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
