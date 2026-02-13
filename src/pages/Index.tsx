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
    const code = String(Math.floor(10000000 + Math.random() * 90000000));
    setGeneratedCode(code);
  };

  return (
    <div className="min-h-screen w-full bg-[#5aa9e6] flex items-center justify-center py-4">
      {/* CONTAINER PRINCIPAL */}
      <div
        className="
          bg-[#f3f3f3] border border-[#8c8c8c] overflow-hidden rounded-sm
          w-[94vw] h-[92vh]
          md:w-[60vw] md:h-[90vh]
        "
      >
        {/* IMPORTANT: pe mobil vrem să încapă în ecran -> fără scroll în container */}
        <div className="h-full overflow-hidden md:overflow-y-auto">
          <Navbar />

          <main className="px-3 md:px-8 pt-3 md:pt-6 pb-4 md:pb-10">
            {/* TITLU (mai mic pe mobil) */}
            <h1 className="text-[22px] md:text-[32px] font-bold text-[#0b5fa5]">
              Selectie candidat
            </h1>

            {/* CARD INFO (mai compact pe mobil) */}
            <section className="mt-3 md:mt-6 w-full border border-[#8c8c8c] bg-[#e6e6e6] px-3 md:px-6 py-3 md:py-4 rounded-md">
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-y-2 md:gap-y-2 text-[14px] md:text-[16px] text-black">
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

            {/* ALERT COD GENERAT (compact) */}
            {generatedCode && (
              <div className="mt-3 md:mt-6 w-full border border-[#f1b5b5] bg-[#fdeaea] px-3 md:px-4 py-3 md:py-4 rounded-md">
                <p className="text-[13px] md:text-[15px] font-bold text-[#e30000] leading-snug md:leading-relaxed">
                  Codul generat este{" "}
                  <span className="font-extrabold">{generatedCode}</span>{" "}
                  (valabil o singura data). Introdu codul mai jos, apoi apasa{" "}
                  <span className="font-extrabold">Tip atestat</span>.
                </p>
              </div>
            )}

            {/* ALERT EXAMEN (compact) */}
            <div className="mt-3 md:mt-6 w-full border border-[#f1b5b5] bg-[#fdeaea] px-3 md:px-4 py-3 md:py-4 rounded-md">
              <p className="text-[13px] md:text-[15px] font-bold text-[#e30000] leading-snug md:leading-relaxed">
                Ai de sustinut un examen teoretic in 2026? NU uita sa achiti noul
                tarif de examinare teoretica in quantum de 100 de lei
              </p>
            </div>

            {/* BUTON + INPUT (compact pe mobil, ca să încapă) */}
            <div className="mt-4 md:mt-10 flex flex-col gap-4 md:gap-8 md:flex-row md:items-center md:justify-between">
              
              

              {/* Cod candidat */}
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4 w-full md:w-auto">
                <label className="text-[18px] md:text-[16px] font-extrabold md:font-bold text-black">
                  Cod candidat
                </label>

                <input
                  type="text"
                  value={candidateCode}
                  onChange={(e) => setCandidateCode(e.target.value)}
                  className="
                    h-[44px] md:h-[32px]
                    w-full md:w-[220px]
                    border border-[#8c8c8c]
                    px-3
                    text-[16px] md:text-[14px]
                    outline-none bg-white rounded-md
                  "
                />
              </div>
              
              {/* Genereaza cod */}
              <button
                type="button"
                onClick={handleGenerate}
                className="
                  h-[46px] md:h-[36px]
                  w-full md:w-auto
                  px-6 rounded-md bg-[#5cb85c]
                  text-[16px] md:text-[14px]
                  font-bold text-white
                  flex items-center justify-center shadow-sm
                "
              >
                Genereaza cod
              </button>
            </div>

            {/* TIP ATESTAT (compact + full width pe mobil) */}
            <div className="mt-4 md:mt-20">
              <button
                type="button"
                disabled={!isValid}
                onClick={() =>
                  isValid &&
                  navigate("/tip-atestat", { state: { code: generatedCode } })
                }
                className={[
                  `
                    h-[58px] md:h-[90px]
                    w-full md:w-[260px]
                    border
                    text-[16px] md:text-[18px]
                    font-bold
                    flex items-center justify-center
                    rounded-lg
                  `,
                  isValid
                    ? "border-[#7f7f7f] bg-[#d6d6d6] text-black cursor-pointer"
                    : "border-[#cfcfcf] bg-[#efefef] text-[#9a9a9a] cursor-not-allowed",
                ].join(" ")}
              >
                Tip atestat
              </button>

              {generatedCode && !isValid && (
                <p className="mt-2 text-[12px] text-[#666]">
                  Introdu codul generat ca sa activezi butonul.
                </p>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
