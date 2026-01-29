import logo from "../assets/logo_arr.png";

export default function Navbar() {
  return (
    <header className="w-full bg-white">
      <div className="px-8 pt-4">
        <img
          src={logo}
          alt="ARR"
          className="h-[48px] w-auto"
          draggable={false}
        />
        <div className="mt-2 h-[2px] w-full bg-[#9e9e9e]" />
      </div>
    </header>
  );
}
