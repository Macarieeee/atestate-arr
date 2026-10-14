import { Link, Navigate, useParams } from "react-router-dom";

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
  if (!atestat || !Object.hasOwn(titles, atestat)) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#5aa9e6] px-5 py-10 sm:px-8">
      <div className="w-full max-w-5xl">
        <Link to="/" className="inline-block rounded text-lg font-semibold text-[#083b66] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4">
          ← Înapoi la atestate
        </Link>
        <h1 className="mt-6 text-center text-3xl font-bold text-[#083b66] sm:text-4xl">
          {titles[atestat]}
        </h1>
        <p className="mt-3 text-center text-lg text-[#083b66]">Alege modul de pregătire</p>
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {modes.map(({ title, description, path, symbol }) => (
            <Link
              key={path}
              to={`${path}?atestat=${atestat}`}
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
