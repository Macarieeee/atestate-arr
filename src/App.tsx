import { Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import TipAtestat from "./pages/TipAtestat";
import Examinare from "./pages/Examinare";
import Examen from "./pages/Examen";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/tip-atestat" element={<TipAtestat />} />
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route path="/examinare" element={<Examinare />} />
      <Route path="/examen" element={<Examen />} />
    </Routes>
  );
}
