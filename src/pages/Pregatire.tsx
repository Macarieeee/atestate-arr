import { Link, Navigate, useParams, useSearchParams } from "react-router-dom";

import romanianImage from "../assets/romania.png";
import englishImage from "../assets/engleza.png";

const titles: Record<string, string> = {
  "sofer-taxi": "Șofer TAXI",
  "manager-taxi-inchiriere": "Manager TAXI / Închiriere",
  "sofer-inchiriere": "Șofer Închiriere",
};

const modes = [
  {
    title: "Mediu de învățare",
    description: "Parcurge toate întrebările și verifică răspunsurile.",
    path: "/toate-intrebarile",
    symbol: "01",
  },
  {
    title: "Test parțial",
    description: "Verifică-ți cunoștințele cu un test de examinare.",
    path: "/selectie-candidat",
    symbol: "02",
  },
];

export default function Pregatire() {
  const { atestat } = useParams();
  const [searchParams] = useSearchParams();
  const language = searchParams.get("limba");
  if (!atestat || !Object.hasOwn(titles, atestat)) {
    return <Navigate to="/" replace />;
  }

  const hasLanguages = atestat === "sofer-taxi" || atestat === "sofer-inchiriere";
  const chooseLanguage = hasLanguages && language !== "ro" && language !== "en";
  const selectedLanguage = hasLanguages && language === "en" ? "en" : "ro";

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#5aa9e6] px-5 py-10 sm:px-8">
      <div className="w-full max-w-5xl">
        <Link to={hasLanguages && !chooseLanguage ? `/pregatire/${atestat}` : "/"} className="inline-block rounded text-lg font-semibold text-[#083b66] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4">
          {hasLanguages && !chooseLanguage ? "← Înapoi la limbi" : "← Înapoi la atestate"}
        </Link>
        <h1 className="mt-6 text-center text-3xl font-bold text-[#083b66] sm:text-4xl">
          {titles[atestat]}
        </h1>
        <p className="mt-3 text-center text-lg text-[#083b66]">{chooseLanguage ? "Alege limba / Choose your language" : `Alege modul de pregătire${hasLanguages ? selectedLanguage === "en" ? " · English" : " · Română" : ""}`}</p>
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {chooseLanguage ? [
            { language: "ro", title: "Română", image: romanianImage },
            { language: "en", title: "English", image: englishImage },
          ].map(({ language, title, image }) => (
            <Link
              key={language}
              to={`/pregatire/${atestat}?limba=${language}`}
              className="group relative isolate flex min-h-[300px] items-end overflow-hidden rounded-2xl bg-slate-800 shadow-xl transition-[transform,box-shadow] duration-300 hover:shadow-2xl focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#083b66] motion-safe:hover:-translate-y-2 sm:min-h-[360px]"
            >
              <img src={image} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <h2 className="p-8 text-3xl font-bold text-white">{title}</h2>
            </Link>
          )) : modes.map(({ title, description, path, symbol }) => (
            <Link
              key={path}
              to={`${path}?atestat=${atestat}&limba=${selectedLanguage}`}
              className="flex min-h-[300px] flex-col justify-end rounded-2xl bg-white p-8 text-[#083b66] shadow-xl transition-[transform,box-shadow] duration-300 ease-out hover:shadow-2xl focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#083b66] motion-safe:hover:-translate-y-2 motion-reduce:transition-none sm:min-h-[360px]"
            >
              <span aria-hidden="true" className="mb-auto text-5xl font-bold text-blue-200">{symbol}</span>
              <h2 className="mt-8 text-3xl font-bold">{title}</h2>
              <p className="mt-3 text-lg text-slate-600">{description}</p>
              <span aria-hidden="true" className="mt-6 text-3xl">→</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
