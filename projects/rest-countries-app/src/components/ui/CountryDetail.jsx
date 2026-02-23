import { ArrowLeft } from "lucide-react";
import BorderItem from "./BorderItem";

const items = ["France", "Germany", "Netherlands"];

export default function CountryDetail({
  image,
  name,
  naviteName,
  population,
  region,
  subRegion,
  capital,
  topLevelDomain,
  currencies,
  languages,
  borderCountries,
}) {
  return (
    <>
      <section className="flex flex-col w-full items-start px-8 py-6 gap-12">
        <button className="flex bg-dark-secondary py-2 px-5 text-dark-text gap-4 rounded-xs">
          <ArrowLeft size={24} />
          Back
        </button>

        {/* Data country.... */}
        <img
          src={image}
          alt={`Flag of ${name}`}
          className="w-full h-full object-cover"
        />

        <div className="space-y-2">
          {/* Data Country */}
          <div className="flex flex-col gap-2 space-y-2">
            <h3 className="text-dark-text font-bold text-xl">{name}</h3>
            <p className="text-dark-text text-base">
              <span className="font-semibold">Native Name:</span> {naviteName}
            </p>

            <p className="text-dark-text text-base">
              <span className="font-semibold">Population:</span> {population}
            </p>

            <p className="text-dark-text text-base">
              <span className="font-semibold">Region:</span> {region}
            </p>

            <p className="text-dark-text text-base">
              <span className="font-semibold">Sub Region:</span> {subRegion}
            </p>

            <p className="text-dark-text text-base">
              <span className="font-semibold">Capital:</span> {capital}
            </p>
          </div>
        </div>

        {/* Domain, languages.... */}
        <div className="flex flex-col gap-2 space-y-2">
          <p className="text-dark-text text-base">
            <span className="font-semibold">Top Level Domain:</span>{" "}
            {topLevelDomain}
          </p>

          <p className="text-dark-text text-base">
            <span className="font-semibold">Currencies:</span> {currencies}
          </p>

          <p className="text-dark-text text-base">
            <span className="font-semibold">Languages:</span> {languages}
          </p>
        </div>

        {/* Border Countries */}
        <div className="flex flex-col gap-2 space-y-2">
          <p className="text-dark-text text-base">
            <span className="font-semibold">Border Countries:</span>{" "}
            {borderCountries}
          </p>

					{/* List border countries */}
          <ul className="list-countries flex flex-wrap gap-4 mb-12">
						{items.map((item, index) => (
							<BorderItem key={index} item={item} />
						))}
          </ul>
        </div>
      </section>
    </>
  );
}
