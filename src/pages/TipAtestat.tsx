import Navbar from "../components/Navbar";
import { useLocation, useNavigate } from "react-router-dom";


type LocationState = {
  code?: string | null;
};

export default function TipAtestat() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = (location.state as LocationState) || {};
  const code = state.code || "106968767"; // fallback pt. refresh

  return (
    <div className="min-h-screen w-full bg-white">
      <Navbar />

      <main className="px-8 pt-6">
        <h1 className="text-[28px] font-bold text-[#0b5fa5]">
          Selectie tip atestat
        </h1>

        {/* CARD INFO */}
        <section className="mt-4 w-full max-w-[1100px] border border-[#8c8c8c] bg-white px-8 py-6">
          <div className="grid grid-cols-[180px_1fr] gap-y-4 text-[16px] text-black">
            <div className="font-bold">Cod</div>
            <div className="font-bold">{code}</div>

            <div className="font-bold">Nume</div>
            <div className="font-bold">NUME TEST</div>

            <div className="font-bold">Prenume</div>
            <div className="font-bold">PRENUME TEST</div>

            <div className="font-bold">CNP</div>
            <div className="font-bold">1234455998877</div>
          </div>
        </section>

        {/* TABEL */}
        <section className="mt-8 w-full max-w-[1200px]">
          <div className="overflow-hidden border border-black">
            {/* header */}
            <div className="grid grid-cols-[1.4fr_0.6fr_0.8fr_1.2fr] border-b border-black">
              <div className="px-3 py-2 text-[16px] font-normal border-r border-black">
                Tip atestat
              </div>
              <div className="px-3 py-2 text-[16px] font-normal border-r border-black">
                Stare
              </div>
              <div className="px-3 py-2 text-[16px] font-normal border-r border-black">
                Ora incepere
              </div>
              <div className="px-3 py-2 text-[16px] font-normal">
                {/* coloana goala (buton selecteaza) */}
              </div>
            </div>

            {/* row 1 */}
            <div className="grid grid-cols-[1.4fr_0.6fr_0.8fr_1.2fr] border-b border-black min-h-[72px]">
              <div className="px-3 py-4 text-[18px] border-r border-black">
                Manager TAXI / inchiriere
              </div>
              <div className="px-3 py-4 text-[18px] border-r border-black">
                Neinceptut
              </div>
              <div className="px-3 py-4 text-[18px] border-r border-black"></div>
              <div className="px-3 py-3 flex items-center">
                <button
  type="button"
  onClick={() =>
    navigate("/examinare", {
      state: {
        atestat: "Manager TAXI / inchiriere",
      },
    })
  }
  className="h-[44px] w-[190px] border border-[#bdbdbd] bg-white text-[20px] font-bold shadow-[0_0_0_2px_#e7e7e7] rounded-md"
>
  Selecteaza
</button>
              </div>
            </div>

            {/* row 2 */}
            <div className="grid grid-cols-[1.4fr_0.6fr_0.8fr_1.2fr] border-b border-black min-h-[72px]">
              <div className="border-r border-black" />
              <div className="border-r border-black" />
              <div className="border-r border-black" />
              <div />
            </div>

            {/* row 3 */}
            <div className="grid grid-cols-[1.4fr_0.6fr_0.8fr_1.2fr] border-b border-black min-h-[72px]">
              <div className="border-r border-black" />
              <div className="border-r border-black" />
              <div className="border-r border-black" />
              <div />
            </div>

            {/* row 4 */}
            <div className="grid grid-cols-[1.4fr_0.6fr_0.8fr_1.2fr] min-h-[72px]">
              <div className="border-r border-black" />
              <div className="border-r border-black" />
              <div className="border-r border-black" />
              <div />
            </div>
          </div>
        </section>

        {/* INAPOI */}
        <div className="mt-16">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="h-[90px] w-[260px] border border-[#bdbdbd] bg-white text-[20px] font-bold rounded-md shadow-[0_0_0_2px_#e7e7e7]"
          >
            Inapoi
          </button>
        </div>
      </main>
    </div>
  );
}
