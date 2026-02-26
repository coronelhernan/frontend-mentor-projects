import { ArrowLeft } from "lucide-react";
import DataCountryDetail from "./DataCountryDetail";

export default function CountryDetail({ image, name }) {
  return (
    <section
      className="w-full grid grid-cols-1 gap-12 px-8 py-6
      lg:grid-cols-2 lg:px-18"
    >
      {/* Section main country data */}
      <div className="flex flex-col gap-10 lg:gap-16">
        <nav aria-label="Back navigation">
          <button
            className="flex bg-[var(--color-surface)] text-[var(--color-text)]
            py-2 px-5 gap-4 rounded-xs shadow-sm
            hover:opacity-80 transition"
            style={{boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}}
          >
            <ArrowLeft size={24} className="text-[var(--color-text)]" 
             
            />
            Back
          </button>
        </nav>

        <figure>
          <img
            src={image}
            alt={`Flag of ${name}`}
            className="w-full object-cover"
          />
        </figure>
      </div>

      {/* Section detail country data */}
      <DataCountryDetail />
    </section>
  );
}
