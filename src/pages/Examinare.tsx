import { useUiLanguage } from "../uiLanguage";
import { useLocation, useNavigate } from "react-router-dom";

export default function Examinare() {
  const { language, t } = useUiLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const atestat =
    (location.state as { atestat?: string } | null)?.atestat || "Manager TAXI / inchiriere";

  return (
    <div className="min-h-screen w-full bg-white">

      <main className="px-8 pt-6">
        {/* TITLU */}
        <h1 className="text-[28px] font-bold text-[#0b5fa5]">
          {t(atestat)}
        </h1>

        {/* CHENAR INFO */}
        <section className="mt-4 w-full max-w-[1100px] border border-[#8c8c8c] bg-white px-6 py-4">
          <div className="grid grid-cols-[200px_1fr] gap-y-3 text-[16px] text-black">
            <div className="font-bold">{t("Nume")}</div>
            <div className="font-bold">{t("NUME TEST")}</div>

            <div className="font-bold">{t("Prenume")}</div>
            <div className="font-bold">{t("PRENUME TEST")}</div>

            <div className="font-bold">{t("CNP")}</div>
            <div className="font-bold">1234455998877</div>

            <div className="font-bold">{t("Stare examen")}</div>
            <div className="font-bold">{t("Neinceptut")}</div>
          </div>
        </section>

        {/* BUTOANE */}
        <div className="mt-20 flex max-w-[1100px] justify-between">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="h-[90px] w-[260px] border border-[#bdbdbd] bg-white text-[20px] font-bold rounded-md shadow-[0_0_0_2px_#e7e7e7]"
          >
            {t("Inapoi")}
          </button>

          <button
  type="button"
  onClick={() =>
    navigate(`/examen?limba=${language}`, {
      state: {
        atestat,
        nume: t("NUME TEST"),
        prenume: t("PRENUME TEST"),
        cnp: "1234455998877",
      },
    })
  }
  className="h-[90px] w-[260px] border border-[#bdbdbd] bg-white text-[20px] font-bold rounded-md shadow-[0_0_0_2px_#e7e7e7]"
>
  {t("Start examinare")}
</button>
        </div>
      </main>
    </div>
  );
}
