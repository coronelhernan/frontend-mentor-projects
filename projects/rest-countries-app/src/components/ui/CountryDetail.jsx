import { ArrowLeft } from "lucide-react";
import Navbar from "../sections/Navbar";
import DataCountryDetail from "./DataCountryDetail";
import { Link } from "react-router-dom";

export default function CountryDetail({ country }) {
  return (
    <>
      {/* Navbar full width */}
      <Navbar />

      {/* Contenido */}
      <section className="w-full px-8 py-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Columna izquierda */}
          <div className="flex flex-col gap-10 lg:gap-16">
            <nav>
              <Link
                to="/"
                className="w-36 flex bg-[var(--color-surface)] text-[var(--color-text)]
                py-2 px-5 gap-4 rounded-xs shadow-sm
                hover:opacity-80 transition"
                style={{
                  boxShadow:
                    "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
                }}
              >
                <ArrowLeft size={24} />
                Back
              </Link>
            </nav>

            <figure>
              <img
                src={country.flag}
                alt={`Flag of ${country.name}`}
                className="w-full max-h-[400px] object-contain"
              />
            </figure>
          </div>

          {/* Columna derecha */}
          <DataCountryDetail country={country} />
        </div>
      </section>
    </>
  );
}
