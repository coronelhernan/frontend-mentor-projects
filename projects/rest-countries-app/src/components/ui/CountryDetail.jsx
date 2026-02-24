import { ArrowLeft } from "lucide-react";
import DataCountryDetail from "./DataCountryDetail";

export default function CountryDetail({ image, name = "Holanda" }) {
  return (
    <>
      <section
        className="w-full grid grid-cols-1 gap-12 px-8 py-6
        lg:grid-cols-2 lg:px-18"
      >
        {/* Section main country data  */}
        <div className="flex flex-col gap-10 lg:gap-16">
          <nav aria-label="Back navigation">
            <button className="flex bg-dark-secondary py-2 px-5 text-dark-text gap-4 rounded-xs">
              <ArrowLeft size={24} />
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
    </>
  );
}
