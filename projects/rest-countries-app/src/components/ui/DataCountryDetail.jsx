import countries from "../../../data/data.json";
import ListBorderCountries from "../list/ListBorderCountries";

export default function DataCountryDetail({ country }) {
  if (!country) return null;

  const borderCountries = country.borders
    ?.map((code) => countries.find((c) => c.alpha3Code === code))
    .filter(Boolean);

  return (
    <article className="flex flex-col space-y-6">
      <header>
        <h2 className="font-bold text-xl">{country.name}</h2>
      </header>

      <section className=" flex flex-col lg:flex-row lg:justify-between">
        <dl className="flex flex-col gap-2">
          <div>
            <dt className="font-semibold inline">Native Name:</dt>{" "}
            <dd className="inline">{country.nativeName}</dd>
          </div>

          <div>
            <dt className="font-semibold inline">Population:</dt>{" "}
            <dd className="inline">{country.population}</dd>
          </div>

          <div>
            <dt className="font-semibold inline">Region:</dt>{" "}
            <dd className="inline">{country.region}</dd>
          </div>

          <div>
            <dt className="font-semibold inline">Sub Region:</dt>{" "}
            <dd className="inline">{country.subregion}</dd>
          </div>

          <div>
            <dt className="font-semibold inline">Capital:</dt>{" "}
            <dd className="inline">{country.capital}</dd>
          </div>
        </dl>

        <dl className="flex flex-col gap-2">
          <div>
            <dt className="font-semibold inline">Top Level Domain:</dt>{" "}
            <dd className="inline">{country.topLevelDomain?.join(", ")}</dd>
          </div>

          <div>
            <dt className="font-semibold inline">Currencies:</dt>{" "}
            <dd className="inline">
              {country.currencies?.map((c) => c.name).join(", ")}
            </dd>
          </div>

          <div>
            <dt className="font-semibold inline">Languages:</dt>{" "}
            <dd className="inline">
              {country.languages?.map((l) => l.name).join(", ")}
            </dd>
          </div>
        </dl>
      </section>

      {/* Border Countries */}
      <section
        className="flex flex-col items-center gap-4
             lg:flex-row lg:justify-center lg:items-center lg:mt-8"
        aria-labelledby="border-countries"
      >
        <h3 id="border-countries" className="font-semibold text-base">
          Border Countries:
        </h3>

        <ListBorderCountries array={borderCountries} />
      </section>
    </article>
  );
}
