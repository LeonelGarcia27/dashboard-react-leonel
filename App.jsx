import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Transacciones from "./pages/transacciones";
import Cuentas from "./pages/cuentas";

export default function App() {
  return (
    <BrowserRouter>
  <Routes>
    <Route index element={<Dashboard />} />
    <Route path="transacciones" element={<Transacciones />} />
    <Route path="cuentas" element={<Cuentas />} />
  </Routes>
</BrowserRouter>

  );
}
