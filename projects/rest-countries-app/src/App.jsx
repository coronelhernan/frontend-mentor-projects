import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[var(--color-surface)] text-[var(--color-text)]">
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:name" element={<Detail />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
