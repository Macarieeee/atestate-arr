import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

type TipAtestatRow = {
  tip: string;
  stare: string;
  ora: string;
};

export default function TipAtestat() {
  const navigate = useNavigate();
  const location = useLocation() as { state?: { code?: string } };

  const codGenerat = location?.state?.code ?? "";

  const candidat = {
    cod: codGenerat || "162377152",
    nume: "NUME TEST",
    prenume: "PRENUME TEST",
    cnp: "1234455998877",
  };

  const rows: TipAtestatRow[] = [
    { tip: "Manager TAXI / inchiriere", stare: "Neinceput", ora: "" },
  ];

  const handleSelectTestPartial = (row: TipAtestatRow) => {
    navigate("/examen", {
      state: {
        candidat,
        selectedTip: row.tip,
      },
    });
  };

  const handleSelectToateIntrebarile = () => {
    navigate("/toate-intrebarile");
  };

  return (
    <div className="min-h-screen w-full bg-[#5aa9e6] flex items-center justify-center py-4">
      {/* CONTAINER PRINCIPAL */}
      <div
        className="
          bg-[#f3f3f3] border border-[#8c8c8c] overflow-hidden rounded-sm
          w-[94vw] h-[92vh]
          md:w-[60vw] md:h-[90vh]
          flex flex-col
        "
      >
        {/* fără scroll în container */}
        <div className="h-full overflow-hidden">
          {/* SCALE pe mobil, normal pe desktop */}
          <div className="origin-top scale-[0.82] sm:scale-[0.88] md:scale-100">
            <Navbar />

            <main className="px-3 md:px-8 pt-3 md:pt-6 pb-4 md:pb-10">
              <h1 className="text-[20px] md:text-[28px] font-bold text-[#0b5fa5]">
                Selectie tip atestat
              </h1>

              {/* CARD INFO SUS */}
              <section className="mt-3 md:mt-4 w-full border border-[#8c8c8c] bg-[#e6e6e6] px-3 md:px-6 py-3 md:py-4 rounded-md">
                <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-y-2 text-[13px] md:text-[15px] text-black">
                  <div className="font-bold">Cod</div>
                  <div className="font-bold">{candidat.cod}</div>

                  <div className="font-bold">Nume</div>
                  <div className="font-bold">{candidat.nume}</div>

                  <div className="font-bold">Prenume</div>
                  <div className="font-bold">{candidat.prenume}</div>

                  <div className="font-bold">CNP</div>
                  <div className="font-bold">{candidat.cnp}</div>
                </div>
              </section>

              {/* DESKTOP TABLE (ca în screenshot) */}
              <section className="hidden md:block mt-4">
                <div className="w-full border border-[#2f2f2f] bg-white">
                  {/* header */}
                  <div className="grid grid-cols-[1.4fr_0.6fr_0.8fr_0.8fr] border-b border-[#2f2f2f] text-[14px] font-bold">
                    <div className="px-2 py-2 border-r border-[#2f2f2f]">
                      Tip atestat
                    </div>
                    <div className="px-2 py-2 border-r border-[#2f2f2f]">
                      Stare
                    </div>
                    <div className="px-2 py-2 border-r border-[#2f2f2f]">
                      Toate intrebarile
                    </div>
                    <div className="px-2 py-2">Test Partial</div>
                  </div>

                  {/* rows */}
                  {rows.map((r, idx) => (
                    <div
                      key={`${r.tip}-${idx}`}
                      className="grid grid-cols-[1.4fr_0.6fr_0.8fr_0.8fr] border-b border-[#2f2f2f] text-[14px]"
                    >
                      <div className="px-2 py-3 border-r border-[#2f2f2f]">
                        {r.tip}
                      </div>

                      <div className="px-2 py-3 border-r border-[#2f2f2f]">
                        {r.stare}
                      </div>

                      {/* BUTON TOATE INTREBARILE */}
                      <div className="px-2 py-2 border-r border-[#2f2f2f] flex items-center justify-center">
                        <button
                          onClick={handleSelectToateIntrebarile}
                          className="h-[42px] w-[100px] border border-[#7f7f7f] bg-[#d6d6d6] font-bold rounded-md shadow-sm"
                        >
                          Selecteaza
                        </button>
                      </div>

                      {/* BUTON TEST PARTIAL */}
                      <div className="px-2 py-2 flex items-center justify-center">
                        <button
                          onClick={() => handleSelectTestPartial(r)}
                          className="h-[42px] w-[100px] border border-[#7f7f7f] bg-[#d6d6d6] font-bold rounded-md shadow-sm"
                        >
                          Selecteaza
                        </button>
                      </div>
                    </div>
                  ))}

                  {/* empty rows */}
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div
                      key={`empty-${i}`}
                      className="grid grid-cols-[1.4fr_0.6fr_0.8fr_0.8fr] border-b border-[#2f2f2f]"
                    >
                      <div className="h-[52px] border-r border-[#2f2f2f]" />
                      <div className="h-[52px] border-r border-[#2f2f2f]" />
                      <div className="h-[52px] border-r border-[#2f2f2f]" />
                      <div className="h-[52px]" />
                    </div>
                  ))}
                </div>
              </section>

              {/* MOBILE (cards) - ACUM cu 2 variante */}
              <section className="md:hidden mt-3">
                <div className="space-y-2">
                  {rows.map((r, idx) => (
                    <div
                      key={`${r.tip}-${idx}`}
                      className="w-full border border-[#2f2f2f] bg-white rounded-md px-3 py-2"
                    >
                      <div className="text-[13px] font-bold text-black leading-snug">
                        {r.tip}
                      </div>

                      <div className="mt-1 text-[12px] text-black flex items-center justify-between">
                        <span className="font-bold">Stare:</span>
                        <span className="font-bold">{r.stare}</span>
                      </div>

                      <div className="text-[12px] text-black flex items-center justify-between">
                        <span className="font-bold">Ora:</span>
                        <span className="font-bold">{r.ora || "-"}</span>
                      </div>

                      {/* ✅ 2 butoane pe mobil */}
                      <div className="mt-2 grid grid-cols-2 gap-2">
                        <button
                          onClick={handleSelectToateIntrebarile}
                          className="h-[40px] w-full border border-[#7f7f7f] bg-[#d6d6d6] font-bold rounded-md text-[13px]"
                        >
                          Toate întrebările
                        </button>

                        <button
                          onClick={() => handleSelectTestPartial(r)}
                          className="h-[40px] w-full border border-[#7f7f7f] bg-[#d6d6d6] font-bold rounded-md text-[13px]"
                        >
                          Test parțial
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* BUTON INAPOI */}
              <div className="mt-4 md:mt-16">
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  className="
                    h-[54px] md:h-[78px]
                    w-full md:w-[240px]
                    border border-[#7f7f7f]
                    bg-[#d6d6d6]
                    text-[16px] md:text-[18px]
                    font-bold
                    rounded-md
                    shadow-sm
                  "
                >
                  Inapoi
                </button>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
