import { Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Home from "./pages/Home";
import Pregatire from "./pages/Pregatire";
import TipAtestat from "./pages/TipAtestat";
import Examinare from "./pages/Examinare";
import Examen from "./pages/Examen";
import ToateIntrebarile from "./pages/ToateIntrebarile";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pregatire/:atestat" element={<Pregatire />} />
      <Route path="/selectie-candidat" element={<Index />} />
      <Route path="/tip-atestat" element={<TipAtestat />} />
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route path="/examinare" element={<Examinare />} />
      <Route path="/examen" element={<Examen />} />
      <Route path="/toate-intrebarile" element={<ToateIntrebarile />} />
    </Routes>
  );
}
