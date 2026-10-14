import managerImage from "../assets/Atestat MANAGER.webp";
import inchiriereImage from "../assets/Atestat INCHIRIERE.jpg";
import taxiImage from "../assets/Atestat TAXI.jpg";

const categories = [
  { title: "Manager TAXI / Închiriere", image: managerImage, key: "manager-taxi-inchiriere" },
  { title: "Șofer Închiriere", image: inchiriereImage, key: "sofer-inchiriere" },
  { title: "Șofer TAXI", image: taxiImage, key: "sofer-taxi" },
];

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#5aa9e6] px-5 py-10 sm:px-8 xl:px-12">
      <div className="w-full max-w-[1440px]">
        <h1 className="mb-8 text-center text-3xl font-bold text-[#083b66] sm:text-4xl">
          Alege tipul de atestat
        </h1>

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6 xl:max-w-none xl:grid-cols-3">
          {categories.map(({ title, image, key }) => (
            <article
              key={title}
              className="group relative isolate flex min-h-[320px] items-end overflow-hidden rounded-2xl bg-slate-800 shadow-xl transition-[transform,box-shadow] duration-300 ease-out hover:shadow-2xl motion-safe:hover:-translate-y-2 motion-reduce:transition-none sm:min-h-[380px] xl:min-h-[500px]"
            >
              <img
                src={image}
                alt=""
                className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-105 motion-reduce:transition-none"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <h2 className="w-full p-7 text-3xl font-bold leading-tight text-white sm:p-8">
                {key ? (
                  <Link
                    to={`/pregatire/${key}`}
                    className="after:absolute after:inset-0 after:rounded-2xl focus:outline-none focus-visible:after:ring-4 focus-visible:after:ring-inset focus-visible:after:ring-white"
                  >
                    {title}
                  </Link>
                ) : title}
              </h2>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
import { Link } from "react-router-dom";
